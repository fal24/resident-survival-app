import { useState } from "react";

const modules = [
  {
    title: "Hyponatremia Management",
    category: "Electrolytes",
    tlDr: "Assess volume status. serum osmolality, urine Na and osmolality; treat based on underlying cause and acuity.",
    checklist: [
      "Check serum osm; urine osm, urine Na",
      "Assess volume status (hypo/euvo/hyper)",
      "If acute & symptomatic → hypertonic saline + desmopressin clamp",
      "Avoid correcting >8 mEq/L in 24 hrs",
      "Chronic → slow correction, address underlying cause"
    ]
  }
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredModules = modules.filter((mod) =>
    mod.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 w-full border rounded"
      />

      {filteredModules.map((mod, idx) => (
        <div key={idx} className="mb-4 p-4 border rounded shadow">
          <h2 className="font-semibold text-lg mb-1">{mod.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{mod.category}</p>
          <p className="mb-2 text-sm">💡 {mod.tlDr}</p>
          <ul className="list-disc ml-5 text-sm">
            {mod.checklist.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Register service worker for PWA support (if in production)
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch((regErr) => {
      console.error("Service worker registration failed:", regErr);
    });
  });
}