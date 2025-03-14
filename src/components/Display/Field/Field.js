import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import { css } from '@emotion/react';
import useColor from 'hooks/useColor';

const Field = React.memo(({
  isActive,
  style = {},
  color = 'var(--dark-main-color)',
  ...props
}) => {
  const getColor = useColor();
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        background: ${color};
        border-radius: 3px;
        align-items: center;
        transition: border-color 0.3s, background 0.3s;
        position: relative;
        height: 100%;
        width: 100%;
        padding: 0 0.5rem;
        border-width: 1px;
        border-style: solid;

      `}
      aria-label="field"
      style={{
      ...style,
      borderColor: isActive ? 'var(--main-text-color)' : 'var(--border-color)',
    }}
      {...props}
    />

  );
});

Field.propTypes = {
  isActive: PropTypes.bool,
  style: stylePropType,
};

export default Field;
