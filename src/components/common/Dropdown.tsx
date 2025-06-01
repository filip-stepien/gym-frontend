import { Dropdown as AntDropdown, Space } from 'antd';
import { Icon } from '@/components/common/Icon';
import { useState } from 'react';

type DropdownProps = {
    menuItems: { key: string; label: string }[];
    placeholder: string;
    onSelect?: (item: { key: string; label: string }) => void;
};

export function Dropdown(props: DropdownProps) {
    const { menuItems, placeholder, onSelect } = props;
    const [selectedLabel, setSelectedLabel] = useState<string | null>(placeholder);

    const handleMenuItemSelect = (key: string) => {
        const item = menuItems.find(item => item.key === key) ?? null;
        setSelectedLabel(item?.label ?? null);

        if (onSelect && item) {
            onSelect(item);
        }
    };

    return (
        <AntDropdown
            className='select-none'
            menu={{
                items: menuItems.map(item => ({
                    ...item,
                    onClick: info => handleMenuItemSelect(info.key)
                }))
            }}
        >
            <a onClick={e => e.preventDefault()}>
                <Space>
                    <span>{selectedLabel}</span>
                    <Icon icon='dropdown' />
                </Space>
            </a>
        </AntDropdown>
    );
}
