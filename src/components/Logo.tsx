import logoUrl from '/images/logo.png';
import type { CSSProperties } from 'react';

type LogoProps = {
    style?: CSSProperties;
    className?: string;
};

export function Logo(props: LogoProps) {
    return <img src={logoUrl} alt='Logo' className={props.className} style={props.style} />;
}
