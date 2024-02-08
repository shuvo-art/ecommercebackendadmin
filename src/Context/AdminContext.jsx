import React, { createContext } from "react";

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {

    const [isVerified, setIsVerified] = React.useState(true);


    const updateIsVerified = (value) => {
        setIsVerified(value);
    };


    const contextValue = {
        isVerified,
        updateIsVerified
    };

    return (
        <AdminContext.Provider value={contextValue}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;