import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { WhatIDoBox, WhatIDoCardFlexContainer } from "@components/components/WhatIDo/WhatIDo.css";
import { DoCard } from "@components/components/DoCard/DoCard";
import { ContentColumn, Separator } from "@components/components/Resume/Resume.css";
import { WhatIDoConfig } from "@components/utils/config";

export const WhatIDo = () => {
    const renderConfigByColumn = (array: {icon: any, title: string, content: string}[]) => {
        return array.map((item) => {
            return (
                <div key={item.title}>
                    {DoCard(item.icon, item.title, item.content)}
                    <Separator />
                </div>
            )
        })
    }

    return (
        <WhatIDoBox>
            {TextContainer('Services', 'What I Do')}
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