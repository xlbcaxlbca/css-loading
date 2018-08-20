1
/*
02
* 解析matrix矩阵，0°-360°，返回旋转角度
03
* 当a=b||-a=b,0<=deg<=180
04
* 当-a+b=180,180<=deg<=270
05
* 当a+b=180,270<=deg<=360
06
*
07
* 当0<=deg<=180,deg=d;
08
* 当180<deg<=270,deg=180+c;
09
* 当270<deg<=360,deg=360-(c||d);
10
* */ 
function getdeg(matrix){
    var values = matrix.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];
    return getmatrix(a,b,c,d);
}


function getmatrix(a,b,c,d){ 
    var aa=Math.round(180*Math.asin(a)/ Math.PI); 
    var bb=Math.round(180*Math.acos(b)/ Math.PI); 
    var cc=Math.round(180*Math.asin(c)/ Math.PI); 
    var dd=Math.round(180*Math.acos(d)/ Math.PI); 
    var deg=0; 
    if(aa==bb||-aa==bb){ 
        deg=dd; 
    }else if(-aa+bb==180){ 
        deg=180+cc; 
    }else if(aa+bb==180){ 
        deg=360-cc||360-dd; 
    } 
    return deg>=360?0:deg; 
}

var id, left, right, deg = 0;
var isAdd = false;
var gapTime = 50;
var gapDeg = 10;
function circle(right, left, isAdd)
{
    clearInterval(id);
    if (isAdd) {
        id = setInterval(function() {
            deg += gapDeg;
            if (deg <= 180){
                right.style.transform = 'rotate(' + deg + 'deg)';
                right.style.WebkitTransform='rotate(' + deg + 'deg)';
            } 
            if (deg >= 180) {
                left.style.transform = 'rotate(' + (deg - 180) + 'deg)';
                left.style.WebkitTransform='rotate(' + (deg - 180) + 'deg)';
                if (deg >= 360) clearInterval(id);
            };
        }, gapTime);
    } else {
        if(deg <= 0) return;
        id = setInterval(function() {
            deg -= gapDeg;
            if (deg <= 180){
                right.style.transform = 'rotate(' + deg + 'deg)';
                right.style.WebkitTransform = 'rotate(' + deg + 'deg)';
            } 
            if (deg <= 0) clearInterval(id);
            if (deg >= 180) {
                left.style.transform = 'rotate(' + (deg - 180) + 'deg)';
                left.style.WebkitTransform = 'rotate(' + (deg - 180) + 'deg)';
            };
        }, gapTime);
    }
}

 export {circle}; 