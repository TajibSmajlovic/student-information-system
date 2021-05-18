import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { FilterInput } from 'components';

const ListHeader = ({ onSearch, searchTerm, searchPlaceholder, children, ...rest }: any) => {
  return (
    <Wrapper {...rest}>
      <Row className="d-flex justify-content-between">
        <Col xs={8} sm={4}>
          {onSearch && <FilterInput onSearch={onSearch} searchTerm={searchTerm} placeholder={searchPlaceholder} />}
        </Col>
        <Col xs={4} sm={8} className="d-flex align-items-center justify-content-end mr-auto">
          {children}
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;

export default ListHeader;
