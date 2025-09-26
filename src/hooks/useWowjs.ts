// hooks/useWowjs.ts
import { useEffect } from 'react';
import { WOW } from 'wowjs';

export const useWowjs = () => {
    useEffect(() => {
        // Delay initialization to ensure DOM is ready
        const initializeWow = () => {
            try {
                // Check if we're in a browser environment
                if (typeof window === 'undefined') return;

                const wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: true,
                    live: true,
                    callback: function (box: HTMLElement) {
                        // Safe callback
                        console.log('WOW.js animating:', box);
                    },
                    scrollContainer: null,
                    resetAnimation: true,
                });

                // Add error handling for WOW.js initialization
                wow.init();

                return wow;
            } catch (error) {
                console.error('WOW.js initialization error:', error);
                return null;
            }
        };

        // Initialize with a small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            initializeWow();
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, []);
};