var userDate = prompt();
function toDate(userDate) {
  var parts = userDate.split(",");
    return new Date(parts[2], parts[1]-1 , parts[0]);
};
var birth = toDate(userDate);
function calculateAge(birth) {
    var ageDifMs = Date.now() - birth.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

alert ('Вам ' + calculateAge(birth) +' лет');

var day = toDate(userDate).getDate();
var month = toDate(userDate).getMonth()
function zodiac(day,month){
   var zodiacSigns = {
    'capricorn':'Козерог',
    'aquarius':'Водолей',
    'pisces':'Рыбы',
    'aries':'Овен',
    'taurus':'Телец',
    'gemini':'Близнецы',
    'cancer':'Рак',
    'leo':'Лев',
    'virgo':'Девы',
    'libra':'Весы',
    'scorpio':'Скорпион',
    'sagittarius':'Стрелец'
  }
  if ((month == 11 && day >=22) || (month == 0 && day <= 20)) {
    return zodiacSigns.capricorn;
  } else if ((month == 0 && day >= 21) || (month == 1 && day <= 18)) {
    return zodiacSigns.aquarius;
  } else if((month == 1 && day >= 19) || (month == 2 && day <= 20)) {
    return zodiacSigns.pisces;
  } else if((month == 2 && day >= 21) || (month == 3 && day <= 20)) {
    return zodiacSigns.aries;
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return zodiacSigns.taurus;
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return zodiacSigns.gemini;
  } else if((month == 5 && day >= 22) || (month == 6 && day <= 22)) {
    return zodiacSigns.cancer;
  } else if((month == 6 && day >= 23) || (month == 7 && day <= 23)) {
    return zodiacSigns.leo;
  } else if((month == 7 && day >= 24) || (month == 8 && day <= 23)) {
    return zodiacSigns.virgo;
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return zodiacSigns.libra;
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 22)) {
    return zodiacSigns.scorpio;
  } else if((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return zodiacSigns.sagittarius;
  }
}
alert(zodiac(day,month));
