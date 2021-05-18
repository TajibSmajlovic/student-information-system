import { Pagination as DefaultPagination, Row, Col } from 'react-bootstrap';

import PaginationItem from 'components/Pagination/PaginationItem';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';

const Pagination = ({ count, page, maxPages }: any) => {
  const pages = [];

  for (let i = 1; i <= maxPages; i++) {
    pages.push(i);
  }

  const visiblePages = (numDisplayed, pageNumber) => {
    let upperLimit = page + Math.ceil(numDisplayed / 2);
    let lowerLimit = page - Math.ceil(numDisplayed / 2);

    if (lowerLimit < 0) upperLimit += Math.abs(lowerLimit);

    if (upperLimit > maxPages) {
      lowerLimit -= upperLimit - maxPages;
      lowerLimit++; // offset
    }

    if ((lowerLimit < pageNumber && pageNumber <= page) || (pageNumber > page && pageNumber < upperLimit)) return true;
    else return false;
  };

  return (
    <Row>
      <Col className="align-items-center">
        {maxPages > 1 && count > DEFAULT_PAGE_SIZE && (
          <DefaultPagination>
            <PaginationItem linkAttrs={{ previous: true }} number={page - 1} disabled={page === 1} />

            {pages.map((p, i) => (
              <PaginationItem number={p} key={i} active={p === page} visible={visiblePages(6, p)} />
            ))}

            <PaginationItem linkAttrs={{ next: true }} number={page + 1} disabled={page === maxPages} />
          </DefaultPagination>
        )}
      </Col>
    </Row>
  );
};

export default Pagination;
