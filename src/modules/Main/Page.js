import React, { useEffect } from 'react';
import useFirebase from 'hooks/useFirebase';
import { Link } from 'react-router-dom';

function Page() {
  const firebase = useFirebase();

  useEffect(() => {
    const hello = firebase?.functions()?.httpsCallable('helloWorld');
    async function foo() {
      try {
        await hello();
      } catch (error) {
        console.log('FB Error!');
        console.log(error);
      }
    }
    if (firebase) {
      foo();
    }
  }, [firebase]);

  return (
    <>
      <h1>Hello, Aberdeen</h1>
      <p>
        React doesn’t require using JSX, but most people find it helpful as a
        visual aid when working with UI inside the JavaScript code. It also
        allows React to show more useful error and warning messages.
      </p>
      <ul>
        <li>
          <Link to={'/post/old-school-lemons'}>Article: Old School Lemons</Link>
        </li>
        <li>
          <Link to={'/post/lemon-cake'}>Article: Lemon Cake</Link>
        </li>
        <li>
          <Link to={'/post/strawberry-cake'}>Article: Strawberry Cake</Link>
        </li>
      </ul>
    </>
  );
}
export default Page;
