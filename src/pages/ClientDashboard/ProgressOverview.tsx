import { RiseOutlined } from '@ant-design/icons';

// przeczytaj najpierw plik z membershipem
// bo tu podobne wskazówki

export function ProgressOverview() {
    return (
        // <Card>...</Card>
        // height na sztywno ❌
        <div className='bg-card flex h-44 w-1/2 flex-col p-5 shadow-md'>
            {/* <Flex>...</Flex> */}
            <div className='flex items-center gap-2'>
                {/* text-blue-500 -> text-primary */}
                <RiseOutlined className='text-lg text-blue-500' />
                {/* <Title>...</Title> */}
                <h2 className='text-lg font-semibold'>Progress Overview</h2>
            </div>

            {/* ten <Statistic> w biblotece nie ma tych trendów bo chyba usuneli */}
            {/* to można zrobić komponent oddzielny żeby to miał */}
            <div className='grid grid-cols-2 gap-y-1'>
                {/* <Statistic ... /> */}
                <div>
                    <p className='text-xs text-gray-500'>Weekly Total Sets</p>
                    <p className='mb-1 text-2xl font-bold'>86</p>
                </div>
                {/* <Statistic ... /> */}
                <div>
                    <p className='text-xs text-gray-500'>Weekly Session Volume</p>
                    <p className='mb-1 text-2xl font-bold'>32,893 kg</p>
                </div>
            </div>

            {/* <Grid>...</Grid> */}
            {/* dużo niepotrzebnych gapów chyba */}
            {/* te trendy też mogą być oddzielnym komponentem */}
            {/* i wtedy ten statistic nowy to będzie po prostu <Statistic /> i ten komponent (np. <Trend />) */}
            <div className='mt-auto grid grid-cols-2 gap-y-1'>
                {/* <Flex>...</Flex> */}
                <div className='flex items-center gap-1'>
                    <p className='text-xs text-gray-500'>since last week</p>
                    <p className='flex items-center text-xs font-bold text-green-500'>
                        {/* staraj sie zawsze owijać tekst w jakiś znacznik to później łatwo go formatować */}
                        {/* np. <span>10%</span> */}
                        {/* <Icon icon=... /> */}
                        <RiseOutlined className='mr-0.5' /> 10%
                    </p>
                </div>
                {/* <Flex>...</Flex>, text-gray -> text-neutral-..., text-green -> text-success */}
                <div className='flex items-center gap-1'>
                    <p className='text-xs text-gray-500'>since last week</p>
                    <p className='flex items-center text-xs font-bold text-green-500'>
                        {/* <Icon icon=... /> */}
                        <RiseOutlined className='mr-0.5' /> 12.5%
                    </p>
                </div>
            </div>
        </div>
    );
}
