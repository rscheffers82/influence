// <-- New setup --->
// provide a date
// strip the year, month and day
// run each value through numberMax(value, 9)
// add all results
// run each value through numberMax(value, 22)

const moment = require('moment');


const influence = (date) => {
  //helper function
  const numberMax = (value, max) => {
    value = parseInt(value);
    if (typeof value !== 'number') return 'error';

    if (value <= max ) return value;

    var numberArr = value.toString().split('');
    const sum = numberArr.reduce((total, newVal) => total + parseInt(newVal), 0);
    return numberMax(sum, max);
  }

  // validation for date
  const year = moment(date).year();
  const month = 1 + moment(date).month();
  const day = moment(date).date();

  const dateTotal =
    numberMax(year, 9) +
    numberMax(month, 9) +
    numberMax(day, 9);
  return numberMax(dateTotal, 22);
}

const number = influence(moment());
console.log('influence: ', number);

// // ugly calculation which will be updated once this project moves on to a react app
//
// for (var count = 0; count < 5; count++){
//   let num = 0;
//   let date, month, numDay, day;
//   let stringDateDay = [];
//
//   date = new Date( new Date().getTime() + count * 24 * 60 * 60 * 1000 );
//   month = (date.getMonth()+1).toString();
//   numDay = date.getDate()
//   day = numDay.toString();
//   stringDateDay[count] = (
//     date.getFullYear() + '-' +
//     (month.length < 2 ? '0' + month : month) + '-' +
//     (day.length < 2 ? '0' + day : day )
//   ).toString();
//
//   num = (day == 16 || day == 18 || day == 21) ? day : influence(stringDateDay[count]);
//
//   if (num == 16 || num == 18 || num == 21) {
//     $('.result.day' + count).addClass('red');
//   }
//
//   $('.date.day' + count).text( stringDateDay[count] );
//   $('.result.day' + count).text( num );
//
// }
