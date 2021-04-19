import styled from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';

interface IProps {
  to: string;
  linkText: string;
  linkDescription?: string;
}

export const Link = ({ to, linkText, linkDescription }: IProps) => (
  <LinkWrapper>
    {linkDescription && `${linkDescription} `}
    <div>
      <CustomLink to={to}>{linkText}</CustomLink>
    </div>
  </LinkWrapper>
);

const LinkWrapper = styled.div`
  color: var(--text-grey);
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
`;

const CustomLink = styled(DefaultLink)`
  color: var(--secondary);
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    color: var(--secondary);
    text-decoration: none;
  }
`;
