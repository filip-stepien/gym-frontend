import { Card, Input, Select, Button, Flex, Form, Space } from 'antd';
import { CardTitle } from '@/components/common/CardTitle';

const { TextArea } = Input;

const hallTypes = ['Yoga', 'Cardio', 'Weight lifting', 'CrossFit'];

export function ManagerNewHallCreation() {
    const [form] = Form.useForm();

    return (
        <Card>
            <CardTitle title='Create Hall' icon='training-halls' />

            <Form form={form} layout='vertical'>
                <Flex className='gap-layout'>
                    <Flex vertical className='w-full'>
                        <Form.Item
                            label='Number'
                            name='number'
                            rules={[{ required: true, message: 'Please enter the hall number' }]}
                        >
                            <Input placeholder='Enter hall number' />
                        </Form.Item>

                        <Form.Item
                            label='Type'
                            name='type'
                            rules={[{ required: true, message: 'Please select hall type' }]}
                        >
                            <Select placeholder='Select hall type'>
                                {hallTypes.map(type => (
                                    <Select.Option key={type} value={type}>
                                        {type}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Flex>

                    <Flex className='w-full' vertical>
                        <Form.Item label='Description' name='description'>
                            <TextArea rows={5} placeholder='Enter description' allowClear />
                        </Form.Item>
                    </Flex>
                </Flex>

                <Flex justify='end'>
                    <Space>
                        <Button type='primary' htmlType='submit'>
                            Create
                        </Button>
                        <Button htmlType='reset'>Clear</Button>
                    </Space>
                </Flex>
            </Form>
        </Card>
    );
}
