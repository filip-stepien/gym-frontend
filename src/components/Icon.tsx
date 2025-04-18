import {
    CaretDownOutlined,
    CaretUpOutlined,
    CarryOutOutlined,
    DashboardOutlined,
    DownOutlined,
    EllipsisOutlined,
    FireOutlined,
    IdcardOutlined,
    MinusSquareOutlined,
    ProductOutlined,
    ProfileOutlined,
    RightCircleFilled,
    SettingOutlined,
    SmileOutlined,
    UserOutlined,
    CalendarOutlined,
    ClockCircleOutlined
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
    send: <RightCircleFilled />,
    up: <CaretUpOutlined />,
    down: <CaretDownOutlined />,
    flat: <MinusSquareOutlined />,
    dropdown: <DownOutlined />,
    status: <DashboardOutlined />,
    details: <ProfileOutlined />,
    calendar: <CalendarOutlined />,
    clock: <ClockCircleOutlined />
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
