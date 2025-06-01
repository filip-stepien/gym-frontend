import { Typography, Divider } from 'antd';
import { Card } from '@/components/layout/Card';
import { ChatWindow } from './ChatWindow';
import { ChatList } from './ChatList';

const { Title } = Typography;

type ChatProps = {
    targetUserType?: 'client' | 'coach';
};

export function Chat(props: ChatProps) {
    const targetUserType = props.targetUserType ?? 'coach';
    const userTypeTitle = targetUserType === 'client' ? 'Clients' : 'Coaches';

    return (
        <Card className='p-middle h-full'>
            <Title level={3}>{userTypeTitle}</Title>
            <ChatList targetUserType={targetUserType} userTypeTitle={userTypeTitle} />
            <Divider className='mb-0' />
            <ChatWindow />
        </Card>
    );
}
