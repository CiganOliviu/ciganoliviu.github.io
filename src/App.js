import React, { useRef } from 'react';
import HeroCard from './components/HeroCard/HeroCard';
import Slide from './components/Slide/Slide';
import Footer from './components/Footer/Footer';
import HeroCardWallpaper from './Images/herocard-wallpaper.jpg';
import UniversityWallpaper from './Images/ac.jpg';
import CompanyWallpaper from './Images/3ss.png';
import PeerToPeerLearning from './Images/peertopeerlearning.jpeg';
import FooterWallpaper from './Images/footer-wallpaper.jpeg';
import {
    gradientWallpaperClose,
    gradientWallpaperDark,
    gradientWallpaperOpen, peerToPeerContent, peerToPeerTitle, threeSSContent, threeSSTitle, universityContent,
    universityTitle
} from "./utils/environmentVariables";
import './App.css';

function App() {

    const facultyRef = useRef(null);
    const companyRef = useRef(null);
    const peerToPeerRef = useRef(null);
    const footerRef = useRef(null);

    return (
        <div className="App">
            <HeroCard ImageWallpaper={HeroCardWallpaper} Ref={facultyRef} />
            <div ref={facultyRef}>
                <Slide ImageWallpaper={UniversityWallpaper}
                     Ref={companyRef}
                     LinearGradient={gradientWallpaperDark}
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
                     LinearGradient={gradientWallpaperClose}
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
