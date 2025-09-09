import { useAppDispatch, useAppSelector } from "@/store";
import { switchModal } from "@/store/modalSlice";
import { logOut } from "@/store/userSlice";

export default function useLogInButton() {
  const { isLogined } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (isLogined) {
      dispatch(logOut());
    } else {
      dispatch(switchModal());
    }
  };
  return { isLogined, handleClick };
}
