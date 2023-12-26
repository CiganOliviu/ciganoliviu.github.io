import VodBackground from "@components/assets/VodBackground.png";
import SignalProcessing from "@components/assets/SignalProcessing.jpg";
import BrainTumorDetection from "@components/assets/BrainTumorDetection.jpg";

export const ProjectsConfig = [
    {
        thumbnail: VodBackground.src,
        title: 'StreamSnap VOD Mobile App',
        content: 'StreamSnap is a proof of concept (PoC) mobile streaming application that I\'ve developed to showcase ' +
            'the potential of a streaming platform. This project aims to provide a glimpse into the possibilities ' +
            'of creating an innovative, user-centric mobile app for accessing movies and TV shows on the go.\n',
        open_link: '',
        is_in_progress: true,
    },
    {
        thumbnail: SignalProcessing.src,
        title: 'Brushless DC electric motor Analysis',
        content: 'This project is dedicated to achieving a comprehensive understanding of BLDC electric motors, ' +
            'with the overarching goal of optimizing their efficiency and effectiveness across a broad range of ' +
            'industries.',
        open_link: 'https://github.com/CiganOliviu/brushless-DC-electric-motor-identification',
        is_in_progress: false,
    },
    {
        thumbnail: BrainTumorDetection.src,
        title: 'MedCity: Brain Tumor Detection System',
        content: 'Brain-Tumor-Detection-System is a Proof of Concept (POC) project in the ' +
            'medical field, designed to improve the early detection of brain tumors. It analyzes brain X-ray ' +
            'images using advanced technology, providing high precision and real-time results, facilitating ' +
            'rapid and accurate diagnosis.',
        open_link: 'https://github.com/CiganOliviu/brain-tumor-detection',
        is_in_progress: false,
    },
];