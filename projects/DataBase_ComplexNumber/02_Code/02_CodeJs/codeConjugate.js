
var colorScheme = new ColorScheme();

var scene = new MathSceneCanvas("canvasConjugate", colorScheme);

var a1 = scene.AddMathObject(new SingleMathObject(new Complex(1, 1), colorScheme.Arrow1Color, SingleMathObjectType.Simple, 2, new Vector2(0, 0), new Vector2(200, 200)));

var c1 = scene.AddMathObject(new ConjugateMathObject(a1, colorScheme.Arrow2Color, 2, new Vector2(300, 0), new Vector2(200, 200)));

scene.AddMathObject(new TextMathObject(function() { return "→";}, new Vector2(250, 100), new Vector2(50, 50)));


a1.SetText("x");
c1.SetImage("Img/conj1.png");

scene.Repaint();
