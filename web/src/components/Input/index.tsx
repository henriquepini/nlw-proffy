import React, { InputHTMLAttributes} from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  span?: string;
}

const Input: React.FC<InputProps> = ({ label, name, span,...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label} { span && <span>({span})</span> }</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;
