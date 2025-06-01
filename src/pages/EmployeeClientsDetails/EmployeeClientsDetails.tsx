import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Flex, Form, Input, DatePicker, Select, Button } from 'antd';
import { BackButton } from '@/components/common/BackButton';

export function EmployeeClientsDetails() {
    return (
        <div>
            <BackButton />
            <Card>
                <CardTitle title='Personal Information' icon='info' />
                <Form layout='vertical'>
                    <Flex wrap className='md:gap-large flex-col md:flex-row'>
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
                        <DatePicker format='DD.MM.YYYY' className='w-full' />
                    </Form.Item>

                    <Flex wrap className='md:gap-large flex-col md:flex-row'>
                        <Form.Item label='Country Or Region' className='flex-1'>
                            <Select defaultValue='United States'>
                                <Select.Option value='United States'>United States</Select.Option>
                                <Select.Option value='Poland'>Poland</Select.Option>
                                <Select.Option value='Germany'>Germany</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label='ZIP Code' className='md:w-[150px]'>
                            <Input defaultValue='12345' />
                        </Form.Item>
                    </Flex>
                    <Flex justify='end'>
                        <Form.Item className='m-0'>
                            <Button type='primary'>Edit Information</Button>
                        </Form.Item>
                    </Flex>
                </Form>
            </Card>
        </div>
    );
}
