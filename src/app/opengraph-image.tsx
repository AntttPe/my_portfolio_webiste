import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Antoni (Antek) Pietraszewski - ICT engineering student at AGH Kraków, previously an intern at Relu BV";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#09090b";
const TEXT = "#fafafa";
const MUTED = "#a1a1aa";
const DIM = "#52525b";
const ACCENT = "#10b981";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "assets/og-photo.jpg"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: BG,
          color: TEXT,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 0 56px 72px",
          }}
        >
          <div style={{ display: "flex", fontSize: 24, color: ACCENT }}>
            $ whoami
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 84, lineHeight: 1, letterSpacing: -2 }}>
              Antek
            </div>
            <div
              style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: -2, color: MUTED }}
            >
              Pietraszewski.
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 36,
                fontSize: 28,
                color: MUTED,
                maxWidth: 620,
                lineHeight: 1.35,
              }}
            >
              ICT engineering student at AGH Kraków. Previously at Relu BV, working on production ML for 3D medical imaging.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", fontSize: 22, color: DIM }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                background: ACCENT,
                marginRight: 14,
              }}
            />
            <span style={{ color: ACCENT }}>Open to Summer 2027 internships</span>
            <span style={{ margin: "0 14px" }}>·</span>
            <span>Python · Java · C++</span>
          </div>
        </div>

        <div style={{ display: "flex", position: "relative", width: 430, height: "100%" }}>
          <img
            src={`data:image/jpeg;base64,${photo}`}
            width={430}
            height={630}
            style={{ objectFit: "cover", objectPosition: "top" }}
            alt=""
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 160,
              height: "100%",
              background: `linear-gradient(to right, ${BG}, rgba(9,9,11,0))`,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
