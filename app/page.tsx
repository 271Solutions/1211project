"use client";

import { useState } from "react";

export default function Home() {
  const [before, setBefore] = useState("");
  const [moment, setMoment] = useState("");
  const [after, setAfter] = useState("");
  const [testimonies, setTestimonies] = useState<any[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!before || !moment || !after) return;

    const newTestimony = { before, moment, after, witness: 0 };
    setTestimonies([newTestimony, ...testimonies]);

    setBefore("");
    setMoment("");
    setAfter("");
  };

  const addWitness = (i: number) => {
    const updated = [...testimonies];
    updated[i].witness += 1;
    setTestimonies(updated);
  };

  return (
    <main style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>1211 PROJECT</h1>
        <p style={styles.subtitle}>Real stories. Lost → Found.</p>
      </div>

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

        <button style={styles.submit}>Submit</button>
      </form>

      <div style={styles.list}>
        {testimonies.map((t, i) => (
          <div key={i} style={styles.card}>
            <div>
              <p style={styles.label}>Before</p>
              <p>{t.before}</p>
            </div>

            <div>
              <p style={styles.label}>The Moment</p>
              <p>{t.moment}</p>
            </div>

            <div>
              <p style={styles.label}>After</p>
              <p>{t.after}</p>
            </div>

            <div style={styles.actions}>
              <button onClick={() => addWitness(i)} style={styles.button}>
                Witness 👍 {t.witness}
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
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f0f0f",
    color: "#fff",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    marginBottom: "40px",
    borderBottom: "1px solid #333",
    paddingBottom: "10px",
  },
  title: {
    fontSize: "32px",
    letterSpacing: "2px",
  },
  subtitle: {
    color: "#888",
  },
  form: {
    maxWidth: "600px",
    marginBottom: "50px",
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "12px",
    background: "#1a1a1a",
    color: "#fff",
    border: "1px solid #333",
  },
  submit: {
    padding: "10px 20px",
    background: "#fff",
    color: "#000",
    border: "none",
    cursor: "pointer",
  },
  list: {
    maxWidth: "700px",
  },
  card: {
    border: "1px solid #333",
    padding: "20px",
    marginBottom: "20px",
    background: "#1a1a1a",
  },
  label: {
    fontSize: "12px",
    color: "#777",
    textTransform: "uppercase" as const,
  },
  actions: {
    marginTop: "15px",
  },
  button: {
    marginRight: "10px",
    padding: "6px 12px",
    background: "#333",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};
      ))}
    </main>
  );
}
