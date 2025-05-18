import { Dropdown } from 'antd';
import { Icon } from '../Icon';
import { SearchDropdownMenu } from './SearchDropdownMenu';
import { ChangeEvent, useState } from 'react';

type SearchDropdownProps = {
    placeholder: string;
    menuItems: { label: string; key: string }[];
    searchPlaceholder?: string;
    onSelect?: (item: { label: string; key: string }) => void;
};

export function SearchDropdown(props: SearchDropdownProps) {
    const { placeholder, menuItems, searchPlaceholder, onSelect } = props;
    const [selectedLabel, setSelectedLabel] = useState<string | null>(placeholder);
    const [search, setSearch] = useState('');
    const [displayedMenuItems, setDisplayedMenuItems] = useState<{ label: string; key: string }[]>(
        []
    );

    const handleMenuItemClick = ({ key }: { key: string }) => {
        const label = menuItems.find(item => item.key == key)?.label as string;
        setSelectedLabel(label);

        if (onSelect) {
            onSelect({ label, key });
        }
    };

    const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        const searchInput = event.target.value;
        const filteredItems = menuItems.filter(item =>
            item.label.toLowerCase().startsWith(searchInput)
        );

        setDisplayedMenuItems(searchInput ? filteredItems : []);
        setSearch(searchInput);
    };

    const handleMenuOpenChange = () => {
        setSearch('');
        setDisplayedMenuItems([]);
    };

    return (
        <Dropdown.Button
            icon={<Icon icon='down' />}
            menu={{
                items: displayedMenuItems.map(item => ({ ...item, onClick: handleMenuItemClick }))
            }}
            dropdownRender={menu => (
                <SearchDropdownMenu
                    menu={menu}
                    searchEnabled={true}
                    searchValue={search}
                    searchPlaceholder={searchPlaceholder ?? 'Search...'}
                    onSearchChange={handleSearchInput}
                />
            )}
            onOpenChange={handleMenuOpenChange}
        >
            {selectedLabel}
        </Dropdown.Button>
    );
}
