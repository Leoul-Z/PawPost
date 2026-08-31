import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="flex-grow">

<section className="relative w-full min-h-[700px] flex items-center overflow-hidden bg-[#fdfbf7] pt-6 md:pt-0">

  <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-[#d2bea9] opacity-70" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }}></div>
  <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

    <div className="flex flex-col items-start pt-4 pb-16 md:pt-8 md:pb-16">

      <div className="flex items-center gap-2 bg-[#f0eee7] text-[#8e8574] px-4 py-2 rounded-full font-label-md text-label-md mb-6 shadow-sm">
        <span className="material-symbols-outlined text-[18px]">pets</span>
        Premium Products for Happy Pets
      </div>

      <h1 className="font-display-lg text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1] text-[#1e1e1e] mb-6 font-bold tracking-tight text-balance">
        The Smarter Way to Care <br/>
        <span className="text-[#c4a484]">for the Ones Who Love You Most.</span>
      </h1>

      <div className="flex flex-wrap gap-4 mb-12">
        <button onClick={() => navigate('/shop')} className="bg-[#1e1e1e] text-white font-label-md text-label-md px-8 py-4 rounded-xl flex items-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          Shop Now
          <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
        </button>
        <button onClick={() => navigate('/shop')} className="bg-[#f0eee7] text-[#1e1e1e] font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-[#e4e1da] transition-all duration-300 shadow-sm">
          Explore Categories
        </button>
      </div>

      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-x-8 sm:gap-y-4">
        <div className="flex items-center gap-3 text-[#8e8574]">
          <span className="material-symbols-outlined text-[32px] text-[#c4a484] opacity-50" style={{ fontVariationSettings: `"'FILL' 0, 'wght' 200"` }}>pets</span>
          <span className="font-label-md text-[12px] leading-tight">Pet-Loving<br/>Essence</span>
        </div>
        <div className="flex items-center gap-3 text-[#8e8574]">
          <span className="material-symbols-outlined text-[32px] text-[#c4a484] opacity-50" style={{ fontVariationSettings: `"'FILL' 0, 'wght' 200"` }}>favorite</span>
          <span className="font-label-md text-[12px] leading-tight">Emotional<br/>Connection</span>
        </div>
        <div className="flex items-center gap-3 text-[#8e8574]">
          <span className="material-symbols-outlined text-[32px] text-[#c4a484] opacity-50" style={{ fontVariationSettings: `"'FILL' 0, 'wght' 200"` }}>verified_user</span>
          <span className="font-label-md text-[12px] leading-tight">Trust &<br/>Quality</span>
        </div>
        <div className="flex items-center gap-3 text-[#8e8574]">
          <span className="material-symbols-outlined text-[32px] text-[#c4a484] opacity-50" style={{ fontVariationSettings: `"'FILL' 0, 'wght' 200"` }}>volunteer_activism</span>
          <span className="font-label-md text-[12px] leading-tight">Togetherness<br/>& Care</span>
        </div>
      </div>
    </div>

    <div className="relative w-full flex items-center justify-center md:justify-end pb-4 md:pb-0">
      {/* Hero Image / Logo */}
      <img className="mb-24 sm:mb-28 md:mb-0 w-full max-w-[450px] sm:max-w-[600px] md:max-w-[550px] lg:max-w-[700px] h-auto object-contain drop-shadow-sm" src="/images/logo-transparent-v2.png" alt="Sheger Petland Logo" />
    </div>
  </div>
</section>
</main>
  );
};

export default Home;
