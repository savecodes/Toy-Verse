import Slider from "react-slick";
import slider1 from "../../assets/slider1.webp";
import slider2 from "../../assets/slider2.webp";
import slider3 from "../../assets/slider3.webp";
import { useNavigate } from "react-router";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      image: slider1,
      title: "Build Your Dreams",
      subtitle: "Premium Building Blocks & LEGO Sets",
      description: "Unleash creativity with our collection of building toys for all ages",
      buttonText: "Shop Now",
    },
    {
      image: slider2,
      title: "Speed & Adventure",
      subtitle: "Toy Cars & RC Vehicles",
      description: "Race into fun with Hot Wheels, remote control cars and more",
      buttonText: "Explore Cars",
    },
    {
      image: slider3,
      title: "Heroes & Dreams",
      subtitle: "Dolls & Action Figures",
      description: "From Barbie to Marvel - bring your favorite characters home",
      buttonText: "View Collection",
    }
  ];

  const navigate = useNavigate();


  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative">
            {/* Image */}
            <img
              src={slide.image}
              alt={`Slider ${idx + 1}`}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
            />
            
            {/* Overlay Gradient */}
            <div className={`absolute inset-0 rounded-lg`}></div>
            
            {/* Text Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-xl lg:max-w-2xl">
                  <p className="text-white text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-3 uppercase tracking-wide">
                    {slide.subtitle}
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 lg:mb-6 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <button
                  onClick={() => navigate("/toys-gallery")}
                  className="bg-white text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;