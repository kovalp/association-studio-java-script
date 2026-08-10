import { describe, it, expect, vi } from "vitest"
import { get_vs } from "./conftest.js";

describe("change handler", () => {
    it('should call downstream', () => {
        const vs = get_vs()
        vi.spyOn(vs, 'update_style')
        vi.spyOn(vs, 'save_state_callback')
        vs.change_handler()
        expect(vs.update_style).toHaveBeenCalledTimes(1)
        expect(vs.save_state_callback).toHaveBeenCalledTimes(1)
        expect(vs.save_state_callback).toHaveBeenCalledWith('scatter')
    })
})
