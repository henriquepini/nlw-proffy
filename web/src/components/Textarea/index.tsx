import React, { TextareaHTMLAttributes} from 'react';

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  span?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, span,...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label} { span && <span>{span}</span> }</label>
      <textarea id={name} {...rest} />
    </div>
  );
}

export default Textarea;
