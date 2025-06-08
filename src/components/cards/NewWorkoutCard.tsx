import { useState } from 'react';
import { CardTitle } from '@/components/common/CardTitle';
import { DatePicker, Flex, Input, Typography, Modal, Alert } from 'antd';
import { ExerciseTable } from '@/components/common/ExerciseTable';
import { Card } from '@/components/layout/Card';
import dayjs, { type Dayjs } from 'dayjs';

export type ExerciseRow = {
    key: string;
    exercise: string;
    weight: number;
    reps: number;
};

export type NewWorkoutData = {
    title: string;
    date: Dayjs;
    exerciseRows: ExerciseRow[];
};

type NewWorkoutCardProps = {
    exerciseSearchOptions: string[];
    onWorkoutSave?: (workout: NewWorkoutData) => void;
    errorMessage?: string;
};

const { Title } = Typography;

export function NewWorkoutCard(props: NewWorkoutCardProps) {
    const { exerciseSearchOptions, errorMessage, onWorkoutSave = () => {} } = props;

    const [titleError, setTitleError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [modalOpened, setModalOpened] = useState(false);
    const [date, setDate] = useState(dayjs());
    const [title, setTitle] = useState('New workout');
    const [exerciseRows, setExerciseRows] = useState<ExerciseRow[]>([]);

    const handleSave = () => {
        setDateError(date === null);
        setTitleError(title === '');

        if (date && title) {
            setModalOpened(true);
        }
    };

    const closeModal = () => {
        setModalOpened(false);
    };

    const handleModalConfirm = () => {
        onWorkoutSave({
            date,
            title,
            exerciseRows: exerciseRows.filter(row => row.exercise && row.reps > 0)
        });

        setModalOpened(false);
        setTitle('New Workout');
        setExerciseRows([]);
    };

    return (
        <>
            <Modal
                title='Save workout'
                open={modalOpened}
                onOk={handleModalConfirm}
                onCancel={closeModal}
            >
                <p>Are you sure you want to save the workout?</p>
                <p>Any unfinished exercise sets will be lost.</p>
            </Modal>
            <Card>
                <CardTitle title='New Workout' icon='newworkout' className='pb-middle' />
                <Flex wrap className='gap-x-large gap-y-small w-full'>
                    <Flex vertical gap='small' className='w-full sm:w-fit'>
                        <Title level={5}>Date</Title>
                        <DatePicker
                            placeholder='Select date'
                            value={date}
                            onChange={date => setDate(date)}
                            status={dateError ? 'error' : undefined}
                            className='w-full sm:w-[120px]'
                        />
                    </Flex>
                    <Flex vertical gap='small' className='w-full sm:w-fit'>
                        <Title level={5}>Title</Title>
                        <Input
                            placeholder='Workout Title'
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            status={titleError ? 'error' : undefined}
                            className='w-full md:w-[240px]'
                        />
                    </Flex>
                </Flex>
                <ExerciseTable
                    exerciseSearchOptions={exerciseSearchOptions}
                    exerciseRows={exerciseRows}
                    setExerciseRows={setExerciseRows}
                    onSave={handleSave}
                />
                {errorMessage ? <Alert message={errorMessage} type='error' /> : <div></div>}
            </Card>
        </>
    );
}
