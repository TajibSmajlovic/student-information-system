import { Modal } from 'react-bootstrap';

import { Title } from 'components/Typography';
import { Button } from 'components';

interface IProps {
  title: string;
  confirmButtonText: string;
  closeButtonText: string;
  onConfirm: any;
  onClose: any;
  [x: string]: any;
}

const CustomModal = ({
  title,
  confirmButtonText,
  closeButtonText,
  onConfirm,
  onClose,
  children,
  ...props
}: IProps | any) => (
  <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton className="mx-2">
      <Modal.Title id="contained-modal-title-vcenter">
        <Title style={{ fontSize: '1.5rem' }}>{title}</Title>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="my-3 mx-2">{children}</Modal.Body>
    {onClose && (
      <Modal.Footer className="mx-2">
        <Button variant="danger" text={closeButtonText} onClick={onClose} />
        <Button text={confirmButtonText} onClick={onConfirm} />
      </Modal.Footer>
    )}
  </Modal>
);

export default CustomModal;
