import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SimpleEnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted");
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-card border-border border rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="relative p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-4 sm:mb-6">
            <div className="space-y-1 sm:space-y-2 pr-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                {isSubmitted ? "Thank You!" : "Let's Speak"}
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                {isSubmitted
                  ? "We've received your enquiry and will get back to you within 24 hours."
                  : "Tell us about your need and we'll get back to you within 24 hours."}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {!isSubmitted ? (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="h-10 sm:h-11"
                  />
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="h-10 sm:h-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </Label>
                  <Input id="company" type="text" className="h-10 sm:h-11" />
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input id="phone" type="tel" className="h-10 sm:h-11" />
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <Label htmlFor="service" className="text-sm font-medium">
                  Service Interested In
                </Label>
                <select
                  id="service"
                  className="w-full h-10 sm:h-11 px-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="">Select a service</option>
                  <option value="ai">AI Solutions</option>
                  <option value="digital-experience">Digital Experience</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="digital-transformation">
                    Digital Transformation
                  </option>
                  <option value="iot">IoT Solutions</option>
                  <option value="cybersecurity">Cyber Security</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <Label htmlFor="message" className="text-sm font-medium">
                  Project Details
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={3}
                  className="resize-none text-sm"
                />
              </div>

              <div className="flex flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-11 sm:h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 h-11 sm:h-12 hover:bg-muted hover:text-muted-foreground transition-all duration-300 text-sm sm:text-base"
                >
                  Cancel
                </Button>
              </div>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-6 sm:py-8 space-y-4 sm:space-y-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Our team will contact you shortly. You can also reach us
                  directly at{" "}
                  <a
                    href="mailto:info@cumulusclad.com"
                    className="text-primary hover:underline break-all"
                  >
                    info@cumulusclad.com
                  </a>
                </p>
              </div>

              <Button
                onClick={handleClose}
                className="h-11 sm:h-12 px-6 sm:px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleEnquiryModal;
