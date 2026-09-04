import { useNavigate } from 'react-router-dom';
import Residents from './Residents';
import Shop from './Shop';
import OurStory from './OurStory';
import VisitUs from './VisitUs';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="flex-grow">

<section className="relative w-full min-h-[700px] flex items-center overflow-hidden bg-[#fdfbf7] pt-6 md:pt-0">

  <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-[#d2bea9] opacity-70" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }}></div>
  <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

    <div className="flex flex-col items-start pt-4 pb-16 md:pt-8 md:pb-16">

      <div className="flex items-center gap-2 bg-[#f0eee7] text-[#8e8574] px-4 py-2 rounded-full font-label-md text-label-md mb-6 shadow-sm">
        <span className="material-symbols-outlined text-[18px]">pets</span>
        Premium Products for Happy Pets
      </div>

      <h1 className="font-display-lg text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1] text-[#1e1e1e] mb-6 font-bold tracking-tight">
        The Smarter Way to Care <br className="hidden md:block" />
        <span className="text-[#c4a484]">for the Ones Who Love You Most.</span>
      </h1>
      
      {/* Mobile Wrapper for Buttons + Image */}
      <div className="flex items-center justify-between gap-4 w-full mb-8 md:mb-12 md:block">
        
        {/* Mobile Dog Image */}
        <div className="md:hidden w-[55%] flex justify-start relative -translate-x-4">
          <img className="w-full max-h-[280px] object-contain object-bottom drop-shadow-sm origin-bottom scale-[1.1]" src="/images/golden_retriever_hero.png" alt="Golden Retriever Hero" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 flex-1 md:flex-initial">
          <button onClick={() => navigate('/shop')} className="bg-[#1e1e1e] text-white font-label-md text-sm md:text-label-md px-4 md:px-8 py-2.5 md:py-4 rounded-xl flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
            Shop Now
            <span className="material-symbols-outlined text-[16px] md:text-[18px]">arrow_outward</span>
          </button>
          <button onClick={() => navigate('/residents')} className="bg-[#f0eee7] text-[#1e1e1e] font-label-md text-sm md:text-label-md px-4 md:px-8 py-2.5 md:py-4 rounded-xl hover:bg-[#e4e1da] transition-all duration-300 shadow-sm w-full sm:w-auto justify-center">
            Meet Our Pets
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:flex sm:flex-wrap sm:gap-x-12 sm:gap-y-6 w-full">
        <div className="flex items-center gap-4 text-[#8e8574]">
          <span className="material-symbols-outlined text-[32px] text-[#c4a484] opacity-50 shrink-0" style={{ fontVariationSettings: `"'FILL' 0, 'wght' 200"` }}>pets</span>
          <span className="font-label-md text-[13px] leading-tight">Pet-Loving<br/>Essence</span>
        </div>
        <div className="flex items-center gap-4 text-[#8e8574]">
          <span className="material-symbols-outlined text-[32px] text-[#c4a484] opacity-50 shrink-0" style={{ fontVariationSettings: `"'FILL' 0, 'wght' 200"` }}>favorite</span>
          <span className="font-label-md text-[13px] leading-tight">Emotional<br/>Connection</span>
        </div>
        <div className="flex items-center gap-4 text-[#8e8574]">
          <span className="material-symbols-outlined text-[32px] text-[#c4a484] opacity-50 shrink-0" style={{ fontVariationSettings: `"'FILL' 0, 'wght' 200"` }}>verified_user</span>
          <span className="font-label-md text-[13px] leading-tight">Trust &<br/>Quality</span>
        </div>
        <div className="flex items-center gap-4 text-[#8e8574]">
          <span className="material-symbols-outlined text-[32px] text-[#c4a484] opacity-50 shrink-0" style={{ fontVariationSettings: `"'FILL' 0, 'wght' 200"` }}>volunteer_activism</span>
          <span className="font-label-md text-[13px] leading-tight">Togetherness<br/>& Care</span>
        </div>
      </div>
    </div>

    <div className="hidden md:flex relative w-full self-stretch items-end justify-center min-h-[300px] md:min-h-[400px]">
      {/* Hero Image / Logo */}
      <img className="w-full h-full max-h-[400px] md:max-h-[600px] object-contain object-bottom drop-shadow-sm transform scale-[0.9] sm:scale-[1] md:scale-[1.1] lg:scale-[1.15] origin-bottom translate-y-2 md:translate-y-6 lg:translate-y-8" src="/images/golden_retriever_hero.png" alt="Golden Retriever Hero" />
    </div>
  </div>
</section>
</main>
      <div id="pets" className="pt-20 md:pt-28 pb-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-4 md:mb-8 text-center">
          <span className="font-display-lg text-[24px] md:text-[32px] text-primary uppercase tracking-widest mb-2 block font-bold">Meet the Residents</span>
        </div>
        <Residents />
      </div>

      <div id="shop" className="pt-20 md:pt-28 pb-12 border-t border-surface-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-4 md:mb-8 text-center">
          <span className="font-display-lg text-[24px] md:text-[32px] text-primary uppercase tracking-widest mb-2 block font-bold">Premium Products</span>
        </div>
        <Shop />
      </div>

      <div id="our-story" className="pt-20 md:pt-28 pb-12 border-t border-surface-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-4 md:mb-8 text-center">
          <span className="font-display-lg text-[24px] md:text-[32px] text-primary uppercase tracking-widest mb-2 block font-bold">About Us</span>
        </div>
        <OurStory />
      </div>

      <div id="contact" className="pt-20 md:pt-28 pb-12 border-t border-surface-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-4 md:mb-8 text-center">
          <span className="font-display-lg text-[24px] md:text-[32px] text-primary uppercase tracking-widest mb-2 block font-bold">Get In Touch</span>
        </div>
        <VisitUs />
      </div>
    </>
  );
};

export default Home;
