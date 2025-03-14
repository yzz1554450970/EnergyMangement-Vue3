import { css } from '@emotion/react';
import React from 'react';

const AsteriskLabel = React.memo(({ ...others }) => (
  <div
    css={css`
      &::before {
        content: '* ';
        color: #b40100;
      }
    `}
    {...others}
  />
));

export default AsteriskLabel;
