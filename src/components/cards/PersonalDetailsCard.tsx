import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { SmallStatistic } from '@/components/common/SmallStatistic';
import { Flex, Space } from 'antd';

type PersonalDetailsCardProps = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
};

export function PersonalDetailsCard(props: PersonalDetailsCardProps) {
    const { firstName, lastName, dateOfBirth, email } = props;
    return (
        <Card>
            <Flex className='gap-large' align='center'>
                <Space direction='vertical'>
                    <CardTitle title='Personal Details' icon='membership' />
                    <Flex className='gap-middle flex-wrap'>
                        <Flex vertical className='gap-middle flex min-w-20 flex-col'>
                            <SmallStatistic title='First Name' value={firstName} />
                            <SmallStatistic title='Last Name' value={lastName} />
                        </Flex>
                        <Flex vertical className='gap-middle flex min-w-20 flex-col'>
                            <SmallStatistic title='Date Of Birth' value={dateOfBirth} />
                            <SmallStatistic title='Email' value={email} />
                        </Flex>
                    </Flex>
                </Space>
            </Flex>
        </Card>
    );
}
