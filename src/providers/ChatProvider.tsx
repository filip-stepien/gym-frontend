import { Icon } from '@/components/Icon';
import { ChatContext } from '@/contexts/ChatContext';
import { useReducer } from 'react';
import type { JSX } from 'react';

export type ChatTab = {
    userId: string;
    fullName: string;
};

export type ChatUser = {
    id: string;
    avatar: JSX.Element;
    fullName: string;
    unreadMessageCount: number;
    online: boolean;
};

export type ChatMessage = {
    id: string;
    type: 'sent' | 'received';
    content: string;
};

export type ChatState = {
    currentTab: ChatTab | null;
    openTabs: ChatTab[];
    users: ChatUser[];
    messages: ChatMessage[];
    messageContent: string;
    searchContent: string;
    emojiOpened: boolean;
};

export type ChatAction =
    | { type: 'SET_CURRENT_TAB'; payload: string }
    | { type: 'ADD_TAB'; payload: string }
    | { type: 'REMOVE_TAB'; payload: string }
    | { type: 'SET_USERS'; payload: ChatUser[] }
    | { type: 'ADD_MESSAGE'; payload: ChatMessage }
    | { type: 'SET_MESSAGE_CONTENT'; payload: string }
    | { type: 'SET_SEARCH_CONTENT'; payload: string }
    | { type: 'TOGGLE_EMOJI' };

const DEBUG_MESSAGES: { userId: string; messages: ChatMessage[] }[] = [
    {
        userId: 'user-1',
        messages: [
            {
                id: 'msg-1',
                content: 'elo',
                type: 'sent'
            },
            {
                id: 'msg-2',
                content: 'elo',
                type: 'received'
            }
        ]
    },
    {
        userId: 'user-2',
        messages: [
            {
                id: 'msg-3',
                content: 'hello',
                type: 'received'
            },
            {
                id: 'msg-4',
                content: 'hello',
                type: 'sent'
            }
        ]
    }
];

function GET_DEBUG_MESSAGES(userId?: string) {
    return DEBUG_MESSAGES.find(msg => msg.userId === userId)?.messages ?? [];
}

function chatReducer(state: ChatState, action: ChatAction): ChatState {
    const getChatTab = (userId: string): ChatTab => {
        return {
            userId,
            fullName: state.users.find(user => user.id === userId)?.fullName as string
        };
    };

    const chatTabExists = (userId: string): boolean => {
        return state.openTabs.some(tab => tab.userId === userId);
    };

    switch (action.type) {
        case 'SET_CURRENT_TAB':
            return {
                ...state,
                currentTab: getChatTab(action.payload),
                messages: GET_DEBUG_MESSAGES(action.payload)
            };

        case 'ADD_TAB':
            if (chatTabExists(action.payload)) return state;
            const newTab = getChatTab(action.payload);
            return {
                ...state,
                openTabs: [...state.openTabs, newTab],
                currentTab: newTab,
                messages: GET_DEBUG_MESSAGES(action.payload)
            };

        case 'REMOVE_TAB':
            const isLastTab = state.openTabs.length === 1;
            const removedIdx = state.openTabs.findIndex(tab => tab.userId === action.payload);
            const nextTab = isLastTab ? null : (state.openTabs.at(removedIdx - 1) as ChatTab);

            return {
                ...state,
                openTabs: state.openTabs.filter(tab => tab.userId !== action.payload),
                currentTab: nextTab,
                messages: isLastTab ? [] : GET_DEBUG_MESSAGES(nextTab?.userId),
                messageContent: ''
            };

        case 'SET_USERS':
            return { ...state, users: action.payload };

        case 'ADD_MESSAGE':
            return { ...state, messages: [...state.messages, action.payload] };

        case 'SET_MESSAGE_CONTENT':
            return { ...state, messageContent: action.payload };

        case 'SET_SEARCH_CONTENT':
            return { ...state, searchContent: action.payload };

        case 'TOGGLE_EMOJI':
            return { ...state, emojiOpened: !state.emojiOpened };

        default:
            return state;
    }
}

const initialState: ChatState = {
    currentTab: null,
    openTabs: [],
    users: [
        {
            id: 'user-1',
            fullName: 'Jonh Pork',
            avatar: <Icon icon='avatar' />,
            online: true,
            unreadMessageCount: 0
        },
        {
            id: 'user-2',
            fullName: 'Bob Beef',
            avatar: <Icon icon='avatar' />,
            online: false,
            unreadMessageCount: 0
        },
        {
            id: 'user-3',
            fullName: 'Tom Smith',
            avatar: <Icon icon='avatar' />,
            online: false,
            unreadMessageCount: 0
        }
    ],
    messages: [],
    messageContent: '',
    searchContent: '',
    emojiOpened: false
};

export function ChatProvider({ children }: { children: JSX.Element }) {
    const [chat, dispatchChat] = useReducer(chatReducer, initialState);
    return <ChatContext.Provider value={{ chat, dispatchChat }}>{children}</ChatContext.Provider>;
}
