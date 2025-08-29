import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import styled from 'styled-components';

const WhatsAppFloat = ({ 
  phoneNumber, 
  message = "Hello! I’m interested in your art advisory." 
}) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const pageHeight = document.documentElement.scrollHeight;
      const halfwayPoint = pageHeight / 2;
      setScrolled(scrollPosition > halfwayPoint && !formSubmitted);
      setShowContactForm(scrollPosition > halfwayPoint && !formSubmitted);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [formSubmitted]);

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
  };

  return (
    <>
      {/* Main WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        <div className="relative">
          <button
            onClick={handleWhatsAppClick}
            className="group relative bg-black hover:bg-gray-800 text-white rounded-full p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Contact us on WhatsApp"
          >
            <div className="absolute -inset-1 bg-black rounded-full animate-ping opacity-30"></div>
            <WhatsAppIcon />
            <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-md font-montserrat">
              Expert Art Advice Now
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          </button>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-400 border-2 border-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && !formSubmitted && (
        <StyledModal onClick={handleClose}>
          <StyledWrapper onClick={(e) => e.stopPropagation()}>
            <div className="form-container">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-black transition-colors"
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
                  />
                </div>
                <button className="form-submit-btn" type="submit" disabled={isSubmitting}>
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
        
        @media (max-width: 640px) {
          .fixed.bottom-6.right-6 {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
};

const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
  }

  .title-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .btn-shine {
    padding: 12px 48px;
    color: #fff;
    background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    white-space: nowrap;
    font-family: "Poppins", sans-serif;
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

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    background-color: transparent;
    width: 13em;
    height: 3.3em;
    border: 2px solid #1abc9c;
    border-radius: 25px;
    font-weight: bold;
    text-transform: uppercase;
    color: #1abc9c;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    align-self: center;
  }

  .form-container .form-submit-btn .txt {
    transition: .4s ease-in-out;
    position: absolute;
  }

  .form-container .form-submit-btn .txt2 {
    transform: translateY(1em) scale(0);
    color: #212121;
    position: absolute;
  }

  .form-container .form-submit-btn .loader-container {
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

  .form-container .form-submit-btn .loader-container .loader {
    height: 100%;
    width: 100%;
    background-color: #1abc9c;
    border-radius: inherit;
    transform: translateX(-13em);
  }

  .form-container .form-submit-btn:focus,
  .form-container .form-submit-btn.submitted {
    transition: .4s ease-in-out .4s;
    animation: scaling 1.5s ease-in-out 0s 1 both;
  }

  .form-container .form-submit-btn:focus .txt,
  .form-container .form-submit-btn.submitted .txt {
    position: absolute;
    transform: translateY(-5em);
    transition: .4s ease-in-out;
  }

  .form-container .form-submit-btn:focus .txt2,
  .form-container .form-submit-btn.submitted .txt2 {
    transform: translateY(0) scale(1);
    transition: .3s ease-in-out 1.7s;
  }

  .form-container .form-submit-btn:focus .loader,
  .form-container .form-submit-btn.submitted .loader {
    display: block;
    transform: translate(0);
    transition: .8s cubic-bezier(0,.4,1,.28) .4s;
  }

  @keyframes scaling {
    20% {
      height: 1.5em;
    }
    80% {
      height: 1.5em;
    }
    100% {
      height: 3.3em;
    }
  }

  @media (max-width: 480px) {
    .form-container {
      width: 100%;
      max-width: 300px;
    }
  }
`;

export default WhatsAppFloat;