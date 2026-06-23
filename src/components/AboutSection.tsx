import Image from "next/image";

export default function AboutSection() {
  const features = [
    "Leading IT Company",
    "Honesty and Transparency",
    "Up-to-date latest tech trends",
    "All IT Solutions under one roof",
    "Customer oriented approach",
    "Deliver top notch solution",
  ];

  return (
    <section id="about" className="bg-[#030b2e] py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left Side */}
          <div className="relative">
            <div className="overflow-hidden rounded-md">
              <Image
                src="/images/AboutCompany-DCHvWLyw.jpg"
                alt="About GDFX"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-20 left-5 bg-gradient-to-r from-[#9b4dff] to-[#d55cff] rounded-xl px-8 py-5 flex items-center gap-4 shadow-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg
                  width="34"
                  height="34"
                  fill="none"
                  stroke="#A855F7"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>

              <div>
                <h3 className="text-white text-5xl font-bold leading-none">
                  1,021+
                </h3>
                <p className="text-white uppercase text-lg font-semibold mt-2">
                  Happy Client
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <span className="text-[#b04cff] uppercase tracking-wider text-sm font-medium">
              ::: About Our Company
            </span>

            <h2 className="text-white text-2xl lg:text-3xl font-bold leading-tight mt-4">
              Building Future-Ready
              <br />
              Businesses With{" "}
              <span className="text-[#b04cff]">GDFX&apos;s</span>
              <br />
              <span className="text-[#7f5dff]">IT Expertise</span>
            </h2>

            <p className="text-gray-300 mt-8 leading-8 text-lg">
              At GDFX, we specialize in delivering innovative IT solutions that
              empower businesses to thrive in today&apos;s competitive digital
              landscape. Since 2022, we&apos;ve been transforming ideas into reality
              with cutting-edge software development, web and mobile application
              design, digital marketing, and creative services. Our expert team
              focuses on crafting tailored solutions that drive efficiency,
              scalability, and growth for businesses of all sizes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-5 h-5 rounded-full border border-[#7f5dff] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-[#7f5dff]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-gradient-to-r from-[#ff5f87] to-[#b04cff] text-white font-semibold px-10 py-4 rounded-lg hover:scale-105 transition duration-300">
              DISCOVER MORE →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}