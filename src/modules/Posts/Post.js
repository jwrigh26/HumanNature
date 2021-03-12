import React, { useEffect, useMemo, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { postSelector } from 'store/postSlice';
import { hasValue } from 'helpers/utils';
import posts from 'src/posts.map.json';
import css from './post.module.scss';

function Post() {
  const { content } = useSelector(postSelector);
  const NoContent = () => null;
  const [ContentToRender, setContentToRender] = useState(() => NoContent);



  useEffect(() => {
    const { key } = content ?? {};
    if (hasValue(key)) {
      console.log(posts?.[key]?.path);
      // Have to do it this way instead of lazy right now
      // Lazy won't find dynamic strings
      // require for dynamic "requires" .js here and not the path
      // due to how webpack "chunks" things.
      const Article = require(posts?.[key]?.path + ".js").default;
      setContentToRender(() => Article);

      // TODO: It would be nice to lazy load articles
      // This can be achieved if all posts were put in one file
      // We could right a script to move all posts out of their child files
      // and then for production does something like
      // import("./local" + path + "js") and this would essentially work
      // setContentToRender(() => React.lazy(() => import("./" + posts?.[key]?.path + ".js")));
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
