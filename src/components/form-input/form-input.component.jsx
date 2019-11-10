import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, handleChange, ...formInputProps }) => (
    <div className='input-group'>
        <input className='form-input' onChange={ handleChange } { ...formInputProps } />
        {
            label ? (
            <label className={ `${formInputProps.value.length ? 'shrink' : '' } form-input-label` }>
                {label}
            </label>
            ) : null
        }
    </div>

);

export default FormInput
