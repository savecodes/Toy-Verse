import aboutImg from "../assets/About-Us.jpg";
const AboutPage = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About ToyVerse"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-[#24a0f3]">ToyVerse</span>
          </h1>
          <p className="text-gray-600 mb-5 leading-relaxed">
            Welcome to <span className="font-semibold">ToyVerse</span> — your
            trusted online destination for all things fun and playful! We
            connect families with local toy sellers to create a vibrant,
            community-driven marketplace. Our mission is to make finding the
            perfect toy simple, safe, and joyful for every child.
          </p>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Whether it’s building blocks that spark creativity, action figures
            that inspire imagination, or crafts that encourage learning,
            ToyVerse brings a universe of toys right to your fingertips.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We believe playtime should be meaningful, sustainable, and locally
            supported. That’s why every purchase helps strengthen local
            businesses and spread smiles across communities.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="bg-[#24a0f3] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1b86d1] transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
