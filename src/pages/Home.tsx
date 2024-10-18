import Header from '../components/Header';
import Project from '../components/Project';
import Tourniquet from '../components/Tourniquet';
import Portofolio from '../components/projectsContents/Portofolio';
import MintFiesta from '../components/projectsContents/MintFiesta';
import R6DLE from '../components/projectsContents/R6dle';
import DarkAndLight from '../components/projectsContents/DarkAndLight';
import SuiBox from '../components/projectsContents/SuiBox';
import '../css/home.css'; // Importer le fichier CSS avec le bon chemin

function Home() {
  let imagesPortofolio = ["img/projects/portofolio/1.png"];
  let imagesMintFiesta = ["img/projects/mintFiesta/1.jpg","img/projects/mintFiesta/2.jpg","img/projects/mintFiesta/3.jpg","img/projects/mintFiesta/4.jpg","img/projects/mintFiesta/5.jpg","img/projects/mintFiesta/6.jpg"];
  let r6dleVid = ["/vid/projects/r6dle/vid1.mp4"];
  let darkAndLightVid = ["/vid/projects/darkAndLight/vid1.mp4"];
  let suiBoxVid = ["/vid/projects/suiBox/vid1.mp4"];

  return (
    <div>
      <Header />
      <main>
        <Project
          titre="Portfolio"
          dispo="left"
          tourniquet={<Tourniquet images={imagesPortofolio} isVideo={false} />}
          projectCont={<Portofolio />}
        />

        <Project
          titre="MintyFiesta"
          dispo="right"
          tourniquet={<Tourniquet images={imagesMintFiesta} isVideo={false} />}
          projectCont={<MintFiesta />}
        />

        <Project
          titre="R6DLE"
          dispo="left"
          tourniquet={<Tourniquet images={r6dleVid} isVideo={true} />}
          projectCont={<R6DLE />}
        />

        <Project
          titre="Dark And Light Dungeon"
          dispo="right"
          tourniquet={<Tourniquet images={darkAndLightVid} isVideo={true} />}
          projectCont={<DarkAndLight />}
        />

        <Project
          titre="SuiBox"
          dispo="left"
          tourniquet={<Tourniquet images={suiBoxVid} isVideo={true} />}
          projectCont={<SuiBox />}
        />
      </main>
    </div>
  );
}

export default Home;
