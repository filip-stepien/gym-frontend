import { Menu as AntMenu, Flex } from 'antd';
import { useLocation, useNavigate } from 'react-router';
import { UserRole, rolesConfig } from '@/roles';
import { Icon } from '../common/Icon';
import { Logo } from '../common/Logo';
import type { MenuProps as AntMenuProps } from 'antd';

type MenuProps = {
    role?: UserRole;
    showLogo?: boolean;
    className?: string;
    onOptionClick?: AntMenuProps['onClick'];
};

type MenuItem = Required<AntMenuProps>['items'][number];

function formatMenuLabel(menuOption: string) {
    return menuOption
        .split('-')
        .map(e => e.charAt(0).toUpperCase() + e.slice(1))
        .join(' ');
}

export function Menu(props: MenuProps) {
    const { role, showLogo = true, className, onOptionClick = () => {} } = props;
    const navigate = useNavigate();
    const location = useLocation();

    // if account type is not set, assign an empty array to not create any menu items
    const options = role ? rolesConfig[role].menuOptions : [];

    // create menu items based on available options
    const menuItems: MenuItem[] = options.map(item => ({
        key: item, // use the option as a menu item key
        label: formatMenuLabel(item), // capitalize the option display name
        icon: <Icon icon={item} /> // assign icon with source equal to option
    }));

    // use the option as a subpage name to navigate to after clicking
    const onMenuItemClick: AntMenuProps['onClick'] = e => {
        navigate(e.key);
        onOptionClick(e);
    };

    return (
        <Flex vertical className={className}>
            {showLogo && <Logo className='m-auto w-5/8 pt-8 pb-8' />}
            <AntMenu
                defaultSelectedKeys={[location.pathname.split('/').at(-1) ?? '']}
                mode='vertical'
                items={menuItems}
                className='h-full'
                onClick={onMenuItemClick}
            />
        </Flex>
    );
}
