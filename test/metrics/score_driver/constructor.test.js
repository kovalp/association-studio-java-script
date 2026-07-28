import {describe, it, expect} from "vitest"
import {ScoreDriver} from "@/metrics/score_driver"
import {MahalanobisScore} from "@/metrics/mahalanobis/score.js";
import {AxesIoU} from "@/metrics/axes/score.js";


describe("constructor", () => {
    it("should define the attributes", () => {
        const sd = new ScoreDriver()
        expect(sd.mahalanobis_score).toBeInstanceOf(MahalanobisScore)
        expect(sd.iou_score).toBeInstanceOf(AxesIoU)
        expect(sd.ori_state).toBeDeepCloseTo([0.0, 0.0, 0.0, 3.0, 1.5])
        expect(sd.iou_score.ref).toBeDeepCloseTo({min_x: -1.5, max_x: 1.5, min_y: -0.75, max_y: 0.75, area: 4.5})
        expect(sd.mahalanobis_score.ref.xy_cs_lw).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
    })
})