import{i as u,m as b,c as f,t as c,d as M,s as z,b as x}from"./web-DpVA_3D5.js";import{P as k,Q as L,U as j,Y as V,V as A,a0 as C,ak as H,a5 as F}from"./index-B6lEgo0i.js";import{u as S,c as w}from"./goober.modern-CCv2hThM.js";const E=A(void 0),y0=o=>{const[e,l]=k(o.theme);return L(()=>{l(o.theme)}),j(E.Provider,{value:{theme:e,setTheme:l},get children(){return o.children}})};function G(){const o=V(E);if(!o)throw new Error("useTheme must be used within a ThemeContextProvider");return o}const a={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},font:{size:{xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)"},weight:{medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",full:"9999px"}},size:{.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",4.5:"calc(var(--tsrd-font-size) * 1.125)",6.5:"calc(var(--tsrd-font-size) * 1.625)",12:"calc(var(--tsrd-font-size) * 3)"}},P={primary:{bg:a.colors.gray[900],hover:a.colors.gray[800],active:a.colors.gray[700],text:"#fff",border:a.colors.gray[900]},secondary:{bg:a.colors.gray[100],hover:a.colors.gray[200],active:a.colors.gray[300],text:a.colors.gray[900],border:a.colors.gray[300]},info:{bg:a.colors.blue[500],hover:a.colors.blue[600],active:a.colors.blue[700],text:"#fff",border:a.colors.blue[500]},warning:{bg:a.colors.yellow[500],hover:a.colors.yellow[600],active:a.colors.yellow[700],text:"#fff",border:a.colors.yellow[500]},danger:{bg:a.colors.red[500],hover:a.colors.red[600],active:a.colors.red[700],text:"#fff",border:a.colors.red[500]},success:{bg:a.colors.green[500],hover:a.colors.green[600],active:a.colors.green[700],text:"#fff",border:a.colors.green[500]}},t=S,_=(o="dark")=>{const{colors:e,font:l,size:s,border:v}=a,{fontFamily:g}=l,r=(n,i)=>o==="light"?n:i,h=320;return{logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      width: ${s[12]};
      height: ${s[12]};
      font-family: ${g.sans};
      gap: ${a.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
    `,selectWrapper:t`
      width: 100%;
      max-width: ${h}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,selectContainer:t`
      width: 100%;
    `,selectLabel:t`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${r(e.gray[900],e.gray[100])};
      text-align: left;
    `,selectDescription:t`
      font-size: 0.8rem;
      color: ${r(e.gray[500],e.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,select:t`
      appearance: none;
      width: 100%;
      padding: 0.5rem 3rem 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${r(e.gray[50],e.darkGray[800])};
      color: ${r(e.gray[900],e.gray[100])};
      border: 1px solid ${r(e.gray[200],e.gray[800])};
      font-size: 0.875rem;
      transition: all 0.15s ease;
      cursor: pointer;

      /* Custom arrow */
      background-image: url("data:image/svg+xml;utf8,<svg fill='%236b7280' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 1.25rem;

      &:hover {
        border-color: ${r(e.gray[300],e.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${e.gray[400]};
        box-shadow: 0 0 0 3px ${r(e.gray[200],e.gray[800])};
      }
    `,inputWrapper:t`
      width: 100%;
      max-width: ${h}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,inputContainer:t`
      width: 100%;
    `,inputLabel:t`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${r(e.gray[900],e.gray[100])};
      text-align: left;
    `,inputDescription:t`
      font-size: 0.8rem;
      color: ${r(e.gray[500],e.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,input:t`
      appearance: none;
      box-sizing: border-box;
      width: 100%;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${r(e.gray[50],e.darkGray[800])};
      color: ${r(e.gray[900],e.gray[100])};
      border: 1px solid ${r(e.gray[200],e.gray[800])};
      font-size: 0.875rem;
      font-family: ${g.mono};
      transition: all 0.15s ease;

      &::placeholder {
        color: ${r(e.gray[400],e.gray[500])};
      }

      &:hover {
        border-color: ${r(e.gray[300],e.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${r(e.gray[400],e.gray[600])};
        box-shadow: 0 0 0 3px ${r(e.gray[200],e.gray[800])};
      }
    `,checkboxWrapper:t`
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      padding: 0.375rem;
      border-radius: 0.375rem;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: ${r(e.gray[50],e.darkGray[900])};
      }
    `,checkboxContainer:t`
      width: 100%;
    `,checkboxLabelContainer:t`
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
    `,checkbox:t`
      appearance: none;
      width: 1.25rem;
      height: 1.25rem;
      border: 2px solid ${r(e.gray[300],e.gray[700])};
      border-radius: 0.25rem;
      background-color: ${r(e.gray[50],e.darkGray[800])};
      display: grid;
      place-items: center;
      transition: all 0.15s ease;
      flex-shrink: 0;
      margin-top: 0.125rem;

      &:hover {
        border-color: ${r(e.gray[400],e.gray[600])};
      }

      &:checked {
        background-color: ${r(e.gray[900],e.gray[100])};
        border-color: ${r(e.gray[900],e.gray[100])};
      }

      &:checked::after {
        content: '';
        width: 0.4rem;
        height: 0.6rem;
        border: solid ${r("#fff",e.gray[900])};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        margin-top: -3px;
      }
    `,checkboxLabel:t`
      color: ${r(e.gray[900],e.gray[100])};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.4;
      text-align: left;
    `,checkboxDescription:t`
      color: ${r(e.gray[500],e.gray[400])};
      font-size: 0.8rem;
      line-height: 1.3;
      text-align: left;
    `,button:{base:t`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: ${a.font.fontFamily.sans};
        font-size: 0.8rem;
        font-weight: 500;
        border-radius: 0.375rem;
        padding: 0.375rem 0.75rem;
        cursor: pointer;
        transition:
          background 0.15s,
          color 0.15s,
          border 0.15s,
          box-shadow 0.15s;
        outline: none;
        border-width: 1px;
        border-style: solid;
      `,variant(n,i,p){const d=P[n];return p?t`
            background: transparent;
            color: ${r(d.bg,d.bg)};
            border-color: transparent;
            &:hover {
              background: ${r(e.gray[100],e.darkGray[800])};
            }
            &:active {
              background: ${r(e.gray[200],e.darkGray[700])};
            }
          `:i?t`
            background: transparent;
            color: ${r(d.bg,d.bg)};
            border-color: ${r(d.bg,d.bg)};
            &:hover {
              background: ${r(e.gray[50],e.darkGray[800])};
              border-color: ${r(d.hover,d.hover)};
            }
            &:active {
              background: ${r(e.gray[100],e.darkGray[700])};
              border-color: ${r(d.active,d.active)};
            }
          `:t`
          background: ${r(d.bg,d.bg)};
          color: ${r(d.text,d.text)};
          border-color: ${r(d.border,d.border)};
          &:hover {
            background: ${r(d.hover,d.hover)};
            border-color: ${r(d.hover,d.hover)};
          }
          &:active {
            background: ${r(d.active,d.active)};
            border-color: ${r(d.active,d.active)};
          }
        `}},tag:{dot:n=>t`
        width: ${a.size[1.5]};
        height: ${a.size[1.5]};
        border-radius: ${a.border.radius.full};
        background-color: ${r(a.colors[n][500],a.colors[n][500])};
      `,base:t`
        display: flex;
        gap: ${a.size[1.5]};
        box-sizing: border-box;
        height: ${a.size[6.5]};
        background: ${r(e.gray[50],e.darkGray[500])};
        color: ${r(e.gray[700],e.gray[300])};
        border-radius: ${a.border.radius.sm};
        font-size: ${l.size.sm};
        padding: ${a.size[1]};
        padding-left: ${a.size[1.5]};
        align-items: center;
        font-weight: ${l.weight.medium};
        border: ${r("1px solid "+e.gray[300],"1px solid transparent")};
        user-select: none;
        position: relative;
        &:focus-visible {
          outline-offset: 2px;
          outline: 2px solid ${r(e.blue[700],e.blue[800])};
        }
      `,label:t`
        font-size: ${l.size.xs};
      `,count:t`
        font-size: ${l.size.xs};
        padding: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${r(e.gray[500],e.gray[400])};
        background-color: ${r(e.gray[200],e.darkGray[300])};
        border-radius: 2px;
        font-variant-numeric: tabular-nums;
        height: ${a.size[4.5]};
      `},tree:{info:t`
        color: ${r(e.gray[500],e.gray[500])};
        font-size: ${l.size.xs};
        margin-right: ${s[1]};
      `,actionButton:t`
        background-color: transparent;
        color: ${r(e.gray[500],e.gray[500])};
        border: none;
        display: inline-flex;
        padding: 0px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: ${s[3]};
        height: ${s[3]};
        position: relative;
        z-index: 1;

        &:hover svg {
          color: ${r(e.gray[600],e.gray[400])};
        }

        &:focus-visible {
          border-radius: ${v.radius.xs};
          outline: 2px solid ${r(e.blue[700],e.blue[800])};
          outline-offset: 2px;
        }
      `,expanderContainer:t`
        position: relative;
      `,expander:t`
        position: absolute;
        cursor: pointer;
        left: -16px;
        top: 3px;
        & path {
          stroke: ${r(e.blue[400],e.blue[300])};
        }
        & svg {
          width: ${s[3]};
          height: ${s[3]};
        }

        display: inline-flex;
        align-items: center;
        transition: all 0.1s ease;
      `,expandedLine:n=>t`
        display: block;
        padding-left: 0.75rem;
        margin-left: -0.7rem;
        ${n?`border-left: 1px solid ${r(e.blue[400],e.blue[300])};`:""}
      `,collapsible:t`
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: ${r(e.gray[100],e.darkGray[700])};
          border-radius: ${a.border.radius.sm};
          padding: 0 ${a.size[1]};
        }
      `,actions:t`
        display: inline-flex;
        margin-left: ${s[2]};
        gap: ${s[2]};
        align-items: center;
        & svg {
          height: 12px;
          width: 12px;
        }
      `,valueCollapsed:t`
        color: ${r(e.gray[500],e.gray[400])};
      `,valueFunction:t`
        color: ${r(e.cyan[500],e.cyan[400])};
      `,valueString:t`
        color: ${r(e.green[500],e.green[400])};
      `,valueNumber:t`
        color: ${r(e.yellow[500],e.yellow[400])};
      `,valueBoolean:t`
        color: ${r(e.pink[500],e.pink[400])};
      `,valueNull:t`
        color: ${r(e.gray[500],e.gray[400])};
        font-style: italic;
      `,valueKey:t`
        color: ${r(e.blue[400],e.blue[300])};
      `,valueBraces:t`
        color: ${e.gray[500]};
      `,valueContainer:n=>t`
        display: block;
        margin-left: ${n?"0":"1rem"};

        &:not(:hover) .actions {
          display: none;
        }

        &:hover .actions {
          display: inline-flex;
        }
      `},header:{row:t`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${a.size[2]} ${a.size[2.5]};
        gap: ${a.size[2.5]};
        border-bottom: ${r(e.gray[300],e.darkGray[500])} 1px solid;
        align-items: center;
      `,logoAndToggleContainer:t`
        display: flex;
        gap: ${a.size[3]};
        align-items: center;
        & > button {
          padding: 0;
          background: transparent;
          border: none;
          display: flex;
          gap: ${s[.5]};
          flex-direction: column;
        }
      `,logo:t`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border: none;
        gap: ${a.size[.5]};
        padding: 0px;
        &:hover {
          opacity: 0.7;
        }
        &:focus-visible {
          outline-offset: 4px;
          border-radius: ${v.radius.xs};
          outline: 2px solid ${e.blue[800]};
        }
      `,tanstackLogo:t`
        font-size: ${l.size.md};
        font-weight: ${l.weight.bold};
        line-height: ${l.lineHeight.xs};
        white-space: nowrap;
        color: ${r(e.gray[700],e.gray[300])};
      `,flavorLogo:(n,i)=>t`
        font-weight: ${l.weight.semibold};
        font-size: ${l.size.xs};
        background: linear-gradient(to right, ${r(n,i)});
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 1;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
      `},section:{main:t`
        margin-bottom: 1.5rem;
        padding: 1rem;
        background-color: ${r(e.gray[50],e.darkGray[800])};
        border: 1px solid ${r(e.gray[200],e.gray[800])};
        border-radius: 0.5rem;
        box-shadow: none;
      `,title:t`
        font-size: 1rem;
        font-weight: 600;
        color: ${r(e.gray[900],e.gray[100])};
        margin: 0 0 0.75rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${r(e.gray[200],e.gray[800])};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-align: left;
      `,icon:t`
        height: 18px;
        width: 18px;
        & > svg {
          height: 100%;
          width: 100%;
        }
        color: ${r(e.gray[700],e.gray[400])};
      `,description:t`
        color: ${r(e.gray[500],e.gray[400])};
        font-size: 0.8rem;
        margin: 0 0 1rem 0;
        line-height: 1.4;
        text-align: left;
      `},mainPanel:{panel:n=>t`
        padding: ${n?a.size[3]:0};
        background: ${r(e.gray[50],e.darkGray[700])};
        overflow-y: auto;
        height: 100%;
      `}}};function m(){const{theme:o}=G(),[e,l]=k(_(o()));return L(()=>{l(_(o()))}),e}var I=c("<div><label><input type=checkbox><div>"),B=c("<span>");function x0(o){const e=m(),[l,s]=k(o.checked||!1),v=g=>{const r=g.target.checked;s(r),o.onChange?.(r)};return(()=>{var g=I(),r=g.firstChild,h=r.firstChild,n=h.nextSibling;return h.$$input=v,u(n,(()=>{var i=b(()=>!!o.label);return()=>i()&&(()=>{var p=B();return u(p,()=>o.label),C(()=>f(p,e().checkboxLabel)),p})()})(),null),u(n,(()=>{var i=b(()=>!!o.description);return()=>i()&&(()=>{var p=B();return u(p,()=>o.description),C(()=>f(p,e().checkboxDescription)),p})()})(),null),C(i=>{var p=e().checkboxContainer,d=e().checkboxWrapper,$=e().checkbox,y=e().checkboxLabelContainer;return p!==i.e&&f(g,i.e=p),d!==i.t&&f(r,i.t=d),$!==i.a&&f(h,i.a=$),y!==i.o&&f(n,i.o=y),i},{e:void 0,t:void 0,a:void 0,o:void 0}),C(()=>h.checked=l()),g})()}M(["input"]);var Z=c("<div><div><input>"),T=c("<label>"),N=c("<p>");function k0(o){const e=m(),[l,s]=k(o.value||""),v=g=>{const r=g.target.value;s(h=>h!==r?r:h),o.onChange?.(r)};return(()=>{var g=Z(),r=g.firstChild,h=r.firstChild;return u(r,(()=>{var n=b(()=>!!o.label);return()=>n()&&(()=>{var i=T();return u(i,()=>o.label),C(()=>f(i,e().inputLabel)),i})()})(),h),u(r,(()=>{var n=b(()=>!!o.description);return()=>n()&&(()=>{var i=N();return u(i,()=>o.description),C(()=>f(i,e().inputDescription)),i})()})(),h),h.$$input=v,C(n=>{var i=e().inputContainer,p=e().inputWrapper,d=o.type||"text",$=e().input,y=o.placeholder;return i!==n.e&&f(g,n.e=i),p!==n.t&&f(r,n.t=p),d!==n.a&&z(h,"type",n.a=d),$!==n.o&&f(h,n.o=$),y!==n.i&&z(h,"placeholder",n.i=y),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),C(()=>h.value=l()),g})()}M(["input"]);var W=c("<div><div><select>"),K=c("<label>"),R=c("<p>"),X=c("<option>");function F0(o){const e=m(),[l,s]=k(o.value||o.options[0]?.value),v=g=>{const r=g.target.value;s(h=>h!==r?r:h),o.onChange?.(r)};return(()=>{var g=W(),r=g.firstChild,h=r.firstChild;return u(r,(()=>{var n=b(()=>!!o.label);return()=>n()&&(()=>{var i=K();return u(i,()=>o.label),C(()=>f(i,e().selectLabel)),i})()})(),h),u(r,(()=>{var n=b(()=>!!o.description);return()=>n()&&(()=>{var i=R();return u(i,()=>o.description),C(()=>f(i,e().selectDescription)),i})()})(),h),h.$$input=v,u(h,()=>o.options.map(n=>(()=>{var i=X();return u(i,()=>n.label),C(()=>i.value=n.value),i})())),C(n=>{var i=e().selectContainer,p=e().selectWrapper,d=e().select;return i!==n.e&&f(g,n.e=i),p!==n.t&&f(r,n.t=p),d!==n.a&&f(h,n.a=d),n},{e:void 0,t:void 0,a:void 0}),C(()=>h.value=l()),g})()}M(["input"]);var q=c('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),Q=c('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M8 6h10"></path><path d="M6 12h9"></path><path d="M11 18h7">'),U=c('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class="lucide lucide-file-search2-icon lucide-file-search-2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx=11.5 cy=14.5 r=2.5></circle><path d="M13.3 16.3 15 18">'),Y=c('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93">'),D=c('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="m10 9-3 3 3 3"></path><path d="m14 15 3-3-3-3"></path><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719">'),J=c('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect width=20 height=16 x=2 y=4 rx=2>'),O=c('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx=12 cy=10 r=3>'),e0=c('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1=8 x2=16 y1=12 y2=12>'),r0=c('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12">'),t0=c('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16.5 9.39999L7.5 4.20999M12 17.5L12 3M21 16V7.99999C20.9996 7.64926 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64926 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),o0=c('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.85999M22 4L12 14.01L9 11.01"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),n0=c('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),a0=c('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 9L12 15L18 9"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),i0=c('<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),l0=c('<svg width=12 height=12 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H11M15 3H21M21 3V9M21 3L10 14"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),s0=c('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),c0=c('<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M18 6L6 18M6 6L18 18"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),d0=c('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M2 10h6V4"></path><path d="m2 4 6 6"></path><path d="M21 10V7a2 2 0 0 0-2-2h-7"></path><path d="M3 14v2a2 2 0 0 0 2 2h3"></path><rect x=12 y=14 width=10 height=7 rx=1>'),h0=c('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),g0=c('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>');function z0(){return q()}function M0(){return Q()}function _0(){return U()}function B0(){return Y()}function L0(){return D()}function E0(){return J()}function D0(){return O()}function j0(){return D()}function V0(){return e0()}function A0(){return r0()}function H0(){return t0()}function S0(){return o0()}function G0(){return n0()}function P0(){return a0()}function I0(){return i0()}function Z0(){return l0()}function T0(){return s0()}function N0(){return c0()}function W0(){return d0()}function K0(o){return(()=>{var e=h0(),l=e.firstChild;return C(()=>z(l,"stroke",o.theme==="dark"?"#12B76A":"#027A48")),e})()}function R0(){return g0()}var u0=c("<button>");function X0(o){const e=m(),[l,s]=H(o,["variant","outline","ghost","children","className"]),v=l.variant||"primary",g=w(e().button.base,e().button.variant(v,l.outline,l.ghost),l.className);return(()=>{var r=u0();return x(r,F(s,{class:g}),!1),u(r,()=>l.children),r})()}var p0=c("<div>");const q0=({className:o,children:e,class:l,withPadding:s})=>{const v=m();return(()=>{var g=p0();return u(g,e),C(()=>f(g,w(v().mainPanel.panel(!!s),o,l))),g})()};var f0=c("<section>"),C0=c("<h3>"),v0=c("<p>"),m0=c("<span>");const Q0=({children:o,...e})=>{const l=m();return(()=>{var s=f0();return x(s,F({get class(){return w(l().section.main,e.class)}},e),!1),u(s,o),s})()},U0=({children:o,...e})=>{const l=m();return(()=>{var s=C0();return x(s,F({get class(){return w(l().section.title,e.class)}},e),!1),u(s,o),s})()},Y0=({children:o,...e})=>{const l=m();return(()=>{var s=v0();return x(s,F({get class(){return w(l().section.description,e.class)}},e),!1),u(s,o),s})()},J0=({children:o,...e})=>{const l=m();return(()=>{var s=m0();return x(s,F({get class(){return w(l().section.icon,e.class)}},e),!1),u(s,o),s})()};export{X0 as B,B0 as C,Z0 as E,D0 as G,k0 as I,E0 as K,M0 as L,q0 as M,W0 as P,Q0 as S,y0 as T,A0 as X,_0 as a,U0 as b,J0 as c,j0 as d,Y0 as e,L0 as f,x0 as g,F0 as h,V0 as i,N0 as j,I0 as k,T0 as l,P0 as m,H0 as n,S0 as o,G0 as p,z0 as q,K0 as r,R0 as s,t,m as u,G as v};
