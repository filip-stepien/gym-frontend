import { Avatar } from '../Avatar';
import { Badge, Space } from 'antd';

export type ChatUserProps = {
    fullName: string;
    newMessageCount: number;
    online?: boolean;
};

export function ChatUser(props: ChatUserProps) {
    const fontWeight = props.newMessageCount ? 'font-bold' : 'font-normal';

    return (
        <Space className='flex cursor-pointer'>
            <Avatar online={props.online} />
            <span className={`text-base select-none ${fontWeight}`}>{props.fullName}</span>
            <Badge count={props.newMessageCount} />
        </Space>
    );
}
