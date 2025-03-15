import { Separator } from '@/components/ui/separator';
import { Clock, MapPinned, User } from 'lucide-react';

export default function Quality() {
    return (
        <div className="text-center ">
            <ul className="font-light pt-5 inline-block space-y-2 md:hidden pb-3">
                <li className="flex items-center">
                    <Clock />
                    <p className="ml-2">Intervention de jour comme de nuit</p>
                </li>
                <li className="flex items-center">
                    <User />
                    <p className="ml-2">Dépanneur qualifié</p>
                </li>
                <li className="flex items-center">
                    <MapPinned />
                    <p className="ml-2">Disponible dans toute la côte d&lsquo;azur</p>
                </li>
            </ul>

            <div className="hidden md:flex space-x-64 justify-center pt-3 pb-3">
                <div className="flex">
                    <Clock />
                    <p className="ml-2">Intervention de jour comme de nuit</p>
                </div>
                <div className="flex">
                    <User />
                    <p className="ml-2">Dépanneur qualifié</p>
                </div>
                <div className="flex">
                    <MapPinned />
                    <p className="ml-2">Disponible dans toute la côte d&lsquo;azur</p>
                </div>
            </div>

            <Separator className="bg-slate-900 w-4/5 mx-auto mb-3" />
        </div>
    );
}
