export type ImageProps = {
    src: string;
    width: string | number;
    height: string | number;
    objectFit?: 'cover' | 'contain' | 'none';
};

function ensurePx(dimension: string | number) {
    return typeof dimension === 'string' ? dimension : dimension + 'px';
}

export function Image(props: ImageProps) {
    const { src, width, height, objectFit = 'cover' } = props;

    return (
        <div style={{ width: ensurePx(width), height: ensurePx(height) }}>
            <img
                src={src}
                alt='membership picture'
                className='h-full w-full'
                style={{ objectFit: objectFit }}
            />
        </div>
    );
}
