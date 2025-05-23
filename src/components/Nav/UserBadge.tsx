import { Typography, Space } from 'antd';
import { Avatar } from '@/components/Avatar';
import { useUser } from '@/hooks/useUser';

const { Title } = Typography;

export function UserBadge() {
    const { user } = useUser();
    return (
        <Space align='center' size='middle' className='bg-card pl-middle shadow-card select-none'>
            <Title level={5}>{user?.firstName + ' ' + user?.lastName}</Title>
            <Avatar />
        </Space>
    );
}
