import {describe, it, expect, vi} from "vitest";
import { AppSettings } from "@/app_settings";

describe('constructor', () => {
    it('should define the attribute(s) even if they are absent', () => {
        const settings = new AppSettings()
        expect(settings.chart_type).toEqual('none')
    })

    it('should read the attribute(s) if they are present', () => {
        vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('scatter');
        const settings = new AppSettings()
        expect(settings.chart_type).toEqual('scatter')
    })

})

describe('save_chart_type', () => {
    it('should define the attribute and store the value', () => {
        vi.spyOn(Storage.prototype, 'setItem')
        const settings = new AppSettings()
        settings.save_chart_type('sample-series')
        expect(settings.chart_type).toEqual('sample-series')
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
        expect(localStorage.setItem).toHaveBeenCalledWith('chart-type', 'sample-series')
    })
})
