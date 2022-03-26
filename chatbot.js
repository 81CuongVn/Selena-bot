const otherList = [{
name: 'Teonogueira',
  Idade: 31,
  Person: 'Selena',
  Clan: 'WindGarden',
  Rank: 'Mythic',

},
 {                  
  name: `Rick`,
  Idade: 35,
  Person: 'Kagura',
  Clan: 'WindGarden',
  Rank: 'Mythic',

}]
const filterAdmins = otherList.filter(item => item.name).reduce((acc, {name}) => acc + `${name} -- `, '');

//.slice('', -1)

const admins = JSON.stringify(filterAdmins)


const bits = `121200924hash`

const pClan = [

  {one: 'mobile2022'},
  {bits}
  
]

const listCommands = 'Membros superiores: Teófilo Nogueira, Bot Selena. Para mais detalhes entre em contato com : cyberstileid397@gmail.com'

const list = JSON.stringify(otherList)
  const listTwo = JSON.stringify(pClan)

const list_3 = JSON.stringify(listCommands)
// exports.method = list
// exports.methodTwo = listTwo

module.exports = {
  method: list,
  methodTwo: listTwo,
  m_3: list_3,
  admins: admins
  
}


// /
///
///
