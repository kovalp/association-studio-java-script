import { ScoreDriver } from '@/metrics/score_driver'
import { Frontend } from '@/ui/frontend.js'

function main() {
    const score_driver = new ScoreDriver()
    const frontend = new Frontend(score_driver, document)
}

main()
