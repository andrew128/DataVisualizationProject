//takes parameters that are: name of the file and the column to be represented
//it takes in the name of the data file and processes it to be readable. 
var loadcsv = function(name, column)
{
  d3.tsv(name, function(data){
    d = data.map(function(d){
      //splits the text file into lines
      var line=d.Row.split(/[\s,]+/);
      var nums=[]

      //splits lines into tokens(separated by whitespace)
      line.forEach(function(e){
        nums.push(parseFloat(e))
      })
      return nums
    })
    //calls the draw method 
    draw(d, column);
  })
}
