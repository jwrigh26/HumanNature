import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

Section.propTypes = {
  classes: PropTypes.any,
};

function Section({ classes }) {
  return (
    <>
      <Typography id={'2'} variant="h5" component="h3" gutterBottom>
        2. Privacy Policy
      </Typography>
      <Typography variant="body2" classes={{ body2: classes.body2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. In pellentesque
        massa placerat duis ultricies lacus sed turpis tincidunt. A lacus
        vestibulum sed arcu. Nisl tincidunt eget nullam non nisi est. Erat
        imperdiet sed euismod nisi. Sodales ut etiam sit amet nisl purus in
        mollis. Nullam eget felis eget nunc lobortis mattis aliquam faucibus.
        Senectus et netus et malesuada fames ac turpis egestas integer. Lacinia
        quis vel eros donec ac odio. Convallis aenean et tortor at risus. Sit
        amet justo donec enim diam. Ullamcorper velit sed ullamcorper morbi
        tincidunt.
      </Typography>
      <ol className={classes.listStyleAlpha}>
        <li>
          <Typography variant="body2">
            Feugiat pretium nibh ipsum consequat nisl vel. Purus viverra
            accumsan in nisl nisi scelerisque eu ultrices vitae. Dignissim cras
            tincidunt lobortis feugiat vivamus at. Accumsan sit amet nulla
            facilisi morbi tempus iaculis urna id. Nullam vehicula ipsum a arcu
            cursus vitae. Augue ut lectus arcu bibendum at.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Neque volutpat ac tincidunt vitae. Aliquet porttitor lacus luctus
            accumsan. Vivamus arcu felis bibendum ut tristique et egestas.
            Laoreet suspendisse interdum consectetur libero. Vitae tortor
            condimentum lacinia quis vel. Amet consectetur adipiscing elit
            pellentesque habitant morbi tristique senectus. Leo integer
            malesuada nunc vel risus commodo.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor eget dolor morbi non arcu. Tincidunt nunc pulvinar sapien
            et ligula.
          </Typography>
        </li>
        <ol className={classnames(classes.listStyleLowerRoman, classes.marginTop)}>
          <li>
            <Typography variant="body2">
              Feugiat pretium nibh ipsum consequat nisl vel. Purus viverra
              accumsan in nisl nisi scelerisque eu ultrices vitae. Dignissim
              cras tincidunt lobortis feugiat vivamus at. Accumsan sit amet
              nulla facilisi morbi tempus iaculis urna id. Nullam vehicula ipsum
              a arcu cursus vitae. Augue ut lectus arcu bibendum at.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Neque volutpat ac tincidunt vitae. Aliquet porttitor lacus luctus
              accumsan. Vivamus arcu felis bibendum ut tristique et egestas.
              Laoreet suspendisse interdum consectetur libero. Vitae tortor
              condimentum lacinia quis vel. Amet consectetur adipiscing elit
              pellentesque habitant morbi tristique senectus. Leo integer
              malesuada nunc vel risus commodo.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Porttitor eget dolor morbi non arcu. Tincidunt nunc pulvinar
              sapien et ligula.
            </Typography>
          </li>
          <ul
            className={classnames(classes.listStyleCircle, classes.marginTop)}
          >
            <li>
              <Typography variant="body2">
                Feugiat pretium nibh ipsum consequat nisl vel. Purus viverra
                accumsan in nisl nisi scelerisque eu ultrices vitae. Dignissim
                cras tincidunt lobortis feugiat vivamus at. Accumsan sit amet
                nulla facilisi morbi tempus iaculis urna id. Nullam vehicula
                ipsum a arcu cursus vitae. Augue ut lectus arcu bibendum at.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Neque volutpat ac tincidunt vitae. Aliquet porttitor lacus
                luctus accumsan. Vivamus arcu felis bibendum ut tristique et
                egestas. Laoreet suspendisse interdum consectetur libero. Vitae
                tortor condimentum lacinia quis vel. Amet consectetur adipiscing
                elit pellentesque habitant morbi tristique senectus. Leo integer
                malesuada nunc vel risus commodo.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Porttitor eget dolor morbi non arcu. Tincidunt nunc pulvinar
                sapien et ligula.
              </Typography>
            </li>
          </ul>
        </ol>
      </ol>
    </>
  );
}

export default Section;
