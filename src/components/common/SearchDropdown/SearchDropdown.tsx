import { Button, Dropdown, Space } from 'antd';
import { Icon } from '../Icon';
import { SearchDropdownMenu } from './SearchDropdownMenu';
import { ChangeEvent, useEffect, useState } from 'react';

type SearchDropdownProps = {
    placeholder?: string;
    menuItems?: { label: string; key: string }[];
    searchPlaceholder?: string;
    onSelect?: (item: { label: string; key: string }) => void;
};

export function SearchDropdown(props: SearchDropdownProps) {
    const { placeholder, menuItems, searchPlaceholder, onSelect } = props;
    const initialMenuItems = menuItems?.slice(0, 3).map(({ label, key }) => ({ label, key })) ?? [];

    const initialLabel = menuItems?.at(0)?.label;
    const [selectedLabel, setSelectedLabel] = useState<string | null>(
        initialLabel ?? placeholder ?? null
    );
    const [search, setSearch] = useState('');
    const [displayedMenuItems, setDisplayedMenuItems] =
        useState<{ label: string; key: string }[]>(initialMenuItems);

    useEffect(() => {
        setSelectedLabel(initialLabel ?? placeholder ?? null);
    }, [initialLabel, placeholder]);

    const handleMenuItemClick = ({ key }: { key: string }) => {
        const label = menuItems?.find(item => item.key == key)?.label as string;
        setSelectedLabel(label);

        if (onSelect) {
            onSelect({ label, key });
        }
    };

    const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        const searchInput = event.target.value;
        const filteredItems =
            menuItems?.filter(item => item.label.toLowerCase().startsWith(searchInput)) ?? [];

        setDisplayedMenuItems(searchInput ? filteredItems : []);
        setSearch(searchInput);
    };

    const handleMenuOpenChange = () => {
        setSearch('');
        setDisplayedMenuItems(initialMenuItems);
    };

    return (
        <Dropdown
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
            className='w-fit'
        >
            <Button>
                <Space>
                    <span>{selectedLabel}</span>
                    <Icon icon='down' />
                </Space>
            </Button>
        </Dropdown>
    );
}
