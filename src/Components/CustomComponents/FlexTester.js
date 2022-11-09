import { Button, Typography } from "@mui/material";
import React from "react";
import "../../Flex.css";
export const FlexTester = () => {
  return (
    <div className="flexi container black">
      <div className="flexi column full box ">
        <div className="flexi twelve bluez">
          <Button variant="contained" className="full">
            as
          </Button>
        </div>
        <div className="three black "></div>
        <div className="twelve bluez "></div>
        <div className="three black "></div>
        <div className="flexi column fifty-five orange ">
          <div className="four white"></div>
          <div className="flexi thirty bluez">
            <div className="three white"></div>
            <Button variant="contained" className="thirty">
              as
            </Button>
            <div className="three white"></div>
            <Button variant="contained" className="thirty">
              as
            </Button>
            <div className="three white"></div>
            <Button variant="contained" className="thirty">
              as
            </Button>
            <div className="three white"></div>
          </div>
          <div className="three white"></div>
          <div className="flexi thirty bluez"></div>
          <div className="three white"></div>
          <div className="flexi thirty bluez"></div>
        </div>
        <div className="three black "></div>
        <div className="twelve bluez "></div>
      </div>
      {/* <Button variant="contained" className="buttons bluez">
        as
      </Button>
      <div className="margin white ">
      </div>
      <Button variant="contained" className="buttons bluez ">
        dq
      </Button>
      <div className="margin white ">
      </div>
      <Button variant="contained" className="twice orange ">
        qw
      </Button>
      <div className="margin white ">
      </div>
      <Button variant="contained" className="buttons bluez ">
        ss
      </Button> */}
    </div>
  );
};
