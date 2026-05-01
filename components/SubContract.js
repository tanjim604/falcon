"use client"; // Required for hooks

import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';

export default function SubContract() {
  const [state, handleSubmit] = useForm('xpqbznyq');

  if (state.succeeded) {
    return (
      <section className="py-20 bg-white flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-black text-black uppercase">Thank You!</h2>
          <p className="text-gray-600">Your partnership request has been sent successfully. We will be in touch soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="subcontract" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/diverseAll2.jpg" 
                alt="Security Partnership"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-nav/5" />
            </div>
          </div>

          {/* Right Side: Content & Form */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-black uppercase italic">
                Sub-Contracting <span className="text-brand-red tracking-widest">Partnerships</span>
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-xl">
                Falcon Security Ltd is looking to expand its reach. We invite professional security agencies to collaborate with us on major projects.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="company-name" className="text-sm font-bold uppercase tracking-wider text-black">
                    Company Name <span className="text-brand-red">*</span>
                  </label>
                  <input 
                    id="company-name"
                    type="text" 
                    name="company-name" 
                    placeholder="Enter your agency name" 
                    required 
                    className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-red focus:bg-white transition-all shadow-sm"
                  />
                  <ValidationError prefix="Company" field="company-name" errors={state.errors} className="text-red-500 text-xs" />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-black">
                    Business Email <span className="text-brand-red">*</span>
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    name="email" 
                    placeholder="email@company.com" 
                    required 
                    className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-red focus:bg-white transition-all shadow-sm"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
                </div>
              </div>

              {/* Service Area */}
              <div className="flex flex-col gap-2">
                <label htmlFor="location" className="text-sm font-bold uppercase tracking-wider text-black">
                  Service Area / City
                </label>
                <input 
                  id="location"
                  type="text" 
                  name="location" 
                  placeholder="e.g. Kamloops, Kelowna, Vancouver" 
                  className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-red focus:bg-white transition-all shadow-sm"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-black">
                  Partnership Details
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="4" 
                  placeholder="Tell us about your team and specialized services..." 
                  className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl text-black placeholder:text-gray-400 focus:outline-none focus:border-brand-red focus:bg-white transition-all shadow-sm resize-none"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
              </div>
              
              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full bg-black hover:bg-brand-red text-white font-black py-5 rounded-xl uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-brand-red/20 hover:-translate-y-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Partnership Request'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}