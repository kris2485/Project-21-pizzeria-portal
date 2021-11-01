import Axios from 'axios';
import { api } from '../settings.js';

/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_TABLES_STATUS = createActionName('FETCH_TABLES_STATUS');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const fetchTablesStatus = (payload) => ({ payload, type: FETCH_TABLES_STATUS });
/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`${api.url}/api/${api.tables}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchStatusFromAPI = (tableId, status) => {
  return (dispatch, getState) => {
    Axios.put(`${api.url}/api/${api.tables}/${tableId}`, { status })
      .then((res) => {
        dispatch(fetchTablesStatus({ id: res.data.id, status: res.data.status }));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_TABLES_STATUS: {
      return {
        ...statePart,
        data: statePart.data.map((stat) => (stat.id === action.payload.id ? { ...stat, status: action.payload.status } : stat)),
      };
    }
    default:
      return statePart;
  }
}
