import { Col, Flex } from 'antd';
import { ScheduleCalendar } from './ScheduleCalendar';
import { ScheduleList, type ScheduleListElement } from './ScheduleList';
import dayjs, { type Dayjs } from 'dayjs';
import { JSX, useCallback, useEffect, useState } from 'react';
import { useTailwindBreakpoints } from '@/hooks/useTailwindBreakpoints';

export type ScheduleDateListElement = { date: Dayjs } & ScheduleListElement;

type ScheduleViewerProps = {
    listElements?: ScheduleDateListElement[];
    actions?: JSX.Element[];
    fullscreen?: boolean;
};

export function ScheduleViewer(props: ScheduleViewerProps) {
    const { listElements, actions, fullscreen } = props;
    const [currentListElements, setCurrentListElements] = useState<ScheduleDateListElement[]>([]);
    const [calendarFullscreen, setCalendarFullscreen] = useState(fullscreen);
    const { md } = useTailwindBreakpoints();

    useEffect(() => {
        if (fullscreen && md) {
            setCalendarFullscreen(true);
        } else if (fullscreen && !md) {
            setCalendarFullscreen(false);
        }
    }, [fullscreen, md]);

    const onDateSelect = useCallback(
        (date: dayjs.Dayjs) => {
            const elementsInSelectedDate = listElements?.filter(
                e =>
                    e.date.date() === date.date() &&
                    e.date.month() === date.month() &&
                    e.date.year() === date.year()
            );

            setCurrentListElements(elementsInSelectedDate ?? []);
        },
        [listElements]
    );

    useEffect(() => {
        onDateSelect(dayjs());
    }, [onDateSelect]);

    return (
        <div
            className={
                calendarFullscreen ? 'flex flex-col' : 'md:gap-large flex flex-col lg:flex-row'
            }
        >
            <ScheduleCalendar
                onSelect={onDateSelect}
                fullscreen={calendarFullscreen}
                listElements={listElements}
                className='flex-1'
            />
            <Col className='gap-small flex flex-1 flex-col justify-between'>
                <ScheduleList listElements={currentListElements} />
                <Flex justify='flex-end' gap='small'>
                    {actions?.map((action, i) => <div key={i}>{action}</div>)}
                </Flex>
            </Col>
        </div>
    );
}
