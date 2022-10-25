import React, { useRef } from 'react';
import HeroCard from './components/HeroCard/HeroCard';
import Slide from './components/Slide/Slide';
import Footer from './components/Footer/Footer';
import HeroCardWallpaper from './images/herocard-wallpaper.jpg';
import UniversityWallpaper from './images/ac.jpg';
import CompanyWallpaper from './images/3ss.png';
import FooterWallpaper from './images/footer-wallpaper.jpeg';
import {
    gradientWallpapers, universityContainer, threeSSContainer
} from "./utils/environmentVariables";
import ScrollToTop from "./components/ScrollTopButton/ScrollTopButton";
import './App.css';

function App() {

    const facultyRef = useRef(null);
    const companyRef = useRef(null);
    const footerRef = useRef(null);

    return (
        <div className="App">
            <HeroCard ImageWallpaper={HeroCardWallpaper} Ref={facultyRef} />
            <div ref={facultyRef}>
                <Slide ImageWallpaper={UniversityWallpaper}
                     Ref={companyRef}
                     LinearGradient={gradientWallpapers.gradientWallpaperDark}
                     Title={universityContainer.universityTitle}
                     Content={universityContainer.universityContent} />
            </div>
            <div ref={companyRef}>
                <Slide ImageWallpaper={CompanyWallpaper}
                     Ref={footerRef}
                     LinearGradient={gradientWallpapers.gradientWallpaperOpen}
                     Title={threeSSContainer.threeSSTitle}
                     Content={threeSSContainer.threeSSContent} />
            </div>
            <div ref={footerRef}>
              <Footer ImageWallpaper={FooterWallpaper} />
            </div>
            <ScrollToTop />
        </div>
    );
}

export default App;
