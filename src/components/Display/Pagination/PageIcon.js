import React from 'react';
import { css } from '@emotion/react';
import useColor from 'hooks/useColor';
import useFontSize from 'hooks/useFontSize';

const PageIcon = React.memo(({
  isActive,
  isDisabled,
  children,
  ...other
}) => {
  const getColor = useColor();
  const fontsize = useFontSize();
  return (
    <div
      css={css`
        border-radius: 4px;
        border: ${isActive ? `1px solid ${getColor('special')}` : `1px solid ${getColor('text_black')}`};
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${1.5 * fontsize}px;
        height: ${1.5 * fontsize}px;
        background: ${getColor(isActive ? 'special' : 'bg_2')};
        cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
        color: ${getColor(isActive ? 'main' : 'text_black')};
        &:not(:last-of-type) {
          margin-right: ${0.5 * fontsize}px;
        }
      `}
      {...other}
    >
      {children}
    </div>
  );
});

export default PageIcon;
