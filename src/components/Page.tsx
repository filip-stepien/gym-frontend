import { Flex } from 'antd';
import { JSX } from 'react';

type PageProps = {
    children?: JSX.Element | JSX.Element[];
    className?: string;
};

export function Page(props: PageProps) {
    return (
        <Flex vertical className={`${props.className} gap-small lg:gap-layout`}>
            {props.children}
        </Flex>
    );
}
