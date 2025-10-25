'use client';

import type React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const brico = Bricolage_Grotesque({
  subsets: ['latin'],
});

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  companyPosition: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    companyPosition: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Your form submission logic here
    // For now, let's just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="registration-form" className="relative z-100 min-h-screen flex items-center justify-center bg-linear-to-b from-transparent to-background/50">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={cn(
            'from-foreground via-foreground/80 to-foreground/40 mb-4 cursor-crosshair bg-linear-to-b bg-clip-text text-3xl font-bold text-transparent sm:text-5xl',
            brico.className,
          )}>
            Join the{' '}
            <span className="bg-linear-to-b from-foreground to-primary bg-clip-text text-transparent">
              Waitlist
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get early access to Compl-AI and be the first to experience AI-driven compliance.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="border-primary/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-primary/30 rounded-xl border bg-white/5 px-4 py-6 backdrop-blur-md transition-all focus:ring-2"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-primary/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-primary/30 rounded-xl border bg-white/5 px-4 py-6 backdrop-blur-md transition-all focus:ring-2"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="border-primary/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-primary/30 rounded-xl border bg-white/5 px-4 py-6 backdrop-blur-md transition-all focus:ring-2"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName">
                      Company Name *
                    </Label>
                    <Input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="border-primary/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-primary/30 rounded-xl border bg-white/5 px-4 py-6 backdrop-blur-md transition-all focus:ring-2"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyPosition">
                    Company Position *
                  </Label>
                  <Input
                    type="text"
                    name="companyPosition"
                    id="companyPosition"
                    value={formData.companyPosition}
                    onChange={handleInputChange}
                    required
                    className="border-primary/20 text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-primary/30 rounded-xl border bg-white/5 px-4 py-6 backdrop-blur-md transition-all focus:ring-2"
                    placeholder="Enter your position"
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-destructive/40 bg-destructive/10 text-destructive rounded-xl border px-4 py-3 text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="group text-white focus:ring-primary/50 relative overflow-hidden rounded-xl bg-linear-to-b from-[#0a59eb] to-[#07378c] px-8 py-4 font-semibold shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition-all duration-300 hover:shadow-[0_0_20px_rgba(10,89,235,0.4)] focus:ring-2 focus:outline-none active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 w-full cursor-pointer h-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                    <Sparkles className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
                  </span>
                  <span className="absolute inset-0 z-0 bg-linear-to-r from-[#0a59eb] to-[#020f26] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </Button>
              </>
            ) : (
              <motion.div
                key="thank-you-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="border-primary/20 from-primary/10 to-primary/10 text-primary cursor-pointer rounded-xl border bg-linear-to-r via-transparent px-6 py-8 font-medium backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(10,89,235,0.3)] active:brightness-125 glass2 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Thanks for joining Compl-AI!{' '}
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
