import { useContext } from 'react';
import { ChatContext } from '@/contexts/ChatContext';

export function useChat() {
    return useContext(ChatContext);
}
