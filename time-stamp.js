const moment = require('moment')

module.exports = (req, res, next) => {
  req.time = moment()
  const dateTime = moment().format('YYYY-MM-DD HH:mm:ss')

  res.on('finish', () => {
    const resTime = moment()
    const diff = resTime.diff(req.time)

    console.log(`${dateTime} | ${req.method} from ${req.path} | total time: ${diff}ms`)
  })
  next()
}