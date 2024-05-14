import { MARGIN, SCREEN_WIDTH } from '../config.js'
import { calculateAspectRatioFit } from '../utils/image.js'
import { games } from '../mockdata.js'

const MARGIN_TOP = 64
const TILE_MARGIN = 10
const TILE_WIDTH = SCREEN_WIDTH / 4 - TILE_MARGIN
let coverDimensions

export const renderGameList = () => {
    const cover = new Image('covers/cover.png')
    const filteredGames = games.slice(0, 4)
    const color = Color.new(255, 255, 255)
    coverDimensions = calculateAspectRatioFit(cover.width, cover.height, TILE_WIDTH, 400)

    Draw.rect(MARGIN - 3, MARGIN_TOP - 3, coverDimensions.width + 6, coverDimensions.height + 6, color)

    filteredGames.forEach((game, index) => {
        cover.width = coverDimensions.width
        cover.height = coverDimensions.height

        const margin = index !== 0 ? TILE_MARGIN : 0

        cover.draw(MARGIN + index * (coverDimensions.width + margin), MARGIN_TOP)
    })
}
