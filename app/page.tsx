'use client';

import Navbar from './components/navbar/navbar';
import Cover from './components/cover/cover';
import SubCover from './components/sub-cover/sub-cover';
import Quality from './components/quality/quality';
import MyCarousel from './components/carousel/mycarousel';
import ContactData from './components/contact-data/contact-data';
import { useState } from 'react';

export default function Page() {
    const [isFrenchSelected, setIsFrenchSelected] = useState(true);

    return (
        <div className="min-h-screen flex flex-col">
            <div>
                <Navbar
                    isFrenchSelected={isFrenchSelected}
                    selectFrench={() => {
                        setIsFrenchSelected(true); // Update state to French
                        console.log(isFrenchSelected);
                    }}
                    selectEnglish={() => {
                        setIsFrenchSelected(false); // Update state to English
                        console.log(isFrenchSelected);
                    }}
                />
                <Cover isFrenchSelected={isFrenchSelected} />
                <SubCover isFrenchSelected={isFrenchSelected} />
                <Quality isFrenchSelected={isFrenchSelected} />
            </div>
            <div className="flex-grow flex items-center justify-center">
                <div className="w-full">
                    <MyCarousel isFrenchSelected={isFrenchSelected} />
                </div>
            </div>
            <ContactData />
        </div>
    );
}
