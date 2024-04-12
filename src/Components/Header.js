import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO_URL, USER_AVATAR } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <>
      <div className="absolute w-screen bg-gradient-to-t from-transparent to-black z-10 flex justify-between">
        <img className="w-60 mx-20 my-5" src={LOGO_URL} alt="Logo" />
        {user && (
          <div className="flex mt-5 mx-5">
            <img
              className="w-10 h-11 mt-10 mx-5"
              src={USER_AVATAR}
              alt="User Avatar"
            />
            <button
              onClick={handleSignout}
              className="w-20 h-10 mt-10 rounded-full bg-red-600 font-bold text-white"
            >
              Signout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
