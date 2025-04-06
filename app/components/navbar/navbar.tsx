import Image from 'next/image';

interface NavbarProps {
    isFrenchSelected: boolean;
    selectFrench: () => void;
    selectEnglish: () => void;
}

export default function Navbar(props: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between mx-auto p-2 border-b border-black bg-white z-10">
            <div className="flex items-center space-x-3">
                <div className="relative w-16 md:w-24 h-8 md:h-12">
                    <Image src="/images/logo.png" alt="logo" className="object-contain" fill />
                </div>
                <p className="font-light md:text-2xl">JonDepannage</p>
            </div>
            <div className="flex items-center space-x-3 md:space-x-6 ml-auto">
                {' '}
                {/* Ensures vertical centering */}
                {/* French Flag */}
                <div
                    className="relative w-10 h-10 cursor-pointer flex items-center justify-center" // Added flex and items-center/justify-center
                    onClick={props.selectFrench}
                >
                    <Image
                        src="/images/french-flag.jpg"
                        alt="french"
                        width={40} // Fixed width (4rem)
                        height={40} // Fixed height (4rem)
                        className={`object-contain ${props.isFrenchSelected ? 'border-4 border-blue-500' : ''}`}
                    />
                </div>
                {/* English Flag */}
                <div
                    className="relative w-10 h-10 cursor-pointer flex items-center justify-center" // Added flex and items-center/justify-center
                    onClick={props.selectEnglish}
                >
                    <Image
                        src="/images/english-flag.jpg"
                        alt="english"
                        width={40} // Fixed width (4rem)
                        height={40} // Fixed height (4rem)
                        className={`object-contain ${!props.isFrenchSelected ? 'border-4 border-blue-500' : ''}`}
                    />
                </div>
            </div>
        </nav>
    );
}
