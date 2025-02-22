import {
	SET_LOADING,
	FETCH_SUCCESS,
	FETCH_ERROR,
	countryListReducer,
} from "./reducers";

const API_COUNTRY_LIST =
	"https://restcountries.com/v3.1/independent?status=true";
const API_COOUNTRY = "https://restcountries.com/v3.1/alpha/";

const COLORS = {
	primary: "#14213D",
	secondary: "#FCA311",
	tertiary: "#E5E5E5",
};

export { API_COUNTRY_LIST, API_COOUNTRY, countryListReducer, COLORS };
