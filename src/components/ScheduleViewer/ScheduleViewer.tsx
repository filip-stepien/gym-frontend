import { Row, Col, Flex } from 'antd';
import { ScheduleCalendar } from './ScheduleCalendar';
import { ScheduleList, type ScheduleListElement } from './ScheduleList';
import { Dayjs } from 'dayjs';
import { JSX } from 'react';

type ScheduleViewerProps = {
    onDateSelect?: (date: Dayjs) => void;
    listElements?: ScheduleListElement[];
    actions?: JSX.Element[];
};

export function ScheduleViewer(props: ScheduleViewerProps) {
    const { listElements, actions, onDateSelect } = props;
    return (
        <Row className='gap-large'>
            <Col className='flex-1'>
                <ScheduleCalendar onSelect={onDateSelect} />
            </Col>
            <Col className='gap-small flex flex-1 flex-col justify-between'>
                <ScheduleList listElements={listElements} />
                <Flex justify='flex-end' gap='small'>
                    {actions?.map((action, i) => <div key={i}>{action}</div>)}
                </Flex>
            </Col>
        </Row>
    );
}
