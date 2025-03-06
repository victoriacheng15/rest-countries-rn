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

const sortOptions = [
	{ label: "Region", value: "region" },
	{ label: "Area", value: "area" },
	{ label: "Population", value: "population" },
	{ label: "Border Countries", value: "borderCountries" },
	{ label: "Capital", value: "capital" },
];

export {
	API_COUNTRY_LIST,
	API_COOUNTRY,
	SET_LOADING,
	FETCH_SUCCESS,
	FETCH_ERROR,
	countryListReducer,
	COLORS,
	sortOptions,
};
