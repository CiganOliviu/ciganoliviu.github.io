import BezierCurveSolid from "@components/assets/icons/bezier-curve-solid.svg";
import DisplaySolid from "@components/assets/icons/display-solid.svg";
import RobotSolid from "@components/assets/icons/robot-solid.svg";
import MobileScreenSolid from "@components/assets/icons/mobile-screen-button-solid.svg";
import Linkedin from "@components/assets/icons/linkedin.svg";
import Github from "@components/assets/icons/github.svg";
import Whatsapp from "@components/assets/icons/whatsapp.svg";
import Medium from "@components/assets/icons/medium.svg";
import {
    ExternalSocialLinksConfigType,
    HeroCardConfigType,
    KnowMeMoreConfigType,
    WhatIDoConfigType
} from "@components/utils/types";

export const HeroCardConfig: HeroCardConfigType = {
    WelcomeText: 'Welcome',
    TypeWriterContext: [
        'I am Cigan Oliviu-David.',
        'I am a Student.',
        'I am a Software Engineer.',
        'I am an AI Researcher.'
    ],
    ContinuityText: 'based in Cluj-Napoca and Satu-Mare, Romania.',
    ButtonText: 'Let\'s discuss'
};

export const KnowMeMoreConfig: KnowMeMoreConfigType = {
      content: 'Studying Software Engineering at a leading Romanian faculty, I embarked on an impactful journey ' +
          'early on with a sought-after internship. This opportunity not only provided hands-on experience but ' +
          'also forged crucial professional connections, leading to a continuous career in the field for over two years.\n' +
          'Beyond my studies, I immerse myself as a researcher in Artificial Intelligence. Driven by a passion ' +
          'for technological advancement, I strive to contribute meaningfully to this dynamic field, fueled ' +
          'by an unwavering commitment to learning and excellence.'
};

export const WhatIDoConfig: WhatIDoConfigType = {
    column_one: [
        {
            icon: BezierCurveSolid.src,
            title: 'Backend Services',
            content: 'I specialize in backend systems, where I excel at designing, developing, and optimizing the ' +
                'technology that powers applications. With a focus on scalability and security, ' +
                'I ensure that these systems are reliable and efficient.',
        },
        {
            icon: DisplaySolid.src,
            title: 'Web Applications',
            content: 'As a software engineer, my expertise also encompasses developing web applications. ' +
                'I have an in-depth understanding of web technologies, frameworks, and programming languages.',
        }
    ],
    column_two: [
        {
            icon: RobotSolid.src,
            title: 'Machine Learning',
            content: 'I offer Machine Learning services, leveraging my expertise in this field to provide ' +
                'tailored solutions that harness the power of data and algorithms for diverse applications',
        },
        {
            icon: MobileScreenSolid.src,
            title: 'Mobile Applications',
            content: 'I possess a comprehensive knowledge of mobile development, specifically hybrid development. ' +
                'In addition to my existing expertise, I am committed to staying up-to-date with the latest trends and best practices.',
        }
    ]
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

export const getFormEndpoint = 'https://getform.io/f/ba6e5e42-6797-47b3-956f-2059fcca4494';