import LogoUTCN from "@components/assets/UTCN.png";
import LogoLTC from "@components/assets/LTC.png";
import Logo3SS from "@components/assets/3SS.png";
import LogoAdapted from "@components/assets/ADAPTED.png";

export const ResumeConfig = {
    education: [
        {
            date: '2020 - 2024',
            title: 'Automation & Informatics',
            subtitle: 'Technical University of Cluj-Napoca',
            logo: LogoUTCN.src,
            previewHtmlField: {
                __html: 'During my time at the faculty, I had the opportunity to delve into a wide range of ' +
                    'courses across various disciplines. <div>&nbsp;</div> In the field of Mathematics, I took courses such as Linear ' +
                    'Algebra and Analytical Geometry, Mathematical Analysis (Differential Calculus), Mathematical ' +
                    'Analysis (Integral Calculus and Differential Equations), Special Mathematics in Engineering, and ' +
                    'Numerical Calculus. These courses played a fundamental role in shaping my understanding of complex ' +
                    'problems and honing my analytical skills, both of which are important in programming and systems theory.\n' +
                    '<div>&nbsp;</div>In Systems Engineering, I gained valuable insights into the inner workings of modern systems and ' +
                    'learned efficient methods for their analysis and control...'
            },
            htmlField: {
                __html: 'During my time at the faculty, I had the opportunity to delve into a wide range of ' +
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
                    'and technology.'
            },
        },
        {
            date: '2016 - 2020',
            title: 'Mathematics and Informatics',
            subtitle: 'Theoretical High-School Carei',
            logo: LogoLTC.src,
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
            logo: Logo3SS.src,
            previewHtmlField: {
                __html: 'In my current role, I am one of the key individuals responsible for implementing new ' +
                    'features with a strong emphasis on maintaining code quality in ReactJS and TypeScript. This role ' +
                    'includes conducting Code Reviews and collaborating closely with the development team to optimize ' +
                    'and refactor code for enhanced efficiency.\n'
            },
            htmlField: {
                __html: 'In my current role, I am one of the key individuals responsible for implementing new ' +
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
                    'drivers of my contributions to the organization.\n'
            },
        },
        {
            date: '2022 - Present',
            title: 'Deep Learning Research Student',
            subtitle: 'ADAPTED Research Group',
            logo: LogoAdapted.src,
            previewHtmlField: {
                __html: 'Together with a startup company from Canada, I am currently working to gain a deeper ' +
                    'understanding of Neural Networks, Recurrent Neural ' +
                    'Networks, Deep Learning, and Machine Learning.\n'
            },
            htmlField: {
                __html: 'Together with a startup company from Canada, I am currently working to gain a deeper ' +
                    'understanding of Neural Networks, Recurrent Neural ' +
                    'Networks, Deep Learning, and Machine Learning.\n' +
                    '<div>&nbsp;</div>' + 'My primary research direction is focused on automating global investment management strategies. ' +
                    'Specifically, I am leveraging deep learning to identify patterns in available data that are beyond ' +
                    'human capability to identify for control purposes.\n' +
                    '</br>' + 'In addition, I am actively seeking the best data to achieve maximum accuracy of the deep ' +
                    'learning algorithm. Through my research, I hope to create more efficient and accurate investment ' +
                    'management strategies that will benefit our clients.'
            },
        },
        {
            date: '2021 - 2021',
            title: 'Software Engineer Internship',
            subtitle: '3Screen Solutions',
            logo: Logo3SS.src,
            previewHtmlField: {
                __html: 'During my internship, I collaborated with a team of five to build a basic VOD web ' +
                    'app using ReactJS. My responsibilities included implementing features like the Authentication ' +
                    'System, Custom Fetching mechanisms, error boundaries, various design elements, and addressing ' +
                    'responsive design challenges. '
            },
            htmlField: {
                __html: 'During my internship, I collaborated with a team of five to build a basic VOD web ' +
                    'app using ReactJS. My responsibilities included implementing features like the Authentication ' +
                    'System, Custom Fetching mechanisms, error boundaries, various design elements, and addressing ' +
                    'responsive design challenges. ' +
                    '<div>&nbsp;</div> I also learned about Agile methodologies, teamwork dynamics, and ' +
                    'effective communication. Additionally, I gained experience in deployment systems and CI/CD, using ' +
                    'Git and GitLab for version control, and participating in daily stand-up meetings to ensure ' +
                    'seamless team coordination. This internship provided me with a well-rounded understanding of ' +
                    'both technical and soft skills.\n'
            },
        }
    ]
};