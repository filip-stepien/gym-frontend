import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Image } from '@/components/Image';
import { SmallStatistic } from '@/components/SmallStatistic';
import { Flex, Space } from 'antd';

type MembershipOverviewProps = {
    imageSrc: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
};

export function MembershipOverview(props: MembershipOverviewProps) {
    const { imageSrc, firstName, lastName, dateOfBirth, email } = props;
    return (
        <Card className='flex-1'>
            <Flex className='gap-large' align='center'>
                <Image width={130} height={130} src={imageSrc} objectFit='cover' />
                <Space direction='vertical'>
                    <CardTitle title='Membership' icon='membership' />
                    <Flex className='gap-large'>
                        <Flex vertical className='gap-small flex min-w-20 flex-col'>
                            <SmallStatistic title='First Name' value={firstName} />
                            <SmallStatistic title='Last Name' value={lastName} />
                        </Flex>
                        <Flex vertical className='gap-small flex min-w-20 flex-col'>
                            <SmallStatistic title='Date Of Birth' value={dateOfBirth} />
                            <SmallStatistic title='Email' value={email} />
                        </Flex>
                    </Flex>
                </Space>
            </Flex>
        </Card>
    );
}
