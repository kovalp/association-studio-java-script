import { MahalanobisScore } from '@/metrics/mahalanobis/score.js'

function get_score_aux() {
    return new MahalanobisScore()
}

export { get_score_aux }
