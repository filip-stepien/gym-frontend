import { Flex, Tabs, Space, Input, TabsProps } from 'antd';
import { useChat } from '@/hooks/useChat';
import { ChatUser } from './ChatUser';
import type { ChangeEventHandler } from 'react';
import type { UserListTab } from '@/providers/ChatProvider';

const { Search } = Input;

type ChatListProps = {
    targetUserType?: 'client' | 'coach';
    userTypeTitle?: 'Clients' | 'Coaches';
};

type TabItem = {
    key: UserListTab;
    label: string;
};

export function ChatList(props: ChatListProps) {
    const { targetUserType, userTypeTitle } = props;
    const { chat, dispatchChat } = useChat();

    const tabItems: TabItem[] = [
        { key: 'last', label: 'Last Chats' },
        { key: 'all', label: `All ${userTypeTitle}` }
    ];

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = event => {
        dispatchChat({ type: 'SET_SEARCH_CONTENT', payload: event.target.value });
    };

    const handleTabChange: TabsProps['onTabClick'] = key => {
        dispatchChat({ type: 'SET_CURRENT_LIST_TAB', payload: key as UserListTab });
    };

    return (
        <Flex vertical className='flex-1 overflow-hidden'>
            <Tabs
                items={tabItems}
                className='pb-middle'
                onTabClick={handleTabChange}
                activeKey={chat.currentListTab}
            />
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
