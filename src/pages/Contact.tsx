import { MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import '../App.css';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    city: '',
    indoor: false,
    outdoor: false,
    timeline: '',
    sculptureType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields: name, phone, city
    if (!formData.firstName.trim()) {
      toast({ title: "Error", description: "Please enter your name." });
      return;
    }
    if (!formData.phone.trim()) {
      toast({ title: "Error", description: "Please enter your phone number." });
      return;
    }
    if (!formData.city.trim()) {
      toast({ title: "Error", description: "Please enter your country/city." });
      return;
    }

    const formEndpoint = "https://api.web3forms.com/submit";
    const formDataObject = new FormData();
    formDataObject.append("access_key", "d10e42be-f2df-4127-a6f7-cec9b26fded9");
    formDataObject.append("subject", `New Enquiry from ${formData.firstName}`);
    formDataObject.append("name", formData.firstName);
    formDataObject.append("phone", formData.phone);
    if (formData.email) formDataObject.append("email", formData.email);
    formDataObject.append("city", formData.city);
    
    const locationType = [];
    if (formData.indoor) locationType.push("Indoor");
    if (formData.outdoor) locationType.push("Outdoor");
    formDataObject.append("locationType", locationType.length > 0 ? locationType.join(", ") : "Not specified");
    
    formDataObject.append("timeline", formData.timeline || "Not specified");
    formDataObject.append("sculptureType", formData.sculptureType || "Not specified");
    formDataObject.append("message", formData.message || "Not provided");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formDataObject,
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for reaching out to us. Your response has been recorded, Our team shall get back to you shortly.",
        });
        setFormData({ 
          firstName: "", phone: "", email: "", city: "",
          indoor: false, outdoor: false,
          timeline: "", sculptureType: "", message: "" 
        });
      } else {
        toast({ title: "Error", description: "Something went wrong. Please Try again!" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Network issue. Please try again." });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneClick = () => window.location.href = 'tel:+919650006385';
  const handleMapClick = () => {
    const address = encodeURIComponent("Block A, Sector 43, Noida, Uttar Pradesh 201303");
    window.open(`https://www.google.com/maps?q=${address}`, '_blank');
  };

  return (
    <div className="w-full min-h-screen bg-beige page-shell">
      <Navbar />
      
      <div className="mx-auto max-w-7xl">
        <div className="bg-[#F5F5F5] border border-[#FDE1D3] md:p-16 sm:p-10 py-8 px-5">
          <h3 className="sm:text-xl sm:font-semibold text-lg mb-10 text-center">Begin a conversation</h3>
          <div className="flex flex-col space-y-2 md:space-y-6 max-w-3xl mx-auto">
            <Input
              type="text"
              name="firstName"
              placeholder="Name *"
              className="placeholder:text-sm sm:placeholder:text-[15px]"
              value={formData.firstName}
              onChange={handleChange}
            />
            <div className="grid md:grid-cols-2 gap-2 md:gap-6">
              <Input
                type="tel"
                name="phone"
                placeholder="Phone *"
                className="placeholder:text-sm sm:placeholder:text-[15px]"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email (optional)"
                className="placeholder:text-sm sm:placeholder:text-[15px]"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <Input
              type="text"
              name="city"
              placeholder="Country/City *"
              className="placeholder:text-sm sm:placeholder:text-[15px]"
              value={formData.city}
              onChange={handleChange}
            />

            <div className="space-y-2">
              <label className="text-sm sm:text-[15px] text-gray-700">Location Type</label>
              <div className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="indoor" 
                    checked={formData.indoor}
                    onCheckedChange={(checked) => setFormData({...formData, indoor: checked as boolean})}
                  />
                  <label htmlFor="indoor" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Indoor
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="outdoor" 
                    checked={formData.outdoor}
                    onCheckedChange={(checked) => setFormData({...formData, outdoor: checked as boolean})}
                  />
                  <label htmlFor="outdoor" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Outdoor
                  </label>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-2 md:gap-6">
              <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                <SelectTrigger className="placeholder:text-sm sm:placeholder:text-[15px]">
                  <SelectValue placeholder="Timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1 month">1 Month</SelectItem>
                  <SelectItem value="2 months">2 Months</SelectItem>
                  <SelectItem value="3 months">3 Months</SelectItem>
                  <SelectItem value="4 months">4 Months</SelectItem>
                  <SelectItem value="5 months">5 Months</SelectItem>
                  <SelectItem value="6+ months">6+ Months</SelectItem>
                </SelectContent>
              </Select>

              <Input
                type="text"
                name="sculptureType"
                placeholder="Type of sculpture (wall/floor standing/other)"
                className="placeholder:text-sm sm:placeholder:text-[15px]"
                value={formData.sculptureType}
                onChange={handleChange}
              />
            </div>

            <Textarea
              name="message"
              placeholder="Brief site description"
              value={formData.message}
              onChange={handleChange}
              className="resize-none pb-10"
            />
            <Button 
              type="button" 
              onClick={handleSubmit}
              className="bg-black text-white hover:bg-gray-800 px-8 mx-auto"
            >
              Send enquiry
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="mt-5">
          <img src="./DON5.jpg" alt="Studio" className="w-full object-cover rounded-lg" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;