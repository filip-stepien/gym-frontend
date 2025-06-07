import { Empty, Spin } from 'antd';

type DataStateWrapperProps = {
    isLoading: boolean;
    isEmpty: boolean;
    children: React.ReactNode;
};

export function DataStateWrapper({ isLoading, isEmpty, children }: DataStateWrapperProps) {
    if (isLoading) return <Spin />;
    if (isEmpty) return <Empty description='No data' />;
    return <>{children}</>;
}
