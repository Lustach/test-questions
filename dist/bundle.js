!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=[{title:"Сколько океанов на нашей планете?",answer:["4","5","6"],correctAnswer:"1"},{title:"Единица измерения силы тока - это?",answer:["Ампер","Вольт","Ватт"],correctAnswer:"0"},{title:"Сатурн - это какая по счёту планета от Солнца?",answer:["Пятая","Шестая","Седьмая"],correctAnswer:"1"},{title:"Сколько будет 0,2 км в дециметрах?",answer:["20000 дм","2000 дм","200 дм"],correctAnswer:"1"},{title:"Самая длинная река в мире - это?",answer:["Амазонка","Нил","Янцзы"],correctAnswer:"0"}];let r=null,l={length:0};!function(e){let t=0,o=document,c=(document.querySelector(".test-container"),o.querySelector(".test-quest"));function u(e){c.innerHTML="";let t=o.createElement("p");t.setAttribute("class","title"),t.textContent=n[e].title,c.appendChild(t);let l=o.createElement("p"),u=o.createElement("input"),i="";for(let t=0;t<n[e].answer.length;t++)u=o.createElement("input"),l=o.createElement("p"),u.setAttribute("name",n[e].title),u.setAttribute("type","radio"),u.setAttribute("value",n[e].answer[t]),u.addEventListener("click",t=>{r={answer:t.target.value,quesNumber:e}}),l.appendChild(u),i=o.createTextNode(n[e].answer[t]),l.appendChild(i),c.appendChild(l)}u(t);let i=document.querySelector(".set-answer"),a=document.querySelector(".forward"),d=document.querySelector(".back");function s(){t==n.length-1?(t=0,u(t)):(t+=1,u(t))}i.addEventListener("click",()=>{null!=r?(l.hasOwnProperty(r.quesNumber)||l.length++,l[r.quesNumber]=r,s(),5==l.length&&(alert("Тест закончен"),function(){c.innerHTML="";let e=0;for(const t in n){let r=document.createElement("p"),o=document.createElement("p"),u=document.createElement("p");r.textContent="Вопрос:"+n[t].title,o.textContent="Ваш ответ:"+l[t].answer,u.textContent="Верный ответ:"+n[t].answer[n[t].correctAnswer],r.style="border-bottom:1px solid black;width: 500px;",c.appendChild(r),c.appendChild(o),c.appendChild(u),l[t].answer==n[t].answer[n[t].correctAnswer]&&e++}let t=document.createElement("p");t.textContent="Всего правильных ответов:"+e,c.appendChild(t)}())):alert("Выберите ответ")}),d.addEventListener("click",(function(){0==t?(t=n.length-1,u(t)):(t-=1,u(t))})),a.addEventListener("click",s)}()}]);