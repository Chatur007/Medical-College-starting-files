"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { galleryImages } from '@/lib/data';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import type { GalleryImage as GalleryImageType } from '@/lib/types';

const categories = [
  'All',
  'Campus & Infrastructure',
  'Classrooms & Labs',
  'Hospital & Clinical',
  'Student Activities',
  'Events & Workshops',
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  const filteredImages =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (image: GalleryImageType) => {
    const placeholder = PlaceHolderImages.find(p => p.id === image.imageId);
    if (placeholder) {
        setSelectedImage(placeholder);
        setLightboxOpen(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          Our Gallery
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A glimpse into the life, learning, and events at our college.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredImages.map((image) => {
          const placeholder = PlaceHolderImages.find(p => p.id === image.imageId);
          if (!placeholder) return null;

          return (
            <div key={image.id} className="break-inside-avoid" onClick={() => openLightbox(image)}>
              <Card className="overflow-hidden cursor-pointer group">
                <div className="relative aspect-w-16 aspect-h-10">
                  <Image
                    src={placeholder.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={placeholder.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-2">
            {selectedImage && (
                <div className="relative w-full h-auto max-h-[80vh]">
                    <Image
                        src={selectedImage.imageUrl}
                        alt={selectedImage.description}
                        width={1200}
                        height={800}
                        className="object-contain w-full h-full rounded-md"
                        data-ai-hint={selectedImage.imageHint}
                    />
                </div>
            )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
