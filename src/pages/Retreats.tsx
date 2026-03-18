import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';
import { Check, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cmsService } from '../services/cms';
import { Retreat } from '../types';

export default function Retreats() {
  const [retreats, setRetreats] = useState<Retreat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = cmsService.getRetreats((data) => {
      setRetreats(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <PageHeader title="Retreat Packages" subtitle="Your Journey" image="https://picsum.photos/seed/retreats-header/1920/1080?grayscale" />

      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Choose Your Path" subtitle="Packages" />

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-brand" size={48} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {retreats.length > 0 ? retreats.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card p-10 flex flex-col ${i === 1 ? 'border-brand/40 bg-brand/5 scale-105 z-10' : ''}`}
                >
                  {i === 1 && <span className="text-brand font-bold uppercase tracking-widest text-[10px] mb-4">Most Popular</span>}
                  <div className="mb-8">
                    <h3 className="text-3xl mb-2">{p.title}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-brand text-4xl font-black">{p.price}</span>
                      <span className="text-white/40 text-sm uppercase tracking-widest font-bold">/ {p.duration}</span>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm mb-8 leading-relaxed">{p.description}</p>
                  <ul className="space-y-4 mb-12 flex-grow">
                    {p.features?.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-white/70">
                        <Check size={16} className="text-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-center transition-all ${i === 1 ? 'bg-brand text-white hover:opacity-90' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                    Book Now
                  </Link>
                </motion.div>
              )) : (
                <div className="col-span-full text-center text-white/40 py-20 border border-dashed border-white/10 rounded-3xl">
                  No retreat packages available at the moment.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading title="What's Included?" subtitle="The Experience" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { title: "Accommodation", desc: "Luxury villas with pool access." },
              { title: "Nutrition", desc: "Chef-prepared healthy meals daily." },
              { title: "Recovery", desc: "On-site massage and ice baths." },
              { title: "Culture", desc: "Guided tours and temple visits." }
            ].map((item, i) => (
              <div key={i}>
                <h4 className="text-brand text-xl mb-4">{item.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
