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
            htmlField: {
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
            htmlField: {
                __html: 'I am part of the development of next-generation investment models and conduct in-depth financial research. Utilizing tools like Python, Scikit-Learn, Matplotlib, and Pandas, I process large datasets to identify valuable insights. My work centers on creating robust, data-driven models that inform investment strategies, while simplifying complex data for easy interpretation.'
            },
        },
        {
            id: 'adapted-research-utcn',
            date: '2022 - 2024',
            title: 'Machine Learning Researcher',
            subtitle: 'ADAPTED Research Group',
            thumbnail: AdaptedFintechResearch.src,
            logo: LogoAdapted.src,
            htmlField: {
                __html: 'I collaborated with the ADAPTED team and Canadian startup Alphablock on a year-long research project focused on finance, titled \'Revolutionizing Active Investing with Machine Learning.\' Throughout this project, I strengthened my skills in machine learning, data processing, and data analysis, while also delving into fundamental financial concepts for our analysis. The research process was iterative and flexible, starting from data acquisition and preprocessing, through pattern analysis, to drawing conclusions and implementing the 3N method for predictive purposes using machine learning. Our goal was to identify the most effective machine learning algorithm for maximizing returns based on the available data.'
            },
        },
        {
            id: 'software-engineer-3ss',
            date: '2021 - Present',
            title: 'Software Engineer',
            subtitle: '3Screen Solutions',
            thumbnail: Work3SS.src,
            logo: Logo3SS.src,
            htmlField: {
                __html: 'I’m an experienced ReactJS and TypeScript developer with a passion for delivering high-quality, efficient, and user-centric solutions. My focus has always been on ensuring code quality and client satisfaction, driving each project forward with a commitment to excellence.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">What I do</span>' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.3rem">Feature Development & Code Quality</span>' +
                    '<div>&nbsp;</div>' +
                    'I lead the development of new features, conduct rigorous code reviews, and collaborate closely with the team to continuously optimize and refactor our codebase. My goal is to ensure every line of code aligns with best practices, resulting in maintainable and scalable solutions.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.3rem">Client Engagement & Issue Resolution</span>' +
                    '<div>&nbsp;</div>' +
                    'As the primary point of contact for client inquiries, I handle bug reports, address live app issues, and discuss potential feature enhancements. My focus is on prompt issue resolution and clear communication to keep projects running smoothly.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.3rem">Automation & Testing</span>' +
                    '<div>&nbsp;</div>' +
                    'To ensure a reliable, high-standard product, I drive quality assurance through automation and comprehensive unit testing. This approach minimizes bugs and enhances overall efficiency, enabling faster development cycles without sacrificing quality.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.3rem">Managing High-Impact Projects</span>' +
                    '<div>&nbsp;</div>' +
                    'I’m currently overseeing a major VOD platform serving 1.6 million monthly users, where I manage release schedules, PI planning, and core issue resolution. My role involves making strategic estimations and leading planning efforts to keep the project on track.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.3rem">Full-Stack Consultation</span>' +
                    '<div>&nbsp;</div>' +
                    'With experience across both frontend and backend, I consult on and review implementations in both ReactJS and Node.js. I provide insights that help ensure quality and alignment across the stack for internal projects.' +
                    'I’m currently overseeing a major VOD platform serving 1.6 million monthly users, where I manage release schedules, PI planning, and core issue resolution. My role involves making strategic estimations and leading planning efforts to keep the project on track.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.3rem">Mentorship & Hiring</span>' +
                    '<div>&nbsp;</div>' +
                    'I actively mentor our development interns, guiding them in best practices and technical skills. I’m also involved in the hiring process, helping to build a talented team that aligns with our goals and culture.' +
                    '<div>&nbsp;</div>' +
                    '<span style="font-size: 1.8rem">Recent Career Growth</span>' +
                    '<div>&nbsp;</div>' +
                    'After starting as a part-time developer (4-6 hours/day), I transitioned to a full-time role in July 2024. Since August 2024, I’ve taken on the added responsibility of being the primary developer for our live web app, directly impacting the user experience and leading core initiatives.'
            },
        },
        {
            id: 'software-internship-3ss',
            date: 'August - September',
            title: 'Software Engineer Internship',
            subtitle: '3Screen Solutions',
            logo: Logo3SS.src,
            htmlField: {
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
        }
    ]
};
