import Button from "@/components/Base/Button";
import TypingText from "@/components/TypingText";
const HeroSection = () => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center bg-gray-400 bg-hero bg-cover bg-fixed bg-center bg-no-repeat before:absolute before:left-0 before:right-0 before:h-full before:w-full before:bg-black/40"
      id="hero-section"
    >
      <div className="relative w-full text-center text-white">
        <p className="text-2xl">Welcome</p>
        <h1 className="mt-2 block h-12 text-3xl font-bold lg:text-5xl">
          <TypingText text="I'm Long, a front-end developer" duration={200} />
        </h1>
        <h2 className="mt-2 text-base lg:mt-4 lg:text-2xl">
          Based in Thu Duc City, HCM City
        </h2>
        <div className="mt-4 lg:mt-5">
          <Button htmlType="button" className="text-base lg:text-2xl">
            Hire me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
