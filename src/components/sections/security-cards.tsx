'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SecurityCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="mb-12 grid grid-cols gap-6 sm:grid-cols-3"
    >
      <div className="border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-4 backdrop-blur-md glass2 h-32">
        <div className="flex items-center justify-center mb-2 h-16">
          <Image
            src="/icons/gdpr.svg"
            alt="GDPR Compliant"
            width={40}
            height={40}
            className="text-primary h-12 w-12"
          />
        </div>
        <span className="text-xl font-bold">GDPR</span>
        <span className="text-muted-foreground text-xs">Compliant</span>
      </div>

      <div className="border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-4 backdrop-blur-md glass2 h-32">
        <div className="flex items-center justify-center mb-2 h-16">
          <Image
            src="/icons/iso.svg"
            alt="ISO 27001 Hosting"
            width={40}
            height={40}
            className="text-primary h-12 w-12"
          />
        </div>
        <span className="text-xl font-bold">ISO 27001</span>
        <span className="text-muted-foreground text-xs">Hosting</span>
      </div>

      <div className="border-primary/10 flex flex-col items-center justify-center rounded-xl border bg-white/5 p-4 backdrop-blur-md glass2 h-32">
        <div className="flex items-center justify-center mb-2 h-16">
          <Image
            src="/icons/encryption.svg"
            alt="End-to-End Encryption"
            width={40}
            height={40}
            className="text-primary h-12 w-12"
          />
        </div>
        <span className="text-xl font-bold">End-to-End</span>
        <span className="text-muted-foreground text-xs">Encryption</span>
      </div>
    </motion.div>
  );
}
