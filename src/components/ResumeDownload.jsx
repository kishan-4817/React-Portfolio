import React, { useState } from 'react';

const ResumeDownload = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleDownload = () => {
    // Replace 'resume.pdf' with your actual resume file name
    const resumeUrl = '/resume/Kishan-Dhandhukiya-Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Kishan-Dhandhukiya-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleDownload}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:scale-110"
        aria-label="Download Resume"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </button>
      
      {/* Tooltip */}
      <div 
        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-secondary text-white text-sm rounded-lg shadow-lg transition-opacity duration-200 whitespace-nowrap ${
          showTooltip ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        Download Resume
        {/* Tooltip arrow */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-secondary rotate-45"></div>
      </div>
    </div>
  );
};

export default ResumeDownload; 