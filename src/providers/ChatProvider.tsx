import { Icon } from '@/components/Icon';
import { ChatContext } from '@/contexts/ChatContext';
import { fuzzySearch } from '@/utils/fuzzySearch';
import { useReducer } from 'react';
import type { JSX } from 'react';

export type UserListTab = 'last' | 'all';

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
    currentChatTab: ChatTab | null;
    currentListTab: string;
    openTabs: ChatTab[];
    users: ChatUser[];
    messages: ChatMessage[];
    messageContent: string;
    searchContent: string;
    emojiOpened: boolean;
};

export type ChatAction =
    | { type: 'SET_CURRENT_CHAT_TAB'; payload: string }
    | { type: 'SET_CURRENT_LIST_TAB'; payload: UserListTab }
    | { type: 'ADD_CHAT_TAB'; payload: string }
    | { type: 'REMOVE_CHAT_TAB'; payload: string }
    | { type: 'SET_USERS'; payload: ChatUser[] }
    | { type: 'SEND_MESSAGE' }
    | { type: 'SET_MESSAGE_CONTENT'; payload: string }
    | { type: 'SET_SEARCH_CONTENT'; payload: string }
    | { type: 'TOGGLE_EMOJI' };

const INITIAL_DEBUG_MESSAGES: { userId: string; messages: ChatMessage[] }[] = [
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
            },
            {
                id: 'msg-3',
                content: 'elo',
                type: 'sent'
            },
            {
                id: 'msg-4',
                content: 'elo',
                type: 'received'
            },
            {
                id: 'msg-5',
                content: 'elo',
                type: 'sent'
            },
            {
                id: 'msg-6',
                content: 'elo',
                type: 'received'
            },
            {
                id: 'msg-7',
                content: 'elo',
                type: 'sent'
            },
            {
                id: 'msg-8',
                content: 'elo',
                type: 'received'
            },
            {
                id: 'msg-9',
                content: 'elo',
                type: 'sent'
            },
            {
                id: 'msg-10',
                content: 'elo',
                type: 'received'
            }
        ]
    },
    {
        userId: 'user-2',
        messages: [
            {
                id: 'msg-23',
                content: 'hello',
                type: 'received'
            },
            {
                id: 'msg-24',
                content: 'hello',
                type: 'sent'
            }
        ]
    }
];

function GET_INITIAL_DEBUG_MESSAGES(userId?: string) {
    return INITIAL_DEBUG_MESSAGES.find(msg => msg.userId === userId)?.messages ?? [];
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
        case 'SET_CURRENT_LIST_TAB':
            return {
                ...state,
                currentListTab: action.payload,
                searchContent: '',
                users: action.payload === 'last' ? initialState.users : [] //TODO: handle populate users
            };

        case 'SET_CURRENT_CHAT_TAB':
            return {
                ...state,
                currentChatTab: getChatTab(action.payload),
                messages: GET_INITIAL_DEBUG_MESSAGES(action.payload)
            };

        case 'ADD_CHAT_TAB':
            const newTab = getChatTab(action.payload);
            return {
                ...state,
                currentChatTab: newTab,
                messages: GET_INITIAL_DEBUG_MESSAGES(action.payload),
                openTabs: chatTabExists(action.payload)
                    ? state.openTabs
                    : [...state.openTabs, newTab]
            };

        case 'REMOVE_CHAT_TAB':
            const isLastTab = state.openTabs.length === 1;
            const removedIdx = state.openTabs.findIndex(tab => tab.userId === action.payload);
            const nextTab = isLastTab ? null : (state.openTabs.at(removedIdx - 1) as ChatTab);

            return {
                ...state,
                openTabs: state.openTabs.filter(tab => tab.userId !== action.payload),
                currentChatTab: nextTab,
                messages: isLastTab ? [] : GET_INITIAL_DEBUG_MESSAGES(nextTab?.userId),
                messageContent: ''
            };

        case 'SET_USERS':
            return { ...state, users: action.payload };

        case 'SEND_MESSAGE':
            if (state.messageContent.length === 0) return state;

            const newMessage: ChatMessage = {
                id: Date.now().toString(), // TODO: proper id (uuid?)
                type: 'sent',
                content: state.messageContent
            };

            return {
                ...state,
                messageContent: '',
                messages: [...state.messages, newMessage]
            };

        case 'SET_MESSAGE_CONTENT':
            return { ...state, messageContent: action.payload };

        case 'SET_SEARCH_CONTENT':
            const users =
                action.payload === ''
                    ? initialState.users
                    : fuzzySearch(action.payload, state.users, 'fullName');
            return { ...state, searchContent: action.payload, users: users };

        case 'TOGGLE_EMOJI':
            return { ...state, emojiOpened: !state.emojiOpened };

        default:
            return state;
    }
}

const initialState: ChatState = {
    currentChatTab: null,
    currentListTab: 'last',
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
