import Image from "next/image";
import { FaBriefcase, FaBuilding, FaUsers, FaStar } from "react-icons/fa";
import { FaHouseCircleCheck } from "react-icons/fa6";

const stats = [
  {
    icon: <FaBriefcase />,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: <FaHouseCircleCheck />,
    value: "12K",
    label: "Companies",
  },
  {
    icon: <FaUsers />,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: <FaStar />,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#010103] min-h-[700px] flex items-center justify-center px-4">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-black to-black" />

      {/* Blue Glow */}
      <div className="absolute bottom-52 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-indigo-600/30 blur-[120px]" />

      {/* Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:32px_32px] opacity-30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Content */}
        <div className="text-center mb-16">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Assisting over 15,000 job seekers
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl">
            find their dream positions.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="text-gray-300 text-lg mb-8">{item.icon}</div>

              <h3 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold">
                {item.value}
              </h3>

              <p className="text-gray-400 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
