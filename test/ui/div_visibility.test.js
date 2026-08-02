import { describe, it, expect } from 'vitest'
import { DivVisibility } from '@/ui/div_visibility.js'

function get_c() {
    const root = document.createElement('div')
    root.innerHTML = `
        <div id="ctrl-div" style="display: none"></div>
        <input id="chk-box" type="checkbox">
    `
    return new DivVisibility(root, '#chk-box', '#ctrl-div')
}

describe('constructor()', () => {
    it('should query the root ', () => {
        const div_vis = get_c()
        expect(div_vis.chk_box).toBeInstanceOf(HTMLInputElement)
        expect(div_vis.div).toBeInstanceOf(HTMLDivElement)
        expect(div_vis.div.style.display).toBe('none')
    })
})

describe('change callback', () => {
    it('sets display to block if checked ', () => {
        const div_vis = get_c()
        div_vis.chk_box.click()
        expect(div_vis.div.style.display).toBe('block')
        div_vis.chk_box.click()
        expect(div_vis.div.style.display).toBe('none')
    })
})
