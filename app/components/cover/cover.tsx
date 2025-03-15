import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import PhoneButton from '../phone-button/phone-button';

export default function Cover() {
    return (
        <div className="relative  flex flex-col items-center">
            <img
                className="md:w-full md:h-screen md:object-cover filter brightness-[0.7] z-[-1]"
                src="/images/cover-truck.jpg"
            />

            <div className="md:grid md:grid-cols-5 w-full text-center md:text-left md:pl-20 md:pb-20  font-['Rowdies'] text-white absolute bottom-5 left-1/2 transform -translate-x-1/2">
                <div className="md:col-span-3">
                    <h1 className="md:text-5xl text-lg drop-shadow-2xl font-bold md:pb-5">
                        Dépannage - Remorquage - Transport
                    </h1>
                    <h2 className="hidden md:block text-3xl md:pb-5">
                        Besoin d&lsquo;un dépannage ?
                    </h2>
                    <p className="hidden md:block text-3xl">
                        Vous pouvez nous contacter 24h/24 7j/7
                    </p>
                </div>
                <div className="hidden md:block md:col-span-2 md:flex md:justify-center md:margin-top-1/2 flex flex-col items-center z-0">
                    <PhoneButton textSize={'text-2xl'} phoneIconSize={25} />
                </div>
            </div>
        </div>
    );
}
