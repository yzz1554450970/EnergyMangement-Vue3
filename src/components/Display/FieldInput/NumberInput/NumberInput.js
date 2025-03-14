import { useState, memo } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { Field } from 'components/Display';
import Icon from 'components/Icon';
import useColor from 'hooks/useColor';

const TextInput = memo(({
  className,
  onChange,
  onBlur,
  value,
}) => {
  const [isActive, setIsActive] = useState(false);
  const getColor = useColor();
  return (
    <Field
      isActive={isActive}
      className={className}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        `}
      >
        <input
          aria-label="input"
          placeholder="请输入数字"
          onFocus={() => {
            setIsActive(true);
          }}
          onBlur={() => {
            setIsActive(false);
            onBlur();
          }}
          onChange={(e) => {
            if (e.target.value === '') {
              onChange(e.target.value);
              return;
            }
            const numberPattern = /^(0|([1-9][0-9]*))(\.\d*)?$/;
            const bool = numberPattern.test(e.target.value);
            if (bool) {
              onChange(e.target.value);
            }
          }}
          value={value}
          css={css`
            outline: none;
            outline: none;
            background: ${getColor('dark_main_color')};
            border-radius: 2px;
            border: none;
            padding: 0 0.5rem;
            width: 100%;
            color: var(--normal-text-color);
          `}
        />
        {
          !!value && (
            <Icon
              code="e615"
              css={css`
                cursor: pointer;
              `}
              onClick={(e) => {
                e.stopPropagation();
                onChange('');
              }}
            />
          )
        }
      </div>
    </Field>

  );
});

TextInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
export default TextInput;
