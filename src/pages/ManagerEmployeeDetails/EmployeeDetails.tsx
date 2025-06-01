import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { SmallStatistic } from '@/components/common/SmallStatistic';
import { Button, Flex, Space } from 'antd';

type EmployeeValuesProps = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    position: string;
    phone: string;
};

export function EmployeeDetails(props: EmployeeValuesProps) {
    const { firstName, lastName, dateOfBirth, email, position, phone } = props;
    return (
        <Card>
            <Flex className='gap-large justify-between'>
                <Space direction='vertical'>
                    <CardTitle title='Employee Details' icon='membership' />
                    <Flex className='gap-large'>
                        <Flex vertical className='gap-small flex min-w-20 flex-col'>
                            <SmallStatistic title='First Name' value={firstName} />
                            <SmallStatistic title='Last Name' value={lastName} />
                        </Flex>
                        <Flex vertical className='gap-small flex min-w-20 flex-col'>
                            <SmallStatistic title='Date Of Birth' value={dateOfBirth} />
                            <SmallStatistic title='Email' value={email} />
                        </Flex>
                        <Flex vertical className='gap-small flex min-w-20 flex-col'>
                            <SmallStatistic title='Position' value={position} />
                            <SmallStatistic title='Phone number' value={phone} />
                        </Flex>
                    </Flex>
                </Space>
                <Space align='end'>
                    <Button type='primary'>End</Button>
                    <Button danger>Delete</Button>
                </Space>
            </Flex>
        </Card>
    );
}
