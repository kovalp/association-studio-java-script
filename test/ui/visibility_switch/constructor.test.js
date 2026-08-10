import { describe, it, expect, vi } from 'vitest'
import { VisibilitySwitch } from '@/ui/visibility_switch.js'
import { get_root, get_map } from './conftest.js'

describe('VisibilitySwitch constructor', () => {
    it('should get elements and define the listener', () => {
        const root = get_root()
        const the_map = get_map()
        const vs = new VisibilitySwitch(root, '#main-menu-chart-type', the_map)
        expect(vs.select).toBeInstanceOf(HTMLSelectElement)
        expect(vs.root === root).toBe(true)
        expect(vs.value_element_map === the_map).toBe(true)
        expect(vs.select.value).toEqual('scatter')
        vs.save_state_callback('')
        vi.spyOn(vs, 'update_style')
        vs.select.dispatchEvent(new Event('change'))
        expect(vs.update_style).toHaveBeenCalledTimes(1)
    })
})
