(()=>{"use strict";const e=[{title:"Aqua Caelestis",src:"sounds/Aqua-Caelestis.mp3",duration:"00:39"},{title:"Ennio Morricone",src:"sounds/Ennio-Morricone.mp3",duration:"01:37"},{title:"River Flows In You",src:"sounds/River-Flows-In-You.mp3",duration:"01:37"},{title:"Summer Wind",src:"sounds/Summer-Wind.mp3",duration:"01:50"}],t=document.querySelector(".date");function n(){const e=(new Date).getHours();return e>=0&&e<=5?"night":e>5&&e<=11?"morning":e>11&&e<=17?"afternoon":e>17&&e<=23?"evening":void 0}const o=document.querySelector(".greeting"),a=document.querySelector(".time");function c(e=1,t=20){return e=Math.ceil(e),t=Math.floor(t),(Math.floor(Math.random()*(t-e+1))+e).toString().padStart(2,"0")}function r(){let e=n();const t=new Image;t.src=`https://raw.githubusercontent.com/Nekoguard/stage1-tasks/assets/images/${e}/${c()}.jpg`,t.addEventListener("load",(()=>{document.body.style.backgroundImage=`url(${t.src})`}))}const i=document.querySelector(".name"),s=document.querySelector(".slide-next"),u=document.querySelector(".slide-prev"),d=document.querySelector(".weather"),l=d.querySelector(".city"),m=d.querySelector(".weather-icon"),y=d.querySelector(".temperature"),p=d.querySelector(".weather-description"),h=d.querySelector(".wind"),v=d.querySelector(".humidity"),g=document.querySelector(".quote"),L=document.querySelector(".author"),S=document.querySelector(".settings"),q=document.querySelector(".change-quote"),w=document.querySelector(".settings__modal"),f=document.querySelector(".play"),E=document.querySelector(".play-next"),C=document.querySelector(".play-prev"),x=document.querySelector(".play-list"),$=new Audio;let k=!1,A=0;async function I(){l.value||(l.value="Minsk");const e=`https://api.openweathermap.org/data/2.5/weather?q=${l.value}&lang=en&appid=2643b822a0a8b1d5d616f10bdc1942de&units=metric`,t=await fetch(e),n=await t.json();m.className="weather-icon owf",m.classList.add(`owf-${n.weather[0].id}`),y.textContent=`${Math.round(n.main.temp)}°C`,p.textContent=n.weather[0].description,v.textContent=`Humidity: ${Math.round(n.main.humidity)}%`,h.textContent=`Wind speed: ${Math.round(n.wind.speed)} m/s`}async function M(){const e=await fetch("https://api.quotable.io/random"),t=await e.json();g.textContent=`" ${t.content} "`,L.textContent=`${t.author}`}c(),r(),M(),e.forEach((e=>{const t=document.createElement("li");t.classList.add("play-item"),t.textContent=`${e.title}`,x.append(t)}));const b=document.querySelectorAll(".play-item");I(),l.addEventListener("change",I),window.addEventListener("beforeunload",(function(){localStorage.setItem("ALName",i.value),localStorage.setItem("ALCity",l.value)})),window.addEventListener("load",(function(){localStorage.getItem("ALName")&&(i.value=localStorage.getItem("ALName")),localStorage.getItem("ALCity")&&(l.value=localStorage.getItem("ALCity"),I())})),s.addEventListener("click",r),u.addEventListener("click",r),S.addEventListener("click",(function(){w.classList.contains("closed")?w.classList.remove("closed"):w.classList.add("closed")})),q.addEventListener("click",M),f.addEventListener("click",(function(){k?k&&(k=!1,f.classList.remove("pause"),$.pause(),b[A].classList.remove("item-active")):(k=!0,f.classList.add("pause"),$.src=e[A].src,$.currentTime=0,$.play(),b.forEach((e=>{e.classList.remove("item-active")})),b[A].classList.add("item-active"))})),E.addEventListener("click",(function(){A===e.length-1?A=0:A++,k=!0,f.classList.add("pause"),$.src=e[A].src,$.currentTime=0,$.play(),b.forEach((e=>{e.classList.remove("item-active")})),b[A].classList.add("item-active")})),C.addEventListener("click",(function(){0===A?A=e.length-1:A--,k=!0,f.classList.add("pause"),$.src=e[A].src,$.currentTime=0,$.play(),b.forEach((e=>{e.classList.remove("item-active")})),b[A].classList.add("item-active")})),function e(){const c=new Date;a.textContent=c.toLocaleTimeString("ru-RU",{hour12:!1}),function(){const e=new Date;t.textContent=e.toLocaleDateString("ru-Ru",{month:"long",day:"numeric",hour:"numeric",minute:"numeric"})}(),function(){const e=n();o.textContent=`Good ${e},`}(),setTimeout(e,1e3)}()})();