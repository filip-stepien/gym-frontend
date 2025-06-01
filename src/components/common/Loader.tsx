import { Flex, Spin } from 'antd';

export function Loader() {
    return (
        <Flex vertical className='h-screen w-screen' justify='center' align='center'>
            <Spin tip='Loading...' size='large'>
                <div className='p-20' />
            </Spin>
        </Flex>
    );
}
