import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { useTailwindBreakpoints } from '@/hooks/useTailwindBreakpoints';
import { Button, DatePicker, Form, Input, Select, Row, Col, Flex, Space } from 'antd';
import { Dayjs } from 'dayjs';

const { Option } = Select;

type FormField = {
    name: string;
    label: string;
    span: number;
    placeholder?: string;
    type?: string;
};

interface MembershipValues {
    firstName?: string;
    lastName?: string;
    email?: string;
    dob?: Dayjs;
    cardNumber?: string;
    expiry?: string;
    cvv?: string;
    cardName?: string;
    country?: string;
    zip?: string;
}

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

const renderField = (fieldInfo: FormField & { lg: boolean }) => {
    const { name, label, placeholder, type, span, lg } = fieldInfo;
    return lg ? (
        <Col span={span} key={name}>
            <Form.Item name={name} label={label}>
                {type === 'date' ? (
                    <DatePicker className='w-full' format='DD.MM.YYYY' />
                ) : (
                    <Input placeholder={placeholder} />
                )}
            </Form.Item>
        </Col>
    ) : (
        <Form.Item name={name} label={label} className='mb-small'>
            {type === 'date' ? (
                <DatePicker className='w-full' format='DD.MM.YYYY' />
            ) : (
                <Input placeholder={placeholder} />
            )}
        </Form.Item>
    );
};

export function EmployeeDashboardMembershipCreation() {
    const [form] = Form.useForm();
    const { lg } = useTailwindBreakpoints();

    const onFinish = (values: MembershipValues) => {
        console.log('Form values:', values);
    };

    return (
        <Card className='gap-layout'>
            <CardTitle title='Membership Creation' icon='addavatar' />
            <Form form={form} layout='vertical' onFinish={onFinish} className='w-full'>
                {lg ? (
                    <Col span={18}>
                        <Row gutter={16}>
                            {fields.map(({ name, label, placeholder, type, span }) =>
                                renderField({ name, label, placeholder, type, span, lg })
                            )}
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
                ) : (
                    <>
                        {fields.map(({ name, label, placeholder, type, span }) =>
                            renderField({ name, label, placeholder, type, span, lg })
                        )}
                        <Form.Item name='country' label='Country Or Region'>
                            <Select defaultValue='United States'>
                                <Option value='United States'>United States</Option>
                                <Option value='Poland'>Poland</Option>
                                <Option value='Germany'>Germany</Option>
                            </Select>
                        </Form.Item>
                    </>
                )}

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
