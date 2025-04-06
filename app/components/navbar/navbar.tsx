import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex flex-wrap items-center justify-between mx-auto p-2 border-b border-black bg-white z-10">
            <div className="flex items-center space-x-3">
                <div className="relative w-16 md:w-24 h-8 md:h-12">
                    <Image src="/images/logo.png" alt="logo" className="object-contain" fill />
                </div>
                <p className="font-light md:text-2xl">JonDepannage</p>
            </div>
            <div className="flex items-center space-x-3">
                <div className="relative w-8 h-8">
                    <Image
                        src="/images/french-flag.jpg"
                        alt="french"
                        className="object-contain"
                        fill
                    />
                </div>
                <div className="relative w-8 h-8">
                    <Image
                        src="/images/english-flag.jpg"
                        alt="english"
                        className="object-contain"
                        fill
                    />
                </div>
            </div>
        </nav>
    );
}
