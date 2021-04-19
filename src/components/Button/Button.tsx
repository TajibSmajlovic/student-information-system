import styled from 'styled-components';
import { Button as DefaultButton, Spinner } from 'react-bootstrap';

interface IProps {
  text: string;
  variant?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  [x: string]: any;
}

const Button = ({ text, variant = 'primary', isDisabled = false, isLoading = false, ...rest }: IProps) => (
  <CustomButton variant={variant} disabled={isDisabled || isLoading} {...rest}>
    {isLoading ? <Spinner animation="border" size="sm" /> : text}
  </CustomButton>
);

const CustomButton = styled(DefaultButton)`
  min-width: 100px;
`;

export default Button;
