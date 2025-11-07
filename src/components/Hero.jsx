import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 mb-6 text-sm font-medium text-gray-700">
          <Sparkles className="h-4 w-4 text-purple-600" />
          New: Smart Sequences 2.0
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Grow on LinkedIn with intelligent, human‑like automation
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Book more meetings on autopilot. Personalize at scale, stay safe, and turn connections into customers.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-semibold shadow-lg shadow-purple-600/20 transition"
          >
            <Rocket className="h-5 w-5" />
            Start Free Trial
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-white/80 hover:bg-white text-gray-900 px-6 py-3 font-semibold border border-gray-200 backdrop-blur transition"
          >
            See how it works
          </a>
        </div>
        <p className="mt-3 text-sm text-gray-500">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
}
