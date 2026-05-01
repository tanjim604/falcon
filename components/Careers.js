import { Mail, Briefcase, Users, Clock } from 'lucide-react';

export default function Careers() {
  const benefits = [
    {
        icon: <Users className="w-6 h-6 text-[#e63928]" />,
        title: "Team Support",
        desc: "Join a collaborative environment where experienced guards and management work together to ensure everyone's safety and success."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#e63928]" />,
      title: "Flexible Shifts",
      desc: "24/7 operations mean we offer various schedules to fit your lifestyle in Kamloops."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#e63928]" />,
      title: "Local Growth",
      desc: "Join a locally owned firm with deep roots and a strong reputation in the community."
    }
  ];

  return (
    <section id="careers" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Information */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[#e63928] font-black uppercase tracking-widest text-sm mb-4">
                Join The Team
              </h4>
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase italic leading-tight tracking-tight">
                Start Your Career At <span className="text-[#e63928]">Falcon Security</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              We are always looking for dedicated, vigilant, and professional individuals to join 
              our growing team in Kamloops. Whether you are an experienced investigator or 
              looking to start your career in security, we provide a supportive environment 
              built on integrity and excellence.
            </p>

            <div className="grid gap-6">
              {benefits.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-black uppercase text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Action Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#9a1408] rounded-3xl rotate-3 scale-105 opacity-5" />
            <div className="relative bg-black p-10 md:p-14 rounded-3xl shadow-2xl text-center space-y-8 border border-white/10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#e63928]/10 rounded-full mb-4">
                <Mail className="w-10 h-10 text-[#e63928]" />
              </div>
              
              <h3 className="text-2xl font-black text-white uppercase italic">
                How To Apply
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                To join our elite security force, please email your current Resume and 
                a copy of your Security License to our recruitment team. We look 
                forward to reviewing your application!
              </p>

              <div className="pt-4">
                {/* Replace your-email@gmail.com with your actual email address */}
                <a 
                  href="mailto:your-email@gmail.com?subject=Job Application - Falcon Security Ltd"
                  className="inline-block w-full bg-[#e63928] hover:bg-red-700 text-white font-black py-4 px-8 rounded-xl uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
                >
                  Apply Now
                </a>
                <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest">
                  Response within 48 business hours
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}