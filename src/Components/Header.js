import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div>
      <img
        className="absolute z-10 w-60 mx-20 my-5"
        src={LOGO_URL}
        alt="Logo"
      />
    </div>
  );
};

export default Header;
