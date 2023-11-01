import logo from "../assets/logo.png";
import spinner from "../assets/Spinner.svg";

export default function Loading() {
  return (
    <div>
        <img src={logo} alt="" />
        <img className="mx-auto" src={spinner} alt="" />
    </div>
  )
}
