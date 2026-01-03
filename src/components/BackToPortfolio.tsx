import React from 'react';
import { ArrowRight } from 'lucide-react';

const BackToPortfolio: React.FC = () => {
  return (
    <div className="mt-16 text-center">
      <a
        href="https://www.kate-hansen.com"
        className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        aria-label="Return to Kate Hansen's main portfolio website"
      >
        View My Full Portfolio
        <ArrowRight className="w-5 h-5" aria-hidden="true" />
      </a>
    </div>
  );
};

export default BackToPortfolio;
