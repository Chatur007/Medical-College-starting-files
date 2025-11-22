import type { LucideIcon } from 'lucide-react';

export type FacultyMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageId: string;
};

export type Facility = {
  name: string;
  description: string;
  icon: React.ReactElement<LucideIcon>;
};

export type Message = {
    id: 'director' | 'principal';
    name: string;
    role: string;
    message: string;
    imageId: string;
};

export type Affiliation = {
    name: string;
    logoId: string;
    logoUrl: string;
    imageHint: string;
};

export type GalleryImage = {
  id: string;
  category: 'Campus & Infrastructure' | 'Classrooms & Labs' | 'Hospital & Clinical' | 'Student Activities' | 'Events & Workshops';
  description: string;
  imageId: string;
};
