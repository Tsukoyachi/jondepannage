import { Mail, MapPinned, Phone } from 'lucide-react';

export default function ContactData() {
    return (
        <div className="flex flex-col items-center pt-3 space-y-3 bg-black text-white font-light pb-3 text-[10px] xs:text-[12px] md:text-[14px]">
            <a href="mailto:jondepannage@gmail.com" className="flex space-x-2 items-center">
                <Mail color="#c72e25" /> <p className="underline">jondepannage@gmail.com</p>
            </a>
            <div className="flex justify-around items-center w-full">
                <a href="tel:+33602758029" className="flex space-x-2 items-center">
                    <Phone color="#c72e25" /> <p>06 02 75 80 29</p>
                </a>
                <a
                    href="https://maps.app.goo.gl/KiWREEeiKjrTA2ZG9"
                    className="flex space-x-2 items-center"
                >
                    <MapPinned color="#c72e25" />
                    <div className="flex flex-col text-center">
                        <p>1100 Rte de Gréolières, </p>
                        <p>06480 La Colle-sur-Loup</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
