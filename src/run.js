import { ScoreDriver } from '@/metrics/score_driver'
import { Frontend } from '@/ui/frontend.js'

function run(root = document) {
    const score_driver = new ScoreDriver()
    return new Frontend(score_driver, root)
}

export { run }
