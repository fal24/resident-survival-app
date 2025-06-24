import React, { useState } from "react";
import { Link } from "react-router-dom";
import modules from "./data/modules.json";

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
        <ul className="space-y-3">
          {filteredModules.map((mod) => (
            <li key={mod.slug}>
              <Link
                to={`/module/${mod.slug}`}
                className="block bg-white p-4 rounded shadow hover:bg-blue-50 transition"
              >
                <h2 className="text-lg font-semibold text-blue-700">
                  {mod.title}
                </h2>
                {mod.tlDr && (
                  <p className="text-sm text-gray-600 mt-1">{mod.tlDr}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
