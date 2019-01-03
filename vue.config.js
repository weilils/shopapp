/* eslint-disable */
const express = require('express')
const app = express()
var appData = require('./data.json')
var seller = appData
var seller = appData.seller//获取对应的本地数据
var goods = appData.goods
var ratings = appData.ratings
var apiRoutes = express.Router();
app.use('/api', apiRoutes)

module.exports = {
  lintOnSave: false,
  devServer: {
    //模拟数据开始
    before(app) {
      app.get('/api/seller', (req, res) => {
        res.json({
          errno: 0,
          data: seller
        })
      }),
        app.get('/api/goods', (req, res) => {
          res.json({
           
            errno: 0,
            data: goods
          })
        }),
        app.get('/api/ratings', (req, res) => {
          res.json({
            errno: 0,
            data: ratings
          })
        })
    },

  }
}