import Hero from "../../components/MainPageComponents/Hero/Hero.jsx";
import About from "../../components/MainPageComponents/About/About.jsx";
import TrainingProgram from "../../components/MainPageComponents/TrainingProgram/TrainingProgram.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Theaters from "../../components/MainPageComponents/Theaters/Theaters.jsx";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm.jsx";
import images from "../../utils/sliderSrc.jsx";

const HomePage = () => {
  const { homePageGallery } = images;

  return (
    <main>
      <Hero />
      <About />
      <TrainingProgram />
      <Slider imageGallery={homePageGallery} />
      <Theaters />
      <FeedbackForm />
    </main>
  );
};

export default HomePage;
