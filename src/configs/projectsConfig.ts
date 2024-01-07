import VodBackground from "@components/assets/projects/VodBackground.png";
import BrainTumorDetection from "@components/assets/projects/BrainTumorDetection.jpg";
import DesignPatterns from "@components/assets/projects/DesignPatterns.jpg";
import CaRepair from "@components/assets/projects/CaRepair.jpeg";
import { ProjectConfigType } from "@components/utils/types";

export const ProjectsConfig: ProjectConfigType[] = [
    {
        thumbnail: BrainTumorDetection.src,
        title: 'MedCity: Brain Tumor Detection System',
        subtitle: 'An usecase driven approach',
        previewHtmlField: {
            __html: 'Brain-Tumor-Detection-System is a Proof of Concept (POC) project in the medical ' +
                'field, designed to improve the early detection of brain tumors. It analyzes brain X-ray ' +
                'images using advanced technology, providing high precision and real-time results, facilitating ' +
                'rapid and accurate diagnosis.'
        },
        htmlField: {
            __html: '',
        },
        open_link: '',
        is_in_progress: true,
        is_research_paper: false
    },
    {
        thumbnail: CaRepair.src,
        title: 'CaRepair: Car Damage Detector',
        subtitle: 'An usecase driven approach',
        previewHtmlField: {
            __html: 'My colleague and I created a powerful full-stack mobile app using Machine Learning to analyze ' +
                'car damage severity from images. The app, built with React Native and TypeScript, lets users ' +
                'upload car photos. These images are sent to a Python Django backend, where our Machine Learning ' +
                'model assesses the damage level. It\'s a user-friendly solution for quick and accurate damage ' +
                'evaluations.'
        },
        htmlField: {
            __html: 'This project represents a collaborative effort between a colleague and myself, resulting in a ' +
                'sophisticated full-stack mobile application. This innovative tool harnesses the power of Machine Learning,' +
                'to assess and categorize the severity of car damage through image analysis.' +
                'Utilizing React Native and TypeScript, the mobile interface empowers users to capture or select ' +
                'images of damaged vehicles. These images are then transmitted to a robust backend system developed ' +
                'in Python using Django. Within this backend infrastructure lies the Machine Learning model, ' +
                'intelligently evaluating the submitted images to determine the extent of car damage.' +
                'The application\'s streamlined process allows users to seamlessly obtain comprehensive ' +
                'damage severity assessments by simply uploading or capturing photos of the affected vehicles. ' +
                'This technological advancement combines practicality with sophistication, offering an invaluable' +
                ' solution for evaluating car damage efficiently and accurately.',
        },
        open_link: '',
        is_in_progress: false,
        is_research_paper: false,
    },
    {
        thumbnail: DesignPatterns.src,
        title: 'Software Design Patterns',
        subtitle: 'An usecase driven approach',
        previewHtmlField: {
            __html: 'The core goal of this project is to explore and showcase the essential design patterns, ' +
                'particularly in the context of TypeScript. Through an in-depth examination, we aim to ' +
                'illustrate how these design patterns are applied and their significance in TypeScript-based ' +
                'software development.'
        },
        htmlField: {
            __html: '',
        },
        open_link: '',
        is_in_progress: true,
        is_research_paper: false
    },
    {
        thumbnail: VodBackground.src,
        title: 'StreamSnap VOD Mobile App',
        subtitle: 'An Usecase driven approach',
        previewHtmlField: {
            __html: 'StreamSnap is a proof of concept (PoC) mobile streaming application that I\'ve developed to showcase ' +
                'the potential of a streaming platform. This project aims to provide a glimpse into the possibilities ' +
                'of creating an innovative, user-centric mobile app for accessing movies and TV shows on the go.\n'
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
                'and technology.',
        },
        open_link: '',
        is_in_progress: true,
        is_research_paper: false,
    },
];

export const PreviewProjectsConfig: ProjectConfigType[] = ProjectsConfig.slice(-4);