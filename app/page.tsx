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
    <main style={{ padding: 20, background: "#111", color: "#fff", minHeight: "100vh" }}>
      <h1>1211 Project</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Before"
          value={before}
          onChange={(e) => setBefore(e.target.value)}
        />
        <br />

        <textarea
          placeholder="The Moment"
          value={moment}
          onChange={(e) => setMoment(e.target.value)}
        />
        <br />

        <textarea
          placeholder="After"
          value={after}
          onChange={(e) => setAfter(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      {testimonies.map((t, i) => (
        <div key={i} style={{ marginTop: 20 }}>
          <p><b>Before:</b> {t.before}</p>
          <p><b>The Moment:</b> {t.moment}</p>
          <p><b>After:</b> {t.after}</p>

          <button onClick={() => addWitness(i)}>
            Witness 👍 {t.witness}
          </button>
        </div>
      ))}
    </main>
  );
}
