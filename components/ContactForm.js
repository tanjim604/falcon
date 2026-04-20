import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact-us" className="bg-brand-dark py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase italic text-white">
            How to <span className="text-brand-red">Contact Us</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dolor elit nam ac libero eget purus in. 
            Proin integer in malesuada in et egestas adipiscing lacinia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div className="flex items-start gap-6 group">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 group-hover:border-brand-red transition-colors">
                <Mail className="text-brand-red w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Chat With Us</h3>
                <p className="text-gray-500 text-sm">falconsecurity26@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 group-hover:border-brand-red transition-colors">
                <Phone className="text-brand-red w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
                <p className="text-gray-500 text-sm">+1 778 910 7666</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 group-hover:border-brand-red transition-colors">
                <MapPin className="text-brand-red w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Office</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  380 Pemberton Terrace, Kamloops,<br />
                  BC, V2C 1T4, Canada
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-black/40 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
            <form className="space-y-10">
              {/* Floating Label Input: Name */}
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-transparent border border-white/20 rounded-lg p-4 outline-none focus:border-brand-red transition-all peer placeholder-transparent text-white" 
                  placeholder="Your Name" 
                />
                <label 
                  htmlFor="name"
                  className="absolute left-4 -top-3 bg-[#0a0a0a] px-2 text-xs text-gray-400 peer-focus:text-brand-red transition-all uppercase tracking-widest"
                >
                  Your Name
                </label>
              </div>

              {/* Floating Label Input: Email */}
              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-transparent border border-white/20 rounded-lg p-4 outline-none focus:border-brand-red transition-all peer placeholder-transparent text-white" 
                  placeholder="Your Email" 
                />
                <label 
                  htmlFor="email"
                  className="absolute left-4 -top-3 bg-[#0a0a0a] px-2 text-xs text-gray-400 peer-focus:text-brand-red transition-all uppercase tracking-widest"
                >
                  Your Email
                </label>
              </div>

              {/* Floating Label Input: Subject */}
              <div className="relative">
                <input 
                  type="text" 
                  id="subject"
                  className="w-full bg-transparent border border-white/20 rounded-lg p-4 outline-none focus:border-brand-red transition-all peer placeholder-transparent text-white" 
                  placeholder="Subject" 
                />
                <label 
                  htmlFor="subject"
                  className="absolute left-4 -top-3 bg-[#0a0a0a] px-2 text-xs text-gray-400 peer-focus:text-brand-red transition-all uppercase tracking-widest"
                >
                  Subject
                </label>
              </div>

              {/* Floating Label Input: Message */}
              <div className="relative">
                <textarea 
                  id="message"
                  className="w-full bg-transparent border border-white/20 rounded-lg p-4 h-32 outline-none focus:border-brand-red transition-all peer placeholder-transparent text-white resize-none" 
                  placeholder="Message"
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-4 -top-3 bg-[#0a0a0a] px-2 text-xs text-gray-400 peer-focus:text-brand-red transition-all uppercase tracking-widest"
                >
                  Message
                </label>
              </div>

              {/* Send Button */}
              <button 
                type="submit"
                className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all uppercase tracking-[0.2em] shadow-lg active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}