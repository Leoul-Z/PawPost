import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useStore } from '../context/StoreContext';

const residentsData = [
  {
    id: 'r1',
    name: 'Barnaby',
    age: '3 Years Old',
    breed: 'Golden Retriever Mix',
    gender: 'Male',
    ageMonths: 36,
    category: 'dogs',
    badge: 'Available',
    badgeType: 'primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbJ5FfVhSZFmqh3FtwKyB0uh2-_RByTxtDs0x4EweKLCJag941iZhs5c41CJf356YP7nCC6mvEO04bWjxDOxFW_FJg_c5GYE_J_Cce-964pJPqoNFWnO_D0BuuSaGYlmxScD72dcL5SNSh2yg7UvKbPz4KQ2LMlGBzgLVNZNrkFUwl9evMeDmhh-Ch1AKYNIGLeyn3zLqHsL3f-w3qtkO4mdE9kEVcK59dxmZtsmcAkzjeNDSKRYcW',
    description: 'Barnaby is a gentle, old soul who appreciates slow morning walks, afternoon naps in sunbeams, and quiet companionship. He is excellent with children and other calm dogs.'
  },
  {
    id: 'r2',
    name: 'Luna',
    age: '4 Months',
    breed: 'Domestic Shorthair (Calico)',
    gender: 'Female',
    ageMonths: 4,
    category: 'cats',
    badge: null,
    badgeType: 'primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyCAJCKo8kpFTk4QlHGZrBizh5g0j1MCphsUG6XuF6IHp98Z1VuOYJ5P4rgI4DaR1RezjsBh4j4piXx5RGQ8RphRZLLFpaVQ9VLR9ZX_hepn9jKK_olQnrc7bd5gUVUKWDtL5b7g0_xsVnv_hE1xXFnsGb5hHghdd3On9FHncOlfq9u1qnlbwb2mjMHBO_8iD1rzSbqLsGYd8pxoThJgfDuapRfg_3vTTOfuJNNTDBy3Cw3aYTbfPd',
    description: 'Curious, fiercely independent, yet surprisingly cuddly when she tires herself out. Luna needs an environment with plenty of vertical space to explore and puzzle toys to keep her sharp mind engaged.'
  },
  {
    id: 'r3',
    name: 'Pip & Pop',
    age: '2 Years',
    breed: 'Holland Lop Rabbits',
    gender: 'Males',
    ageMonths: 24,
    category: 'small',
    badge: 'Bonded Pair',
    badgeType: 'secondary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD-_7W6pg9cMi45YqpGmmhs69YZuTN__WdwOJcD3PC5lQTVMacZGWsAwTppzpfgPXW2J_3cLRmEWYpkegfGX_oMTViX5gd-3ZW6Zr0Kt2E4My2bdOwx7Hti91k3dvRcPqqz90_3tAzJLYtsnuO12DwZYwXlgXXqINFI3JXJJGuKBWb0FiTGs_WB_ZTfBd4WNLy6j1AY-B2-qKnbbxq1tUsjLVCk5oA2yWD1xB0lRIq79PUTg0qM9eN',
    description: 'These two brothers must be purchased together. They are litter-trained, enjoy foraging for fresh herbs, and will happily binky around a bunny-proofed living room.'
  }
];

const Residents = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { favorites, toggleFavorite } = useStore();
  const navigate = useNavigate();

  const tabs = [
    { id: 'all', label: 'All Residents' },
    { id: 'dogs', label: 'Dogs & Puppies' },
    { id: 'cats', label: 'Cats & Kittens' },
    { id: 'small', label: 'Small Companions' },
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
                  <button onClick={() => alert(`Inquiry sent for ${resident.name}!`)} className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg hover:bg-on-primary-fixed-variant transition-colors shadow-sm" type="button">
                    Inquire
                  </button>
                </div>
              </div>
            </article>
          ))}

        </div>

        {filteredResidents.length > 0 && (
          <div className="mt-20 text-center">
            <button className="border-2 border-primary text-primary font-label-md text-label-md px-8 py-3 rounded-full hover:bg-primary hover:text-on-primary transition-colors duration-300" type="button">
              View More Residents
            </button>
          </div>
        )}
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
