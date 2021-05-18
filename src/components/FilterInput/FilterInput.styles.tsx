import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import Input from 'components/Form/Input/Input';

export const InputWrapper = styled.div`
  position: relative;
  display: inline;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 11px;
  left: 10px;
  z-index: 1;
  opacity: 0.5;
  ${'@-moz-document url-prefix()'} {
    & {
      top: 25px;
    }
  }
`;

export const Container = styled(Input)`
  padding-left: 35px;
`;
