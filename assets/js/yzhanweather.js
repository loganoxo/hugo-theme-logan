const tpl = {
    container: {
        style: `
      position: fixed;
      top: 0;
      width: 100%;
      height: 0;
      display: flex;
      justify-content: space-evenly;
      pointer-events: none;
      z-index: 999;
    `
    },
    fall: {
        styles: [
            `animation-delay: .1s;
       animation-duration: 4s`,
            `animation-delay: .5s;
       animation-duration: 5s`,
            `animation-delay: .3s;
       animation-duration: 3s;
       animation-name: {keyframes2}`,
            `animation-delay: .2s;
       animation-duration: 3.5s;
       animation-name: {keyframes1}`,
            `animation-delay: .9s;
       animation-duration: 3s;
       animation-name: {keyframes1};
       animation-duration: 4.5s`,
            `animation-delay: .7s;
       animation-duration: 5.5s;
       animation-name: {keyframes1}`,
            `animation-delay: .4s;
       animation-duration: 3s`,
            `animation-delay: .6s;
       animation-duration: 4s;
       animation-name: {keyframes1}`,
            `animation-delay: .5s;
       animation-duration: 5.5s;
       animation-name: {keyframes2};`,
            `animation-delay: .3s;`,
            `animation-delay: .7s;
       animation-duration: 3.5s`,
            `animation-delay: .5s;
       animation-duration: 4s`,
            `animation-delay: .15s;
       animation-duration: 6.5s;
       animation-name: {keyframes2};`,
            `animation-delay: .5s;
       animation-duration: 6.5s;
       animation-name: {keyframes3};`,
            `animation-delay: .55s;
       animation-duration: 5.5s;
       animation-name: {keyframes3};`,
            `animation-delay: .75s;
       animation-duration: 7.5s;
       animation-name: {keyframes3};`,
        ],
        keyframes: [
            `animation-delay: .1s;
       animation-duration: 4s`,
            `animation-delay: .5s;
       animation-duration: 5s`,
            `animation-delay: .3s;
       animation-duration: 3s;
       animation-name: {keyframes2}`,
            `animation-delay: .2s;
       animation-duration: 3.5s;
       animation-name: {keyframes1}`,
            `animation-delay: .9s;
       animation-duration: 3s;
       animation-name: {keyframes1};
       animation-duration: 4.5s`,
            `animation-delay: .7s;
       animation-duration: 5.5s;
       animation-name: {keyframes1}`,
            `animation-delay: .4s;
       animation-duration: 3s`,
            `animation-delay: .6s;
       animation-duration: 4s;
       animation-name: {keyframes1}`,
            `animation-delay: .5s;
       animation-duration: 5.5s;
       animation-name: {keyframes2};`,
            `animation-delay: .3s;`,
            `animation-delay: .7s;
       animation-duration: 3.5s`,
            `animation-delay: .5s;
       animation-duration: 4s`,
            `animation-delay: .15s;
       animation-duration: 6.5s;
       animation-name: {keyframes2};`,
            `animation-delay: .5s;
       animation-duration: 6.5s;
       animation-name: {keyframes3};`,
            `animation-delay: .55s;
       animation-duration: 5.5s;
       animation-name: {keyframes3};`,
            `animation-delay: .75s;
       animation-duration: 7.5s;
       animation-name: {keyframes3};`,
        ],
        keyframes: [
            `from {
        opacity: .9;
      }
      to {
        transform: translate(10vw, 100vh) rotateX(45deg);
        opacity: .2;
      }`,
            `from {
        opacity: .9;
      }
      to {
        transform: translate(-10vw, 100vh) rotateY(45deg);
        opacity: .2;
      }`,
            `from {
        opacity: .9;
      }
      to {
        transform: translate(5vw, 100vh) rotateX(-45deg);
        opacity: .2;
      }`,
            `from {
        opacity: .9;
      }
      to {
        transform: translate(-5vw, 100vh) rotateX(-45deg);
        opacity: .2;
      }`
        ]
    },
    spread: {
        keyframes: [
            `from {
        transform: translateY(50vh) rotateZ(55deg) skew(5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(10vw, -100%) rotateZ(45deg);
        opacity: .9;
      }`,
            `from {
        transform: translateY(50vh) rotateZ(-55deg) skew(5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(-10vw, -100%) rotateZ(-45deg);
        opacity: .9;
      }`,
            `from {
        transform: translateY(50vh) rotateZ(155deg) skew(-5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(10vw, 105vh) rotateZ(145deg);
        opacity: .9;
      }`,
            `from {
        transform: translateY(50vh) rotateZ(195deg) skew(-5deg, 5deg);
        opacity: .1;
      }
      to {
        transform: translate(-10vw, 105vh) rotateZ(185deg);
        opacity: .9;
      }`,
        ]
    },
    snow: {
        style: `
      width: .5vw;
      height: .5vw;
      border-radius: 50%;
      background-color: white;
      border: 1px solid #fefefe;
      transform: translateY(-200%);
      animation: {keyframes0} 6s linear infinite;
    `,
    }
}
const yzh_config = {
    sakura: {
        num: 30,
        containerStyle: tpl.container.style,
        style: `
      width: 1.5vw;
      height: 1.5vh;
      border-radius: 50% 0;
      background-image: linear-gradient(to right, pink, white);
      transform: translateY(-100%);
      animation: {keyframes0} 4s linear infinite;
    `,
        styles: tpl.fall.styles,
        keyframes: tpl.fall.keyframes
    },
    snow: {
        num: 60,
        containerStyle: tpl.container.style,
        style: tpl.snow.style,
        styles: tpl.fall.styles,
        keyframes: tpl.fall.keyframes
    },
    rain: {
        num: 60,
        containerStyle: tpl.container.style,
        style: `
      width: .2vw;
      height: 1vw;
      border-radius: 30%;
      background-color: rgba(255, 255, 255, .5);
      transform: translateY(-100%);
      animation: {keyframes0} 6s ease-in-out infinite;
    `,
        styles: tpl.fall.styles,
        keyframes: tpl.fall.keyframes
    },
    firefly: {
        num: 60,
        containerStyle: tpl.container.style,
        style: tpl.snow.style.replace('white', '#fff06b'),
        styles: tpl.fall.styles,
        keyframes: tpl.spread.keyframes
    },
    butterfly: {
        num: 40,
        containerStyle: tpl.container.style,
        html: `
      <div class="wing"></div>
      <div class="wing"></div>
    `,
        style: {
            '' : `
        display: inline-block;
        position: relative;
        width: 1.25vw;
        height: 1.25vw;
        transform: translateY(-100%);
        animation: {keyframes0} 6s linear infinite;
      `,
            '::after': `
        position: absolute;
        content: ' ';
        background-color: lightgoldenrodyellow;
        border-radius: 50%;
        display: block;
        left: .5vw;
        width: .25vw;
        height: .75vw;
      `,
            '.wing': `
        position: absolute;
        width: .75vw;
        height: .75vw;
        animation: wing .3s infinite ease-in-out alternate;
      `,
            '.wing:last-child': `
        right: 0;
      `,
            '.wing:last-child::after': `
        right: .125vw;
        left: auto;
      `,
            '.wing::before': `
        position: absolute;
        content: ' ';
        display: block;
        width: .6vw;
        height: .6vw;
        background-color: lightyellow;
        border-radius: 50%;
      `,
            '.wing::after': `
        position: absolute;
        content: ' ';
        display: block;
        top: .5vw;
        left: .12vw;
        width: .5vw;
        height: .5vw;
        background-color: lightyellow;
        border-radius: 50%;
      `
        },
        keyframe: {
            'wing': `
        from {
          transform: scale(.9);
        }
        to {
          transform: scale(1.1);
        }`
        },
        styles: tpl.fall.styles,
        keyframes: tpl.spread.keyframes
    }
}



