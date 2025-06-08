import { Dropdown as AntDropdown, Button, Space } from 'antd';
import { Icon } from '@/components/common/Icon';
import { useEffect, useState } from 'react';

type DropdownProps = {
    menuItems: { key: string; label: string }[];
    placeholder: string;
    onSelect?: (item: { key: string; label: string }) => void;
};

export function Dropdown(props: DropdownProps) {
    const { menuItems, placeholder, onSelect } = props;

    const initialLabel = menuItems?.at(0)?.label;
    const [selectedLabel, setSelectedLabel] = useState<string | null>(
        initialLabel ?? placeholder ?? null
    );

    useEffect(() => {
        setSelectedLabel(initialLabel ?? placeholder ?? null);
    }, [initialLabel, placeholder]);

    const handleMenuItemSelect = (key: string) => {
        const item = menuItems.find(item => item.key === key) ?? null;
        setSelectedLabel(item?.label ?? null);

        if (onSelect && item) {
            onSelect(item);
        }
    };

    return (
        <AntDropdown
            className='w-fit select-none'
            menu={{
                items: menuItems.map(item => ({
                    ...item,
                    onClick: info => handleMenuItemSelect(info.key)
                }))
            }}
        >
            <Button>
                <Space>
                    <span>{selectedLabel}</span>
                    <Icon icon='down' />
                </Space>
            </Button>
        </AntDropdown>
    );
}
