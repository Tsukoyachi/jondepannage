export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex flex-wrap items-center justify-between mx-auto p-2 border-b border-black bg-white">
            <div className="flex items-center space-x-3">
                <img src="/images/logo.png" className="w-16 md:w-24" />
                <p className="font-light md:text-2xl">JonDepannage</p>
            </div>
            <div className="flex items-center space-x-3">
                <img src="/images/french-flag.jpg" className="w-8" />
                <img src="/images/english-flag.jpg" className="w-8" />
            </div>
        </nav>
    );
}
