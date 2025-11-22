"use client";

import { useState } from 'react';
import { AppProvider, useApp } from '@/contexts/app-context';
import { AdmissionEnquiryModal } from '@/components/admission-enquiry-modal';
import Header from './header';
import Footer from './footer';
import { Toaster } from "@/components/ui/toaster";

const FloatingEnquiryButton = () => {
    return (
      <button
        className="fixed top-1/2 right-0 -translate-y-1/2 z-30 bg-primary text-primary-foreground py-3 px-4 rounded-l-md shadow-lg transform transition-all duration-300 group flex items-center justify-center w-12 h-48 cursor-not-allowed opacity-50"
        aria-label="Open Admission Enquiry Form"
        disabled
      >
        <span className="block transform -rotate-90 whitespace-nowrap text-sm font-semibold tracking-wider">
          Admission Enquiry!
        </span>
      </button>
    );
};


export function MainLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openAdmissionModal = () => {};
  
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
