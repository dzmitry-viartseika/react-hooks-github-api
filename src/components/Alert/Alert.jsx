import React, { useContext } from 'react';
import { AlertContext } from "./context/AlertContext";

const Alert = (props) => {

    const { alert } = useContext(AlertContext);

    if (!alert) return null;

    return (
        <div
            className={`alert alert-warning alert-${alert.type || 'secondary'} alert-dismissible`}
            role="alert">
            { alert.text }
            <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={props.test}
            >wertey</button>
        </div>
    )
};

export default Alert;
