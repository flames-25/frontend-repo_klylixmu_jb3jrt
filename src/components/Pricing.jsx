import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '14-day trial',
    highlight: 'Best for trying us out',
    features: [
      '1 LinkedIn account',
      '100 actions/day',
      'Basic sequences',
      'Email support',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$79',
    period: '/month',
    highlight: 'Most popular',
    features: [
      '3 LinkedIn accounts',
      '300 actions/day',
      'Smart sequences',
      'A/B testing',
      'Team inbox',
      'Priority support',
    ],
    cta: 'Start 14-day Trial',
    popular: true,
  },
  {
    name: 'Scale',
    price: '$199',
    period: '/month',
    highlight: 'For agencies & teams',
    features: [
      '10 LinkedIn accounts',
      '600 actions/day',
      'Advanced personalization',
      'Webhooks & API',
      'SSO & permissions',
      'Dedicated CSM',
    ],
    cta: 'Talk to Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Start free. Upgrade only when you see results. Cancel anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border ${tier.popular ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'} bg-white p-6 flex flex-col`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-purple-600 text-white px-3 py-1 text-xs font-semibold shadow-sm">
                  Most popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500 mb-1">{tier.period}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{tier.highlight}</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-700 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className={`mt-auto inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold transition shadow ${tier.popular ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/20' : 'bg-gray-900 hover:bg-black text-white'}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">All plans include safety features that mimic human behavior and protect your account.</p>
      </div>
    </section>
  );
}
