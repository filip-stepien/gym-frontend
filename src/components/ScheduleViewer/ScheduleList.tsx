import { List } from 'antd';
import { JSX } from 'react';

export type ScheduleListElement = {
    title?: string;
    description?: string;
    avatar?: JSX.Element;
    action?: JSX.Element;
};

type ScheduleListProps = {
    listElements?: ScheduleListElement[];
};

export function ScheduleList({ listElements }: ScheduleListProps) {
    return (
        <List
            className='max-h-70 overflow-auto'
            itemLayout='horizontal'
            dataSource={listElements}
            renderItem={item => (
                <List.Item actions={[item.action]}>
                    <List.Item.Meta
                        avatar={item.avatar}
                        title={item.title}
                        description={item.description}
                    />
                </List.Item>
            )}
        />
    );
}
