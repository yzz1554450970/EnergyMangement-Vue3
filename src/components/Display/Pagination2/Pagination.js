import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import OutlineBox from './OutlineBox';
import NumberList from './NumberList';
import JumpPage from './JumpPage';
import Context from './Context';

const Pagination = React.memo(({
 page = 1, pageSize = 10, total = 1, onChange, className,
}) => {
  const maxPage = useMemo(
    () => (total % pageSize === 0 ? total / pageSize : Math.floor(total / pageSize) + 1),
    [total, pageSize],
  );
  return (
    <Context.Provider value={{ state: { page, maxPage }, dispatch: { changeCurrPage: onChange } }}>
      <div
        css={css`
          display: flex;
          color: var(--normal-text-color);
          align-items: center;
          font-size: ${12 / FONT_BASE}rem;
          > div:not(:first-of-type, :last-of-type) {
            margin-left: ${10 / FONT_BASE}rem;
          }
        `}
        className={className}
      >
        <OutlineBox
          css={css`
            padding: ${7 / FONT_BASE}rem ${20 / FONT_BASE}rem;
          `}
          onClick={() => {
            onChange(1);
          }}
        >
          首页
        </OutlineBox>
        <NumberList />
        <OutlineBox
          css={css`
            padding: ${7 / FONT_BASE}rem ${20 / FONT_BASE}rem;
          `}
          onClick={() => {
            if (maxPage !== 0) {
              onChange(maxPage);
            }
          }}
        >
          尾页
        </OutlineBox>
        <JumpPage
          css={css`
            margin-left: ${30 / FONT_BASE}rem;
          `}
          maxPage={maxPage}
        />
        <div
          css={css`
            font-size: ${12 / FONT_BASE}rem;
            margin-left: ${20 / FONT_BASE}rem;
          `}
        >
          {`共 ${maxPage} 页`}
        </div>
      </div>
    </Context.Provider>
  );
});

Pagination.propTypes = {
  page: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Pagination;
