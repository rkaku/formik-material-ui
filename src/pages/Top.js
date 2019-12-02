import React from "react";
import Box from "@material-ui/core/Box";
import "pages/Top.css";
import mars from "data/mars.svg";
import martian from "data/martian.png";
import GettingStartedButton from "layouts/buttons/GettingStartedButton.js";

export default () => {
  return (
    <div className='wrapper' data-test='wrapper'>
      <Box mt={0.13} pt={0.8} pr={0.2} data-test='box'>
        <img
          id='background'
          src={mars}
          alt='mars'
          data-test='backgroundImage'
        />
        <img
          className='fluffy'
          src={martian}
          alt='martian'
          data-test='martianImage'
        />
        <h1 data-test='header'>Blockchain Playground</h1>
        <div id='button-wrapper' data-test='buttonWrapper'>
          <GettingStartedButton to={"/wallet"} data-test='button' />
        </div>
      </Box>
    </div>
  );
};
