var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const r={form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')};function u(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n&&o({position:e,delay:t}),i({position:e,delay:t})}),t)}))}r.form.addEventListener("submit",(function(e){e.preventDefault();const t=parseInt(r.inputAmount.value),n=parseInt(r.inputDelay.value),o=parseInt(r.inputStep.value);for(let e=0;e<t;e+=1)u(e,n+e*o).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.8a966980.js.map
