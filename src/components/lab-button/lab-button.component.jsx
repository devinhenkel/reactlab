import React from 'react';

import './lab-button.styles.scss';

const LabButton = ({ children, ...buttonProps }) => (
    <button className={`lab-button ${buttonProps.extrastyles}`} {...buttonProps}>
        {children}
    </button>
);

export default LabButton