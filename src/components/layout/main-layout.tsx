"use client";

import { useState } from 'react';
import { AppProvider, useApp } from '@/contexts/app-context';
import { AdmissionEnquiryModal } from '@/components/admission-enquiry-modal';
import Header from './header';
import Footer from './footer';
import { Toaster } from "@/components/ui/toaster";

const FloatingEnquiryButton = () => {
    const { openAdmissionModal } = useApp();
    return (
      <button
        onClick={openAdmissionModal}
        className="fixed top-1/2 right-0 -translate-y-1/2 z-30 bg-primary text-primary-foreground py-3 px-2 rounded-l-md shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 group"
        aria-label="Open Admission Enquiry Form"
      >
        <span className="block transform -rotate-90 whitespace-nowrap text-sm font-semibold tracking-wider">
          Admission Enquiry!
        </span>
      </button>
    );
};


export function MainLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openAdmissionModal = () => setIsModalOpen(true);
  
  return (
    <AppProvider value={{ openAdmissionModal }}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-background">{children}</main>
        <FloatingEnquiryButton />
        <Footer />
        <AdmissionEnquiryModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        <Toaster />
      </div>
    </AppProvider>
  );
}
