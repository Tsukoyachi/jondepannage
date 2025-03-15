'use client';

import Navbar from './components/navbar/navbar';
import Cover from './components/cover/cover';
import SubCover from './components/sub-cover/sub-cover';
import Quality from './components/quality/quality';
import MyCarousel from './components/carousel/mycarousel';
import ContactData from './components/contact-data/contact-data';

export default function Page() {
    return (
        <>
            <Navbar />
            <Cover />
            <SubCover />
            <Quality />
            <MyCarousel />
            <ContactData />
        </>
    );
}
