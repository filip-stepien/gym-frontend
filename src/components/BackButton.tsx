import { useNavigate } from 'react-router';
import { Icon } from './Icon';

export function BackButton() {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate(-1);
    };

    return (
        <div
            onClick={onButtonClick}
            className='bg-card shadow-card relative grid h-[40px] w-[80px] cursor-pointer place-items-center'
        >
            <Icon icon='back' />
            <div className='bg-card absolute bottom-[-5px] h-[10px] w-full'></div>
        </div>
    );
}
