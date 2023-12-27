import LogoUTCN from "@components/assets/UTCN.png";
import LogoLTC from "@components/assets/LTC.png";
import Logo3SS from "@components/assets/3SS.png";
import LogoAdapted from "@components/assets/ADAPTED.png";
import TechnicalUniversity from "@components/assets/education/technical-university-of-cluj-napoca.jpg";
import Internship3SS from "@components/assets/experience/3SS_Internship.jpg";
import Work3SS from "@components/assets/experience/3SS.jpg";
import AlphablockAdaptedResearch from "@components/assets/experience/Alphablock_Adapted_Research.png";

export const ResumeConfig = {
    education: [
        {
            date: '2020 - 2024',
            title: 'Automation & Informatics',
            subtitle: 'Technical University of Cluj-Napoca',
            thumbnail: TechnicalUniversity.src,
            logo: LogoUTCN.src,
            hasDetailPage: true,
            previewHtmlField: {
                __html: 'Throughout my academic journey, I explored an extensive array of courses spanning diverse ' +
                    'disciplines. However, it was the development of soft skills that truly stood out. Among these,' +
                    ' mastering stress management, cultivating discipline, honing a robust work ethic, and fostering ' +
                    'valuable networking capabilities were paramount. Truthfully, I\'ve found these skills to hold ' +
                    'far more significance than the academic knowledge acquired within the classroom setting. ' +
                    'During my academic years, I discovered the art of accomplishing tasks even when my inclination ' +
                    'veered towards delay or reluctance. Meeting deadlines became a skill honed through the necessity ' +
                    'of completing tasks on time, a valuable trait nurtured both in school and later as a software ' +
                    'engineer. While professional experience played a significant role, the foundations of this skill ' +
                    'were laid during my educational journey.'
            },
            htmlField: {
                __html: '<span style="font-size: 1.8rem">Throughout my academic journey,</span> I explored an extensive array of courses spanning diverse ' +
                    'disciplines. However, it was the development of soft skills that truly stood out. Among these, ' +
                    'mastering stress management, cultivating discipline, honing a robust work ethic, and fostering ' +
                    'valuable networking capabilities were paramount. Truthfully, I\'ve found these skills to hold far ' +
                    'more significance than the academic knowledge acquired within the classroom setting. During my' +
                    ' academic years, I discovered the art of accomplishing tasks even when my inclination veered ' +
                    'towards delay or reluctance. Meeting deadlines became a skill honed through the necessity of' +
                    ' completing tasks on time, a valuable trait nurtured both in school and later as a software' +
                    ' engineer. While professional experience played a significant role, the foundations of this ' +
                    'skill were laid during my educational journey. Additionally, I aim to highlight certain ' +
                    'classes that not only provided fresh perspectives but also directly correlated with the ' +
                    'nuances of software design.' +
                    '<div>&nbsp;</div><span style="font-size: 1.8rem">In the field of Mathematics,</span> I took courses such as Linear ' +
                    'Algebra and Analytical Geometry, Mathematical Analysis (Differential Calculus), Mathematical ' +
                    'Analysis (Integral Calculus and Differential Equations), Special Mathematics in Engineering, and ' +
                    'Numerical Calculus. These courses played a fundamental role in shaping my understanding of complex ' +
                    'problems and honing my analytical skills, both of which are important in programming and systems theory.\n' +
                    '<div>&nbsp;</div><span style="font-size: 1.8rem">In Systems Engineering,</span> I gained valuable insights into the inner workings of modern systems and ' +
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
                    '<div>&nbsp;</div><span style="font-size: 1.8rem">In Electronics & Engineering,</span> I explored hardware design, hardware analysis, ' +
                    'firmware development, and data transmission, broadening my knowledge of electronics and embedded systems.\n' +
                    '<div>&nbsp;</div><span style="font-size: 1.8rem">In the realm of Software Engineering,</span> my coursework covered a diverse array of topics. I delved ' +
                    'into the intricacies of the Linux Operating System, gained proficiency in programming algorithms, ' +
                    'and developed a deep understanding of Object-Oriented Programming and Design. I also delved into ' +
                    'threads management and concurrent programming, explored SQL-based databases, and honed my skills ' +
                    'in web backend and frontend development. Furthermore, I gained experience in assembly programming ' +
                    'and learned to build graphical models using Lisp and functional programming.\n' +
                    'In summary, my educational journey at the faculty provided me with a well-rounded knowledge base ' +
                    'that spans mathematics, systems engineering, electronics, and software engineering. These courses' +
                    ' not only enriched my technical expertise but also fostered critical thinking and problem-solving ' +
                    'abilities, preparing me for a wide range of challenges and opportunities in the field of engineering ' +
                    'and technology.'
            },
        },
        {
            date: '2016 - 2020',
            title: 'Mathematics and Informatics',
            subtitle: 'Theoretical High-School Carei',
            logo: LogoLTC.src,
            hasDetailPage: false,
            previewHtmlField: {
                __html: 'During high school, I began exploring coding and algorithms, applying them ' +
                    'across programming languages like C, C++, Java, Python, and C#. I also ventured into web ' +
                    'development contests, working with technologies such as PHP, Laravel, Python Django, JavaScript, ' +
                    'jQuery, HTML5, and CSS3, albeit at a basic level. Additionally, I actively contributed to in-school' +
                    ' projects involving website development. These experiences ignited my passion for technology ' +
                    'and software engineering, setting the stage for my future pursuits in the field.'
            },
            htmlField: {
                __html: 'During high school, I began exploring coding and algorithms, applying them ' +
                    'across programming languages like C, C++, Java, Python, and C#. I also ventured into web ' +
                    'development contests, working with technologies such as PHP, Laravel, Python Django, JavaScript, ' +
                    'jQuery, HTML5, and CSS3, albeit at a basic level. Additionally, I actively contributed to in-school' +
                    ' projects involving website development. These experiences ignited my passion for technology ' +
                    'and software engineering, setting the stage for my future pursuits in the field.'
            },
        }
    ],
    experience: [
        {
            date: '2021 - Present',
            title: 'Software Engineer',
            subtitle: '3Screen Solutions',
            thumbnail: Work3SS.src,
            logo: Logo3SS.src,
            hasDetailPage: true,
            previewHtmlField: {
                __html: 'In my current role, I am one of the key individuals responsible for implementing new ' +
                    'features with a strong emphasis on maintaining code quality in ReactJS and TypeScript. This role ' +
                    'includes conducting Code Reviews and collaborating closely with the development team to optimize ' +
                    'and refactor code for enhanced efficiency.\n'
            },
            htmlField: {
                __html: '<span style="font-size: 1.8rem">In my current role,</span> I am one of the key individuals responsible for implementing new features' +
                    ' with a strong emphasis on maintaining code quality in ReactJS and TypeScript. This role includes ' +
                    'conducting Code Reviews and collaborating closely with the development team to optimize and ' +
                    'refactor code for enhanced efficiency.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">I take pride in</span> being one of the points of contact with our clients, addressing bug reports, ' +
                    'resolving live app issues, and responding to inquiries about the system and potential new feature ' +
                    'implementations. My commitment to delivering high quality extends to utilizing automation and unit ' +
                    'testing development to ensure we provide top-notch products to our customers.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">Currently,</span> I am privileged to be part of a high-impact project—a leading VOD application ' +
                    'boasting over 600,000 unique monthly users (typically reaching at least 1.6 million monthly users). ' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">Furthermore,</span> I contributed to another internal project where I review implementations on both ' +
                    'the Backend (Node.js and TypeScript) and the Frontend (ReactJS with TypeScript), offering ' +
                    'valuable consultation on different implementations. The main goal and attribute of mine was to' +
                    ' help integrating two new programmers into the company, offering mentorship and sharing knowledge.n' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">Additionally,</span> I play an important role within the internship development team, with my primary' +
                    ' focus on mentoring and participating in the interview process in React Native, Web and Mobile.' +
                    '<div>&nbsp;</div>' +
                    ' My commitment to excellence and my dedication to both technical innovation and teamwork are ' +
                    'significant drivers of my contributions to the organization.'
            },
        },
        {
            date: '2022 - Present',
            title: 'Deep Learning Research Student',
            subtitle: 'ADAPTED Research Group',
            thumbnail: AlphablockAdaptedResearch.src,
            logo: LogoAdapted.src,
            hasDetailPage: true,
            previewHtmlField: {
                __html: 'Together with a startup company from Canada, I am currently working to gain a deeper ' +
                    'understanding of Neural Networks, Recurrent Neural ' +
                    'Networks, Deep Learning, and Machine Learning.\n'
            },
            htmlField: {
                __html: '<span style="font-size: 1.8rem">Collaborating with Alphablock,</span> a pioneering Canadian startup, and the esteemed research ' +
                    'group ADAPTED, I\'m deeply engaged in an innovative initiative centered around automating ' +
                    'financial instruments through the synergy of machine learning, scientific methodologies, ' +
                    'and financial best practices. ' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">My primary research focus</span> revolves around automating global ' +
                    'investment management strategies. My approach involves harnessing the power of deep ' +
                    'learning to unearth intricate data patterns that surpass human cognitive capabilities ' +
                    'for strategic control.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">Simultaneously,</span> I\'m actively engaged in sourcing the most pertinent ' +
                    'data, aiming for optimal precision in the deep learning algorithm. This involves a meticulous ' +
                    'process of data pattern comprehension, rigorous analysis, and the strategic selection of machine ' +
                    'learning algorithms and data processing methods, all aimed at achieving paramount accuracy and ' +
                    'developmental prospects. ' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">As part of the development cycle,</span> I adeptly generate statistical' +
                    ' plots, catering precisely to project requirements. My proficiency lies in a robust ' +
                    'development stack encompassing Python, Keras, Sklearn, matplotlib, pandas, numpy, and ' +
                    'other essential tools. This collective arsenal empowers me to navigate and innovate ' +
                    'within this intricate landscape of financial automation and machine learning.'
            },
        },
        {
            date: '2021 - 2021',
            title: 'Software Engineer Internship',
            subtitle: '3Screen Solutions',
            thumbnail: Internship3SS.src,
            logo: Logo3SS.src,
            hasDetailPage: false,
            previewHtmlField: {
                __html: 'During my internship, I collaborated with a team of five to build a basic VOD web ' +
                    'app using ReactJS. My responsibilities included implementing features like the Authentication ' +
                    'System, Custom Fetching mechanisms, error boundaries, various design elements, and addressing ' +
                    'responsive design challenges. '
            },
            htmlField: {
                __html: '<span style="font-size: 1.8rem">During my internship,</span> I collaborated with a team of five to build a basic VOD web ' +
                    'app using ReactJS. My responsibilities included implementing features like the Authentication ' +
                    'System, Custom Fetching mechanisms, error boundaries, various design elements, and addressing ' +
                    'responsive design challenges. ' +
                    '<div>&nbsp;</div> ' +
                    '<span style="font-size: 1.8rem">I also learned</span> about Agile methodologies, teamwork dynamics, and ' +
                    'effective communication. Additionally, I gained experience in deployment systems and CI/CD, using ' +
                    'Git and GitLab for version control, and participating in daily stand-up meetings to ensure ' +
                    'seamless team coordination. This internship provided me with a well-rounded understanding of ' +
                    'both technical and soft skills.\n'
            },
        }
    ]
};