import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">LinkPilot</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Social proof</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#login" className="text-sm text-gray-700 hover:text-gray-900">Log in</a>
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-gray-900 hover:bg-black text-white px-4 py-2 text-sm font-semibold">Start free</a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Pricing />
        <div id="testimonials">
          <Testimonials />
        </div>
        <section id="signup" className="py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold">Ready to turn connections into customers?</h3>
            <p className="mt-3 text-gray-600">Create your account in 60 seconds. Cancel anytime.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
              <input
                type="email"
                required
                placeholder="Enter your work email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-semibold shadow-lg shadow-purple-600/20">Start free trial</button>
            </form>
            <p className="mt-3 text-xs text-gray-500">By creating an account, you agree to our Terms and Privacy Policy.</p>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} LinkPilot, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
