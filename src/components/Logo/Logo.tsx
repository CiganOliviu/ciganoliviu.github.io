import RavenCodLogo from '../../assets/raven_logo_cod_white.svg';
import { ImageLogo, ImageWrapper } from "@components/components/Logo/Logo.css";
import { useRouter } from "next/router";

export const Logo = () => {
    const router = useRouter();

    const onLogoClickRedirectHome = () => {
        router.push('/').then();
    };

    return (
        <ImageWrapper onClick={onLogoClickRedirectHome}>
            <ImageLogo src={RavenCodLogo.src} alt="Raven COD Logo" />
        </ImageWrapper>
    )
}