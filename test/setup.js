import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to'
import { expect } from 'vitest'

expect.extend({ toBeDeepCloseTo })

const index_fixture = document.createElement('div')

index_fixture.innerHTML = `
    <button id="reset-btn"></button>
    <span id="score-val1">1</span>
    <span id="score-val2">2</span>
    <span id="score-val3">3</span>
    <input id="explain-mahalanobis-chk-box" type="checkbox">
    <div id="explain-mahalanobis-panel"></div>
    <input id="inp-x" type="number">
    <input id="inp-y" type="number">
    <input id="inp-yaw" type="number">
    <input id="inp-len" type="number">
    <input id="inp-wdt" type="number">

    <input id="precision-pos" type="number">
    <input id="precision-yaw" type="number">
    <input id="precision-size" type="number">
    
    <span id="sqr-pos-diff">sqr pos diff</span>
    <span id="sqr-yaw-diff">sqr yaw diff</span>
    <span id="sqr-size-diff">sqr size diff</span>
    <span id="sqr-maha-dist">sqr maha dist</span>
    
    <div id="stage">
        <canvas id="stage-ui" width="640" height="320"></canvas>
        <canvas id="stage-bg" width="640" height="320"></canvas>
    </div>

    <button id="main-menu-btn"></button>
    <div id="main-menu-div">
        <select id="main-menu-ref-size">
            <option value="1x1">1 by 1</option>
            <option value="3x1.5" selected>3 by 1.5</option>
        </select>
        <div id="main-menu-about">About...</div>
        <div id="main-menu-keyboard-shortcuts">Keyboard shortcuts...</div>
        <select id="main-menu-chart-type">
            <option value="none" selected>None</option>
            <option value="line" selected>Time series</option>
            <option value="scatter" selected>Bivariate</option>
        </select>
    </div>
    
    <dialog id="keyboard-shortcuts-modal">
        <button type="button" id="keyboard-shortcuts-modal-close-btn">&times;</button>
    </dialog>

    <dialog id="about-modal">
        <button type="button" id="about-modal-close-btn">&times;</button>
        <span id="version-number"></span>
    </dialog>
    
    <div id="bar-container"><canvas id="bar-scores"></canvas></div>
    <div id="chart-container"><canvas id="plot-scores"></canvas></div>
    <div id="scatter-container">
        <select id="select-data-x">
            <option selected value="giou">GIoU</option>
            <option disabled value="maha">Maha</option>
            <option value="smma">SMMa</option>
        </select>
        <select id="select-data-y">
            <option disabled value="giou">GIoU</option>
            <option selected value="maha">Maha</option>
            <option value="smma">SMMa</option>
        </select>
        <canvas id="scatter-scores"></canvas>
    </div>
`

export { index_fixture }
