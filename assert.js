import assert from 'node:assert/strict';
import { kolobok } from './functions/tale.js';

assert.equal(kolobok('дедушка'));
assert.equal(kolobok('заяц'));
assert.equal(kolobok('лиса'));