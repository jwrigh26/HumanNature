import React, { useEffect, useMemo, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { postSelector } from 'store/postSlice';
import { hasValue } from 'helpers/utils';
import css from './post.module.scss';

function Post() {
  const { content } = useSelector(postSelector);
  const NoContent = () => null;
  const [ContentToRender, setContentToRender] = useState(() => NoContent);

  useEffect(() => {
    const { key } = content ?? {};
    if (hasValue(key)) {
      setContentToRender(() => React.lazy(() => import(`./articles/${key}.js`)));
    }
  }, [content]);

  return (
    <section>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ContentToRender />
      </Suspense>
    </section>
  );
}

export default Post;
