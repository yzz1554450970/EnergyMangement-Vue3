import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useColor from 'hooks/useColor';

const OutlineBox = React.memo(({ active, children, ...other }) => {
    const getColor = useColor();
  return (
    <div
      css={css`
      cursor: pointer;
      background: ${getColor('main_color')};
      ${active && 'color:var(--main-text-color);'}
      border: 1px solid ${getColor('dark_main_color')};
      font-size: ${12 / FONT_BASE}rem;
      align-items: center;
    `}
      {...other}
    >
      <div>{children}</div>
    </div>

  );
});

OutlineBox.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
};

export default OutlineBox;
