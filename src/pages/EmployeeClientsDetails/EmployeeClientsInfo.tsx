import { CardTitle } from '@/components/CardTitle';
import { Card, Flex, Form, Input, DatePicker, Select, Button } from 'antd';

export function EmployeeClientsInfo() {
    return (
        <Card>
            <CardTitle title='Personal Information' icon='info' />
            <Flex className='gap-middle' align='start' wrap='wrap'>
                <Form layout='vertical' className='min-w-[300px] flex-1'>
                    <Flex wrap gap={16}>
                        <Form.Item label='First Name' name='firstName' className='flex-1'>
                            <Input defaultValue='John' />
                        </Form.Item>
                        <Form.Item label='Last Name' name='lastName' className='flex-1'>
                            <Input defaultValue='Pork' />
                        </Form.Item>
                    </Flex>

                    <Form.Item label='Email' name='email'>
                        <Input defaultValue='example@example.com' />
                    </Form.Item>

                    <Form.Item label='Date Of Birth' name='dob'>
                        <DatePicker format='DD.MM.YYYY' />
                    </Form.Item>

                    <Flex wrap gap={16}>
                        <Form.Item label='Card Information' className='flex-2'>
                            <Input placeholder='4242 4242 4242 4242' />
                        </Form.Item>
                        <Form.Item label='Expiry' style={{ width: 100 }}>
                            <Input placeholder='12 / 34' />
                        </Form.Item>
                        <Form.Item label='CVV' style={{ width: 80 }}>
                            <Input placeholder='567' />
                        </Form.Item>
                    </Flex>

                    <Form.Item label='Name on card'>
                        <Input defaultValue='John Pork' />
                    </Form.Item>

                    <Flex wrap gap={16}>
                        <Form.Item label='Country Or Region' className='flex-1'>
                            <Select defaultValue='United States'>
                                <Select.Option value='United States'>United States</Select.Option>
                                <Select.Option value='Poland'>Poland</Select.Option>
                                <Select.Option value='Germany'>Germany</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label='ZIP Code' style={{ width: 150 }}>
                            <Input defaultValue='12345' />
                        </Form.Item>
                    </Flex>

                    <Form.Item>
                        <Button type='primary'>Edit Information</Button>
                    </Form.Item>
                </Form>
            </Flex>
        </Card>
    );
}
