import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

export function useHTMLElementResizeObserver<T extends HTMLElement = HTMLDivElement>(): [
    RefObject<T | null>,
    number
] {
    const ref = useRef<T>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                const { width } = entry.contentRect;
                setWidth(width);
            }
        });

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, Math.floor(width)];
}
