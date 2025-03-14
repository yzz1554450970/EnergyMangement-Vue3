import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { times } from 'lodash';
import { css } from '@emotion/react';
import Icon from 'components/Icon';
import OutlineBox from './OutlineBox';
import useStore from './useStore';

const NumberList = React.memo(({ className }) => {
  const { paginState, paginDispatch } = useStore();
  const { page, maxPage } = paginState;
  const pageList = useMemo(() => {
    let result = [];
    if (maxPage <= 5) {
      result = times(maxPage).map((item) => item + 1);
    } else {
      let begin;
      if (page <= 1) {
        begin = 1;
      } else if (page + 3 <= maxPage) {
        begin = page - 1;
      } else {
        begin = maxPage - 4;
      }
      result = times(5, (item) => item + begin);
    }
    return result;
  }, [maxPage, page]);
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        > div {
          padding: ${7 / FONT_BASE}rem ${12 / FONT_BASE}rem;
        }
        > div:not(:first-of-type) {
          margin-left: ${10 / FONT_BASE}rem;
        }
      `}
      className={className}
    >
      <OutlineBox
        css={css`
          transform: rotateY(-180deg);
          transition: 0.8s;
          ${page === 1 && 'cursor: not-allowed;background:gray;'}
        `}
        onClick={() => {
          if (page !== 1) {
            paginDispatch.changeCurrPage(page - 1);
          }
        }}
      >
        <Icon
          css={css`
            width: 1rem;
            height: 0.9rem;
          `}
          code="e6a9"
        />
      </OutlineBox>
      {pageList.map((item) => (
        <OutlineBox
          css={css`
            ${page === item && 'background:var(--main-text-color);transition:0.8s;'}
          `}
          key={item}
          onClick={() => {
            paginDispatch.changeCurrPage(item);
          }}
        >
          {item}
        </OutlineBox>
      ))}
      <OutlineBox
        css={css`
          transition: 0.8s;
          ${page >= maxPage && 'cursor: not-allowed;background:gray;'}
        `}
        onClick={() => {
          if (page < maxPage) {
            paginDispatch.changeCurrPage(page + 1);
          }
        }}
      >
        <Icon
          code="e6a9"
          css={css`
            width: 1rem;
            height: 0.9rem;
          `}
        />
      </OutlineBox>
    </div>
  );
});

NumberList.propTypes = {
  className: PropTypes.string,
};

export default NumberList;
