import moment from 'moment';
import data from './data/data.json'

export default function getCurrentWaqt() {
    const day = moment(new Date()).format("D")
    const month = moment(new Date()).format("MMMM")
    const time = moment(new Date()).format("HH:mm")
    let x:any = data
    let y:any = "Tahajjud"
    Object.keys(x[month][day]).map((w:any,i:any)=>{
        // console.log(time)
        if(time>=x[month][day][w]["Start"]) {
            y=w
        }
    })
    return y
}

export const extractErrorMessage = (e: any, defaultMessage = 'Please try again') => {
  if (e && e.data && e.data.length) {
    var err = e.data;
    var errArrays = Object.values(err[0].errors);
    var msg = '';
    errArrays.map(x => {

      msg = msg + ' ' + x;
    })
    return msg;
  } else if (typeof (e.data) == 'object') {
    var keys = Object.keys(e.data);
    var values = Object.values(e.data);
    var msg = '';
    if (values && values.length) {
      values.map((x: any, i: number) => {
        if (typeof x == 'string') {
          msg = x;
          // return x;
        }
        else {
          let errorvalues = Object.values(x)
          if (errorvalues && errorvalues.length) {
            errorvalues.map((k: any, index: number) => {
              msg = msg + (index + 1) + ' : ' + k + '\n' + '\n';
            })
          }
        }
      })
      return msg;
    }
    return defaultMessage
  }
  else if (typeof (e) === 'string') {
    return e
  }
  else {
    return defaultMessage
  }
}