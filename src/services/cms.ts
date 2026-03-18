import { 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  onSnapshot,
  FirestoreError
} from 'firebase/firestore';
import { db } from '../firebase';
import { Trainer, Class, Retreat, Testimonial } from '../types';

enum OperationType {
  GET = 'get',
  LIST = 'list',
  WRITE = 'write'
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path
  };
  console.error('Firestore Error:', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const cmsService = {
  getTrainers: (callback: (trainers: Trainer[]) => void) => {
    const path = 'trainers';
    return onSnapshot(
      query(collection(db, path), orderBy('name')),
      (snapshot) => {
        const trainers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Trainer));
        callback(trainers);
      },
      (error) => handleFirestoreError(error, OperationType.LIST, path)
    );
  },

  getClasses: (callback: (classes: Class[]) => void) => {
    const path = 'classes';
    return onSnapshot(
      query(collection(db, path), orderBy('title')),
      (snapshot) => {
        const classes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Class));
        callback(classes);
      },
      (error) => handleFirestoreError(error, OperationType.LIST, path)
    );
  },

  getRetreats: (callback: (retreats: Retreat[]) => void) => {
    const path = 'retreats';
    return onSnapshot(
      query(collection(db, path), orderBy('price')),
      (snapshot) => {
        const retreats = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Retreat));
        callback(retreats);
      },
      (error) => handleFirestoreError(error, OperationType.LIST, path)
    );
  },

  getTestimonials: (callback: (testimonials: Testimonial[]) => void) => {
    const path = 'testimonials';
    return onSnapshot(
      query(collection(db, path), orderBy('author')),
      (snapshot) => {
        const testimonials = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Testimonial));
        callback(testimonials);
      },
      (error) => handleFirestoreError(error, OperationType.LIST, path)
    );
  }
};
