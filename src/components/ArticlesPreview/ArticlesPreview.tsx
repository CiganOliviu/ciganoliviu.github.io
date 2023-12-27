import { ArticlesPreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import { TextContainer } from "@components/components/TextContainer/TextContainer";

export const ArticlesPreview = () => {
    return (
        <ArticlesPreviewWrapper>
            {TextContainer({backText: 'Articles', overText: 'My Published Articles'})}
        </ArticlesPreviewWrapper>
    )
}