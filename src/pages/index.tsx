import { HeroCard } from "@components/components/HeroCard/HeroCard";
import { Resume } from "@components/components/Resume/Resume";
import { KnowMeMore } from "@components/components/KnowMeMore/KnowMeMore";
import { WhatIDo } from "@components/components/WhatIDo/WhatIDo";

export default function Home() {
    return (
       <>
            <HeroCard/>
            <KnowMeMore />
            <WhatIDo />
            <Resume />
       </>
    )
}
