"use client";

import { useEffect, useRef } from "react";

// Simulation runs at 1/SCALE resolution; browser CSS stretches it up smoothly
const SCALE   = 3;
const DAMPING = 0.987;

export default function WaterEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 1, H = 1;
    let cur: Float32Array, prev: Float32Array;
    let imgData: ImageData;
    let animId: number;

    /* ── setup / resize ─────────────────────────────────────── */
    const init = () => {
      const pw = canvas.parentElement?.offsetWidth  ?? window.innerWidth;
      const ph = canvas.parentElement?.offsetHeight ?? window.innerHeight;
      W = Math.max(4, Math.floor(pw / SCALE));
      H = Math.max(4, Math.floor(ph / SCALE));
      canvas.width  = W;
      canvas.height = H;
      cur  = new Float32Array(W * H);
      prev = new Float32Array(W * H);
      imgData = ctx.createImageData(W, H);
      // Pre-fill every pixel with the page background (#242424 = 36,36,36) so
      // the unrendered border rows are never left as black.
      for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i]     = 36; // R
        imgData.data[i + 1] = 36; // G
        imgData.data[i + 2] = 36; // B
        imgData.data[i + 3] = 255;
      }
    };
    init();

    /* ── drop a disturbance into the height field ───────────── */
    const drop = (px: number, py: number, strength: number, radius = 4) => {
      const cx = Math.floor(px / SCALE);
      const cy = Math.floor(py / SCALE);
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const x = cx + dx, y = cy + dy;
          if (x > 0 && x < W - 1 && y > 0 && y < H - 1) {
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d <= radius) prev[y * W + x] += strength * (1 - d / radius);
          }
        }
      }
    };

    /* ── mouse ──────────────────────────────────────────────── */
    const section = canvas.parentElement;
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      drop(e.clientX - r.left, e.clientY - r.top, 220, 4);
    };
    section?.addEventListener("mousemove", onMove);

    /* ── ambient rain ───────────────────────────────────────── */
    const rain = setInterval(() => {
      drop(
        Math.random() * (W * SCALE),
        Math.random() * (H * SCALE),
        60 + Math.random() * 60,
        2
      );
    }, 1000);

    /* ── physics step (2-D wave equation) ───────────────────── */
    const simulate = () => {
      for (let y = 1; y < H - 1; y++) {
        for (let x = 1; x < W - 1; x++) {
          const i = y * W + x;
          const n =
            cur[(y - 1) * W + x] +
            cur[(y + 1) * W + x] +
            cur[y * W + (x - 1)] +
            cur[y * W + (x + 1)];
          prev[i] = (n / 2 - prev[i]) * DAMPING;
        }
      }
      // swap buffers
      const tmp = cur; cur = prev; prev = tmp;
    };

    /* ── render height field as lit water surface ───────────── */
    // Light direction (top-left, slightly above)
    const LX = 0.25, LY = -0.6, LZ = 0.76;

    // Brand teal: #419ebc = (65,158,188). Delta from base (36,36,36), heavily faded.
    const TR = (65  - 36) * 0.18; //  5.2
    const TG = (158 - 36) * 0.18; // 22.0
    const TB = (188 - 36) * 0.18; // 27.4

    const render = () => {
      const d = imgData.data;
      for (let y = 1; y < H - 1; y++) {
        for (let x = 1; x < W - 1; x++) {
          const i = y * W + x;

          // Surface gradient → approximate normal
          const gx = cur[i + 1] - cur[i - 1];
          const gy = cur[i + W] - cur[i - W];
          const mag = Math.sqrt(gx * gx + gy * gy + 1);
          const nx = -gx / mag;
          const ny = -gy / mag;
          const nz = 1 / mag;

          // Phong lighting — soft specular highlight in brand teal
          const diff = Math.max(0, nx * LX + ny * LY + nz * LZ);
          const spec = Math.pow(diff, 28) * 55; // subtle glint

          // Depth tint — crests drift toward brand teal, troughs stay near base
          const tint = Math.tanh(Math.abs(cur[i]) * 0.010); // 0–1, slow rise

          const p = i * 4;
          // Base bg: #242424 = (36,36,36)
          d[p]     = Math.min(255, 36 + tint * TR + spec * 0.45); // R
          d[p + 1] = Math.min(255, 36 + tint * TG + spec * 0.72); // G
          d[p + 2] = Math.min(255, 36 + tint * TB + spec);          // B
        }
      }
      ctx.putImageData(imgData, 0, 0);
    };

    /* ── animation loop ─────────────────────────────────────── */
    const loop = () => {
      simulate();
      render();
      animId = requestAnimationFrame(loop);
    };
    loop();

    /* ── resize ─────────────────────────────────────────────── */
    const onResize = () => init();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(rain);
      window.removeEventListener("resize", onResize);
      section?.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
