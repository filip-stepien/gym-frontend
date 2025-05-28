import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Button, DatePicker, Form, Input, Row, Col, Flex, Space, Select } from 'antd';
import { Dayjs } from 'dayjs';

const { Option } = Select;

interface EmployeeValues {
    firstName?: string;
    lastName?: string;
    email?: string;
    dob?: Dayjs;
    phone?: string;
    city?: string;
    street?: string;
    houseNumber?: number;
    position?: string;
}

const fields = [
    { name: 'firstName', label: 'First Name', placeholder: 'John', span: 12 },
    { name: 'lastName', label: 'Last Name', placeholder: 'Pork', span: 12 },
    { name: 'email', label: 'Email', placeholder: 'example@example.com', span: 12 },
    { name: 'dob', label: 'Date Of Birth', type: 'date', span: 12 },
    { name: 'city', label: 'City', placeholder: 'New York', span: 12 },
    { name: 'street', label: 'Street', placeholder: 'Happy street', span: 12 },
    { name: 'houseNumber', label: 'House/Apartment Number', placeholder: '2', span: 12 },
    { name: 'phone', label: 'Phone Number', placeholder: '123 123 123', span: 12 }
];

const renderField = ({ name, label, placeholder, type, span }: any) => (
    <Col span={span} key={name}>
        <Form.Item name={name} label={label}>
            {type === 'date' ? (
                <DatePicker className='w-full' format='DD.MM.YYYY' />
            ) : (
                <Input placeholder={placeholder} />
            )}
        </Form.Item>
    </Col>
);

export function ManagerEmployeeCreation() {
    const [form] = Form.useForm();

    const onFinish = (values: EmployeeValues) => {
        console.log('Form values:', values);
    };

    return (
        <Card className='gap-layout'>
            <CardTitle title='Employee Creation' icon='addavatar' />
            <Form form={form} layout='vertical' onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={18}>
                        <Row gutter={16}>
                            {fields.map(renderField)}
                            <Col span={12}>
                                <Form.Item name='position' label='Position'>
                                    <Select defaultValue='Employee'>
                                        <Option value='Coach'>Coach</Option>
                                        <Option value='Employee'>Employee</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Flex className='justify-end'>
                    <Space>
                        <Button htmlType='reset'>Clear</Button>
                        <Button type='primary' htmlType='submit'>
                            Create
                        </Button>
                    </Space>
                </Flex>
            </Form>
        </Card>
    );
}
