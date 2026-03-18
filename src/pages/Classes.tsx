import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';
import { Clock, Zap, Loader2 } from 'lucide-react';
import { cmsService } from '../services/cms';
import { Class } from '../types';

export default function Classes() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = cmsService.getClasses((data) => {
      setClasses(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <PageHeader title="Training Classes" subtitle="Our Schedule" image="https://picsum.photos/seed/classes-header/1920/1080?grayscale" />

      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Train Like A Pro" subtitle="The Program" />

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-brand" size={48} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {classes.length > 0 ? classes.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-10 flex flex-col md:flex-row gap-8 group hover:bg-white/10 transition-all"
                >
                  <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
                    <img src={c.imageUrl} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-brand/20 text-brand px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{c.level}</span>
                      <span className="flex items-center gap-1 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                        <Clock size={12} /> {c.schedule}
                      </span>
                    </div>
                    <h3 className="text-2xl mb-4">{c.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">{c.description}</p>
                    <button className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:text-brand transition-colors">
                      Book Session <Zap size={14} />
                    </button>
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-full text-center text-white/40 py-20 border border-dashed border-white/10 rounded-3xl">
                  No classes scheduled yet.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Weekly Schedule Table */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Weekly Schedule" subtitle="Time Table" />
          <div className="overflow-x-auto glass-card p-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 text-brand uppercase tracking-widest text-xs font-bold">Time</th>
                  <th className="py-4 text-white uppercase tracking-widest text-xs font-bold">Mon</th>
                  <th className="py-4 text-white uppercase tracking-widest text-xs font-bold">Tue</th>
                  <th className="py-4 text-white uppercase tracking-widest text-xs font-bold">Wed</th>
                  <th className="py-4 text-white uppercase tracking-widest text-xs font-bold">Thu</th>
                  <th className="py-4 text-white uppercase tracking-widest text-xs font-bold">Fri</th>
                  <th className="py-4 text-white uppercase tracking-widest text-xs font-bold">Sat</th>
                </tr>
              </thead>
              <tbody className="text-white/50 text-sm">
                {[
                  { time: "08:00 AM", class: "Fundamentals" },
                  { time: "10:00 AM", class: "Advanced Sparring" },
                  { time: "04:00 PM", class: "Clinch Work" },
                  { time: "06:00 PM", class: "Strength & Cond" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-6 font-mono text-brand">{row.time}</td>
                    <td className="py-6">{row.class}</td>
                    <td className="py-6">{row.class}</td>
                    <td className="py-6">{row.class}</td>
                    <td className="py-6">{row.class}</td>
                    <td className="py-6">{row.class}</td>
                    <td className="py-6">{row.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
