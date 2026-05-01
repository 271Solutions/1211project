
"use client";
import { useState } from "react";

export default function Home() {
  const [before, setBefore] = useState("");
  const [moment, setMoment] = useState("");
  const [after, setAfter] = useState("");
  const [testimonies, setTestimonies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!before || !moment || !after) return;

    const newTestimony = { before, moment, after, witness: 0 };
    setTestimonies([newTestimony, ...testimonies]);

    setBefore("");
    setMoment("");
    setAfter("");
  };

  const addWitness = (index) => {
    const updated = [...testimonies];
    updated[index].witness += 1;
    setTestimonies(updated);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#121212", color: "#fff", padding: "20px" }}>
      <h1>1211 Project</h1>

      <form onSubmit={handleSubmit}>
        <textarea placeholder="Before..." value={before} onChange={(e)=>setBefore(e.target.value)} />
        <textarea placeholder="The Moment..." value={moment} onChange={(e)=>setMoment(e.target.value)} />
        <textarea placeholder="After..." value={after} onChange={(e)=>setAfter(e.target.value)} />
        <button>Submit</button>
      </form>

      {testimonies.map((t, i)=>(
        <div key={i}>
          <p><b>Before:</b> {t.before}</p>
          <p><b>The Moment:</b> {t.moment}</p>
          <p><b>After:</b> {t.after}</p>
          <button onClick={()=>addWitness(i)}>Witness 👍 {t.witness}</button>
        </div>
      ))}
    </main>
  );
}
