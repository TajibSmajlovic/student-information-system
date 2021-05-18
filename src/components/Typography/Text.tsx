import styled from 'styled-components';

const Text = props => <Wrapper {...props}>{props.children}</Wrapper>;

const Wrapper = styled(
  ({
    color,
    margin,
    fontSize,
    fontFamily,
    textTransform,
    fontWeight,
    fontStretch,
    lineHeight,
    letterSpacing,
    children,
    ...rest
  }) => <p {...rest}>{children}</p>
)`
  color: ${({ color }) => (color ? `var(--${color})` : 'var(--defaultText)')};
  margin: ${({ margin }) => (margin ? `${margin}` : '0')};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : '0.875rem')};
  font-family: ${({ fontFamily }) => (fontFamily ? `${fontFamily}` : '')};
  text-transform: ${({ textTransform }) => textTransform && `${textTransform}`};
  font-weight: ${({ fontWeight }) => fontWeight && `${fontWeight}`};
  font-stretch: ${({ fontStretch }) => fontStretch && `${fontStretch}`};
  line-height: ${({ lineHeight }) => lineHeight && `${lineHeight}`};
  letter-spacing: ${({ letterSpacing }) => letterSpacing && `${letterSpacing}`};
`;

export default Text;
