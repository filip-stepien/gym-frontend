import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Image } from '@/components/Image';
import { SmallStatistic } from '@/components/SmallStatistic';
import { Col, Flex, Row, Space } from 'antd';

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
                    <Row className='gap-large'>
                        <Col className='gap-small flex flex-col'>
                            <SmallStatistic title='First Name' value={firstName} />
                            <SmallStatistic title='Last Name' value={lastName} />
                        </Col>
                        <Col className='gap-small flex flex-col'>
                            <SmallStatistic title='Date Of Birth' value={dateOfBirth} />
                            <SmallStatistic title='Email' value={email} />
                        </Col>
                    </Row>
                </Space>
            </Flex>
        </Card>
    );
}
