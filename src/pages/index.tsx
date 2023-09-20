import { HeroCard } from "@components/components/HeroCard/HeroCard";
import { Resume } from "@components/components/Resume/Resume";
import { KnowMeMore } from "@components/components/KnowMeMore/KnowMeMore";
import { WhatIDo } from "@components/components/WhatIDo/WhatIDo";
import { Contact } from "@components/components/Contact/Contact";
import { Footer } from "@components/components/Footer/Footer";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { useRef } from "react";

export default function Home() {
    const { isMobile } = useGetScreenSize();
    const resultRef = useRef<HTMLDivElement>();

    return (
       <>
           {!isMobile() && <ScrollTopButton />}
            <HeroCard nextSectionReference={resultRef} />
            <KnowMeMore ref={resultRef} />
            <WhatIDo />
            <Resume />
            <Contact />
            <Footer />
       </>
    )
}
