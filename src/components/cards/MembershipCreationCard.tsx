import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Button, DatePicker, Form, Input, Select, Row, Col, Flex, Space } from 'antd';
import { Dayjs } from 'dayjs';

const { Option } = Select;

export type MembershipValues = {
    firstName: string;
    lastName: string;
    email: string;
    dob: Dayjs;
    cardNumber: string;
    expiry: string;
    cvv: string;
    cardName: string;
    country: string;
    zip: string;
};

type FormField = {
    name: string;
    label: string;
    span: number;
    placeholder?: string;
    type?: string;
};

type MembershipCreationCardProps = {
    onCreate?: (values: MembershipValues) => void;
};

const fields: FormField[] = [
    { name: 'firstName', label: 'First Name', placeholder: 'John', span: 12 },
    { name: 'lastName', label: 'Last Name', placeholder: 'Pork', span: 12 },
    { name: 'email', label: 'Email', placeholder: 'example@example.com', span: 12 },
    { name: 'dob', label: 'Date Of Birth', type: 'date', span: 12 },
    { name: 'cardNumber', label: 'Card Number', placeholder: '4242 4242 4242 4242', span: 12 },
    { name: 'expiry', label: 'Expiration Date', placeholder: 'MM / YY', span: 6 },
    { name: 'cvv', label: 'CVV', placeholder: 'CVV', span: 6 },
    { name: 'cardName', label: 'Name on Card', placeholder: 'John Pork', span: 12 },
    { name: 'zip', label: 'ZIP Code', placeholder: 'ZIP Code', span: 12 }
];

const renderField = (fieldInfo: FormField) => {
    const { name, label, placeholder, type, span } = fieldInfo;
    return (
        <Col span={span} key={name} className='!max-w-full lg:!max-w-3/4'>
            <Form.Item name={name} label={label} rules={[{ required: true, message: '' }]}>
                {type === 'date' ? (
                    <DatePicker className='w-full' format='DD.MM.YYYY' />
                ) : (
                    <Input placeholder={placeholder} />
                )}
            </Form.Item>
        </Col>
    );
};

export function MembershipCreationCard({ onCreate = () => {} }: MembershipCreationCardProps) {
    const [form] = Form.useForm();

    const handleSubmit = (values: MembershipValues) => {
        onCreate(values);
        form.resetFields();
    };

    return (
        <Card className='gap-layout'>
            <CardTitle title='Membership Creation' icon='addavatar' />
            <Form
                form={form}
                layout='vertical'
                onFinish={handleSubmit}
                className='w-full'
                requiredMark={label => <span>{label}</span>}
            >
                <Col span={18} className='!max-w-full lg:!max-w-3/4'>
                    <Row gutter={16} className='block md:flex'>
                        {fields.map(renderField)}
                        <Col span={12} className='!max-w-full lg:!max-w-3/4'>
                            <Form.Item
                                name='country'
                                label='Country Or Region'
                                rules={[{ required: true, message: '' }]}
                            >
                                <Select placeholder='Select country'>
                                    <Option value='United States'>United States</Option>
                                    <Option value='Poland'>Poland</Option>
                                    <Option value='Germany'>Germany</Option>
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
