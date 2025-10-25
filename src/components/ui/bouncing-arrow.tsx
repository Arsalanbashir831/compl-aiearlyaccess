'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BouncingArrowProps {
  onScrollToForm: () => void;
}

export default function BouncingArrow({ onScrollToForm }: BouncingArrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="group mt-24 flex flex-col items-center justify-center gap-2 text-primary transition-all duration-300 hover:scale-110 mx-auto"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        className="flex items-center justify-center"
      >
        <Button
          onClick={onScrollToForm}
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full border-2 border-primary/20 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 cursor-pointer hover:text-primary"
        >

          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
