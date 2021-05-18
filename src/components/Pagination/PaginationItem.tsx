import styled from 'styled-components';
import { Pagination } from 'react-bootstrap';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

const PaginationItem = ({ visible = true, number, onClick, linkAttrs, ...rest }: any) => {
  return visible ? (
    <Wrapper {...rest}>
      <div {...linkAttrs} onClick={() => onClick(number)}>
        {linkAttrs && (linkAttrs.previous ? <CaretLeft /> : <CaretRight />)}
        {!linkAttrs && <span>{number}</span>}
      </div>
    </Wrapper>
  ) : null;
};

const Wrapper = styled(Pagination.Item)`
  cursor: pointer;
`;

const CaretLeft = styled(FaCaretLeft)`
  opacity: 70%;
`;
const CaretRight = styled(FaCaretRight)`
  opacity: 70%;
`;

export default PaginationItem;
