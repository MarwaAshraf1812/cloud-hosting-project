import React from 'react';

interface InsightItem {
  label: string;
  value: string | number;
}

interface InsightsProps {
  items: InsightItem[];
}

function Insights({ items }: InsightsProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl text-blue-500 font-bold mb-5">Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border rounded-lg p-4"
          >
            <span className="text-gray-600">{item.label}</span>
            <span className="text-blue-500 font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Insights;
