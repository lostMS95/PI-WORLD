import React from 'react';
import { Link } from 'react-router-dom';

export const LogoSection = () => (
    <h1 className="text-3xl font-extrabold tracking-tight">
        <Link
            to="/public"
            className="text-purple-600 hover:text-purple-800 transition duration-300"
        >
            PI WORLD
        </Link>
    </h1>
);