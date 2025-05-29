import { Typography, Space } from 'antd';
import { Avatar } from '@/components/Avatar';
import { useUser } from '@/hooks/useUser';

const { Title } = Typography;

export function UserBadge() {
    const { user } = useUser();
    const firstName = user?.firstName || 'Default';
    const lastName = user?.lastName || 'User';

    return (
        <Space align='center' size='middle' className='bg-card pl-middle shadow-card select-none'>
            <Title level={5}>{firstName + ' ' + lastName}</Title>
            <Avatar />
        </Space>
    );
}
