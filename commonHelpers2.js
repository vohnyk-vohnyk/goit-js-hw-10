import{i as s}from"./assets/icon-error-dd708003.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const a="/goit-js-hw-10/assets/icon-ok-508d1aab.svg",n=document.querySelector(".form");function l(e){e.preventDefault(),console.log(e.target.state.value);const t=e.target.delay.value;console.log(t),new Promise((o,r)=>{setTimeout(()=>{e.target.state.value==="fulfilled"?o(`Fulfilled promise in ${t}ms`):r(`Rejected promise in ${t}ms`)},t)}).then(o=>{i.success({title:"OK",message:o,iconUrl:a,position:"topRight",backgroundColor:"#59a10d",theme:"dark",transitionIn:"fadeInRight"})}).catch(o=>{i.error({title:"Error",message:o,iconUrl:s,position:"topRight",backgroundColor:"#ef4040",theme:"dark",transitionIn:"fadeInRight"})})}n.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers2.js.map
