import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { WhatIDoBox, WhatIDoCardFlexContainer } from "@components/components/WhatIDo/WhatIDo.css";
import { DoCard } from "@components/components/DoCard/DoCard";
import { ContentColumn, Separator } from "@components/components/Resume/Resume.css";
import { WhatIDoConfig } from "@components/configs/generalConfig";
import { DoCardType } from "@components/utils/types";
import { FC } from "react";

export const WhatIDo: FC = () => {
    const renderConfigByColumn = (array: DoCardType[]) => {
        return array.map((item: DoCardType) => {
            return (
                <div key={item.title}>
                    {DoCard({ context: item })}
                    <Separator />
                </div>
            )
        })
    };

    return (
        <WhatIDoBox>
            {TextContainer({backText: 'Services', overText: 'What I Do'})}
            <WhatIDoCardFlexContainer>
                <ContentColumn>
                    {renderConfigByColumn(WhatIDoConfig.column_one)}
                </ContentColumn>
                <ContentColumn>
                    {renderConfigByColumn(WhatIDoConfig.column_two)}
                </ContentColumn>
            </WhatIDoCardFlexContainer>
        </WhatIDoBox>
    )
}