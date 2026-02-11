import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import postsDataRaw from "@/app/posts.json";

// --- Types & Data ---

type PostData = { id: string; date: string; title: string; image?: string };
const postsData = postsDataRaw as PostData[];

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function getPostData(id: string): PostData {
  const post = postsData.find((p) => p.id === id);
  if (!post) throw new Error(`Post not found: ${id}`);
  return post;
}

// --- Helpers ---

async function loadImage(relativePath: string): Promise<string | null> {
  try {
    const filePath = join(process.cwd(), "public", relativePath);
    const ext = relativePath.split(".").pop()?.toLowerCase() || "png";
    const mimeTypes: Record<string, string> = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
    };
    const data = await readFile(filePath, "base64");
    return `data:${mimeTypes[ext] || "image/png"};base64,${data}`;
  } catch {
    return null;
  }
}

// --- Root / Blog OG Image ---

export async function generateBlogOGImage() {
  const profileSrc = await loadImage("images/about/profile-no-bg.png");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#050505",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            // background:
            //   "radial-gradient(ellipse at 70% 50%, #15101e 0%, #050505 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "50px 64px",
            position: "relative",
          }}
        >
          {/* Left text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 72,
                  fontWeight: 700,
                  color: "#999",
                  lineHeight: 1.15,
                }}
              >
                Hi there,
              </span>
              <span
                style={{
                  fontSize: 72,
                  fontWeight: 700,
                  color: "#999",
                  lineHeight: 1.15,
                  marginTop: 4,
                }}
              >
                {"I'm "}
                <span
                  style={{ fontWeight: "bold", color: "white", marginLeft: 10 }}
                >
                  Vinicius
                </span>
                .
              </span>
            </div>
            <span
              style={{
                fontSize: 40,
                color: "#888",
                marginTop: 28,
                lineHeight: 1.5,
                width: 520,
              }}
            >
              I share ideas, launch products, and build things.
            </span>
            <span
              style={{
                fontSize: 28,
                color: "#777",
                marginTop: 48,
              }}
            >
              vinpac.io
            </span>
          </div>

          {/* Right - profile with orange circle (matching homepage) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 300,
              position: "relative",
            }}
          >
            {/* Solid orange circle behind profile */}
            <div
              style={{
                position: "absolute",
                width: 600,
                height: 600,
                borderRadius: 10000,
                background: "#fdba74",
                bottom: -240,
                right: -100,
                display: "flex",
              }}
            />
            {profileSrc && (
              <img
                src={profileSrc}
                width={600}
                height={600}
                style={{ position: "relative", bottom: -20, right: 40 }}
              />
            )}
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}

// --- About Page OG Image ---

export async function generateAboutOGImage() {
  const profileSrc = await loadImage("images/about/profile-no-bg.png");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#050505",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              "radial-gradient(ellipse at 70% 50%, #15101e 0%, #050505 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "50px 64px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <span
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: "white",
                lineHeight: 1.15,
              }}
            >
              Vinicius Pacheco
            </span>
            <span
              style={{
                fontSize: 28,
                color: "#f97316",
                marginTop: 12,
                fontWeight: 600,
              }}
            >
              Senior Software Engineer
            </span>
            <span
              style={{
                fontSize: 22,
                color: "#888",
                marginTop: 20,
                lineHeight: 1.5,
              }}
            >
              9+ years building SaaS, AI systems & real-time platforms
            </span>
            <span style={{ fontSize: 18, color: "#444", marginTop: 48 }}>
              vinpac.io
            </span>
          </div>

          {/* Right - profile with orange circle (matching homepage) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 300,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 240,
                height: 240,
                borderRadius: 120,
                background: "#fdba74",
                bottom: 40,
                display: "flex",
              }}
            />
            {profileSrc && (
              <img
                src={profileSrc}
                width={280}
                height={280}
                style={{ position: "relative", bottom: -16 }}
              />
            )}
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}

// --- Post OG Image ---

export async function generatePostOGImage(post: {
  title: string;
  date: string;
  image?: string;
}) {
  const avatarSrc = await loadImage("images/about/profile.jpeg");

  let postImageSrc: string | null = null;
  if (post.image) {
    postImageSrc = await loadImage(post.image.replace(/^\//, ""));
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const hasImage = !!postImageSrc;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#050505",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background: hasImage
              ? "radial-gradient(ellipse at 80% 50%, #15101e 0%, #050505 60%)"
              : "radial-gradient(ellipse at 50% 50%, #0f0a18 0%, #050505 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "50px 64px",
            position: "relative",
          }}
        >
          {/* Left content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              paddingRight: hasImage ? 40 : 0,
            }}
          >
            {/* Avatar + name + date */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {avatarSrc && (
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    overflow: "hidden",
                    display: "flex",
                  }}
                >
                  <img src={avatarSrc} width={60} height={60} />
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  marginTop: -8,
                  flexDirection: "column",
                }}
              >
                <span style={{ fontSize: 24, color: "#ccc", fontWeight: 600 }}>
                  Vinicius Pacheco
                </span>
                <span
                  style={{
                    fontSize: 16,
                    textTransform: "uppercase",
                    color: "#666",
                  }}
                >
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* Title */}
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: hasImage ? 44 : 52,
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.2,
                }}
              >
                {post.title}
              </span>
            </div>

            {/* Footer */}
            <span style={{ fontSize: 28, color: "#999" }}>vinpac.io</span>
          </div>

          {/* Right - post image */}
          {postImageSrc && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 380,
              }}
            >
              <div
                style={{
                  width: 350,
                  height: 350,
                  borderRadius: 16,
                  border: "1px solid #1a1a1a",
                  backgroundColor: "#111",
                  backgroundImage: `url(${postImageSrc})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  display: "flex",
                }}
              />
            </div>
          )}
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
