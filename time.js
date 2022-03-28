const date = new Date() ;

const getHour = date.getHours() -3;

const getMin = date.getMinutes();

const getSec = date.getSeconds();

const actualHour = `${getHour}:${getMin}:${getSec}`


const tn = JSON.stringify(actualHour)

//

const year = date.getFullYear();




module.exports = {

  hour: tn,
  y: year,
  
}


