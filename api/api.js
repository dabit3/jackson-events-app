var express = require('express')
import Nightmare from 'nightmare'
var $ = require('jquery')
var nightmare = Nightmare({ show: true })
var router = express.Router()

router.get('/', function (req, res) {
  var appdata = []
  if (appdata.length) {
    res.json(appdata)
  }
  nightmare
    .goto('http://www.jacksonfreepress.com/events/')
    .wait()
    .evaluate(function () {
      var children = []
      var event_list = $('.event_list > tbody > tr > td > h4 > a').toArray()
      $(event_list).each(function () {
        // children.push($(this).text())
        var obj = {}
        obj.text = $(this).text()
        obj.href = $(this).attr('href')
        children.push(obj)
        // children.push($(this).text())
      })
      return {
        event_listLength: event_list.length,
        children: children
      }
      // return document.getElementById('morning').innerText
    })
    .end()
    .then(function(data) {
      appdata = data
      res.json(data)
    })
})

module.exports = router
