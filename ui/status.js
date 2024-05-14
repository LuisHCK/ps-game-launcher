import { SCREEN_WIDTH } from "../config.js";
const font = new Font('default')
font.scale = 0.5

// Time
const currentTime = '12:34pm' // TODO: get the actual date
const currentTimeDimensions = font.getTextSize(currentTime)

// Status icons
const usbIcon = new Image('assets/usb.png')

const renderQueue = [
    {
        render: (x, y) => font.print(x, y, currentTime),
        width: currentTimeDimensions.width,
        height: currentTimeDimensions.height,
        x: 0,
        y: 0,
        margin: 6
    },
    {
        render: (x, y) => usbIcon.draw(x, y),
        width: 14,
        height: 14,
        x: 0,
        y: 12
    }
]

const xStart = renderQueue.reduce((acc, curr) => acc + curr.width, 0)

const renderStatus = () => {
    renderQueue.forEach((el, index) => {
        if (index === 0) {
            el.x = SCREEN_WIDTH - xStart - (el.margin || 0)
        } else {
            const prevEl = renderQueue[index - 1]
            if (prevEl) {
                el.x = prevEl.x  + prevEl.width + (prevEl.margin || 0)
            }
        }
        el.render(el.x, el.y)
    })
}

export default renderStatus
