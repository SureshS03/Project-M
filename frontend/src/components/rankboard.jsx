import React, { useEffect, useState } from 'react';

export default function RankBoard() {
  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    fetch('/api/ranks')
      .then(res => res.json())
      .then(setRanks)
      .catch(console.error);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Leaderboard</h2>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">Rank</th>
                <th className="px-6 py-3 text-left text-sm font-medium">User</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {ranks.map((r, idx) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">#{idx + 1}</td>
                  <td className="px-6 py-4">{r.username}</td>
                  <td className="px-6 py-4">{r.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
