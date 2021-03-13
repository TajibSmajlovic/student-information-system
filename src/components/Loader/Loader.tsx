import { Container, Spinner } from 'react-bootstrap';

const Loader = ({ isCentered = false }: { isCentered?: boolean }) =>
  isCentered ? (
    <Container className="h-100  d-flex align-items-center justify-content-center p-0" fluid>
      <Spinner animation="border" />
    </Container>
  ) : (
    <Spinner animation="border" />
  );

export default Loader;
