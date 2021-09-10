import * as yup from 'yup';
import { checkoutStep } from '../constants';

export const steps = {
  [checkoutStep.customer]: {
    head: checkoutStep.shipping,
    name: checkoutStep.customer,
    tail: undefined,
  },
  [checkoutStep.shipping]: {
    head: checkoutStep.billing,
    name: checkoutStep.shipping,
    tail: checkoutStep.customer,
  },
  [checkoutStep.billing]: {
    head: checkoutStep.payment,
    name: checkoutStep.billing,
    tail: checkoutStep.shipping,
  },
  [checkoutStep.payment]: {
    head: undefined,
    name: checkoutStep.payment,
    tail: checkoutStep.billing,
  },
};

