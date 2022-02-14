
import { useState, useEffect } from 'react';
import './index.scss';
import FeatherIcon from 'feather-icons-react';
import styled from 'styled-components'
 
function ButtonStyle({ content = " ", checked = false, icon = "noIcon", size = "large", variant = "primary" }) {
  const [checkeState, setCheckeState] = useState();

  useEffect(() => {
    setCheckeState(checked)
  }, [checked]);

  return (
    <button onClick={() => setCheckeState(!checkeState)} background={"#fff"} className={`btn btn__${variant} btn__${size} btn__${icon}`} >
      <span>{content}</span>
      <FeatherIcon className="icon" size={size === "large" || size === "medium" ? "24px" : "16px"} icon={`${checkeState ? "check-circle" : "circle"}`} />
    </button>
  );
}

export default ButtonStyle;