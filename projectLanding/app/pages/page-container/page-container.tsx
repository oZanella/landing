import { ReactNode } from "react";
interface PageContainerProps {
    children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <div className="flex flex-col items-center min-h-screen mx-auto max-w-3xl">
            {children}
        </div>
    );
}
