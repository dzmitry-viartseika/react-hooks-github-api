import React from 'react';

const Alert = ({alert}) => {

    return (
        <div
            className={`alert alert-warning alert-${alert.type || 'secondary'} alert-dismissible`}
            role="alert">
            { alert.name }
            <button
                type="button"
                className="btn-close"
                aria-label="Close"
            ></button>
        </div>
    )
};

export default Alert;
