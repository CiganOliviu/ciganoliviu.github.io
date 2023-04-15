import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { WhatIDoBox } from "@components/components/WhatIDo/WhatIDo.css";

export const WhatIDo = () => {
    return (
        <WhatIDoBox>
            {TextContainer('Services', 'What I Do')}
        </WhatIDoBox>
    )
}