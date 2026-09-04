import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const mockDatabase: Record<string, any> = {
  'd1': {
    id: 'd1',
    name: 'Pongo',
    age: '2 Years Old',
    breed: 'Dalmatian',
    gender: 'Male',
    size: 'Large',
    images: [
      '/images/dalmatian1.jpg',
      '/images/dalmatian1.jpg'
    ],
    description: "A very active and playful dalmatian who loves to run and play catch. Needs a family with a big backyard. Pongo is fully vaccinated, microchipped, and ready for his forever home.",
    health: ['Vaccinated', 'Microchipped', 'Neutered'],
    temperament: ['Active', 'Playful', 'Energetic'],
  },
  'd2': {
    id: 'd2',
    name: 'Balto',
    age: '3 Years Old',
    breed: 'Siberian Husky',
    gender: 'Male',
    size: 'Large',
    images: [
      '/images/husky.jpg',
      '/images/husky.jpg'
    ],
    description: "High energy and very vocal. He loves long runs in the cold weather and is very affectionate with his owners. Balto needs an environment where he can burn off energy every day.",
    health: ['Vaccinated', 'Microchipped', 'Neutered'],
    temperament: ['Vocal', 'High Energy', 'Affectionate'],
  },
  'd3': {
    id: 'd3',
    name: 'Titan',
    age: '4 Years Old',
    breed: 'Cane Corso',
    gender: 'Male',
    size: 'Extra Large',
    images: [
      '/images/cane-corso.jpg',
      '/images/cane-corso.jpg'
    ],
    description: "A gentle giant. Titan is very protective of his family but extremely calm and loving around children. He is fully trained and walks perfectly on a leash.",
    health: ['Vet Checked', 'Neutered', 'Vaccinated'],
    temperament: ['Protective', 'Calm', 'Gentle'],
  },
  'd4': {
    id: 'd4',
    name: 'Duke',
    age: '1 Year Old',
    breed: 'Doberman Pinscher',
    gender: 'Male',
    size: 'Large',
    images: [
      '/images/doberman.jpg',
      '/images/doberman.jpg'
    ],
    description: "Highly intelligent and trainable. Duke is loyal, fearless, and always alert, making him an excellent guard dog and companion. He responds well to positive reinforcement training.",
    health: ['Vet Checked', 'Neutered', 'Vaccinated'],
    temperament: ['Intelligent', 'Loyal', 'Alert'],
  }
};

const ResidentDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toggleFavorite, favorites, addToBasket } = useStore();
  const petDetails = id ? mockDatabase[id] : null;

  if (!petDetails) {
    return (
      <main className="flex-1 bg-surface-container-lowest flex items-center justify-center p-20">
        <div className="text-center">
          <h1 className="font-display-lg text-[32px] mb-4 text-on-surface">Resident not found</h1>
          <button onClick={() => navigate('/residents')} className="text-primary underline">Return to Residents</button>
        </div>
      </main>
    );
  }


  return (
    <main className="flex-1 bg-surface-container-lowest pb-20">

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex items-center gap-2 text-on-surface-variant font-label-md">
        <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">Home</button>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <button onClick={() => navigate('/residents')} className="hover:text-primary transition-colors">Residents</button>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-primary">{petDetails.name}</span>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container relative">
              <img src={petDetails.images[0]} alt={petDetails.name} className="w-full h-full object-cover" />
              <button 
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(`resident_${petDetails.id}`); }} 
                className={`absolute top-4 right-4 w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center transition-all shadow-sm transform hover:scale-110 active:scale-95 ${favorites[`resident_${petDetails.id}`] ? 'bg-white text-primary' : 'bg-white/80 text-on-surface-variant hover:text-primary hover:bg-white'}`}
                aria-label="Toggle Favorite"
              >
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: `"'FILL' ${favorites[`resident_${petDetails.id}`] ? '1' : '0'}"` }}>favorite</span>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-surface-container border-2 border-primary">
                <img src={petDetails.images[0]} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden bg-surface-container border border-surface-variant cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <img src={petDetails.images[1]} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>


          <div className="flex flex-col py-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-md text-[12px] uppercase tracking-wider">Meet Me!</span>
            </div>
            <h1 className="font-display-lg text-[48px] text-on-surface mb-2 leading-tight">{petDetails.name}</h1>
            <p className="font-headline-md text-on-surface-variant mb-6">{petDetails.breed} • {petDetails.gender}</p>

            <div className="grid grid-cols-3 gap-4 mb-8 bg-surface-container rounded-xl p-4 border border-outline-variant/30">
              <div className="text-center">
                <span className="block font-caption text-on-surface-variant uppercase tracking-wider mb-1">Age</span>
                <span className="font-headline-sm text-on-surface">{petDetails.age}</span>
              </div>
              <div className="text-center border-l border-r border-outline-variant/30">
                <span className="block font-caption text-on-surface-variant uppercase tracking-wider mb-1">Gender</span>
                <span className="font-headline-sm text-on-surface">{petDetails.gender}</span>
              </div>
              <div className="text-center">
                <span className="block font-caption text-on-surface-variant uppercase tracking-wider mb-1">Size</span>
                <span className="font-headline-sm text-on-surface">{petDetails.size}</span>
              </div>
            </div>

            <p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed text-balance">
              {petDetails.description}
            </p>

            <div className="flex flex-col gap-4 mb-12">
              <button onClick={() => alert(`Your interest for ${petDetails.name} has been recorded! We'll contact you soon.`)} className="w-full bg-primary text-on-primary font-label-lg py-4 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-1">
                <span className="material-symbols-outlined">waving_hand</span>
                Express Interest
              </button>
              <button onClick={() => {
                addToBasket({
                  id: petDetails.id,
                  name: petDetails.name,
                  color: 'N/A',
                  size: petDetails.size || 'N/A',
                  price: 250,
                  quantity: 1,
                  image: petDetails.images[0]
                });
                alert(`Added ${petDetails.name} to basket!`);
              }} className="w-full bg-secondary text-on-secondary font-label-lg py-4 rounded-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-1">
                <span className="material-symbols-outlined">shopping_cart</span>
                Buy Now
              </button>
            </div>


            <div className="space-y-6 border-t border-surface-variant pt-8">
              <div>
                <h3 className="font-headline-sm text-on-surface mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">medical_services</span>
                  Health & Medical
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {petDetails.health.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 font-body-md text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-headline-sm text-on-surface mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
                  Temperament
                </h3>
                <div className="flex flex-wrap gap-2">
                  {petDetails.temperament.map((item: string, idx: number) => (
                    <span key={idx} className="bg-surface-container border border-surface-variant px-3 py-1 rounded-full font-body-md text-on-surface-variant">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ResidentDetail;
