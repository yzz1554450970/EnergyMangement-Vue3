import { useState, memo } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { Field } from 'components/Display';
import Icon from 'components/Icon';
import useColor from 'hooks/useColor';

const TextInput = memo(({
  className,
  onChange,
  onBlur = () => {},
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
          placeholder="请输入字符串"
          onFocus={() => {
            setIsActive(true);
          }}
          onBlur={() => {
            setIsActive(false);
            onBlur();
          }}
          onChange={(e) => {
            onChange(e.target.value);
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
          aria-label="input"
        />
        {
          value && (
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
