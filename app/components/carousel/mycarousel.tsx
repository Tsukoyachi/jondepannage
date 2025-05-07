import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

type MyCarouselProps = {
    isFrenchSelected: boolean;
};

export default function MyCarousel(props: MyCarouselProps) {
    const isLoading = false;

    return (
        <div className="pb-3">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                opts={{
                    loop: true,
                }}
                className="w-full md:w-2/5 md:mx-auto pl-4 pr-4 md:pl-0 md:pr-0"
            >
                <CarouselContent>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="relative w-full h-64 md:h-80 lg:h-96">
                                <Image
                                    src={`/images/carousel/image-${index}.webp`}
                                    alt={`carousel-image-${index}`}
                                    className="object-cover rounded-md"
                                    fill // Fills the container while maintaining aspect ratio
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <p className="text-center xxs:text-xl font-light">
                {props.isFrenchSelected
                    ? 'Notre expertise à votre service'
                    : 'Our expertise at your service'}
            </p>
        </div>
    );
}
