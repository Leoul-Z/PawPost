
const VisitUs = () => {
  return (
    <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
      <div className="max-w-3xl mx-auto">

        <div>
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-4 block font-bold">Visit the Shop</span>
          <h1 className="font-display-lg text-[40px] md:text-display-lg text-on-surface mb-6 leading-tight">Come say hello.</h1>
          <div className="prose prose-stone prose-p:font-body-md prose-p:text-on-surface-variant mb-10">
            <p>Our physical storefront is a place to experience our goods tactilely, meet our current residents, and connect with other animal lovers in the community.</p>
            <p>Well-behaved, leashed companions are always welcome inside. We keep a jar of local sweet potato chews behind the counter just for them.</p>
          </div>

          <div className="space-y-8">

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 1"` }}>location_on</span>
              </div>
              <div>
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2">Location</h3>
                <address className="font-body-md text-body-md text-on-surface-variant not-italic leading-relaxed">
                  123 Sun-Drenched Lane<br />
                  Artisan District<br />
                  Portland, OR 97204
                </address>
                <button onClick={() => alert('Google Maps will open here.')} className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary mt-2 hover:text-primary transition-colors underline underline-offset-4 decoration-secondary/30 hover:decoration-primary/60" type="button">
                  Get Directions
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </button>
              </div>
            </div>


            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 1"` }}>schedule</span>
              </div>
              <div>
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2">Hours</h3>
                <dl className="grid grid-cols-2 gap-x-8 gap-y-1 font-body-md text-body-md text-on-surface-variant max-w-xs">
                  <dt>Monday - Friday</dt>
                  <dd className="text-right">10am — 6pm</dd>
                  <dt>Saturday</dt>
                  <dd className="text-right">9am — 7pm</dd>
                  <dt>Sunday</dt>
                  <dd className="text-right">11am — 5pm</dd>
                </dl>
              </div>
            </div>


            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 1"` }}>mail</span>
              </div>
              <div>
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2">Contact</h3>
                <div className="font-body-md text-body-md text-on-surface-variant space-y-1">
                  <a className="block hover:text-primary transition-colors" href="mailto:hello@pawpost.com">hello@pawpost.com</a>
                  <a className="block hover:text-primary transition-colors" href="tel:+15551234567">(555) 123-4567</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default VisitUs;
