import { useState, useRef } from "react";
import axios from "axios";

export default function Demo() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setResult(null);
    if (file.type !== "application/dicom") {
      setPreview(URL.createObjectURL(file));
    }
  };

  const predict = async () => {
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    try {
      const res = await axios.post("http://localhost:4000/predict", formData);
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#0d1f35", fontFamily: "'DM Sans', sans-serif", color: "#f0f6fa" }}>
      {/* Atmospheric BG */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(29,78,110,0.5) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(77,184,200,0.12) 0%, transparent 60%)"
      }} />
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(77,184,200,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(77,184,200,0.04) 1px,transparent 1px)",
        backgroundSize: "48px 48px"
      }} />

      {/* NAV */}
      <nav style={{
        position: "relative", zIndex: 10, display: "flex", alignItems: "center",
        justifyContent: "space-between", padding: "20px 48px",
        borderBottom: "1px solid rgba(77,184,200,0.2)",
        background: "rgba(13,31,53,0.7)", backdropFilter: "blur(12px)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center",
            justifyContent: "center", fontWeight: 800, fontSize: 13, color: "#fff",
            background: "linear-gradient(135deg, #1a4a6b, #4db8c8)"
          }}>MI</div>
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: -0.3 }}>MedImaging Research</span>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          {["Home","Problem Statement","Research Objectives","Scope","Contact"].map(l => (
            <a key={l} href="#" style={{ fontSize: 14, color: "#8aacbe", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <button style={{
          background: "linear-gradient(135deg,#1a5c80,#4db8c8)", border: "none",
          borderRadius: 8, padding: "9px 22px", color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer"
        }}>Get Started</button>
      </nav>

      {/* MAIN */}
      <main style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "56px 32px 80px" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            border: "1px solid rgba(77,184,200,0.2)", background: "rgba(77,184,200,0.08)",
            borderRadius: 99, padding: "5px 14px", marginBottom: 20,
            fontSize: 12, color: "#4db8c8", letterSpacing: "0.08em", fontWeight: 500
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4db8c8", display: "inline-block" }} />
            PACS-DICOM Integration · Live Demo
          </div>
          <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, marginBottom: 16, letterSpacing: -1 }}>
            AI-Powered <span style={{ color: "#4db8c8" }}>Diagnostic</span><br />Image Analysis
          </h1>
          <p style={{ color: "#8aacbe", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
            Upload a medical image to receive an instant AI-assisted diagnostic assessment — powered by our real-time imaging pipeline.
          </p>
        </div>

        {/* GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

          {/* Upload Card */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(77,184,200,0.2)", borderRadius: 16, backdropFilter: "blur(12px)", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid rgba(77,184,200,0.2)", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(77,184,200,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🩻</div>
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.02em" }}>IMAGE INPUT</span>
            </div>
            <div style={{ padding: 24 }}>
              {/* Drop zone */}
              <label style={{
                display: "block", border: "2px dashed rgba(77,184,200,0.3)", borderRadius: 12,
                padding: "40px 20px", textAlign: "center", cursor: "pointer",
                background: "rgba(77,184,200,0.02)", transition: "all 0.2s"
              }}>
                <input ref={inputRef} type="file" accept=".png,.jpg,.jpeg,.dcm" onChange={handleFile} style={{ display: "none" }} />
                <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.7 }}>⬆</div>
                <div style={{ fontSize: 14, color: "#8aacbe", lineHeight: 1.6 }}>
                  <strong style={{ color: "#4db8c8" }}>Click to upload</strong> or drag & drop<br />your medical image here
                </div>
                <div style={{ fontSize: 11, color: "rgba(138,172,190,0.6)", marginTop: 8, letterSpacing: "0.05em" }}>
                  SUPPORTED: PNG · JPG · JPEG · DCM (DICOM)
                </div>
              </label>

              {/* Preview */}
              <div style={{
                marginTop: 20, borderRadius: 10, overflow: "hidden",
                border: "1px solid rgba(77,184,200,0.2)", background: "#000",
                minHeight: 180, display: "flex", alignItems: "center", justifyContent: "center", position: "relative"
              }}>
                {preview ? (
                  <>
                    <img src={preview} style={{ width: "100%", maxHeight: 280, objectFit: "contain" }} />
                    <span style={{
                      position: "absolute", top: 10, left: 10,
                      background: "rgba(13,31,53,0.85)", border: "1px solid rgba(77,184,200,0.2)",
                      borderRadius: 6, padding: "3px 8px", fontSize: 10, color: "#4db8c8", letterSpacing: "0.06em"
                    }}>DICOM · AXIAL</span>
                  </>
                ) : (
                  <div style={{ textAlign: "center", color: "#8aacbe", fontSize: 13, padding: 48 }}>
                    <div style={{ fontSize: 32, opacity: 0.2, marginBottom: 8 }}>🫁</div>
                    Image preview will appear here
                  </div>
                )}
              </div>

              {/* Run Button */}
              <button
                onClick={predict}
                disabled={!image || loading}
                style={{
                  width: "100%", padding: 15, marginTop: 16, cursor: image && !loading ? "pointer" : "not-allowed",
                  background: "linear-gradient(135deg,#1a5c80,#2a8fa8)", border: "1px solid rgba(77,184,200,0.4)",
                  borderRadius: 10, color: "#fff", fontSize: 15, fontWeight: 600, display: "flex",
                  alignItems: "center", justifyContent: "center", gap: 8,
                  opacity: !image || loading ? 0.5 : 1, transition: "all 0.2s"
                }}
              >
                {loading ? (
                  <>
                    <span style={{
                      width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "#fff", display: "inline-block", animation: "spin 0.7s linear infinite"
                    }} />
                    Analyzing Image...
                  </>
                ) : "⚡ Run AI Analysis"}
              </button>
            </div>
          </div>

          {/* Results Card */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(77,184,200,0.2)", borderRadius: 16, backdropFilter: "blur(12px)", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid rgba(77,184,200,0.2)", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(77,184,200,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>📊</div>
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.02em" }}>DIAGNOSTIC REPORT</span>
            </div>
            <div style={{ padding: 24 }}>
              {!result ? (
                <div style={{ textAlign: "center", padding: "48px 24px" }}>
                  <div style={{ fontSize: 40, opacity: 0.15, marginBottom: 12 }}>🔬</div>
                  <p style={{ fontSize: 13, color: "#8aacbe", lineHeight: 1.6 }}>
                    Upload an image and run analysis to receive<br />your AI-assisted diagnostic assessment.
                  </p>
                </div>
              ) : (
                <div>
                  {/* Primary Finding Badge */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "16px 20px",
                    borderRadius: 10, marginBottom: 20,
                    background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)"
                  }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 11, color: "#8aacbe", letterSpacing: "0.06em", marginBottom: 2 }}>PRIMARY FINDING</div>
                      <div style={{ fontSize: 17, fontWeight: 600 }}>{result.prediction}</div>
                    </div>
                  </div>

                  {/* Score bar */}
                  {result.score && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#8aacbe", marginBottom: 6 }}>
                        {/* <span>Confidence Score</span><span>{(result.score * 100).toFixed(1)}%</span> */}
                      </div>
                      <div style={{ height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${result.score * 100}%`, background: "#34d399", borderRadius: 99 }} />
                      </div>
                    </div>
                  )}

                  {/* Meta grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 16 }}>
                    {[
                      ["MODALITY", "Chest X-Ray"],
                      ["MODEL", "CXR-v2.1"],
                      ["STATUS", "Complete"],
                      ["PIPELINE", "PACS-DICOM"],
                    ].map(([label, val]) => (
                      <div key={label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "12px 14px" }}>
                        <div style={{ fontSize: 10, color: "#8aacbe", letterSpacing: "0.06em", marginBottom: 4 }}>{label}</div>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(77,184,200,0.2)" }}>
          {[["⚡","Real-Time Processing"],["🛡","HIPAA Compliant"],["🔒","End-to-End Encrypted"],["🌐","PACS-DICOM Ready"]].map(([icon, text]) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8aacbe" }}>
              <span style={{ color: "#4db8c8" }}>{icon}</span>{text}
            </div>
          ))}
        </div>
      </main>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}