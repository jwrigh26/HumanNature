import { useEffect, useState } from 'react';
import config from 'helpers/config';

const authData = {
  clientKey: config.authNetClientKey,
  apiLoginID: config.authNetLoginKey,
};

export function useAcceptCardPayment(cardData) {

  useEffect(()=> {
    if (typeof window !== 'undefined') {
      window.Accept?.dispatchData({authData, cardData}, responseHandler);
    }
  }, [data])


  function paymentFormUpdate(response) {
    console.log(`${JSON.stringify(response, null, 2)}`);
    const {dataDescriptor, dataValue} = response;
  }

  function responseHandler(response) {
    if (response.messages.resultCode === 'Error') {
      let i = 0;
      while (i < response.messages.message.length) {
        console.log(
          response.messages.message[i].code +
            ': ' +
            response.messages.message[i].text
        );
        i = i + 1;
      }
    } else {
      paymentFormUpdate(response.opaqueData);
    }
  }

  

  return {

  }
}