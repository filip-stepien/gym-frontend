import { Flex, Progress } from 'antd';

type StatusBarProps = {
    title: string;
    value: string;
    percent: number;
};

export function StatusBar({ title, value, percent }: StatusBarProps) {
    return (
        <Flex vertical>
            <span>{title}</span>
            <Flex align='center' className='gap-middle text-font-secondary'>
                <Progress showInfo={false} percent={percent} />
                <span className='w-30'>{value}</span>
            </Flex>
        </Flex>
    );
}
