import moment from 'moment';
import data from '../../config/data.json'

export default function getCurrentWaqt() {
    const day = moment(new Date()).format("D")
    const month = moment(new Date()).format("MMMM")
    const time = moment(new Date()).format("HH:mm")
    let x:any = data
    let y:any = "Tahajjud"
    Object.keys(x[month][day]).map((w:any,i:any)=>{
        console.log(time)
        if(time>=x[month][day][w]["Start"]) {
            y=w
        }
    })
    return y
}