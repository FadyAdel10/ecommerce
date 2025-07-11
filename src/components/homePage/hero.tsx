import HeroImage from "../../assets/HeroImage.png";

interface HeroProps {
  scrollToProducts: () => void;
}

/**
 * Hero Component
 * Displays the landing section of the homepage with a call-to-action.
 * Includes a large title, description, "Shop Now" button, and an image.
 */
const Hero: React.FC<HeroProps> = ({ scrollToProducts }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-white to-violet-700 py-16">
      <div className="h-full container grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className="flex flex-col gap-4">
          <p className="font-extrabold text-[40px] md:text-[50px] leading-tight">
            Discover Your Style
          </p>
          <p className="text-gray-600 text-[16px] md:text-[20px]">
            Shop the latest trends in clothing, accessories, and more. Find something perfect for every occasion.
          </p>

          {/* CTA Button: Scrolls to product list */}
          <button
            onClick={scrollToProducts}
            className="bg-blue-600 rounded-md text-white py-3 px-4 w-[125px] hover:bg-blue-700 transition-all duration-300"
          >
            Shop Now
          </button>
        </div>

        {/* Hero Image */}
        <div className="hidden md:flex justify-center">
          <img src={HeroImage} alt="Hero Visual" />
        </div>

      </div>
    </div>
  );
};

export default Hero;