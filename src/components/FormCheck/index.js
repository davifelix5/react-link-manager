import React, { useState, useEffect } from 'react'

const FormCheck = ({ label, name, data }) => {

    const [isChecked, setIsChecked] = useState(null)

    useEffect(() => {
        const initialValue = data && data[name] ? data[name] : undefined
        if (initialValue !== undefined) setIsChecked(initialValue)
    }, [name, data])

    const handleChange = event => {
        if (isChecked === event.target.checked) return
        setIsChecked(!!event.target.checked)
    }

    const inputProps = {
        type: 'checkbox',
        name,
        checked: !!isChecked,
        onChange: handleChange
    }

    return (
        <div className="form-group form-check">
            <label className="form-check-label">
                <input {...inputProps} />
                <span className="form-check-sign"> {label} </span>
            </label>
        </div>
    )
}

export default FormCheck
