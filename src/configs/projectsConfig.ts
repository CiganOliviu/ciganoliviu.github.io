import StreamSnap from "@components/assets/projects/StreamSnap.jpg";
import BrainTumorDetection from "@components/assets/projects/BrainTumorDetection.jpg";
import DesignPatterns from "@components/assets/projects/DesignPatterns.jpg";
import CaRepair from "@components/assets/projects/CaRepair.jpeg";
import RevolutionizingActiveInvestingWithMachineLearning from
        "@components/assets/projects/RevolutionizingActiveInvestingWithMachineLearning.jpg";
import { ProjectConfigType } from "@components/utils/types";

export const ProjectsConfig: ProjectConfigType[] = [
    {
        id: 'revolutionizing-active-investing',
        thumbnail: RevolutionizingActiveInvestingWithMachineLearning.src,
        title: 'Revolutionizing Active Investing with Machine Learning',
        previewHtmlField: {
            __html: 'This paper introduces a novel machine learning method aimed at enhancing the capabilities of ' +
                'active asset managers in navigating the complexities of selection systems. These complexities ' +
                'encompass idiosyncratic factors, subpar prediction methods, and competition from entrenched ' +
                'systems like Market Capitalization (MCAP) weighted benchmarks, which have historically ' +
                'challenged the industry.'
        },
        open_link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4675439',
        is_in_progress: false,
        is_research_paper: true
    },
    {
        id: 'carepair',
        thumbnail: CaRepair.src,
        title: 'Machine Learning in Automotive Insurance Industry',
        subtitle: 'Machine Learning | Backend | Mobile iOS & Android',
        previewHtmlField: {
            __html: 'Our mobile application is specifically designed for the Automotive Insurance Industry ' +
                'to simplify the assessment of car damages. By allowing users to take photos or upload existing ' +
                'images of damaged cars, the Car Damage Classifier provides quick and accurate classifications of ' +
                'damage severity levels, streamlining the claim processing workflow for insurance agents and claim adjusters.'
        },
        htmlField: {
            __html: '<span style="font-size: 1.8rem">Our mobile application</span> is specifically designed for the Automotive Insurance Industry to simplify the assessment of car damages. By allowing users to take photos or upload existing images of damaged cars, the Car Damage Classifier provides quick and accurate classifications of damage severity levels, streamlining the claim processing workflow for insurance agents and claim adjusters.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Key Features:</span>' +
                '<div>&nbsp;</div>' +
                '<li>Advanced Image Recognition: The Car Damage Classifier utilizes advanced image recognition technology to analyze images of damaged cars and classify the severity of the damages.</li>' +
                '<li>Simple Interface: Our user-friendly interface makes it easy for insurance agents and claim adjusters to upload images and receive detailed damage classifications.</li>' +
                '<li>Three Severity Levels: Damages are categorized into three main severity levels: Minor Damage, Moderate Damage, and Severe Damage, providing clear and understandable classifications.</li>' +
                '<li>Objective Assessments: By automating the assessment process, the Car Damage Classifier ensures consistent and objective evaluations, reducing errors and discrepancies in claim settlements.</li>' +
                '<li>Efficiency and Cost-Effectiveness: With streamlined claim processing and accurate damage assessments, insurance companies can save time and resources, leading to cost savings and improved efficiency.</li>' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Benefits:</span>' +
                '<div>&nbsp;</div>' +
                '<li>Time Savings: Eliminate the need for manual assessment processes, allowing insurance agents to process claims more quickly.</li>' +
                '<li>Accuracy: Reduce errors and inconsistencies in claim settlements with objective damage assessments.</li>' +
                '<li>Transparency: Provide transparent classifications of damages, fostering trust between insurance companies and policyholders.</li>' +
                '<li>Cost-Effectiveness: Optimize repair and replacement decisions, minimizing unnecessary costs for insurance companies and policyholders alike.</li>' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">The Car Damage Classifier</span> is a valuable tool for the Automotive Insurance Industry, offering a streamlined and efficient way to assess car damages. With its advanced technology and user-friendly interface, our application simplifies the claim processing workflow, improves accuracy, and ultimately benefits insurance companies, agents, and policyholders..' +
                '<div>&nbsp;</div>'
        },
        open_link: '',
        is_in_progress: false,
        is_research_paper: false,
    },
    {
        id: 'medcity',
        thumbnail: BrainTumorDetection.src,
        title: 'Brain Tumor Analysis in Medical Industry',
        subtitle: 'Machine Learning | Backend | Web',
        previewHtmlField: {
            __html: 'Our web-based application is a breakthrough in the medical field, designed to aid doctors in the ' +
                'detection of glioma, meningioma, and pituitary tumors. By allowing doctors to upload X-ray images ' +
                'and receive rapid results, our system streamlines the diagnostic process, facilitating early detection' +
                ' and treatment of brain tumors.'
        },
        htmlField: {
            __html: '<span style="font-size: 1.8rem">Our web-based application</span> is a breakthrough in the medical field, designed to aid doctors in the detection of glioma, meningioma, and pituitary tumors. By allowing doctors to upload X-ray images and receive rapid results, our system streamlines the diagnostic process, facilitating early detection and treatment of brain tumors.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Key Features:</span>' +
                '<div>&nbsp;</div>' +
                '<li>Web-Based Accessibility: The Brain Tumor Detection System is accessible via a web browser, providing doctors with the flexibility to upload X-ray images from any internet-connected device.</li>' +
                '<li>Advanced Image Analysis: Leveraging state-of-the-art image processing algorithms, our system analyzes uploaded X-ray images to identify and classify different types of brain tumors, including glioma, meningioma, and pituitary tumors.</li>' +
                '<li>User-Friendly Interface: With an intuitive and easy-to-navigate interface, doctors can quickly upload X-ray images and receive instant results, enhancing the efficiency of the diagnostic process.</li>' +
                '<li>Multi-Tumor Detection: Our system is capable of detecting multiple types of brain tumors, allowing doctors to identify and differentiate between glioma, meningioma, and pituitary tumors with high accuracy.</li>' +
                '<li>Quick Results: By automating the tumor detection process, our system provides rapid results, enabling doctors to make timely decisions regarding patient care and treatment plans.</li>' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Benefits:</span>' +
                '<div>&nbsp;</div>' +
                '<li>Early Detection: The Brain Tumor Detection System facilitates early detection of brain tumors, enabling doctors to initiate treatment promptly and improve patient outcomes.</li>' +
                '<li>Accurate Diagnosis: With advanced image analysis algorithms, our system delivers accurate and reliable tumor classifications, reducing the risk of misdiagnosis and ensuring appropriate treatment strategies.</li>' +
                '<li>Time Savings: By streamlining the diagnostic process, our system saves valuable time for doctors, allowing them to focus on patient care and treatment.</li>' +
                '<li>Improved Patient Care: Timely and accurate tumor detection enhances patient care by enabling doctors to provide targeted treatments and interventions tailored to individual patient needs.</li>' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">The Brain Tumor Detection System</span> is a game-changer in the medical field, revolutionizing the way brain tumors are diagnosed and treated. With its web-based accessibility, advanced image analysis capabilities, and user-friendly interface, our system empowers doctors to detect and classify glioma, meningioma, and pituitary tumors with speed and accuracy. Thank you for considering the Brain Tumor Detection System for your medical diagnostic needs.' +
                '<div>&nbsp;</div>'
        },
        open_link: '',
        is_in_progress: false,
        is_research_paper: false
    },
    {
        id: 'streamsnap',
        thumbnail: StreamSnap.src,
        title: 'StreamSnap VOD Mobile App',
        subtitle: 'Backend | Mobile | Machine Learning',
        previewHtmlField: {
            __html: 'StreamSnap is a proof-of-concept (PoC) mobile streaming app designed to showcase the potential ' +
                'of a user-friendly streaming platform. The goal is to offer a sneak peek into the creation of an ' +
                'innovative, on-the-go mobile app for watching movies and TV shows. The app connects to two distinct ' +
                'backend systems service provider and an analytics platform with integrated machine learning. Additionally, ' +
                'there\'s a...'
        },
        htmlField: {
            __html: '<span style="font-size: 1.8rem">StreamSnap</span> is a proof-of-concept (PoC) mobile streaming ' +
                'app designed to showcase the potential of a user-friendly streaming platform. The goal is to offer ' +
                'a sneak peek into the creation of an innovative, on-the-go mobile app for watching movies and TV ' +
                'shows.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Key Features:</span>' +
                '<div>&nbsp;</div>' +
                '<li>Seamless Integration: StreamSnap seamlessly connects to two distinct backend systems, ensuring a smooth and uninterrupted streaming experience. The app taps into an external service provider, powered by a Django-based REST API, to host images, movies, assets, and videos. Additionally, it interfaces with a robust analytics platform, equipped with integrated machine learning, to track user activity and offer personalized recommendations.</li>' +
                '<li>Personalized Recommendations: Delve into a world of tailored entertainment with StreamSnap\'s advanced recommendation system. By analyzing user interactions and preferences, the platform delivers both general suggestions and genre-specific recommendations, enhancing the discovery of new content.</li>' +
                '<li>Customizable Configuration: Empowering content managers with flexibility, StreamSnap allows for the customization of app configurations through the external service provider. From publishing and unpublishing collections of movies to automatically filtering content based on predefined conditions, the platform offers granular control and efficiency. It\'s vital for content managers to understand specific rules in the configuration process to optimize content delivery.</li>' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Benefits:</span>' +
                '<div>&nbsp;</div>' +
                '<li>Enhanced User Experience: StreamSnap prioritizes user experience above all else, offering a seamless interface and intuitive navigation. With personalized recommendations and customizable configurations, users can discover and enjoy content tailored to their preferences effortlessly.</li>' +
                '<li>Efficient Content Management: Content managers benefit from StreamSnap\'s streamlined processes, enabling them to curate and deliver content with precision. The platform\'s configurable options empower managers to make data-driven decisions and optimize content distribution effectively.</li>' +
                '<li>Future-Proof Technology: With a foundation built on cutting-edge technology and innovative solutions, StreamSnap sets the stage for the future of mobile streaming. By embracing machine learning and adaptable configurations, the platform remains agile and ready to evolve alongside shifting industry trends.</li>' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">StreamSnap</span> offers a hassle-free solution to your streaming needs. Whether you\'re a casual viewer or a content curator, our user-friendly platform ensures that entertainment is always just a tap away.' +
                '<div>&nbsp;</div>'
        },
        open_link: '',
        is_in_progress: false,
        is_research_paper: false,
    },
    {
        id: 'software-design-patterns',
        thumbnail: DesignPatterns.src,
        title: 'Software Design Patterns',
        subtitle: 'An usecase driven approach',
        previewHtmlField: {
            __html: 'The core goal of this project is to explore and showcase the essential design patterns, ' +
                'particularly in the context of TypeScript. Through an in-depth examination, I aim to ' +
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
];
