import { Link } from 'react-router-dom';
import './Button.styles.css';
import { ReactNode } from 'react';

export const Button = ({ children, href }: { children: ReactNode, href?: string }) => {
    return (
        <button className='globalButton'>
            {href ? <Link to={href}>{children}</Link> : children}
        </button>
    )
}
