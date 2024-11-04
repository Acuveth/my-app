import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$8",
      frequency: "/mo",
      features: [
        "10,000 Words",
        "Basic AI Model",
        "Standard Prompts",
        "Brand Voice & Tone",
        "Limited Translations",
      ],
      buttonLabel: "Get Basic Access",
      buttonStyle: "bg-gray-200 text-gray-800",
    },
    {
      name: "Standard",
      price: "$16",
      frequency: "/mo",
      features: [
        "50,000 Words",
        "Advanced AI Model",
        "Standard & Expert Prompts",
        "Custom Brand Voice & Tone",
        "Unlimited Translations",
      ],
      buttonLabel: "Get Standard Access",
      buttonStyle: "bg-black text-white",
    },
    {
      name: "Premium",
      price: "$32",
      frequency: "/mo",
      features: [
        "Unlimited Words",
        "Premium AI Model",
        "All Prompt Types",
        "Custom Brand Voice & Tone",
        "Priority Support",
      ],
      buttonLabel: "Get Premium Access",
      buttonStyle: "bg-gray-200 text-gray-800",
    },
  ];

  return (
    <div className="py-16 px-8 bg-white text-center">
      {/* Header Section */}
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Affordable Plans</h2>
      <p className="text-gray-500 mb-12">
        Choose the plan that fits your needs and get started with our powerful tools.
      </p>

      {/* Pricing Cards */}
      <div className="mx-24 grid gap-12 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="py-12 px-4 border rounded-lg bg-white text-gray-900"
        
          >
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <div className="flex justify-center items-baseline mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-lg">{plan.frequency}</span>
            </div>

            <ul className="mb-6 space-y-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center">
                  <span className="mr-2">✔</span> {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-96 py-3 rounded-md font-semibold ${plan.buttonStyle} hover:opacity-90`}
            >
              {plan.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
