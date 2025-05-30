import { useState } from 'react';
import { CardTitle } from '@/components/CardTitle';
import { DatePicker, Flex, Input, Typography, TimePicker, Modal } from 'antd';
import dayjs from 'dayjs';
import { ExerciseTable } from '@/components/ExerciseTable';
import { Card } from '@/components/Card';

const { Title } = Typography;

export function ClientNewWorkout() {
    const [titleError, setTitleError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [timeError, setTimeError] = useState(false);
    const [modalOpened, setModalOpened] = useState(false);
    const [date, setDate] = useState(dayjs());
    const [time, setTime] = useState(dayjs());
    const [title, setTitle] = useState('New workout');

    const handleSave = () => {
        setDateError(date === null);
        setTimeError(time === null);
        setTitleError(title === '');

        if (date && time && title) {
            setModalOpened(true);
        }
    };

    return (
        <>
            <Modal
                title='Save workout'
                open={modalOpened}
                onOk={() => setModalOpened(false)}
                onCancel={() => setModalOpened(false)}
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
                        <Title level={5}>Time</Title>
                        <TimePicker
                            format='HH:mm'
                            className='w-full sm:w-[120px]'
                            placeholder='Select time'
                            value={time}
                            onChange={time => setTime(time)}
                            status={timeError ? 'error' : undefined}
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
                <ExerciseTable onSave={handleSave} />
            </Card>
        </>
    );
}
