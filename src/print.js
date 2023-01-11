export default function printDiv() {
  var divContents = document.getElementById("GFG").innerHTML;
  var a = window.open("", "", "height=500, width=500");
  a.document
    .write(`<html><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD' media='all' crossorigin='anonymous'>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-print-css/css/bootstrap-print.min.css' media='print'>`);
  a.document.write("<body > <h1>Crossword Puzzle</h1> <br>");
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
}
