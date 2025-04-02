import { Button } from 'antd';
import { useNavigate } from 'react-router';
import styles from './style.module.less';

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.test}>Hello World</div>
            <Button type='primary' onClick={() => navigate('/app')}>
                Go to page
            </Button>
        </>
    );
}
