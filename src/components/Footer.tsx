import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, INSTAGRAM_HANDLE, WHATSAPP_NUMBER } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-display font-black tracking-tighter text-white mb-6 block">
            APEX<span className="text-brand">MUAYTHAI</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Elevate your game at the premier Muay Thai and fitness retreat in Thailand. Professional training for all levels.
          </p>
          <div className="flex gap-4">
            <a href={`https://instagram.com/${INSTAGRAM_HANDLE}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
              <Instagram size={18} />
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-white/50 hover:text-brand transition-colors text-sm uppercase tracking-widest font-bold">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white/50 text-sm">
              <MapPin size={16} className="text-brand" />
              123 Fight Street, Phuket, Thailand
            </li>
            <li className="flex items-center gap-3 text-white/50 text-sm">
              <Phone size={16} className="text-brand" />
              {WHATSAPP_NUMBER}
            </li>
            <li className="flex items-center gap-3 text-white/50 text-sm">
              <Mail size={16} className="text-brand" />
              hello@apexmuaythai.com
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
          <p className="text-white/50 text-sm mb-4">Get training tips and retreat updates.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand"
            />
            <button className="bg-brand text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:opacity-90">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 text-center text-white/30 text-xs uppercase tracking-[0.2em]">
        &copy; {new Date().getFullYear()} Apex Muay Thai & Fitness. All rights reserved.
      </div>
    </footer>
  );
}
