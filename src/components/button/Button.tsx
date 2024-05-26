import { Link } from 'react-router-dom';
import './Button.styles.css';
import { ReactNode } from 'react';

export const Button = ({ children, href, type, ...rest }: { children: ReactNode, href?: string, type?: string }) => {
    return (
        <button {...rest} className='globalButton'>
            {href ? <Link to={href}>{children}</Link> : children}
        </button>
    )
}
