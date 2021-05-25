import React, { useEffect } from 'react';

export default function useTitle(title) {
  useEffect(() => {
    // Set the document title and when the component
    // unmounts it's reset to whatever it was previously.
    const prevTitle = document.title;
    document.title = title;

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}