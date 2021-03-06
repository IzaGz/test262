// This file was procedurally generated from the following sources:
// - src/annex-b-fns/func-exsting-block-fn-no-init.case
// - src/annex-b-fns/func/switch-dflt.template
/*---
description: Does not re-initialize binding created by similar forms (Funtion declaration in the `default` clause of a `switch` statement in function scope)
esid: sec-web-compat-functiondeclarationinstantiation
es6id: B.3.3.1
flags: [generated, noStrict]
info: |
    B.3.3.1 Changes to FunctionDeclarationInstantiation

    [...]
    2. If instantiatedVarNames does not contain F, then
    [...]
---*/
var init;

(function() {
  init = f;

  {
    function f() {}
  }

  switch (1) {
    default:
      function f() {  }
  }

  
}());

assert.sameValue(init, undefined);
