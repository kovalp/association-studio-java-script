import {describe, it, expect, vi} from "vitest"
import {get_bp} from "./conftest.js";

describe("update", () => {
    it('calls the chart.update(none)', () => {
        const bp = get_bp()
        vi.spyOn(bp.chart, 'update')
        bp.update()
        expect(bp.chart.update).toHaveBeenCalledTimes(1)
        expect(bp.chart.update).toHaveBeenCalledWith('none')
    })
})
