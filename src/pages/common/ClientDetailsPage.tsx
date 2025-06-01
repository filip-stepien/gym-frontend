import { ClientDetailsCard, ClientDetailsValues } from '@/components/cards/ClientDetailsCard';
import { BackButton } from '@/components/layout/BackButton';
import { Flex } from 'antd';
import dayjs from 'dayjs';

const clientDetailsCardData = {
    firstName: 'John',
    lastName: 'Pork',
    email: 'john@pork.com',
    dateOfBirth: dayjs(),
    onEdit: (data: ClientDetailsValues) => {
        // PATCH...
        console.log(data);
    }
};

export function ClientDetailsPage() {
    return (
        <Flex vertical>
            <BackButton />
            <ClientDetailsCard {...clientDetailsCardData} />;
        </Flex>
    );
}
