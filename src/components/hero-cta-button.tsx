"use client";

import { useApp } from '@/contexts/app-context';
import { Button } from '@/components/ui/button';

export function HeroCtaButton() {
  const { openAdmissionModal } = useApp();
  return (
    <Button onClick={openAdmissionModal} size="lg" className="text-lg">
      Apply Now
    </Button>
  );
}
