// <-- New setup --->
// provide a date
// strip the year, month and day
// run each value through numberBelow10
// add all results
// run value through numberBelow22

var influence = (strDate) => {
  // pull the date apart into year, month and day
  var dateObj = {
    year: parseInt(strDate.slice(0,4)),
    month: parseInt(strDate.slice(5,7)),
    day: parseInt(strDate.slice(8,10))
  }

  // iterate over each value
  for(var part in dateObj) {
    if ( dateObj.hasOwnProperty(part) ){
      // add all numbers up
        // when above 10, add each digit until the result is below 10
      dateObj[part] = smallerThan10(dateObj[part]);
      if (dateObj[part] === 'error') {
        console.log('Error with date ' + strDate + '. ' + part + ' contained invalid value');
        return 'error';
      }
      console.log('Part: ' + part + " - value: " + dateObj[part]);
    }
  }
  // when above 22, add each digit until the result is below 22
  return smallerThan23( dateObj.year + dateObj.month + dateObj.day  );

}

var smallerThan10 = (value) => {
  // takes a number as input, returns a number

  if (typeof value !== 'number') return 'error';
  if ( value < 10 ) return value;
  var result = 0;

  var numberArr = value.toString().split('');
  numberArr.forEach(function(x){
    result += parseInt(x);
  });
  // console.log('within10: ', result);

  return (result > 9 ? smallerThan10(result) : result);
}

var smallerThan23 = (value) => {
  // takes a number as input, returns a number
  if (typeof value !== 'number') return 'error';
  if ( value < 23 ) return value;
  var result = 0;

  var numberArr = value.toString().split('');
  numberArr.forEach(function(x){
    result += parseInt(x);
  });
  // console.log('within22: ', result);

  return (result > 22 ? smallerThan23(result) : result);
}

// ugly calculation which will be updated once this project moves on to a react app

for (var count = 0; count < 5; count++){
  let num = 0;
  let date, month, numDay, day;
  let stringDateDay = [];

  date = new Date( new Date().getTime() + count * 24 * 60 * 60 * 1000 );
  month = (date.getMonth()+1).toString();
  numDay = date.getDate()
  day = numDay.toString();
  stringDateDay[count] = (
    date.getFullYear() + '-' +
    (month.length < 2 ? '0' + month : month) + '-' +
    (day.length < 2 ? '0' + day : day )
  ).toString();

  num = (day == 16 || day == 18 || day == 21) ? day : influence(stringDateDay[count]);

  if (num == 16 || num == 18 || num == 21) {
    $('.result.day' + count).addClass('red');
  }

  $('.date.day' + count).text( stringDateDay[count] );
  $('.result.day' + count).text( num );

}
