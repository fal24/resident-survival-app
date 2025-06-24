import React, { useState } from "react";
import modules from "./data/modules.json";
import { Link } from "react-router-dom";

// inside map:
<Link to={`/module/${mod.slug}`}>
  <h2 className="text-lg font-semibold text-blue-700 hover:underline">{mod.title}</h2>
</Link>

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredModules = modules.filter((mod) =>
    mod.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resident Survival Companion</h1>
      <input
        type="text"
        placeholder="Search modules..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-6"
      />

      {filteredModules.length === 0 ? (
        <p className="text-gray-500">No matching modules found.</p>
      ) : (
        filteredModules.map((mod, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-4 shadow-md mb-4 border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-blue-700">{mod.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{mod.tlDr}</p>
            <ul className="list-disc list-inside text-sm text-gray-800">
              {mod.checklist.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
