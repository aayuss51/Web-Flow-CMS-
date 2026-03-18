import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';
import { Instagram, Trophy, Loader2 } from 'lucide-react';
import { cmsService } from '../services/cms';
import { Trainer } from '../types';

export default function Trainers() {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = cmsService.getTrainers((data) => {
      setTrainers(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <PageHeader title="Our Trainers" subtitle="The Elite" image="https://picsum.photos/seed/trainers-header/1920/1080?grayscale" />

      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="World Class Coaching" subtitle="The Team" />

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-brand" size={48} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trainers.length > 0 ? trainers.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card overflow-hidden group"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl mb-1">{t.name}</h3>
                      <span className="text-brand font-bold uppercase tracking-widest text-[10px]">{t.specialty}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-3">{t.bio}</p>
                    {t.instagram && (
                      <a href={`https://instagram.com/${t.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-brand transition-colors text-xs font-bold uppercase tracking-widest">
                        <Instagram size={16} /> {t.instagram}
                      </a>
                    )}
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-full text-center text-white/40 py-20 border border-dashed border-white/10 rounded-3xl">
                  No trainers found in the database.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading title="The Apex Method" subtitle="Our Approach" />
          <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed">
            We don't just teach techniques; we build champions. Our coaching philosophy focuses on the perfect balance of traditional Muay Thai wisdom and modern sports science.
          </p>
        </div>
      </section>
    </div>
  );
}
