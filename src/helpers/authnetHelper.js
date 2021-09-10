import config from 'helpers/config';

const authData = {
  clientKey: config.authNetClientKey,
  apiLoginID: config.authNetLoginKey,
};

export function getAcceptPaymentNonce(cardData) {
  return new Promise((resolve, reject) => {
    function paymentFormUpdate(response) {
      resolve(response);
    }

    function responseHandler(response) {
      if (response.messages.resultCode === 'Error') {
        let i = 0;
        let message = '';
        while (i < response.messages.message.length) {
          message = `${message}
          ${response.messages.message[i].code}: ${response.messages.message[i].text}`;
          i = i + 1;
        }
        reject(new Error(message));
      } else {
        paymentFormUpdate(response.opaqueData);
      }
    }

    if (typeof window !== 'undefined') {
      window.Accept?.dispatchData({ authData, cardData }, responseHandler);
    }
  });
}
