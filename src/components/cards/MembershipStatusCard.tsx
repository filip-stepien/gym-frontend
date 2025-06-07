import { Button, Progress, Statistic, Space, Col, Row, Flex, Empty, Spin } from 'antd';
import { Card } from '@/components/layout/Card';
import { CardTitle } from '@/components/common/CardTitle';
import { Dayjs } from 'dayjs';
import { getCSSVariable } from '@/utils/getCSSVariable';
import { useNavigate } from 'react-router';
import dayjs from 'dayjs';
import { getUser } from '@/generated/gym-api';
import { useEffect, useState } from 'react';
import { useUser } from '@/hooks/useUser';

export type MembershipStatusCardProps = {
    userId?: string;
    detailsHref?: string;
};

function getValidityLabel(lastPayment?: Dayjs, validUntil?: Dayjs) {
    if (!lastPayment || !validUntil) {
        return 'Expired';
    }

    const now = dayjs();
    const until = dayjs(validUntil);

    if (until.isBefore(now)) {
        return 'Expired';
    }

    const diffDays = until.diff(now, 'day');
    const diffDayjsWithToday = diffDays + 1;

    if (diffDays >= 1) {
        return `${diffDayjsWithToday} day${diffDayjsWithToday === 1 ? '' : 's'} left`;
    }

    const diffHours = until.diff(now, 'hour');
    return `${diffHours} hour${diffHours === 1 ? '' : 's'} left`;
}

function getCirclePercentage(lastPayment?: Dayjs, validUntil?: Dayjs): number {
    if (!lastPayment || !validUntil) return 0;

    const now = dayjs();

    if (now.isAfter(validUntil, 'day')) return 0;
    if (now.isBefore(lastPayment, 'day')) return 100;

    const total = validUntil.diff(lastPayment, 'days');
    const elapsed = now.diff(lastPayment, 'days');

    return Math.min(100, Math.max(0, (1 - elapsed / total) * 100));
}

export function MembershipStatusCard(props: MembershipStatusCardProps) {
    const navigate = useNavigate();

    const [validUntil, setValidUntil] = useState<Dayjs>();
    const [validSince, setValidSince] = useState<Dayjs>();
    const [isLoading, setIsLoading] = useState(false);

    const { detailsHref, userId } = props;

    useEffect(() => {
        const fetchMembershipData = async () => {
            if (!userId) return;

            try {
                setIsLoading(true);

                const userData = (await getUser(userId)).data;

                // console.log(userData);
                if (userData.membership) {
                    setValidUntil(dayjs(userData?.membership?.validUntil));
                    setValidSince(dayjs(userData?.membership?.validFrom));
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchMembershipData();
    }, [userId]);

    const showEmpty = !userId;

    return (
        <Card className='h-full flex-1'>
            <CardTitle title='Membership Status' icon='membership' />
            <Flex vertical justify='center' align='center' className='h-full'>
                {showEmpty ? (
                    <Empty description='No user'> </Empty>
                ) : (
                    <>
                        {isLoading ? (
                            <Spin></Spin>
                        ) : (
                            <>
                                <Row justify='center' className='p-small md:p-large'>
                                    <Progress
                                        type='circle'
                                        percent={getCirclePercentage(validSince, validUntil)}
                                        format={() => (
                                            <div className='text-font-secondary text-sm'>
                                                {getValidityLabel(validSince, validUntil)}
                                            </div>
                                        )}
                                        strokeColor={getCSSVariable('--color-primary')}
                                        size={125}
                                    />
                                </Row>
                                <Row justify='center' className='gap-x-large p-small'>
                                    <Col>
                                        <Statistic
                                            title='Last Payment'
                                            value={validSince?.format('DD.MM.YYYY') ?? '-'}
                                        />
                                    </Col>
                                    <Col>
                                        <Statistic
                                            title='Valid Until'
                                            value={validUntil?.format('DD.MM.YYYY') ?? '-'}
                                        />
                                    </Col>
                                </Row>
                            </>
                        )}
                    </>
                )}
            </Flex>
            <Space className='self-end'>
                {detailsHref && <Button onClick={() => navigate(detailsHref)}>Show Details</Button>}
            </Space>
        </Card>
    );
}
