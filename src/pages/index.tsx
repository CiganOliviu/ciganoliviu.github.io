import { HeroCard } from "@components/components/HeroCard/HeroCard";
import { Resume } from "@components/components/Resume/Resume";
import { KnowMeMore } from "@components/components/KnowMeMore/KnowMeMore";
import { WhatIDo } from "@components/components/WhatIDo/WhatIDo";
import { Contact } from "@components/components/Contact/Contact";
import { Footer } from "@components/components/Footer/Footer";

export default function Home() {
    return (
       <>
            <HeroCard/>
            <KnowMeMore />
            <WhatIDo />
            <Resume />
            <Contact />
            <Footer />
       </>
    )
}
