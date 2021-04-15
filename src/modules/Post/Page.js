import React, { useEffect } from 'react';
import useFirebase from 'hooks/useFirebase';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MyButton from 'components/Button';
import PlainButton from 'components/PlainButton/PlainButton';
import { Typography } from '@material-ui/core';

function Page() {
  const firebase = useFirebase();

  // useEffect(() => {
  //   const hello = firebase?.functions()?.httpsCallable('helloWorld');
  //   async function foo() {
  //     try {
  //       await hello();
  //     } catch (error) {
  //       console.log('FB Error!');
  //       console.log(error);
  //     }
  //   }
  //   if (firebase) {
  //     foo();
  //   }
  // }, [firebase]);

  return (
    <>
      <Typography variant="h1">Hello, Aberdeen</Typography>
      <Typography variant="h3">Hello, Aberdeen</Typography>
      <h2>This is normal stuff</h2>
      <p>Some cat</p>
      <Typography variant="body1">
        React doesn’t require using JSX, but most people find it helpful as a
        visual aid when working with UI inside the JavaScript code. It also
        allows React to show more useful error and warning messages.
      </Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <MyButton>My Custom</MyButton>
      <PlainButton>Plain Button</PlainButton>
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
