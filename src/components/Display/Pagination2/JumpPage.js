import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useColor from 'hooks/useColor';
import useStore from './useStore';

const JumpPage = React.memo(({ maxPage, className }) => {
  const getColor = useColor();
  const { paginState, paginDispatch } = useStore();
  const [page, setPage] = useState('');
  const handleChangeVal = (value) => {
    const num = Number(value.replace(/[^\d]/g, ''));
    if (num < 1) {
      setPage('');
    } else if (num > paginState.maxPage) {
      setPage(maxPage);
      paginDispatch.changeCurrPage(maxPage);
    } else {
      setPage(num);
      paginDispatch.changeCurrPage(num);
    }
  };
  return (
    <div
      className={className}
      css={css`
        font-size: ${12 / FONT_BASE}rem;
        display: flex;
        align-items: center;
      `}
    >
      <span>跳转至</span>
      <input
        css={css`
          margin: 0 0.8rem;
          color: var(--normal-text-color);
          border: 1px solid var(--border-color);
          width: 4rem;
          height: 98%;
          background: var(--bg-color);
          text-align: center;
          &:focus {
            outline: none;
            box-shadow: 0 0 0 1px #315ba4, 0 0 0 -1px #315ba4;
          }
        `}
        value={page}
        onInput={(e) => handleChangeVal(e.target.value)}
      />
      <span>页</span>
    </div>
  );
});

JumpPage.propTypes = {
  maxPage: PropTypes.number,
  className: PropTypes.string,
};

export default JumpPage;
