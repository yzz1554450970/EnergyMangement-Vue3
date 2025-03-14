import { memo } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import { css } from '@emotion/react';

const FieldItem = memo(({
  name,
  children,
  className,
  style,
}) => (
  <div
    className={className}
    style={style}
    aria-label="field-wrapper"
  >
    <div
      css={css`
        font-weight: 600;
        margin-bottom: 0.4rem;
      `}
    >
      <span
        css={css`
          cursor: default;
        `}
      >
        {name}
      </span>
    </div>
    <div>
      {children}
    </div>
  </div>
  ));

FieldItem.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  style: stylePropType,
};

export default FieldItem;
