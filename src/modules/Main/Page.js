import React, { useEffect } from 'react';
import useFirebase from 'hooks/useFirebase';

function Page() {
  const firebase = useFirebase();

  useEffect(() => {
    const hello = firebase?.functions()?.httpsCallable('helloWorld');
    async function foo() {
      try {
        console.log('Hey This is cool');
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
    </>
  );
}
export default Page;
