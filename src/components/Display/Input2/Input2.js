import React, { useState, useRef } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import useColor from 'hooks/useColor';
import Field from '../Field';

const Input = React.memo(
  ({
    value,
    onChange,
    forwardedref,
    onFocus,
    onBlur,
    onKeyDown,
    iconCode,
    color,
    placeholderColor,
    className,
    ...props
  }) => {
    const inputRef = useRef();
    const [isActive, setActive] = useState(false);

  const getColor = useColor();
    return (
      <Field isActive={isActive} className={className}>
        <input
          {...props}
          ref={(ref) => {
            inputRef.current = ref;
            if (forwardedref) {
              if (typeof forwardedref === 'function') {
                forwardedref(ref);
              } else {
                forwardedref.current = ref; // eslint-disable-line no-param-reassign
              }
            }
          }}
          aria-label="input"
          css={css`
            outline: none;
            background: ${getColor('dark_main_color')};
            border-radius: 2px;
            border: none;
            padding: 0 0.5rem;
            color: var(--normal-text-color);
            width: 100%;
            &::placeholder {
              // color: ${placeholderColor || '#1F4585'};
            }
          `}
          onChange={(ev) => {
            onChange(ev.target.value);
          }}
          value={value}
          onKeyDown={onKeyDown}
          onFocus={(ev) => {
            setActive(true);
            if (onFocus) {
              onFocus(ev);
            }
          }}
          onBlur={(ev) => {
            setActive(false);
            if (onBlur) {
              onBlur(ev);
            }
          }}
        />
        {iconCode && (
          <Icon
            code={iconCode}
            color="var(--main-text-color)"
            css={css`
              cursor: poiner;
            `}
          />
        )}
      </Field>
    );
  },
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconCode: PropTypes.string,
  className: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  color: PropTypes.string,
  placeholderColor: PropTypes.string,
  forwardedref: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default React.forwardRef((props, ref) => <Input {...props} forwardedref={ref} />);
