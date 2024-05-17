import styles from "./TeachersList.module.css";
const teachers = [
  {
    title:
      "Konstantin Tkachuk Ballet Dancer Works at the National Ballet of Canada",
    image: " src/images/teachers/teachers/teachers_1_360_1x.jpg",
    alt: "Konstantin Tkachuk photo",
    desc: "Experienced ballet dancer, soloist and laureate of several international ballet competitions. Laureate of the international ballet competition. Laureate of the IV International Youth Classical Dance Competition. He graduated from the Kiev State Choreographic School with the world-famous Ukrainian talented teacher Vladimir Andreevich Denisenko, who trained a huge number of Ukrainian ballet stars. The only Ukrainian in the National Ballet of Canada, Toronto. Konstantin’s repertoire with the National Ballet includes “The Nutcracker”, “Romeo and Juliet”, “Cinderella and Madame”, “Onegin”, “The Passion”, Emma Bovary, “Suite in White” by Serge Lifar, “Jewels”, “Don”. Don Quixote. Alice in Wonderland. I have danced with world famous ballet companies such as Eifman and the Mariinsky Theater as a soloist, and have participated in over 12 international tours. He performed with the troupe during its tours in the USA, Giza, Lebanon and Italy. Performed solo and main roles. As a ballet dancer, I took part in all current repertoires of performances. Participated in tours in the USA, Japan, France, Italy, England, Greece, China, Hong Kong, Estonia, Israel, Lebanon, Russia and on the most famous stages in the world, for example: Bolshoi Theater theater, London Coliseum, Champs Elysees Theater, Kremlin palace, etc.",
    lastParagraf:
      " Also worked with V. Denisenko, B. Eifman, M. Messerer, F. Ruzimatov, L. Sarafanov, N. Duato, A. Sidorov, Zh.I. Ayupov and am extremely grateful for the experience I had with them and for what I was able to learn from them.",
  },
  {
    title: "Sabina Yapparova Soloist, Ballet teacher",
    image: "src/images/teachers/teachers/teachers_2_360_1x.jpg",
    alt: "Sabina Tkachuk photo",
    desc: `  Higher Theater Award of St. Petersburg "Golden Soffit" for best
female role - Juliet ("Romeo and Juliet", choreography by O.
Vinogradov) Higher theater award of St. Petersburg "Golden Soffit"
for best female role - Cello "Multiplicity. Forms of silence and
emptiness" (choreography by Nacho Duato) Higher Theater Award of St.
Petersburg "Golden Soffit" for best actress — Na Floresta
(choreography by Nacho Duato).Associate art specialist, since 2001.
I teach classical ballet 2014-present. She worked as a director for
more than 6 years at the Children's Ballet School of Ilya
Kuznetsova, St. Petersburg. She danced leading parts with the troupe
on tours in Great Britain, Japan, Australia, South Korea. He
participated in tours with the Mikhailovsky Theater in the USA,
Japan, Great Britain, Estonia and China.`,
    lastParagraf: `It's also worth adding that we had the opportunity to meet more
legendary people in ballet, such as Nineli Petrova, and learn more
about her and her journey in ballet.`,
  },
];
const TeachersList = () => {
  return (
    <section className={styles.teachersSection + " container"}>
      <h2 className={styles.title}>Teachers</h2>
      <ul className={styles.teachersList}>
        {teachers.map(({ title, image, alt, desc, lastParagraf }) => (
          <li key={title} className={styles.teachersListItem}>
            <h3>{title}</h3>
            <img src={image} alt={alt} />
            <p>{desc}</p>
            <p>{lastParagraf}</p>
          </li>
        ))}
      </ul>
      <div className={styles.teacherHistory}>
        <img src="src/images/teachers/teachers/teachers_3_360_1x.jpg" alt="" />
          <p>
            In the history of Leningrad ballet, the name of Nineli Alexandrovna
            Petrova remains a symbol of femininity, tenderness, and restrained
            nobility. Remaining in the role of a lyrical heroine, she showed how
            multifaceted and deep the theme of love can be on stage.
          </p>
          <p>
            I would also like to note that one of the most significant
            influences on my creative development is the influence of the
            outstanding Russian ballerina, People's Artist of the RSFSR Alla
            Osipenko. She not only introduced me to the world of art, but also
            became a mentor who shared her views on art and enlightened me. Her
            passion for dance and deep understanding of its essence became a
            great inspiration to me and helped me develop as an artist.
          </p>
          <p>
            In addition, Nikita Dolgushin had a decisive influence on my work,
            who, through the preparation of several performances, enlightened me
            and helped me understand the meaning of each movement. His creative
            approach to his work inspired me to strive for excellence and
            continuous growth as a dancer.
          </p>
          <p>
            Nacho Duato's choreography also had a significant impact on me,
            revealing many emotional depths and making me feel the music in a
            new way. His works became a real discovery for me and helped expand
            my artistic horizons.
          </p>
          <p>
            Farukh Ruzimatov played an important role in my creative career,
            accepting me to the Mikhailovsky Theater and always supporting me in
            my creative endeavors. His wisdom and professionalism helped me
            reach new heights in art.
          </p>
          <p>
            Finally, meeting Yuri Smekalov at the end of my dancing career was a
            real discovery for me. He introduced me to the world of modern dance
            and invited me to take part in a dramatic production, where I was
            able to prove myself not only as a dancer, but also as an actress.
            Thanks to his support and mentorship, I discovered new facets of my
            creativity and found a new calling in the world of art.
          </p>
          <p>
            I am immensely grateful to each of these great masters for their
            contributions to my life and career. Their lessons and guidance will
            always stay with me and continue to inspire me to achieve artistic
            greatness.
          </p>
      </div>
    </section>
  );
};
export default TeachersList;
