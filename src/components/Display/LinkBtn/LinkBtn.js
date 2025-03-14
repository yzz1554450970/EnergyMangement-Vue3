/* eslint jsx-a11y/anchor-has-content: 0 */
import useColor from 'hooks/useColor';
import { css } from '@emotion/react';

const LinkBtn = (props) => {
  const getColor = useColor();

  return (
    <a
      css={css`
        color: ${getColor('a00')};
        text-decoration: none;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      `}
      {...props}
    />
  );
};

export default LinkBtn;
