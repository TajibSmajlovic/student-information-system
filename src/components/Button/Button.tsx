import styled from 'styled-components';
import { Button as DefaultButton, Spinner } from 'react-bootstrap';

interface IProps {
  text: string;
  variant?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  [x: string]: any;
}

const Button = ({
  text,
  variant = 'primary',
  isDisabled = false,
  isLoading = false,
  children,
  ...rest
}: IProps | any) => (
  <CustomButton
    className="d-flex justify-content-center align-items-center"
    variant={variant}
    disabled={isDisabled || isLoading}
    {...rest}
  >
    {children} {isLoading ? <Spinner animation="border" size="sm" /> : <span>{text}</span>}
  </CustomButton>
);

const CustomButton = styled(DefaultButton)`
  min-width: 100px;
`;

export default Button;
