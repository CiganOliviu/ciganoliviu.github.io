import React, { useState, useEffect } from 'react';
import ArrowToTop from '../../assets/icons/angles-up-solid.svg';
import { ScrollToTopButton, ScrollToTopIcon } from "@components/components/ScrollTopButton/ScrollToTopButton.css";

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {isVisible && (
                <ScrollToTopButton onClick={handleScrollToTop}>
                    <ScrollToTopIcon src={ArrowToTop.src} alt={ArrowToTop.src} width={200} height={200} />
                </ScrollToTopButton>
            )}
        </div>
    );
};

export default ScrollTopButton;