import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface PhoneButtonProps {
    textSize: string;
    phoneIconSize: number;
}

export default function PhoneButton(props: PhoneButtonProps) {
    return (
        <a href="tel:+33602758029">
            <Button
                variant="destructive"
                className={`${props.textSize} pl-2 pr-2 pt-0 pb-0 font-light`}
            >
                <Phone
                    className="my-0 p-0"
                    style={{
                        width: `${props.phoneIconSize}px`,
                        height: `${props.phoneIconSize}px`,
                    }}
                />
                06 02 75 80 29
            </Button>
        </a>
    );
}
