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
            <h2>CONTACT DETAILS</h2>
            <div id="icons">
              <div className="imageBeforeText">
                <img className="icon" src="img/icon/house.png" alt="House icon" />
                <p>7033 Cuesmes, Belgium</p>
              </div>
              <div className="imageBeforeText">
                <img className="icon" src="img/icon/mail.png" alt="Mail icon" />
                <p>lorenzo.lepoivre@gmail.com</p>
              </div>
              <div className="imageBeforeText">
                <img className="icon" src="img/icon/linkedin.png" alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/lorenzo-lepoivre/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                  <p>lorenzo-lepoivre</p>
                </a>
              </div>
              <div className="imageBeforeText">
                <img className="icon" src="img/icon/github.png" alt="Github icon" />
                <a href="https://github.com/LorenzoLepoivre" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <p>LorenzoLepoivre</p>
                </a>
              </div>
            </div>
          </section>

          <section className="has_border">
            <h2>LANGUAGES / FRAMEWORKS</h2>
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
            <h2>ADDITIONAL SKILLS</h2>
            <ul>
              <li>Cisco Packet Tracer</li>
              <li>Git</li>
              <li>Scrum</li>
              <li>Game engines (Unity, Unreal Engine, Godot)</li>
              <li>Microcomputer usage (Arduino, Raspberry Pi)</li>
            </ul>
          </section>

          <section className="has_border">
            <h2>LANGUAGES</h2>
            <ul>
              <li>French (native language)</li>
              <li>English</li>
            </ul>
          </section>

          <section className="has_border">
            <h2>HOBBIES</h2>
            <ul>
              <li>Video games and board games</li>
              <li>Cinema</li>
              <li>History</li>
              <li>Politics and philosophy</li>
            </ul>
          </section>

          <div id="print" className="no-mobile">
            <button id="btnPrint" onClick={imprimerSite}>Print Resume</button>
          </div>
        </div>

        <div id="right">
          <h1>Lorenzo Lepoivre</h1>

          <section>
            <p>Hello, I’m Lorenzo, a 22-year-old recent graduate with a bachelor's degree in development, currently looking for my first job as a developer</p>
          </section>
          
          <section>
            <h2>EDUCATION</h2>
            <ul>
              <li><span className="subtitle">Institut Saint-Ferdinand, Jemappes (High School)</span><br />CESS, mathematics orientation</li>
              <li><span className="subtitle">UMONS, Mons (2021-2022)</span><br />Bachelor in Computer Science</li>
              <li><span className="subtitle">HEH Department of Science and Technology (2022-present)</span><br />Bachelor in Computer Science, telecommunication and networks orientation, development option</li>
            </ul>
          </section>

          <section>
            <h2>PROFESSIONAL EXPERIENCE</h2>
            <ul>
              <li><span className="subtitle">July 2022 – August 2022</span><br />Cleaning technician and reception agent - Vaccination Center (La Louvière)</li>
              <li><span className="subtitle">August 2022 – September 2022</span><br />Fast food employee - Belchicken (Mons, Grand-près)</li>
              <li><span className="subtitle">September 2023</span><br />Inventory and shelving - Intermarché (Mons)</li>
              <li><span className="subtitle">December 2023</span><br />Door-to-door sales - Atlas Sales Agency (Mons)</li>
              <li><span className="subtitle">September 2023 - June 2024</span><br />Programming tutor - Haute Ecole en Hainaut (Mons)</li>
              <li><span className="subtitle">April 2024 - Present</span><br />Teacher - Logiscool (Mons)</li>
              <li><span className="subtitle">February 2025 - May 2025</span><br />Student Intern - Ingenum (Maisières)</li>
            </ul>
          </section>

          <section>
            <h2>COMPUTER SCIENCE EXPERIENCE</h2>
            <ul>
            <li><span className="subtitle">Clubs</span></li>
              <ul>
              <li>Google Developer Student Club, member of the Mons club from September 2023 to September 2024</li>
              <li>Kryptosphere Belgium, founding member and head of editorial at Ks Belgium since March 2024</li>
              </ul>
            <li><span className="subtitle">Hackathons</span></li>
            <ul>
              <li>UNamur, 2022 and 2023 editions of the CSLabs Hackathon</li>
              <li>ETHGlobal Amsterdam 2024</li>
              <li>ETHGlobal Brussels 2024</li>
              <li>EPFL Lausanne, 2024 SUI x BSA Student Hackathon</li>
            </ul>
            <li><span className="subtitle">Competitions</span></li>
              <ul>
              <li>UMons, 2023 CPUMons algorithm contest</li>
              <li>HEH, 2024 Winner of the COCO Challenge</li>
              </ul>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}

export default CV;
