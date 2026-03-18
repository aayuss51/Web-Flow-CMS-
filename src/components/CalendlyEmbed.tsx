import { CALENDLY_URL } from '../constants';

export default function CalendlyEmbed() {
  return (
    <div className="w-full h-[700px] glass-card overflow-hidden">
      <iframe
        src={CALENDLY_URL}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Schedule a session"
      ></iframe>
    </div>
  );
}
