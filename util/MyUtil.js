/**
 * 计算鼠标相对于元素(element)相对位置
 */
function positionOfCursor(element, event) {
    let {x1, y1} = { x1: 0, y1: 0 };
    //得到鼠标的位置
    if (event.pageX || event.pageY) {
        x1 = event.pageX
        y1 = event.pageY
    } else {
        x1 = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
        y1 = event.clientY + document.body.scrollTop + document.documentElement.scrollTop
    }
    console.log('x1 y1:', { x1, y1 })

    //得到元素的位置
    let {x2, y2} = { x2: 0, y2: 0 };
    //method-1    一般得到元素的位置(不适用所有的情况比如tranform时或者有绝对定位时)
    x2 = element.offsetLeft
    y2 = element.offsetTop
    console.log('x2 y2:', { x2, y2 })

    //method-2
    x2 = element.getClientRects()[0].left + document.body.scrollLeft + document.documentElement.scrollLeft
    y2 = element.getClientRects()[0].top + document.body.scrollTop + document.documentElement.scrollTop

    console.log('x2 y2:', { x2, y2 })


    //得到鼠标相对于元素的位置
    return {
        x: x1 - x2,
        y: y1 - y2
    }

}


// 颜色操作中十六进制与十进制互相转换

function DecToHex(arg) {

    return arg.toString(16)
}


function  HexToDec(arg){

    return  parseInt(arg,16)
}








