import Image, { StaticImageData } from 'next/image';
import RavenCodLogoWithMetadata from '../../assets/raven_cod_logo_white_metadata.png';
import RavenCodLogo from '../../assets/raven_cod_logo_white.png';
import { ImageWrapper } from "@components/components/Logo/Logo.css";
import { useEffect, useState } from "react";

export const Logo = () => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [imageSrc, setImageSrc] = useState<StaticImageData>(RavenCodLogoWithMetadata);
    const [imageWidth, setImageWidth] = useState<number>(150);

    const threshold = 300;
    const widthForLogoWithMetadata = 150;
    const widthForLogoWithoutMetadata = 75;

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const isScreenScrolled = scrollY > threshold;

        setImageSrc(isScreenScrolled ? RavenCodLogo : RavenCodLogoWithMetadata);
        setImageWidth(isScreenScrolled ? widthForLogoWithoutMetadata : widthForLogoWithMetadata);
    }, [scrollY]);

    return (
        <ImageWrapper>
            <Image src={imageSrc} alt="Raven COD Logo" width={imageWidth} />
        </ImageWrapper>
    )
}