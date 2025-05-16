import dayjs from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';
import { CalendarProps, HeaderRender } from 'antd/es/calendar/generateCalendar';
import { Calendar, Col, Flex, Row, Select, Tag } from 'antd';
import type { Dayjs } from 'dayjs';
import type { ScheduleDateListElement } from './ScheduleViewer';

dayjs.extend(dayLocaleData);

type EventCalendarProps = {
    onSelect?: (date: Dayjs) => void;
    className?: string;
    fullscreen?: boolean;
    listElements?: ScheduleDateListElement[];
};

function getMonthOptions(value: Dayjs) {
    const start = 0;
    const end = 12;
    const monthOptions = [];

    let current = value.clone();
    const localeData = value.localeData();
    const months = [];

    for (let i = 0; i < 12; i++) {
        current = current.month(i);
        months.push(localeData.monthsShort(current));
    }

    for (let i = start; i < end; i++) {
        monthOptions.push(
            <Select.Option key={i} value={i} className='month-item'>
                {months[i]}
            </Select.Option>
        );
    }

    return monthOptions;
}

function getYearOptions(value: Dayjs) {
    const year = value.year();
    const yearOptions = [];

    for (let i = year - 10; i < year + 10; i += 1) {
        yearOptions.push(
            <Select.Option key={i} value={i} className='year-item'>
                {i}
            </Select.Option>
        );
    }

    return yearOptions;
}

const renderHeader: HeaderRender<Dayjs> = ({ value, onChange }) => {
    const monthOptions = getMonthOptions(value);
    const yearOptions = getYearOptions(value);
    const month = value.month();
    const year = value.year();

    return (
        <div className='p-small'>
            <Row className='gap-small flex'>
                <Col>
                    <Select
                        size='small'
                        popupMatchSelectWidth={false}
                        className='my-year-select'
                        value={year}
                        onChange={newYear => onChange(value.clone().year(newYear))}
                    >
                        {yearOptions}
                    </Select>
                </Col>
                <Col>
                    <Select
                        size='small'
                        popupMatchSelectWidth={false}
                        value={month}
                        onChange={newMonth => onChange(value.clone().month(newMonth))}
                    >
                        {monthOptions}
                    </Select>
                </Col>
            </Row>
        </div>
    );
};

export function ScheduleCalendar(props: EventCalendarProps) {
    const { onSelect, className, fullscreen, listElements } = props;

    const cellRender: CalendarProps<Dayjs>['cellRender'] = date => {
        return (
            <Flex vertical className='events gap-1'>
                {listElements
                    ?.filter(
                        e =>
                            e.date.date() === date.date() &&
                            e.date.month() === date.month() &&
                            e.date.year() === date.year()
                    )
                    .map(e => <Tag color='geekblue'>{e.title}</Tag>)}
            </Flex>
        );
    };

    return (
        <Calendar
            className={'min-w-100 ' + className}
            fullscreen={fullscreen ?? false}
            cellRender={fullscreen ? cellRender : undefined}
            headerRender={renderHeader}
            onSelect={onSelect}
        />
    );
}
