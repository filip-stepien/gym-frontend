import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { SmallStatistic } from '@/components/common/SmallStatistic';
import { Flex } from 'antd';

type PersonalDetailsCardProps = {
    firstName?: string;
    lastName?: string;
    email?: string;
    className?: string;
};

export function PersonalDetailsCard(props: PersonalDetailsCardProps) {
    const { firstName, lastName, email, className = '' } = props;
    return (
        <Card className={'flex-1' + className}>
            <CardTitle title='Personal Details' icon='membership' />
            <Flex gap='large' vertical className='h-full min-w-20'>
                <SmallStatistic title='First Name' value={firstName ?? '-'} />
                <SmallStatistic title='Last Name' value={lastName ?? '-'} />
                <SmallStatistic title='Email' value={email ?? '-'} />
            </Flex>
        </Card>
    );
}
