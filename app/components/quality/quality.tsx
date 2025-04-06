import { Separator } from '@/components/ui/separator';
import { Clock, MapPinned, User } from 'lucide-react';

interface QualityProps {
    isFrenchSelected: boolean;
}

export default function Quality(props: QualityProps) {
    return (
        <div className="text-center ">
            <ul className="font-light pt-5 inline-block space-y-2 md:hidden pb-3">
                <li className="flex items-center">
                    <Clock />
                    <p className="ml-2">
                        {props.isFrenchSelected
                            ? 'Intervention de jour comme de nuit'
                            : 'Day and night intervention'}
                    </p>
                </li>
                <li className="flex items-center">
                    <User />
                    <p className="ml-2">
                        {props.isFrenchSelected ? 'Dépanneur qualifié' : 'Qualified mechanic'}
                    </p>
                </li>
                <li className="flex items-center">
                    <MapPinned />
                    <p className="ml-2">
                        {props.isFrenchSelected
                            ? "Disponible dans toute la côte d'azur"
                            : "Available across the entire Côte d'Azur"}
                    </p>
                </li>
            </ul>

            <div className="hidden md:flex space-x-64 justify-center pt-3 pb-3">
                <div className="flex">
                    <Clock />
                    <p className="ml-2">
                        {props.isFrenchSelected
                            ? 'Intervention de jour comme de nuit'
                            : 'Day and night intervention'}
                    </p>
                </div>
                <div className="flex">
                    <User />
                    <p className="ml-2">
                        {props.isFrenchSelected ? 'Dépanneur qualifié' : 'Qualified mechanic'}
                    </p>
                </div>
                <div className="flex">
                    <MapPinned />
                    <p className="ml-2">
                        {props.isFrenchSelected
                            ? "Disponible dans toute la côte d'azur"
                            : "Available across the entire Côte d'Azur"}
                    </p>
                </div>
            </div>

            <Separator className="bg-slate-900 w-4/5 mx-auto mb-3" />
        </div>
    );
}
