import { Flex, Timeline, Empty } from 'antd';
import type { TimeLineItemProps } from 'antd/es/timeline/TimelineItem';
import { Link } from 'react-router';

type SessionPlanProps = {
    exercises?: string[];
    maxInColumn?: number;
    detailsHref?: string;
};

export function SessionPlan(props: SessionPlanProps) {
    const { exercises = [], maxInColumn = Number.MAX_SAFE_INTEGER, detailsHref = '' } = props;

    const leftTimeLineColumnItems: TimeLineItemProps[] = exercises
        .slice(0, maxInColumn)
        .map(exercise => ({
            children: exercise
        }));

    const rightTimeLineColumnItmes: TimeLineItemProps[] = exercises
        .slice(maxInColumn, maxInColumn * 2 - 1)
        .map(exercise => ({
            children: exercise
        }));

    const displayMoreExercisesLabel = exercises.length > maxInColumn * 2 - 1;
    const exercisesLeft = exercises.length - maxInColumn * 2 + 1;

    if (displayMoreExercisesLabel) {
        rightTimeLineColumnItmes.push({
            children: <Link to={detailsHref ?? ''}>+{exercisesLeft} More</Link>
        });
    }

    return exercises && exercises.length > 0 ? (
        <Flex
            gap='large'
            justify={maxInColumn === Number.MAX_SAFE_INTEGER ? 'start' : 'space-between'}
        >
            <Timeline items={leftTimeLineColumnItems} />
            <Timeline items={rightTimeLineColumnItmes} />
        </Flex>
    ) : (
        <Empty />
    );
}
