import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center mt-10 w-full justify-center pt-2">
            { children }
        </div>
    )
}

export { Layout }