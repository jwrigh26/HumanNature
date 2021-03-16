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

      // This can be achieved if all posts were put in one dir
      // import("./local" + path + ".js") and this would essentially work
      console.log('key', key);

      // setContentToRender(() => React.lazy(() => import("./articles/" + key + ".js")));
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
