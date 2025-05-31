import { BackButton } from '@/components/BackButton';
import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { type ExerciseRow, ExerciseTable } from '@/components/ExerciseTable';
import {
    Button,
    Col,
    DatePicker,
    Flex,
    Input,
    Modal,
    Row,
    Select,
    Space,
    TimePicker,
    Typography
} from 'antd';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';

const trainingHalls = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' }
];

const { Title } = Typography;
const { TextArea } = Input;

export function CoachNewSession() {
    const [title, setTitle] = useState('');
    const [desription, setDescription] = useState('');
    const [hall, setHall] = useState<string | null>(null);
    const [date, setDate] = useState<Dayjs | null>(null);
    const [time, setTime] = useState<Dayjs | null>(null);
    const [modalOpened, setModalOpened] = useState(false);

    const [titleError, setTitleError] = useState(false);
    const [hallError, setHallError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [timeError, setTimeError] = useState(false);

    const handleCreate = (data: ExerciseRow[]) => {
        setTitleError(title === '');
        setHallError(hall === null);
        setDateError(date === null);
        setTimeError(time === null);

        if (data.length === 0 || data.some(e => e.reps === 0 || e.weight === 0)) {
            setModalOpened(true);
        } else {
            console.log(data);
        }
    };

    return (
        <>
            <Modal
                title='Create workout session'
                open={modalOpened}
                footer={[
                    <Button type='primary' onClick={() => setModalOpened(false)}>
                        OK
                    </Button>
                ]}
            >
                <p>Your workout has invalid exercises.</p>
                <p>Make sure your exercises have a correct number of repetitions and weight.</p>
            </Modal>
            <Flex vertical>
                <BackButton />
                <Card>
                    <CardTitle title='New Session' icon='newworkout' />
                    <Row className='mt-small mb-middle gap-large'>
                        <Col flex={1} className='gap-middle flex flex-col'>
                            <Flex vertical gap='small'>
                                <Title level={5}>Title</Title>
                                <Input
                                    placeholder='Session title...'
                                    maxLength={20}
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    status={titleError ? 'error' : undefined}
                                />
                            </Flex>
                            <Flex vertical gap='small'>
                                <Title level={5}>Training Hall</Title>
                                <Select
                                    options={trainingHalls}
                                    placeholder='Select hall...'
                                    value={hall}
                                    onChange={e => setHall(e)}
                                    status={hallError ? 'error' : undefined}
                                />
                            </Flex>
                            <Flex vertical gap='small'>
                                <Title level={5}>Description</Title>
                                <TextArea
                                    placeholder='Session description...'
                                    maxLength={200}
                                    autoSize={{ minRows: 3 }}
                                    showCount
                                    value={desription}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </Flex>
                        </Col>
                        <Col flex={1} className='gap-middle flex flex-col'>
                            <Flex vertical gap='small'>
                                <Title level={5}>Date</Title>
                                <DatePicker
                                    placeholder='Select date...'
                                    value={date}
                                    onChange={e => setDate(e)}
                                    status={dateError ? 'error' : undefined}
                                />
                            </Flex>
                            <Flex vertical gap='small'>
                                <Title level={5}>Time</Title>
                                <TimePicker
                                    placeholder='Select time...'
                                    format='HH:mm'
                                    value={time}
                                    onChange={e => setTime(e)}
                                    status={timeError ? 'error' : undefined}
                                />
                            </Flex>
                        </Col>
                    </Row>
                    <Flex vertical>
                        <Title level={5}>Exercises</Title>
                        <ExerciseTable saveButtonLabel='Create' onSave={handleCreate} />
                    </Flex>
                </Card>
            </Flex>
        </>
    );
}
