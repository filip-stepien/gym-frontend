import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Flex, Form, Input, DatePicker, Button } from 'antd';
import { Dayjs } from 'dayjs';

export type ClientDetailsValues = {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Dayjs;
};

type ClientDetailsCardProps = {
    firstName?: string;
    lastName?: string;
    email?: string;
    dateOfBirth?: Dayjs;
    onEdit?: (values: ClientDetailsValues) => void;
};

export function ClientDetailsCard(props: ClientDetailsCardProps) {
    const { firstName, lastName, email, dateOfBirth, onEdit = () => {} } = props;
    const [form] = Form.useForm();

    return (
        <Card>
            <CardTitle title='Client Details' icon='info' />
            <Form
                form={form}
                layout='vertical'
                onFinish={onEdit}
                requiredMark={label => <span>{label}</span>}
                initialValues={{
                    firstName,
                    lastName,
                    email,
                    dateOfBirth
                }}
            >
                <Flex wrap className='md:gap-large flex-col md:flex-row'>
                    <Form.Item
                        label='First Name'
                        name='firstName'
                        className='flex-1'
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input placeholder='First name...' />
                    </Form.Item>
                    <Form.Item
                        label='Last Name'
                        name='lastName'
                        className='flex-1'
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input placeholder='Last name...' />
                    </Form.Item>
                </Flex>

                <Form.Item label='Email' name='email' rules={[{ required: true, message: '' }]}>
                    <Input placeholder='Email...' />
                </Form.Item>

                {/* <Form.Item
                    label='Date Of Birth'
                    name='dateOfBirth'
                    rules={[{ required: true, message: '' }]}
                >
                    <DatePicker format='DD.MM.YYYY' className='w-full' />
                </Form.Item> */}
                <Flex justify='end'>
                    <Button type='primary' htmlType='submit'>
                        Edit Information
                    </Button>
                </Flex>
            </Form>
        </Card>
    );
}
