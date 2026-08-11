import { describe, it, expect } from 'vitest'
import { get_cd } from './conftest.js'
import { ScoreStorage } from '@/metrics/score_storage.js'

describe('set_storage', () => {
    it('calls set_storage in each of the plots', () => {
        const cd = get_cd()
        vi.spyOn(cd.bivariate_plot, 'set_storage')
        vi.spyOn(cd.sample_series, 'set_storage')
        const storage = new ScoreStorage()
        cd.set_storage(storage)
        expect(cd.bivariate_plot.set_storage).toHaveBeenCalledWith(storage)
        expect(cd.sample_series.set_storage).toHaveBeenCalledWith(storage)
    })
})
