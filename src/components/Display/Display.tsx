import { useContext } from "react";
import { PhoneContext } from "../../store/context/PhoneContext";
import "./Display.css";

const Display = (): JSX.Element => {
  const { phoneNumber } = useContext(PhoneContext);
  return <span className="number">{phoneNumber}</span>;
};

export default Display;
