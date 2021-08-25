import React from "react";
import { Switch } from "antd";
// import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const style = {
  background: "black",
  border: "1px solid gray"
}

const Toggle = ({ checked, onChange }) => (
    <span className="toggle-control">
        {/* <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    /> */}
    <label htmlFor="dmcheck" />
        <Switch checked={checked} style={style} onChange={onChange} />
        {/* <FormGroup>
    <FormControlLabel
      control={<Switch  style={style} checked={checked} onChange={onChange} />}
    //   label="Normal"
    /></FormGroup> */}

    </span>
    );

export default Toggle;
