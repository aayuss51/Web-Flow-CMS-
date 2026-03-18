import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/muay-hero/1920/1080?grayscale"
          alt="Muay Thai Training"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 bg-brand/20 border border-brand/30 px-4 py-1 rounded-full text-brand text-xs font-bold uppercase tracking-[0.3em]"
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          Phuket's Premier Fight Retreat
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-[10rem] font-black leading-[0.85] mb-8 tracking-tighter uppercase"
        >
          Unleash <br />
          <span className="text-brand">The Beast</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl mb-12 font-medium"
        >
          Professional Muay Thai training, world-class facilities, and luxury retreat packages in the heart of Thailand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link to="/retreats" className="btn-primary w-full md:w-auto">
            View Packages <ArrowRight size={18} className="ml-2" />
          </Link>
          <Link to="/contact" className="btn-secondary w-full md:w-auto">
            Book a Call
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20" />
      </motion.div>
    </section>
  );
}
