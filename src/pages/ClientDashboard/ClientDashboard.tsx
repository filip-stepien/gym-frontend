import { Flex } from 'antd';
import { Membership } from './Membership';
import { ProgressOverview } from './ProgressOverview';

export function ClientDashboard() {
    return (
        <Flex className="bg-layout flex-col gap-4">
            <ProgressOverview />
            <Membership />
        </Flex>
    );
}
