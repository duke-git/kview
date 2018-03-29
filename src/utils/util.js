/**
 * Created by dudaodong on 17/02/16.
 * 常用工具函数
 */

/**
 * @desc RGB颜色转换为16进制
 * @param  {} color RGB color
 */
function colorHex(color){
     const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
     if(/^(rgb|RGB)/.test(color)){
          let aColor = color.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");
          let strHex = "#";
          for(let i=0; i<aColor.length; i++){
               let hex = Number(aColor[i]).toString(16);
               if(hex === "0"){
                    hex += hex;    
               }
               strHex += hex;
          }
          if(strHex.length !== 7){
               strHex = color;    
          }
          return strHex;
     }else if(reg.test(color)){
          let aNum = color.replace(/#/,"").split("");
          if(aNum.length === 6){
               return color;    
          }else if(aNum.length === 3){
               let numHex = "#";
               for(let i=0; i<aNum.length; i+=1){
                    numHex += (aNum[i]+aNum[i]);
               }
               return numHex;
          }
     }else{
          return color;    
     }
};

/**
 * @desc 16进制颜色转换为RGB
 * @param  {} color hex color
 */
function colorRgb(color) {
     let sColor = this.toLowerCase();
     const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
     if(sColor && reg.test(sColor)){
          if(sColor.length === 4){
               let sColorNew = "#";
               for(let i=1; i<4; i+=1){
                    sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));    
               }
               sColor = sColorNew;
          }
          //处理六位的颜色值
          let sColorChange = [];
          for(let i=1; i<7; i+=2){
               sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));    
          }
          return "RGB(" + sColorChange.join(",") + ")";
     }else{
          return sColor;    
     }
}

/**
 * @desc 生成一个 RFC 4122 V4 的随机 UUID. eg. 5f9f5881-d6ff-4703-8ee0-99de1942133b
 */
function getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

// 判断参数是否是其中之一
function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

function camelCase(name) {
    return name.replace(/([\:\-\_]+(.))/, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(/^moz([A-Z])/, 'Moz$1');
}
// getStyle
function getStyle (element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch(e) {
        return element.style[styleName];
    }
}

function camelcaseToHyphen (str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// firstUpperCase
function firstUpperCase(str) {
    return str.toString()[0].toUpperCase() + str.toString().slice(1);
}

function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    };
    return map[toString.call(obj)];
}

// deepCopy
function deepCopy(data) {
    const t = typeOf(data);
    let o;

    if (t === 'array') {
        o = [];
    } else if ( t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if ( t === 'object') {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
}

// For Modal scrollBar hidden
let cached;
function getScrollBarSize (fresh) {
    if (fresh || cached === undefined) {
        const inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        const outer = document.createElement('div');
        const outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        const widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cached = widthContained - widthScroll;
    }
    return cached;
}

// Find components upward
function findComponentUpward (context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}
export {findComponentUpward};

// Find component downward
function findComponentDownward (context, componentName) {
    const childrens = context.$children;
    let children = null;

    if (childrens.length) {
        childrens.forEach(child => {
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
            }
        });

        for (let i = 0; i < childrens.length; i++) {
            const child = childrens[i];
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}

// Find components downward
function findComponentsDownward (context, componentName, components = []) {
    const childrens = context.$children;

    if (childrens.length) {
        childrens.forEach(child => {
            const name = child.$options.name;
            const childs = child.$children;

            if (name === componentName) components.push(child);
            if (childs.length) {
                const findChilds = findComponentsDownward(child, componentName, components);
                if (findChilds) components.concat(findChilds);
            }
        });
    }
    return components;
}

function scrollTop(el, from = 0, to, duration = 500) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000/60);
            }
        );
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) return;

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}

let Util = {
    colorHex,
    colorRgb,
    getUUID,
    scrollTop,
    deepCopy,
    oneOf,
    getStyle,
    getScrollBarSize,
    camelcaseToHyphen,
    firstUpperCase,
    findComponentUpward,
    findComponentDownward,
    findComponentsDownward,
};

export default Util;