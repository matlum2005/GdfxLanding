"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060f35] text-white pt-32 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#5f7cff30,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#d946ef25,transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
            Get In Touch
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold">
            Let&apos;s Build Something
            <span className="block bg-gradient-to-r from-[#6E7BFF] to-[#D546FF] bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project idea? We&apos;d love to hear from you and help turn your
            vision into a successful digital product.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <Mail className="text-purple-400 mb-4" size={30} />
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <p className="text-gray-400">info@gdfx.com</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <Phone className="text-blue-400 mb-4" size={30} />
              <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
              <p className="text-gray-400">+91 9876543210</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <MapPin className="text-pink-400 mb-4" size={30} />
              <h3 className="text-xl font-semibold mb-2">Office Address</h3>
              <p className="text-gray-400">Mumbai, Maharashtra, India</p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <form className="space-y-6" aria-label="Contact form">
              <div>
                <label
                  htmlFor="full-name"
                  className="block mb-2 text-sm text-gray-300"
                >
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  className="w-full p-4 rounded-xl bg-[#101b4d] border border-white/10 outline-none focus-ring"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full p-4 rounded-xl bg-[#101b4d] border border-white/10 outline-none focus-ring"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm text-gray-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full p-4 rounded-xl bg-[#101b4d] border border-white/10 outline-none focus-ring"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-4 rounded-xl bg-[#101b4d] border border-white/10 outline-none focus-ring"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-[#6E7BFF] to-[#D546FF]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

