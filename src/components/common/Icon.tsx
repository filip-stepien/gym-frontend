import * as Icons from '@ant-design/icons';
import { cloneElement, JSX } from 'react';

type IconProps = {
    icon: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

type IconMap = { [icon: string]: JSX.Element };

const icons: IconMap = {
    dashboard: <Icons.ProductOutlined />,
    progress: <Icons.SettingOutlined />,
    sessions: <Icons.CarryOutOutlined />,
    membership: <Icons.IdcardOutlined />,
    workout: <Icons.FireOutlined />,
    avatar: <Icons.UserOutlined />,
    more: <Icons.EllipsisOutlined />,
    emoji: <Icons.SmileOutlined />,
    send: <Icons.RightCircleFilled />,
    up: <Icons.CaretUpOutlined />,
    down: <Icons.DownOutlined />,
    flat: <Icons.MinusSquareOutlined />,
    dropdown: <Icons.DownOutlined />,
    status: <Icons.DashboardOutlined />,
    details: <Icons.ProfileOutlined />,
    calendar: <Icons.CalendarOutlined />,
    clock: <Icons.ClockCircleOutlined />,
    newworkout: <Icons.ImportOutlined />,
    clients: <Icons.UserOutlined />,
    requests: <Icons.QuestionCircleOutlined />,
    'training-halls': <Icons.DatabaseOutlined />,
    notifications: <Icons.MessageOutlined />,
    back: <Icons.ArrowLeftOutlined />,
    close: <Icons.CloseOutlined />,
    addavatar: <Icons.UserAddOutlined />,
    upload: <Icons.UploadOutlined />,
    tool: <Icons.ToolOutlined />,
    info: <Icons.InfoCircleOutlined />,
    creditcard: <Icons.CreditCardOutlined />,
    employees: <Icons.UsergroupAddOutlined />,
    menu: <Icons.MenuOutlined />
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
