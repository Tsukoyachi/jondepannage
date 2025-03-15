import PhoneButton from '../phone-button/phone-button';

export default function SubCover() {
    return (
        <div className="md:hidden grid grid-cols-5 xxs:text-[10px] text-[8px] text-left bg-black font-light text-white flex flex-col items-center pl-5 pr-5 pt-2 pb-2">
            <div className="col-span-3">
                <p>Besoin d'un dépannage ?</p>
                <p>Vous pouvez nous contacter 24h/24 7j/7</p>
            </div>
            <div className="col-span-2 flex flex-col items-center">
                <PhoneButton textSize={'text-[10px]'} phoneIconSize={20} />
            </div>
        </div>
    );
}
