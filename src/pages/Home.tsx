import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import InstagramFeed from '../components/InstagramFeed';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Trophy, Zap, Loader2 } from 'lucide-react';
import { cmsService } from '../services/cms';
import { Testimonial } from '../types';

const FEATURES = [
  { icon: Users, title: "Expert Trainers", desc: "Train with world champions and seasoned professionals." },
  { icon: Trophy, title: "Elite Facilities", desc: "State-of-the-art equipment and authentic training rings." },
  { icon: Zap, title: "All Levels", desc: "From absolute beginners to professional fighters." },
];

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = cmsService.getTestimonials((data) => {
      setTestimonials(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-ink relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 group hover:bg-white/10 transition-colors"
              >
                <f.icon size={40} className="text-brand mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl mb-4">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Training Classes" subtitle="Master the Art" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-3xl aspect-[16/9]">
              <img src="https://picsum.photos/seed/class1/800/450" alt="Muay Thai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-3xl mb-2">Muay Thai Fundamentals</h3>
                <p className="text-white/60 mb-6">Perfect for beginners looking to learn the basics.</p>
                <Link to="/classes" className="text-brand font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl aspect-[16/9]">
              <img src="https://picsum.photos/seed/class2/800/450" alt="Pro Fight" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-3xl mb-2">Advanced Sparring</h3>
                <p className="text-white/60 mb-6">High intensity training for experienced practitioners.</p>
                <Link to="/classes" className="text-brand font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/classes" className="btn-secondary">View All Classes</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Success Stories" subtitle="Testimonials" />
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-brand" size={48} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.length > 0 ? testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8"
                >
                  <div className="flex gap-1 text-brand mb-6">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-white/70 italic mb-8">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    {t.imageUrl ? (
                      <img src={t.imageUrl} alt={t.author} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand font-bold">
                        {t.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold">{t.author}</h4>
                      <span className="text-white/40 text-xs uppercase tracking-widest">Retreat Guest</span>
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-full text-center text-white/40 py-20 border border-dashed border-white/10 rounded-3xl">
                  No testimonials yet. Be the first to share your experience!
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionHeading title="Follow The Journey" subtitle="Instagram" align="left" />
          </div>
          <a href="#" className="btn-secondary mb-12">@apexmuaythai</a>
        </div>
        <InstagramFeed />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase italic leading-none">Ready to start <br /> your transformation?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="bg-white text-brand px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Join the Tribe
            </Link>
            <a href="#" className="text-white font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              Contact via WhatsApp <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
