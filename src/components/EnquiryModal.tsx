import React, { useState } from 'react';
import { Send, User, Phone, Mail, Home, X } from 'lucide-react';
import { RemoveScroll } from 'react-remove-scroll';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [result, setResult] = useState("");

  // If the modal is not open, render nothing
  if (!isOpen) return null;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "4cd3ed13-ca5f-46f8-bff5-13301215a912");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! Our sales team will contact you shortly.");
      event.currentTarget.reset();
      // Optional: Auto-close the modal after 3 seconds on success
      setTimeout(() => {
        onClose();
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <RemoveScroll>
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
      
      {/* Darkened Background Backdrop (Clicking it closes the modal) */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Outer Container - strictly constrained to viewport height */}
      <div className="relative w-full max-w-4xl max-h-[95dvh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Fixed Close 'X' Button - Now pinned outside the scroll area */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-200 rounded-full transition-colors shadow-sm"
        >
          <X size={20} className="text-slate-900" />
        </button>

        {/* Scrollable Inner Content Area */}
        <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto">
          
          {/* Left Side: Contact Info */}
          <div className="w-full md:w-2/5 shrink-0 bg-slate-900 text-white sm:p-8 p-5 pt-10 sm:p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
            
            <h3 className="text-3xl font-extrabold mb-4 relative z-10 pr-8">Register Your Interest</h3>
            <p className="hidden sm:block text-gray-400 mb-8 relative z-10 text-sm leading-relaxed">
              Leave your details below and our luxury property consultants will get in touch to schedule your exclusive site visit.
            </p>
            
            <div className="hidden sm:block sm:space-y-4 sm:relative sm:z-10">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-full"><Phone size={16} className="text-amber-400"/></div>
                <span className="text-sm font-medium">+919910815516</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-full"><Mail size={16} className="text-amber-400"/></div>
                <span className="text-sm font-medium">sales@aarambhinfra.com</span>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="w-full md:w-3/5 shrink-0 p-6 sm:p-10">
            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
              
              <div className="relative">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Interested In</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Home size={18} className="text-gray-400" />
                  </div>
                  <select 
                    name="interest" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all appearance-none text-slate-700"
                  >
                    <option value="4 BHK Villa (2727 sqft)">5 BHK Villa (1887 sqft)</option>
                    <option value="5 BHK Villa (1989 sqft)">5 BHK Villa (1989 sqft)</option>
                    <option value="5 BHK Villa (2035 sqft)">5 BHK Villa (2035 sqft)</option>
                    <option value="6 BHK Villa (2727 sqft)">6 BHK Villa (2727 sqft)</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-amber-400 text-slate-900 font-bold py-4 rounded-lg hover:bg-amber-500 active:bg-amber-500 transition-colors duration-300 shadow-lg shadow-amber-400/20 mt-4"
              >
                <Send size={20} />
                Submit Enquiry
              </button>

              {result && (
                <p className={`text-center text-sm font-medium mt-4 ${result.includes("Thank you") ? "text-green-600" : "text-amber-600"}`}>
                  {result}
                </p>
              )}

            </form>
          </div>
        </div>
      </div>
    </div>
    </RemoveScroll>
  );
};

export default EnquiryModal;