var rotationAngle = 0;

function ROTATEDIV() {
    rotationAngle += 90;
    document.getElementById("diva").style.transform
    = 'rotate(' + rotationAngle + 'deg)';
}