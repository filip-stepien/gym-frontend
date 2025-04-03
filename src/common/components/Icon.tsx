import {
    CarryOutOutlined,
    FireOutlined,
    IdcardOutlined,
    ProductOutlined,
    SettingOutlined
} from '@ant-design/icons';
import { JSX } from 'react';

type IconProps = { icon: string };
type IconMap = { [icon: string]: JSX.Element };

const icons: IconMap = {
    dashboard: <ProductOutlined />,
    progress: <SettingOutlined />,
    sessions: <CarryOutOutlined />,
    membership: <IdcardOutlined />,
    workout: <FireOutlined />
};

export default function Icon(props: IconProps) {
    const iconName = props.icon;

    if (!Object.keys(icons).find(key => key === iconName)) {
        console.error(`Icon \`${iconName}\` not found!`);
    }

    return icons[iconName];
}
