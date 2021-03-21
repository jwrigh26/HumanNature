import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import css from './plainbutton.module.scss';

PlainButton.propTypes = {
  children: PropTypes.any,
};

// export default function PlainButton(props) {
//   return <Button className={css.button}>{props.children}</Button>;
// }

export default function PlainButton(props) {
  return (
    <Button classes={{ root: css.button, label: css.button__label }}>
      {props.children}
    </Button>
  );
}
