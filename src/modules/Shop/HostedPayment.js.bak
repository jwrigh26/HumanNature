import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const token =
  'tCmk+eHQgeq1ycbBH1Sl121kV0VfqrBuLKuvch9W27SDoxoAsw3Esyp7EQYspyAytnNbPq4pNWiU6KsRotTyOYPSQLuu3oBXI/aBusYxJ7i8Zwf20gV4+EdFfuxdH15G2W/8JuFwqas8PYK1qNkKod1G5wCplDFx/0mZu1x6lotCSBxitY3DJ0EI4u7mQvx24nPKtAAE26PR64+FW3YEYzsQKbUrdeqTTElcSZm5/1ZaOh9x7ab1RBYW5ZzOmbRlYoGKKw/4n2eq2/9R5g1Wsfk4yy/aM+PHCDidSByDDiPnpDKygWov7H/0Emf52wuk+29q3FsOlzOYo5xgt9SW7b76JR/JG/Ed5eiHuaMOju8mD09eT+ooiJ+7y89PYCWZ3jg1MAyOw0YG7wiHT9FLdl70WvVYzs/sf/A4N23frl9XazStb7VJb5ZYr3SQWrDcp58jSi8fRhi6XIhs0ae45Eu9N8+0W1ACol9TZpKkXzrapwunrwgSX87bHTu50cDQkd03pCRnFy1TY6NdyXiM30K12lgDnyiPf1rzYi9y+Ioa8ALpJlJGvfamVZi7W4wKDUZZf0jt0mtzdDmegmbFogt11cV5R1QQ+DxyuMgTT4uYfhAb+keYwJJiZWNZTHmB6bPQiXQ/96e6HJTkxqgYDsnieoN4q7IuGD+qr5efqz2RC9EOZUlVHTTGFuqZNWL3O3XqAlHh2ikPg6yflovPpyt5yEErEgLi9JFxQO0MwZyZ+4KNZ0IxmMr7TslYMHRlADEiflJJWhKlSk6F6lXNdwRcxcT2JWh0v7xm1fC2DzPnyqltHLIYEUl+4wHyyJoMChvXxNyqzAnzGv4VAMBbF2Vr+W6YKCBulHvaiFNi4kg=.99QWcd7W';

export default function HostedPayment() {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [hidden, setHidden] = useState(true);

  const testURL = 'https://test.authorize.net/payment/payment';

  async function handleShowPaymentForm() {
    setHidden(false);
    // const response = await axios({
    //   method: 'post',
    //   url: 'https://test.authorize.net/payment/payment',
    //   data: JSON.stringify({ token }),
    //   headers: {
    //     // 'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     // 'content-type': 'application/json',
    //   },
    // });
    // const response = await axios.post(
    //   'https://test.authorize.net/payment/payment',
    //   {
    //     token,
    //     // target: 'add_payment',
    //   },
    //   {
    //     headers: {
    //       // 'Access-Control-Allow-Origin': 'https://test.authorize.net',
    //       'Access-Control-Allow-Origin': '*'
    //     },
    //   }
    // );

  
    const response = await fetch(testURL, {
      method: 'POST', // or 'PUT'
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ token, target: 'add_payment' }),
    });

    // if (window) {
    //   window.open(testURL);
    // }
    console.log(`${JSON.stringify(response, null, 2)}`);
  }
  const style = { width: '90%', maxWidth: '1000px' };

  return (
    <div className={classes.root}>
      <div>
        Open Authorize.net in an iframe to complete transaction
        <button id="btnOpenAuthorizeNetIFrame" onClick={handleShowPaymentForm}>
          Show Payment Form
        </button>
      </div>
      <div id="iframe_holder" className="center-block" style={style}>
        <iframe
          id="add_payment"
          className="embed-responsive-item panel"
          name="add_payment"
          width="100%"
          frameBorder="0"
          scrolling="no"
          hidden={hidden}
        ></iframe>
      </div>
      {/* <form id="send_token" action="" method="post" target="add_payment">
        <input type="hidden" name="token" value={token} />
      </form> */}
    </div>
  );
}
