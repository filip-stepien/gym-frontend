import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Button, DatePicker, Form, Input, Row, Col, Flex, Space, Select } from 'antd';
import { Dayjs } from 'dayjs';

const { Option } = Select;

export type EmployeeValues = {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Dayjs;
    phone: string;
    city: string;
    street: string;
    houseNumber: number;
    apartmentNumber?: number;
    position: string;
};

type EmployeeFieldsInfo = {
    name: string;
    label: string;
    span: number;
    required?: boolean;
    placeholder?: string;
    type?: string;
};

type EmployeeCreationCardProps = {
    onCreate?: (values: EmployeeValues) => void;
};

const fields: EmployeeFieldsInfo[] = [
    {
        name: 'firstName',
        label: 'First Name',
        placeholder: 'First name...',
        span: 12,
        required: true
    },
    { name: 'lastName', label: 'Last Name', placeholder: 'Last name...', span: 12, required: true },
    { name: 'email', label: 'Email', placeholder: 'Email...', span: 12, required: true },
    { name: 'dateOfBirth', label: 'Date Of Birth', type: 'date', span: 12, required: true },
    { name: 'city', label: 'City', placeholder: 'City...', span: 12, required: true },
    { name: 'street', label: 'Street', placeholder: 'Street...', span: 12, required: true },
    {
        name: 'houseNumber',
        label: 'House Number',
        placeholder: 'House number...',
        span: 12,
        required: true
    },
    {
        name: 'apartmentNumber',
        label: 'Apartment Number',
        placeholder: 'Apartment Number...',
        span: 12
    },
    { name: 'phone', label: 'Phone Number', placeholder: '123 123 123', span: 12, required: true }
];

const renderField = (info: EmployeeFieldsInfo) => {
    const { name, label, placeholder, type, span, required } = info;
    return (
        <Col span={span} key={name} className='!max-w-full lg:!max-w-3/4'>
            <Form.Item name={name} label={label} rules={[{ required, message: '' }]}>
                {type === 'date' ? (
                    <DatePicker className='w-full' format='DD.MM.YYYY' />
                ) : (
                    <Input className='w-full' placeholder={placeholder} />
                )}
            </Form.Item>
        </Col>
    );
};

export function EmployeeCreationCard({ onCreate }: EmployeeCreationCardProps) {
    const [form] = Form.useForm();

    return (
        <Card className='gap-layout'>
            <CardTitle title='Employee Creation' icon='addavatar' />
            <Form
                form={form}
                layout='vertical'
                onFinish={onCreate}
                requiredMark={label => <span>{label}</span>}
            >
                <Col span={18} className='!max-w-full lg:!max-w-3/4'>
                    <Row gutter={16} className='block md:flex'>
                        {fields.map(renderField)}
                        <Col span={12} className='!max-w-full lg:!max-w-3/4'>
                            <Form.Item
                                name='position'
                                label='Position'
                                rules={[{ required: true, message: '' }]}
                            >
                                <Select placeholder='Position'>
                                    <Option value='Coach'>Coach</Option>
                                    <Option value='Employee'>Employee</Option>
                                    <Option value='Manager'>Manager</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Col>

                <Flex className='justify-end'>
                    <Space>
                        <Button type='primary' htmlType='submit'>
                            Create
                        </Button>
                    </Space>
                </Flex>
            </Form>
        </Card>
    );
}
