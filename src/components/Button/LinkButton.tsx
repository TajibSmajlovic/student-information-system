import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';

import { Button } from 'components';

const LinkButton = ({ to, disabled, children, ...rest }: any) => {
  return (
    <Link to={!disabled && to}>
      <Button color="primary" disable={disabled} {...rest}>
        <span className="mr-2 " style={{ marginTop: '-0.15rem' }}>
          <FaPlusCircle />
        </span>
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
