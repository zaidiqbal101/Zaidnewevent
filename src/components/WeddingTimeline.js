import React from 'react';

const WeddingTimeline = () => {
  const ceremonies = [
    {
      name: 'Roka',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="6" />
          <path d="M12 8l2 2-2 2-2-2z" />
        </svg>
      ),
    },
    {
      name: 'Haldi',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="6" />
          <path d="M12 8C8 8 8 12 12 12C16 12 16 16 12 16" />
        </svg>
      ),
    },
    {
      name: 'Mehendi',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 12c0 5 7 8 7 8s7-3 7-8c0-3.5-3-6-7-6s-7 2.5-7 6z" />
          <path d="M12 6c-2 2-2 4 0 6c2-2 2-4 0-6z" />
        </svg>
      ),
    },
    {
      name: 'Shaadi',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 12h16" />
          <path d="M4 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z" />
          <path d="M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
        </svg>
      ),
    },
    {
      name: 'Reception',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 10v12" />
          <path d="M8 18h8" />
          <circle cx="12" cy="6" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative h-[40vh] bg-[#001a0f]"> {/* Changed from min-h-screen to h-[40vh] */}
      {/* Bamboo Forest Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
        backgroundImage: `url('/assets/roka.png')`
        }}
      />

      {/* Vertical Light Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 w-px bg-gradient-to-b from-transparent via-yellow-100/20 to-transparent"
            style={{
              left: `${i * 2}%`,
              height: '100%',
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-5 gap-8 w-full">
          {ceremonies.map((ceremony, index) => (
            <div key={ceremony.name} className="flex flex-col items-center">
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full border border-yellow-400/30 flex items-center justify-center mb-4">
                <div className="text-yellow-400">
                  {ceremony.icon}
                </div>
              </div>
              
              {/* Ceremony Name */}
              <span className="text-yellow-400 text-lg font-light">
                {ceremony.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingTimeline;