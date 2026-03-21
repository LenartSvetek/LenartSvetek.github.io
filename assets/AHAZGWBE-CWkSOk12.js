import{u as ye,T as be,g as dt,D as ut,M as pt,a as Me}from"./E4RX7DUJ-DeR6JijV.js";import{X as W,Q as H,a0 as w,ac as mt,ae as ft,ah as ht,P as B,T as z,ag as vt,a9 as yt,ab as bt,ad as kt,U as u,a2 as T,ai as Ae,a1 as K,Y as Ke,V as wt,a7 as Je}from"./index-B6lEgo0i.js";import{P as xt,u as re,s as G,i as m,m as O,t as C,c as p,e as de,a as pe,f as Pe,g as ke,d as J}from"./web-DpVA_3D5.js";import{T as Ct,P as St,X as Mt,L as At,a as Pt,C as Tt,S as ne,b as ae,c as ie,d as Bt,e as oe,M as Ze,f as Et,g as le,h as fe,i as It,I as Xe,K as Dt,G as Ht,B as _e,j as zt,k as Nt,l as Ft,m as Ut,n as Qt,E as Lt,o as Ot,p as qt}from"./section-CYHaJ5Dl.js";import{E as Rt}from"./plugin-W3ivlmy3.js";import{c as V,h as _,u as $t}from"./goober.modern-CCv2hThM.js";import{c as Te}from"./store-qp_T5N2h.js";var Yt="plugin-container",jt="plugin-title-container";function Vt(t){return t!==null&&(typeof t=="object"||typeof t=="function")}const ge=(t,e)=>t===e||t.length===e.length&&t.every((a,o)=>a===e[o]),Be=t=>typeof t=="function"&&!t.length?t():t,Ee=t=>Array.isArray(t)?t:t?[t]:[];function Ie(t,...e){return typeof t=="function"?t(...e):t}const Wt=W;function te(t,e,a,o){return t.addEventListener(e,a,o),Wt(t.removeEventListener.bind(t,e,a,o))}function De(t,e,a,o){const s=()=>{Ee(Be(t)).forEach(c=>{c&&Ee(Be(e)).forEach(l=>te(c,l,a,o))})};typeof t=="function"?H(s):w(s)}function we(t,e=ft()){let a=0,o,s;return()=>(a++,W(()=>{a--,queueMicrotask(()=>{!a&&s&&(s(),s=o=void 0)})}),s||mt(c=>o=t(s=c),e),o)}function He(t,e){for(let a=t.length-1;a>=0;a--){const o=e.slice(0,a+1);if(!ge(t[a],o))return!1}return!0}const et=we(()=>{const[t,e]=B(null);return te(window,"keydown",a=>{e(a),setTimeout(()=>e(null))}),t}),tt=we(()=>{const[t,e]=B([]),a=()=>e([]),o=et();return te(window,"keydown",s=>{if(s.repeat||typeof s.key!="string")return;const c=s.key.toUpperCase(),l=t();if(l.includes(c))return;const r=[...l,c];l.length===0&&c!=="ALT"&&c!=="CONTROL"&&c!=="META"&&c!=="SHIFT"&&(s.shiftKey&&r.unshift("SHIFT"),s.altKey&&r.unshift("ALT"),s.ctrlKey&&r.unshift("CONTROL"),s.metaKey&&r.unshift("META")),e(r)}),te(window,"keyup",s=>{if(typeof s.key!="string")return;const c=s.key.toUpperCase();e(l=>l.filter(r=>r!==c))}),te(window,"blur",a),te(window,"contextmenu",s=>{s.defaultPrevented||a()}),t[0]=t,t[1]={event:o},t[Symbol.iterator]=function*(){yield t[0],yield t[1]},t}),Gt=we(()=>{const t=tt();return z(e=>t().length===0?[]:[...e,t()],[])});function Kt(t,e,a={}){if(!t.length)return;t=t.map(g=>g.toUpperCase());const{preventDefault:o=!0}=a,s=et(),c=Gt();let l=!1;const r=g=>{if(!g.length)return l=!1;if(l)return;const i=s();g.length<t.length?He(g,t.slice(0,g.length))?o&&i&&i.preventDefault():l=!0:(l=!0,He(g,t)&&(o&&i&&i.preventDefault(),e(i)))},n=g=>{const i=g.at(-1);if(!i)return;const d=s();if(o&&i.length<t.length){ge(i,t.slice(0,t.length-1))&&d&&d.preventDefault();return}if(ge(i,t)){const v=g.at(-2);(!v||ge(v,t.slice(0,t.length-1)))&&(o&&d&&d.preventDefault(),e(d))}};H(ht(c,a.requireReset?r:n))}class Jt extends Rt{constructor(){super({pluginId:"tanstack-devtools-core"})}}const Y=new Jt;function Zt(t){const e={...t},a={...t},o={},s=l=>{let r=o[l];if(!r){if(!bt())return e[l];o[l]=r=B(e[l],{internal:!0}),delete e[l]}return r[0]()};for(const l in t)Object.defineProperty(a,l,{get:()=>s(l),enumerable:!0});const c=(l,r)=>{const n=o[l];if(n)return n[1](r);l in e&&(e[l]=Ie(r,e[l]))};return[a,(l,r)=>{if(Vt(l)){const n=vt(()=>Object.entries(Ie(l,a)));yt(()=>{for(const[g,i]of n)c(g,()=>i)})}else c(l,r);return a}]}const rt={width:null,height:null};function he(t){if(!t)return{...rt};const{width:e,height:a}=t.getBoundingClientRect();return{width:e,height:a}}function Xt(t){const e=typeof t=="function",[a,o]=Zt(kt.context||e?rt:he(t)),s=new ResizeObserver(([c])=>o(he(c.target)));return W(()=>s.disconnect()),e?H(()=>{const c=t();c&&(o(he(c)),s.observe(c),W(()=>s.unobserve(c)))}):(s.observe(t),W(()=>s.unobserve(t))),a}var _t=t=>{const[e,a]=B(!1),[o,s]=B(!1),c=z(()=>e()||o());let l=null;return W(()=>{l&&clearTimeout(l)}),{expanded:c,setForceExpand:s,hoverUtils:{enter:()=>{l&&(clearTimeout(l),l=null),a(!0)},leave:()=>{l=setTimeout(()=>{a(!1)},t.animationMs)}},animationMs:t.animationMs}},nt=wt(void 0),er=t=>{const e=_t({animationMs:t.animationMs});return u(nt.Provider,{value:e,get children(){return t.children}})};function xe(){const t=Ke(nt);if(t===void 0)throw new Error("useDrawContext must be used within a DrawClientProvider");return t}var Ce=()=>{const t=Ke(ut);if(t===void 0)throw new Error("useDevtoolsShellContext must be used within a ShellContextProvider");return t};function Se(){const{settings:t,setSettings:e}=ee();return{theme:z(()=>t().theme),setTheme:o=>e({theme:o})}}var at=()=>{const{store:t,setStore:e}=Ce(),{setForceExpand:a}=xe(),o=z(()=>t.plugins),s=z(()=>t.state.activePlugins);return H(()=>{s().length===0?a(!0):a(!1)}),{plugins:o,toggleActivePlugins:l=>{e(r=>{const n=r.state.activePlugins.includes(l),g=t.plugins?.find(d=>d.id===l);g?.destroy&&n&&g.destroy(l);const i=n?r.state.activePlugins.filter(d=>d!==l):[...r.state.activePlugins,l];return i.length>pt?r:{...r,state:{...r.state,activePlugins:i}}})},activePlugins:s}},me=()=>{const{store:t,setStore:e}=Ce();return{state:z(()=>t.state),setState:s=>{e(c=>({...c,state:{...c.state,...s}}))}}},ee=()=>{const{store:t,setStore:e}=Ce(),a=z(()=>t.settings);return{setSettings:s=>{e(c=>({...c,settings:{...c.settings,...s}}))},settings:a}},tr=()=>{const{state:t,setState:e}=me();return{persistOpen:z(()=>t().persistOpen),setPersistOpen:s=>{e({persistOpen:s})}}},it=()=>{const{state:t,setState:e}=me();return{height:z(()=>t().height),setHeight:s=>{e({height:s})}}},ot=(t,e=!0)=>{e?t.setAttribute("tabIndex","-1"):t.removeAttribute("tabIndex");for(const a of t.children)ot(a,e)},rr=t=>{H(()=>{const e=document.getElementById(be);e&&ot(e,!t())})},nr=t=>t.includes("CtrlOrMeta")?[t.map(e=>e==="CtrlOrMeta"?"Control":e),t.map(e=>e==="CtrlOrMeta"?"Meta":e)]:[t],lt=t=>nr(t).flatMap(a=>{const o=a.filter(l=>Ae.includes(l)),s=a.filter(l=>!Ae.includes(l));return o.length===0?[s]:dt(o).map(l=>[...l,...s])}),ar=(t,e)=>{const a=lt(e),o=t.map(s=>s.toUpperCase());return a.some(s=>s.every(c=>o.includes(String(c).toUpperCase()))&&o.every(c=>s.map(l=>String(l).toUpperCase()).includes(c)))},ir={colors:{black:"#000000",white:"#ffffff",darkGray:{600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{100:"#D1E9FF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{100:"#D1FADF",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",900:"#054F31"},red:{100:"#fee2e2",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c"},purple:{200:"#D9D6FE",800:"#4A1FB8"}},font:{size:{xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif"}},border:{radius:{full:"9999px"}},size:{2:"calc(var(--tsrd-font-size) * 0.5)",3:"calc(var(--tsrd-font-size) * 0.75)",10:"calc(var(--tsrd-font-size) * 2.5)",48:"calc(var(--tsrd-font-size) * 12)"}},ze=t=>`${(t/1e3).toFixed(2)}s`,Ne=_`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,or=_`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`,lr=_`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,sr=_`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,cr=_`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`,gr=_`
  to {
    transform: rotate(360deg);
  }
`,Fe=_`
  0%,
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1) rotate(10deg);
  }
`,Ue=t=>{const{colors:e,font:a,size:o,border:s}=ir,{fontFamily:c,size:l}=a,r=$t,n=(g,i)=>t==="light"?g:i;return{seoTabContainer:r`
      padding: 0;
      margin: 0 auto;
      background: ${n(e.white,e.darkGray[700])};
      border-radius: 8px;
      box-shadow: none;
      overflow-y: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 0;
      width: 100%;
      overflow-y: auto;
    `,seoTabTitle:r`
      font-size: 1.25rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0;
      padding: 1rem 1.5rem 0.5rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid ${n(e.gray[200],e.gray[800])};
    `,seoTabSection:r`
      padding: 1.5rem;
      background: ${n(e.gray[50],e.darkGray[800])};
      border: 1px solid ${n(e.gray[200],e.gray[800])};
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 2rem;
      border-radius: 0.75rem;
    `,seoPreviewSection:r`
      display: flex;
      flex-direction: row;
      gap: 16px;
      margin-bottom: 0;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-x: auto;
      flex-wrap: wrap;
      padding-bottom: 0.5rem;
    `,seoPreviewCard:r`
      border: 1px solid ${n(e.gray[200],e.gray[800])};
      border-radius: 8px;
      padding: 12px 10px;
      background: ${n(e.white,e.darkGray[900])};
      margin-bottom: 0;
      box-shadow: 0 1px 3px ${n("rgba(0,0,0,0.05)","rgba(0,0,0,0.1)")};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 200px;
      max-width: 240px;
      font-size: 0.95rem;
      gap: 4px;
    `,seoPreviewHeader:r`
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0;
      color: ${n(e.gray[700],e.gray[300])};
    `,seoPreviewImage:r`
      max-width: 100%;
      border-radius: 6px;
      margin-bottom: 6px;
      box-shadow: 0 1px 2px ${n("rgba(0,0,0,0.03)","rgba(0,0,0,0.06)")};
      height: 160px;
      object-fit: cover;
    `,seoPreviewTitle:r`
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 4px;
      color: ${n(e.gray[900],e.gray[100])};
    `,seoPreviewDesc:r`
      color: ${n(e.gray[600],e.gray[400])};
      margin-bottom: 4px;
      font-size: 0.8rem;
    `,seoPreviewUrl:r`
      color: ${n(e.gray[500],e.gray[500])};
      font-size: 0.75rem;
      margin-bottom: 0;
      word-break: break-all;
    `,seoMissingTagsSection:r`
      margin-top: 4px;
      font-size: 0.875rem;
      color: ${n(e.red[500],e.red[400])};
    `,seoMissingTagsList:r`
      margin: 4px 0 0 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      max-width: 240px;
    `,seoMissingTag:r`
      background: ${n(e.red[100],e.red[500]+"22")};
      color: ${n(e.red[700],e.red[500])};
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 0.75rem;
      font-weight: 500;
    `,seoAllTagsFound:r`
      color: ${n(e.green[700],e.green[500])};
      font-weight: 500;
      margin-left: 0;
      padding: 0 10px 8px 10px;
      font-size: 0.875rem;
    `,devtoolsPanelContainer:(g,i)=>r`
      direction: ltr;
      position: fixed;
      overflow-y: hidden;
      overflow-x: hidden;
      ${g}: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      ${i?"":"max-height: 90%;"}
      border-top: 1px solid ${n(e.gray[200],e.gray[800])};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:g=>r`
        visibility: ${g?"visible":"hidden"};
        height: ${g?"auto":"0"};
      `,devtoolsPanelContainerResizing:g=>g()?r`
          transition: none;
        `:r`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(g,i,d)=>g?r`
          pointer-events: auto;
          transform: translateY(0);
        `:r`
        pointer-events: none;
        transform: translateY(${d==="top"?-i:i}px);
      `,devtoolsPanel:r`
      display: flex;
      font-size: ${l.sm};
      font-family: ${c.sans};
      background-color: ${n(e.white,e.darkGray[700])};
      color: ${n(e.gray[900],e.gray[300])};
      width: w-screen;
      flex-direction: row;
      overflow-x: hidden;
      overflow-y: hidden;
      height: 100%;
    `,dragHandle:g=>r`
      position: absolute;
      left: 0;
      ${g==="bottom"?"top":"bottom"}: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      user-select: none;
      z-index: 100000;
      &:hover {
        background-color: ${n(e.gray[400],e.gray[500])};
      }
    `,mainCloseBtn:r`
      background: transparent;
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      align-items: center;
      padding: 0;
      font-size: ${a.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;
      & > img {
        width: 56px;
        height: 56px;
        transition: all 0.3s ease;
        outline-offset: 2px;
        border-radius: ${s.radius.full};
        outline: 2px solid transparent;
      }
      &:hide-until-hover {
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      }
      &:hide-until-hover:hover {
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
      }
      & > img:focus-visible,
      img:hover {
        outline: 2px solid ${n(e.black,e.black)};
      }
    `,mainCloseBtnPosition:g=>r`
        ${g==="top-left"?`top: ${o[2]}; left: ${o[2]};`:""}
        ${g==="top-right"?`top: ${o[2]}; right: ${o[2]};`:""}
        ${g==="middle-left"?`top: 50%; left: ${o[2]}; transform: translateY(-50%);`:""}
        ${g==="middle-right"?`top: 50%; right: ${o[2]}; transform: translateY(-50%);`:""}
        ${g==="bottom-left"?`bottom: ${o[2]}; left: ${o[2]};`:""}
        ${g==="bottom-right"?`bottom: ${o[2]}; right: ${o[2]};`:""}
      `,mainCloseBtnAnimation:(g,i)=>g?r`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:i?r`
              opacity: 0;

              &:hover {
                opacity: 1;
                pointer-events: auto;
                visibility: visible;
              }
            `:r`
              opacity: 1;
              pointer-events: auto;
              visibility: visible;
            `,tabContainer:r`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      background-color: ${n(e.gray[50],e.darkGray[900])};
      border-right: 1px solid ${n(e.gray[200],e.gray[800])};
      box-shadow: none;
      position: relative;
      width: ${o[10]};
    `,tab:r`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: ${o[10]};
      cursor: pointer;
      font-size: ${l.sm};
      font-family: ${c.sans};
      color: ${n(e.gray[600],e.gray[400])};
      background-color: transparent;
      border: none;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      &:hover:not(.close):not(.active):not(.detach) {
        background-color: ${n(e.gray[100],e.gray[800])};
        color: ${n(e.gray[900],e.gray[100])};
        border-left: 2px solid ${n(e.gray[900],e.gray[100])};
      }
      &.active {
        background-color: ${n(e.gray[100],e.gray[800])};
        color: ${n(e.gray[900],e.gray[100])};
        border-left: 2px solid ${n(e.gray[900],e.gray[100])};
      }
      &.detach {
        &:hover {
          background-color: ${n(e.gray[100],e.gray[800])};
        }
        &:hover {
          color: ${n(e.green[700],e.green[500])};
        }
      }
      &.close {
        margin-top: auto;
        &:hover {
          background-color: ${n(e.gray[100],e.gray[800])};
        }
        &:hover {
          color: ${n(e.red[700],e.red[500])};
        }
      }
      &.disabled {
        cursor: not-allowed;
        opacity: 0.2;
        pointer-events: none;
      }
      &.disabled:hover {
        background-color: transparent;
        color: ${e.gray[300]};
      }
      & > svg {
        flex-shrink: 0;
      }
    `,tabContent:r`
      transition: all 0.2s ease-in-out;
      width: 100%;
      height: 100%;
    `,pluginsTabPanel:r`
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `,pluginsTabDraw:g=>r`
      width: ${g?o[48]:0};
      height: 100%;
      background-color: ${n(e.white,e.darkGray[900])};
      box-shadow: none;
      ${g?`border-right: 1px solid ${n(e.gray[200],e.gray[800])};`:""}
    `,pluginsTabDrawExpanded:r`
      width: ${o[48]};
      border-right: 1px solid ${n(e.gray[200],e.gray[800])};
    `,pluginsTabDrawTransition:g=>r`
        transition: width ${ze(g)} ease;
      `,pluginsTabSidebar:g=>r`
      width: ${o[48]};
      overflow-y: auto;
      transform: ${g?"translateX(0)":"translateX(-100%)"};
      display: flex;
      flex-direction: column;
    `,pluginsTabSidebarTransition:g=>r`
        transition: transform ${ze(g)} ease;
      `,pluginsList:r`
      flex: 1;
      overflow-y: auto;
    `,pluginName:r`
      font-size: ${l.xs};
      font-family: ${c.sans};
      color: ${n(e.gray[600],e.gray[400])};
      padding: ${o[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;

      &:hover {
        background-color: ${n(e.gray[100],e.gray[800])};
        color: ${n(e.gray[900],e.gray[100])};
        padding: ${o[2]};
      }
      &.active {
        background-color: ${n(e.gray[100],e.gray[800])};
        color: ${n(e.gray[900],e.gray[100])};
        border-left: 2px solid ${n(e.gray[900],e.gray[100])};
      }
      &.active:hover {
        background-color: ${n(e.gray[200],e.gray[700])};
      }
    `,pluginsTabContent:r`
      width: 100%;
      height: 100%;
      overflow-y: auto;

      &:not(:last-child) {
        border-right: 5px solid ${n(e.purple[200],e.purple[800])};
      }
    `,settingsGroup:r`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,conditionalSetting:r`
      margin-left: 1.5rem;
      padding-left: 1rem;
      border-left: 2px solid ${n(e.gray[300],e.gray[600])};
      background-color: ${n(e.gray[50],e.darkGray[900])};
      padding: 0.75rem;
      border-radius: 0.375rem;
      margin-top: 0.5rem;
    `,settingRow:r`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `,settingsModifiers:r`
      display: flex;
      gap: 0.5rem;
    `,settingsStack:r`
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `,noPluginsFallback:r`
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      padding: 2rem;
      background: ${n(e.gray[50],e.darkGray[700])};
      width: 100%;
      height: 100%;
    `,noPluginsFallbackContent:r`
      max-width: 600px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    `,noPluginsFallbackIcon:r`
      width: 64px;
      height: 64px;
      color: ${n(e.gray[400],e.gray[600])};
      margin-bottom: 0.5rem;

      svg {
        width: 100%;
        height: 100%;
      }
    `,noPluginsFallbackTitle:r`
      font-size: 1.5rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0;
    `,noPluginsFallbackDescription:r`
      font-size: 0.95rem;
      color: ${n(e.gray[600],e.gray[400])};
      line-height: 1.5;
      margin: 0;
    `,noPluginsSuggestions:r`
      width: 100%;
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${n(e.white,e.darkGray[800])};
      border: 1px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsSuggestionsTitle:r`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0 0 0.5rem 0;
    `,noPluginsSuggestionsDesc:r`
      font-size: 0.875rem;
      color: ${n(e.gray[600],e.gray[400])};
      margin: 0 0 1rem 0;
    `,noPluginsSuggestionsList:r`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,noPluginsSuggestionCard:r`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background: ${n(e.gray[50],e.darkGray[900])};
      border: 1px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        border-color: ${n(e.gray[300],e.gray[600])};
        background: ${n(e.gray[100],e.darkGray[800])};
      }
    `,noPluginsSuggestionInfo:r`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
      flex: 1;
    `,noPluginsSuggestionPackage:r`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,noPluginsSuggestionSource:r`
      font-size: 0.8rem;
      color: ${n(e.gray[500],e.gray[500])};
      margin: 0;
    `,noPluginsSuggestionStatus:r`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${n(e.green[600],e.green[400])};

      svg {
        width: 18px;
        height: 18px;
      }
    `,noPluginsSuggestionStatusText:r`
      font-size: 0.875rem;
      font-weight: 500;
    `,noPluginsSuggestionStatusTextError:r`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${n(e.red[600],e.red[400])};
    `,noPluginsEmptyState:r`
      margin-top: 1.5rem;
      padding: 1.5rem;
      background: ${n(e.white,e.darkGray[800])};
      border: 1px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,noPluginsEmptyStateText:r`
      font-size: 0.875rem;
      color: ${n(e.gray[600],e.gray[400])};
      margin: 0;
      line-height: 1.5;
    `,noPluginsFallbackLinks:r`
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1.5rem;
    `,noPluginsFallbackLink:r`
      font-size: 0.875rem;
      color: ${n(e.gray[700],e.gray[300])};
      text-decoration: none;
      transition: color 0.15s ease;

      &:hover {
        color: ${n(e.gray[900],e.gray[100])};
        text-decoration: underline;
      }
    `,noPluginsFallbackLinkSeparator:r`
      color: ${n(e.gray[400],e.gray[600])};
    `,pluginMarketplace:r`
      width: 100%;
      overflow-y: auto;
      padding: 2rem;
      background: ${n("linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)","linear-gradient(135deg, #1a1d23 0%, #13161a 100%)")};
      animation: ${Ne} 0.3s ease;
    `,pluginMarketplaceHeader:r`
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid ${n(e.gray[200],e.gray[700])};
    `,pluginMarketplaceTitleRow:r`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 0.5rem;
    `,pluginMarketplaceTitle:r`
      font-size: 1.5rem;
      font-weight: 700;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0;
      letter-spacing: -0.02em;
    `,pluginMarketplaceDescription:r`
      font-size: 0.95rem;
      color: ${n(e.gray[600],e.gray[400])};
      margin: 0 0 1rem 0;
      line-height: 1.5;
    `,pluginMarketplaceSearchWrapper:r`
      position: relative;
      display: flex;
      align-items: center;
      max-width: 400px;
      flex-shrink: 0;

      svg {
        position: absolute;
        left: 1rem;
        color: ${n(e.gray[400],e.gray[500])};
        pointer-events: none;
      }
    `,pluginMarketplaceSearch:r`
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      background: ${n(e.gray[50],e.darkGray[900])};
      border: 2px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      color: ${n(e.gray[900],e.gray[100])};
      font-size: 0.875rem;
      font-family: ${c.sans};
      transition: all 0.2s ease;

      &::placeholder {
        color: ${n(e.gray[400],e.gray[500])};
      }

      &:focus {
        outline: none;
        border-color: ${n(e.blue[500],e.blue[400])};
        background: ${n(e.white,e.darkGray[800])};
        box-shadow: 0 0 0 3px
          ${n("rgba(59, 130, 246, 0.1)","rgba(96, 165, 250, 0.1)")};
      }
    `,pluginMarketplaceFilters:r`
      margin-top: 1.5rem;
      padding-top: 1rem;
    `,pluginMarketplaceTagsContainer:r`
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.5rem;
      padding: 1rem;
      background: ${n(e.gray[50],e.darkGray[800])};
      border: 1px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
    `,pluginMarketplaceTagButton:r`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      background: ${n(e.white,e.darkGray[700])};
      border: 2px solid ${n(e.gray[300],e.gray[600])};
      border-radius: 0.375rem;
      color: ${n(e.gray[700],e.gray[300])};
      cursor: pointer;
      transition: all 0.15s ease;

      &:hover {
        background: ${n(e.gray[100],e.darkGray[600])};
        border-color: ${n(e.gray[400],e.gray[500])};
        color: ${n(e.gray[900],e.gray[100])};
      }
    `,pluginMarketplaceTagButtonActive:r`
      background: ${n("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")} !important;
      border-color: ${n("#2563eb","#3b82f6")} !important;
      color: white !important;

      &:hover {
        background: ${n("linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)","linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)")} !important;
        border-color: ${n("#1d4ed8","#2563eb")} !important;
      }
    `,pluginMarketplaceSettingsButton:r`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      background: ${n(e.gray[100],e.darkGray[800])};
      border: 2px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      color: ${n(e.gray[700],e.gray[300])};
      cursor: pointer;
      transition: all 0.2s ease;
      margin-left: 0.5rem;

      &:hover {
        background: ${n(e.gray[200],e.darkGray[700])};
        border-color: ${n(e.gray[300],e.gray[600])};
        color: ${n(e.gray[900],e.gray[100])};
      }

      &:active {
        transform: scale(0.95);
      }
    `,pluginMarketplaceSettingsPanel:r`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 350px;
      background: ${n(e.white,e.darkGray[800])};
      border-left: 1px solid ${n(e.gray[200],e.gray[700])};
      box-shadow: -4px 0 12px ${n("rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.4)")};
      z-index: 1000;
      display: flex;
      flex-direction: column;
      animation: ${or} 0.3s ease;
    `,pluginMarketplaceSettingsPanelHeader:r`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: 1px solid ${n(e.gray[200],e.gray[700])};
    `,pluginMarketplaceSettingsPanelTitle:r`
      font-size: 1.125rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0;
    `,pluginMarketplaceSettingsPanelClose:r`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background: transparent;
      border: none;
      color: ${n(e.gray[600],e.gray[400])};
      cursor: pointer;
      border-radius: 0.375rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${n(e.gray[100],e.darkGray[700])};
        color: ${n(e.gray[900],e.gray[100])};
      }
    `,pluginMarketplaceSettingsPanelContent:r`
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
    `,pluginMarketplaceGrid:r`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.25rem;
      animation: ${lr} 0.4s ease;
    `,pluginMarketplaceCard:r`
      background: ${n(e.white,e.darkGray[800])};
      border: 2px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.75rem;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: ${n("linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)","linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)")};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.25s ease;
      }

      &:hover {
        border-color: ${n(e.gray[400],e.gray[500])};
        box-shadow: 0 8px 24px ${n("rgba(0,0,0,0.1)","rgba(0,0,0,0.4)")};
        transform: translateY(-4px);

        &::before {
          transform: scaleX(1);
        }
      }
    `,pluginMarketplaceCardIcon:r`
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${n("linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)","linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)")};
      border-radius: 0.5rem;
      color: white;
      transition: transform 0.25s ease;

      svg {
        width: 20px;
        height: 20px;
      }

      &.custom-logo {
      }
    `,pluginMarketplaceCardHeader:r`
      flex: 1;
    `,pluginMarketplaceCardTitle:r`
      font-size: 0.95rem;
      font-weight: 600;
      color: ${n(e.gray[900],e.gray[100])};
      margin: 0 0 0.5rem 0;
      line-height: 1.4;
    `,pluginMarketplaceCardDescription:r`
      font-size: 0.8rem;
      color: ${n(e.gray[500],e.gray[500])};
      margin: 0;
      padding: 0;
      background: transparent;
      border-radius: 0.375rem;
      display: block;
      font-weight: 500;
    `,pluginMarketplaceCardPackageBadge:r`
      margin-top: 4px;
      margin-bottom: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      opacity: 0.6;
      padding: 4px 8px;
      padding-left: 0;
      background-color: var(--bg-tertiary);
      border-radius: 4px;
      word-break: break-all;
      display: inline-block;
    `,pluginMarketplaceCardDescriptionText:r`
      line-height: 1.5;
      margin-top: 0;
    `,pluginMarketplaceCardVersionInfo:r`
      margin-top: 8px;
      font-size: 0.6875rem;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    `,pluginMarketplaceCardVersionSatisfied:r`
      color: ${n(e.green[600],e.green[400])};
    `,pluginMarketplaceCardVersionUnsatisfied:r`
      color: ${n(e.red[600],e.red[400])};
    `,pluginMarketplaceCardDocsLink:r`
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      color: ${n(e.blue[600],e.blue[400])};
      text-decoration: none;
      margin-top: 0.5rem;
      transition: color 0.15s ease;

      &:hover {
        color: ${n(e.blue[700],e.blue[300])};
        text-decoration: underline;
      }

      svg {
        width: 12px;
        height: 12px;
      }
    `,pluginMarketplaceCardTags:r`
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      margin-top: 0.75rem;
    `,pluginMarketplaceCardTag:r`
      font-size: 0.6875rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      background: ${n(e.gray[100],e.darkGray[700])};
      border: 1px solid ${n(e.gray[300],e.gray[600])};
      border-radius: 0.25rem;
      color: ${n(e.gray[700],e.gray[300])};
    `,pluginMarketplaceCardImage:r`
      width: 28px;
      height: 28px;
      object-fit: contain;
    `,pluginMarketplaceNewBanner:r`
      position: absolute;
      top: 12px;
      right: -35px;
      background-color: ${n(e.green[500],e.green[500])};
      color: white;
      padding: 4px 40px;
      font-size: 0.6875rem;
      font-weight: bold;
      text-transform: uppercase;
      transform: rotate(45deg);
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.5);
      z-index: 10;
      letter-spacing: 0.5px;
    `,pluginMarketplaceCardFeatured:r`
      border-color: ${n(e.blue[500],e.blue[400])};
      border-width: 2px;
    `,pluginMarketplaceCardActive:r`
      border-color: ${n(e.green[500],e.green[600])};
      border-width: 2px;

      &:hover {
        border-color: ${n(e.green[500],e.green[600])};
        box-shadow: none;
        transform: none;

        &::before {
          transform: scaleX(0);
        }
      }
    `,pluginMarketplaceCardStatus:r`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${n(e.green[600],e.green[400])};
      animation: ${sr} 0.3s ease;

      svg {
        width: 18px;
        height: 18px;
        animation: ${cr} 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    `,pluginMarketplaceCardSpinner:r`
      width: 18px;
      height: 18px;
      border: 2px solid ${n(e.gray[200],e.gray[700])};
      border-top-color: ${n(e.blue[600],e.blue[400])};
      border-radius: 50%;
      animation: ${gr} 0.8s linear infinite;
    `,pluginMarketplaceCardStatusText:r`
      font-size: 0.875rem;
      font-weight: 600;
    `,pluginMarketplaceCardStatusTextError:r`
      font-size: 0.875rem;
      font-weight: 600;
      color: ${n(e.red[600],e.red[400])};
    `,pluginMarketplaceEmpty:r`
      padding: 3rem 2rem;
      text-align: center;
      background: ${n(e.white,e.darkGray[800])};
      border: 2px dashed ${n(e.gray[300],e.gray[700])};
      border-radius: 0.75rem;
      animation: ${Ne} 0.3s ease;
    `,pluginMarketplaceEmptyText:r`
      font-size: 0.95rem;
      color: ${n(e.gray[600],e.gray[400])};
      margin: 0;
      line-height: 1.6;
    `,pluginMarketplaceSection:r`
      margin-bottom: 2.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    `,pluginMarketplaceSectionHeader:r`
      margin-bottom: 1rem;
      padding: 1rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      background: ${n(e.gray[50],e.darkGray[800])};
      border: 1px solid ${n(e.gray[200],e.gray[700])};
      border-radius: 0.5rem;
      transition: all 0.15s ease;

      &:hover {
        background: ${n(e.gray[100],e.darkGray[700])};
        border-color: ${n(e.gray[300],e.gray[600])};
      }
    `,pluginMarketplaceSectionHeaderLeft:r`
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionChevron:r`
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${n(e.gray[700],e.gray[300])};
      transition: transform 0.2s ease;
    `,pluginMarketplaceSectionChevronCollapsed:r`
      transform: rotate(-90deg);
    `,pluginMarketplaceSectionTitle:r`
      font-size: 1.25rem;
      font-weight: 700;
      color: ${n(e.gray[900],e.gray[50])};
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceSectionBadge:r`
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.5rem;
      background: ${n("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")};
      color: white;
      border-radius: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,pluginMarketplaceFeatureBanner:r`
      margin-top: 1rem;
      padding: 1.25rem 1.5rem;
      background: ${n("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)")};
      border-radius: 0.75rem;
      border: 1px solid ${n(e.blue[400],e.blue[800])};
      box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    `,pluginMarketplaceFeatureBannerContent:r`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,pluginMarketplaceFeatureBannerTitle:r`
      font-size: 1.125rem;
      font-weight: 700;
      color: white;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,pluginMarketplaceFeatureBannerIcon:r`
      width: 24px;
      height: 24px;
      display: inline-flex;
    `,pluginMarketplaceFeatureBannerText:r`
      font-size: 0.95rem;
      color: ${n("rgba(255, 255, 255, 0.95)","rgba(255, 255, 255, 0.9)")};
      line-height: 1.5;
      margin: 0;
    `,pluginMarketplaceFeatureBannerButton:r`
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.625rem 1.25rem;
      background: white;
      color: ${e.blue[600]};
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      align-self: flex-start;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background: ${n(e.gray[50],e.gray[100])};
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      &:active {
        transform: translateY(0);
      }
    `,pluginMarketplaceFeatureBannerButtonIcon:r`
      width: 18px;
      height: 18px;
    `,pluginMarketplaceCardDisabled:r`
      opacity: 0.6;
      filter: grayscale(0.3);
      cursor: not-allowed;

      &:hover {
        transform: none;
        box-shadow: none;
      }
    `,pluginMarketplaceCardBadge:r`
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.65rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 0.25rem;
      letter-spacing: 0.05em;
    `,pluginMarketplaceCardBadgeInstall:r`
      background: ${n(e.green[100],e.green[900])};
      color: ${n(e.green[700],e.green[300])};
    `,pluginMarketplaceCardBadgeAdd:r`
      background: ${n(e.blue[100],e.blue[900])};
      color: ${n(e.blue[700],e.blue[300])};
    `,pluginMarketplaceCardBadgeRequires:r`
      background: ${n(e.gray[100],e.gray[800])};
      color: ${n(e.gray[600],e.gray[400])};
    `,pluginMarketplaceButtonInstalled:r`
      opacity: 0.5;
    `,pluginNameAddMore:r`
      font-size: ${l.xs};
      font-family: ${c.sans};
      color: ${n(e.gray[600],e.gray[400])};
      padding: ${o[3]} ${o[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      background: ${n("linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)","linear-gradient(135deg, #1f2937 0%, #111827 100%)")};
      font-weight: 600;
      position: relative;
      margin-top: auto;

      h3 {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        &::before {
          content: '✨';
          font-size: 0.875rem;
          animation: ${Fe} 2s ease-in-out infinite;
        }
      }

      &:hover {
        background: ${n("linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)","linear-gradient(135deg, #374151 0%, #1f2937 100%)")};
        color: ${n(e.gray[900],e.gray[100])};
        border-left-color: ${n(e.blue[500],e.blue[400])};

        h3::before {
          animation: ${Fe} 0.5s ease-in-out infinite;
        }
      }

      &.active {
        background: ${n("linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)","linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)")};
        color: ${n(e.white,e.white)};
        border-left: 2px solid ${n(e.blue[600],e.blue[300])};
        box-shadow: 0 4px 12px
          ${n("rgba(59, 130, 246, 0.3)","rgba(96, 165, 250, 0.3)")};

        h3::before {
          filter: brightness(0) invert(1);
        }
      }

      &.active:hover {
        background: ${n("linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)","linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)")};
      }
    `}};function N(){const{theme:t}=Se(),[e,a]=B(Ue(t()));return H(()=>{a(Ue(t()))}),e}var dr="data:image/png;base64,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",ur=C("<div>"),pr=C('<button type=button aria-label="Open TanStack Devtools">'),mr=C('<img alt="TanStack Devtools">'),fr=t=>{const{settings:e}=ee(),[a,o]=B(),s=N(),c=z(()=>V(s().mainCloseBtn,s().mainCloseBtnPosition(e().position),s().mainCloseBtnAnimation(t.isOpen(),e().hideUntilHover)));return H(()=>{const l=e().customTrigger,r=a();l&&r&&l(r,{theme:e().theme})}),u(T,{get when(){return!e().triggerHidden},get children(){var l=pr();return l.$$click=()=>t.setIsOpen(!t.isOpen()),m(l,u(T,{get when(){return e().customTrigger},get fallback(){return(()=>{var r=mr();return G(r,"src",dr),r})()},get children(){var r=ur();return re(o,r),r}})),w(()=>p(l,c())),l}})};J(["click"]);var hr=C("<div>"),vr=t=>{const e=N(),{height:a}=it(),{settings:o}=ee(),s=ye();return(()=>{var c=hr();return G(c,"id",be),m(c,u(er,{animationMs:400,get children(){return t.children}})),w(l=>{var r=s().pipWindow?"100vh":a()+"px",n=s().pipWindow?"100vh":a()+"px",g=V(e().devtoolsPanelContainer(o().panelLocation,!!s().pipWindow),e().devtoolsPanelContainerAnimation(t.isOpen(),a(),o().panelLocation),e().devtoolsPanelContainerVisibility(t.isOpen()),e().devtoolsPanelContainerResizing(t.isResizing));return r!==l.e&&de(c,"height",l.e=r),n!==l.t&&de(c,"--tsd-main-panel-height",l.t=n),g!==l.a&&p(c,l.a=g),l},{e:void 0,t:void 0,a:void 0}),c})()},Qe=C("<div>"),yr=t=>{const e=N(),{settings:a}=ee();return(()=>{var o=Qe(),s=t.ref;return typeof s=="function"?re(s,o):t.ref=o,m(o,(()=>{var c=O(()=>!!t.handleDragStart);return()=>c()?(()=>{var l=Qe();return pe(l,"mousedown",t.handleDragStart,!0),w(()=>p(l,e().dragHandle(a().panelLocation))),l})():null})(),null),m(o,()=>t.children,null),w(()=>p(o,e().devtoolsPanel)),o})()};J(["mousedown"]);var br=C("<div><h4 style=margin:0></h4><div></div>Final shortcut is: "),kr={Shift:"Shift",Alt:"Alt",Meta:"Meta",Control:"Control",CtrlOrMeta:"Ctrl Or Meta"},Le=t=>{const e=N(),a=l=>{if(t.hotkey.includes(l))t.onHotkeyChange(t.hotkey.filter(r=>r!==l));else{const r=t.hotkey.filter(g=>t.modifiers.includes(g)),n=t.hotkey.filter(g=>!t.modifiers.includes(g));t.onHotkeyChange([...r,l,...n])}},o=()=>t.hotkey.filter(l=>!t.modifiers.includes(l)).join("+"),s=l=>{const r=i=>{if(i.length===1)return[Me(i)];const d=[];for(const v of i){const x=Me(v);d.includes(x)||d.push(x)}return d},n=t.hotkey.filter(i=>t.modifiers.includes(i)),g=l.split("+").flatMap(i=>r(i)).filter(Boolean);t.onHotkeyChange([...n,...g])},c=()=>t.hotkey.join(" + ");return(()=>{var l=br(),r=l.firstChild,n=r.nextSibling,g=n.nextSibling;return m(r,()=>t.description),m(n,u(T,{keyed:!0,get when(){return t.hotkey},get children(){return t.modifiers.map(i=>u(_e,{variant:"success",onclick:()=>a(i),get outline(){return!t.hotkey.includes(i)},get children(){return kr[i]||i}}))}})),m(l,u(Xe,{description:"Use '+' to combine keys (e.g., 'a+b' or 'd'). This will be used with the enabled modifiers from above",placeholder:"a",get value(){return o()},onChange:s}),g),m(l,c,null),w(i=>{var d=e().settingsGroup,v=e().settingsModifiers;return d!==i.e&&p(l,i.e=d),v!==i.t&&p(n,i.t=v),i},{e:void 0,t:void 0}),l})()},ce=C("<div>"),wr=C("<div><div>"),xr=()=>{const{setSettings:t,settings:e}=ee(),a=N(),o=["CtrlOrMeta","Alt","Shift"];return u(Ze,{withPadding:!0,get children(){return[u(ne,{get children(){return[u(ae,{get children(){return[u(ie,{get children(){return u(Et,{})}}),"General"]}}),u(oe,{children:"Configure general behavior of the devtools panel."}),(()=>{var s=ce();return m(s,u(le,{label:"Default open",description:"Automatically open the devtools panel when the page loads",onChange:()=>t({defaultOpen:!e().defaultOpen}),get checked(){return e().defaultOpen}}),null),m(s,u(le,{label:"Hide trigger until hovered",description:"Keep the devtools trigger button hidden until you hover over its area",onChange:()=>t({hideUntilHover:!e().hideUntilHover}),get checked(){return e().hideUntilHover}}),null),m(s,u(le,{label:"Completely hide trigger",description:"Completely removes the trigger from the DOM (you can still open it with the hotkey)",onChange:()=>t({triggerHidden:!e().triggerHidden}),get checked(){return e().triggerHidden}}),null),m(s,u(fe,{label:"Theme",description:"Choose the theme for the devtools panel",get value(){return e().theme},options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}],onChange:c=>t({theme:c})}),null),w(()=>p(s,a().settingsGroup)),s})()]}}),u(ne,{get children(){return[u(ae,{get children(){return[u(ie,{get children(){return u(It,{})}}),"URL Configuration"]}}),u(oe,{children:"Control when devtools are available based on URL parameters."}),(()=>{var s=ce();return m(s,u(le,{label:"Require URL Flag",description:"Only show devtools when a specific URL parameter is present",get checked(){return e().requireUrlFlag},onChange:c=>t({requireUrlFlag:c})}),null),m(s,u(T,{get when(){return e().requireUrlFlag},get children(){var c=ce();return m(c,u(Xe,{label:"URL flag",description:"Enter the URL parameter name (e.g., 'debug' for ?debug=true)",placeholder:"debug",get value(){return e().urlFlag},onChange:l=>t({urlFlag:l})})),w(()=>p(c,a().conditionalSetting)),c}}),null),w(()=>p(s,a().settingsGroup)),s})()]}}),u(ne,{get children(){return[u(ae,{get children(){return[u(ie,{get children(){return u(Dt,{})}}),"Keyboard"]}}),u(oe,{children:"Customize keyboard shortcuts for quick access."}),(()=>{var s=ce();return m(s,u(Le,{title:"Open/Close Devtools",description:"Hotkey to open/close devtools",get hotkey(){return e().openHotkey},modifiers:o,onHotkeyChange:c=>t({openHotkey:c})}),null),m(s,u(Le,{title:"Source Inspector",description:"Hotkey to open source inspector",get hotkey(){return e().inspectHotkey},modifiers:o,onHotkeyChange:c=>t({inspectHotkey:c})}),null),w(()=>p(s,a().settingsStack)),s})()]}}),u(ne,{get children(){return[u(ae,{get children(){return[u(ie,{get children(){return u(Ht,{})}}),"Position"]}}),u(oe,{children:"Adjust the position of the trigger button and devtools panel."}),(()=>{var s=wr(),c=s.firstChild;return m(c,u(fe,{label:"Trigger Position",options:[{label:"Bottom Right",value:"bottom-right"},{label:"Bottom Left",value:"bottom-left"},{label:"Top Right",value:"top-right"},{label:"Top Left",value:"top-left"},{label:"Middle Right",value:"middle-right"},{label:"Middle Left",value:"middle-left"}],get value(){return e().position},onChange:l=>t({position:l})}),null),m(c,u(fe,{label:"Panel Position",get value(){return e().panelLocation},options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}],onChange:l=>t({panelLocation:l})}),null),w(l=>{var r=a().settingsGroup,n=a().settingRow;return r!==l.e&&p(s,l.e=r),n!==l.t&&p(c,l.t=n),l},{e:void 0,t:void 0}),s})()]}})]}})},Cr=t=>{if(t.status==="installing")return"Installing...";if(t.status==="success")return"Installed!";if(t.status==="error")return"Error";switch(t.actionType){case"install":return"Install";case"install-devtools":return"Install Devtools";case"add-to-devtools":return"Add to Devtools";case"requires-package":return`Requires ${t.requiredPackageName}`;case"wrong-framework":return"Different Framework";case"already-installed":return"Already Installed";case"bump-version":return"Bump Version";case"version-mismatch":return"Version Mismatch";default:return"Install"}},Sr=t=>t.actionType==="requires-package"||t.actionType==="wrong-framework"||t.actionType==="version-mismatch"?"danger":t.actionType==="bump-version"?"warning":t.actionType==="already-installed"?"secondary":"primary",Mr=(t,e)=>{const a=e(),o=a.pluginMarketplaceCardBadge;switch(t.actionType){case"install":case"install-devtools":return`${o} ${a.pluginMarketplaceCardBadgeInstall}`;case"add-to-devtools":return`${o} ${a.pluginMarketplaceCardBadgeAdd}`;case"already-installed":return`${o} ${a.pluginMarketplaceCardBadgeAdd}`;case"bump-version":return`${o} ${a.pluginMarketplaceCardBadgeRequires}`;case"version-mismatch":return`${o} ${a.pluginMarketplaceCardBadgeRequires}`;case"requires-package":case"wrong-framework":return`${o} ${a.pluginMarketplaceCardBadgeRequires}`;default:return o}},Ar=t=>{switch(t.actionType){case"install":case"install-devtools":return"Available";case"add-to-devtools":return"Installed";case"already-installed":return"Active";case"version-mismatch":return"Incompatible";case"requires-package":return"Unavailable";case"wrong-framework":return"Other Framework";default:return""}},Pr=C("<div>New"),Tr=C("<img>"),Br=C("<span>✓ v<!> • Min v"),Er=C("<p>"),Ir=C('<a target=_blank rel="noopener noreferrer">Documentation '),ve=C("<div>"),Dr=C("<div style=position:relative><span></span><div></div><div><h3></h3><p></p><p>"),Hr=C("<span>⚠️ v<!> • Requires v<!>+"),Oe=C("<span>"),zr=C("<span>Installing..."),Nr=C("<span>Installed!"),Fr=t=>{const e=N(),{card:a}=t;return(()=>{var o=Dr(),s=o.firstChild,c=s.nextSibling,l=c.nextSibling,r=l.firstChild,n=r.nextSibling,g=n.nextSibling;return m(o,u(T,{get when(){return a.metadata?.isNew},get children(){var i=Pr();return w(()=>p(i,e().pluginMarketplaceNewBanner)),i}}),s),m(s,()=>Ar(a)),m(c,u(T,{get when(){return a.metadata?.logoUrl},get fallback(){return u(Qt,{})},get children(){var i=Tr();return w(d=>{var v=a.metadata?.logoUrl,x=a.metadata?.title||a.devtoolsPackage,h=e().pluginMarketplaceCardImage;return v!==d.e&&G(i,"src",d.e=v),x!==d.t&&G(i,"alt",d.t=x),h!==d.a&&p(i,d.a=h),d},{e:void 0,t:void 0,a:void 0}),i}})),m(r,()=>a.metadata?.title||a.devtoolsPackage),m(n,()=>a.devtoolsPackage),m(g,(()=>{var i=O(()=>a.actionType==="requires-package");return()=>i()?`Requires ${a.requiredPackageName}`:O(()=>a.actionType==="wrong-framework")()?"For different framework projects":O(()=>a.actionType==="already-installed")()?"Active in your devtools":O(()=>a.actionType==="version-mismatch")()?a.versionInfo?.reason||"Version incompatible":a.metadata?.description||`For ${a.requiredPackageName}`})()),m(l,u(T,{get when(){return a.versionInfo},get children(){var i=Er();return m(i,u(T,{get when(){return a.versionInfo?.satisfied},get fallback(){return(()=>{var d=Hr(),v=d.firstChild,x=v.nextSibling,h=x.nextSibling,f=h.nextSibling;return f.nextSibling,m(d,()=>a.versionInfo?.current,x),m(d,()=>a.versionInfo?.required,f),w(()=>p(d,e().pluginMarketplaceCardVersionUnsatisfied)),d})()},get children(){var d=Br(),v=d.firstChild,x=v.nextSibling;return x.nextSibling,m(d,()=>a.versionInfo?.current,x),m(d,()=>a.versionInfo?.required,null),w(()=>p(d,e().pluginMarketplaceCardVersionSatisfied)),d}})),w(()=>p(i,e().pluginMarketplaceCardVersionInfo)),i}}),null),m(l,u(T,{get when(){return a.metadata?.docsUrl},get children(){var i=Ir();return i.firstChild,m(i,u(Lt,{}),null),w(d=>{var v=a.metadata?.docsUrl,x=e().pluginMarketplaceCardDocsLink;return v!==d.e&&G(i,"href",d.e=v),x!==d.t&&p(i,d.t=x),d},{e:void 0,t:void 0}),i}}),null),m(l,u(T,{get when(){return O(()=>!!a.metadata?.tags)()&&a.metadata.tags.length>0},get children(){var i=ve();return m(i,u(K,{get each(){return a.metadata?.tags},children:d=>(()=>{var v=Oe();return m(v,d),w(()=>p(v,e().pluginMarketplaceCardTag)),v})()})),w(()=>p(i,e().pluginMarketplaceCardTags)),i}}),null),m(o,u(T,{get when(){return a.status==="idle"},get fallback(){return(()=>{var i=ve();return m(i,u(T,{get when(){return a.status==="installing"},get children(){return[(()=>{var d=ve();return w(()=>p(d,e().pluginMarketplaceCardSpinner)),d})(),(()=>{var d=zr();return w(()=>p(d,e().pluginMarketplaceCardStatusText)),d})()]}}),null),m(i,u(T,{get when(){return a.status==="success"},get children(){return[u(Ot,{}),(()=>{var d=Nr();return w(()=>p(d,e().pluginMarketplaceCardStatusText)),d})()]}}),null),m(i,u(T,{get when(){return a.status==="error"},get children(){return[u(qt,{}),(()=>{var d=Oe();return m(d,()=>a.error||"Failed to install"),w(()=>p(d,e().pluginMarketplaceCardStatusTextError)),d})()]}}),null),w(()=>p(i,e().pluginMarketplaceCardStatus)),i})()},get children(){return u(_e,{get variant(){return Sr(a)},onClick:()=>t.onAction(a),get disabled(){return a.status!=="idle"||a.actionType==="requires-package"||a.actionType==="wrong-framework"||a.actionType==="already-installed"||a.actionType==="version-mismatch"},get class(){return O(()=>a.actionType==="already-installed")()?e().pluginMarketplaceButtonInstalled:""},get children(){return Cr(a)}})}}),null),w(i=>{var d=e().pluginMarketplaceCard,v={[e().pluginMarketplaceCardDisabled]:!a.isCurrentFramework&&a.actionType!=="already-installed",[e().pluginMarketplaceCardFeatured]:!!a.metadata?.featured&&a.actionType!=="already-installed",[e().pluginMarketplaceCardActive]:a.actionType==="already-installed"},x=Mr(a,e),h=e().pluginMarketplaceCardIcon,f=!!a.metadata?.logoUrl,b=e().pluginMarketplaceCardHeader,k=e().pluginMarketplaceCardTitle,S=e().pluginMarketplaceCardPackageBadge,Q=e().pluginMarketplaceCardDescriptionText;return d!==i.e&&p(o,i.e=d),i.t=ke(o,v,i.t),x!==i.a&&p(s,i.a=x),h!==i.o&&p(c,i.o=h),f!==i.i&&c.classList.toggle("custom-logo",i.i=f),b!==i.n&&p(l,i.n=b),k!==i.s&&p(r,i.s=k),S!==i.h&&p(n,i.h=S),Q!==i.r&&p(g,i.r=Q),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0}),o})()},Ur=C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">'),Qr=C('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><rect x=2 y=4 width=20 height=16 rx=2></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">'),Lr=C(`<div><div><h4><span></span>Want to be featured here?</h4><p>If you've built a plugin for TanStack Devtools and would like to showcase it in the featured section, we'd love to hear from you! Reach out to us to discuss partnership opportunities.</p><a href="mailto:partners+devtools@tanstack.com?subject=Featured%20Plugin%20Partnership%20Inquiry"><span></span>Contact Us`),Or=C("<div>"),qr=C("<div><div><div><div></div><h3>"),Rr=()=>Ur(),$r=()=>Qr(),Yr=t=>{const e=N();return(()=>{var a=qr(),o=a.firstChild,s=o.firstChild,c=s.firstChild,l=c.nextSibling;return pe(o,"click",t.onToggleCollapse,!0),m(c,u(Ut,{})),m(l,()=>t.section.displayName),m(a,u(T,{get when(){return!t.isCollapsed()},get children(){return[u(T,{get when(){return t.section.id==="featured"},get children(){var r=Lr(),n=r.firstChild,g=n.firstChild,i=g.firstChild,d=g.nextSibling,v=d.nextSibling,x=v.firstChild;return m(i,u(Rr,{})),m(x,u($r,{})),w(h=>{var f=e().pluginMarketplaceFeatureBanner,b=e().pluginMarketplaceFeatureBannerContent,k=e().pluginMarketplaceFeatureBannerTitle,S=e().pluginMarketplaceFeatureBannerIcon,Q=e().pluginMarketplaceFeatureBannerText,j=e().pluginMarketplaceFeatureBannerButton,A=e().pluginMarketplaceFeatureBannerButtonIcon;return f!==h.e&&p(r,h.e=f),b!==h.t&&p(n,h.t=b),k!==h.a&&p(g,h.a=k),S!==h.o&&p(i,h.o=S),Q!==h.i&&p(d,h.i=Q),j!==h.n&&p(v,h.n=j),A!==h.s&&p(x,h.s=A),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),r}}),(()=>{var r=Or();return m(r,u(K,{get each(){return t.section.cards},children:n=>u(Fr,{card:n,get onAction(){return t.onCardAction}})})),w(()=>p(r,e().pluginMarketplaceGrid)),r})()]}}),null),w(r=>{var n=e().pluginMarketplaceSection,g=e().pluginMarketplaceSectionHeader,i=e().pluginMarketplaceSectionHeaderLeft,d=e().pluginMarketplaceSectionChevron,v={[e().pluginMarketplaceSectionChevronCollapsed]:t.isCollapsed()},x=e().pluginMarketplaceSectionTitle;return n!==r.e&&p(a,r.e=n),g!==r.t&&p(o,r.t=g),i!==r.a&&p(s,r.a=i),d!==r.o&&p(c,r.o=d),r.i=ke(c,v,r.i),x!==r.n&&p(l,r.n=x),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),a})()};J(["click"]);var jr=C("<div><div><h3>Marketplace Settings</h3><button></button></div><div>"),Vr=t=>{const e=N();return u(T,{get when(){return t.isOpen()},get children(){var a=jr(),o=a.firstChild,s=o.firstChild,c=s.nextSibling,l=o.nextSibling;return pe(c,"click",t.onClose,!0),m(c,u(zt,{})),m(l,u(le,{label:"Show active plugins",description:"Display installed plugins in a separate section",get checked(){return t.showActivePlugins()},onChange:r=>t.setShowActivePlugins(r)})),w(r=>{var n=e().pluginMarketplaceSettingsPanel,g=e().pluginMarketplaceSettingsPanelHeader,i=e().pluginMarketplaceSettingsPanelTitle,d=e().pluginMarketplaceSettingsPanelClose,v=e().pluginMarketplaceSettingsPanelContent;return n!==r.e&&p(a,r.e=n),g!==r.t&&p(o,r.t=g),i!==r.a&&p(s,r.a=i),d!==r.o&&p(c,r.o=d),v!==r.i&&p(l,r.i=v),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),a}})};J(["click"]);var Wr=C("<div>"),Gr=C("<button>"),Kr=t=>{const e=N();return u(T,{get when(){return t.tags().length>0},get children(){var a=Wr();return m(a,u(K,{get each(){return t.tags()},children:o=>(()=>{var s=Gr();return s.$$click=()=>t.onToggleTag(o),m(s,o),w(c=>{var l=e().pluginMarketplaceTagButton,r={[e().pluginMarketplaceTagButtonActive]:t.selectedTags().has(o)};return l!==c.e&&p(s,c.e=l),c.t=ke(s,r,c.t),c},{e:void 0,t:void 0}),s})()})),w(()=>p(a,e().pluginMarketplaceTagsContainer)),a}})};J(["click"]);var Jr=C('<div><div><h2>Plugin Marketplace</h2><div style=display:flex;align-items:center><div><input type=text placeholder="Search plugins..."></div><button></button></div></div><p>Discover and install devtools for TanStack Query, Router, Form, and Pacer'),Zr=t=>{const e=N();return(()=>{var a=Jr(),o=a.firstChild,s=o.firstChild,c=s.nextSibling,l=c.firstChild,r=l.firstChild,n=l.nextSibling,g=o.nextSibling;return m(l,u(Nt,{}),r),r.$$input=i=>t.onSearchInput(i.currentTarget.value),pe(n,"click",t.onSettingsClick,!0),m(n,u(Ft,{})),m(a,u(Kr,{get tags(){return t.tags},get selectedTags(){return t.selectedTags},get onToggleTag(){return t.onToggleTag}}),null),w(i=>{var d=e().pluginMarketplaceHeader,v=e().pluginMarketplaceTitleRow,x=e().pluginMarketplaceTitle,h=e().pluginMarketplaceSearchWrapper,f=e().pluginMarketplaceSearch,b=e().pluginMarketplaceSettingsButton,k=e().pluginMarketplaceDescription;return d!==i.e&&p(a,i.e=d),v!==i.t&&p(o,i.t=v),x!==i.a&&p(s,i.a=x),h!==i.o&&p(l,i.o=h),f!==i.i&&p(r,i.i=f),b!==i.n&&p(n,i.n=b),k!==i.s&&p(g,i.s=k),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),w(()=>r.value=t.searchInput()),a})()};J(["input","click"]);var qe=["react","solid","vue","svelte","angular"],Xr={"@tanstack/react-query-devtools":{packageName:"@tanstack/react-query-devtools",title:"TanStack Query Devtools",description:"Powerful devtools for TanStack Query - inspect queries, mutations, and cache",requires:{packageName:"@tanstack/react-query",minVersion:"5.0.0"},pluginId:"tanstack-query",docsUrl:"https://tanstack.com/query/latest/docs/devtools",author:"TanStack",framework:"react",featured:!0,tags:["TanStack","data-fetching","caching","state-management"]},"@tanstack/solid-query-devtools":{packageName:"@tanstack/solid-query-devtools",title:"TanStack Query Devtools",description:"Powerful devtools for TanStack Query - inspect queries, mutations, and cache",requires:{packageName:"@tanstack/solid-query",minVersion:"5.0.0"},pluginId:"tanstack-query",docsUrl:"https://tanstack.com/query/latest/docs/devtools",author:"TanStack",framework:"solid",tags:["TanStack","data-fetching","caching","state-management"]},"@tanstack/react-router-devtools":{packageName:"@tanstack/react-router-devtools",title:"TanStack Router Devtools",description:"Inspect routes, navigation, and router state in real-time",requires:{packageName:"@tanstack/react-router",minVersion:"1.0.0"},pluginId:"tanstack-router",docsUrl:"https://tanstack.com/router/latest/docs/devtools",author:"TanStack",framework:"react",featured:!0,tags:["TanStack","routing","navigation"]},"@tanstack/solid-router-devtools":{packageName:"@tanstack/solid-router-devtools",title:"TanStack Router Devtools",description:"Inspect routes, navigation, and router state in real-time",requires:{packageName:"@tanstack/solid-router",minVersion:"1.0.0"},pluginId:"tanstack-router",docsUrl:"https://tanstack.com/router/latest/docs/devtools",author:"TanStack",framework:"solid",tags:["TanStack","routing","navigation"]},"@tanstack/react-form-devtools":{packageName:"@tanstack/react-form-devtools",title:"TanStack Form Devtools",description:"Debug form state, validation, and field values",requires:{packageName:"@tanstack/react-form",minVersion:"1.23.0"},pluginImport:{importName:"FormDevtoolsPlugin",type:"function"},pluginId:"tanstack-form",docsUrl:"https://tanstack.com/form/latest/docs/devtools",author:"TanStack",framework:"react",isNew:!0,tags:["TanStack","forms","validation"]},"@tanstack/solid-form-devtools":{packageName:"@tanstack/solid-form-devtools",title:"TanStack Form Devtools",description:"Debug form state, validation, and field values",requires:{packageName:"@tanstack/solid-form",minVersion:"1.23.0"},pluginImport:{importName:"FormDevtoolsPlugin",type:"function"},pluginId:"tanstack-form",docsUrl:"https://tanstack.com/form/latest/docs/devtools",author:"TanStack",isNew:!0,framework:"solid",tags:["TanStack","forms","validation"]},"@tanstack/react-pacer-devtools":{packageName:"@tanstack/react-pacer-devtools",title:"Pacer Devtools",description:"Monitor and debug your Pacer animations and transitions",requires:{packageName:"@tanstack/react-pacer",minVersion:"0.16.4"},author:"TanStack",framework:"react",isNew:!0,tags:["TanStack"]},"@tanstack/solid-pacer-devtools":{packageName:"@tanstack/solid-pacer-devtools",title:"Pacer Devtools",description:"Monitor and debug your Pacer animations and transitions",requires:{packageName:"@tanstack/solid-pacer",minVersion:"0.14.4"},author:"TanStack",framework:"solid",isNew:!0,tags:["TanStack"]},"@dimano/ts-devtools-plugin-prefetch-heatmap":{packageName:"@dimano/ts-devtools-plugin-prefetch-heatmap",title:"Prefetch Heatmap",description:"Visualize TanStack Router prefetch intent, hits, and waste with a color overlay and a live metrics panel.",requires:{packageName:"@tanstack/react-router",minVersion:"1.0.0"},pluginImport:{importName:"registerPrefetchHeatmapPlugin",type:"function"},pluginId:"prefetch-heatmap",logoUrl:"https://raw.githubusercontent.com/dimitrianoudi/tanstack-prefetch-heatmap/main/assets/prefetch-heatmap-card.png",docsUrl:"https://github.com/dimitrianoudi/tanstack-prefetch-heatmap#prefetch-heatmap-devtools-plugin",repoUrl:"https://github.com/dimitrianoudi/tanstack-prefetch-heatmap",author:"Dimitris Anoudis (@dimitrianoudi)",framework:"react",isNew:!0,tags:["Router","Prefetch","Analytics","Overlay","TanStack"]}};function _r(){return Object.values(Xr)}function ue(t){if(!t)return null;const e=t.replace(/^[v^~]/,"").split("-")[0]?.split("+")[0];if(!e)return null;const a=e.split(".");if(a.length<2)return null;const o=parseInt(a[0]??"0",10),s=parseInt(a[1]??"0",10),c=parseInt(a[2]??"0",10);return isNaN(o)||isNaN(s)||isNaN(c)?null:{major:o,minor:s,patch:c,raw:t}}function st(t,e){return t.major!==e.major?t.major-e.major:t.minor!==e.minor?t.minor-e.minor:t.patch-e.patch}function en(t,e){const a=ue(t),o=ue(e);return!a||!o?!0:st(a,o)>=0}function tn(t,e){const a=ue(t),o=ue(e);return!a||!o?!0:st(a,o)<=0}function rn(t,e,a){return!e&&!a?{satisfied:!0}:e&&!en(t,e)?{satisfied:!1,reason:`Requires v${e} or higher (current: v${t})`}:a&&!tn(t,a)?{satisfied:!1,reason:`Requires v${a} or lower (current: v${t})`}:{satisfied:!0}}var Re=(t,e)=>{const a={...t.dependencies,...t.devDependencies},o={react:["react","react-dom"],vue:["vue","@vue/core"],solid:["solid-js"],svelte:["svelte"],angular:["@angular/core"]};for(const s of e){const c=o[s];if(c&&c.some(l=>a[l]))return s}return"unknown"},nn=(t,e,a,o,s)=>{if(s)return Array.from(t).some(r=>{const n=r.toLowerCase(),g=s.toLowerCase();return n.startsWith(g)||n.includes(g)});if(t.has(e))return!0;const c=a.toLowerCase().split(/[-_/@]/).filter(r=>r.length>0),l=o.toLowerCase();return Array.from(t).some(r=>{const n=r.toLowerCase();if(n.includes(a.toLowerCase()))return!0;const g=c.filter(i=>n.includes(i));return!!(g.length>=2||n.includes(l)&&g.length>=1)})},$e=(t,e,a,o)=>{const s={...t.dependencies,...t.devDependencies},c=[];return _r().forEach(r=>{const n=r.packageName,g=r.framework===e||r.framework==="other",i=r.requires?.packageName,d=i?!!s[i]:!1,v=!!s[n];let x;if(d&&r.requires){const k=i?s[i]:void 0;if(k){const S=rn(k,r.requires.minVersion,r.requires.maxVersion);x={current:k,required:r.requires.minVersion,satisfied:S.satisfied,reason:S.reason}}}const h=nn(a,n,r.packageName,r.framework,r.pluginId);let f;g?r.requires&&!d?f="requires-package":x&&!x.satisfied?f="bump-version":v&&h?f="already-installed":v&&!h?f="add-to-devtools":!v&&r.requires&&d?f="install-devtools":f="install":f="wrong-framework";const b=o.find(k=>k.devtoolsPackage===n);c.push({requiredPackageName:i||"",devtoolsPackage:n,framework:r.framework,hasPackage:d,hasDevtools:v,isRegistered:h,actionType:f,status:b?.status||"idle",error:b?.error,isCurrentFramework:g,metadata:r,versionInfo:x})}),c},Ye=t=>{const e=[],a=t.filter(c=>c.metadata?.featured&&c.actionType!=="already-installed"&&c.isCurrentFramework);e.push({id:"featured",displayName:"⭐ Featured",cards:a});const o=t.filter(c=>c.actionType==="already-installed"&&c.isRegistered);o.length>0&&e.push({id:"active",displayName:"✓ Active Plugins",cards:o});const s=t.filter(c=>c.isCurrentFramework&&c.actionType!=="already-installed"&&!c.metadata?.featured);return s.length>0&&e.push({id:"available",displayName:"Available Plugins",cards:s}),e},an=C("<div><p>"),on=C("<div>"),je=()=>{const t=N(),{plugins:e}=at(),[a,o]=B([]),[s,c]=B(null),[l,r]=B(""),[n,g]=B(""),[i,d]=B(new Set),[v,x]=B(!0),[h,f]=B(new Set),[b,k]=B(!1);let S;const Q=y=>{r(y),S&&clearTimeout(S),S=setTimeout(()=>{g(y)},300)},j=y=>{d(P=>{const M=new Set(P);return M.has(y)?M.delete(y):M.add(y),M})},A=(y,P)=>{if(!P)return!0;const M=P.toLowerCase();return y.devtoolsPackage.toLowerCase().includes(M)||y.requiredPackageName.toLowerCase().includes(M)||y.framework.toLowerCase().includes(M)},D=()=>{const y=n(),P=v(),M=h(),E=s();if(!E)return[];const I=Re(E,qe),F=new Set(e()?.map(U=>U.id||"")||[]),X=$e(E,I,F,a().flatMap(U=>U.cards));let L=Ye(X);return P||(L=L.filter(U=>U.id!=="active")),M.size>0&&(L=L.map(U=>({...U,cards:U.cards.filter(se=>se.metadata?.tags?se.metadata.tags.some(gt=>M.has(gt)):!1)})).filter(U=>U.cards.length>0)),y?L.map(U=>({...U,cards:U.cards.filter(se=>A(se,y))})).filter(U=>U.cards.length>0):L};Je(()=>{const y=Y.on("package-json-read",I=>{c(I.payload.packageJson),$(I.payload.packageJson)}),P=Y.on("package-json-updated",I=>{c(I.payload.packageJson),$(I.payload.packageJson)}),M=Y.on("devtools-installed",I=>{o(F=>F.map(X=>({...X,cards:X.cards.map(L=>L.devtoolsPackage===I.payload.packageName?{...L,status:I.payload.success?"success":"error",error:I.payload.error}:L)})))}),E=Y.on("plugin-added",I=>{if(o(F=>F.map(X=>({...X,cards:X.cards.map(L=>L.devtoolsPackage===I.payload.packageName?{...L,status:I.payload.success?"success":"error",error:I.payload.error}:L)}))),I.payload.success){const F=s();F&&$(F)}});W(()=>{y(),P(),M(),E()}),Y.emit("mounted",void 0)});const $=y=>{if(!y)return;const P=Re(y,qe),M=new Set(e()?.map(F=>F.id||"")||[]),E=$e(y,P,M,a().flatMap(F=>F.cards)),I=Ye(E);o(I)},q=y=>{if(!(y.actionType==="requires-package"||y.actionType==="wrong-framework"||y.actionType==="already-installed"||y.actionType==="version-mismatch")){if(o(P=>P.map(M=>({...M,cards:M.cards.map(E=>E.devtoolsPackage===y.devtoolsPackage?{...E,status:"installing"}:E)}))),y.actionType==="bump-version"){Y.emit("bump-package-version",{packageName:y.requiredPackageName,devtoolsPackage:y.devtoolsPackage,pluginName:y.metadata?.title||y.devtoolsPackage,minVersion:y.metadata?.requires?.minVersion,pluginImport:y.metadata?.pluginImport});return}if(y.actionType==="add-to-devtools"){Y.emit("add-plugin-to-devtools",{packageName:y.devtoolsPackage,pluginName:y.metadata?.title??y.devtoolsPackage,pluginImport:y.metadata?.pluginImport});return}Y.emit("install-devtools",{packageName:y.devtoolsPackage,pluginName:y.metadata?.title??y.devtoolsPackage,pluginImport:y.metadata?.pluginImport})}},R=()=>{const y=new Set;return a().forEach(P=>{(P.id==="featured"||P.id==="available")&&P.cards.forEach(M=>{M.metadata?.tags&&M.metadata.tags.forEach(E=>y.add(E))})}),Array.from(y).sort()},Z=y=>{f(P=>{const M=new Set(P);return M.has(y)?M.delete(y):M.add(y),M})};return(()=>{var y=on();return m(y,u(Vr,{isOpen:b,onClose:()=>k(!1),showActivePlugins:v,setShowActivePlugins:x}),null),m(y,u(Zr,{searchInput:l,onSearchInput:Q,onSettingsClick:()=>k(!b()),tags:R,selectedTags:h,onToggleTag:Z}),null),m(y,u(T,{get when(){return D().length>0},get children(){return u(K,{get each(){return D()},children:P=>u(Yr,{section:P,isCollapsed:()=>i().has(P.id),onToggleCollapse:()=>j(P.id),onCardAction:q})})}}),null),m(y,u(T,{get when(){return D().length===0},get children(){var P=an(),M=P.firstChild;return m(M,(()=>{var E=O(()=>!!n());return()=>E()?`No plugins found matching "${n()}"`:"No additional plugins available. You have all compatible devtools installed and registered!"})()),w(E=>{var I=t().pluginMarketplaceEmpty,F=t().pluginMarketplaceEmptyText;return I!==E.e&&p(P,E.e=I),F!==E.t&&p(M,E.t=F),E},{e:void 0,t:void 0}),P}}),null),w(()=>p(y,t().pluginMarketplace)),y})()},ln=C("<div><div><div><div></div><div><h3>Add More"),sn=C("<div><h3>"),cn=C("<div>"),gn=()=>{const{plugins:t,activePlugins:e,toggleActivePlugins:a}=at(),{expanded:o,hoverUtils:s,animationMs:c,setForceExpand:l}=xe(),[r,n]=B(new Map),[g,i]=B(!1),d=N(),{theme:v}=Se(),x=z(()=>t()?.length&&t().length>0);H(()=>{l(g())}),H(()=>{t()?.filter(k=>e().includes(k.id))?.forEach(k=>{const S=r().get(k.id);S&&k.render(S,v())})});const h=()=>i(!g()),f=b=>{g()&&i(!1),a(b)};return u(T,{get when(){return x()},get fallback(){return u(je,{})},get children(){var b=ln(),k=b.firstChild,S=k.firstChild,Q=S.firstChild,j=Q.nextSibling;return k.addEventListener("mouseleave",()=>{g()||s.leave()}),k.addEventListener("mouseenter",()=>s.enter()),m(Q,u(K,{get each(){return t()},children:A=>{let D;H(()=>{D&&(typeof A.name=="string"?D.textContent=A.name:A.name(D,v()))});const $=z(()=>e().includes(A.id));return(()=>{var q=sn(),R=q.firstChild;q.$$click=()=>f(A.id);var Z=D;return typeof Z=="function"?re(Z,R):D=R,w(y=>{var P=V(d().pluginName,{active:$()}),M=`${jt}-${A.id}`;return P!==y.e&&p(q,y.e=P),M!==y.t&&G(R,"id",y.t=M),y},{e:void 0,t:void 0}),q})()}})),j.$$click=h,m(b,u(T,{get when(){return g()},get fallback(){return u(K,{get each(){return e()},children:A=>(()=>{var D=cn();return re($=>{n(q=>{const R=new Map(q);return R.set(A,$),R})},D),G(D,"id",`${Yt}-${A}`),w(()=>p(D,d().pluginsTabContent)),D})()})},get children(){return u(je,{})}}),null),w(A=>{var D=d().pluginsTabPanel,$=V(d().pluginsTabDraw(o()),{[d().pluginsTabDraw(o())]:o()},d().pluginsTabDrawTransition(c)),q=V(d().pluginsTabSidebar(o()),d().pluginsTabSidebarTransition(c)),R=d().pluginsList,Z=V(d().pluginNameAddMore,{active:g()});return D!==A.e&&p(b,A.e=D),$!==A.t&&p(k,A.t=$),q!==A.a&&p(S,A.a=q),R!==A.o&&p(Q,A.o=R),Z!==A.i&&p(j,A.i=Z),A},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),b}})};J(["click"]);function dn(t,e={}){const{attributes:a=!0,childList:o=!0,subtree:s=!0,observeTitle:c=!0}=e;Je(()=>{const l=new MutationObserver(n=>{for(const g of n)if(g.type==="childList")g.addedNodes.forEach(i=>t({kind:"added",node:i},g)),g.removedNodes.forEach(i=>t({kind:"removed",node:i},g));else if(g.type==="attributes"){const i=g.target;t({kind:"attr",target:i,name:g.attributeName,oldValue:g.oldValue??null},g)}else g.target.parentNode&&g.target.parentNode.tagName.toLowerCase()==="title"&&t({kind:"title",title:document.title},g)});l.observe(document.head,{childList:o,attributes:a,subtree:s,attributeOldValue:a,characterData:!0,characterDataOldValue:!1});let r;if(c){const n=document.head.querySelector("title")||document.head.appendChild(document.createElement("title"));r=new MutationObserver(()=>{t({kind:"title",title:document.title})}),r.observe(n,{childList:!0,characterData:!0,subtree:!0})}W(()=>{l.disconnect(),r?.disconnect()})})}var un=C("<div><div> Preview</div><div></div><div></div><div>"),pn=C("<img alt=Preview>"),mn=C("<div style=background:#222;color:#888;display:flex;align-items:center;justify-content:center;min-height:80px;width:100%>No Image"),Ve=C("<div>"),fn=C("<div><strong>Missing tags for <!>:</strong><ul>"),hn=C("<li>"),We=[{network:"Facebook",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4267B2"},{network:"X/Twitter",tags:[{key:"twitter:title",prop:"title"},{key:"twitter:description",prop:"description"},{key:"twitter:image",prop:"image"},{key:"twitter:url",prop:"url"}],color:"#1DA1F2"},{network:"LinkedIn",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#0077B5"},{network:"Discord",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#5865F2"},{network:"Slack",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4A154B"},{network:"Mastodon",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#6364FF"},{network:"Bluesky",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#1185FE"}];function vn(t){const e=N();return(()=>{var a=un(),o=a.firstChild,s=o.firstChild,c=o.nextSibling,l=c.nextSibling,r=l.nextSibling;return m(o,()=>t.network,s),m(a,(()=>{var n=O(()=>!!t.meta.image);return()=>n()?(()=>{var g=pn();return w(i=>{var d=t.meta.image,v=e().seoPreviewImage;return d!==i.e&&G(g,"src",i.e=d),v!==i.t&&p(g,i.t=v),i},{e:void 0,t:void 0}),g})():(()=>{var g=mn();return w(()=>p(g,e().seoPreviewImage)),g})()})(),c),m(c,()=>t.meta.title||"No Title"),m(l,()=>t.meta.description||"No Description"),m(r,()=>t.meta.url||window.location.href),w(n=>{var g=e().seoPreviewCard,i=t.color,d=e().seoPreviewHeader,v=t.color,x=e().seoPreviewTitle,h=e().seoPreviewDesc,f=e().seoPreviewUrl;return g!==n.e&&p(a,n.e=g),i!==n.t&&de(a,"border-color",n.t=i),d!==n.a&&p(o,n.a=d),v!==n.o&&de(o,"color",n.o=v),x!==n.i&&p(c,n.i=x),h!==n.n&&p(l,n.n=h),f!==n.s&&p(r,n.s=f),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),a})()}var yn=()=>{const[t,e]=B(o()),a=N();function o(){const s=Array.from(document.head.querySelectorAll("meta")),c=[];for(const l of We){const r={},n=[];for(const g of l.tags){const i=s.find(d=>(g.key.includes("twitter:")?!1:d.getAttribute("property")===g.key)||d.getAttribute("name")===g.key);i&&i.getAttribute("content")?r[g.prop]=i.getAttribute("content")||void 0:n.push(g.key)}c.push({network:l.network,found:r,missing:n})}return c}return dn(()=>{e(o())}),u(Ze,{withPadding:!0,get children(){return u(ne,{get children(){return[u(ae,{get children(){return[u(ie,{get children(){return u(Bt,{})}}),"Social previews"]}}),u(oe,{children:"See how your current page will look when shared on popular social networks. The tool checks for essential meta tags and highlights any that are missing."}),(()=>{var s=Ve();return m(s,u(K,{get each(){return t()},children:(c,l)=>{const r=We[l()];return(()=>{var n=Ve();return m(n,u(vn,{get meta(){return c.found},get color(){return r.color},get network(){return r.network}}),null),m(n,(()=>{var g=O(()=>c.missing.length>0);return()=>g()?(()=>{var i=fn(),d=i.firstChild,v=d.firstChild,x=v.nextSibling;x.nextSibling;var h=d.nextSibling;return m(d,()=>r?.network,x),m(h,u(K,{get each(){return c.missing},children:f=>(()=>{var b=hn();return m(b,f),w(()=>p(b,a().seoMissingTag)),b})()})),w(f=>{var b=a().seoMissingTagsSection,k=a().seoMissingTagsList;return b!==f.e&&p(i,f.e=b),k!==f.t&&p(h,f.t=k),f},{e:void 0,t:void 0}),i})():null})(),null),n})()}})),w(()=>p(s,a().seoPreviewSection)),s})()]}})}})},ct=[{name:"Plugins",id:"plugins",component:()=>u(gn,{}),icon:()=>u(At,{})},{name:"SEO",id:"seo",component:()=>u(yn,{}),icon:()=>u(Pt,{})},{name:"Settings",id:"settings",component:()=>u(xr,{}),icon:()=>u(Tt,{})}],bn=C("<div>"),kn=C("<button type=button>"),wn=C("<div style=margin-top:auto;width:100%><button type=button></button><button type=button>"),xn=t=>{const e=N(),{state:a,setState:o}=me(),s=ye(),c=()=>{s().requestPipWindow(`width=${window.innerWidth},height=${a().height},top=${window.screen.height},left=${window.screenLeft}}`)},{hoverUtils:l}=xe();return(()=>{var r=bn();return m(r,u(K,{each:ct,children:n=>(()=>{var g=kn();return g.addEventListener("mouseleave",()=>{n.id==="plugins"&&l.leave()}),g.addEventListener("mouseenter",()=>{n.id==="plugins"&&l.enter()}),g.$$click=()=>o({activeTab:n.id}),m(g,()=>n.icon()),w(()=>p(g,V(e().tab,{active:a().activeTab===n.id}))),g})()}),null),m(r,(()=>{var n=O(()=>s().pipWindow!==null);return()=>n()?null:(()=>{var g=wn(),i=g.firstChild,d=i.nextSibling;return i.$$click=c,m(i,u(St,{})),d.$$click=()=>t.toggleOpen(),m(d,u(Mt,{})),w(v=>{var x=V(e().tab,"detach"),h=V(e().tab,"close");return x!==v.e&&p(i,v.e=x),h!==v.t&&p(d,v.t=h),v},{e:void 0,t:void 0}),g})()})(),null),w(()=>p(r,e().tabContainer)),r})()};J(["click"]);var Cn=C("<div>"),Sn=()=>{const{state:t}=me(),e=N(),a=z(()=>ct.find(o=>o.id===t().activeTab)?.component||null);return(()=>{var o=Cn();return m(o,()=>a()?.()),w(()=>p(o,e().tabContent)),o})()},Ge=C("<div style=pointer-events:none>"),Mn=()=>{const{settings:t}=ee(),e=()=>({element:null,bounding:{width:0,height:0,left:0,top:0},dataSource:""}),[a,o]=Te(e()),s=()=>{o(e())},[c,l]=B(null),r=Xt(()=>c()),[n,g]=Te({x:0,y:0});De(document,"mousemove",h=>{g({x:h.clientX,y:h.clientY})});const i=tt(),d=z(()=>ar(i(),t().inspectHotkey));H(()=>{if(!d()){s();return}const h=document.elementFromPoint(n.x,n.y);if(!(h instanceof HTMLElement)){s();return}if(h===a.element)return;const f=h.getAttribute("data-tsd-source");if(!f){s();return}const b=h.getBoundingClientRect(),k={width:b.width,height:b.height,left:b.left,top:b.top};o({element:h,bounding:k,dataSource:f})}),De(document,"click",h=>{if(!a.element)return;window.getSelection()?.removeAllRanges(),h.preventDefault(),h.stopPropagation();const f=new URL("/",location.origin),b=new URL(`__tsd/open-source?source=${encodeURIComponent(a.dataSource)}`,f);fetch(b).catch(()=>{})});const v=z(()=>a.element?{display:"block",width:`${a.bounding.width}px`,height:`${a.bounding.height}px`,left:`${a.bounding.left}px`,top:`${a.bounding.top}px`,"background-color":"oklch(55.4% 0.046 257.417 /0.25)",transition:"all 0.05s linear",position:"fixed","z-index":9999}:{display:"none"}),x=z(()=>{if(a.element&&c()){const h=window.innerWidth,f=r.height||26,b=r.width||0;let k=a.bounding.left,S=a.bounding.top-f-4;return S<0&&(S=a.bounding.top+a.bounding.height+4),k+b>h&&(k=h-b-4),k<0&&(k=4),{position:"fixed",left:`${k}px`,top:`${S}px`,"background-color":"oklch(55.4% 0.046 257.417 /0.80)",color:"white",padding:"2px 4px",fontSize:"12px","border-radius":"2px","z-index":1e4,visibility:"visible",transition:"all 0.05s linear"}}return{display:"none"}});return[(()=>{var h=Ge();return re(l,h),m(h,()=>a.dataSource),w(f=>Pe(h,{...x()},f)),h})(),(()=>{var h=Ge();return w(f=>Pe(h,{...v()},f)),h})()]},An=C("<div>");function zn(){const{settings:t}=ee(),{setHeight:e}=it(),{persistOpen:a,setPersistOpen:o}=tr(),[s,c]=B(),[l,r]=B(t().defaultOpen||a()),n=ye();let g;const[i,d]=B(!1),v=()=>{if(n().pipWindow)return;const b=!l();r(b),o(b),Y.emit("trigger-toggled",{isOpen:b})};H(()=>{const f=Y.on("trigger-toggled",b=>{if(n().pipWindow)return;const S=b.payload.isOpen;S!==l()&&(r(S),o(S))});W(f)});const x=(f,b)=>{if(b.button!==0||!f)return;d(!0);const k={originalHeight:f.getBoundingClientRect().height,pageY:b.pageY},S=j=>{const A=k.pageY-j.pageY,D=t().panelLocation==="bottom"?k.originalHeight+A:k.originalHeight-A;e(D),D<70?r(!1):r(!0)},Q=()=>{d(!1),document.removeEventListener("mousemove",S),document.removeEventListener("mouseUp",Q)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",Q)};H(()=>{if(l()){const f=s()?.parentElement?.style.paddingBottom,b=()=>{g&&s()?.parentElement&&c(k=>(k?.parentElement,k))};if(b(),typeof window<"u")return(n().pipWindow??window).addEventListener("resize",b),()=>{(n().pipWindow??window).removeEventListener("resize",b),s()?.parentElement&&typeof f=="string"&&c(k=>k)}}else s()?.parentElement&&c(f=>(f?.parentElement&&f.parentElement.removeAttribute("style"),f))}),H(()=>{window.addEventListener("keydown",f=>{f.key==="Escape"&&l()&&v()})}),rr(l),H(()=>{if(s()){const f=s(),b=getComputedStyle(f).fontSize;f?.style.setProperty("--tsrd-font-size",b)}}),H(()=>{const f=k=>{if(!k||!(k instanceof HTMLElement))return!1;if(k.isContentEditable)return!0;const S=k.tagName;return S==="INPUT"||S==="TEXTAREA"||S==="SELECT"?!0:k.getAttribute("role")==="textbox"},b=lt(t().openHotkey);for(const k of b)Kt(k,()=>{f(document.activeElement)||v()})});const{theme:h}=Se();return u(Ct,{get theme(){return h()},get children(){return u(xt,{get mount(){return(n().pipWindow??window).document.body},get children(){var f=An();return re(c,f),G(f,"data-testid",be),m(f,u(T,{get when(){return O(()=>n().pipWindow!==null)()?!0:O(()=>!!t().requireUrlFlag)()?window.location.search.includes(t().urlFlag):!0},get children(){return[u(fr,{isOpen:l,setIsOpen:v}),u(vr,{isResizing:i,isOpen:l,get children(){return u(yr,{ref:b=>g=b,handleDragStart:b=>x(g,b),get children(){return[u(xn,{toggleOpen:v}),u(Sn,{})]}})}})]}}),null),m(f,u(Mn,{}),null),f}})}})}export{zn as default};
