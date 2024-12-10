import React from 'react';

interface WebHostingPlanProps {
  title: string;
  price: string;
  discount?: string;
  features: string[];
  buttonText: string;
}

function WebHostingPlan({ title, price, discount, features, buttonText }: WebHostingPlanProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 max-w-sm">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>

      <div className="mb-4">
        <strong className="text-xl text-blue-500">{price}</strong>
        {discount && (
          <span className="ml-3 text-sm text-green-500 font-medium">
            {discount} OFF
          </span>
        )}
      </div>

      <div className="mb-6">
        <h5 className="text-lg font-medium text-gray-700 mb-3">Top Features</h5>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        {buttonText}
      </button>
    </div>
  );
}

export default WebHostingPlan;
