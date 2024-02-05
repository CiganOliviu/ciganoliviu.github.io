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
        title: 'CaRepair: Car Damage Detector',
        subtitle: 'Machine Learning | Backend | Mobile',
        previewHtmlField: {
            __html: 'My colleague and I created a powerful full-stack mobile app using Machine Learning to analyze ' +
                'car damage severity from images. The app, built with React Native and TypeScript, lets users ' +
                'upload car photos. These images are sent to a Python Django backend, where our Machine Learning ' +
                'model assesses the damage level. It\'s a user-friendly solution for quick and accurate damage ' +
                'evaluations.'
        },
        htmlField: {
            __html: '<span style="font-size: 1.8rem">My colleague and I </span>collaborated on an application designed to assess the severity of car damage ' +
                'via image analysis. This application operates as a RESTful API, housing a machine learning model ' +
                'capable of discerning damage severity based on a comprehensive training dataset.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Employing</span> the SVM SVC algorithm from the Kaggle library, the model is written in Python using pandas' +
                ' and numpy for data manipulation, and sklearn for the machine learning process. This model has been ' +
                'trained on an extensive dataset of over 1,200 images encompassing various car models, angles, and ' +
                'degrees of damage.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Integrating</span> this model into the backend RESTful API, developed in Python using Django, was a ' +
                'strategic choice owing to the seamless compatibility between Python and the machine learning ' +
                'model. The model is stored as a .pkl file, enabling rapid responses by caching the processing' +
                ' in memory, thereby optimizing speed.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">The backend system</span> features diverse filtering methods accessible through dispatchers (query strings) ' +
                'and incorporates a robust authentication system.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">On the frontend side,</span> React Native was employed for its adaptability to mobile applications.' +
                ' Users can either upload images from their device\'s gallery or capture live pictures. ' +
                'Upon submitting the image via a form, the application swiftly provides a classification ' +
                'of the car\'s damage severity.',
        },
        open_link: '',
        is_in_progress: false,
        is_research_paper: false,
    },
    {
        id: 'medcity',
        thumbnail: BrainTumorDetection.src,
        title: 'MedCity: Brain Tumor Detection System',
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