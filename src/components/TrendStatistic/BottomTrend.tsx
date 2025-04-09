import { Space } from 'antd';
import { Icon } from '@/components/Icon';
import { getCSSVariable } from '@/utils/getCSSVariable';
import type { valueType } from 'antd/es/statistic/utils';

export type TrendDirection = 'up' | 'down' | 'flat';

type BottomTrendProps = {
    title: string;
    value: valueType;
    direction: TrendDirection;
};

type TrendStyleDetails = {
    [key in TrendDirection]: {
        icon: string | null;
        textColor: string;
    };
};

const trendStyleDetails: TrendStyleDetails = {
    up: {
        icon: 'up',
        textColor: getCSSVariable('--color-success')
    },
    down: {
        icon: 'down',
        textColor: getCSSVariable('--color-danger')
    },
    flat: {
        icon: null,
        textColor: getCSSVariable('--color-font-secondary')
    }
};

export function BottomTrend(props: BottomTrendProps) {
    const { title, value, direction } = props;
    const { icon, textColor } = trendStyleDetails[direction];

    return (
        <Space size='small'>
            <span className='text-font-secondary'>{title}</span>
            {icon && <Icon icon={icon} style={{ color: textColor }} />}
            <span style={{ color: textColor }}>{value}</span>
        </Space>
    );
}
