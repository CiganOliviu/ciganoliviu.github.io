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
            __html: 'My colleague and I created a powerful full-stack mobile app using Machine Learning to analyze ' +
                'car damage severity from images. The app, built with React Native and TypeScript, lets users ' +
                'upload car photos. These images are sent to a Python Django backend, where our Machine Learning ' +
                'model assesses the damage level. It\'s a user-friendly solution for quick and accurate damage ' +
                'evaluations.'
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
        title: 'Brain Tumor Analysis in the Medical Industry',
        subtitle: 'Machine Learning | Backend | Web',
        previewHtmlField: {
            __html: 'My colleague and I collaborated on an' +
                'application focused on analyzing X-ray brain scans to detect and precisely categorize different types ' +
                'of brain tumors. This innovative system operates as a RESTful API, housing a sophisticated machine ' +
                'learning model. This model is adept at discerning the presence of a brain tumor and identifying its ' +
                'specific type, leveraging an extensive training dataset.'
        },
        htmlField: {
            __html: '<span style="font-size: 1.8rem">My colleague and I </span> collaborated on an' +
                'application focused on analyzing X-ray brain scans to detect and precisely categorize different types ' +
                'of brain tumors. This innovative system operates as a RESTful API, housing a sophisticated machine ' +
                'learning model. This model is adept at discerning the presence of a brain tumor and identifying its ' +
                'specific type, leveraging an extensive training dataset.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Utilizing</span> the SVM SVC algorithm from the Kaggle ' +
                'library, our model was crafted in Python, harnessing the power of pandas and numpy for seamless ' +
                'data manipulation and sklearn for the intricate machine learning procedures. With a robust training ' +
                'set of over 2,800 diverse brain X-ray images captured from various angles, our model has been ' +
                'fine-tuned for accuracy and reliability.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">The integration</span> of this high-performing model into' +
                ' the backend RESTful API, developed using Django in Python, was a strategic decision. ' +
                'Python\'s compatibility with the machine learning model facilitated a smooth integration ' +
                'process. The model itself is stored as a .pkl file, optimizing response times by caching ' +
                'processing in memory, ensuring rapid and efficient outcomes.'
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
                '<span style="font-size: 1.8rem">The app connects</span> to two distinct backend systems: an external ' +
                'service provider and an analytics platform with integrated machine learning. Additionally, ' +
                'there\'s a Stream Service Provider developed in React.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Let\'s break it down</span> The external service provider hosts ' +
                'images, movies, assets, and videos through a simple Django-based REST API. This API supplies' +
                ' core information for the React Native-based hybrid mobile app.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Moving on to the analytics platform,</span>  it tracks user activity ' +
                'within the app, noting interactions like button clicks, logins, logouts, and asset clicks.' +
                ' The platform also houses a recommendation system offering both general suggestions and ' +
                'genre-specific recommendations.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Through the external service provider</span> the app\'s configuration ' +
                'can be customized based on logic. It allows actions like publishing or unpublishing collections of \n' +
                'movies and automatically filtering content based on conditions chosen by the content manager. There \n' +
                'are specific rules in the configuration process, which are important for the content manager to understand.'
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

export const PreviewProjectsConfig: ProjectConfigType[] = ProjectsConfig.slice(0, 3);