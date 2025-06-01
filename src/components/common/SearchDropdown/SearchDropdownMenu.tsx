import { cloneElement } from 'react';
import { Input, Space, theme } from 'antd';
import type { ChangeEventHandler, CSSProperties, ReactElement, ReactNode } from 'react';

const { useToken } = theme;
const { Search } = Input;

type SearchDropdownMenu = {
    menu: ReactNode;
    searchEnabled?: boolean;
    searchPlaceholder?: string;
    searchValue?: string;
    onSearchChange?: ChangeEventHandler<HTMLInputElement>;
};

const menuStyle: React.CSSProperties = {
    boxShadow: 'none'
};

export function SearchDropdownMenu(props: SearchDropdownMenu) {
    const { menu, searchEnabled, searchPlaceholder, searchValue, onSearchChange } = props;
    const { token } = useToken();

    const menuElement = cloneElement(menu as ReactElement<{ style: CSSProperties }>, {
        style: menuStyle
    });

    const dropdownContentStyle: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary
    };

    return (
        <div style={dropdownContentStyle}>
            {searchEnabled && (
                <Space className='p-small'>
                    <Search
                        value={searchValue}
                        onChange={onSearchChange}
                        placeholder={searchPlaceholder}
                    />
                </Space>
            )}
            {menuElement}
        </div>
    );
}
