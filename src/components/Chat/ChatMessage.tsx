import { Space } from 'antd';

export type ChatMessageProps = {
    type?: 'sent' | 'received';
    content: string;
};

const sentMessageClasses = 'bg-neutral-3 self-start';
const receivedMessageClasses = 'bg-primary text-font-inverse self-end';

export function ChatMessage(props: ChatMessageProps) {
    const messageClasses = props.type === 'sent' ? sentMessageClasses : receivedMessageClasses;
    return <Space className={`p-small m-small w-fit ${messageClasses}`}>{props.content}</Space>;
}
