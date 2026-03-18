import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CalendlyEmbed from '../components/CalendlyEmbed';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export default function Contact() {
  return (
    <div>
      <PageHeader title="Get In Touch" subtitle="Contact Us" image="https://picsum.photos/seed/contact-header/1920/1080?grayscale" />

      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading title="Start Your Journey" subtitle="Enquire Now" align="left" />
            <p className="text-white/60 text-lg mb-12">
              Have questions about our training or retreat packages? Our team is here to help you plan your perfect stay.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-brand" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Call Us</h4>
                  <p className="text-white/50">{WHATSAPP_NUMBER}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <MessageCircle size={24} className="text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">WhatsApp</h4>
                  <p className="text-white/50">Instant support available</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-brand" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Email</h4>
                  <p className="text-white/50">hello@apexmuaythai.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-brand" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Location</h4>
                  <p className="text-white/50">123 Fight Street, Phuket, Thailand</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm w-full focus:outline-none focus:border-brand" />
                  <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm w-full focus:outline-none focus:border-brand" />
                </div>
                <select className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm w-full focus:outline-none focus:border-brand appearance-none text-white/50">
                  <option>Select Interest</option>
                  <option>Muay Thai Training</option>
                  <option>Retreat Package</option>
                  <option>Private Coaching</option>
                </select>
                <textarea rows={4} placeholder="Your Message" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm w-full focus:outline-none focus:border-brand"></textarea>
                <button className="btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>

          <div>
            <SectionHeading title="Schedule A Call" subtitle="Booking" align="left" />
            <p className="text-white/60 text-lg mb-12">
              Prefer to talk face-to-face? Book a free 15-minute consultation call with one of our retreat coordinators.
            </p>
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </div>
  );
}
