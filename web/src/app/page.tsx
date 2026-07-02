"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");

  async function runDiscovery() {
    const response = await fetch("/api/discovery", {
      method: "POST",
    });

    const json = await response.json();

    setResult(JSON.stringify(json, null, 2));
  }

  return (
    <main
      style={{
        padding: 40,
        fontFamily: "sans-serif",
      }}
    >
      <h1>Vista AI Discovery Engine</h1>

      <button
        onClick={runDiscovery}
        style={{
          padding: "12px 24px",
          marginTop: 20,
          cursor: "pointer",
        }}
      >
        Run Discovery
      </button>

      <pre
        style={{
          marginTop: 30,
          background: "#111",
          color: "#0f0",
          padding: 20,
          borderRadius: 8,
          overflowX: "auto",
        }}
      >
        {result}
      </pre>
    </main>
  );
}
