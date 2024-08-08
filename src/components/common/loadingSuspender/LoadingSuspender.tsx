import { ReactNode } from "react";

interface 로딩서스펜더프롭스 {
    isLoading?: boolean;
    children?: JSX.Element | ReactNode;
}

const 로딩서스펜더 = ({ children, isLoading }: 로딩서스펜더프롭스) => {
    if (isLoading) {
        return <p>Now Loading ... </p>;
    }

    return <>{children}</>;
};

export default 로딩서스펜더;
