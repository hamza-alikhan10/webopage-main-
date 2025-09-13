import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import styled from 'styled-components';

const WhatsAppFloat = ({ 
  phoneNumber, 
  message = "Hello! I'm interested in your art advisory." 
}) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canShowForm, setCanShowForm] = useState(true);
  const [lastCloseTime, setLastCloseTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(() => {
    return localStorage.getItem('formSubmitted') === 'true';
  });

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

  // Handle 25-second delay after form is closed
  useEffect(() => {
    let timer;
    if (lastCloseTime) {
      setCanShowForm(false);
      timer = setTimeout(() => {
        setCanShowForm(true);
      }, 20000); // 20 seconds
    }
    return () => clearTimeout(timer);
  }, [lastCloseTime]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const pageHeight = document.documentElement.scrollHeight;
      const halfwayPoint = pageHeight / 2;
      const shouldShow = scrollPosition > halfwayPoint && !formSubmitted && canShowForm;
      setScrolled(scrollPosition > halfwayPoint);
      setShowContactForm(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [formSubmitted, canShowForm]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const formEndpoint = "https://api.web3forms.com/submit";
      const formDataObject = new FormData();
      formDataObject.append("access_key", "d10e42be-f2df-4127-a6f7-cec9b26fded9");
      formDataObject.append("name", formData.name);
      formDataObject.append("phone", formData.phone);
      formDataObject.append("subject", "Art Advisory Contact Request - Gallery");

      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formDataObject,
      });

      if (response.ok) {
        setFormData({ name: "", phone: "" });
        setShowContactForm(false);
        setFormSubmitted(true);
        localStorage.setItem('formSubmitted', 'true');
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setShowContactForm(false);
    setLastCloseTime(Date.now());
  };

  return (
    <>
      {/* Main WhatsApp Float Button */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2 sm:bottom-6 sm:right-6">
        <div className="relative">
          <button
            onClick={handleWhatsAppClick}
            className="group relative bg-black hover:bg-gray-800 text-white rounded-full p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Contact us on WhatsApp"
          >
            <div className="absolute -inset-1 bg-black rounded-full animate-ping opacity-30"></div>
            <WhatsAppIcon />
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-md font-montserrat">
              Expert Art Advice Now
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          </button>
          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 border-2 border-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && !formSubmitted && (
        <StyledModal onClick={handleClose}>
          <StyledWrapper onClick={(e) => e.stopPropagation()}>
            <div className="form-container">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="title-container">
                <span className="btn-shine">Complimentary Art Guidance!</span>
              </div>
              <form className="form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <button className={`form-submit-btn ${isSubmitting ? 'submitted' : ''}`} type="submit" disabled={isSubmitting}>
                  <span className="txt">submit</span>
                  <span className="txt2">sent!</span>
                  <span className="loader-container">
                    <span className="loader" />
                  </span>
                </button>
              </form>
            </div>
          </StyledWrapper>
        </StyledModal>
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
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </>
  );
};

const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledWrapper = styled.div`
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(60px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .form-container {
    width: 100%;
    max-width: 420px;
    min-width: 320px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 2rem;
    font-size: 1rem;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    box-sizing: border-box;
    border-radius: 1.25rem;
    position: relative;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .title-container {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .btn-shine {
    padding: 0.75rem 2rem;
    color: #fff;
    background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    font-weight: 700;
    font-size: 1.125rem;
    text-decoration: none;
    white-space: nowrap;
    font-family: "Poppins", sans-serif;
    text-align: center;
    letter-spacing: 0.5px;
  }

  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    display: block;
    color: #b0b0b0;
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.3px;
  }

  .form-group input {
    width: 100%;
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    color: #fff;
    font-family: inherit;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1.5px solid #414141;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  .form-group input::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  .form-group input:focus {
    outline: none;
    border-color: #e81cff;
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(232, 28, 255, 0.1);
  }

  .form-submit-btn {
    background-color: transparent;
    width: 12rem;
    height: 3rem;
    border: 2.5px solid #1abc9c;
    border-radius: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #1abc9c;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    align-self: center;
    font-size: 0.875rem;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    margin-top: 0.5rem;
  }

  .form-submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(26, 188, 156, 0.3);
  }

  .form-submit-btn .txt {
    transition: .4s ease-in-out;
    position: absolute;
  }

  .form-submit-btn .txt2 {
    transform: translateY(1em) scale(0);
    color: #212121;
    position: absolute;
  }

  .form-submit-btn .loader-container {
    height: 100%;
    width: 100%;
    background-color: transparent;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    overflow: hidden;
  }

  .form-submit-btn .loader-container .loader {
    height: 100%;
    width: 100%;
    background-color: #1abc9c;
    border-radius: inherit;
    transform: translateX(-12rem);
  }

  .form-submit-btn:focus,
  .form-submit-btn.submitted {
    transition: .4s ease-in-out .4s;
    animation: scaling 1.5s ease-in-out 0s 1 both;
  }

  .form-submit-btn:focus .txt,
  .form-submit-btn.submitted .txt {
    position: absolute;
    transform: translateY(-5em);
    transition: .4s ease-in-out;
  }

  .form-submit-btn:focus .txt2,
  .form-submit-btn.submitted .txt2 {
    transform: translateY(0) scale(1);
    transition: .3s ease-in-out 1.7s;
  }

  .form-submit-btn:focus .loader,
  .form-submit-btn.submitted .loader {
    display: block;
    transform: translate(0);
    transition: .8s cubic-bezier(0,.4,1,.28) .4s;
  }

  @keyframes scaling {
    20% {
      height: 1.5rem;
    }
    80% {
      height: 1.5rem;
    }
    100% {
      height: 3rem;
    }
  }

  /* Tablet Styles */
  @media (max-width: 768px) and (min-width: 641px) {
    .form-container {
      max-width: 380px;
      padding: 1.75rem;
    }

    .btn-shine {
      font-size: 1rem;
      padding: 0.625rem 1.5rem;
    }

    .form-group input {
      padding: 0.875rem 1rem;
      font-size: 0.9rem;
    }

    .form-submit-btn {
      width: 11rem;
      height: 2.75rem;
    }

    .form-submit-btn .loader-container .loader {
      transform: translateX(-11rem);
    }

    @keyframes scaling {
      20% {
        height: 1.375rem;
      }
      80% {
        height: 1.375rem;
      }
      100% {
        height: 2.75rem;
      }
    }
  }

  /* Mobile Styles */
  @media (max-width: 640px) {
    .form-container {
      max-width: 340px;
      min-width: 280px;
      padding: 1.5rem 1.25rem;
    }

    .btn-shine {
      padding: 0.5rem 1.25rem;
      font-size: 0.9rem;
    }

    .form-group input {
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
    }

    .form-group label {
      font-size: 0.8rem;
    }

    .form-submit-btn {
      width: 10rem;
      height: 2.5rem;
      font-size: 0.8rem;
    }

    .form-submit-btn .loader-container .loader {
      transform: translateX(-10rem);
    }

    @keyframes scaling {
      20% {
        height: 1.25rem;
      }
      80% {
        height: 1.25rem;
      }
      100% {
        height: 2.5rem;
      }
    }
  }

  /* Small Mobile Styles */
  @media (max-width: 480px) {
    .form-container {
      max-width: 300px;
      min-width: 260px;
      padding: 1.25rem 1rem;
    }

    .btn-shine {
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
    }

    .form-group input {
      padding: 0.625rem 0.875rem;
      font-size: 0.8rem;
    }

    .form-group label {
      font-size: 0.75rem;
    }

    .form-submit-btn {
      width: 9rem;
      height: 2.25rem;
      font-size: 0.75rem;
    }

    .form-submit-btn .loader-container .loader {
      transform: translateX(-9rem);
    }

    @keyframes scaling {
      20% {
        height: 1.125rem;
      }
      80% {
        height: 1.125rem;
      }
      100% {
        height: 2.25rem;
      }
    }
  }

  /* Extra Small Mobile */
  @media (max-width: 360px) {
    .form-container {
      max-width: 280px;
      min-width: 240px;
      padding: 1rem 0.875rem;
    }

    .btn-shine {
      padding: 0.4rem 0.875rem;
      font-size: 0.75rem;
    }

    .form-group input {
      padding: 0.5rem 0.75rem;
      font-size: 0.75rem;
    }

    .form-group label {
      font-size: 0.7rem;
    }

    .form-submit-btn {
      width: 8rem;
      height: 2rem;
      font-size: 0.7rem;
    }

    .form-submit-btn .loader-container .loader {
      transform: translateX(-8rem);
    }

    @keyframes scaling {
      20% {
        height: 1rem;
      }
      80% {
        height: 1rem;
      }
      100% {
        height: 2rem;
      }
    }
  }
`;

export default WhatsAppFloat;