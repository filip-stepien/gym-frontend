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
            sm: width >= 640,
            md: width >= 768,
            lg: width >= 1024,
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
