import { Dropdown, Space } from 'antd';
import { Icon } from '@/components/Icon';
import type { ItemType } from 'antd/es/menu/interface';

type TimePeriodDropdownProps = {
    menuItems: ItemType[];
    label: string;
};

export function TimePeriodDropdown(props: TimePeriodDropdownProps) {
    const { menuItems, label } = props;
    return (
        <Dropdown className='select-none' menu={{ items: menuItems }}>
            <a onClick={e => e.preventDefault()}>
                <Space>
                    <span>{label}</span>
                    <Icon icon='dropdown' />
                </Space>
            </a>
        </Dropdown>
    );
}
