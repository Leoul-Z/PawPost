
const OurStory = () => {
  return (
    <main className="flex-1">

      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" data-alt="A candid, warm photograph of a craftsperson working in a sunlit studio, surrounded by natural materials like leather and cotton rope. The atmosphere is focused and serene." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFk9vMvB3_N6rY7h-pT8_J8D3Q_Z5wZ_g6H6T4W5z7X8Q9c2V5B8N7M6_b4T6C9J3Y5wZ_g6H6T4W5z7X8Q9c2V5B8N7M6_b4T6C9J3Y5wZ_g6H6T4W5z7X8Q9c2V5B8N7M6_b4T6C9J3Y5wZ_g6H6T4W5z7X8Q9c2" />
          <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4 block font-bold">Our Story</span>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 drop-shadow-sm">Crafted for Companionship</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto text-balance">
            Pawpost began with a simple belief: the objects we share with our animals should be as enduring and beautiful as the bonds we share with them.
          </p>
        </div>
      </section>



      <section className="py-20 bg-surface-container-highest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Our Principles</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">The standards we hold ourselves to, and the promises we make to you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-variant soft-shadow text-center">
              <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>handyman</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-surface mb-3">Craftsmanship</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">We prioritize traditional techniques and quality materials over mass manufacturing, ensuring every piece lasts.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-variant soft-shadow text-center">
              <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>public</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-surface mb-3">Sourcing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">We trace our materials to their origin, working exclusively with partners who share our commitment to ethical practices.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-variant soft-shadow text-center">
              <div className="w-16 h-16 bg-tertiary-container text-on-tertiary-container rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>favorite</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-surface mb-3">Community</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">We donate 5% of our annual profits to local animal rescues and sanctuaries, supporting those waiting for a home.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurStory;
