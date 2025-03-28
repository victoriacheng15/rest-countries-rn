export const SET_LOADING = "SET_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

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
	switch (action.type) {
		case FETCH_SUCCESS:
			return {
				...state,
				country: action.payload,
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
