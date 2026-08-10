import {describe, it, expect} from "vitest"
import Chart from "chart.js/auto";
import {get_bp} from "./conftest.js";

describe("constructor", () => {
    it('should define the attributes', () => {
        const bp = get_bp()
        expect(bp.select_x).toBeInstanceOf(HTMLSelectElement)
        expect(bp.select_y).toBeInstanceOf(HTMLSelectElement)
        expect(bp.chart).toBeInstanceOf(Chart)
    })
})
