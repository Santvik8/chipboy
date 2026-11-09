import { VERSION } from "./version";

const canvas = document.querySelector<HTMLCanvasElement>("#screen");
const ctx = canvas?.getContext("2d");

if (canvas && ctx) {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  ctx.font = "20px monospace";
  ctx.fillText(`chipboy ${VERSION} — no ROM loaded`, 20, 40);
}
