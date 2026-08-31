const VisitUs = () => {
  return (
    <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div>
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4 block font-bold">Visit Us / Get in Touch</span>
          <h1 className="font-display-lg text-[40px] md:text-display-lg text-on-surface mb-6 leading-tight">Connect with ሸገር Petland</h1>
          <div className="prose prose-stone prose-p:font-body-md prose-p:text-on-surface-variant mb-10">
            <p>We operate primarily by direct consultation and scheduled appointments. Reach out to discuss puppy availability, arrange dog training sessions, or ask any pet care questions.</p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 1"` }}>call</span>
              </div>
              <div>
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2">Direct Contacts</h3>
                <div className="font-body-md text-body-md text-on-surface-variant space-y-1">
                  <a className="block hover:text-primary transition-colors" href="tel:+25161087804">Phone / Direct Call: +25161087804</a>
                  <a className="block hover:text-primary transition-colors" href="https://www.instagram.com/sheger_petland/?__pwa=1#" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a className="block hover:text-primary transition-colors" href="https://www.tiktok.com/@sheger_petnikita" target="_blank" rel="noopener noreferrer">TikTok</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 1"` }}>info</span>
              </div>
              <div>
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2">How It Works</h3>
                <dl className="grid grid-cols-1 gap-y-4 font-body-md text-body-md text-on-surface-variant">
                  <div>
                    <dt className="font-bold text-on-surface">Send a Message or Call:</dt>
                    <dd>Let us know what you need (puppy inquiry, behavioral training, or consultation).</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-on-surface">Schedule an Appointment:</dt>
                    <dd>We will arrange a time and share directions for an in-person visit or session.</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-on-surface">Connect with Us Online:</dt>
                    <dd>Follow our TikTok and Instagram pages for daily updates, available puppies, and quick training tips.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VisitUs;
