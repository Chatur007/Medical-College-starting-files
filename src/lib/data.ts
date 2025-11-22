import React from 'react';
import {
  Building,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Hospital,
  Hotel,
  Users,
  Presentation,
  ShieldAlert,
  Target,
  Quote,
  Computer
} from 'lucide-react';
import type { FacultyMember, Facility, Message, Affiliation, GalleryImage } from './types';
import { PlaceHolderImages } from './placeholder-images';

export const facilities: Facility[] = [
  {
    name: 'Smart Classrooms',
    description: '40-60 student capacity with smart boards, audio-visual aids, and CCTV surveillance for an interactive learning environment.',
    icon: React.createElement(Presentation, { className: "w-6 h-6 text-primary" }),
  },
  {
    name: 'Specialized Laboratories',
    description: 'Well-equipped nursing labs for hands-on practice in fundamentals, community health, nutrition, and more.',
    icon: React.createElement(FlaskConical, { className: "w-6 h-6 text-primary" }),
  },
  {
    name: 'Computer Lab',
    description: 'Modern computer lab with internet access to support research and e-learning for all students.',
    icon: React.createElement(Computer, { className: "w-6 h-6 text-primary" }),
  },
  {
    name: 'Parent Hospital',
    description: 'On-campus 100-bedded parent hospital providing invaluable clinical experience and practical exposure.',
    icon: React.createElement(Hospital, { className: "w-6 h-6 text-primary" }),
  },
  {
    name: 'Secure Hostel',
    description: 'Safe in-house hostel with mess, CCTV, safe drinking water, and a 24/7 warden for student well-being.',
    icon: React.createElement(Hotel, { className: "w-6 h-6 text-primary" }),
  },
  {
    name: 'Multipurpose Hall',
    description: 'A spacious hall for conducting events, workshops, seminars, and other extracurricular activities.',
    icon: React.createElement(Building, { className: "w-6 h-6 text-primary" }),
  },
];

export const faculty: FacultyMember[] = [
  {
    id: '1',
    name: 'Dr. Sharvani Ajit Kanakaraddi',
    role: 'Director',
    bio: 'Guiding the institution towards excellence with a focus on quality services and infrastructure.',
    imageId: 'director-photo'
  },
  {
    id: '2',
    name: 'Mrs. Suvarna Kulkarni',
    role: 'Principal',
    bio: 'Dedicated to alleviating suffering and striving for excellence in nursing education through innovative teaching.',
    imageId: 'principal-photo'
  },
  {
    id: '3',
    name: 'Mr. Rajesh Patil',
    role: 'Professor, Medical-Surgical Nursing',
    bio: 'Specializes in critical care nursing and evidence-based practice with over 15 years of teaching experience.',
    imageId: 'faculty-3'
  },
  {
    id: '4',
    name: 'Ms. Anjali Desai',
    role: 'Associate Professor, Pediatric Nursing',
    bio: 'Passionate about child health and focuses on creating a compassionate approach to pediatric care.',
    imageId: 'faculty-4'
  },
  {
    id: '5',
    name: 'Mrs. Priya Sharma',
    role: 'Assistant Professor, Community Health',
    bio: 'Expert in public health initiatives and community-based healthcare strategies.',
    imageId: 'faculty-5'
  },
  {
    id: '6',
    name: 'Mr. Vikram Singh',
    role: 'Tutor, Fundamentals of Nursing',
    bio: 'Focuses on building a strong foundational knowledge for first-year nursing students.',
    imageId: 'faculty-6'
  }
];


export const messages: Message[] = [
    {
        id: 'director',
        name: 'Dr. Sharvani Ajit Kanakaraddi',
        role: 'Director',
        message: 'We welcome you to an institution dedicated to high-quality services and academic excellence. With strong infrastructure, dedicated faculty, and advanced labs, we are committed to shaping the future of nursing. Our alumni are our greatest ambassadors.',
        imageId: 'director-photo'
    },
    {
        id: 'principal',
        name: 'Mrs. Suvarna Kulkarni',
        role: 'Principal',
        message: 'Our commitment is to alleviate the suffering of the sick by producing world-class nursing professionals. We strive for excellence through experienced faculty, innovative teaching methods, and a focus on the all-round development of our students.',
        imageId: 'principal-photo'
    }
];

export const affiliations: Affiliation[] = [
    {
        name: 'Government of Karnataka',
        logoId: 'logo-karnataka',
        logoUrl: PlaceHolderImages.find(p => p.id === 'logo-karnataka')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'logo-karnataka')?.imageHint || ''
    },
    {
        name: 'Karnataka State Nursing Council',
        logoId: 'logo-knc',
        logoUrl: PlaceHolderImages.find(p => p.id === 'logo-knc')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'logo-knc')?.imageHint || ''
    },
    {
        name: 'Rajiv Gandhi University of Health Sciences',
        logoId: 'logo-rguhs',
        logoUrl: PlaceHolderImages.find(p => p.id === 'logo-rguhs')?.imageUrl || '',
        imageHint: PlaceHolderImages.find(p => p.id === 'logo-rguhs')?.imageHint || ''
    }
];


export const galleryImages: GalleryImage[] = [
    { id: '1', category: 'Campus & Infrastructure', description: 'Main campus building on a sunny day.', imageId: 'gallery-campus-1' },
    { id: '2', category: 'Campus & Infrastructure', description: 'Well-stocked college library with ample seating.', imageId: 'gallery-campus-2' },
    { id: '3', category: 'Classrooms & Labs', description: 'Students engaged in a lecture in a smart classroom.', imageId: 'gallery-classroom-1' },
    { id: '4', category: 'Classrooms & Labs', description: 'Advanced nursing simulation lab for practical training.', imageId: 'gallery-lab-1' },
    { id: '5', category: 'Hospital & Clinical', description: 'The 100-bedded parent hospital on campus.', imageId: 'gallery-hospital-1' },
    { id: '6', category: 'Hospital & Clinical', description: 'Nursing students during their clinical rounds.', imageId: 'gallery-hospital-2' },
    { id: '7', category: 'Student Activities', description: 'Students collaborating on a project.', imageId: 'gallery-student-1' },
    { id: '8', category: 'Student Activities', description: 'Students competing in an annual sports event.', imageId: 'gallery-student-2' },
    { id: '9', category: 'Events & Workshops', description: 'A cultural performance during the annual day.', imageId: 'gallery-event-1' },
    { id: '10', category: 'Events & Workshops', description: 'A guest lecture underway in the multipurpose hall.', imageId: 'gallery-event-2' },
];
