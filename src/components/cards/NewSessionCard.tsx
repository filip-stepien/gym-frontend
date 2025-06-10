import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { ExerciseTable } from '@/components/common/ExerciseTable';
import {
    Alert,
    Button,
    Col,
    DatePicker,
    Flex,
    Input,
    Modal,
    Row,
    Select,
    TimePicker,
    Typography
} from 'antd';
import { useState } from 'react';
import type { Dayjs } from 'dayjs';
import { ExerciseRow } from '@/components/cards/NewWorkoutCard';
import { BackButton } from '@/components/layout/BackButton';

const { Title } = Typography;
const { TextArea } = Input;

export type NewSessionValues = {
    title: string;
    description: string;
    hall: string;
    date: Dayjs;
    time: Dayjs;
    exerciseRows: ExerciseRow[];
};

type NewSessionCardProps = {
    exerciseSearchOptions?: string[];
    trainingHallNumbers?: string[];
    onCreate?: (values: NewSessionValues) => void;
    errorMessage?: string;
};

export function NewSessionCard(props: NewSessionCardProps) {
    const { 
        exerciseSearchOptions, 
        trainingHallNumbers = [], 
        onCreate = () => {},
        errorMessage 
    } = props;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [hall, setHall] = useState<string | null>(null);
    const [date, setDate] = useState<Dayjs | null>(null);
    const [time, setTime] = useState<Dayjs | null>(null);
    const [exerciseRows, setExerciseRows] = useState<ExerciseRow[]>([]);
    const [modalOpened, setModalOpened] = useState(false);

    const [titleError, setTitleError] = useState(false);
    const [hallError, setHallError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [timeError, setTimeError] = useState(false);

    const trainingHallOptions = trainingHallNumbers.map(hall => ({
        key: hall,
        value: hall
    }));

    const handleCreate = () => {
        setTitleError(title === '');
        setHallError(hall === null);
        setDateError(date === null);
        setTimeError(time === null);

        if (title.length === 0 || !hall || !date || !time) {
            return;
        }

        if (exerciseRows.length === 0 || exerciseRows.some(e => e.reps === 0)) {
            setModalOpened(true);
            return;
        }
        onCreate({
            title,
            description,
            hall,
            date,
            time,
            exerciseRows
        });
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
                                    options={trainingHallOptions}
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
                                    value={description}
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
                        <ExerciseTable
                            saveButtonLabel='Create'
                            exerciseSearchOptions={exerciseSearchOptions}
                            exerciseRows={exerciseRows}
                            setExerciseRows={setExerciseRows}
                            onSave={handleCreate}
                        />
                    </Flex>
                    {errorMessage ? <Alert message={errorMessage} type='error' /> : <div></div>}
                </Card>
            </Flex>
        </>
    );
}