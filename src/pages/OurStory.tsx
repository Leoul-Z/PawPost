const OurStory = () => {
  return (
    <main className="flex-1">
      <section className="relative w-full h-[60vh] min-h-[350px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-surface-container-highest py-10 sm:py-12 md:py-0">
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto flex flex-col items-center">
          <img src="/images/logo.jpg" alt="ሸገር Petland Logo" className="w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-surface shadow-lg mb-5 sm:mb-6 md:mb-8 bg-white" />
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-3 md:mb-4 block font-bold">Our Story</span>
          <h1 className="font-display-lg text-[28px] sm:text-[32px] md:text-[48px] text-on-surface mb-4 md:mb-6 drop-shadow-sm leading-tight">Driven by Passion, Built for Pet Lovers</h1>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-xl mx-auto text-balance">
            ሸገር Petland was founded with a straightforward goal: to raise the standard of pet ownership in Addis Ababa. We bridge the gap between families and happy, healthy companions through ethical breeding, professional canine training, and practical pet care education.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left mt-4 lg:mt-0">
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-3 md:mb-4 block font-bold">The Vision</span>
              <h2 className="font-display-lg text-[26px] sm:text-[28px] md:text-[36px] lg:text-[48px] text-on-surface mb-4 md:mb-6 leading-tight">Meet the Founder</h2>
              <div className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant space-y-4 md:space-y-6">
                <p>
                  At ሸገር Petland, our story begins with a profound love for animals and a vision to elevate the standards of pet care in our community. Every dog that comes through our doors is treated with the same respect, discipline, and affection we give our own.
                </p>
                <p>
                  We believe that a well-trained dog is a happy dog, and a well-informed owner is the key to a harmonious relationship. That's why we focus on ethical breeding, balanced training, and a deep understanding of canine psychology.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-none mx-auto w-full">
              <div className="absolute inset-0 bg-[#d2bea9] opacity-30 rounded-[2rem] transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 lg:translate-x-6 lg:translate-y-6 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                src="/images/founder.jfif" 
                alt="Founder of Sheger Petland" 
                className="relative z-10 w-full h-auto object-cover rounded-[2rem] shadow-xl aspect-[4/5] transition-transform duration-500 group-hover:-translate-y-1" 
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 sm:py-12 md:py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <div className="bg-surface-container-lowest p-5 sm:p-6 md:p-8 rounded-2xl border border-surface-variant soft-shadow text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6">
                <span className="material-symbols-outlined text-[24px] sm:text-[28px] md:text-[32px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>health_and_safety</span>
              </div>
              <h3 className="font-headline-md text-[16px] sm:text-[18px] md:text-[20px] text-on-surface mb-2 md:mb-3">Ethical Breeding</h3>
              <p className="font-body-md text-sm md:text-body-md text-on-surface-variant">Healthy, well-socialized puppies with transparent vaccination records.</p>
            </div>
            <div className="bg-surface-container-lowest p-5 sm:p-6 md:p-8 rounded-2xl border border-surface-variant soft-shadow text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6">
                <span className="material-symbols-outlined text-[24px] sm:text-[28px] md:text-[32px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>psychology</span>
              </div>
              <h3 className="font-headline-md text-[16px] sm:text-[18px] md:text-[20px] text-on-surface mb-2 md:mb-3">Balanced Training</h3>
              <p className="font-body-md text-sm md:text-body-md text-on-surface-variant">Clear, positive behavioral guidance to help owners build trust with their dogs.</p>
            </div>
            <div className="bg-surface-container-lowest p-5 sm:p-6 md:p-8 rounded-2xl border border-surface-variant soft-shadow text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-tertiary-container text-on-tertiary-container rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6">
                <span className="material-symbols-outlined text-[24px] sm:text-[28px] md:text-[32px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>favorite</span>
              </div>
              <h3 className="font-headline-md text-[16px] sm:text-[18px] md:text-[20px] text-on-surface mb-2 md:mb-3">Pet-First Mindset</h3>
              <p className="font-body-md text-sm md:text-body-md text-on-surface-variant">Practical care, honest advice, and ongoing support for the local pet community.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurStory;
