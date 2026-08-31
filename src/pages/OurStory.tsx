const OurStory = () => {
  return (
    <main className="flex-1">
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-surface-container-highest">
        <div className="absolute inset-0 z-0 flex items-center justify-center pt-20">
          <img className="h-4/5 w-auto object-contain opacity-20" src="/images/logo.jpg" alt="ሸገር Petland Logo Background" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto flex flex-col items-center">
          <img src="/images/logo.jpg" alt="ሸገር Petland Logo" className="w-32 h-32 rounded-full border-4 border-surface shadow-lg mb-8 bg-white" />
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4 block font-bold">Our Story</span>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-6 drop-shadow-sm">Driven by Passion, Built for Pet Lovers</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto text-balance">
            ሸገር Petland was founded with a straightforward goal: to raise the standard of pet ownership in Addis Ababa. We bridge the gap between families and happy, healthy companions through ethical breeding, professional canine training, and practical pet care education.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-variant soft-shadow text-center">
              <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>health_and_safety</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-surface mb-3">Ethical Breeding</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Healthy, well-socialized puppies with transparent vaccination records.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-variant soft-shadow text-center">
              <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>psychology</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-surface mb-3">Balanced Training</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Clear, positive behavioral guidance to help owners build trust with their dogs.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-variant soft-shadow text-center">
              <div className="w-16 h-16 bg-tertiary-container text-on-tertiary-container rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: `"'FILL' 1"` }}>favorite</span>
              </div>
              <h3 className="font-headline-md text-[20px] text-on-surface mb-3">Pet-First Mindset</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Practical care, honest advice, and ongoing support for the local pet community.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurStory;
