import { Dropdown } from 'antd';
import { Icon } from '../Icon';
import { SearchDropdownMenu } from './SearchDropdownMenu';
import { type ChangeEventHandler } from 'react';
import type { ItemType } from 'antd/es/menu/interface';

type SearchDropdownProps = {
    category: string;
    menuItems: ItemType[];
    className?: string;
    searchEnabled?: boolean;
    searchPlaceholder?: string;
    onSearchChange?: ChangeEventHandler<HTMLInputElement>;
};

export function SearchDropdown(props: SearchDropdownProps) {
    const { category, className, menuItems, searchEnabled, searchPlaceholder, onSearchChange } =
        props;

    return (
        <Dropdown.Button
            icon={<Icon icon='down' />}
            menu={{ items: menuItems }}
            className={className}
            dropdownRender={menu => (
                <SearchDropdownMenu
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
