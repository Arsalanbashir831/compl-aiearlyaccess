'use client';

import { useState } from 'react';
import { Particles } from '@/components/ui/particles';
import { Spotlight } from '@/components/ui/spotlight';
//import HeroSection from '@/components/sections/hero-section';
import RegistrationForm from '@/components/sections/registration-form';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function WaitlistPage() {
  const [color] = useState('#0a59eb');

  // const scrollToForm = () => {
  //   const formElement = document.getElementById('registration-form');
  //   if (formElement) {
  //     formElement.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

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

      {/* <HeroSection onScrollToForm={scrollToForm} /> */}
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-4 text-center">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-primary/10 from-primary/15 to-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border bg-linear-to-r px-4 py-2 backdrop-blur-sm"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={24}
            height={24}
            className="spin h-6 w-6"
          />
          <span className="text-sm font-medium">Compl-AI</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
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