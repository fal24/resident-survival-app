import React from "react";
import { useParams, Link } from "react-router-dom";
import modules from "./data/modules.json";

function Detail() {
  const { slug } = useParams();
  const mod = modules.find((m) => m.slug === slug);

  if (!mod) {
    return <div className="p-4">Module not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline mb-4 block">
        ← Back to modules
      </Link>

      <h1 className="text-2xl font-bold mb-2">{mod.title}</h1>
      <p className="text-gray-600 mb-4">{mod.tlDr}</p>

      <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm">
        {mod.checklist.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Detail;
