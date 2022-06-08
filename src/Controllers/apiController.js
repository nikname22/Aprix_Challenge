class apiController {

  helloMessage(req, res) {    
    return res.json({ "mensagem": "Hello World"})
  }

  findRepeated(req, res) {    
    var arr = req.body.words;
    var respArr = arr.filter(function (elem, i) {
      return arr.indexOf(elem) === i;
    });

    var distinct_words = respArr
    return res.json({ distinct_words})
  }

}
module.exports = new apiController();
