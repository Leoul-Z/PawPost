import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useStore } from '../context/StoreContext';

const residentsData = [
  {
    id: 'd1',
    name: 'Pongo',
    age: '2 Years Old',
    breed: 'Dalmatian',
    gender: 'Male',
    ageMonths: 24,
    category: 'dogs',
    badge: 'Available',
    badgeType: 'primary',
    image: '/images/dalmatian1.jpg',
    description: 'A very active and playful dalmatian who loves to run and play catch. Needs a family with a big backyard.'
  },
  {
    id: 'd2',
    name: 'Balto',
    age: '3 Years Old',
    breed: 'Siberian Husky',
    gender: 'Male',
    ageMonths: 36,
    category: 'dogs',
    badge: null,
    badgeType: 'primary',
    image: '/images/husky.jpg',
    description: 'High energy and very vocal. He loves long runs in the cold weather and is very affectionate with his owners.'
  },
  {
    id: 'd3',
    name: 'Titan',
    age: '4 Years Old',
    breed: 'Cane Corso',
    gender: 'Male',
    ageMonths: 48,
    category: 'dogs',
    badge: 'Reserved',
    badgeType: 'secondary',
    image: '/images/cane-corso.jpg',
    description: 'A gentle giant. Titan is very protective of his family but extremely calm and loving around children.'
  },
  {
    id: 'd4',
    name: 'Duke',
    age: '1 Year Old',
    breed: 'Doberman Pinscher',
    gender: 'Male',
    ageMonths: 12,
    category: 'dogs',
    badge: 'Available',
    badgeType: 'primary',
    image: '/images/doberman.jpg',
    description: 'Highly intelligent and trainable. Duke is loyal, fearless, and always alert, making him an excellent guard dog and companion.'
  }
];

const Residents = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { favorites, toggleFavorite } = useStore();
  const navigate = useNavigate();

  const tabs = [
    { id: 'all', label: 'All Residents' },
    { id: 'dogs', label: 'Dogs & Puppies' }
  ];

  const filteredResidents = residentsData
    .filter((resident) => activeTab === 'all' || resident.category === activeTab)
    .sort((a, b) => {
      if (sortBy === 'age-asc') return a.ageMonths - b.ageMonths;
      if (sortBy === 'age-desc') return b.ageMonths - a.ageMonths;
      return 0;
    });

  return (
    <main className="flex-1">
      <section className="border-surface-variant sticky top-[80px] bg-surface/90 backdrop-blur-md z-30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-3 flex justify-between items-center overflow-x-auto hide-scrollbar">
          <nav className="flex space-x-2 md:space-x-8 min-w-max" aria-label="Pet Categories">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full font-label-md text-label-md transition-colors ${activeTab === tab.id ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'}`} 
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4 ml-8 border-l border-outline-variant pl-8">
            <span className="font-body-md text-body-md text-on-surface-variant">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border-none text-primary font-label-md text-label-md focus:outline-none cursor-pointer pr-4" 
              aria-label="Sort residents"
            >
              <option value="newest">Newest Arrivals</option>
              <option value="age-asc">Age: Young to Old</option>
              <option value="age-desc">Age: Old to Young</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredResidents.map((resident) => (
            <article key={resident.id} className="group flex flex-col">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container mb-6 relative soft-shadow">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={resident.name} src={resident.image} />
                {resident.badge && (
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={resident.badgeType === 'primary' ? "bg-white/90 backdrop-blur-md text-primary px-3 py-1 rounded-full font-label-md text-[12px] shadow-sm uppercase tracking-wider" : "bg-secondary-container/90 backdrop-blur-md text-on-secondary-container px-3 py-1 rounded-full font-label-md text-[12px] shadow-sm uppercase tracking-wider"}>
                      {resident.badge}
                    </span>
                  </div>
                )}

                <button onClick={() => toggleFavorite(resident.id)} className={`absolute top-4 right-4 w-10 h-10 backdrop-blur-md rounded-full flex items-center justify-center transition-all shadow-sm transform hover:scale-110 active:scale-95 ${favorites[resident.id] ? 'bg-white text-primary' : 'bg-white/80 text-on-surface-variant hover:text-primary hover:bg-white'}`} aria-label={`Favorite ${resident.name}`} type="button">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' ${favorites[resident.id] ? '1' : '0'}"` }}>favorite</span>
                </button>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-end mb-2">
                  <h2 className="font-display-lg text-[28px] text-on-surface group-hover:text-primary transition-colors">{resident.name}</h2>
                  <span className="font-label-md text-[14px] text-secondary">{resident.age}</span>
                </div>
                <p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider mb-4 border-b border-surface-variant pb-4">{resident.breed} • {resident.gender}</p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3 flex-1">
                  {resident.description}
                </p>
                <div className="flex gap-4 mt-auto">
                  <button onClick={() => navigate(`/resident/${resident.id}`)} className="flex-1 bg-surface-container border border-outline-variant text-on-surface font-label-md text-label-md py-3 rounded-lg hover:border-primary hover:text-primary transition-colors" type="button">
                    Read Profile
                  </button>
                  <button onClick={() => alert(`Interest expressed for ${resident.name}!`)} className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg hover:bg-on-primary-fixed-variant transition-colors shadow-sm" type="button">
                    Express Interest
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredResidents.length === 0 && (
          <div className="mt-10 text-center py-20 bg-surface-container rounded-2xl">
             <h2 className="font-headline-md text-on-surface mb-2">No residents found in this category.</h2>
             <p className="text-on-surface-variant">Please check back later or view all residents.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Residents;
