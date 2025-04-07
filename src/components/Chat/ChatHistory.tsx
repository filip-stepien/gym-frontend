import { Flex, Tabs, Space, TabsProps, Input } from 'antd';
import { ChatUser, ChatUserProps } from './ChatUser';
import { Id } from '../../types';

const { Search } = Input;

type ChatHistoryProps = {
    targetUserType?: 'client' | 'coach';
    userTypeTitle?: 'Clients' | 'Coaches';
};

const chatUsers: Id<ChatUserProps>[] = [
    {
        id: 'chat-user-1',
        fullName: 'John Pork',
        online: true,
        newMessageCount: 3
    },
    {
        id: 'chat-user-2',
        fullName: 'John Pork',
        online: true,
        newMessageCount: 0
    },
    {
        id: 'chat-user-3',
        fullName: 'John Pork',
        online: true,
        newMessageCount: 4
    },
    {
        id: 'chat-user-4',
        fullName: 'John Pork',
        online: false,
        newMessageCount: 0
    },
    {
        id: 'chat-user-5',
        fullName: 'John Pork',
        online: true,
        newMessageCount: 0
    },
    {
        id: 'chat-user-6',
        fullName: 'John Pork',
        online: false,
        newMessageCount: 0
    },
    {
        id: 'chat-user-7',
        fullName: 'John Pork',
        online: false,
        newMessageCount: 0
    },
    {
        id: 'chat-user-8',
        fullName: 'John Pork',
        online: false,
        newMessageCount: 0
    },
    {
        id: 'chat-user-9',
        fullName: 'John Pork',
        online: false,
        newMessageCount: 0
    }
];

export function ChatHistory(props: ChatHistoryProps) {
    const tabItems: TabsProps['items'] = [
        { key: 'last', label: 'Last Chats' },
        { key: 'all', label: `All ${props.userTypeTitle}` }
    ];

    return (
        <Flex vertical className='flex-1 overflow-hidden'>
            <Tabs defaultActiveKey='1' items={tabItems} className='pb-middle' />
            <Search
                placeholder={`Find ${props.targetUserType}...`}
                allowClear
                className='pb-small'
            />
            <Space direction='vertical' size={10} className='pt-small overflow-y-auto'>
                {chatUsers
                    .sort((a, b) => b.newMessageCount - a.newMessageCount)
                    .map(user => (
                        <ChatUser
                            key={user.id}
                            fullName={user.fullName}
                            online={user.online}
                            newMessageCount={user.newMessageCount}
                        />
                    ))}
            </Space>
        </Flex>
    );
}
