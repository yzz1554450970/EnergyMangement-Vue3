import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Icon from 'components/Icon';

const ButtonIcon = React.memo(({
  code,
  ...other
}) => (
  <button
    type="button"
    css={css`
        height: 2rem;
        width: 2.6rem;
        box-shadow: 0 1px 2px rgba(0,0,0,.06);
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid transparent;
        border-radius: 3px;
        outline: unset;
        color: #767676;
        svg {
          vertical-align: bottom;
        }
        &:hover {
          color: #333;
        }
      `}
    {...other}
  >
    <Icon
      color="currentColor"
      code={code}
    />
  </button>
));

ButtonIcon.propTypes = {
  code: PropTypes.string.isRequired,
};

export default ButtonIcon;
