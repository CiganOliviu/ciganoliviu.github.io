import { HeroCard } from "@components/components/HeroCard/HeroCard";
import { Resume } from "@components/components/Resume/Resume";
import { KnowMeMore } from "@components/components/KnowMeMore/KnowMeMore";
import { WhatIDo } from "@components/components/WhatIDo/WhatIDo";
import { Contact } from "@components/components/Contact/Contact";
import { Footer } from "@components/components/Footer/Footer";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

export default function Home() {

    const { isMobile } = useGetScreenSize();

    console.log(isMobile());

    return (
       <>
           {!isMobile() && <ScrollTopButton/>}
            <HeroCard/>
            <KnowMeMore />
            <WhatIDo />
            <Resume />
            <Contact />
            <Footer />
       </>
    )
}
