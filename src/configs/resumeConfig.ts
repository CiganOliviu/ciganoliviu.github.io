import LogoUTCN from "@components/assets/resume/UTCN.png";
import LogoLTC from "@components/assets/resume/LTC.png";
import Logo3SS from "@components/assets/resume/3SS.png";
import LogoAdapted from "@components/assets/resume/ADAPTED.png";
import LogoAlphablock from "@components/assets/resume/Alphablock.png";
import TechnicalUniversity from "@components/assets/education/technical-university-of-cluj-napoca.jpg";
import Work3SS from "@components/assets/experience/3SS.jpg";
import AdaptedFintechResearch from "@components/assets/experience/Adapted_Fintech_Research.jpg";
import WorkAlphablock from "@components/assets/experience/Alphablock.jpg";

import { ResumeConfigType } from "@components/utils/types";

export const ResumeConfig: ResumeConfigType = {
    education: [
        {
            id: 'automation-informatics-utcn',
            date: '2020 - 2024',
            title: 'Automation & Applied Informatics',
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
                    'were laid during my educational journey...'
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
            id: 'math-informatics-ltc',
            date: '2016 - 2020',
            title: 'Mathematics and Informatics',
            subtitle: 'Theoretical High-School Carei',
            logo: LogoLTC.src,
            hasDetailPage: false,
            previewHtmlField: {
                __html: 'During high school, I delved into the world of coding and algorithms, immersing myself ' +
                    'in languages like C, C++, Java, Python, and C#. I was eager to explore every aspect of ' +
                    'programming – from web development to mobile apps and even a bit of machine learning. ' +
                    'Books like "Clean Code," "Clean Architecture," "Refactoring," and "Implementation Patterns" ' +
                    'were my go-to resources, although they felt pretty advanced back then. Still, they fundamentally ' +
                    'shaped how I approached software engineering, teaching me the mindset and behavior of a proficient ' +
                    'software engineer.' +
                    '<div>&nbsp;</div>' +
                    'I spent a good chunk of time participating in web development contests, ' +
                    'working with PHP, Laravel, Python Django, JavaScript, jQuery, HTML5, and CSS3. I was also ' +
                    'actively involved in school projects centered around website development. These experiences ' +
                    'sparked a deep passion for technology and software engineering within me, paving the way ' +
                    'for my future pursuits in the field.'
            },
            htmlField: {
                __html: ''
            },
        }
    ],
    experience: [
        {
            id: 'data-scientist-alphablock',
            date: '2024 - Present',
            title: 'Data Scientist',
            subtitle: 'Alphablock Technologies',
            thumbnail: WorkAlphablock.src,
            logo: LogoAlphablock.src,
            hasDetailPage: false,
            previewHtmlField: {
                __html: 'I am part of the development of next-generation investment models and conduct in-depth financial research. Utilizing tools like Python, Scikit-Learn, Matplotlib, and Pandas, I process large datasets to identify valuable insights. My work centers on creating robust, data-driven models that inform investment strategies, while simplifying complex data for easy interpretation.'
            },
            htmlField: {
                __html: ''
            },
        },
        {
            id: 'adapted-research-utcn',
            date: '2022 - 2024',
            title: 'Machine Learning Researcher',
            subtitle: 'ADAPTED Research Group',
            thumbnail: AdaptedFintechResearch.src,
            logo: LogoAdapted.src,
            hasDetailPage: false,
            previewHtmlField: {
                __html: 'I collaborated with the ADAPTED team and Canadian startup Alphablock on a year-long research project focused on finance, titled \'Revolutionizing Active Investing with Machine Learning.\' Throughout this project, I strengthened my skills in machine learning, data processing, and data analysis, while also delving into fundamental financial concepts for our analysis. The research process was iterative and flexible, starting from data acquisition and preprocessing, through pattern analysis, to drawing conclusions and implementing the 3N method for predictive purposes using machine learning. Our goal was to identify the most effective machine learning algorithm for maximizing returns based on the available data.'
            },
            htmlField: {
                __html: ''
            },
        },
        {
            id: 'software-engineer-3ss',
            date: '2021 - Present',
            title: 'Software Engineer',
            subtitle: '3Screen Solutions',
            thumbnail: Work3SS.src,
            logo: Logo3SS.src,
            hasDetailPage: true,
            previewHtmlField: {
                __html: 'In my current position, I\'m deeply involved in enhancing, implementing, and maintaining ' +
                    'features linked to Data Analytics and User Journey Tracking. I take designs from Figma and turn ' +
                    'them into functional components, collaborating closely with our design crew. Managing data, ' +
                    'integrating third-party tools for ads, image rendering, and tying everything together with ' +
                    'backend systems is all part of the gig...'
            },
            htmlField: {
                __html: '<span style="font-size: 1.8rem">In my current position,</span> I\'m deeply involved in enhancing, implementing, and maintaining ' +
                    'features linked to Data Analytics and User Journey Tracking. I take designs from Figma and turn ' +
                    'them into functional components, collaborating closely with our design crew. Managing data, ' +
                    'integrating third-party tools for ads, image rendering, and tying everything together with ' +
                    'backend systems is all part of the gig. My main focus is on elevating the ReactJS and ' +
                    'TypeScript code quality while adding new functionalities.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">I\'m the go-to</span> person for code ' +
                    'reviews and working hand in hand with the team to refine and optimize code for better ' +
                    'performance.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">When it comes to client interactions,</span> I handle bug reports, live app issues, ' +
                    'and queries about our system and potential new features. Guaranteeing top-notch products ' +
                    'involves diving into automation and rigorous unit testing.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">Currently, I\'m deeply involved</span> ' +
                    'in a major project—a leading VOD application with a whopping 600,000+ unique monthly users, ' +
                    'often hitting 1.6 million' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">I also played</span> a pivotal role in an internal project, offering ' +
                    'insights on Backend (using Node.js and TypeScript) and Frontend (ReactJS with TypeScript) ' +
                    'implementations. My focus was on helping two new programmers integrate smoothly into the ' +
                    'team by mentoring and sharing my knowledge.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">Furthermore,</span> I play a crucial role in our internship ' +
                    'development team, specifically focusing on mentoring and contributing to the interview process ' +
                    'for React Native, Web, and Mobile.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">My drive</span> for excellence and strong teamwork ethic form the ' +
                    'core of my contributions to the organization.'
            },
        },
        {
            id: 'software-internship-3ss',
            date: '2021 - 2021',
            title: 'Software Engineer Internship',
            subtitle: '3Screen Solutions',
            logo: Logo3SS.src,
            hasDetailPage: false,
            previewHtmlField: {
                __html: 'During my internship, I collaborated with a team of five to build a basic VOD web ' +
                    'app using ReactJS. My responsibilities included implementing features like the Authentication ' +
                    'System, Custom Fetching mechanisms, error boundaries, various design elements, and addressing ' +
                    'responsive design challenges. I also learned about Agile methodologies, teamwork dynamics, and ' +
                    'effective communication. Additionally, I gained experience in deployment systems and CI/CD, using ' +
                    'Git and GitLab for version control, and participating in daily stand-up meetings to ensure ' +
                    'seamless team coordination.' +
                    '<div>&nbsp;</div>' +
                    'That internship gave me a solid mix of tech skills and the softer side of things. It went so ' +
                    'well that I landed a Software Engineer job afterward, and I\'ve been working in the industry ever since!'
            },
            htmlField: {
                __html: ''
            },
        }
    ]
};
