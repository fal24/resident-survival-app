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
      {mod.tlDr && <p className="text-gray-600 mb-4">{mod.tlDr}</p>}

      {mod.sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">{section.heading}</h2>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            {section.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Detail;
