// components/Hero.jsx
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className=" text-black min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to MyWebsite
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mb-8 max-w-xl mx-auto">
          We create amazing experiences for your users. Your journey starts here.
        </p>

        {/* Primary CTA */}
        <Link
          href="/get-started"
          className="bg-green-500 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;