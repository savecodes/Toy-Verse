import { CiGift, CiHeart } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const features = [
  {
    icon: <CiHeart className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Support Local Sellers",
    description:
      "Discover unique toys and support small businesses in your community with every purchase.",
    color: "color-primary",
  },
  {
    icon: <VscWorkspaceTrusted className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Quality You Can Trust",
    description:
      "We feature toys from trusted local sellers, ensuring safety and quality for your peace of mind.",
    color: "color-primary",
  },
  {
    icon: <IoLocationOutline className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Find Toys Near You",
    description:
      "Our platform makes it easy to find and connect with toy sellers in your local area.",
    color: "color-primary",
  },
  {
    icon: <CiGift className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "The Perfect Gift",
    description:
      "From birthdays to holidays, find the perfect gift that also gives back to your community.",
    color: "color-primary",
  },
];

const AboutPlayLocal = () => {
  return (
    <section className="w-11/12 mx-auto py-12 sm:py-16">
      {/* Header */}
      <div className="text-center space-y-4 mb-12 sm:mb-16">
        <p className="text-[#24a0f3] font-semibold uppercase tracking-wide">
          Play Local, Grow Local
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Everything you need for playtime
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          We believe in the magic of local toy stores and the communities they
          build.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-4 p-6 bg-white rounded-2xl shadow-lg 
                       hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div
              className={`flex items-center justify-center p-4 rounded-full ${feature.color} text-white text-2xl 
                         transform hover:scale-110 transition-transform duration-300`}
            >
              {feature.icon}
            </div>
            <div className="text-left sm:text-left lg:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPlayLocal;
