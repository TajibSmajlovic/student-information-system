import styled from 'styled-components';

import { HelperText } from 'components/Typography';

const ErrorMessage = styled(({ message, ...rest }) => (message ? <HelperText {...rest}>{message}</HelperText> : null))`
  color: var(--danger);
`;

export default ErrorMessage;
