import React from 'react';
import { SOCIAL_MEDIA_LINKS } from './constants';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; 2025 PI WORLD. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    {SOCIAL_MEDIA_LINKS.map(({ href, icon: Icon }, index) => (
                        <a
                            key={index}
                            href={href}
                            className="hover:text-yellow-400 transition"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;