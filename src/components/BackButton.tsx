import { useNavigate } from 'react-router';
import { Icon } from './Icon';
import { Flex, Typography } from 'antd';

const { Title } = Typography;

export function BackButton() {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate(-1);
    };

    return (
        <div
            onClick={onButtonClick}
            className='bg-card shadow-card md:shadow-card bg-bue mb-small relative grid h-[40px] w-full cursor-pointer place-items-center md:mb-0 md:w-[80px] md:border-0'
        >
            <Flex align='center' gap='small'>
                <Icon icon='back' />
                <Title level={5} className='block md:hidden'>
                    Back to Previous
                </Title>
            </Flex>
            <div className='bg-card absolute bottom-[-5px] hidden h-[10px] w-full md:block'></div>
        </div>
    );
}
