import React, {
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import chroma from 'chroma-js';
import { css } from '@emotion/react';
import Icon from 'components/Icon';
import useColor from 'hooks/useColor';

const ClickSearchInput = React.memo(({
  value,
  onChange,
  placeholder,
}) => {
  const [isActive, setActive] = useState(false);
  const [currentValue, setCurValue] = useState(value);
  const getColor = useColor();
  return (
    <div
      css={css`
        display: flex;
        background: var(--normal-text-color);
        position: relative;
        height: 2.4rem;
        align-items: center;
        border-radius: 4px;
        transition: border-color 0.3s;
        &:hover {
          button[aria-label=clear-btn] {
            display: inline-block;
          }
        }
      `}
      style={{
        borderColor: isActive ? '#000' : null,
      }}
    >
      <div
        css={css`
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          border: 1px solid #ccc;
          height: 100%;
          border-right: none;
        `}
      >
        <input
          value={currentValue}
          onChange={(ev) => setCurValue(ev.target.value)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder={placeholder}
          css={css`
            height: 100%;
            width: calc(100% - 0.6rem);
            margin-left: 0.6rem;
            border-width: 0;
            outline: unset;
            background: rgba(0, 0, 0, 0);
            color: #666;
            padding-right: 0.6rem;
          `}
        />
      </div>
      <a
        css={css`
          height: 100%;
          background: #4880FF;
          width: 5rem;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          &:active {
            background-color: ${chroma(getColor('a00')).darken(0.3).css()};
          }
        `}
        onClick={() => {
          onChange(currentValue);
        }}
      >
        <Icon
          css={css`
            width: 1rem;
            height: 1rem;
          `}
          code="e653"
        />
        <span
          css={css`
            margin-left: 0.2rem;
          `}
        >
          查询
        </span>
      </a>
    </div>
  );
});

ClickSearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default ClickSearchInput;
