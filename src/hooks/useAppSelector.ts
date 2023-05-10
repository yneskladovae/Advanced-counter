import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppRootState} from "../bll/store";

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector