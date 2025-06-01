export type ChatMessageProps = {
    type?: 'sent' | 'received';
    content: string;
};

const receivedMessageClasses = 'self-start bg-neutral-3';
const sentMessageClasses = 'self-end bg-primary text-font-inverse';

export function ChatMessage(props: ChatMessageProps) {
    const { type, content } = props;
    const messageClasses = type === 'sent' ? sentMessageClasses : receivedMessageClasses;

    const renderMessageWithNewLines = (text: string) => {
        return text
            .split('\n')
            .filter(token => token.length > 0)
            .map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
            ));
    };

    return (
        <div className={`p-small max-w-3/4 wrap-break-word ${messageClasses}`}>
            {renderMessageWithNewLines(content)}
        </div>
    );
}
