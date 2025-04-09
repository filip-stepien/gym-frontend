import { Dropdown } from 'antd';
import { Icon } from '../Icon';
import { CategoryMenu } from './CategoryMenu';
import type { ChangeEventHandler } from 'react';
import type { ItemType } from 'antd/es/menu/interface';

type CategoryDropdownProps = {
    category: string;
    menuItems: ItemType[];
    searchEnabled?: boolean;
    searchPlaceholder?: string;
    onSearchChange?: ChangeEventHandler<HTMLInputElement>;
};

export function CategoryDropdown(props: CategoryDropdownProps) {
    const { category, menuItems, searchEnabled, searchPlaceholder, onSearchChange } = props;
    return (
        <Dropdown.Button
            icon={<Icon icon='down' />}
            menu={{ items: menuItems }}
            className='w-fit'
            dropdownRender={menu => (
                <CategoryMenu
                    menu={menu}
                    searchEnabled={searchEnabled}
                    searchPlaceholder={searchPlaceholder}
                    onSearchChange={onSearchChange}
                />
            )}
        >
            {category}
        </Dropdown.Button>
    );
}
