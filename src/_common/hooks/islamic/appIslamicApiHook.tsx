import { SAGA_ACTIONS } from '../../../config';
import { useApiCall } from '../common/appApiCallHook'

export function useIslamicApi() {

    const callApi = useApiCall()

    const getNamesOfAllah = (onSuccess: Function, onError: Function) => {
        callApi(SAGA_ACTIONS.NAMES_OF_ALLAH, null, onSuccess, onError);
    }
    
    return {
        callGetNamesOfAllah: getNamesOfAllah,
    }
}