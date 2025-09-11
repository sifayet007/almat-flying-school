import assets from '@/assets';
import React from 'react';

const Footer = () => {
    return (
        <div style={{
            backgroundImage: `url(${assets.footerimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <h1>Footer </h1>
        </div>
    );
};

export default Footer;