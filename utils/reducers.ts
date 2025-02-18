import { SET_LOADING, FETCH_SUCCESS, FETCH_ERROR } from "@/utils";

type CountryListAction =
	| { type: typeof FETCH_SUCCESS; payload: Country[] }
	| { type: typeof FETCH_ERROR; payload: string | null }
	| { type: typeof SET_LOADING; payload: boolean };

type CountryAction =
	| { type: typeof FETCH_SUCCESS; payload: Country }
	| { type: typeof FETCH_ERROR; payload: string | null }
	| { type: typeof SET_LOADING; payload: boolean };

export function countryListReducer(
	state: CountryListState,
	action: CountryListAction,
) {
	switch (action.type) {
		case FETCH_SUCCESS:
			return {
				...state,
				countryList: action.payload,
				loading: false,
			};
		case FETCH_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
}

export function countryReducer(state: CountryState, action: CountryAction) {
	// TODO: Implement the countryReducer
}
