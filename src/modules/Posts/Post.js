import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { postSelector } from 'store/postSlice';
import posts from 'src/posts.map';
import { hasValue } from 'helpers/utils';
import css from './post.module.scss';

function Post() {
  const { content } = useSelector(postSelector);
  const NoContent = () => null;

  let Herp = posts?.strawberryCake?.Article;
  const [ContentToRender, setContentToRender] = useState(() => NoContent);

  useEffect(() => {
    const { key } = content ?? {};
    if (hasValue(key)) {
      console.log('Content', key);
      console.log(ContentToRender);
      setContentToRender(() => posts?.[key]?.Article);
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
