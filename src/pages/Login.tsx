import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
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
            <span className="font-display-lg text-[32px] font-bold text-primary tracking-tight">ሸገር Petland</span>
          </Link>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Welcome back</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Sign in to track your interests, manage your profile, and explore premium pet accessories.</p>
        </div>

        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 md:p-8 soft-shadow">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="email">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 0"` }}>mail</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-3 bg-tertiary-fixed text-on-surface border border-outline rounded-lg focus:ring-1 focus:ring-primary focus:border-primary focus:bg-surface-container-lowest transition-colors inner-well font-body-md text-body-md placeholder:text-on-surface-variant/50" id="email" name="email" placeholder="hello@example.com" required type="email" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
                <Link className="font-label-md text-label-md text-primary hover:text-on-primary-fixed-variant transition-colors underline decoration-primary/30 underline-offset-4" to="/">Forgot password?</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 0"` }}>lock</span>
                </div>
                <input className="block w-full pl-10 pr-10 py-3 bg-tertiary-fixed text-on-surface border border-outline rounded-lg focus:ring-1 focus:ring-primary focus:border-primary focus:bg-surface-container-lowest transition-colors inner-well font-body-md text-body-md placeholder:text-on-surface-variant/50" id="password" name="password" placeholder="••••••••" required type="password" />
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface focus:outline-none transition-colors" type="button">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: `"'FILL' 0"` }}>visibility</span>
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input className="h-4 w-4 rounded border-outline text-primary focus:ring-primary bg-tertiary-fixed" id="remember-me" name="remember-me" type="checkbox" />
              <label className="ml-2 block font-body-md text-body-md text-on-surface-variant" htmlFor="remember-me">
                Remember me on this device
              </label>
            </div>

            <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-label-md text-label-md text-on-primary bg-primary hover:bg-on-primary-fixed-variant focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:-translate-y-0.5 transition-all duration-200" type="submit">
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              New to ሸገር Petland? 
              <Link className="font-label-md text-label-md text-secondary hover:text-on-secondary-fixed-variant transition-colors underline decoration-secondary/30 underline-offset-4 ml-1" to="/join">Create an account</Link>
            </p>
          </div>
        </div>


      </div>
    </main>
  );
};

export default Login;
