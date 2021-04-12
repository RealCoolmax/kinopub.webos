import React, { useCallback, useMemo } from 'react';
import CheckboxItem from '@enact/moonstone/CheckboxItem';
import map from 'lodash/map';
import styled from 'styled-components';

import { Bookmark } from 'api';
import useApi from 'hooks/useApi';
import useApiMutation from 'hooks/useApiMutation';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BookmarkItem = styled.div`
  flex-basis: 20%;
  padding: 1rem;
`;

type Props = {
  itemId: string;
};

const Bookmarks: React.FC<Props> = ({ itemId }) => {
  const { data } = useApi('bookmarks');
  const { data: itemBookmarks, dataUpdatedAt, refetch } = useApi('itemBookmarks', itemId);
  const { bookmarkToggleItemAsync } = useApiMutation('bookmarkToggleItem');
  const bookmarksIds = useMemo(() => itemBookmarks?.folders.map((bookmark) => bookmark.id) || [], [itemBookmarks?.folders]);

  const handleCheckboxToggle = useCallback(
    (bookmark: Bookmark) => async () => {
      await bookmarkToggleItemAsync([itemId, bookmark.id]);
      refetch();
    },
    [itemId, bookmarkToggleItemAsync, refetch],
  );

  return (
    <Wrapper key={dataUpdatedAt}>
      {map(data?.items, (bookmark) => (
        <BookmarkItem key={bookmark.updated}>
          <CheckboxItem defaultSelected={bookmarksIds.includes(bookmark.id)} onToggle={handleCheckboxToggle(bookmark)}>
            {bookmark.title}
          </CheckboxItem>
        </BookmarkItem>
      ))}
    </Wrapper>
  );
};

export default Bookmarks;
