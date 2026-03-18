# Apex Muay Thai & Fitness | Phuket's Premier Fight Retreat

Apex Muay Thai & Fitness is a high-performance, conversion-focused web application designed for a premium Muay Thai gym and luxury fitness retreat located in Phuket, Thailand. The platform serves as both a marketing tool to attract international guests and a content management system (CMS) for the gym's operations.

## 🚀 Features

- **Dynamic CMS**: Real-time content updates for trainers, classes, retreat packages, and guest testimonials.
- **Retreat Packages**: Detailed breakdown of training, accommodation, and nutrition packages.
- **Class Scheduling**: Interactive weekly timetable and class descriptions.
- **Trainer Profiles**: Showcasing world-class coaching staff with social media integration.
- **Conversion Optimized**: 
  - Floating WhatsApp integration for instant enquiries.
  - Calendly booking system for consultation calls.
  - Lead generation contact forms.
- **Immersive UX**: Smooth entrance animations and high-performance athletic design.
- **SEO Ready**: Optimized meta tags and structured data for search engine visibility.

## 🛠 Tech Stack

### Frontend
- **React 18**: Component-based UI architecture.
- **TypeScript**: Type-safe development for better maintainability.
- **Tailwind CSS**: Utility-first styling for a custom, athletic aesthetic.
- **Motion (Framer Motion)**: Advanced layout and entrance animations.
- **Lucide React**: Consistent, high-quality SVG iconography.
- **React Router 6**: Client-side routing for seamless page transitions.

### Backend & Infrastructure
- **Firebase**: A comprehensive serverless backend solution.
- **Google Cloud Run**: Containerized hosting for the application.
- **Vite**: Next-generation frontend tooling for fast development and builds.

## 🏗 Backend Architecture (Firebase)

The application leverages **Firebase** as a robust, real-time backend to manage dynamic content and security.

### 1. Cloud Firestore (NoSQL Database)
The core of the "CMS" functionality. Data is organized into four main collections:
- `trainers`: Profiles, bios, and specialties.
- `classes`: Training sessions and schedules.
- `retreats`: Luxury package details and pricing.
- `testimonials`: Verified guest reviews and ratings.

### 2. Firebase Authentication
Used to secure administrative access. The system is configured to recognize specific admin emails (like the owner's) to allow content management.

### 3. Security Rules
Strict, role-based access control (RBAC) is implemented via `firestore.rules`:
- **Public Access**: All CMS content (trainers, classes, etc.) is publicly readable.
- **Admin Access**: Only authenticated administrators can write, update, or delete content.
- **Validation**: Every write operation is validated against a schema to ensure data integrity and prevent malicious injections.

### 4. Real-time Synchronization
The frontend uses `onSnapshot` listeners to ensure that any changes made in the Firebase Console are reflected on the website instantly without a page refresh.

---

## 📖 How to Update Content

1. Log in to the [Firebase Console](https://console.firebase.google.com/).
2. Navigate to **Firestore Database**.
3. Select the collection you wish to edit (e.g., `trainers`).
4. Add, edit, or delete documents. The website will update in real-time!
