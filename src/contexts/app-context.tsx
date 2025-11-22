"use client";

import { createContext, useContext } from 'react';

type AppContextType = {
  openAdmissionModal: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export const AppProvider = AppContext.Provider;
