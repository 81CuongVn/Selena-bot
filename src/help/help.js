// Search Commands


const helpList = [
'useprefix: !',
'Hello',
'Bom dia',
'secretList',
'adminList',
'admins',
'time',
'tutorialDiscord',
'website',
  'tutorialReact',
  'selena'
]


const text = 'Comandos do servidor DGM:\n'

const help = `${text} ${JSON.stringify(helpList)}`;


module.exports = {

  help: help


}