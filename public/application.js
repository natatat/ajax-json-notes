$(document).ready(function(){
  $("#form1").on("submit", function(e){
    e.preventDefault()
    $.ajax({
      type: "POST",
      url: "/form",
      dataType: 'json', // this isn't necessary for it to twerk apparently?!, but it clarifies the type of data we're getting.
      data: $(this).serialize() // allows us to access the return value from our post '/form' route (in this case, the json object)
    }).done(function(mofuckindata){
      console.log(mofuckindata) // see the data object. look the data can be passed in as anything.
      $("input[type=text], textarea").val("") // this clears the input-text field
      $("p.first").append(" " + mofuckindata.one) // appends words to the first p tag in our html so it appurrz on da screen
      $("p.second").append(" " + mofuckindata.two) // appends words to the second p tag
    })
  })
})