"use client";

import { useState } from "react";

export default function Home() {
  const [before, setBefore] = useState("");
  const [moment, setMoment] = useState("");
  const [after, setAfter] = useState("");
  const [testimonies, setTestimonies] = useState<any[]>([]);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!before || !moment || !after) return;

    setTestimonies([
      { before, moment, after, witness: 0 },
      ...testimonies,
    ]);

    setBefore("");
    setMoment("");
    setAfter("");
  }

  function addWitness(i: number) {
    const updated = [...testimonies];
    updated[i].witness += 1;
    setTestimonies(updated);
  }

  return (
    <main style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>1211 PROJECT</h1>
        <p style={styles.subtitle}>Real stories. Lost → Found.</p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          placeholder="Before..."
          value={before}
          onChange={(e) => setBefore(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="The Moment..."
          value={moment}
          onChange={(e) => setMoment(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="After..."
          value={after}
          onChange={(e) => setAfter(e.target.value)}
          style={styles.input}
        />

        <button style={styles.submit}>SUBMIT</button>
      </form>

      {/* TESTIMONIES */}
      <div style={styles.list}>
        {testimonies.map((t, i) => (
          <div key={i} style={styles.card}>
            <div>
              <p style={styles.label}>BEFORE</p>
              <p style={styles.text}>{t.before}</p>
            </div>

            <div>
              <p style={styles.label}>THE MOMENT</p>
              <p style={styles.text}>{t.moment}</p>
            </div>

            <div>
              <p style={styles.label}>AFTER</p>
              <p style={styles.text}>{t.after}</p>
            </div>

            <div style={styles.actions}>
              <button onClick={() => addWitness(i)} style={styles.button}>
                WITNESS 👍 {t.witness}
              </button>

              <button
                onClick={() =>
                  navigator.share
                    ? navigator.share({
                        title: "1211 Project",
                        text: `${t.before} → ${t.after}`,
                      })
                    : alert("Sharing not supported")
                }
                style={styles.button}
              >
                SHARE
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

/* STYLES */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0d0d0d",
    color: "#fff",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },

  header: {
    marginBottom: "40px",
    textAlign: "center" as const,
  },

  title: {
    fontSize: "36px",
    letterSpacing: "4px",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#888",
    marginTop: "8px",
  },

  form: {
    width: "100%",
    maxWidth: "600px",
    marginBottom: "50px",
  },

  input: {
    width: "100%",
    marginBottom: "12px",
    padding: "14px",
    background: "#1a1a1a",
    color: "#fff",
    border: "1px solid #333",
    outline: "none",
    fontSize: "14px",
  },

  submit: {
    width: "100%",
    padding: "12px",
    background: "#fff",
    color: "#000",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    letterSpacing: "1px",
  },

  list: {
    width: "100%",
    maxWidth: "700px",
  },

  card: {
    border: "1px solid #2a2a2a",
    padding: "20px",
    marginBottom: "20px",
    background: "#141414",
  },

  label: {
    fontSize: "11px",
    color: "#777",
    letterSpacing: "1px",
    marginBottom: "4px",
  },

  text: {
    marginBottom: "12px",
    lineHeight: "1.5",
  },

  actions: {
    marginTop: "10px",
  },

  button: {
    marginRight: "10px",
    padding: "6px 12px",
    background: "#2a2a2a",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};
