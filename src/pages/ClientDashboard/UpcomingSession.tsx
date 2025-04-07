import { Card } from '../../components/Card';
import { CardTitle } from '../../components/CardTitle';
import { Flex, Button, Calendar, Pagination } from 'antd';

export function UpcomingSession() {
    return (
        <Card>
            <CardTitle title='Upcoming session' icon='sessions' />
            <Calendar />
            <Flex>
                <Pagination
                    defaultCurrent={1}
                    total={50}
                    showSizeChanger={false}
                    pageSize={10}
                    className='w-full'
                    align='center'
                />
                <Button type='primary' className='primary'>
                    + New Session
                </Button>
                <Button>Show Details</Button>
            </Flex>
        </Card>
    );
}
