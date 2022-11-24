import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import'./Header.css';
const Header = () => {
    return (
        <div>
            <h1>T-Shirt Mania </h1>
            <p>Shopping Our Best Product.</p>
            <nav className='header-nav'>
                <CustomLink to ="/">Home</CustomLink>
                <CustomLink to ="/OverReview">OverReview</CustomLink>
             
            </nav>
        </div>
    );
};

export default Header;