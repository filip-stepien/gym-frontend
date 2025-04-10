import { Empty, Flex } from 'antd';
import { ChatMessage } from './ChatMessage';
import { useChat } from '@/hooks/useChat';

export function ChatWindowContent() {
    const { chat } = useChat();
    const chatEmpty = chat.messages.length === 0;

    return (
        <Flex
            vertical
            justify={chatEmpty ? 'center' : 'end'}
            className='border-divider h-70 overflow-y-auto border-x-1'
        >
            {!chatEmpty ? (
                chat.messages.map(msg => (
                    <ChatMessage key={msg.id} type={msg.type} content={msg.content} />
                ))
            ) : (
                <Empty description='Start new chat' />
            )}
        </Flex>
    );
}
