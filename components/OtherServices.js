import React, { useState } from 'react';

const services = {
  Install: [
    { title: 'Install Smart Lock', image: '/images/install-smart-lock.jpg' },
    { title: 'Replace Light Fixture', image: '/images/replace-light-fixture.jpg' },
    { title: 'Assemble Furniture', image: '/images/assemble-furniture.png' },
    { title: 'Install Baby Gate', image: '/images/install-baby-gate.png' },
    { title: 'Hang Shelves or TV', image: '/images/install-shelf.jpg' },
    { title: 'Replace Faucet', image: '/images/replace-faucet.png' },
  ],
  Fix: [
    { title: 'Replace Switches', image: '/images/replace-switches.png' },
    { title: 'Re-caulk Tub', image: '/images/re-caulk-tub.png' },
    { title: 'Repair Drywall', image: '/images/repair-drywall.png' },
    { title: 'Unclog Drain', image: '/images/unclog-drain.jpg' },
    { title: 'Fix Fence Panel', image: '/images/fix-fence-panel.png' },
    { title: 'Adjust Door Hardware', image: '/images/adjust-door-hardware.jpg' },
  ],
  Clean: [
    { title: 'Clean Dryer Vent', image: '/images/clean-dryer-vent.png' },
    { title: 'Power Wash Patio', image: '/images/power-wash-patio.png' },
    { title: 'Change Air Filter', image: '/images/change-air-filter.png' },
    { title: 'Dust High Surfaces', image: '/images/dusting.png' },
    { title: 'Clean Gutters', image: '/images/clean-gutters.png' },
    { title: 'Cobweb Removal', image: '/images/cobweb-removal.png' },
  ],
};

export default function OtherServices() {
  const [activeCategory, setActiveCategory] = useState('Install');

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Some Services We Can Help With</h2>
      
      <div className="flex justify-center mb-8">
        {Object.keys(services).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`mx-2 px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeCategory === category
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services[activeCategory].map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 text-sm">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}