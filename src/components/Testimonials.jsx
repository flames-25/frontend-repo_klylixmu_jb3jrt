import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Booked 14 meetings in the first month. The personalization feels like magic — replies doubled.',
    author: 'Mia Chen',
    role: 'Founder, RevLabs',
  },
  {
    quote:
      'Finally a tool that prioritizes safety. We scaled to 3 accounts with zero issues and great results.',
    author: 'Alex Rodriguez',
    role: 'Head of Growth, Northbeam',
  },
  {
    quote:
      'The team inbox and smart sequences changed the game for our SDRs. Setup took under an hour.',
    author: 'Priya Patel',
    role: 'Sales Lead, Nimbus AI',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Loved by modern GTM teams</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">From solo founders to sales teams, we help you turn LinkedIn into a repeatable pipeline channel.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-2xl border border-gray-200 p-6 bg-white">
              <Stars />
              <p className="mt-4 text-gray-700">“{t.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{t.author}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
