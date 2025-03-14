import { memo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import chroma from 'chroma-js';
import Icon from 'components/Icon';

const CellSort = memo(({
  children,
  value,
  onChange,
}) => (
  <a
    css={css`
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-between;
      &:active: {
        background: ${chroma('#f9f9f9').darken(0.2).hex()};
      }
    `}
    onClick={() => {
      if (value === 0 || value === -1) {
        onChange(1);
      } else {
        onChange(-1);
      }
    }}
  >
    <span>
      {children}
    </span>
    <Icon
      color="#666"
      code={value === 0 ? 'e842' : value === 1 ? 'e844' : 'e843'}
    />
  </a>
  ));

CellSort.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.oneOf([-1, 0, 1]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CellSort;
