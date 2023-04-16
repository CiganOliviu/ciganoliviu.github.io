import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { WhatIDoBox, WhatIDoCardFlexContainer } from "@components/components/WhatIDo/WhatIDo.css";
import { DoCard } from "@components/components/DoCard/DoCard";
import { ContentColumn, Separator } from "@components/components/Resume/Resume.css";
import PenRulerSolid from "@components/assets/icons/pen-ruler-solid.svg";
import DisplaySolid from "@components/assets/icons/display-solid.svg";
import PaletteSolid from "@components/assets/icons/palette-solid.svg";
import MobileScreenSolid from "@components/assets/icons/mobile-screen-button-solid.svg";

export const WhatIDo = () => {
    return (
        <WhatIDoBox>
            {TextContainer('Services', 'What I Do')}
            <WhatIDoCardFlexContainer>
                <ContentColumn>
                    {DoCard(PenRulerSolid.src, 'Graphic Design', 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.')}
                    <Separator />
                    {DoCard(DisplaySolid.src, 'Graphic Design', 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.')}
                </ContentColumn>
                <ContentColumn>
                    {DoCard(PaletteSolid.src, 'Graphic Design', 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.')}
                    <Separator />
                    {DoCard(MobileScreenSolid.src, 'Graphic Design', 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.')}
                </ContentColumn>
            </WhatIDoCardFlexContainer>
        </WhatIDoBox>
    )
}