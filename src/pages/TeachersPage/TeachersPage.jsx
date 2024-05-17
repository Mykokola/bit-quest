import React from "react";
import Slider from "../../components/Slider/Slider.jsx";
import Hero from "../../components/TeacersPageComponents/Hero/Hero";
import images from "../../utils/sliderSrc.jsx";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm.jsx";
import TeachersList from "../../components/TeacersPageComponents/TeachersList/TeachersList";
const TeachersPage = () => {
  const { teacersPageGallery } = images;

  return (
    <main >
        <Hero></Hero>
        <TeachersList></TeachersList>
        <Slider imageGallery={teacersPageGallery} />
        <FeedbackForm />
    </main>
  );
};

export default TeachersPage;
