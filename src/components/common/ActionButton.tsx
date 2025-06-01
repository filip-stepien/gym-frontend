import { Button } from 'antd';
import { Link } from 'react-router';

type ActionButtonProps = {
    href: string;
    primary?: boolean;
    danger?: boolean;
    children: string;
};

export function ActionButton(props: ActionButtonProps) {
    const { href, primary, danger, children } = props;
    return (
        <Link to={href}>
            <Button danger={danger} type={primary ? 'primary' : 'default'}>
                {children}
            </Button>
        </Link>
    );
}
