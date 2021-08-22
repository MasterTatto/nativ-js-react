import {useSelector} from "react-redux";
import {CurrencyState, CurrencyType} from "./currencyReducer";
import {IGlobalState} from "./state";


export const select = (state: IGlobalState) => state.currency