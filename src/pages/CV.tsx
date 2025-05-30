import '../css/cv.css';
import '../css/cvPrint.css';
import Header from '../components/Header';

function CV() {

  // Fonction d'impression
  const imprimerSite = () => {
    window.print();
  };

  return (
    <div className="cv">
      <div className="no-print">
        <Header />
      </div>
      <main>
        <div id="left">
          <section className="has_border">
            <h2>COORDONNÉES</h2>
            <div id="icons">
              <div className="imageBeforeText">
                <img className="icon" src="img/icon/house.png" alt="Icône maison" />
                <p>7033 Cuesmes, Belgique</p>
              </div>
              <div className="imageBeforeText">
                <img className="icon" src="img/icon/mail.png" alt="Icône mail" />
                <p>lorenzo.lepoivre@gmail.com</p>
              </div>
              <div className="imageBeforeText">
                <img className="icon" src="img/icon/linkedin.png" alt="Icône LinkedIn" />
                <a href="https://www.linkedin.com/in/lorenzo-lepoivre/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn">
                  <p>lorenzo-lepoivre</p>
                </a>
              </div>
              <div className="imageBeforeText">
                <img className="icon" src="img/icon/github.png" alt="Icône GitHub" />
                <a href="https://github.com/LorenzoLepoivre" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub">
                  <p>LorenzoLepoivre</p>
                </a>
              </div>
            </div>
          </section>

          <section className="has_border">
            <h2>LANGAGES / FRAMEWORKS</h2>
            <ul>
              <li>Python</li>
              <li>HTML/CSS</li>
              <li>PHP</li>
              <li>React (JavaScript, TypeScript)</li>
              <li>Spring (Java)</li>
              <li>Entity Framework (.NET, C#)</li>
              <li>SQL</li>
            </ul>
          </section>

          <section className="has_border">
            <h2>COMPÉTENCES COMPLÉMENTAIRES</h2>
            <ul>
              <li>Cisco Packet Tracer</li>
              <li>Git</li>
              <li>Scrum</li>
              <li>Moteurs de jeu (Unity, Unreal Engine, Godot)</li>
              <li>Utilisation de micro-ordinateurs (Arduino, Raspberry Pi)</li>
            </ul>
          </section>

          <section className="has_border">
            <h2>LANGUES</h2>
            <ul>
              <li>Français (langue maternelle)</li>
              <li>Anglais</li>
            </ul>
          </section>

          <section className="has_border">
            <h2>LOISIRS</h2>
            <ul>
              <li>Jeux vidéo et jeux de société</li>
              <li>Cinéma</li>
              <li>Histoire</li>
            </ul>
          </section>

          <div id="print" className="no-mobile">
            <button id="btnPrint" onClick={imprimerSite}>Imprimer le CV</button>
          </div>
        </div>

        <div id="right">
          <h1>Lorenzo Lepoivre</h1>

          <section>
            <p>Bonjour, je m'appelle Lorenzo, j'ai 22 ans, récemment diplômé d’un bachelier en développement. Je suis actuellement à la recherche de mon premier emploi en tant que développeur.</p>
          </section>
          
          <section>
            <h2>FORMATION</h2>
            <ul>
              <li><span className="subtitle">Institut Saint-Ferdinand, Jemappes (Secondaire)</span><br />CESS, option math forte</li>
              <li><span className="subtitle">UMONS, Mons (2021-2022)</span><br />Bachelier en Informatique</li>
              <li><span className="subtitle">HEH Département des Sciences et Technologies (2022 - aujourd’hui)</span><br />Bachelier en Informatique, orientation télécommunication et réseaux, option développement</li>
            </ul>
          </section>

          <section>
            <h2>EXPÉRIENCE PROFESSIONNELLE</h2>
            <ul>
              <li><span className="subtitle">Juillet 2022 – Août 2022</span><br />Technicien de surface et agent d’accueil - Centre de vaccination (La Louvière)</li>
              <li><span className="subtitle">Août 2022 – Septembre 2022</span><br />Employé en restauration rapide - Belchicken (Mons, Grand-Près)</li>
              <li><span className="subtitle">Septembre 2023</span><br />Inventaire et réassort - Intermarché (Mons)</li>
              <li><span className="subtitle">Décembre 2023</span><br />Vente en porte-à-porte - Atlas Sales Agency (Mons)</li>
              <li><span className="subtitle">Septembre 2023 - Juin 2024</span><br />Tuteur en programmation - Haute École en Hainaut (Mons)</li>
              <li><span className="subtitle">Avril 2024 - Aujourd’hui</span><br />Enseignant - Logiscool (Mons)</li>
              <li><span className="subtitle">Février 2025 - Mai 2025</span><br />Stagiaire étudiant - Ingenum (Maisières)</li>
            </ul>
          </section>

          <section>
            <h2>EXPÉRIENCE EN INFORMATIQUE</h2>
            <ul>
              <li><span className="subtitle">Clubs</span></li>
              <ul>
                <li>Google Developer Student Club, membre du club de Mons de septembre 2023 à septembre 2024</li>
                <li>Kryptosphere Belgium, membre fondateur et responsable éditorial de Ks Belgium depuis mars 2024</li>
              </ul>
              <li><span className="subtitle">Hackathons</span></li>
              <ul>
                <li>UNamur, éditions 2022 et 2023 du Hackathon CSLabs</li>
                <li>ETHGlobal Amsterdam 2024</li>
                <li>ETHGlobal Bruxelles 2024</li>
                <li>EPFL Lausanne, Student Hackathon SUI x BSA 2024</li>
              </ul>
              <li><span className="subtitle">Compétitions</span></li>
              <ul>
                <li>UMons, concours d’algorithmes CPUMons 2023</li>
                <li>HEH, gagnant du COCO Challenge 2024</li>
              </ul>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}

export default CV;
