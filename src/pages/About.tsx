import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div>
      <PageHeader title="Our Story" subtitle="About Apex" image="https://picsum.photos/seed/about-header/1920/1080?grayscale" />

      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading title="More Than Just A Gym" subtitle="The Vision" align="left" />
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Founded in the heart of Phuket, Apex Muay Thai & Fitness was born from a passion for authentic combat sports and holistic wellness. We believe that training should be transformative, not just physical.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              Our mission is to provide a world-class training environment where athletes of all levels can push their limits, find their strength, and experience the rich culture of Muay Thai.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-brand text-4xl font-black mb-2">10+</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Years Experience</p>
              </div>
              <div>
                <h4 className="text-brand text-4xl font-black mb-2">500+</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Happy Guests</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src="https://picsum.photos/seed/about-img/800/1000" alt="Training" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-8 hidden md:block">
              <h3 className="text-2xl mb-2 italic">"Authentic Phuket Training"</h3>
              <p className="text-white/50 text-sm">- Master Lek, Head Coach</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Our Core Values" subtitle="Philosophy" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Respect", desc: "Honoring the traditions of Muay Thai and every individual's journey." },
              { title: "Discipline", desc: "Building mental and physical fortitude through consistent effort." },
              { title: "Community", desc: "Creating a supportive tribe where everyone grows together." }
            ].map((v, i) => (
              <div key={i} className="text-center p-8 glass-card">
                <h3 className="text-2xl mb-4 text-brand">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
