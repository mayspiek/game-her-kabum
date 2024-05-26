import { Link } from 'react-router-dom';
import './Button.styles.css';
import { ReactNode } from 'react';

export const Button = ({ children, href, type, onClick, ...rest }: { children: ReactNode, href?: string, type?: string, onClick?: () => void }) => {
    return (
        <button {...rest} onClick={onClick} className='globalButton'>
            {href ? <Link to={href}>{children}</Link> : children}
        </button>
    )
}
