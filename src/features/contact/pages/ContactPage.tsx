import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send, HelpCircle, ArrowRight, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import contactService from "@/services/contact.service";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name must be less than 50 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactSchemaType = z.infer<typeof contactSchema>;

export const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactSchemaType) => {
    setIsLoading(true);
    try {
      const response = await contactService.submitContact({
        name: data.name,
        email: data.email,
        message: data.message,
      });

      if (response && response.success) {
        setIsSubmitted(true);
        toast.success(response.message || "Feedback submitted successfully!");
        form.reset();
      } else {
        toast.error(response?.message || "Failed to submit message. Please try again.");
      }
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || "Something went wrong.";
      toast.error(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Contact Hero */}
      <section className="bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle blur circles */}
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full bg-orange-500/20 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-lg text-white/95 max-w-xl mx-auto font-medium">
            Have questions about our AI courses, corporate trainings, or enrollment? Our support specialists are here to guide you.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-4">
              Contact Information
            </h2>
            
            {/* Email Support */}
            <div className="bg-orange-50/50 border border-orange-100 rounded-3xl p-6 hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="p-3.5 bg-[var(--brand-orange)] text-white rounded-2xl shadow-sm">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-gray-900 text-sm mb-1 uppercase tracking-wider">Email Us</h3>
                <a href="mailto:support@smartffi.ai" className="text-gray-650 text-sm hover:underline font-semibold">
                  support@smartffi.ai
                </a>
                <p className="text-xs text-gray-500 mt-1 leading-normal">Online ticketing system operates 24/7</p>
              </div>
            </div>

            {/* Phone Support */}
            <div className="bg-red-50/50 border border-red-100 rounded-3xl p-6 hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="p-3.5 bg-[var(--brand-red)] text-white rounded-2xl shadow-sm">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-gray-900 text-sm mb-1 uppercase tracking-wider">Call Support</h3>
                <a href="tel:+919876543210" className="text-gray-650 text-sm hover:underline font-semibold">
                  +91 98765 43210
                </a>
                <p className="text-xs text-gray-500 mt-1 leading-normal">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>

            {/* WhatsApp Support */}
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="p-3.5 bg-emerald-500 text-white rounded-2xl shadow-sm">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-gray-900 text-sm mb-1 uppercase tracking-wider">WhatsApp Us</h3>
                <a 
                  href="https://wa.me/919821553489" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-650 text-sm hover:underline font-semibold"
                >
                  +91 98215 53489
                </a>
                <p className="text-xs text-gray-500 mt-1 leading-normal">Fast support. Mon - Sun: 9:00 AM - 9:00 PM IST</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-amber-50/40 border border-amber-100/60 rounded-3xl p-6 hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="p-3.5 bg-amber-500 text-white rounded-2xl shadow-sm">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-gray-900 text-sm mb-1 uppercase tracking-wider">Our HQ</h3>
                <p className="text-gray-655 text-sm font-semibold leading-relaxed">
                  Sector 62, Innovation Park,<br />
                  Noida, Uttar Pradesh, 201301
                </p>
              </div>
            </div>
          </div>

          {/* Right Columns: Feedback Contact Form */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-xl">
            {!isSubmitted ? (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Send us a Message
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Fill out the form below and we will get back to you within 24 business hours.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900 h-auto"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900 h-auto"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Message
                          </FormLabel>
                          <FormControl>
                            <textarea
                              placeholder="How can we help you?"
                              rows={5}
                              className="w-full p-4 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900 leading-relaxed resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-95 hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55 shadow-sm"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4.5 w-4.5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4.5 w-4.5" />
                        </>
                      )}
                    </button>
                  </form>
                </Form>
              </>
            ) : (
              <div className="text-center py-12 space-y-6 max-w-md mx-auto animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 shadow-sm">
                  <HelpCircle className="h-10 w-10 animate-bounce" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                    Thank you!
                  </h2>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed font-semibold">
                    We have received your message and will review it immediately.
                  </p>
                </div>
                <div className="p-4 bg-orange-50/50 border border-orange-100 rounded-2xl text-xs text-left text-orange-850 leading-relaxed font-medium">
                  <strong>Notice:</strong> A confirmation email outline was sent to your registered address. For immediate training inquiries, please use the direct telephone number listed on the left panel.
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--brand-orange)] hover:underline"
                >
                  Send another message
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
