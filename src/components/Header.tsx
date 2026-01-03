import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            UDL in Action: Inclusive Microlearning Courses
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
            Explore how UDL principles create flexible, engaging experiences in these instructional design examples.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;