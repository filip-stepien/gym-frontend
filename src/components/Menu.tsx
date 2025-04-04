import { Menu as AntMenu, Flex } from 'antd';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { useNavigate } from 'react-router';
import type { MenuProps as AntMenuProps } from 'antd';

type AccountType = 'manager' | 'client' | 'coach' | 'employee';
type MenuProps = { accountType?: AccountType };
type MenuOptionsMap = { [key in AccountType]: string[] };
type MenuItem = Required<AntMenuProps>['items'][number];

// available menu options for each account type
const menuOptions: MenuOptionsMap = {
    client: ['dashboard', 'progress', 'sessions', 'membership', 'workout'],
    manager: [],
    coach: [],
    employee: []
};

export function Menu(props: MenuProps) {
    const navigate = useNavigate();
    const accountType = props.accountType;

    // if account type is not set, assign an empty array to not create any menu items
    const options = accountType ? menuOptions[accountType] : [];

    // create menu items based on available options
    const menuItems: MenuItem[] = options.map(item => ({
        key: item, // use the option as a menu item key
        label: item.charAt(0).toUpperCase() + item.slice(1), // capitalize the option display name
        icon: <Icon icon={item} /> // assign icon with source equal to option
    }));

    // use the option as a subpage name to navigate to after clicking
    const onMenuItemClick: AntMenuProps['onClick'] = e => {
        navigate(e.key);
    };

    return (
        <Flex vertical>
            <Logo className='m-auto w-5/8 pt-8 pb-8' />
            <AntMenu
                defaultSelectedKeys={['dashboard']}
                mode='vertical'
                items={menuItems}
                className='h-full'
                onClick={onMenuItemClick}
            />
        </Flex>
    );
}
