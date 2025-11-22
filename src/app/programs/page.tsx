import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Download, FileText, Calendar, UserCheck, Star } from 'lucide-react';

const requiredDocuments = [
  "Marks card of qualifying exam (II PUC / equivalent)",
  "SSLC/10th marks card (for date of birth proof)",
  "Transfer Certificate from the last institution",
  "Migration Certificate (if applicable for non-Karnataka students)",
  "Conduct Certificate from the last attended institution",
  "Caste certificate (for SC/ST/OBC candidates, if applicable)",
  "Eligibility certificate from RGUHS (if required)",
  "Recent passport-sized photographs (6 copies)",
];

export default function ProgramsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            B.Sc Nursing Program
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A comprehensive 4-year undergraduate course designed to prepare globally competent and compassionate nursing professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                  <FileText className="w-6 h-6 text-primary" />
                  Program Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The Bachelor of Science in Nursing (B.Sc Nursing) is a four-year professional degree program that equips students with a strong theoretical foundation and extensive clinical practice. Our curriculum, aligned with the standards of the Indian Nursing Council and Rajiv Gandhi University of Health Sciences, prepares graduates to provide high-quality care in various healthcare settings.
                </p>
                <p>
                  Students will develop critical thinking, leadership skills, and a commitment to lifelong learning, enabling them to function as professional nurses and midwives and contribute to the health and welfare of society.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                  <UserCheck className="w-6 h-6 text-primary" />
                  Eligibility & Admission Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Age Requirement</h4>
                    <p className="text-muted-foreground">Candidates must be at least 17 years old on or before December 31st of the year of admission.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Educational Qualification</h4>
                    <p className="text-muted-foreground">Must have passed 10+2 / PUC / equivalent examination with Physics, Chemistry, Biology (PCB), and English as core subjects.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Minimum Marks</h4>
                    <p className="text-muted-foreground">A minimum of 45% aggregate marks in PCB and English. For SC/ST/OBC candidates, the minimum is 40%.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">General Requirements</h4>
                    <p className="text-muted-foreground">Candidates must be medically fit and possess a good knowledge of the English language.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-headline">
                  <Calendar className="w-5 h-5 text-primary" />
                  Course Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-2xl">4 Academic Years</p>
                <p className="text-sm text-muted-foreground mt-1">Terms and vacations are set as per the regulations of RGUHS, Bengaluru.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-headline">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Button asChild size="lg" className="w-full">
              <a href="#" download>
                <Download className="mr-2 h-5 w-5" />
                Download Prospectus (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
