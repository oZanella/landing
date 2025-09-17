import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <div className={`border-blue-600`} >
            {children}
        </div>
    );
}