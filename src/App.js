import { React, useRef } from 'react';
import HeroCard from './components/HeroCard/HeroCard';
import Slide from './components/Slide/Slide';
import Footer from './components/Footer/Footer';
import HeroCardWallpaper from './Images/herocard-wallpaper.jpg';
import UniversityWallpaper from './Images/ac.jpg';
import CompanyWallpaper from './Images/3ss.png';
import ThreeReadyWallpaper from './Images/3ready2.png';
import PeerToPeerLearning from './Images/peertopeerlearning.jpeg';
import FooterWallpaper from './Images/footer-wallpaper.jpeg';

import './App.css';

function App() {

  const gradientWallpaperUniversity = 'rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)';
  const gradientWallpaperOpen = 'rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)';
  const gradientWallpaper3Ready = 'rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)';

  const facultyRef = useRef(null);
  const companyRef = useRef(null);
  const threeReadyRef = useRef(null);
  const peerToPeerRef = useRef(null);
  const footerRef = useRef(null);

  const universityTitle = "Part of Tehnical University since 2021!"
  const universityContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"

  const threeSSTitle = "Part of 3SS since summer of 2021!";
  const threeSSContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text";

  const threeReadyTitle = "Supporter of 3Ready entertainment ecosystem";
  const threeReadyContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text";

  const peerToPeerTitle = "Founder of PeerToPeer Learning concept";
  const peerToPeerContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text";

  return (
    <div className="App">
        <HeroCard ImageWallpaper={HeroCardWallpaper} Ref={facultyRef} />
        <div ref={facultyRef}>
          <Slide ImageWallpaper={UniversityWallpaper} 
                 Ref={companyRef} 
                 LinearGradient={gradientWallpaperUniversity} 
                 Title={universityTitle}
                 Content={universityContent} />
        </div>
        <div ref={companyRef}>
          <Slide ImageWallpaper={CompanyWallpaper} 
                 Ref={threeReadyRef} 
                 LinearGradient={gradientWallpaperOpen} 
                 Title={threeSSTitle}
                 Content={threeSSContent} />
        </div>
        <div ref={threeReadyRef}>
          <Slide ImageWallpaper={ThreeReadyWallpaper} 
                 Ref={peerToPeerRef} 
                 LinearGradient={gradientWallpaper3Ready} 
                 Title={threeReadyTitle}
                 Content={threeReadyContent} />
        </div>
        <div ref={peerToPeerRef}>
          <Slide ImageWallpaper={PeerToPeerLearning} 
                 Ref={footerRef} 
                 LinearGradient={gradientWallpaperOpen} 
                 Title={peerToPeerTitle}
                 Content={peerToPeerContent} />
        </div>
        <div ref={footerRef}>
          <Footer ImageWallpaper={FooterWallpaper} />
        </div>
    </div>
  );
}

export default App;
