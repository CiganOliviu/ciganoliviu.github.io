import Image from 'next/image';
import RavenCodLogoWithMetadata from '../../assets/raven_cod_logo_white_metadata.png';
import { ImageLogo, ImageWrapper } from "@components/components/Logo/Logo.css";

export const Logo = () => {
    return (
        <ImageWrapper>
            <ImageLogo src={RavenCodLogoWithMetadata.src} alt="Raven COD Logo" />
        </ImageWrapper>
    )
}