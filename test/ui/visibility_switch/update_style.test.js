import { describe, it, expect, vi } from "vitest"
import { get_vs } from "./conftest.js";

describe("update_style", () => {
    it('set all invisible but one', () => {
        const vs = get_vs()
        vs.update_style()
        const ct = vs.root.querySelector('#chart-container')
        expect(ct.style.display).toBe('none')
        const st = vs.root.querySelector('#scatter-container')
        expect(st.style.display).toBe('block')
    })
})
