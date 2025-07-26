import React from "react";
import "./App.css";

const features = [
  {
    title: "Call Support",
    desc: "Order with a simple phone call",
    icon: (
      <svg className="w-10 h-10 text-[#0066CC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.518 2.073a2 2 0 01-.45 1.947l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.947-.45l2.073.518A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" /></svg>
    ),
  },
  {
    title: "Fast Delivery",
    desc: "Under 60 minutes",
    icon: (
      <svg className="w-10 h-10 text-[#FFA500]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4a2 2 0 012-2zm-6 0H7a2 2 0 00-2 2v4a2 2 0 002 2h1a2 2 0 002-2v-4a2 2 0 00-2-2z" /></svg>
    ),
  },
  {
    title: "Trusted Vendors",
    desc: "Local store partnerships",
    icon: (
      <svg className="w-10 h-10 text-[#0066CC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3v6a1 1 0 001 1h6a1 1 0 001-1v-6h3a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1z" /></svg>
    ),
  },
];

const steps = [
  {
    title: "Order",
    desc: "Place your order via app or phone",
    icon: (
      <svg className="w-10 h-10 text-[#0066CC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 013 3L7 19.5 3 21l1.5-4L16.5 3.5z" /></svg>
    ),
  },
  {
    title: "Pack",
    desc: "Our team packs your essentials",
    icon: (
      <svg className="w-10 h-10 text-[#FFA500]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" /></svg>
    ),
  },
  {
    title: "Deliver",
    desc: "Delivered to your doorstep in 60 minutes",
    icon: (
      <svg className="w-10 h-10 text-[#0066CC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a4 4 0 01-4-4z" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
    ),
  },
];

function App() {
  return (
    <div className="font-['Inter','Roboto',sans-serif] bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-12 bg-gradient-to-br from-[#0066CC]/80 to-[#FFA500]/60">
        <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-30 -z-10"></div>
        <div className="flex flex-col items-center gap-4">
          {/* Logo Placeholder */}
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg mb-2">
            <span className="text-3xl font-bold text-[#0066CC]">F60</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0066CC] drop-shadow-lg">Flashcart60 – 60-Minute Delivery for Bharat</h1>
          <p className="mt-2 text-lg md:text-2xl text-gray-800 font-medium">Order via App or Phone. Fast. Local. Reliable.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="px-6 py-3 rounded-full bg-[#0066CC] text-white font-semibold shadow hover:bg-[#005bb5] transition">Download App</a>
            <a href="tel:18001234560" className="px-6 py-3 rounded-full bg-[#FFA500] text-white font-semibold shadow hover:bg-[#cc8400] transition">Call to Order</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-t-4" style={{ borderColor: i === 1 ? '#FFA500' : '#0066CC' }}>
            {f.icon}
            <h3 className="mt-4 text-xl font-bold">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="bg-[#F8FAFC] py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#0066CC]">How It Works</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {s.icon}
              <h4 className="mt-4 text-lg font-semibold">{s.title}</h4>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wallet Mechanism (Optional) */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-[#FFA500] mb-4">Delivery Boy Wallet Mechanism</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 flex flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#0066CC]/10 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-[#0066CC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h5a2 2 0 012 2v5a2 2 0 01-2 2h-5a4 4 0 01-4-4z" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
              </div>
              <span className="text-xs font-medium">Delivery</span>
            </div>
            <span className="text-2xl">→</span>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FFA500]/10 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-[#FFA500]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
              </div>
              <span className="text-xs font-medium">Money</span>
            </div>
            <span className="text-2xl">→</span>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#0066CC]/10 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-[#0066CC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" /></svg>
              </div>
              <span className="text-xs font-medium">Wallet</span>
            </div>
            <span className="text-2xl">→</span>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FFA500]/10 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-[#FFA500]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3v6a1 1 0 001 1h6a1 1 0 001-1v-6h3a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1z" /></svg>
              </div>
              <span className="text-xs font-medium">Platform/Vendor</span>
            </div>
          </div>
          <div className="flex-1 text-gray-700 text-center md:text-left mt-6 md:mt-0">
            <p className="text-base">Delivery boys collect cash on delivery and deposit it into their in-app wallet, which is then settled with the platform or vendor. This ensures smooth, transparent, and secure cash handling for all parties.</p>
          </div>
        </div>
      </section>

      {/* Testimonials / Impact */}
      <section className="bg-[#F8FAFC] py-12 px-4">
        <h2 className="text-2xl font-bold text-[#0066CC] text-center mb-8">What Our Users Say</h2>
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {/* Photo Placeholder */}
            <span className="text-4xl text-gray-400">👤</span>
          </div>
          <blockquote className="text-lg italic text-gray-700 text-center md:text-left">
            “Flashcart60 has made life so much easier in our village. I can order groceries for my family with just a phone call, and it arrives in less than an hour!”
            <br />
            <span className="block mt-2 font-semibold text-[#FFA500]">– Suman Devi, Customer</span>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0066CC] text-white py-8 px-4 mt-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#terms" className="hover:underline">Terms</a>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-[#FFA500]" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.6 1.64.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.9 3.54 4.3-.37.1-.76.16-1.16.16-.28 0-.56-.03-.83-.08.56 1.75 2.19 3.02 4.13 3.06A9.06 9.06 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" /></svg>
            </a>
            <a href="#" className="hover:text-[#FFA500]" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
            </a>
            <a href="#" className="hover:text-[#FFA500]" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808 2.256 6.088 2.243 6.497 2.243 12c0 5.503.013 5.912.072 7.192.059 1.276.353 2.449 1.32 3.416.967.967 2.14 1.261 3.416 1.32 1.28.059 1.689.072 7.192.072s5.912-.013 7.192-.072c1.276-.059 2.449-.353 3.416-1.32.967-.967 1.261-2.14 1.32-3.416.059-1.28.072-1.689.072-7.192s-.013-5.912-.072-7.192c-.059-1.276-.353-2.449-1.32-3.416C21.051.425 19.878.131 18.602.072 17.322.013 16.913 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg>
            </a>
          </div>
          <div className="text-sm mt-4 md:mt-0">Phone: <a href="tel:18001234560" className="underline hover:text-[#FFA500]">1800-123-4560</a></div>
        </div>
        <div className="text-center text-xs mt-6 opacity-70">© 2024 Flashcart60. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
