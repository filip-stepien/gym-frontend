import { Space } from 'antd';

type SmallStatisticProps = {
    title: string;
    value: string;
};

export function SmallStatistic({ title, value }: SmallStatisticProps) {
    return (
        <Space size={4} direction='vertical'>
            <span className='font-semibold'>{title}</span>
            <span>{value}</span>
        </Space>
    );
}
