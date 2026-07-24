import { describe, it as baseIt, expect } from 'vitest'
import { MahalanobisScore, get_mah_state } from '@/metrics/mahalanobis/score'
import { MahalanobisBox } from "@/metrics/mahalanobis/item"
import { MahalanobisPair} from "@/metrics/mahalanobis/pair";


describe('get_mah_state helper function', () => {
    it("should return correct value", async () => {
        const mah_state = get_mah_state([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(mah_state).toBeInstanceOf(Array)
        expect(mah_state).toBeDeepCloseTo([ 1, 2, -0.9899924966004454, 0.1411200080598672, 4, 5 ])
    });
})


const it = baseIt.extend({sa: ({}, use) => use(new MahalanobisScore())})

describe('MahalanobisScore constructor', () => {
    it('should have the attributes', ({ sa }) => {
        expect(sa.pair).toBeInstanceOf(MahalanobisPair);
        expect(sa.probe).toBeInstanceOf(MahalanobisBox);
        expect(sa.ref).toBeInstanceOf(MahalanobisBox);
        expect(sa.ref.xy_cs_lw).toBeDeepCloseTo([ 0.0, 0.0, 1.0, 0.0, 3, 1.5 ])
        expect(sa.probe.xy_cs_lw).toBeDeepCloseTo([ 0.0, 0.0, 1.0, 0.0, 3, 1.5 ])
    })
})


describe('MahalanobisScore set_ref method', () => {
    it('should set the ref box from (xy, yaw, size)', ({ sa }) => {
        const id_before = sa.ref.xy_cs_lw
        sa.set_ref([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(sa.ref.xy_cs_lw === id_before).toBe(true)
        expect(sa.ref.xy_cs_lw).toBeDeepCloseTo([ 1, 2, -0.9899924966004454, 0.1411200080598672, 4, 5 ])
        expect(sa.probe.xy_cs_lw).toBeDeepCloseTo([ 0.0, 0.0, 1.0, 0.0, 3, 1.5 ])
    })
})


describe('MahalanobisScore compute_for method', () => {
    it("should redefine the probe box and compute the score", ({ sa }) => {
        const id_before = sa.probe.xy_cs_lw
        const score = sa.compute_for([1.4, 2.3, 0.123, 3.2, 4.1])
        expect(sa.probe.xy_cs_lw === id_before).toBe(true)
        expect(sa.probe.xy_cs_lw).toBeDeepCloseTo([1.4, 2.3, 0.9924450516700745, 0.12269008904695511, 3.2, 4.1])
        expect(score).toBeCloseTo(0.13100280525766336)
        expect(sa.pair.sqr_maha_dist).toBeCloseTo(24.390438501955554)
        expect(sa.pair.sqr_pos_diff).toBeCloseTo(7.249999713897708)
        expect(sa.pair.sqr_yaw_diff).toBeCloseTo(0.015109935194617619)
        expect(sa.pair.sqr_size_diff).toBeCloseTo(6.799999523162853)
    })
})

