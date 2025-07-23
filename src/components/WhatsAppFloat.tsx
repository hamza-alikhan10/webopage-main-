import React, { useState, useEffect } from 'react';
import { X, MessageSquare, ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface WhatsAppFloatProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppFloat = ({ 
  phoneNumber, 
  message = "Hello! I'm interested in your art consultation services." 
}: WhatsAppFloatProps) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // WhatsApp SVG Icon
  const WhatsAppIcon = () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"
        fill="currentColor"
      />
    </svg>
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = async () => {
    if (!formData.firstName || !formData.phone) {
      alert("Please fill in your name and phone number");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const formEndpoint = "https://api.web3forms.com/submit";
      const formDataObject = new FormData();
      formDataObject.append("access_key", "d10e42be-f2df-4127-a6f7-cec9b26fded9");
      formDataObject.append("name", formData.firstName);
      formDataObject.append("phone", formData.phone);
      formDataObject.append("message", formData.message || "Request for complimentary art advisory");
      formDataObject.append("subject", "Art Advisory Contact Request - Gallery");

      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formDataObject,
      });

      if (response.ok) {
        alert("Thank you! We'll contact you shortly for your complimentary art advisory.");
        setFormData({ firstName: "", phone: "", message: "" });
        setShowContactForm(false);
      } else {
        alert("Something went wrong. Please try again!");
      }
    } catch (error) {
      alert("Network issue. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Main WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        {/* Contact Form Trigger - Shows after scrolling */}
        {scrolled && (
          <div 
            className="bg-[#F5F5F5] border border-[#FDE1D3] rounded-lg shadow-sm p-4 max-w-xs cursor-pointer hover:shadow-md transition-all duration-300 transform hover:scale-105 animate-slideInRight"
            onClick={() => setShowContactForm(true)}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full hover:bg-gray-200 transition-transform hover:scale-110">
                <MessageSquare className="w-5 h-5 text-gray-700 hover:text-black" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 font-montserrat">Connect with Us</p>
                <p className="text-xs text-gray-600 font-montserrat">Sculptural Solutions for Every Venue</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <div className="relative">
          <button
            onClick={handleWhatsAppClick}
            className="group relative bg-black hover:bg-gray-800 text-white rounded-full p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Contact us on WhatsApp"
          >
            {/* Pulse animation ring */}
            <div className="absolute -inset-1 bg-black rounded-full animate-ping opacity-30"></div>
            
            {/* WhatsApp Icon */}
            <WhatsAppIcon />
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-md font-montserrat">
            Expert Art Advice Now
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          </button>

          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-400 border-2 border-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
          <div className="bg-[#F5F5F5] border border-[#FDE1D3] rounded-lg shadow-md max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-[#EDEDED] text-white p-6 rounded-t-lg relative">
              <button
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="sm:text-xl sm:font-semibold text-gray-800 text-lg mb-2 font-montserrat text-center">Complimentary Art Guidance!</h3>
            
            </div>

            {/* Form */}
            <div className="p-6 space-y-6">
              <div>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#FDE1D3] rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all font-montserrat placeholder:text-sm"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#FDE1D3] rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all font-montserrat placeholder:text-sm"
                />
              </div>

              

              {/* Benefits */}
              <div className="bg-[#EDEDED] p-4 rounded-lg border border-[#FDE1D3]">
                <h4 className="font-semibold text-gray-800 mb-2 font-montserrat">What you'll receive:</h4>
                <ul className="text-sm text-gray-600 space-y-1 font-montserrat">
                  <li>✅ Personalized art consultation</li>
                  <li>✅ Curated artwork recommendations</li>
                  <li>✅ Budget-friendly solutions</li>
                  <li>✅ Expert advice on art selection</li>
                </ul>
              </div>

              <Button
                type="button"
                onClick={handleFormSubmit}
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 font-montserrat mx-auto"
              >
                {isSubmitting ? "Submitting..." : "SUBMIT"}
              </Button>

              
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        
        @media (max-width: 640px) {
          .fixed.bottom-6.right-6 {
            bottom: 1rem;
            right: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .max-w-xs {
            max-w-250px;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;