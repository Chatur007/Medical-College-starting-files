"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle, PartyPopper } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  mobile: z.string().regex(/^\d{10}$/, { message: 'Please enter a valid 10-digit mobile number.' }),
  course: z.string(),
  passYear: z.string().regex(/^\d{4}$/, { message: 'Please enter a valid year.' }),
  message: z.string().optional(),
});

type AdmissionFormValues = z.infer<typeof formSchema>;

interface AdmissionEnquiryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AdmissionEnquiryModal({ open, onOpenChange }: AdmissionEnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<AdmissionFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      course: 'B.Sc Nursing',
      passYear: '',
      message: '',
    },
  });

  function onSubmit(values: AdmissionFormValues) {
    console.log('Form Submitted:', values);
    setSubmitted(true);
    toast({
        title: "Enquiry Submitted!",
        description: "Thank you! We will get back to you soon.",
    });
    // Reset form after a small delay to allow animation
    setTimeout(() => {
        handleClose();
    }, 1000);
  }

  const handleClose = () => {
    onOpenChange(false);
    // Reset form state after dialog closes
    setTimeout(() => {
        form.reset();
        setSubmitted(false);
    }, 300);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[480px]">
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline">Admission Enquiry Form</DialogTitle>
              <DialogDescription>
                Please fill out the form below and our team will get back to you shortly.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="e.g. john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="10-digit number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                  </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="course"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Course Interested In</FormLabel>
                             <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a course" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="B.Sc Nursing">B.Sc Nursing</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="passYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Year of Passing 12th</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. 2023" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                   </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message / Questions</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any specific questions you have for us?"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    Submit Enquiry
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
      </DialogContent>
    </Dialog>
  );
}
