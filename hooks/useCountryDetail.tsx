import { useEffect, useReducer } from "react";
import {
	API_COOUNTRY,
	SET_LOADING,
	FETCH_ERROR,
	FETCH_SUCCESS,
	countryReducer,
} from "@/utils";

const intialState: CountryState = {
	country: null,
	loading: false,
	error: null,
};

export function useCountryDetail(cca3: string | string[]) {
	const [{ country, loading, error }, dispatch] = useReducer(
		countryReducer,
		intialState,
	);

	useEffect(() => {
		const countryCode = Array.isArray(cca3) ? cca3[0] : cca3;

		async function fetchCountry() {
			dispatch({ type: SET_LOADING, payload: true });
			try {
				const response = await fetch(`${API_COOUNTRY}${countryCode}`);
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();
				if (Array.isArray(data) && data.length > 0) {
					dispatch({ type: FETCH_SUCCESS, payload: data[0] });
				} else {
					throw new Error("No country data found");
				}
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

		fetchCountry();
	}, [cca3]);

	return { country, loading, error };
}
