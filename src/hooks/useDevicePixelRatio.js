import { useEffect, useState } from 'react';
import * as R from 'ramda';

export const resolutions = Object.freeze({
  x1: 1,
  x2: 2,
  x3: 3,
  x4: 4,
});

export default function useDevicePixelRatio() {
  const [dpr, setDPR] = useState();

  useEffect(() => {
    const sum = (prev, mq) => {
      const value = window.matchMedia(mq)?.matches ? 1 : 0;
      return prev + value;
    };

    const dppx1 = `(min-resolution: 1dppx)`;
    const dppx2 = `(min-resolution: 2dppx)`;
    const dppx3 = `(min-resolution: 3dppx)`;
    const dppx = [dppx1, dppx2, dppx3].reduce(sum, 0);

    const r1 = `(-webkit-device-pixel-ratio: 1)`;
    const r2 = `(-webkit-device-pixel-ratio: 2)`;
    const r3 = `(-webkit-device-pixel-ratio: 3)`;
    const retina = [r1, r2, r3].reduce(sum, 0);

    setDPR(R.max(dppx, retina));
  }, []);
  return dpr; // device pixel ratio
}
