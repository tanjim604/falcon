"use client";

import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnjwqwlr");

  if (state.succeeded) {
    return (
      <section id="contact-us" className="bg-transparent py-24 px-6 text-center">
        <div className="max-w-md mx-auto bg-black/40 backdrop-blur-md p-12 rounded-3xl border border-[#e63928]/30 shadow-2xl">
          <CheckCircle className="w-16 h-16 text-[#e63928] mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4 uppercase">Message Sent</h2>
          <p className="text-gray-400 text-sm mb-8">
            Thank you for reaching out. A Falcon Security representative will contact you shortly.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-[#e63928] font-bold uppercase tracking-widest text-xs hover:underline"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-us" className="bg-transparent py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase italic text-white">
            How to <span className="text-[#e63928]">Contact Us</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Ready to secure your assets? Reach out to our expert team for a custom security consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <div className="space-y-12 text-white">
            <div className="flex items-start gap-6 group">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 group-hover:border-[#e63928] transition-colors">
                <Mail className="text-[#e63928] w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 uppercase tracking-tight">Chat With Us</h3>
                <p className="text-gray-500 text-sm">falconsecurity26@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 group-hover:border-[#e63928] transition-colors">
                <Phone className="text-[#e63928] w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 uppercase tracking-tight">Phone</h3>
                <p className="text-gray-500 text-sm">+1 778 910 7666</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 group-hover:border-[#e63928] transition-colors">
                <MapPin className="text-[#e63928] w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 uppercase tracking-tight">Office</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  380 Pemberton Terrace, Kamloops,<br />
                  BC, V2C 1T4, Canada
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form Box */}
          <div 
            id="form-anchor" 
            className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative scroll-mt-32"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name Input - Required */}
              <div className="relative">
                <input 
                  required
                  type="text" 
                  name="name"
                  id="name"
                  className="w-full bg-transparent border border-white/20 rounded-lg p-4 outline-none focus:border-[#e63928] transition-all peer placeholder-transparent text-white" 
                  placeholder="Your Name" 
                />
                <label 
                  htmlFor="name"
                  className="absolute left-4 -top-3 bg-[#240a04] px-2 text-xs text-gray-400 peer-focus:text-[#e63928] transition-all uppercase tracking-widest"
                >
                  Your Name
                </label>
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-[#e63928] text-[10px] mt-1 italic" />
              </div>

              {/* Phone Input - Required */}
              <div className="relative">
                <input 
                  required
                  type="tel" 
                  name="phone"
                  id="phone"
                  className="w-full bg-transparent border border-white/20 rounded-lg p-4 outline-none focus:border-[#e63928] transition-all peer placeholder-transparent text-white" 
                  placeholder="Phone Number" 
                />
                <label 
                  htmlFor="phone"
                  className="absolute left-4 -top-3 bg-[#240a04] px-2 text-xs text-gray-400 peer-focus:text-[#e63928] transition-all uppercase tracking-widest"
                >
                  Phone Number
                </label>
                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-[#e63928] text-[10px] mt-1 italic" />
              </div>

              {/* Email Input - OPTIONAL (Removed 'required' attribute) */}
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  className="w-full bg-transparent border border-white/20 rounded-lg p-4 outline-none focus:border-[#e63928] transition-all peer placeholder-transparent text-white" 
                  placeholder="Your Email (Optional)" 
                />
                <label 
                  htmlFor="email"
                  className="absolute left-4 -top-3 bg-[#240a04] px-2 text-xs text-gray-400 peer-focus:text-[#e63928] transition-all uppercase tracking-widest"
                >
                  Your Email (Optional)
                </label>
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[#e63928] text-[10px] mt-1 italic" />
              </div>

              {/* Message Input - Required */}
              <div className="relative">
                <textarea 
                  required
                  name="message"
                  id="message"
                  className="w-full bg-transparent border border-white/20 rounded-lg p-4 h-32 outline-none focus:border-[#e63928] transition-all peer placeholder-transparent text-white resize-none" 
                  placeholder="Message"
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-4 -top-3 bg-[#240a04] px-2 text-xs text-gray-400 peer-focus:text-[#e63928] transition-all uppercase tracking-widest"
                >
                  Message
                </label>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-[#e63928] text-[10px] mt-1 italic" />
              </div>

              <button 
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#e63928] hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all uppercase tracking-[0.2em] shadow-lg active:scale-95 disabled:opacity-50 flex justify-center items-center gap-3"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}