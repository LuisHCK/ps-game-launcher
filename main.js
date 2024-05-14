import renderStatus from "./ui/status.js";
import { MARGIN } from "./config.js";
import { renderGameList } from "./ui/gamelist.js";
const font = new Font('default')
font.scale = 0.5

// reset background color
const backgroundColor = Color.new(45, 45, 45)


// Avatar
const avatar = new Image('assets/avatar.png', VRAM)

os.setInterval(() => {
    // Basically creates an infinite loop, similar to while true(you can use it too).
    Screen.clear(backgroundColor) // Clear screen for the next frame.

    avatar.draw(MARGIN, MARGIN)
    renderStatus()

    renderGameList()

    Screen.flip() // Updates the screen.
}, 0)
