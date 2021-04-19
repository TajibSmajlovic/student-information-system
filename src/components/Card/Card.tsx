import styled from 'styled-components';
import { Card as ReactstrapCard } from 'react-bootstrap';

import { Loader } from 'components';

interface IProps {
  loading?: boolean;
  children: React.ReactNode;
  [x: string]: any;
}

const Card = ({ loading = false, children, ...rest }: IProps) => (
  <Wrapper {...rest}>
    {loading ? (
      <Center>
        <Loader />
      </Center>
    ) : (
      children
    )}
  </Wrapper>
);

export const Wrapper = styled(ReactstrapCard)`
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #eaedf3;
  background-color: var(--white);
  min-height: 100px;
`;

export const Center = styled.div`
  margin: auto;
`;

export default Card;
