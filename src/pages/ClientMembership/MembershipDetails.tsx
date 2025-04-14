import { Card } from '@/components/Card';
import { CardTitle } from '@/components/CardTitle';
import { Badge, Descriptions, Button, Space, Modal } from 'antd';
import dayjs from 'dayjs';
import type { DescriptionsProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { useState } from 'react';

export type MembershipDetailsProps = {
    active: boolean;
    type: string;
    paymentMethod: string;
    joinDate: Dayjs;
    validUntil: Dayjs;
    lastPayment: Dayjs;
};

function formatDate(date: Dayjs) {
    return dayjs(date).format('DD.MM.YYYY HH:mm');
}

export function MembershipDetails(props: MembershipDetailsProps) {
    const [modalOpened, setModalOpened] = useState(false);

    const items: DescriptionsProps['items'] = [
        {
            key: 'status',
            label: 'Status',
            children: (
                <Badge
                    status={props.active ? 'success' : 'error'}
                    text={props.active ? 'Active' : 'Inactive'}
                />
            ),
            span: 3
        },
        {
            key: 'type',
            label: 'Type',
            children: props.type
        },
        {
            key: 'payment_method',
            label: 'Payment Method',
            span: 2,
            children: props.paymentMethod
        },
        {
            key: 'join_date',
            label: 'Join Date',
            children: formatDate(props.joinDate)
        },
        {
            key: 'valid_until',
            label: 'Valid Until',
            children: formatDate(props.validUntil)
        },
        {
            key: 'last_payment',
            label: 'Last Payment',
            children: formatDate(props.lastPayment)
        }
    ];

    const handleModalOk = () => {
        setModalOpened(false);
    };

    const handleModalCancel = () => {
        setModalOpened(false);
    };

    const handleMembershipCancelButtonClick = () => {
        setModalOpened(true);
    };

    return (
        <>
            <Modal
                title='Membership Cancellation'
                open={modalOpened}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
            >
                <span>Are you sure you want to request member cancellation?</span>
                <br />
                <span>This operation cannot be undone.</span>
            </Modal>
            <Card>
                <CardTitle title='Details' icon='details' />
                <Descriptions bordered items={items} className='py-small' />
                <Space className='flex justify-end'>
                    <Button danger onClick={handleMembershipCancelButtonClick}>
                        Cancel Membership
                    </Button>
                    <Button>Edit Details</Button>
                    <Button type='primary'>Renew</Button>
                </Space>
            </Card>
        </>
    );
}
