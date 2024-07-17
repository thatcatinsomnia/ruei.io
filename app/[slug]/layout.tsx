import type { ReactNode } from 'react';
import './markdown.css';

export default function Layout({ children }: {
    children: ReactNode;
}) {
    return (
        <>
            {children}
            <footer>
                <a href="/">back</a>
            </footer>
        </>
    );
}

