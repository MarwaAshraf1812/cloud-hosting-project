import React from 'react';
import WebHostingPlan from './WebHostingPlan';

function HostingPlans() {
  const plans = [
    {
      title: 'Basic',
      price: '$49.99/month',
      discount: '5%',
      features: [
        '100GB Storage',
        'Unlimited Bandwidth',
        '1 Website',
        'Free Domain for 1 Year',
        'Free SSL Certificate',
      ],
      buttonText: 'Choose Basic',
    },
    {
      title: 'Premium',
      price: '$99.99/month',
      discount: '10%',
      features: [
        'Unlimited Storage',
        'Unlimited Bandwidth',
        'Unlimited Websites',
        'Free Domain',
        'Free SSL Certificate',
      ],
      buttonText: 'Choose Premium',
    },
    {
      title: 'Enterprise',
      price: '$199.99/month',
      discount: '15%',
      features: [
        'Custom Storage',
        'Custom Bandwidth',
        'Priority Support',
        'Free Domain',
        'Free SSL Certificate',
      ],
      buttonText: 'Choose Enterprise',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-7 mb-20">
  <h1 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
    Web Hosting Plans
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:ms-0 ms-9">
    {plans.map((plan, index) => (
      <WebHostingPlan
        key={index}
        title={plan.title}
        price={plan.price}
        discount={plan.discount}
        features={plan.features}
        buttonText={plan.buttonText}
      />
    ))}
  </div>
</div>

  );
}

export default HostingPlans;
