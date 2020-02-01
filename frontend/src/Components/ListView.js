import React, { useState, useEffect, memo, useRef, useMemo } from "react";
import { isEqual } from "lodash";
import { useScroll } from "./useScroll";

const listOffset = 400;

export const ListView = memo(
  ({
    data = [],
    renderItem = () => {},
    className,
    loaderCallback = () => {},
    keyExtractor = () => {}
  }) => {
    const [page, setPage] = useState(1);

    const listRef = useRef({});

    const listItems = useMemo(
      () =>
        data.map(renderItem).map((item, index) => ({
          ...item,
          key: keyExtractor(data[index], index)
        })),
      [data.length]
    );

    const checkScrollPosition = () => {
      if (!listRef.current) return;

      const scrollEndPosition =
        document.documentElement.scrollTop + window.innerHeight;
      const totalHeight =
        listRef.current.offsetHeight + listRef.current.offsetTop;

      if (scrollEndPosition >= totalHeight - listOffset) setPage(page + 1);
    };

    useScroll(checkScrollPosition);

    useEffect(() => {
      (page > 1 || !data.length) && loaderCallback(page);
    }, [page]);

    return (
      <div ref={listRef} className={className}>
        {listItems}
      </div>
    );
  },
  isEqual
);