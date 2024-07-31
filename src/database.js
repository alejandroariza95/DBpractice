const mysql = require('promise-mysql')
const dotenv = require('dotenv')

dotenv.config()

const connetion = mysql.createConnection({
  host:process.env.HOST,
  database:process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD
})

const getConnection = async () => await connetion

module.exports = {
  getConnection
}