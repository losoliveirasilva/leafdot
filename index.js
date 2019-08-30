document.addEventListener('DOMContentLoaded', () => {
  var submit = document.querySelectorAll("#submit")[0];
  var days = document.querySelectorAll("#days");
  var table = document.querySelectorAll("#table");
  submit.addEventListener("click", function () {
    var number = parseInt(days.value);
    var header = `
      <tr>
        <th>1a Entrada</th>
        <th>1a Saída</th>
        <th>2a Entrada</th>
        <th>2a Saída</th>
      </tr>
    `
    var high = 5;
    for (i = 0; i < number; i++) {
      var low = 0
      var first = Math.floor(Math.random() * (high - low + 1) + low);
      var second = Math.floor(Math.random() * (high - low + 1) + low);
      low = second;
      var third = Math.floor(Math.random() * (high - low + 1) + low);
      low = third;
      var forth = Math.floor(Math.random() * (high - low + 1) + low);
      header += `<tr><th>${first}</th><th>${second}</th><th>${third}</th><th>${forth}</th></tr>`;
    } 

    table.innerHTML = header;
  });
});
