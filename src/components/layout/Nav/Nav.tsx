import { Flex } from 'antd';
import { BreadCrumb } from './BreadCrumb';
import { UserBadge } from './UserBadge';
import { LogoutButton } from './LogoutButton';
// import ApiTestButton from '../ApiTestButton';

type NavProps = {
    className?: string;
};

export function Nav({ className }: NavProps) {
    return (
        <Flex align='center' className={`bg-layout justify-end sm:justify-between ${className}`}>
            <BreadCrumb className='hidden sm:block' />
            <Flex gap='middle'>
                <UserBadge className='hidden sm:flex' />
                {/* <ApiTestButton /> */}
                <LogoutButton />
            </Flex>
        </Flex>
    );
}
