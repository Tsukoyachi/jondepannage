import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

export default function MyCarousel() {
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
                            <Image
                                src={`/images/carousel/image-${index}.jpg`}
                                alt={`carousel-image-${index}`}
                                className="md:basis-1/2 lg:basis-1/3 rounded-md"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <p className="text-center xxs:text-xl font-light">Notre expertise à votre service</p>
        </div>
    );
}
