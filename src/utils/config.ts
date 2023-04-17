import PenRulerSolid from "@components/assets/icons/pen-ruler-solid.svg";
import DisplaySolid from "@components/assets/icons/display-solid.svg";
import PaletteSolid from "@components/assets/icons/palette-solid.svg";
import MobileScreenSolid from "@components/assets/icons/mobile-screen-button-solid.svg";

export const HeroCardConfig = {
    WelcomeText: 'Welcome',
    TypeWriterContext: [
        'I am Cigan Oliviu-David.',
        'I am a Student.',
        'I am a Software Engineer.',
        'I am a Researcher.'
    ],
    ContinuityText: 'based in Cluj-Napoca, Romania.',
    ButtonText: 'Let\'s discuss'
};

export const ResumeConfig = {
    education: [
        {
            date: '2020 - Present',
            title: 'Faculty of Automation and Applied Informatics',
            subtitle: 'Technical University of Cluj-Napoca',
            content: 'During my internship, I learned how an Agile team works. Besides this, I participated in building a\n' +
                'basic VOD web application. My responsibilities included building new functionalities with ReactJS,\n' +
                'HTML5/CSS3, and fixing bugs. I was also using Git and Gitlab with this project. Besides my coding\n' +
                'responsibilities, I was also assigned to research and work in the DevOps sector of the project.\n' +
                'I also learned what teamwork and leadership truly mean by offering my support and asking for help when needed.'
        },
        {
            date: '2016 - 2020',
            title: 'Mathematics and Informatics',
            subtitle: 'Theoretical High-School Carei',
            content: 'During my internship, I learned how an Agile team works. Besides this, I participated in building a\n' +
                'basic VOD web application. My responsibilities included building new functionalities with ReactJS,\n' +
                'HTML5/CSS3, and fixing bugs. I was also using Git and Gitlab with this project. Besides my coding\n' +
                'responsibilities, I was also assigned to research and work in the DevOps sector of the project.\n' +
                'I also learned what teamwork and leadership truly mean by offering my support and asking for help when needed.'
        }
    ],
    experience: [
        {
            date: '2022 - Present',
            title: 'Deep Learning Research Student',
            subtitle: 'Advanced Process Control Methods Research Group',
            content: 'During my internship, I learned how an Agile team works. Besides this, I participated in building a\n' +
                'basic VOD web application. My responsibilities included building new functionalities with ReactJS,\n' +
                'HTML5/CSS3, and fixing bugs. I was also using Git and Gitlab with this project. Besides my coding\n' +
                'responsibilities, I was also assigned to research and work in the DevOps sector of the project.\n' +
                'I also learned what teamwork and leadership truly mean by offering my support and asking for help when needed.'
        },
        {
            date: '2021 - Present',
            title: 'Software Engineer',
            subtitle: '3Screen Solutions',
            content: 'During my internship, I learned how an Agile team works. Besides this, I participated in building a\n' +
                'basic VOD web application. My responsibilities included building new functionalities with ReactJS,\n' +
                'HTML5/CSS3, and fixing bugs. I was also using Git and Gitlab with this project. Besides my coding\n' +
                'responsibilities, I was also assigned to research and work in the DevOps sector of the project.\n' +
                'I also learned what teamwork and leadership truly mean by offering my support and asking for help when needed.'
        },
        {
            date: '2021 - 2021',
            title: 'Web Application Development Internship',
            subtitle: '3Screen Solutions',
            content: 'During my internship, I learned how an Agile team works. Besides this, I participated in building a\n' +
                'basic VOD web application. My responsibilities included building new functionalities with ReactJS,\n' +
                'HTML5/CSS3, and fixing bugs. I was also using Git and Gitlab with this project. Besides my coding\n' +
                'responsibilities, I was also assigned to research and work in the DevOps sector of the project.\n' +
                'I also learned what teamwork and leadership truly mean by offering my support and asking for help when needed.'
        }
    ],
    my_skills: {
        column_one_domain: [
            {
                title: 'Backend',
                percentage: 84
            },
            {
                title: 'Frontend',
                percentage: 90
            },
            {
                title: 'Architecture',
                percentage: 80
            },
        ],
        column_two_domain: [
            {
                title: 'Databases',
                percentage: 90
            },
            {
                title: 'Design',
                percentage: 78
            },
            {
                title: 'UI/UX',
                percentage: 74
            },
        ],
        column_one_specific: [
            {
                title: 'Typescript',
                percentage: 92
            },
            {
                title: 'React',
                percentage: 86
            },
        ],
        column_two_specific: [
            {
                title: 'Django',
                percentage: 85
            },
            {
                title: '.NET Core',
                percentage: 78
            },
        ]
    }
};

export const KnowMeMoreConfig = {
      content: 'During my internship, I learned how an Agile team works. Besides this, I participated in building a ' +
          'basic VOD web application. My responsibilities included building new functionalities with ReactJS, ' +
          'HTML5/CSS3, and fixing bugs. I was also using Git and Gitlab with this project. Besides my coding ' +
          'responsibilities, I was also assigned to research and work in the DevOps sector of the project. I also ' +
          'learned what teamwork and leadership truly mean by offering my support and asking for help when needed.'
};

export const WhatIDoConfig = {
    column_one: [
        {
            icon: PenRulerSolid.src,
            title: 'Graphic Design',
            content: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
        },
        {
            icon: DisplaySolid.src,
            title: 'Web Applications',
            content: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
        }
    ],
    column_two: [
        {
            icon: PaletteSolid.src,
            title: 'UI/UX Design',
            content: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
        },
        {
            icon: MobileScreenSolid.src,
            title: 'Mobile Applications',
            content: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
        }
    ]
};

export const getFormEndpoint = 'https://getform.io/f/ba6e5e42-6797-47b3-956f-2059fcca4494';