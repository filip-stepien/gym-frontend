import { useEffect, useState } from 'react';

type Breakpoints = {
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
};

export const useTailwindBreakpoints = (): Breakpoints => {
    const [breakpoints, setBreakpoints] = useState<Breakpoints>({
        sm: false,
        md: false,
        lg: false,
        xl: false
    });

    const updateBreakpoints = () => {
        const width = window.innerWidth;
        setBreakpoints({
            sm: width >= 640 && width < 768,
            md: width >= 768 && width < 1024,
            lg: width >= 1024 && width < 1280,
            xl: width >= 1280
        });
    };

    useEffect(() => {
        updateBreakpoints();
        window.addEventListener('resize', updateBreakpoints);
        return () => window.removeEventListener('resize', updateBreakpoints);
    }, []);

    return breakpoints;
};
