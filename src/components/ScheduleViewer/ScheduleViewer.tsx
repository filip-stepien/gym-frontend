import { Row, Col, Flex } from 'antd';
import { ScheduleCalendar } from './ScheduleCalendar';
import { ScheduleList, type ScheduleListElement } from './ScheduleList';
import dayjs, { type Dayjs } from 'dayjs';
import { JSX, useCallback, useEffect, useState } from 'react';

export type ScheduleDateListElement = { date: Dayjs } & ScheduleListElement;

type ScheduleViewerProps = {
    listElements?: ScheduleDateListElement[];
    actions?: JSX.Element[];
};

export function ScheduleViewer(props: ScheduleViewerProps) {
    const { listElements, actions } = props;
    const [currentListElements, setCurrentListElements] = useState<ScheduleDateListElement[]>([]);

    const onDateSelect = useCallback(
        (date: dayjs.Dayjs) => {
            const elementsInSelectedDate = listElements?.filter(
                e => e.date.date() === date.date() && e.date.year() === date.year()
            );

            setCurrentListElements(elementsInSelectedDate ?? []);
        },
        [listElements]
    );

    useEffect(() => {
        onDateSelect(dayjs());
    }, [onDateSelect]);

    return (
        <Row className='gap-large'>
            <Col className='flex-1'>
                <ScheduleCalendar onSelect={onDateSelect} />
            </Col>
            <Col className='gap-small flex flex-1 flex-col justify-between'>
                <ScheduleList listElements={currentListElements} />
                <Flex justify='flex-end' gap='small'>
                    {actions?.map((action, i) => <div key={i}>{action}</div>)}
                </Flex>
            </Col>
        </Row>
    );
}
