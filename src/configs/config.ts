import BezierCurveSolid from "@components/assets/icons/bezier-curve-solid.svg";
import DisplaySolid from "@components/assets/icons/display-solid.svg";
import PaletteSolid from "@components/assets/icons/palette-solid.svg";
import MobileScreenSolid from "@components/assets/icons/mobile-screen-button-solid.svg";
import Linkedin from "@components/assets/icons/linkedin.svg";
import Github from "@components/assets/icons/github.svg";
import Whatsapp from "@components/assets/icons/whatsapp.svg";
import BrainTumorDetection from '../assets/BrainTumorDetection.jpg';
import VodBackground from '../assets/VodBackground.png';
import SignalProcessing from '../assets/SignalProcessing.jpg';

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

export const ProjectsConfig = [
    {
        thumbnail: VodBackground.src,
        title: 'StreamSnap VOD Mobile App',
        content: 'StreamSnap is a proof of concept (PoC) mobile streaming application that I\'ve developed to showcase ' +
            'the potential of a streaming platform. This project aims to provide a glimpse into the possibilities ' +
            'of creating an innovative, user-centric mobile app for accessing movies and TV shows on the go.\n',
        open_link: '',
        is_in_progress: true,
    },
    {
        thumbnail: SignalProcessing.src,
        title: 'Brushless DC electric motor Analysis',
        content: 'This project is dedicated to achieving a comprehensive understanding of BLDC electric motors, ' +
            'with the overarching goal of optimizing their efficiency and effectiveness across a broad range of ' +
            'industries.',
        open_link: 'https://github.com/CiganOliviu/brushless-DC-electric-motor-identification',
        is_in_progress: false,
    },
    {
        thumbnail: BrainTumorDetection.src,
        title: 'MedCity - Brain Tumor Detection System',
        content: 'Brain-Tumor-Detection-System is a Proof of Concept (POC) project in the ' +
            'medical field, designed to improve the early detection of brain tumors. It analyzes brain X-ray ' +
            'images using advanced technology, providing high precision and real-time results, facilitating ' +
            'rapid and accurate diagnosis.',
        open_link: 'https://github.com/CiganOliviu/brain-tumor-detection',
        is_in_progress: false,
    },
];

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
        }
    ],
    target: '_blank',
    rel: 'noopener noreferrer'
};

export const getFormEndpoint = 'https://getform.io/f/ba6e5e42-6797-47b3-956f-2059fcca4494';