const date = new Date();

const getHour = date.getHours();

const getMin = date.getMinutes();

const getSec = date.getSeconds();

const actualHour = `${getHour}:${getMin}:${getSec}`


const tn = JSON.stringify(actualHour)

//

const year = date.getFullYear();


const commandsTutorial = 'https://www.youtube.com/watch?v=yeQjN3MBC-E&list=PLGR4z2d3JJwZJPIQA825HubWYg4uRW1Z7&index=2'

const webSite = 'http://teonogueira.42web.io/'

module.exports = {

  hour: tn,
  y: year,
  tutor: commandsTutorial,
  site: webSite
}


