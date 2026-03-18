export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  instagram?: string;
}

export interface Class {
  id: string;
  title: string;
  description: string;
  schedule: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  imageUrl: string;
}

export interface Retreat {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  imageUrl: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  rating: number;
  imageUrl?: string;
}
