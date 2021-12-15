(()=>{"use strict";const e=[{title:"Aqua Caelestis",src:"sounds/Aqua-Caelestis.mp3",duration:"00:39"},{title:"Ennio Morricone",src:"sounds/Ennio-Morricone.mp3",duration:"01:37"},{title:"River Flows In You",src:"sounds/River-Flows-In-You.mp3",duration:"01:37"},{title:"Summer Wind",src:"sounds/Summer-Wind.mp3",duration:"01:50"}],t=document.querySelector(".time"),n=document.querySelector(".date"),o=document.querySelector(".greeting"),r=document.querySelector(".name"),a=document.querySelector(".slide-next"),c=document.querySelector(".slide-prev"),i=document.querySelector(".weather"),s=i.querySelector(".city"),u=i.querySelector(".weather-icon"),l=i.querySelector(".temperature"),d=i.querySelector(".weather-description"),m=i.querySelector(".wind"),y=i.querySelector(".humidity"),g=document.querySelector(".quote"),h=document.querySelector(".author"),p=document.querySelector(".settings"),S=document.querySelector(".change-quote"),f=document.querySelector(".settings__modal"),q=document.querySelector(".play"),w=document.querySelector(".play-next"),L=document.querySelector(".play-prev"),v=document.querySelector(".play-list"),C=new Audio;let E,M=!1,x=0;function k(){const e=(new Date).getHours();return e>=0&&e<=5?"night":e>5&&e<=11?"morning":e>11&&e<=17?"afternoon":e>17&&e<=23?"evening":void 0}function $(){let e=k();const t=new Image;t.src=`https://raw.githubusercontent.com/Nekoguard/stage1-tasks/assets/images/${e}/${E}.jpg`,t.addEventListener("load",(()=>{document.body.style.backgroundImage=`url(${t.src})`}))}async function b(){s.value||(s.value="Minsk");const e=`https://api.openweathermap.org/data/2.5/weather?q=${s.value}&lang=en&appid=2643b822a0a8b1d5d616f10bdc1942de&units=metric`,t=await fetch(e),n=await t.json();u.className="weather-icon owf",u.classList.add(`owf-${n.weather[0].id}`),l.textContent=`${Math.round(n.main.temp)}°C`,d.textContent=n.weather[0].description,y.textContent=`Humidity: ${Math.round(n.main.humidity)}%`,m.textContent=`Wind speed: ${Math.round(n.wind.speed)} m/s`}async function I(){const e=await fetch("https://rolling-scopes-school.github.io/nekoguard-JSFE2021Q3/momentum/json/en-quotes.json"),t=await e.json();let n=function(e=0,t=500){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}();g.textContent=`" ${t[n].text} "`,h.textContent=`${t[n].author}`}!function(e=1,t=20){e=Math.ceil(e),t=Math.floor(t);let n=Math.floor(Math.random()*(t-e+1))+e;E=n.toString().padStart(2,"0")}(),$(),I(),e.forEach((e=>{const t=document.createElement("li");t.classList.add("play-item"),t.textContent=`${e.title}`,v.append(t)})),b(),s.addEventListener("change",b),window.addEventListener("beforeunload",(function(){localStorage.setItem("ALName",r.value),localStorage.setItem("ALCity",s.value)})),window.addEventListener("load",(function(){localStorage.getItem("ALName")&&(r.value=localStorage.getItem("ALName")),localStorage.getItem("ALCity")&&(s.value=localStorage.getItem("ALCity"),b())})),a.addEventListener("click",(function(){let e=Number(E);e++,e>20&&(e=1),E=e.toString().padStart(2,"0"),$()})),c.addEventListener("click",(function(){let e=Number(E);e--,e<1&&(e=20),E=e.toString().padStart(2,"0"),$()})),p.addEventListener("click",(function(){f.classList.contains("closed")?f.classList.remove("closed"):f.classList.add("closed")})),S.addEventListener("click",I),q.addEventListener("click",(function(){M?M&&(M=!1,q.classList.remove("pause"),C.pause()):(M=!0,q.classList.add("pause"),C.src=e[x].src,C.currentTime=0,C.play())})),w.addEventListener("click",(function(){x===e.length-1?x=0:x++,M=!0,q.classList.add("pause"),C.src=e[x].src,C.currentTime=0,C.play()})),L.addEventListener("click",(function(){0===x?x=e.length-1:x--,M=!0,q.classList.add("pause"),C.src=e[x].src,C.currentTime=0,C.play()})),function e(){const r=new Date;t.textContent=r.toLocaleTimeString("ru-RU",{hour12:!1}),function(){const e=new Date;n.textContent=e.toLocaleDateString("ru-Ru",{month:"long",day:"numeric",hour:"numeric",minute:"numeric"})}(),function(){const e=k();o.textContent=`Good ${e},`}(),setTimeout(e,1e3)}()})();