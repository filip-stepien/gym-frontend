import { Drawer, Flex } from 'antd';
import { Icon } from '../common/Icon';
import { useState } from 'react';
import { Menu } from './Menu';
import { UserRole } from '@/roles';

type HamburgerMenuProps = {
    className?: string;
    role: UserRole;
};

export function HamburgerMenu({ className, role }: HamburgerMenuProps) {
    const [opened, setOpened] = useState(false);

    const openDrawer = () => {
        setOpened(true);
    };

    const closeDrawer = () => {
        setOpened(false);
    };

    return (
        <>
            <Flex
                onClick={openDrawer}
                align='center'
                justify='center'
                className={`bg-card shadow-card aspect-square w-10 cursor-pointer ${className}`}
            >
                <Icon icon='menu' className='text-xl' />
            </Flex>
            <Drawer
                title='Big Gain'
                placement='left'
                closable={true}
                onClose={closeDrawer}
                open={opened}
                width={250}
                styles={{
                    body: {
                        padding: 0
                    }
                }}
            >
                <Menu role={role} showLogo={false} className='w-full' onOptionClick={closeDrawer} />
            </Drawer>
        </>
    );
}
