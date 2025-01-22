// HeroSection component serves as the introductory section of the application
// It includes a title, description, and a search form for users to find books.
import SearchForm from "../SearchForm/SearchForm.jsx";

const HeroSection = () => {
  return (
    <section className="overflow-auto h-64 flex items-center justify-center min-h-[75vh] bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="flex flex-col items-center text-center max-w-[770px] px-4">
       {/* Main title of the Hero section */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase">
          Find Your Book of Choice
        </h1>

        {/* Description paragraph providing context for the application */}
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
          sapiente quibusdam consequatur perspiciatis facere laboriosam non
          nesciunt at id repudiandae, modi iste? Eligendi, rerum!
        </p>

        {/* Align SearchForm in flex column */}
        <SearchForm />
      </div>
    </section>
  );
};

export default HeroSection;
