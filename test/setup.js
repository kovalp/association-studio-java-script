import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import {expect} from "vitest";

expect.extend({ toBeDeepCloseTo });
