import type { ReactNode } from 'react';

export default function Layout({ children }: {
    children: ReactNode;
}) {
    <>
        {children}
        <footer>
            <a href="/">back</a>
        </footer>
    </>
}

