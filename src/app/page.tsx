'use client';

import { useState } from 'react';
import { Particles } from '@/components/ui/particles';
import { Spotlight } from '@/components/ui/spotlight';
import HeroSection from '@/components/sections/hero-section';
import RegistrationForm from '@/components/sections/registration-form';

export default function WaitlistPage() {
  const [color] = useState('#0a59eb');

  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Spotlight />

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
        color={color}
      />

      <HeroSection onScrollToForm={scrollToForm} />
      <RegistrationForm />

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </main>
  );
}