class YZhanWeather{
    constructor() {
        this.wrapper = document.createElement('DIV')
        document.body.appendChild(this.wrapper)
        this.styleSheet = this.wrapper.appendChild(document.createElement('STYLE')).sheet
        this.container = this.wrapper.appendChild(document.createElement('DIV'))
    }
    uuid() {
        return 'xxxxxxxxxx'.replace(/x/g, _ => (Math.random() * 16 | 0).toString(16))
    }
    createRules(rules, nameFn, ruleFn = v => v) {
        const names = []
        for (const rule of rules) {
            const name = 'yz' + this.uuid()
            names.push(name)
            this.styleSheet.insertRule(`${nameFn(name)} { ${ruleFn(rule)} }`, 0)
        }
        return names
    }
    createRule(rule, nameFn) {
        for (const name in rule) {
            this.styleSheet.insertRule(`${nameFn(name)} { ${rule[name]} }`, 0)
        }
    }
    createKeyfarme(rule) {
        this.createRule(rule, n => '@keyframes ' + n)
    }
    createKeyfarmes(rules) {
        return this.createRules(rules, n => '@keyframes ' + n)
    }
    createStyles(rules, nameFn, keyframeNames) {
        return this.createRules(rules, nameFn, rule => rule.replace(/\{keyframes(\d+)\}/g, (_, p) => keyframeNames[p]))
    }
    processStyles(styles, fn) {
        const n = styles.length
        for (let i = 0; i < n; i++) {
            const g = styles[i].match(/animation-duration:(?<duration>.*)/)
            if (g === null) continue
            fn(parseFloat(g.groups.duration), g.groups.duration, i)
        }
    }
    replaceStyles(styles, config) {
        let maxDuration = 0
        this.processStyles(styles, duration => maxDuration < duration && (maxDuration = duration))
        this.processStyles(styles, (duration, srcDuration, i) => {
            const newDuration = (duration / maxDuration) * config.maxDuration
            const dstDuration = srcDuration.replace(duration, newDuration)
            styles[i] = styles[i].replace(srcDuration, dstDuration)
        })
    }
    load(type, config) {
        let {num, html, containerStyle, style, styles, keyframe = {}, keyframes} = yzh_config[type]
        this.createKeyfarme(keyframe)
        const keyframeNames = this.createKeyfarmes(keyframes)
        if (typeof style === 'string') style = { '': style }
        this.createStyles([style['']], n => '.' + (this.container.className = n) + ' div', keyframeNames)
        this.createStyles([containerStyle], _ => '.' + this.container.className, keyframeNames)
        this.createRule(style, n => '.' + this.container.className + ' div' + (n[0] === ':' ? '' : ' ') + n)
        this.replaceStyles(styles, config)
        const classNames = this.createStyles(styles, n => ' .' + this.container.className + ' .' + n, keyframeNames)
        const fragement = document.createDocumentFragment()
        for (let i = 0; i < num; i++) {
            const div = document.createElement('DIV')
            if (html) div.innerHTML = html
            fragement.appendChild(div).className = classNames[i % classNames.length]
        }
        this.container.appendChild(fragement)
    }
    run(type, config = { maxDuration: 10 }) {
        this.clear()
        this.load(type, config)
    }
    clear() {
        this.container.innerHTML = ''
        while (this.styleSheet.cssRules.length) this.styleSheet.deleteRule(0)
    }
    destory() {
        this.wrapper.remove()
        this.wrapper = this.styleSheet = this.container = null
    }
}



const yzhanweather = new YZhanWeather()
// yzhanweather.clear() // Stop and clear all animations
// yzhanweather.destory() // Destory the instance and free up memory
//https://github.com/mantoufan/yzhanWeather

function yzhanweather_fun() {
    if (document.documentElement.dataset.scheme === "light") {
        yzhanweather.run('sakura', {// Options: sakura | snow | firefly | rain | butterfly 
            maxDuration: 8 // Default: 10s, this option can determine the speed of animations
        })
    } else {
        yzhanweather.run('firefly', {// Options: sakura | snow | firefly | rain | butterfly 
            maxDuration: 8 // Default: 10s, this option can determine the speed of animations
        })
    }
}

yzhanweather_fun();

window.addEventListener("onColorSchemeChange", (colorScheme) => {
    /*颜色变化了*/
    yzhanweather.clear() // Stop and clear all animations
    //yzhanweather.destory() // Destory the instance and free up memory
    yzhanweather_fun();
});