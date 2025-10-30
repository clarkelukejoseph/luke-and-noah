"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:clarkelukejoseph@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.body}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <main className="w-full">
      <Header />
      
      <section className="w-12/12 max-sm:w-full px-16 py-12 max-sm:px-8 max-sm:py-8 max-sm:mx-auto max-sm:mt-10 h-[calc(100vh-4rem)] max-sm:h-auto">
        <div className="max-w-full mx-auto max-sm:w-full h-full max-sm:h-auto flex flex-row items-stretch justify-start max-sm:flex-col max-sm:items-center max-sm:justify-center gap-20">
          {/* Page Title */}
          <div className="w-8/12 max-sm:w-full">   
          <div className="mb-12">
            <h1 className="text-5xl font-medium text-white mb-4 max-sm:text-2xl">Contact</h1>
            <p className="text-gray-300 text-lg max-sm:text-base leading-relaxed">
              Get in touch with Luke & Noah Clarke. We'd love to hear from you about collaborations, 
              projects, or just to say hello.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors duration-70"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors duration-70"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors duration-70"
                placeholder="What's this about?"
              />
            </div>

            {/* Message Body Field */}
            <div>
              <label htmlFor="body" className="block text-white text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="body"
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors duration-70 resize-none"
                placeholder="Tell us more about your project or inquiry..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-300 text-black font-medium py-3 px-6 rounded-sm transition-colors duration-70 ease-in-out hover:scale-[1.02] transform"
            >
              Send Message
            </button>
          </form>
          </div>
          {/* Additional Contact Info */}
          <div className="w-3/12 max-sm:w-full relative overflow-hidden rounded-sm h-full max-sm:h-auto">
            {/* Background banner image */}
            <Image
              src="/contact/contactBanner.png"
              alt="Contact banner"
              fill
              className="object-cover opacity-50 max-sm:hidden"
              priority
            />
            {/* Gradient fades to black like About hero */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent max-sm:hidden"></div>
            <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent max-sm:hidden"></div>

            {/* Foreground content */}
            <div className="relative z-10 h-full max-sm:h-auto flex flex-col justify-end max-sm:justify-start p-8 max-sm:p-6">
              <h3 className="text-xl font-medium text-white mb-4">Other Ways to Connect</h3>
              <div className="space-y-2 text-gray-300">
                <p>Email: <a href="mailto:clarkelukenoah@gmail.com " className="text-amber-400 hover:text-amber-300 transition-colors duration-70">clarkelukenoah@gmail.com</a></p>
                <p>Youtube: <a href="https://www.youtube.com/@lukennoahclarke" className="text-amber-400 hover:text-amber-300 transition-colors duration-70">lukennoahclarke</a></p>
                <p>Instagram: <a href="https://www.instagram.com/lukennoahclarke/" className="text-amber-400 hover:text-amber-300 transition-colors duration-70">lukennoahclarke</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}