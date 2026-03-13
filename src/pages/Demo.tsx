import { useState, useRef } from "react";
import axios from "axios";

export default function Demo() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div style={{ minHeight: "100vh", background: "#0d1f35", fontFamily: "'DM Sans', sans-serif", color: "#f0f6fa", overflowX: "hidden" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

        .demo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .strip-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px 36px;
        }
        .nav-links-desktop { display: flex; gap: 28px; }
        .nav-links-mobile { display: none; }
        .hamburger { display: none; }
        .hero-title { font-size: 40px; }

        @media (max-width: 900px) {
          .demo-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: flex !important; }
          .hero-title { font-size: 28px !important; }
        }
        .mobile-menu {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(13,31,53,0.98); z-index: 100;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 32px; animation: fadeIn 0.2s ease;
        }
        .mobile-menu a {
          font-size: 22px; color: #f0f6fa; text-decoration: none; font-weight: 500;
        }
        .upload-zone:hover { border-color: #4db8c8 !important; background: rgba(77,184,200,0.06) !important; }
        .run-btn:not(:disabled):hover {
          background: linear-gradient(135deg,#1f6d96,#35a8c2) !important;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(77,184,200,0.2);
        }
        .nav-link-item:hover { color: #4db8c8 !important; }
      `}</style>

      {/* Atmospheric BG */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(29,78,110,0.5) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(77,184,200,0.12) 0%, transparent 60%)" }} />
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(77,184,200,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(77,184,200,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#f0f6fa", fontSize: 28, cursor: "pointer" }}>✕</button>
          {["Home", "Problem Statement", "Research Objectives", "Scope", "Contact"].map(l => (
            <a key={l} href="#" onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
          <button style={{ background: "linear-gradient(135deg,#1a5c80,#4db8c8)", border: "none", borderRadius: 8, padding: "12px 32px", color: "#fff", fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Get Started</button>
        </div>
      )}

      {/* NAV */}
      <nav style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: "1px solid rgba(77,184,200,0.2)", background: "rgba(13,31,53,0.7)", backdropFilter: "blur(12px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: "#fff", background: "linear-gradient(135deg,#1a4a6b,#4db8c8)", flexShrink: 0 }}>MI</div>
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: -0.3, fontFamily: "'Syne', sans-serif" }}>MedImaging Research</span>
        </div>

        {/* Desktop Nav */}
        <div className="nav-links-desktop">
          {["Home", "Problem Statement", "Research Objectives", "Scope", "Contact"].map(l => (
            <a key={l} href="#" className="nav-link-item" style={{ fontSize: 13, color: "#8aacbe", textDecoration: "none", transition: "color 0.2s" }}>{l}</a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* <button style={{ background: "linear-gradient(135deg,#1a5c80,#4db8c8)", border: "none", borderRadius: 8, padding: "8px 18px", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>Get Started</button> */}
          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(true)} style={{ background: "none", border: "1px solid rgba(77,184,200,0.3)", borderRadius: 8, padding: "6px 10px", color: "#4db8c8", cursor: "pointer", fontSize: 18, display: "none", alignItems: "center" }}>☰</button>
        </div>
      </nav>

      {/* MAIN */}
      <main style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid rgba(77,184,200,0.2)", background: "rgba(77,184,200,0.08)", borderRadius: 99, padding: "5px 14px", marginBottom: 18, fontSize: 11, color: "#4db8c8", letterSpacing: "0.08em", fontWeight: 500 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4db8c8", display: "inline-block", animation: "pulse 2s infinite" }} />
            PACS-DICOM Integration · Live Demo
          </div>
          <h1 className="hero-title" style={{ fontWeight: 800, lineHeight: 1.1, marginBottom: 14, letterSpacing: -1, fontFamily: "'Syne', sans-serif" }}>
            AI-Powered <span style={{ color: "#4db8c8" }}>Diagnostic</span><br />Image Analysis
          </h1>
          <p style={{ color: "#8aacbe", fontSize: 15, maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
            Upload a medical image to receive an instant AI-assisted diagnostic assessment powered by our real-time imaging pipeline.
          </p>
        </div>

        {/* GRID */}
        <div className="demo-grid">

          {/* ── Upload Card ── */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(77,184,200,0.2)", borderRadius: 16, backdropFilter: "blur(12px)", overflow: "hidden" }}>
            <div style={{ padding: "18px 20px 14px", borderBottom: "1px solid rgba(77,184,200,0.2)", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(77,184,200,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>🩻</div>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", color: "#8aacbe" }}>IMAGE INPUT</span>
            </div>
            <div style={{ padding: "20px 16px" }}>

              {/* Drop Zone */}
              <label className="upload-zone" style={{ display: "block", border: "2px dashed rgba(77,184,200,0.3)", borderRadius: 12, padding: "36px 16px", textAlign: "center", cursor: "pointer", background: "rgba(77,184,200,0.02)", transition: "all 0.2s" }}>
                <input ref={inputRef} type="file" accept=".png,.jpg,.jpeg,.dcm" onChange={handleFile} style={{ display: "none" }} />
                <div style={{ fontSize: 28, marginBottom: 10, opacity: 0.7 }}>⬆</div>
                <div style={{ fontSize: 14, color: "#8aacbe", lineHeight: 1.6 }}>
                  <strong style={{ color: "#4db8c8" }}>Tap to upload</strong> or drag & drop<br />your medical image here
                </div>
                <div style={{ fontSize: 10, color: "rgba(138,172,190,0.55)", marginTop: 8, letterSpacing: "0.05em" }}>
                  PNG · JPG · JPEG · DCM (DICOM)
                </div>
              </label>

              {/* Preview */}
              <div style={{ marginTop: 16, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(77,184,200,0.2)", background: "#000", minHeight: 160, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                {preview ? (
                  <>
                    <img src={preview} alt="preview" style={{ width: "100%", maxHeight: 260, objectFit: "contain" }} />
                    <span style={{ position: "absolute", top: 8, left: 8, background: "rgba(13,31,53,0.85)", border: "1px solid rgba(77,184,200,0.2)", borderRadius: 6, padding: "3px 8px", fontSize: 10, color: "#4db8c8", letterSpacing: "0.06em" }}>DICOM · AXIAL</span>
                  </>
                ) : (
                  <div style={{ textAlign: "center", color: "#8aacbe", fontSize: 13, padding: "40px 24px" }}>
                    <div style={{ fontSize: 30, opacity: 0.2, marginBottom: 8 }}>🫁</div>
                    Image preview will appear here
                  </div>
                )}
              </div>

              {/* Run Button */}
              <button
                className="run-btn"
                onClick={predict}
                disabled={!image || loading}
                style={{ width: "100%", padding: "14px 0", marginTop: 14, cursor: image && !loading ? "pointer" : "not-allowed", background: "linear-gradient(135deg,#1a5c80,#2a8fa8)", border: "1px solid rgba(77,184,200,0.4)", borderRadius: 10, color: "#fff", fontSize: 15, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, opacity: !image || loading ? 0.5 : 1, transition: "all 0.2s" }}>
                {loading ? (
                  <>
                    <span style={{ width: 15, height: 15, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                    Analyzing Image...
                  </>
                ) : "⚡ Run AI Analysis"}
              </button>
            </div>
          </div>

          {/* ── Results Card ── */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(77,184,200,0.2)", borderRadius: 16, backdropFilter: "blur(12px)", overflow: "hidden" }}>
            <div style={{ padding: "18px 20px 14px", borderBottom: "1px solid rgba(77,184,200,0.2)", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(77,184,200,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>📊</div>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", color: "#8aacbe" }}>DIAGNOSTIC REPORT</span>
            </div>
            <div style={{ padding: "20px 16px" }}>
              {!result ? (
                <div style={{ textAlign: "center", padding: "52px 24px" }}>
                  <div style={{ fontSize: 38, opacity: 0.15, marginBottom: 12 }}>🔬</div>
                  <p style={{ fontSize: 13, color: "#8aacbe", lineHeight: 1.7 }}>
                    Upload an image and run analysis<br />to receive your AI-assisted diagnostic assessment.
                  </p>
                </div>
              ) : (
                <div style={{ animation: "fadeIn 0.4s ease" }}>
                  {/* Finding Badge */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 10, marginBottom: 20, background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 10, color: "#8aacbe", letterSpacing: "0.06em", marginBottom: 2 }}>PRIMARY FINDING</div>
                      <div style={{ fontSize: 16, fontWeight: 600 }}>{result.prediction}</div>
                    </div>
                  </div>

                  {/* Confidence bar */}
                  {result.score && (
                    <div style={{ marginBottom: 18 }}>
                      {/* <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#8aacbe", marginBottom: 6 }}>
                        <span>Confidence Score</span><span>{(result.score * 100).toFixed(1)}%</span>
                      </div> */}
                      <div style={{ height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${result.score * 100}%`, background: "#34d399", borderRadius: 99, transition: "width 1s ease" }} />
                      </div>
                    </div>
                  )}

                  {/* Meta Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {[["MODALITY", "Chest X-Ray"], ["MODEL", "CXR-v2.1"], ["STATUS", "Complete"], ["PIPELINE", "PACS-DICOM"]].map(([label, val]) => (
                      <div key={label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "10px 12px" }}>
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

        {/* Trust Strip */}
        <div className="strip-grid" style={{ marginTop: 44, paddingTop: 28, borderTop: "1px solid rgba(77,184,200,0.2)" }}>
          {[["⚡", "Real-Time Processing"], ["🛡", "HIPAA Compliant"], ["🔒", "End-to-End Encrypted"], ["🌐", "PACS-DICOM Ready"]].map(([icon, text]) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "#8aacbe" }}>
              <span style={{ color: "#4db8c8", fontSize: 15 }}>{icon}</span>{text}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}