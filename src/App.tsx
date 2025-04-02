import { Button } from 'antd';
import { useNavigate } from 'react-router';

export default function App() {
    const navigate = useNavigate();
    return (
        <Button type='primary' onClick={() => navigate('/')}>
            Return to home
        </Button>
    );
}
