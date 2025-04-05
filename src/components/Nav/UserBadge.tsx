import { Typography, Space } from 'antd';
import { Avatar } from '../Avatar';

const { Title } = Typography;

export function UserBadge() {
    return (
        <Space align='center' size='middle' className='bg-card pl-middle shadow-card select-none'>
            <Title level={5}>John Pork</Title>
            <Avatar />
        </Space>
    );
}
