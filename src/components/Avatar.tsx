import { Avatar as AntAvatar, Badge } from 'antd';
import { Icon } from './Icon';

type AvatarProps = {
    online?: boolean;
    size?: 'small' | 'default' | 'large';
};

export function Avatar(props: AvatarProps) {
    const avatar = (
        <AntAvatar
            shape='square'
            size={props.size ?? 'large'}
            icon={<Icon icon='avatar' />}
            className='rounded-none'
        />
    );

    return props.online ? (
        <Badge dot status='success'>
            {avatar}
        </Badge>
    ) : (
        avatar
    );
}
