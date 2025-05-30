import { Typography, Space } from 'antd';
import { Avatar } from '@/components/Avatar';
import { useUser } from '@/hooks/useUser';

const { Title } = Typography;

type UserBadgeProps = {
    className?: string;
};

export function UserBadge({ className }: UserBadgeProps) {
    const { user } = useUser();
    const firstName = user?.firstName || 'Default';
    const lastName = user?.lastName || 'User';

    return (
        <Space
            align='center'
            size='middle'
            className={`bg-card pl-middle shadow-card select-none ${className}`}
        >
            <Title level={5}>{firstName + ' ' + lastName}</Title>
            <Avatar />
        </Space>
    );
}
