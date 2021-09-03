import axios from 'axios';
import { humanNatureBaseURL} from './constants';

export function shoppingApi() {
  const api = axios.create({
    baseURL: humanNatureBaseURL,
    headers: {
      common: {
        // Authorization: `Bearer ${user.token}`,
      },
    },
  });

  async function getHostedPaymentAuthToken() {
    const url = '/api/v1/merchant/accept-payment-page'
    return api.get(url);
  }

  return {
    api,
    getHostedPaymentAuthToken,
  };
}
