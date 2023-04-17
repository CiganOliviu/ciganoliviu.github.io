import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { WhatIDoBox, WhatIDoCardFlexContainer } from "@components/components/WhatIDo/WhatIDo.css";
import { DoCard } from "@components/components/DoCard/DoCard";
import { ContentColumn, Separator } from "@components/components/Resume/Resume.css";
import { WhatIDoConfig } from "@components/utils/config";

export const WhatIDo = () => {
    return (
        <WhatIDoBox>
            {TextContainer('Services', 'What I Do')}
            <WhatIDoCardFlexContainer>
                <ContentColumn>
                    {WhatIDoConfig.column_one.map((item) => {
                        return (
                            <>
                                {DoCard(item.icon, item.title, item.content)}
                                <Separator />
                            </>
                        )
                    })}
                </ContentColumn>
                <ContentColumn>
                    {WhatIDoConfig.column_two.map((item) => {
                        return (
                            <>
                                {DoCard(item.icon, item.title, item.content)}
                                <Separator />
                            </>
                        )
                    })}
                </ContentColumn>
            </WhatIDoCardFlexContainer>
        </WhatIDoBox>
    )
}