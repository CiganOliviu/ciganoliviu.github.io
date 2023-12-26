import Image from 'next/image';
import RavenCodLogoWithMetadata from '../../assets/raven_cod_logo_white_metadata.png';
import { ImageLogo, ImageWrapper } from "@components/components/Logo/Logo.css";
import { useRouter } from "next/router";

export const Logo = () => {
    const router = useRouter();

    const onLogoClickRedirectHome = () => {
        router.push('/').then();
    };

    return (
        <ImageWrapper onClick={onLogoClickRedirectHome}>
            <ImageLogo src={RavenCodLogoWithMetadata.src} alt="Raven COD Logo" />
        </ImageWrapper>
    )
}