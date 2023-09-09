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
            date: '2020 - 2024',
            title: 'Faculty of Automation and Applied Informatics',
            subtitle: 'Technical University of Cluj-Napoca',
            content: '',
            htmlField: {__html: 'During my time at the faculty, I had the opportunity to delve into a wide range of ' +
                    'courses across various disciplines. <div>&nbsp;</div> In the field of Mathematics, I took courses such as Linear ' +
                    'Algebra and Analytical Geometry, Mathematical Analysis (Differential Calculus), Mathematical ' +
                    'Analysis (Integral Calculus and Differential Equations), Special Mathematics in Engineering, and ' +
                    'Numerical Calculus. These courses played a fundamental role in shaping my understanding of complex ' +
                    'problems and honing my analytical skills, both of which are important in programming and systems theory.\n' +
                    '<div>&nbsp;</div>In Systems Engineering, I gained valuable insights into the inner workings of modern systems and ' +
                    'learned efficient methods for their analysis and control. Process Modeling allowed me to ' +
                    'mathematically model mechanical and electrical systems, providing a solid foundation for ' +
                    'understanding their behavior. The Signals and Systems course equipped me with the ability ' +
                    'to comprehend both discrete and continuous signals, enabling me to analyze and recognize ' +
                    'patterns effectively. This course also delved into advanced topics like image processing and ' +
                    'mathematical concepts like the Fourier transformation for modeling. Systems Theory provided a ' +
                    'comprehensive understanding of how systems behave in diverse environments, offering insights into ' +
                    'analysis, behavior prediction, and methods for understanding complex systems. Systems Identification, ' +
                    'on the other hand, focused on pattern recognition and the ability to identify models for specific ' +
                    'systems based on input-output data. I acquired proficiency in various identification methods, ' +
                    'from parametrical to non-parametrical, and gained skills in evaluating model accuracy. Lastly, ' +
                    'Automatic Control Engineering involved analyzing systems with predefined performance criteria ' +
                    'and implementing control strategies to enhance system performance.\n' +
                    '<div>&nbsp;</div>In Electronics & Engineering, I explored hardware design, hardware analysis, ' +
                    'firmware development, and data transmission, broadening my knowledge of electronics and embedded systems.\n' +
                    '<div>&nbsp;</div>In the realm of Software Engineering, my coursework covered a diverse array of topics. I delved ' +
                    'into the intricacies of the Linux Operating System, gained proficiency in programming algorithms, ' +
                    'and developed a deep understanding of Object-Oriented Programming and Design. I also delved into ' +
                    'threads management and concurrent programming, explored SQL-based databases, and honed my skills ' +
                    'in web backend and frontend development. Furthermore, I gained experience in assembly programming ' +
                    'and learned to build graphical models using Lisp and functional programming.\n' +
                    'In summary, my educational journey at the faculty provided me with a well-rounded knowledge base ' +
                    'that spans mathematics, systems engineering, electronics, and software engineering. These courses' +
                    ' not only enriched my technical expertise but also fostered critical thinking and problem-solving ' +
                    'abilities, preparing me for a wide range of challenges and opportunities in the field of engineering ' +
                    'and technology.'},
        },
        {
            date: '2016 - 2020',
            title: 'Mathematics and Informatics',
            subtitle: 'Theoretical High-School Carei',
            htmlField: {__html: 'During high school, I began exploring coding and algorithms, applying them ' +
                    'across programming languages like C, C++, Java, Python, and C#. I also ventured into web ' +
                    'development contests, working with technologies such as PHP, Laravel, Python Django, JavaScript, ' +
                    'jQuery, HTML5, and CSS3, albeit at a basic level. Additionally, I actively contributed to in-school' +
                    ' projects involving website development. These experiences ignited my passion for technology ' +
                    'and software engineering, setting the stage for my future pursuits in the field.'},
        }
    ],
    experience: [
        {
            date: '2021 - Present',
            title: 'Software Engineer',
            subtitle: '3Screen Solutions',
            htmlField: {__html: 'In my current role, I am one of the key individuals responsible for implementing new ' +
                    'features with a strong emphasis on maintaining code quality in ReactJS and TypeScript. This role ' +
                    'includes conducting Code Reviews and collaborating closely with the development team to optimize ' +
                    'and refactor code for enhanced efficiency.\n' +
                    '<div>&nbsp;</div>I take pride in being one of the points of contact with our clients, addressing bug reports, ' +
                    'resolving live app issues, and responding to inquiries about the system and potential new feature ' +
                    'implementations. My commitment to delivering high quality extends to utilizing automation and unit ' +
                    'testing development to ensure we provide top-notch products to our customers.\n' +
                    '<div>&nbsp;</div>Currently, I am privileged to be part of a high-impact project—a leading VOD application ' +
                    'boasting over 600,000 unique monthly users (typically reaching at least 1.6 million monthly users).' +
                    ' Furthermore, I actively contribute to another internal project where I review implementations on ' +
                    'both the Backend (Node.js and TypeScript) and the Frontend (ReactJS with TypeScript), offering ' +
                    'valuable consultation on different implementations.\n' +
                    '<div>&nbsp;</div>Additionally, I play an important role within the internship development team, with my ' +
                    'primary focus on mentoring and participating in the interview process. My commitment to ' +
                    'excellence and my dedication to both technical innovation and teamwork are significant ' +
                    'drivers of my contributions to the organization.\n'},
        },
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
            date: '2021 - 2021',
            title: 'Web Application Development Internship',
            subtitle: '3Screen Solutions',
            htmlField: {__html: 'During my internship, I collaborated with a team of five to build a basic VOD web ' +
                    'app using ReactJS. My responsibilities included implementing features like the Authentication ' +
                    'System, Custom Fetching mechanisms, error boundaries, various design elements, and addressing ' +
                    'responsive design challenges. ' +
                    '<div>&nbsp;</div> I also learned about Agile methodologies, teamwork dynamics, and ' +
                    'effective communication. Additionally, I gained experience in deployment systems and CI/CD, using ' +
                    'Git and GitLab for version control, and participating in daily stand-up meetings to ensure ' +
                    'seamless team coordination. This internship provided me with a well-rounded understanding of ' +
                    'both technical and soft skills.\n'},
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