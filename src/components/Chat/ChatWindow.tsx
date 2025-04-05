import { Tabs, Typography, Input, Flex, Space } from 'antd';
import { Icon } from '../Icon';
import { ChatMessage, ChatMessageProps } from './ChatMessage';
import type { Id } from '../../types';

const { Title } = Typography;
const { TextArea } = Input;

const initialItems = [
    { label: 'John Pork', key: '1' },
    { label: 'Bob Beef', key: '2' }
];

const messages: Id<ChatMessageProps>[] = [
    { id: 'msg-1', type: 'sent', content: 'elo' },
    { id: 'msg-2', type: 'received', content: 'elo' },
    { id: 'msg-3', type: 'sent', content: 'elo' },
    { id: 'msg-4', type: 'received', content: 'elo' },
    { id: 'msg-5', type: 'sent', content: 'elo' },
    { id: 'msg-6', type: 'sent', content: 'elo' },
    { id: 'msg-7', type: 'received', content: 'elo' },
    { id: 'msg-8', type: 'sent', content: 'elo' }
];

export function ChatWindow() {
    return (
        <Flex vertical justify='end' className='flex-1'>
            <Title level={3} className='pb-middle'>
                Chat
            </Title>
            <Tabs
                type='editable-card'
                items={initialItems}
                addIcon={<Icon icon='more' />}
                className='!m-0'
            />
            <Flex vertical className='border-divider h-70 overflow-y-scroll border-x-1'>
                {messages.map(msg => (
                    <ChatMessage key={msg.id} type={msg.type} content={msg.content} />
                ))}
            </Flex>
            <Flex align='stretch'>
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
