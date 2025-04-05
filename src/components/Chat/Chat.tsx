import { Typography, Divider } from 'antd';
import { Card } from '../Card';
import { ChatWindow } from './ChatWindow';
import { ChatHistory } from './ChatHistory';

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
            <ChatHistory targetUserType={targetUserType} userTypeTitle={userTypeTitle} />
            <Divider className='mb-0' />
            <ChatWindow />
        </Card>
    );
}
