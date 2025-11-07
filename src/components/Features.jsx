import { Shield, MessageSquare, Zap, Target } from 'lucide-react';

const features = [
  {
    title: 'Human-like Sequences',
    description:
      'Multi-step outreach that adapts to replies, delays, and time zones — feels natural, not spammy.',
    icon: MessageSquare,
  },
  {
    title: 'Safety First',
    description:
      'Built-in limits, warmups, and randomization to keep your account safe with native-like behavior.',
    icon: Shield,
  },
  {
    title: '1:1 Personalization',
    description:
      'Dynamic templates that pull profile data and context so every message reads like you wrote it.',
    icon: Target,
  },
  {
    title: 'Fast to Go Live',
    description:
      'Import leads, pick a playbook, hit start. See replies and meetings in days, not weeks.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to win on LinkedIn</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Purpose-built to help you book more meetings while protecting your account and brand.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-xl transition">
              <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
