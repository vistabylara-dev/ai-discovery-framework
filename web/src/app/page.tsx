"use client";

import { useState } from "react";

export default function Home() {
  const [website, setWebsite] = useState("");

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-5xl px-8">

        <div className="mb-12">

          <h1 className="text-6xl font-bold mb-4">
            Vista AI Discovery Engine
          </h1>

          <p className="text-xl text-neutral-400">
            Analyze any company using autonomous AI workers.
          </p>

        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">

          <label className="block mb-4 text-sm uppercase tracking-widest text-neutral-400">
            Website URL
          </label>

          <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="https://company.com"
            className="w-full rounded-xl bg-black border border-neutral-700 px-5 py-4 outline-none focus:border-blue-500"
          />

          <button
            className="mt-6 w-full rounded-xl bg-blue-600 hover:bg-blue-700 transition py-4 font-semibold"
          >
            Analyze Website
          </button>

        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">

          <div className="rounded-xl bg-neutral-900 border border-neutral-800 p-6">
            <div className="text-sm text-neutral-500">
              Status
            </div>

            <div className="mt-3 text-green-400 text-2xl font-bold">
              Engine Ready
            </div>
          </div>

          <div className="rounded-xl bg-neutral-900 border border-neutral-800 p-6">
            <div className="text-sm text-neutral-500">
              Workers Loaded
            </div>

            <div className="mt-3 text-2xl font-bold">
              2
            </div>
          </div>

          <div className="rounded-xl bg-neutral-900 border border-neutral-800 p-6">
            <div className="text-sm text-neutral-500">
              Version
            </div>

            <div className="mt-3 text-2xl font-bold">
              0.1.0
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
