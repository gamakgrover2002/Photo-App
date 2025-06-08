import React from "react";
import { BrowserRouter } from "react-router-dom";

interface ProviderProps {
    children: React.ReactNode;
}
const Provider: React.FC<ProviderProps> = ({children}) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}
export default Provider;