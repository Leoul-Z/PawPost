import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const mockDatabase: Record<string, any> = {
  'r1': {
    id: 'r1',
    name: 'Barnaby',
    age: '3 Years Old',
    breed: 'Golden Retriever Mix',
    gender: 'Male',
    size: 'Large',
    price: 250,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbJ5FfVhSZFmqh3FtwKyB0uh2-_RByTxtDs0x4EweKLCJag941iZhs5c41CJf356YP7nCC6mvEO04bWjxDOxFW_FJg_c5GYE_J_Cce-964pJPqoNFWnO_D0BuuSaGYlmxScD72dcL5SNSh2yg7UvKbPz4KQ2LMlGBzgLVNZNrkFUwl9evMeDmhh-Ch1AKYNIGLeyn3zLqHsL3f-w3qtkO4mdE9kEVcK59dxmZtsmcAkzjeNDSKRYcW',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbJ5FfVhSZFmqh3FtwKyB0uh2-_RByTxtDs0x4EweKLCJag941iZhs5c41CJf356YP7nCC6mvEO04bWjxDOxFW_FJg_c5GYE_J_Cce-964pJPqoNFWnO_D0BuuSaGYlmxScD72dcL5SNSh2yg7UvKbPz4KQ2LMlGBzgLVNZNrkFUwl9evMeDmhh-Ch1AKYNIGLeyn3zLqHsL3f-w3qtkO4mdE9kEVcK59dxmZtsmcAkzjeNDSKRYcW'
    ],
    description: "Barnaby is a gentle, old soul who appreciates slow morning walks, afternoon naps in sunbeams, and quiet companionship. He is excellent with children and other calm dogs. Barnaby came to us from a local rescue and has been nothing but a sweetheart since his arrival. He is fully vaccinated, microchipped, and ready for his forever home.",
    health: ['Vaccinated', 'Microchipped', 'Neutered'],
    temperament: ['Gentle', 'Calm', 'Good with Kids'],
  },
  'r2': {
    id: 'r2',
    name: 'Luna',
    age: '4 Months',
    breed: 'Domestic Shorthair (Calico)',
    gender: 'Female',
    size: 'Small',
    price: 150,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyCAJCKo8kpFTk4QlHGZrBizh5g0j1MCphsUG6XuF6IHp98Z1VuOYJ5P4rgI4DaR1RezjsBh4j4piXx5RGQ8RphRZLLFpaVQ9VLR9ZX_hepn9jKK_olQnrc7bd5gUVUKWDtL5b7g0_xsVnv_hE1xXFnsGb5hHghdd3On9FHncOlfq9u1qnlbwb2mjMHBO_8iD1rzSbqLsGYd8pxoThJgfDuapRfg_3vTTOfuJNNTDBy3Cw3aYTbfPd',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyCAJCKo8kpFTk4QlHGZrBizh5g0j1MCphsUG6XuF6IHp98Z1VuOYJ5P4rgI4DaR1RezjsBh4j4piXx5RGQ8RphRZLLFpaVQ9VLR9ZX_hepn9jKK_olQnrc7bd5gUVUKWDtL5b7g0_xsVnv_hE1xXFnsGb5hHghdd3On9FHncOlfq9u1qnlbwb2mjMHBO_8iD1rzSbqLsGYd8pxoThJgfDuapRfg_3vTTOfuJNNTDBy3Cw3aYTbfPd'
    ],
    description: "Curious, fiercely independent, yet surprisingly cuddly when she tires herself out. Luna needs an environment with plenty of vertical space to explore and puzzle toys to keep her sharp mind engaged.",
    health: ['Vaccinated', 'Microchipped', 'Spayed'],
    temperament: ['Playful', 'Curious', 'Independent'],
  },
  'r3': {
    id: 'r3',
    name: 'Pip & Pop',
    age: '2 Years',
    breed: 'Holland Lop Rabbits',
    gender: 'Males',
    size: 'Small',
    price: 100,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBD-_7W6pg9cMi45YqpGmmhs69YZuTN__WdwOJcD3PC5lQTVMacZGWsAwTppzpfgPXW2J_3cLRmEWYpkegfGX_oMTViX5gd-3ZW6Zr0Kt2E4My2bdOwx7Hti91k3dvRcPqqz90_3tAzJLYtsnuO12DwZYwXlgXXqINFI3JXJJGuKBWb0FiTGs_WB_ZTfBd4WNLy6j1AY-B2-qKnbbxq1tUsjLVCk5oA2yWD1xB0lRIq79PUTg0qM9eN',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBD-_7W6pg9cMi45YqpGmmhs69YZuTN__WdwOJcD3PC5lQTVMacZGWsAwTppzpfgPXW2J_3cLRmEWYpkegfGX_oMTViX5gd-3ZW6Zr0Kt2E4My2bdOwx7Hti91k3dvRcPqqz90_3tAzJLYtsnuO12DwZYwXlgXXqINFI3JXJJGuKBWb0FiTGs_WB_ZTfBd4WNLy6j1AY-B2-qKnbbxq1tUsjLVCk5oA2yWD1xB0lRIq79PUTg0qM9eN'
    ],
    description: "These two brothers must be purchased together. They are litter-trained, enjoy foraging for fresh herbs, and will happily binky around a bunny-proofed living room.",
    health: ['Vet Checked', 'Neutered'],
    temperament: ['Bonded Pair', 'Docile', 'Herb Foragers'],
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

  const isFavorite = favorites[petDetails.id];

  const handlePurchase = () => {
    // Add the pet to the basket
    addToBasket({
      id: parseInt(petDetails.id.replace(/\D/g, '')) + 9000, // arbitrary ID for the basket
      name: `${petDetails.name}`,
      color: petDetails.breed,
      size: petDetails.age,
      price: petDetails.price,
      quantity: 1,
      image: petDetails.images[0]
    });
    alert(`${petDetails.name} added to your basket!`);
    navigate('/basket');
  };

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
            <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container relative">
              <img src={petDetails.images[0]} alt={petDetails.name} className="w-full h-full object-cover" />
              <button 
                onClick={() => toggleFavorite(petDetails.id)} 
                className={`absolute top-4 right-4 w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center transition-all shadow-sm transform hover:scale-110 active:scale-95 ${isFavorite ? 'bg-white text-primary' : 'bg-white/80 text-on-surface-variant hover:text-primary hover:bg-white'}`}
                aria-label="Toggle Favorite"
              >
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: `"'FILL' ${isFavorite ? '1' : '0'}"` }}>favorite</span>
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
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-md text-[12px] uppercase tracking-wider">Available for Purchase</span>
            </div>
            <h1 className="font-display-lg text-[48px] text-on-surface mb-2 leading-tight">{petDetails.name}</h1>
            <p className="font-headline-md text-on-surface-variant mb-6">{petDetails.breed} • {petDetails.gender}</p>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-display-md text-[32px] text-primary">Br {petDetails.price.toFixed(2)}</span>
              <span className="font-body-md text-on-surface-variant">Price</span>
            </div>


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
              <button onClick={handlePurchase} className="w-full bg-primary text-on-primary font-label-lg py-4 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-1">
                <span className="material-symbols-outlined">shopping_cart</span>
                Buy Now
              </button>
              <button onClick={() => alert("We've sent you an email with details!")} className="w-full bg-surface-container border border-outline text-on-surface font-label-lg py-4 rounded-xl hover:bg-surface-container-highest transition-colors">
                Inquire About {petDetails.name}
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
