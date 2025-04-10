import { Avatar } from '@/components/Avatar';
import { Badge, Space } from 'antd';
import { useChat } from '@/hooks/useChat';
import type { JSX } from 'react';

type ChatUserProps = {
    userId: string;
    avatar: JSX.Element;
    fullName: string;
    unreadMessageCount: number;
    online?: boolean;
};

export function ChatUser(props: ChatUserProps) {
    const { userId, fullName, unreadMessageCount, online } = props;
    const { dispatchChat } = useChat();

    const fontWeight = props.unreadMessageCount ? 'font-bold' : 'font-normal';

    const handleClick = () => {
        dispatchChat({ type: 'ADD_TAB', payload: userId });
    };

    return (
        <Space className='flex cursor-pointer' onClick={handleClick}>
            <Avatar online={online} />
            <span className={`text-base select-none ${fontWeight}`}>{fullName}</span>
            <Badge count={unreadMessageCount} />
        </Space>
    );
}
