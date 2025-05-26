import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Button, DatePicker, Form, Input, Select, Row, Col, Upload, Flex, Space } from 'antd';
import { Icon } from '@/components/Icon';
import moment from 'moment';

const { Option } = Select;

interface MembershipValues {
    firstName?: string;
    lastName?: string;
    email?: string;
    dob?: string | moment.Moment;
    cardNumber?: string;
    expiry?: string;
    cvv?: string;
    cardName?: string;
    country?: string;
    zip?: string;
    avatar?: any;
}

const fields = [
    { name: 'firstName', label: 'First Name', placeholder: 'John', span: 12 },
    { name: 'lastName', label: 'Last Name', placeholder: 'Pork', span: 12 },
    { name: 'email', label: 'Email', placeholder: 'example@example.com', span: 12 },
    { name: 'dob', label: 'Date Of Birth', type: 'date', span: 12 },
    { name: 'cardNumber', label: 'Card Number', placeholder: '4242 4242 4242 4242', span: 12 },
    { name: 'expiry', label: ' ', placeholder: 'MM / YY', span: 6 },
    { name: 'cvv', label: ' ', placeholder: 'CVV', span: 6 },
    { name: 'cardName', label: 'Name on Card', placeholder: 'John Pork', span: 12 },
    { name: 'zip', label: 'ZIP Code', placeholder: 'ZIP Code', span: 12 }
];

const renderField = ({ name, label, placeholder, type, span }: any) => (
    <Col span={span} key={name}>
        <Form.Item name={name} label={label}>
            {type === 'date' ? (
                <DatePicker format='DD.MM.YYYY' style={{ width: '100%' }} />
            ) : (
                <Input placeholder={placeholder} />
            )}
        </Form.Item>
    </Col>
);

export function EmployeeDashboardMembershipCreation() {
    const [form] = Form.useForm();

    const onFinish = (values: MembershipValues) => {
        console.log('Form values:', values);
    };

    return (
        <Card className='gap-layout'>
            <CardTitle title='Membership Creation' icon='addavatar' />
            <Form form={form} layout='vertical' onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={18}>
                        <Row gutter={16}>
                            {fields.map(renderField)}
                            <Col span={12}>
                                <Form.Item name='country' label='Country Or Region'>
                                    <Select defaultValue='United States'>
                                        <Option value='United States'>United States</Option>
                                        <Option value='Poland'>Poland</Option>
                                        <Option value='Germany'>Germany</Option>
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
