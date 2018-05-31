export default function reducer(state={
    id:'',
    idPatient:'',
    date:'',
    diets:[],
    week:{
        day1:{
            breakfast:'',
            snack1:'',
            luch:'',
            snack2:'',
            dinner:''
        },
        day2:{
            breakfast:'',
            snack1:'',
            luch:'',
            snack2:'',
            dinner:''
        },
        day3:{
            breakfast:'',
            snack1:'',
            luch:'',
            snack2:'',
            dinner:''
        },
        day4:{
            breakfast:'',
            snack1:'',
            luch:'',
            snack2:'',
            dinner:''
        },
        day5:{
            breakfast:'',
            snack1:'',
            luch:'',
            snack2:'',
            dinner:''
        },
        day6:{
            breakfast:'',
            snack1:'',
            luch:'',
            snack2:'',
            dinner:''
        },
        day7:{
            breakfast:'',
            snack1:'',
            luch:'',
            snack2:'',
            dinner:''
        }
    }
},action){
    switch(action.type){
        case "DIET":{
            return {...state,
                id: action.payload.id,
                idPatient: action.payload.idPatient,
                date: action.payload.date,
                week:{
                    day1:{
                        breakfast: action.payload.week.day1.breakfast,
                        snack1: action.payload.week.day1.snack1,
                        luch: action.payload.week.day1.luch,
                        snack2: action.payload.week.day1.snack2,
                        dinner: action.payload.week.day1.dinner
                    },
                    day2:{
                        breakfast: action.payload.week.day2.breakfast,
                        snack1: action.payload.week.day2.snack1,
                        luch: action.payload.week.day2.luch,
                        snack2: action.payload.week.day2.snack2,
                        dinner: action.payload.week.day2.dinner
                    },
                    day3:{
                        breakfast: action.payload.week.day3.breakfast,
                        snack1: action.payload.week.day3.snack1,
                        luch: action.payload.week.day3.luch,
                        snack2: action.payload.week.day3.snack2,
                        dinner: action.payload.week.day3.dinner
                    },
                    day4:{
                        breakfast: action.payload.week.day4.breakfast,
                        snack1: action.payload.week.day4.snack1,
                        luch: action.payload.week.day4.luch,
                        snack2: action.payload.week.day4.snack2,
                        dinner: action.payload.week.day4.dinner
                    },
                    day5:{
                        breakfast: action.payload.week.day5.breakfast,
                        snack1: action.payload.week.day5.snack1,
                        luch: action.payload.week.day5.luch,
                        snack2: action.payload.week.day5.snack2,
                        dinner: action.payload.week.day5.dinner
                    },
                    day6:{
                        breakfast: action.payload.week.day6.breakfast,
                        snack1: action.payload.week.day6.snack1,
                        luch: action.payload.week.day6.luch,
                        snack2: action.payload.week.day6.snack2,
                        dinner: action.payload.week.day6.dinner
                    },
                    day7:{
                        breakfast: action.payload.week.day7.breakfast,
                        snack1: action.payload.week.day7.snack1,
                        luch: action.payload.week.day7.luch,
                        snack2: action.payload.week.day7.snack2,
                        dinner: action.payload.week.day7.dinner
                    }}
                }
            break;
        }
        case "DIET_LIST":{
            return {...state,diets: action.payload}
            break;
        }
    }
    return state;
}