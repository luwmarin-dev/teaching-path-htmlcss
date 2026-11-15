import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { TEMPLATES } from '../src/modules/sandbox.js';

describe('Sandbox Scratchpad Templates', () => {
  it('has multiple high quality starter templates', () => {
    assert.equal(TEMPLATES.length >= 3, true);
  });

  it('each template contains valid doctype and structure', () => {
    for (const tpl of TEMPLATES) {
      assert.ok(tpl.id, 'Template missing id');
      assert.ok(tpl.name, 'Template missing name');
      assert.ok(tpl.code, `Template ${tpl.id} missing code`);
      assert.equal(tpl.code.includes('<!DOCTYPE html>'), true, `Template ${tpl.id} missing doctype`);
      assert.equal(tpl.code.includes('<html>'), true, `Template ${tpl.id} missing html tag`);
      assert.equal(tpl.code.includes('<body>'), true, `Template ${tpl.id} missing body tag`);
    }
  });
});
