import styled, { css } from 'styled-components';
import { Form } from 'react-bootstrap';

interface IProps {
  isDisabled?: boolean;
  label: string;
  [x: string]: any;
}

export const Label = ({ isDisabled = false, label }: IProps) => <Wrapper label={label} isDisabled={isDisabled} />;

const Wrapper = styled(({ isDisabled, label, ...rest }) => <Form.Label {...rest}>{label}</Form.Label>)`
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: normal;
  color: var(--secondary);

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.5;
    `}
`;
