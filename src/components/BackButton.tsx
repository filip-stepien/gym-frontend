import { useNavigate } from 'react-router';
import { Icon } from './Icon';

export function BackButton() {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate(-1);
    };

    return (
        <div className='bg-card shadow-card grid h-[40px] w-[80px] cursor-pointer place-items-center'>
            <Icon onClick={onButtonClick} icon='back' />
        </div>
    );
}
