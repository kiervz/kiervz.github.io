import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
    const { innerWidth, innerHeight } = window;

    return {
        width: innerWidth,
        height: innerHeight
    };
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default useWindowDimensions