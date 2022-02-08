import ReducerAction from "../utility/reducer-actions";
import Sh from "../utility/shared-helper";


export const defaultHttpStatusState = {
  canFireError: false,
  errorTitle: 'Oops',
  errorMessage: '',
  errorStatus: '',
  errorFields: {},
  successMessage: 'Successfully done',
  isSuccess: false
};

export default function httpStatusReducer(state, action) {

  switch (action.type) {

    case ReducerAction.AXIOS_ERROR:
      const errorResponse = action.value?.errorResponse;

      const errorData = errorResponse?.data;
      let msg = action.value?.errorMessage;

      return {
        ...state, ...{
          errorTitle: 'Ooops',
          errorMessage: msg,
          canFireError: !Sh.isEmpty(msg),
          errorStatus: errorResponse?.status || null,
          errorFields: errorData?.errors || {}
        }
      };

    case ReducerAction.AXIOS_SUCCESS:

      const successMsg = action.value?.successMessage;

      return {
        ...state, ...{
          successMessage: successMsg,
          isSuccess: !Sh.isEmpty(successMsg),
        }
      };

    case ReducerAction.INITIALIZE:
      return {
        ...state, ...defaultHttpStatusState
      }
    default:
      throw new Error();
  }

}