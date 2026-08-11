import { describe, it, expect } from 'vitest'
import { get_cd } from './conftest.js'

describe('update', () => {
    it('calls update in each of the plots', () => {
        const cd = get_cd()
        vi.spyOn(cd.bivariate_plot, 'update')
        vi.spyOn(cd.sample_series, 'update')
        vi.spyOn(cd.bar_plot, 'update')
        cd.update()
        expect(cd.bivariate_plot.update).toHaveBeenCalledTimes(1)
        expect(cd.sample_series.update).toHaveBeenCalledTimes(1)
        expect(cd.bar_plot.update).toHaveBeenCalledTimes(1)
    })
})
