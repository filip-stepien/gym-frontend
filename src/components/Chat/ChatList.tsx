import { Flex, Tabs, Space, TabsProps, Input } from 'antd';
import { useChat } from '@/hooks/useChat';
import { ChatUser } from './ChatUser';
import type { ChangeEventHandler } from 'react';

const { Search } = Input;

type ChatListProps = {
    targetUserType?: 'client' | 'coach';
    userTypeTitle?: 'Clients' | 'Coaches';
};

export function ChatList(props: ChatListProps) {
    const { targetUserType, userTypeTitle } = props;
    const { chat, dispatchChat } = useChat();

    const tabItems: TabsProps['items'] = [
        { key: 'last', label: 'Last Chats' },
        { key: 'all', label: `All ${userTypeTitle}` }
    ];

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = event => {
        dispatchChat({ type: 'SET_SEARCH_CONTENT', payload: event.target.value });
    };

    return (
        <Flex vertical className='flex-1 overflow-hidden'>
            <Tabs items={tabItems} className='pb-middle' />
            <Search
                placeholder={`Find ${targetUserType}...`}
                allowClear
                className='pb-small'
                onChange={handleSearchChange}
                value={chat.searchContent}
            />
            <Space direction='vertical' size={10} className='pt-small overflow-y-auto'>
                {chat.users.map(user => (
                    <ChatUser
                        key={user.id}
                        userId={user.id}
                        avatar={user.avatar}
                        fullName={user.fullName}
                        online={user.online}
                        unreadMessageCount={user.unreadMessageCount}
                    />
                ))}
            </Space>
        </Flex>
    );
}
