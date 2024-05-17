import styles from "./Theaters.module.css";

const Theaters = () => {
  const theaters = [
    { id: 1, name: "National Opera of Ukraine, Kyiv." },
    { id: 2, name: "Mikhailovsky Theater, St. Petersburg." },
    { id: 3, name: " Mariinsky Theater, St. Petersburg." },
    { id: 4, name: " Alexandrinsky Theater, St. Petersburg." },
    { id: 5, name: " Hermitage Theater, St. Petersburg." },
    {
      id: 6,
      name: "Moscow Academic Musical Theater named after K. S. Stanislavskyi and V. I. Nemirovich-Danchenko, Moscow.",
    },
    { id: 7, name: "Bolshoi Theater, Moscow." },
    { id: 8, name: "Champs Elysees Theater, Paris." },
    { id: 9, name: "London Coliseum Theatre, London." },
    { id: 10, name: "David H. Koch Theatre, New York." },
    { id: 11, name: "Segerstrom Center for the Arts in Costa Mesa." },
    { id: 12, name: "Auditorium Theater, Chicago." },
    { id: 13, name: "Royal Albert Hall, London." },
    { id: 14, name: "Grand Theater of La Fenice, Venice." },
    { id: 15, name: "Le Palais des Congrès de Paris, Paris." },
    { id: 16, name: "Tokyo Bunka Kaikan, Tokyo." },
    { id: 17, name: "Star Performing Arts Centre, Singapore." },
    { id: 18, name: "Hong Kong Cultural Centre, Hong Kong." },
    { id: 19, name: "NHK Osaka Hall, Osaka." },
    { id: 20, name: "Aichi Prefecture Art Theater (Aichi Nagoya)." },
    { id: 21, name: "Four Seasons Center for the Performing Arts, Toronto." },
    { id: 22, name: "China National Performing Arts Center, Beijing." },
    { id: 23, name: "Municipal Theater of Santiago, Santiago, Chile." },
  ];

  return (
    <section className={styles.theaters}>
      <div className="container">
        <h2 className={styles.theaters_title}>Theaters where we danced</h2>
        <ul className={styles.theaters_list}>
          {theaters.map((theater) => (
            <li key={theater.id} className={styles.theaters_listItem}>
              {theater.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Theaters;
