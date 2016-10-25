function setup() {
  createCanvas( windowWidth , windowHeight );
}

function draw() {
  var x = random( 0 , windowWidth );
  var y = random( 0 , windowHeight );
  var d = random( 10 , 100 );
  ellipse( x , y , d , d );
}
