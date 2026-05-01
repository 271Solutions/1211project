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
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 py-10">
      
      {/* Header */}
      <div className="mb-12 border-b border-neutral-800 pb-6">
        <h1 className="text-4xl font-bold tracking-wide uppercase">
          1211 Project
        </h1>
        <p className="text-neutral-400 mt-2">
          Real stories. Lost → Found.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-16 max-w-2xl">
        <textarea
          placeholder="Before..."
          value={before}
          onChange={(e) => setBefore(e.target.value)}
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded"
        />
        <textarea
          placeholder="The Moment..."
          value={moment}
          onChange={(e) => setMoment(e.target.value)}
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded"
        />
        <textarea
          placeholder="After..."
          value={after}
          onChange={(e) => setAfter(e.target.value)}
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded"
        />

        <button className="bg-white text-black px-6 py-2 font-semibold">
          Submit
        </button>
      </form>

      {/* Testimonies */}
      <div className="space-y-6 max-w-3xl">
        {testimonies.map((t, i) => (
          <div
            key={i}
            className="border border-neutral-800 p-5 bg-neutral-900 rounded"
          >
            <div className="mb-3">
              <p className="text-xs text-neutral-500 uppercase">Before</p>
              <p>{t.before}</p>
            </div>

            <div className="mb-3">
              <p className="text-xs text-neutral-500 uppercase">The Moment</p>
              <p>{t.moment}</p>
            </div>

            <div>
              <p className="text-xs text-neutral-500 uppercase">After</p>
              <p>{t.after}</p>
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => addWitness(i)}
                className="bg-neutral-800 px-3 py-1"
              >
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
                className="bg-neutral-800 px-3 py-1"
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
      ))}
    </main>
  );
}
