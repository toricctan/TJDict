TJDict.engines.push({
  title: "Yahoo 字典",
  url: function(q){return "http://tw.dictionary.search.yahoo.com/search?p=" + q},
  resault: function(data){
    var body = $(TJDict.grepBody(data));
    return body.find('.explanation_wrapper').html();
  }
});