import { useState, useRef } from 'react';

import ErrorMessage from '../ErrorMessage';
import PasswordToggle from '../PasswordToggle/PasswordToggle';
import { Wrapper, InputComponent } from './Input.styles';
import { Label } from 'components/Typography';

interface IProps {
  type: string;
  label?: string;
  value: any;
  validationMessage?: string;
  togglePassword?: boolean;
  isDisabled?: boolean;
  [x: string]: any;
}

const Input = ({ type = 'text', label, value, validationMessage, togglePassword, isDisabled, ...rest }: IProps) => {
  const [inputType, setInputType] = useState(type);
  const inputRef = useRef();

  return (
    <Wrapper>
      {label && <Label label={label} isDisabled={isDisabled} />}
      <InputComponent type={inputType} value={value} ref={inputRef} {...rest} />
      {togglePassword && <PasswordToggle type={inputType} setInputType={setInputType} />}
      <ErrorMessage message={validationMessage} />
    </Wrapper>
  );
};

export default Input;
