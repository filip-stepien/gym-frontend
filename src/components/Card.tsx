import { Flex } from 'antd';
import { JSX } from 'react';

type CardProps = {
    children?: JSX.Element | JSX.Element[];
    className?: string;
};

/**
 * Card with flex, spacing and shadow applied.
 * Use it when you create a new page panel to preserve consistent spacing.
 */
export function Card(props: CardProps) {
    return (
        <Flex vertical className={`${props.className} p-large gap-small bg-card shadow-card`}>
            {props.children}
        </Flex>
    );
}
