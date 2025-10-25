'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import SecurityCards from './security-cards';
import BouncingArrow from '../ui/bouncing-arrow';

const brico = Bricolage_Grotesque({
  subsets: ['latin'],
});

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export default function HeroSection({ onScrollToForm }: HeroSectionProps) {
  return (
    <section className="relative z-100 flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-primary/10 from-primary/15 to-primary/5 mb-8 inline-flex items-center gap-2 rounded-full border bg-linear-to-r px-4 py-2 backdrop-blur-sm"
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

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            'from-foreground via-foreground/80 to-foreground/40 mb-4 cursor-crosshair bg-linear-to-b bg-clip-text text-4xl font-bold text-transparent sm:text-7xl',
            brico.className,
          )}
        >
          Get Early{' '}
          <span className="bg-linear-to-b from-foreground to-primary bg-clip-text text-transparent">
            Access
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-muted-foreground mt-2 mb-12 sm:text-lg"
        >
          Your in-house compliance partner, powered by Artificial Intelligence.
          <br className="hidden sm:block" /> AI-driven compliance for SRA regulated law firms.
        </motion.p>

        <SecurityCards />

        <BouncingArrow onScrollToForm={onScrollToForm} />
      </div>
    </section>
  );
}
