import { Flex } from 'antd';
import { BreadCrumb } from './BreadCrumb';
import { UserBadge } from './UserBadge';
import { LogoutButton } from './LogoutButton';

export function Nav() {
    return (
        <Flex justify='space-between' align='center' className='bg-layout'>
            <BreadCrumb />
            <Flex gap='middle'>
                <UserBadge />
                <LogoutButton />
            </Flex>
        </Flex>
    );
}
