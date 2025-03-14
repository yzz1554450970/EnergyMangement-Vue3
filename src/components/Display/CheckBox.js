import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const CheckBox = React.memo(({
 value = false, children, onChange, disabled, ...others
}) => {
const checkBoxInner = css`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${disabled ? 'var(--dark-text-color)' : 'var(--dark-main-color)'};
  border: 1px solid var(--main-text-color);
  border-radius: 2px;
  transition: all 0.3s;
  position: relative;
`;
const innerAfter = css`
  &::after {
    position: absolute;
    height: 70%;
    width: 40%;
    content: '';
    border-right: 2px solid var(--text-active-color);
    border-bottom: 2px solid var(--text-active-color);
    transform: rotate(45deg);
    transition: all 0.3s;
    left: 30%;
    top: 5%;
  }
`;
  return (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      {...others}
      css={css`
      display: flex;
      align-items: center;
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      background: ${disabled ? '#f00' : ''};
    `}
    >
      <span
        onClick={(e) => {
        e.stopPropagation();
      }}
        css={css`
        width: 100%;
        height: 100%;
      `}
      >
        <input
          type="checkbox"
          checked={value}
          onChange={() => {
            if (!disabled) {
              onChange(!value);
            }
        }}
          css={css`
          display: none;
        `}
        />
        <span
          css={css`
          ${checkBoxInner}
          ${value && 'border-color:var(--text-active-color);'}
            ${value && innerAfter}
            ${children ? 'margin-right: 0.5rem' : ''};
        `}
        />
      </span>
      {children && <span>{children}</span>}
    </label>

  );
});

CheckBox.propTypes = {
  value: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default CheckBox;
