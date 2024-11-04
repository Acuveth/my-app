import React from 'react';

const features = [
  {
    title: "Feature One",
    description: "Explore our first feature, designed to provide you with unmatched value and quality.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL or path
  },
  {
    title: "Feature Two",
    description: "Our second feature is tailored to meet your needs, offering flexibility and reliability.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL or path
  },
  {
    title: "Feature Three",
    description: "The third feature is crafted with care to ensure seamless integration into your daily life.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URL or path
  },
];

const Features = () => {
  return (
    <div className="my-16 px-8 space-y-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 === 0 ? '' : 'md:flex-row-reverse'
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 md:px-8 mt-4 md:mt-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
            <p className="text-gray-700 text-lg">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
