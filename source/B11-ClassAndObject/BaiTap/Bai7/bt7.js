
let Mouse1 = new Mouse('Jerry',10,15, true);
let chuotkeu = "chit chit";
let Cat1 = new Cat('Tom',20,16);
let meokeu = "meo meo";
console.log(Mouse1.VoiceMouse(chuotkeu));
console.log(Cat1.VoiceCat(meokeu));

Cat1.CatchMouse(Mouse1);

Cat1.EatMouse(Mouse1);

console.log(Mouse1.status + " " + Cat1.weight + " " + Cat1.speed)