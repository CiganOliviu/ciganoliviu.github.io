import Linkedin from "@components/assets/icons/linkedin.svg";
import Github from "@components/assets/icons/github.svg";
import Whatsapp from "@components/assets/icons/whatsapp.svg";
import Medium from "@components/assets/icons/medium.svg";
import { ExternalSocialLinksConfigType, HeroCardConfigType, KnowMeMoreConfigType } from "@components/utils/types";

export const LandingAreaConfig: HeroCardConfigType = {
    WelcomeText: 'Welcome',
    TypeWriterContext: [
        'Cigan Oliviu-David.',
        'a Data Scientist.',
        'a Software Engineer.',
        'a Researcher.'
    ],
    ContinuityText: 'based in Cluj-Napoca and Satu-Mare, Romania.',
    ButtonText: 'See experience'
};

export const KnowMeMoreConfig: KnowMeMoreConfigType = {
      content: 'During my studies, I gained significant experience through a highly sought-after internship, which not only provided hands-on skills but also helped me build important professional connections. This experience has led to a fulfilling career in software engineering that has lasted over three years now. In addition to my work in software, I am actively involved in Artificial Intelligence and Data Science research, collaborating with a deep tech Canadian startup. My passion for technological innovation drives me to contribute meaningfully to this dynamic field, supported by a steadfast commitment to continuous learning and excellence.'
};

export const ExternalSocialLinksConfig: ExternalSocialLinksConfigType = {
    links: [
        {
            url: 'https://www.linkedin.com/in/oliviu-david-c-72489015b/',
            iconSource: Linkedin.src as string
        },
        {
            url: 'https://github.com/CiganOliviu',
            iconSource: Github.src as string
        },
        {
            url: 'https://www.whatsapp.com',
            iconSource: Whatsapp.src as string
        },
        {
            url: 'https://medium.com/@ciganoliviudavid',
            iconSource: Medium.src as string
        }
    ],
    target: '_blank',
    rel: 'noopener noreferrer'
};
