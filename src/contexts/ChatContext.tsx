import { createContext } from 'react';
import type { ChatAction, ChatState } from '@/providers/ChatProvider';
import type { Dispatch } from 'react';

type ChatContextContent = {
    chat: ChatState;
    dispatchChat: Dispatch<ChatAction>;
};

export const ChatContext = createContext<ChatContextContent>({
    chat: {
        currentTab: null,
        openTabs: [],
        users: [],
        messages: [],
        messageContent: '',
        searchContent: '',
        emojiOpened: false
    },
    dispatchChat: () => {
        throw new Error('Not implemented.');
    }
});
