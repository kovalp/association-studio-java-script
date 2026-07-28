import {describe, it, expect} from "vitest"
import {ScoreDriver} from "@/metrics/score_driver"

describe("compute_for", () => {
    it("should compute the scores", () => {
        const sd = new ScoreDriver()
        const scores = sd.compute_for([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(scores).toBeDeepCloseTo({giou: 0.5254803675856308, maha: 0.04708370357494904})
    })
})