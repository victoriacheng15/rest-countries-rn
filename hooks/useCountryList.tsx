import { useEffect, useMemo, useReducer } from "react";
import {
	API_COUNTRY_LIST,
	SET_LOADING,
	FETCH_ERROR,
	FETCH_SUCCESS,
	countryListReducer,
} from "@/utils";

const intialState: CountryListState = {
	countryList: [],
	loading: false,
	error: null,
};

export function useCountries() {
	const [{ countryList, loading, error }, dispatch] = useReducer(
		countryListReducer,
		intialState,
	);

	useEffect(() => {
		async function fetchCountryList() {
			dispatch({ type: SET_LOADING, payload: true });
			try {
				const response = await fetch(API_COUNTRY_LIST);
				const data = await response.json();
				dispatch({ type: FETCH_SUCCESS, payload: data });
			} catch (error) {
				if (error instanceof Error) {
					dispatch({ type: FETCH_ERROR, payload: error.message });
				} else {
					dispatch({ type: FETCH_ERROR, payload: "An unknown error occurred" });
				}
			} finally {
				dispatch({ type: SET_LOADING, payload: false });
			}
		}

		fetchCountryList();
	}, []);

	const sortedCountries = useMemo(() => {
		return [...countryList].sort((a, b) => {
			return a.name.common.localeCompare(b.name.common);
		});
	}, [countryList]);

	return { countryList: sortedCountries, loading, error };
}
