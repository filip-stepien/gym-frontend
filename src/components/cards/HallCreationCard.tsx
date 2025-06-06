import { Card, Input, Select, Button, Flex, Form } from 'antd';
import { CardTitle } from '@/components/common/CardTitle';
import { HallTypeDto } from '@/generated/gym-api';

const { TextArea } = Input;

export type HallValues = {
    hallNumber: string;
    hallType: string;
    hallDescription: string;
};

type HallCreationCardProps = {
    hallTypes?: HallTypeDto[];
    onCreate?: (values: HallValues) => void;
};

export function HallCreationCard({ hallTypes = [], onCreate = () => {} }: HallCreationCardProps) {
    const [form] = Form.useForm();

    return (
        <Card>
            <CardTitle title='Create Hall' icon='training-halls' />
            <Form
                form={form}
                layout='vertical'
                onFinish={onCreate}
                requiredMark={label => <span>{label}</span>}
                className='pt-small'
            >
                <Flex className='gap-layout'>
                    <Flex vertical className='w-full'>
                        <Form.Item
                            label='Hall Number'
                            name='hallNumber'
                            rules={[{ required: true, message: '' }]}
                        >
                            <Input placeholder='Enter hall number' />
                        </Form.Item>

                        <Form.Item
                            label='Type'
                            name='hallType'
                            rules={[{ required: true, message: '' }]}
                        >
                            <Select placeholder='Select hall type'>
                                {hallTypes.filter(Boolean).map(type => (
                                    <Select.Option key={type.name} value={type.uuid}>
                                        {type.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Flex>

                    <Flex className='w-full' vertical>
                        <Form.Item
                            label='Description'
                            name='hallDescription'
                            rules={[{ required: true, message: '' }]}
                        >
                            <TextArea rows={5} placeholder='Enter description' allowClear />
                        </Form.Item>
                    </Flex>
                </Flex>

                <Flex justify='end'>
                    <Button type='primary' htmlType='submit'>
                        Create
                    </Button>
                </Flex>
            </Form>
        </Card>
    );
}
