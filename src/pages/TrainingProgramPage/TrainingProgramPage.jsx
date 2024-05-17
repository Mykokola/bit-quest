import React from "react";
import Hero from "../../components/TrainingProgramComponents/Hero/Hero.jsx";
import AboutTraining from "../../components/TrainingProgramComponents/About-training/AboutTraining.jsx";
import TrainingType from "../../components/TrainingProgramComponents/TrainingType/TrainingType.jsx";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm.jsx";
const TrainingProgramPage = () => {
  return (
    <main>
        <Hero />
        <AboutTraining></AboutTraining>
        <TrainingType></TrainingType>
        <FeedbackForm></FeedbackForm>
    </main>
  );
};

export default TrainingProgramPage;
