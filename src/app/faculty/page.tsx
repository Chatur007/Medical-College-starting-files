import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { faculty } from '@/lib/data';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export default function FacultyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          Our Esteemed Faculty
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Our faculty members are the cornerstone of our institution. They are dedicated to providing scientifically-based nursing education, fostering leadership, and promoting the all-round development of every student.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculty.map((member) => {
          const image = PlaceHolderImages.find((p) => p.id === member.imageId) as ImagePlaceholder;
          return (
            <Card key={member.id} className="text-center overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="relative w-full h-56 bg-muted">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={`Photo of ${member.name}`}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-sm font-semibold text-accent mt-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-3">{member.bio}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
