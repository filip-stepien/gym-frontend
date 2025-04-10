import { Tabs, Typography, Input, Flex, Space } from 'antd';
import { Icon } from '@/components/Icon';
import { ChatWindowContent } from './ChatWindowContent';
import { useChat } from '@/hooks/useChat';
import type { TabsProps } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

export function ChatWindow() {
    const { chat, dispatchChat } = useChat();

    const tabItems = chat.openTabs.map(user => ({
        key: user.userId,
        label: user.fullName
    }));

    const handleTabClose: TabsProps['onEdit'] = userId => {
        dispatchChat({ type: 'REMOVE_TAB', payload: userId as string });
    };

    const handleTabClick: TabsProps['onTabClick'] = userId => {
        dispatchChat({ type: 'SET_CURRENT_TAB', payload: userId });
    };

    return (
        <Flex vertical justify='end' className='flex-1'>
            <Title level={3} className='pb-middle'>
                Chat
            </Title>
            <Tabs
                type='editable-card'
                items={tabItems}
                hideAdd
                className='!m-0'
                activeKey={chat.currentTab?.userId}
                onTabClick={handleTabClick}
                onEdit={handleTabClose}
            />
            <ChatWindowContent />
            <Flex
                align='stretch'
                className={chat.openTabs.length == 0 ? 'pointer-events-none' : ''}
            >
                <TextArea
                    placeholder='Aa'
                    autoSize={{ minRows: 1, maxRows: 4 }}
                    className='bg-neutral-2'
                />
                <Space className='px-small border-divider border-r-1 border-b-1'>
                    <Icon
                        icon='emoji'
                        className='cursor-pointer text-lg'
                        style={{ color: 'rgba(0, 0, 0, 0.45)' }}
                    />
                    <Icon
                        icon='send'
                        className='cursor-pointer text-lg'
                        style={{ color: '#1890ff' }}
                    />
                </Space>
            </Flex>
        </Flex>
    );
}
