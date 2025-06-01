import { Space, Typography } from 'antd';
import { Icon } from './Icon';

const { Title } = Typography;

type CardTitleProps = {
    title: string;
    icon: string;
    className?: string;
};

export function CardTitle(props: CardTitleProps) {
    return (
        <Space className={props.className}>
            <Icon icon={props.icon} />
            <Title level={4}>{props.title}</Title>
        </Space>
    );
}
