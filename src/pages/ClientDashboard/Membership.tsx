import { Button, Flex, Progress, Typography } from 'antd';
import { IdcardOutlined } from '@ant-design/icons';
import { Card } from '../../components/Card';

const { Title } = Typography;

// skonfiguruj sobie Prettiera żeby ci formatował np. przy zapisaniu pliku
// to ci automatycznie będzie czytać config .prettierrc
// i np. będzie robic wcięcia na 4 spacje
// bo jak plik jest niesformatowany to mi go automatycznie sformatuje i później w historii edycji na gicie robi się syf

export function Membership() {
    return (
        // na te wszystkie panele dobrze zrobić komponent żeby paddingi i gapy były takie same
        // ⬇️⬇️⬇️
        <Card>
            {/* na taki tytuł z ikoną też dobrze zrobić komponent bo to będzie często używane */}
            <Flex className='gap-small' align='center'>
                {/* zrobiłem komponent Icon żeby ikonki były w miare spójne */}
                {/* trzeba tylko dodać element w komponencie */}
                {/* <Icon icon='membership' /> */}
                <IdcardOutlined className='text-lg' />

                {/* komponent z antd = mniej pisania klas */}
                <Title level={4}>Membership</Title>
            </Flex>

            {/* grid ✅✅✅ */}
            {/* ale znowu, w tym antd jest <Grid>...</Grid> to mniej pisania klas i czytelniej */}
            <div className='grid grid-cols-2'>
                {/* tutaj do tego jest gotowy komponent */}
                {/* <Statistic title='Type' value='Standard' /> */}
                <div className='flex flex-col justify-center'>
                    {/* kolor staraj sie trzymać to co jest w mockupie */}
                    {/* zamiast gray-*ileś* to jest normalnie text-neutral-5 */}
                    {/* a jak brakuje to można dodać w głównym cssie */}
                    <p className='text-sm text-gray-500'>Type</p>
                    <p className='text-3xl'>Standard</p>
                </div>

                {/* <Flex>...</Flex> */}
                <div className='justify-content flex items-center'>
                    {/* to można do oddzielnego komponentu */}
                    <Progress
                        type='circle'
                        percent={75}
                        // ta funkcja renderuje normalnie komponent
                        // wystarczy wrzucić jakiś div z tekstem i go poformatować
                        // żeby był mniejszy i miał inny kolor
                        format={() => '30 days left'}
                        // też przy okazji patrze że można pomyśleć nad plikiem gdzie będą kolory w hexie
                        // żeby sobie pobierać do kolorwania jakiś wykresów itd.
                        strokeColor='#007bff'
                        size={125}
                    />
                </div>

                {/* <Flex>...</Flex> */}
                <div className='col-5 flex flex-col pt-3'>
                    <div>
                        {/* <Statistic ... />*/}
                        <p className='text-m text-gray-500'>Last Payment</p>
                        <p className='text-xl font-semibold'>01.01.2025</p>

                        {/* <Statistic ... />*/}
                        <p className='text-m text-gray-500'>Valid Until</p>
                        <p className='text-xl font-semibold'>20.02.2025</p>
                    </div>
                </div>
                {/* <Space>...</Space> albo <Flex>...</Flex> */}
                {/* i raczej gapy i paddingi z jakąś konkretną wartością to tak w ostateczności */}
                {/* lepiej używać spacingu który jest w motywie bo później łatwo to zmienić w razie czego */}
                {/* czyli gap-2 -> gap-small */}
                <div className='col-5 flex items-center justify-end gap-2'>
                    <Button type='primary' className='bg-blue-500'>
                        Extend
                    </Button>
                    <Button>Show Details</Button>
                </div>
            </div>
        </Card>
    );
}
