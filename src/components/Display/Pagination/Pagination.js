import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Icon from 'components/Icon';
import { times, isEmpty } from 'lodash';
import useColor from 'hooks/useColor';
import useFontSize from 'hooks/useFontSize';
import PageIcon from './PageIcon';

const DISPLAY_COUNT = 10;
const Pagination = React.memo(
  ({
 pageSize = 10, currentPage = 1, total = 970, onChange, className,
}) => {
    const fontsize = useFontSize();
    const getColor = useColor();
    const [pageList, setPageList] = useState([]);
    const [currentValue, setCurrentValue] = useState('');
    const totalPage = React.useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);

    useEffect(() => {
      const pages = times(totalPage);
      if (totalPage <= DISPLAY_COUNT) {
        setPageList(pages);
      }
    }, [totalPage]);

    useEffect(() => {
      const pages = times(totalPage);
      if (isEmpty(pageList) && totalPage > DISPLAY_COUNT) {
        setPageList(pages.slice(currentPage - 1, currentPage - 1 + DISPLAY_COUNT));
      }
      if (
        !isEmpty(pageList)
        && currentPage >= pageList[pageList.length - 1]
        && pageList[pageList.length - 1] !== totalPage - 1
      ) {
        const result = pages.slice(currentPage - 3, currentPage - 3 + DISPLAY_COUNT);
        if (result.length === DISPLAY_COUNT) {
          setPageList(result);
        } else {
          setPageList([
            ...pages.slice(currentPage - 3 - (DISPLAY_COUNT - result.length), currentPage - 3),
            ...result,
          ]);
        }
        return;
      }
      if (!isEmpty(pageList) && currentPage <= pageList[1] && pageList[0] !== 0) {
        const first = Math.max(currentPage - 3, 0);
        const result = pages.slice(first, first + DISPLAY_COUNT);
        if (result.length === DISPLAY_COUNT) {
          setPageList(result);
        } else {
          // setPageList([...pages.slice(currentPage - 1 - (DISPLAY_COUNT - result.length), currentPage - 1), ...result]);
        }
      }
    }, [currentPage, pageList, totalPage]);

    const handleChangeValue = (value) => {
      const num = Number(value.replace(/[^\d]/g, ''));
      if (num > totalPage) {
        setCurrentValue(totalPage);
        return;
      }
      if (num < 1) {
        setCurrentValue('');
        return;
      }
      setCurrentValue(num);
    };

    return (
      <div
        css={css`
          display: flex;
          font-size: ${0.75 * fontsize}px;
          align-items: center;
        `}
        className={className}
      >
        <span
          css={css`
            margin-right: ${0.5 * fontsize}px;
          `}
        >
          {`共${total}条`}
        </span>
        <PageIcon
          isDisabled={currentPage === 1}
          onClick={() => {
            onChange(1);
          }}
        >
          <Icon
            code="e623"
            color={getColor('text_black')}
            css={css`
              width: ${1 * fontsize}px;
              height: ${1 * fontsize}px;
            `}
          />
        </PageIcon>
        <PageIcon
          isDisabled={currentPage === 1}
          onClick={() => {
            if (currentPage > 1) {
              onChange(currentPage - 1);
            }
          }}
        >
          <Icon
            code="e6a9"
            color={getColor('text_black')}
            css={css`
              width: ${1 * fontsize}px;
              height: ${1 * fontsize}px;
            `}
          />
        </PageIcon>
        {pageList.map((a) => (
          <PageIcon key={a} isActive={a + 1 === currentPage} onClick={() => onChange(a + 1)}>
            {a + 1}
          </PageIcon>
        ))}
        <PageIcon
          isDisabled={currentPage === totalPage}
          onClick={() => {
            if (currentPage < totalPage) {
              onChange(currentPage + 1);
            }
          }}
        >
          <Icon
            code="e6a9"
            color={getColor('text_black')}
            css={css`
              width: ${1 * fontsize}px;
              height: ${1 * fontsize}px;
            `}
          />
        </PageIcon>
        <PageIcon isDisabled={currentPage === totalPage} onClick={() => onChange(totalPage)}>
          <Icon
            code="e623"
            color={getColor('text_black')}
            css={css`
              width: ${1 * fontsize}px;
              height: ${1 * fontsize}px;
              transform: rotate(180deg);
            `}
          />
        </PageIcon>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <span>跳转到</span>
          <input
            css={css`
              border: 1px solid ${getColor('text_black')};
              width: ${3 * fontsize}px;
              margin: 0 ${0.5 * fontsize}px;
              outline: none;
              text-align: center;
              background: ${getColor('info_bg')};
              color: ${getColor('special_1')};
            `}
            value={currentValue}
            onChange={() => {}}
            onInput={(e) => handleChangeValue(e.target.value)}
            onKeyDown={(e) => {
              if (currentValue === '') {
                return;
              }
              if (e.key && e.key === 'Enter') {
                onChange(currentValue);
              }
            }}
          />
          <span>页</span>
        </div>
      </div>
    );
  },
);

export default Pagination;
