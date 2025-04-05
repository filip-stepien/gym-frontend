import {
    CarryOutOutlined,
    EllipsisOutlined,
    FireOutlined,
    IdcardOutlined,
    ProductOutlined,
    RightCircleFilled,
    SettingOutlined,
    SmileOutlined,
    UserOutlined
} from '@ant-design/icons';
import { cloneElement, JSX } from 'react';

type IconProps = {
    icon: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

type IconMap = { [icon: string]: JSX.Element };

const icons: IconMap = {
    dashboard: <ProductOutlined />,
    progress: <SettingOutlined />,
    sessions: <CarryOutOutlined />,
    membership: <IdcardOutlined />,
    workout: <FireOutlined />,
    avatar: <UserOutlined />,
    more: <EllipsisOutlined />,
    emoji: <SmileOutlined />,
    send: <RightCircleFilled />
};

export function Icon(props: IconProps) {
    const { icon, className, style, onClick } = props;

    if (!Object.keys(icons).find(key => key === icon)) {
        console.error(`Icon \`${icon}\` not found!`);
    }

    return cloneElement(icons[icon], {
        onClick,
        style,
        className
    });
}
