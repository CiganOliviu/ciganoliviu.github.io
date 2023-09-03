import BezierCurveSolid from "@components/assets/icons/bezier-curve-solid.svg";
import DisplaySolid from "@components/assets/icons/display-solid.svg";
import PaletteSolid from "@components/assets/icons/palette-solid.svg";
import MobileScreenSolid from "@components/assets/icons/mobile-screen-button-solid.svg";
import Linkedin from "@components/assets/icons/linkedin.svg";
import Github from "@components/assets/icons/github.svg";
import Whatsapp from "@components/assets/icons/whatsapp.svg";

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

export const ResumeConfig = {
    education: [
        {
            date: '2020 - Present',
            title: 'Faculty of Automation and Applied Informatics',
            subtitle: 'Technical University of Cluj-Napoca',
            content: '',
            htmlField: {__html: 'Over the course of my studies, I have completed several courses that have equipped me with a ' +
                    'diverse range of skills and knowledge. Some of the courses that worth mentioning are the following:' +
                    '<div>&nbsp;</div>' + '* Firstly, I have taken courses about computer architecture and the basics of the Linux operating' +
                    ' system. These courses provided me with a solid understanding of the fundamental concepts of computer systems and how they work.\n' +
                    '<div>&nbsp;</div>' + '* In addition, I have also completed a brief introduction to the basics of electronic circuits, ' +
                    'which has enabled me to understand the hardware components of computer systems.\n' +
                    '<div>&nbsp;</div>' + '* Furthermore, I have taken courses about computer programs and essential coding algorithms, ' +
                    'which has given me the ability to write efficient and optimized code.\n' +
                    '<div>&nbsp;</div>' + '* Moreover, I have learned the basics of Object-Oriented Programming (OOP) including aggregation, ' +
                    'composition, inheritance, and more, along with an opening to design patterns.\n' +
                    '<div>&nbsp;</div>' + '* Additionally, I have been initiated to computer graphics using AutoCAD and OpenGL, as well as ' +
                    'functional programming in Lisp programming language. These courses have given me a comprehensive ' +
                    'understanding of computer graphics and functional programming concepts.\n' +
                    '<div>&nbsp;</div>' + '* Moreover, I have also completed an introduction to programming embedded systems in C, including ' +
                    'microcontrollers and Arduino, which has provided me with the skills to program small systems.\n' +
                    '<div>&nbsp;</div>' + '* I have also completed a course in relational database design and implementation with SQL, which ' +
                    'has enabled me to design, create and manage complex databases.\n' +
                    '<div>&nbsp;</div>' + '* Furthermore, I have an introduction to hardware design, which has equipped me with a ' +
                    'comprehensive understanding of how hardware is designed and manufactured.\n' +
                    '<div>&nbsp;</div>' + '* Lastly, I have completed an introduction to the basics of signals processing, process modeling ' +
                    'and systems theory together with systems identification. These courses have provided me with an ' +
                    'understanding of how to process signals, model systems, and apply systems theory.'},
        },
        {
            date: '2016 - 2020',
            title: 'Mathematics and Informatics',
            subtitle: 'Theoretical High-School Carei',
            htmlField: {__html: 'During this time, I worked with algorithms implementations, especially in C++ but also in Java ' +
                    'and C#. I took part in several web development projects for school and local contests, in which \n' +
                    'I worked at a basic level with technologies like Django, HTML5, CSS3, SASS, PHP, JavaScript, or Angular.'},
        }
    ],
    experience: [
        {
            date: '2022 - Present',
            title: 'Deep Learning Research Student',
            subtitle: 'Advanced Process Control Methods Research Group',
            htmlField: {__html: 'Together with a startup company from Canada, I am currently working to gain a deeper ' +
                    'understanding of Neural Networks, Recurrent Neural ' +
                    'Networks, Deep Learning, and Machine Learning.\n' +
                    '<div>&nbsp;</div>' + 'My primary research direction is focused on automating global investment management strategies. ' +
                    'Specifically, I am leveraging deep learning to identify patterns in available data that are beyond ' +
                    'human capability to identify for control purposes.\n' +
                    '</br>' + 'In addition, I am actively seeking the best data to achieve maximum accuracy of the deep ' +
                    'learning algorithm. Through my research, I hope to create more efficient and accurate investment ' +
                    'management strategies that will benefit our clients.'},
        },
        {
            date: '2021 - Present',
            title: 'Software Engineer',
            subtitle: '3Screen Solutions',
            htmlField: {__html: 'My day-to-day activities include implementing new features using React and Typescript, ensuring ' +
                    'that the code quality is top-notch.\n' +
                    '<div>&nbsp;</div>' + 'I work closely with the development team, consulting them on code optimizations and possible ' +
                    'upgrades. It is important to me that I align with the client regarding functionalities and different ' +
                    'feature implementations to ensure that we meet their needs.\n' +
                    '</br>' + 'As part of my job, I review code and feature implementations on both the backend and frontend ' +
                    '(React and Node with Typescript). I take pride in ensuring that our code is clean and optimized, making sure we deliver quality work to our clients.\n' +
                    '</br>' + 'I am always on the lookout for bugs, and whenever the need arises, I take the initiative to fix ' +
                    'them as soon as possible. With my expertise, I aim to make our software better and more efficient for our clients.' +
                    ' I not only implement new features and ensure the quality of the code but also mentor and assist new joiners in integrating into the company and projects.\n' +
                    '</br>' + 'Currently I am working on a leading VOD application with over 600,000 unique monthly users ' +
                    '(about 1.6 million monthly users).'},
        },
        {
            date: '2021 - 2021',
            title: 'Web Application Development Internship',
            subtitle: '3Screen Solutions',
            htmlField: {__html: 'During my internship, I learned how an Agile team works. Besides this, I participated in building a\n' +
                    'basic VOD web application. </br> My responsibilities included building new functionalities with ReactJS,\n' +
                    'HTML5/CSS3, and fixing bugs. I was also using Git and Gitlab with this project. Besides my coding\n' +
                    'responsibilities, I was also assigned to research and work in the DevOps sector of the project.\n' +
                    '</br> I also learned what teamwork and leadership truly mean by offering my support and asking for help when needed.'},
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
                percentage: 88
            },
            {
                title: 'React/Next',
                percentage: 87
            },
        ],
        column_two_specific: [
            {
                title: 'Django',
                percentage: 86
            },
            {
                title: '.NET Core',
                percentage: 78
            },
        ]
    }
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
        }
    ],
    target: '_blank',
    rel: 'noopener noreferrer'
};

export const getFormEndpoint = 'https://getform.io/f/ba6e5e42-6797-47b3-956f-2059fcca4494';