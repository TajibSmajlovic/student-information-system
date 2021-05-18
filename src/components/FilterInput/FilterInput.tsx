import { useState, useEffect } from 'react';

import { InputWrapper, SearchIcon, Container } from './FilterInput.styles';
import { useDebounce } from 'utils/hooks';
import { DEBOUNCE_TIMEOUT } from 'utils/constants';

interface IProps {
  searchTerm: string;
  placeholder?: string;
  onSearch: any;
  [x: string]: any;
}

const FilterInput = ({ searchTerm = '', placeholder = 'Type to search...', onSearch, ...rest }: IProps) => {
  const [keyword, setKeyword] = useState(searchTerm);
  const debouncedSearchTerm = useDebounce(keyword, DEBOUNCE_TIMEOUT);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setKeyword(search);
  };

  return (
    <InputWrapper>
      <SearchIcon />
      <Container placeholder={placeholder} onChange={onChange} value={keyword} {...rest} />
    </InputWrapper>
  );
};

export default FilterInput;
