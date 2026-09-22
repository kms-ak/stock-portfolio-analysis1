import test from 'node:test';
import assert from 'node:assert/strict';
import {holdings,change,compoundReturn,makeCSV} from '../src/data.js';
test('equal allocations reconcile to supplied portfolio loss',()=>{assert.equal(holdings.reduce((sum,s)=>sum+change(s),0),-23240);});
test('compound illustration reproduces reported endpoints for every holding',()=>{for(const s of holdings){assert.ok(Math.abs(compoundReturn(s.return,9)-s.return)<1e-10);assert.equal(compoundReturn(s.return,0),0);assert.ok(Number.isFinite(compoundReturn(s.return,30)));}});
test('export includes all holdings and reconciled totals',()=>{const csv=makeCSV();assert.equal(csv.split('\r\n').length,7);for(const s of holdings)assert.ok(csv.includes(s.name));assert.ok(csv.includes('976760'));});
