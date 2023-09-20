import Image from 'next/image';
import RavenCodLogoWithMetadata from '../../assets/raven_cod_logo_white_metadata.png';
import { ImageWrapper } from "@components/components/Logo/Logo.css";

export const Logo = () => {
    return (
        <ImageWrapper>
            <Image src={RavenCodLogoWithMetadata} alt="Raven COD Logo" width={150} />
        </ImageWrapper>
    )
}