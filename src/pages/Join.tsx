import { Link, useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <main className="flex-1 flex items-center justify-center p-margin-mobile md:p-margin-desktop relative z-10">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <Link className="inline-block mb-4" to="/">
            <span className="font-display-lg text-display-lg font-bold text-primary tracking-tight">Pawpost</span>
          </Link>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Join the Family</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Create an account to track orders and save your favorite finds.</p>
        </div>

        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 md:p-8 soft-shadow relative overflow-hidden">

          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-fixed-dim/20 rounded-bl-full -mr-4 -mt-4 pointer-events-none"></div>
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="first-name">First Name</label>
                <input className="block w-full px-3 py-2.5 bg-tertiary-fixed text-on-surface border border-outline rounded-lg focus:ring-1 focus:ring-primary focus:border-primary focus:bg-surface-container-lowest transition-colors inner-well font-body-md text-body-md placeholder:text-on-surface-variant/50" id="first-name" name="first-name" required type="text" />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="last-name">Last Name</label>
                <input className="block w-full px-3 py-2.5 bg-tertiary-fixed text-on-surface border border-outline rounded-lg focus:ring-1 focus:ring-primary focus:border-primary focus:bg-surface-container-lowest transition-colors inner-well font-body-md text-body-md placeholder:text-on-surface-variant/50" id="last-name" name="last-name" required type="text" />
              </div>
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="email">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' 0"` }}>mail</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-2.5 bg-tertiary-fixed text-on-surface border border-outline rounded-lg focus:ring-1 focus:ring-primary focus:border-primary focus:bg-surface-container-lowest transition-colors inner-well font-body-md text-body-md placeholder:text-on-surface-variant/50" id="email" name="email" placeholder="hello@example.com" required type="email" />
              </div>
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="password">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' 0"` }}>lock</span>
                </div>
                <input className="block w-full pl-10 pr-10 py-2.5 bg-tertiary-fixed text-on-surface border border-outline rounded-lg focus:ring-1 focus:ring-primary focus:border-primary focus:bg-surface-container-lowest transition-colors inner-well font-body-md text-body-md placeholder:text-on-surface-variant/50" id="password" name="password" placeholder="••••••••" required type="password" />
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface focus:outline-none transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: `"'FILL' 0"` }}>visibility</span>
                </button>
              </div>
              <p className="font-caption text-caption text-on-surface-variant mt-2">Must be at least 8 characters long.</p>
            </div>

            <div className="flex items-start mt-4">
              <div className="flex items-center h-5">
                <input className="h-4 w-4 rounded border-outline text-primary focus:ring-primary bg-tertiary-fixed mt-0.5" id="terms" name="terms" required type="checkbox" />
              </div>
              <div className="ml-2">
                <label className="font-body-md text-body-md text-on-surface-variant" htmlFor="terms">
                  I agree to the <Link className="text-secondary hover:text-on-secondary-fixed-variant transition-colors underline decoration-secondary/30 underline-offset-4" to="/terms">Terms of Service</Link> and <Link className="text-secondary hover:text-on-secondary-fixed-variant transition-colors underline decoration-secondary/30 underline-offset-4" to="/privacy">Privacy Policy</Link>.
                </label>
              </div>
            </div>

            <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-label-md text-label-md text-on-primary bg-primary hover:bg-on-primary-fixed-variant focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:-translate-y-0.5 transition-all duration-200 mt-6" type="submit">
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center relative z-10 border-t border-surface-variant pt-6">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Already a member? 
              <Link className="font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant transition-colors underline decoration-primary/30 underline-offset-4 ml-1" to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Join;
