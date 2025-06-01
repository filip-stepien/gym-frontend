import { CardTitle } from '@/components/common/CardTitle';
import { Card } from '@/components/layout/Card';
import { Flex, Button, Badge } from 'antd';

type HallInfoCardProps = {
    hallNumber?: string | number;
    halltype?: string;
    hallStatus?: string;
    hallDescription?: string;
};

export function HallInfoCard(props: HallInfoCardProps) {
    const { hallNumber, halltype, hallStatus, hallDescription } = props;

    let badgeStatus: 'success' | 'warning' | 'error' | 'default';

    switch (hallStatus) {
        case 'Available':
            badgeStatus = 'success';
            break;
        case 'Under Maintance':
            badgeStatus = 'warning';
            break;
        case 'Busy':
            badgeStatus = 'error';
            break;
        default:
            badgeStatus = 'default';
    }

    return (
        <Card>
            <CardTitle title='Hall Information' icon='info' />
            <Flex className='gap-layout flex-col md:flex-row' wrap>
                <Flex vertical className='gap-layout flex-1'>
                    <div>
                        <div className='text-font-primary text-sm font-semibold'>Number</div>
                        <div>{hallNumber}</div>
                    </div>

                    <div>
                        <div className='text-font-prima text-sm font-semibold'>Type</div>
                        <div>{halltype}</div>
                    </div>

                    <div>
                        <div className='text-font-prima text-sm font-semibold'>Status</div>
                        <Badge status={badgeStatus} text={hallStatus} />
                    </div>
                </Flex>
                <Flex className='pb-small flex-3'>
                    <div>
                        <div className='text-font-prima text-sm font-semibold'>Description</div>
                        <div className='mt-1 max-w-2xl text-justify'>{hallDescription}</div>
                    </div>
                </Flex>
            </Flex>
            <Flex className='gap-layout w-full' justify='end'>
                <Button type='primary'>Begin Maintenance</Button>
            </Flex>
        </Card>
    );
}
