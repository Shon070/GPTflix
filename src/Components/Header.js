import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO_URL, USER_AVATAR } from "../utils/constants";
import { addUser, removeUser } from "../utils/store/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsub when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute w-screen bg-gradient-to-t from-transparent to-black z-10 flex justify-between">
        <img className="w-60 mx-9 my-5" src={LOGO_URL} alt="Logo" />
        {user && (
          <div className="flex mt-2 mx-5">
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
