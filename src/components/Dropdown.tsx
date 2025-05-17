import { Dropdown as AntDropdown, Space } from 'antd';
import { Icon } from '@/components/Icon';
import type { ItemType } from 'antd/es/menu/interface';

type DropdownProps = {
    menuItems: ItemType[];
    label: string;
};

export function Dropdown(props: DropdownProps) {
    const { menuItems, label } = props;
    return (
        <AntDropdown className='select-none' menu={{ items: menuItems }}>
            <a onClick={e => e.preventDefault()}>
                <Space>
                    <span>{label}</span>
                    <Icon icon='dropdown' />
                </Space>
            </a>
        </AntDropdown>
    );
}
