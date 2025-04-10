import { Empty, Flex } from 'antd';
import { ChatMessage } from './ChatMessage';
import { useChat } from '@/hooks/useChat';
import { useRef, useEffect } from 'react';

export function ChatWindowContent() {
    const { chat } = useChat();
    const scrollRef = useRef<HTMLElement | null>(null);
    const chatEmpty = chat.messages.length === 0;

    const scrollToBottom = () => {
        const container = scrollRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chat.messages]);

    return (
        <Flex
            ref={scrollRef}
            vertical
            justify={chatEmpty ? 'center' : 'initial'}
            className={`${!chatEmpty && 'overflow-y-scroll'} 'border-divider p-small gap-small border-x-1' h-70`}
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
