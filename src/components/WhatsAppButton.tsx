import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-ink px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
        Enquire Now
      </span>
    </a>
  );
}
