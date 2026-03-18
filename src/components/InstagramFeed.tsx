import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_HANDLE } from '../constants';

const MOCK_POSTS = [
  { id: 1, url: 'https://picsum.photos/seed/muay1/600/600' },
  { id: 2, url: 'https://picsum.photos/seed/muay2/600/600' },
  { id: 3, url: 'https://picsum.photos/seed/muay3/600/600' },
  { id: 4, url: 'https://picsum.photos/seed/muay4/600/600' },
  { id: 5, url: 'https://picsum.photos/seed/muay5/600/600' },
  { id: 6, url: 'https://picsum.photos/seed/muay6/600/600' },
];

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
      {MOCK_POSTS.map((post, index) => (
        <motion.a
          key={post.id}
          href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative aspect-square overflow-hidden group"
        >
          <img
            src={post.url}
            alt={`Instagram post ${post.id}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Instagram size={32} className="text-white" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
