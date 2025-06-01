import { Flex } from 'antd';
import { JSX } from 'react';

type PageProps = {
    children?: JSX.Element | JSX.Element[];
    horizontal?: boolean;
    className?: string;
};

export function Page(props: PageProps) {
    const { children, horizontal, className } = props;
    return (
        <Flex vertical={!horizontal} className={`${className} gap-small lg:gap-layout`}>
            {children}
        </Flex>
    );
}
