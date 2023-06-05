import { useDispatch } from 'react-redux'
import { ACTIONS } from '../../../config'

export function useAppIslamicAction() {

  const dispatch = useDispatch()

  const namesOfAllah = (data: any) => {
    dispatch({
      type: ACTIONS.NAMES_OF_ALLAH,
      payload: data,
    })
  }

  return {
    namesOfAllah,
  }
}