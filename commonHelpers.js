import"./assets/styles-385c42ef.js";import{f as h,i as f}from"./assets/vendor-651d7991.js";const d=document.querySelector("#datetime-picker"),t=document.querySelector("[data-start]");let y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");t.disabled=!0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){if(t.disabled=!1,t.addEventListener("click",m),e[0]<Date.now()){f.warning({position:"topCenter",title:"Warning",message:"Please choose a date in the future"}),t.disabled=!0;return}else{if(event.target.nodeName!=="button")return;m()}}},D=h(d,C);function m(e){f.success({position:"topCenter",title:"OK",message:"A Good Choice!"}),t.disabled=!0,d.disabled=!0;let n=null,c=D.selectedDates[0];n=setInterval(()=>{let l=Date.now(),r=c-l;if(r<=0){clearInterval(n),n=null,d.disabled=!1,t.disabled=!1;return}const{days:s,hours:a,minutes:u,seconds:i}=v(r);y.textContent=o(s),p.textContent=o(a),S.textContent=o(u),b.textContent=o(i)},1e3)}function o(e){return String(e).padStart(2,"0")}function v(e){const s=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:u,seconds:i}}
//# sourceMappingURL=commonHelpers.js.map