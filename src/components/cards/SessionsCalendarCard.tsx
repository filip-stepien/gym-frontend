import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { ScheduleViewer } from '@/components/common/ScheduleViewer';
import { ScheduleDateListElement } from '@/components/common/ScheduleViewer/ScheduleViewer';
import type { JSX } from 'react';

type SessionsCalendarCardProps = {
    listElements?: ScheduleDateListElement[];
    actions?: JSX.Element[];
    fullscreen?: boolean;
    title?: string;
};

export function SessionsCalendarCard(props: SessionsCalendarCardProps) {
    const { title = 'Sessions', listElements, actions, fullscreen } = props;
    return (
        <Card>
            <CardTitle title={title} icon='sessions' />
            <ScheduleViewer listElements={listElements} actions={actions} fullscreen={fullscreen} />
        </Card>
    );
}
