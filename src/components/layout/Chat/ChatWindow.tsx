import { Tabs, Typography, Input, Flex, Space } from 'antd';
import { Icon } from '@/components/common/Icon';
import { ChatWindowContent } from './ChatWindowContent';
import { useChat } from '@/hooks/useChat';
import type { TabsProps } from 'antd';
import type { ChangeEventHandler, MouseEventHandler, KeyboardEventHandler } from 'react';

const { Title } = Typography;
const { TextArea } = Input;

export function ChatWindow() {
    const { chat, dispatchChat } = useChat();

    const tabItems = chat.openTabs.map(user => ({
        key: user.userId,
        label: user.fullName
    }));

    const handleTabClose: TabsProps['onEdit'] = userId => {
        dispatchChat({ type: 'REMOVE_CHAT_TAB', payload: userId as string });
    };

    const handleTabClick: TabsProps['onTabClick'] = userId => {
        dispatchChat({ type: 'SET_CURRENT_CHAT_TAB', payload: userId });
    };

    const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
        dispatchChat({ type: 'SET_MESSAGE_CONTENT', payload: event.target.value });
    };

    const handleMessageSendClick: MouseEventHandler<HTMLSpanElement> = () => {
        dispatchChat({ type: 'SEND_MESSAGE' });
    };

    const handleMessageKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = event => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            dispatchChat({ type: 'SEND_MESSAGE' });
        }
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
                activeKey={chat.currentChatTab?.userId}
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
                    value={chat.messageContent}
                    onChange={handleMessageChange}
                    onKeyDown={handleMessageKeyDown}
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
                        onClick={handleMessageSendClick}
                        style={{ color: '#1890ff' }}
                    />
                </Space>
            </Flex>
        </Flex>
    );
}
