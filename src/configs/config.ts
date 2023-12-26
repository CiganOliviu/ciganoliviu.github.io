import BezierCurveSolid from "@components/assets/icons/bezier-curve-solid.svg";
import DisplaySolid from "@components/assets/icons/display-solid.svg";
import PaletteSolid from "@components/assets/icons/palette-solid.svg";
import MobileScreenSolid from "@components/assets/icons/mobile-screen-button-solid.svg";
import Linkedin from "@components/assets/icons/linkedin.svg";
import Github from "@components/assets/icons/github.svg";
import Whatsapp from "@components/assets/icons/whatsapp.svg";
import Medium from "@components/assets/icons/medium.svg";

export const HeroCardConfig = {
    WelcomeText: 'Welcome',
    TypeWriterContext: [
        'I am Cigan Oliviu-David.',
        'I am a Student.',
        'I am a Software Engineer.',
        'I am an AI Researcher.'
    ],
    ContinuityText: 'based in Cluj-Napoca, Romania.',
    ButtonText: 'Let\'s discuss'
};

export const KnowMeMoreConfig = {
      content: 'I am a dedicated student at one of the top four faculties in Romania, pursuing a degree in ' +
          'Software Engineering. In my first year of studies, I was fortunate to secure an internship in the field, ' +
          'where I gained valuable hands-on experience and made important professional connections. Following the ' +
          'successful completion of my internship, I was offered a position and have been working in the field ever ' +
          'since. Recently, I began my journey as a researcher in Artificial Intelligence, as I have a deep interest' +
          ' in advancing the field. With a passion for learning and a commitment to excellence, I strive to make the' +
          ' most of my education and contribute to the advancement of technology.'
};

export const WhatIDoConfig = {
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
            icon: PaletteSolid.src,
            title: 'UI/UX Design',
            content: 'UI/UX design principles that allows me to optimize the user journey, simplify complex workflows,' +
                ' and ensure that user interactions with the application are smooth and seamless.',
        },
        {
            icon: MobileScreenSolid.src,
            title: 'Mobile Applications',
            content: 'I possess a comprehensive knowledge of mobile development, specifically hybrid development. ' +
                'In addition to my existing expertise, I am committed to staying up-to-date with the latest trends and best practices.',
        }
    ]
};

export const ExternalSocialLinksConfig = {
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