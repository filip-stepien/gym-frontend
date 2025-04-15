import { Badge, BadgeProps, Calendar, CalendarProps, Card, Popover } from 'antd';
import { Dayjs } from 'dayjs';

const getListData = (value: Dayjs) => {
    let listData: { type: string; content: string }[] = []; // Specify the type of listData
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', content: 'Test.' },
                { type: 'success', content: 'Test.' }
            ];
            break;
        case 10:
            listData = [
                { type: 'warning', content: 'Test.' },
                { type: 'success', content: 'Test.' },
                { type: 'error', content: 'Test.' }
            ];
            break;
        default:
    }
    return listData || [];
};

const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
        <div className='notes-month'>
            <section>{num}</section>
            <span>Backlog number</span>
        </div>
    ) : null;
};

const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
        <ul className='events'>
            {listData.map(item => (
                <li key={item.content}>
                    <Popover
                        content={<span>Szczegóły: {item.content}</span>}
                        title='Wydarzenie'
                        placement='top'
                    >
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </Popover>
                </li>
            ))}
        </ul>
    );
};

const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
};

export function CalendarCard() {
    return (
        <Card>
            <Calendar cellRender={cellRender} />
        </Card>
    );
}
