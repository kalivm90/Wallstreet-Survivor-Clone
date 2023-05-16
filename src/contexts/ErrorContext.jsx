import { useState, createContext, useMemo} from "react";

const ErrorContext = createContext();

const ErrorProvider = (props) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [errorCode, setErrorCode] = useState("");

    const value = useMemo(
        () => ({
            errorMessage,
            setErrorMessage,
            errorCode,
            setErrorCode
        }),
        [errorMessage, errorCode]
    )

    return (
        <ErrorContext.Provider value={value}>
            {props.children}
        </ErrorContext.Provider>
    )
}

export {ErrorContext, ErrorProvider};