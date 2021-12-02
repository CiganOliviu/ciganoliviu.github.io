import React, { useRef } from 'react';
import HeroCard from './components/HeroCard/HeroCard';
import Slide from './components/Slide/Slide';
import Footer from './components/Footer/Footer';
import HeroCardWallpaper from './Images/herocard-wallpaper.jpg';
import UniversityWallpaper from './Images/ac.jpg';
import CompanyWallpaper from './Images/3ss.png';
import PeerToPeerLearning from './Images/peertopeerlearning.jpeg';
import FooterWallpaper from './Images/footer-wallpaper.jpeg';

import './App.css';

function App() {

    const gradientWallpaperUniversity = 'rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)';
    const gradientWallpaperOpen = 'rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)';

    const facultyRef = useRef(null);
    const companyRef = useRef(null);
    const peerToPeerRef = useRef(null);
    const footerRef = useRef(null);

    const universityTitle = "Part of Tehnical University since 2020!"
    const universityContent = "In 2019, I decided to study at Technical University in Cluj-Napoca. So I did! In the " +
      "next year, I became a student at Automation and Applied Informatics. \n This has happened despite the pandemic " +
      "conditions, which made a mess of the admission process."


    const threeSSTitle = "Part of 3SS since summer of 2021!";
    const threeSSContent = "At the beginning of 2021, I decided to jump into the market and get an internship as a software engineer. For five months I was working on my portfolio, I was preparing for interviews, and I was searching, and applying for the right positions at the right companies. \n" +
        "After five months, I got my first internship as a Web Application Developer, and after the internship, where I contributed to 40% of the application, I got a job as a Software Engineer. \n" +
        "Currently, I am learning and working with leading developers in the software industry.\n" +
        "With each day, I am gathering more experience and knowledge, leading me closer to becoming a leading developer myself."

    const peerToPeerTitle = "Founder of PeerToPeer Learning concept!";
    const peerToPeerContent = "I'm one of the two founders of PeerToPeer learning, an educational platform that helps " +
        "students ace their final test. \n Even though at first I was committed to the startup, in a short period of time, I realized it's not for me. \n" +
        "Currently,  I'm only responsible for the software field development and maintenance.";

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
                     Ref={peerToPeerRef}
                     LinearGradient={gradientWallpaperOpen}
                     Title={threeSSTitle}
                     Content={threeSSContent} />
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
