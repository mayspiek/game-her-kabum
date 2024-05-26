import './Button.styles.css';
import { ReactNode } from 'react';

export const Button = ({ children, href }: { children: ReactNode, href: string }) => {
    return (
        <button className='globalButton'>
                <a href={href}>
                        {children}
                </a>
        </button>
    )
}
