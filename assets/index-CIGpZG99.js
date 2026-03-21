import{d as N}from"./dayjs.min-GEVlmzCW.js";import{U as m,Q as V,X as R,V as we,Y as Ce,T as H,P as A,a0 as p,a1 as Y,a2 as q,a3 as Z,a4 as Me,a5 as Ne,a6 as Ae,a7 as Fe}from"./index-B6lEgo0i.js";import{c as Le}from"./store-qp_T5N2h.js";import{f as I}from"./EventClient-C3NHPNPQ.js";import{s as Se,t as k,i as f,m as P,c,a as Q,d as W,b as He}from"./web-DpVA_3D5.js";import{u as ze,c as E}from"./goober.modern-CCv2hThM.js";import"./plugin-W3ivlmy3.js";function Te(){const[t,e]=Le([]);return V(()=>{const i=I.on("form-api",a=>{const s=a.payload.id,l=t.findIndex(o=>o.id===s);l>-1?e(l,{state:a.payload.state,options:a.payload.options,date:N()}):e(o=>[...o,{id:s,state:a.payload.state,options:a.payload.options,date:N(),history:[]}])});R(i)}),V(()=>{const i=I.on("form-state",a=>{const s=a.payload.id,l=t.findIndex(o=>o.id===s);l>-1?e(l,{state:a.payload.state,date:N()}):e(o=>[...o,{id:s,state:a.payload.state,options:{},date:N(),history:[]}])});R(i)}),V(()=>{const i=I.on("form-submission",a=>{const s=a.payload.id,l=t.findIndex(o=>o.id===s);if(l>-1&&t[l]){const{id:o,...d}=a.payload,n=[d,...t[l].history].slice(0,5);e(l,"history",n)}});R(i)}),V(()=>{const i=I.on("form-unmounted",a=>{e(s=>s.filter(l=>l.id!==a.payload.id))});R(i)}),{store:t}}const _e=we(void 0),je=t=>{const e=Te();return m(_e.Provider,{value:e,get children(){return t.children}})};function Ee(){const t=Ce(_e);if(t===void 0)throw new Error("useFormEventClient must be used within a FormEventClientContext");return{store:H(()=>t.store)}}const Ie=we(void 0);function De(){const t=Ce(Ie);if(!t)throw new Error("useTheme must be used within a ThemeContextProvider");return t}const y={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},font:{size:{xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)"},weight:{medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",full:"9999px"}},size:{.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",4.5:"calc(var(--tsrd-font-size) * 1.125)",6.5:"calc(var(--tsrd-font-size) * 1.625)",12:"calc(var(--tsrd-font-size) * 3)"}},Ke={primary:{bg:y.colors.gray[900],hover:y.colors.gray[800],active:y.colors.gray[700],text:"#fff",border:y.colors.gray[900]},secondary:{bg:y.colors.gray[100],hover:y.colors.gray[200],active:y.colors.gray[300],text:y.colors.gray[900],border:y.colors.gray[300]},info:{bg:y.colors.blue[500],hover:y.colors.blue[600],active:y.colors.blue[700],text:"#fff",border:y.colors.blue[500]},warning:{bg:y.colors.yellow[500],hover:y.colors.yellow[600],active:y.colors.yellow[700],text:"#fff",border:y.colors.yellow[500]},danger:{bg:y.colors.red[500],hover:y.colors.red[600],active:y.colors.red[700],text:"#fff",border:y.colors.red[500]},success:{bg:y.colors.green[500],hover:y.colors.green[600],active:y.colors.green[700],text:"#fff",border:y.colors.green[500]}},v=ze,he=(t="dark")=>{const{colors:e,font:i,size:a,border:s}=y,{fontFamily:l}=i,o=(n,r)=>t==="light"?n:r,d=320;return{logo:v`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      width: ${a[12]};
      height: ${a[12]};
      font-family: ${l.sans};
      gap: ${y.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
    `,selectWrapper:v`
      width: 100%;
      max-width: ${d}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,selectContainer:v`
      width: 100%;
    `,selectLabel:v`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${o(e.gray[900],e.gray[100])};
      text-align: left;
    `,selectDescription:v`
      font-size: 0.8rem;
      color: ${o(e.gray[500],e.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,select:v`
      appearance: none;
      width: 100%;
      padding: 0.5rem 3rem 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${o(e.gray[50],e.darkGray[800])};
      color: ${o(e.gray[900],e.gray[100])};
      border: 1px solid ${o(e.gray[200],e.gray[800])};
      font-size: 0.875rem;
      transition: all 0.15s ease;
      cursor: pointer;

      /* Custom arrow */
      background-image: url("data:image/svg+xml;utf8,<svg fill='%236b7280' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 1.25rem;

      &:hover {
        border-color: ${o(e.gray[300],e.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${e.gray[400]};
        box-shadow: 0 0 0 3px ${o(e.gray[200],e.gray[800])};
      }
    `,inputWrapper:v`
      width: 100%;
      max-width: ${d}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,inputContainer:v`
      width: 100%;
    `,inputLabel:v`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${o(e.gray[900],e.gray[100])};
      text-align: left;
    `,inputDescription:v`
      font-size: 0.8rem;
      color: ${o(e.gray[500],e.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,input:v`
      appearance: none;
      box-sizing: border-box;
      width: 100%;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${o(e.gray[50],e.darkGray[800])};
      color: ${o(e.gray[900],e.gray[100])};
      border: 1px solid ${o(e.gray[200],e.gray[800])};
      font-size: 0.875rem;
      font-family: ${l.mono};
      transition: all 0.15s ease;

      &::placeholder {
        color: ${o(e.gray[400],e.gray[500])};
      }

      &:hover {
        border-color: ${o(e.gray[300],e.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${o(e.gray[400],e.gray[600])};
        box-shadow: 0 0 0 3px ${o(e.gray[200],e.gray[800])};
      }
    `,checkboxWrapper:v`
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      padding: 0.375rem;
      border-radius: 0.375rem;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: ${o(e.gray[50],e.darkGray[900])};
      }
    `,checkboxContainer:v`
      width: 100%;
    `,checkboxLabelContainer:v`
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
    `,checkbox:v`
      appearance: none;
      width: 1.25rem;
      height: 1.25rem;
      border: 2px solid ${o(e.gray[300],e.gray[700])};
      border-radius: 0.25rem;
      background-color: ${o(e.gray[50],e.darkGray[800])};
      display: grid;
      place-items: center;
      transition: all 0.15s ease;
      flex-shrink: 0;
      margin-top: 0.125rem;

      &:hover {
        border-color: ${o(e.gray[400],e.gray[600])};
      }

      &:checked {
        background-color: ${o(e.gray[900],e.gray[100])};
        border-color: ${o(e.gray[900],e.gray[100])};
      }

      &:checked::after {
        content: '';
        width: 0.4rem;
        height: 0.6rem;
        border: solid ${o("#fff",e.gray[900])};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        margin-top: -3px;
      }
    `,checkboxLabel:v`
      color: ${o(e.gray[900],e.gray[100])};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.4;
      text-align: left;
    `,checkboxDescription:v`
      color: ${o(e.gray[500],e.gray[400])};
      font-size: 0.8rem;
      line-height: 1.3;
      text-align: left;
    `,button:{base:v`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: ${y.font.fontFamily.sans};
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
      `,variant(n,r,u){const g=Ke[n];return u?v`
            background: transparent;
            color: ${o(g.bg,g.bg)};
            border-color: transparent;
            &:hover {
              background: ${o(e.gray[100],e.darkGray[800])};
            }
            &:active {
              background: ${o(e.gray[200],e.darkGray[700])};
            }
          `:r?v`
            background: transparent;
            color: ${o(g.bg,g.bg)};
            border-color: ${o(g.bg,g.bg)};
            &:hover {
              background: ${o(e.gray[50],e.darkGray[800])};
              border-color: ${o(g.hover,g.hover)};
            }
            &:active {
              background: ${o(e.gray[100],e.darkGray[700])};
              border-color: ${o(g.active,g.active)};
            }
          `:v`
          background: ${o(g.bg,g.bg)};
          color: ${o(g.text,g.text)};
          border-color: ${o(g.border,g.border)};
          &:hover {
            background: ${o(g.hover,g.hover)};
            border-color: ${o(g.hover,g.hover)};
          }
          &:active {
            background: ${o(g.active,g.active)};
            border-color: ${o(g.active,g.active)};
          }
        `}},tag:{dot:n=>v`
        width: ${y.size[1.5]};
        height: ${y.size[1.5]};
        border-radius: ${y.border.radius.full};
        background-color: ${o(y.colors[n][500],y.colors[n][500])};
      `,base:v`
        display: flex;
        gap: ${y.size[1.5]};
        box-sizing: border-box;
        height: ${y.size[6.5]};
        background: ${o(e.gray[50],e.darkGray[500])};
        color: ${o(e.gray[700],e.gray[300])};
        border-radius: ${y.border.radius.sm};
        font-size: ${i.size.sm};
        padding: ${y.size[1]};
        padding-left: ${y.size[1.5]};
        align-items: center;
        font-weight: ${i.weight.medium};
        border: ${o("1px solid "+e.gray[300],"1px solid transparent")};
        user-select: none;
        position: relative;
        &:focus-visible {
          outline-offset: 2px;
          outline: 2px solid ${o(e.blue[700],e.blue[800])};
        }
      `,label:v`
        font-size: ${i.size.xs};
      `,count:v`
        font-size: ${i.size.xs};
        padding: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${o(e.gray[500],e.gray[400])};
        background-color: ${o(e.gray[200],e.darkGray[300])};
        border-radius: 2px;
        font-variant-numeric: tabular-nums;
        height: ${y.size[4.5]};
      `},tree:{info:v`
        color: ${o(e.gray[500],e.gray[500])};
        font-size: ${i.size.xs};
        margin-right: ${a[1]};
      `,actionButton:v`
        background-color: transparent;
        color: ${o(e.gray[500],e.gray[500])};
        border: none;
        display: inline-flex;
        padding: 0px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: ${a[3]};
        height: ${a[3]};
        position: relative;
        z-index: 1;

        &:hover svg {
          color: ${o(e.gray[600],e.gray[400])};
        }

        &:focus-visible {
          border-radius: ${s.radius.xs};
          outline: 2px solid ${o(e.blue[700],e.blue[800])};
          outline-offset: 2px;
        }
      `,expanderContainer:v`
        position: relative;
      `,expander:v`
        position: absolute;
        cursor: pointer;
        left: -16px;
        top: 3px;
        & path {
          stroke: ${o(e.blue[400],e.blue[300])};
        }
        & svg {
          width: ${a[3]};
          height: ${a[3]};
        }

        display: inline-flex;
        align-items: center;
        transition: all 0.1s ease;
      `,expandedLine:n=>v`
        display: block;
        padding-left: 0.75rem;
        margin-left: -0.7rem;
        ${n?`border-left: 1px solid ${o(e.blue[400],e.blue[300])};`:""}
      `,collapsible:v`
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: ${o(e.gray[100],e.darkGray[700])};
          border-radius: ${y.border.radius.sm};
          padding: 0 ${y.size[1]};
        }
      `,actions:v`
        display: inline-flex;
        margin-left: ${a[2]};
        gap: ${a[2]};
        align-items: center;
        & svg {
          height: 12px;
          width: 12px;
        }
      `,valueCollapsed:v`
        color: ${o(e.gray[500],e.gray[400])};
      `,valueFunction:v`
        color: ${o(e.cyan[500],e.cyan[400])};
      `,valueString:v`
        color: ${o(e.green[500],e.green[400])};
      `,valueNumber:v`
        color: ${o(e.yellow[500],e.yellow[400])};
      `,valueBoolean:v`
        color: ${o(e.pink[500],e.pink[400])};
      `,valueNull:v`
        color: ${o(e.gray[500],e.gray[400])};
        font-style: italic;
      `,valueKey:v`
        color: ${o(e.blue[400],e.blue[300])};
      `,valueBraces:v`
        color: ${e.gray[500]};
      `,valueContainer:n=>v`
        display: block;
        margin-left: ${n?"0":"1rem"};

        &:not(:hover) .actions {
          display: none;
        }

        &:hover .actions {
          display: inline-flex;
        }
      `},header:{row:v`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${y.size[2]} ${y.size[2.5]};
        gap: ${y.size[2.5]};
        border-bottom: ${o(e.gray[300],e.darkGray[500])} 1px solid;
        align-items: center;
      `,logoAndToggleContainer:v`
        display: flex;
        gap: ${y.size[3]};
        align-items: center;
        & > button {
          padding: 0;
          background: transparent;
          border: none;
          display: flex;
          gap: ${a[.5]};
          flex-direction: column;
        }
      `,logo:v`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border: none;
        gap: ${y.size[.5]};
        padding: 0px;
        &:hover {
          opacity: 0.7;
        }
        &:focus-visible {
          outline-offset: 4px;
          border-radius: ${s.radius.xs};
          outline: 2px solid ${e.blue[800]};
        }
      `,tanstackLogo:v`
        font-size: ${i.size.md};
        font-weight: ${i.weight.bold};
        line-height: ${i.lineHeight.xs};
        white-space: nowrap;
        color: ${o(e.gray[700],e.gray[300])};
      `,flavorLogo:(n,r)=>v`
        font-weight: ${i.weight.semibold};
        font-size: ${i.size.xs};
        background: linear-gradient(to right, ${o(n,r)});
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 1;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
      `},section:{main:v`
        margin-bottom: 1.5rem;
        padding: 1rem;
        background-color: ${o(e.gray[50],e.darkGray[800])};
        border: 1px solid ${o(e.gray[200],e.gray[800])};
        border-radius: 0.5rem;
        box-shadow: none;
      `,title:v`
        font-size: 1rem;
        font-weight: 600;
        color: ${o(e.gray[900],e.gray[100])};
        margin: 0 0 0.75rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${o(e.gray[200],e.gray[800])};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-align: left;
      `,icon:v`
        height: 18px;
        width: 18px;
        & > svg {
          height: 100%;
          width: 100%;
        }
        color: ${o(e.gray[700],e.gray[400])};
      `,description:v`
        color: ${o(e.gray[500],e.gray[400])};
        font-size: 0.8rem;
        margin: 0 0 1rem 0;
        line-height: 1.4;
        text-align: left;
      `},mainPanel:{panel:n=>v`
        padding: ${n?y.size[3]:0};
        background: ${o(e.gray[50],e.darkGray[700])};
        overflow-y: auto;
        height: 100%;
      `}}};function T(){const{theme:t}=De(),[e,i]=A(he(t()));return V(()=>{i(he(t()))}),e}var Ve=k('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),Re=k('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),qe=k('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>');function Oe(){return Ve()}function We(t){return(()=>{var e=Re(),i=e.firstChild;return p(()=>Se(i,"stroke",t.theme==="dark"?"#12B76A":"#027A48")),e})()}function Xe(){return qe()}var j=k("<span>"),ee=k("<span>&quot;<!>&quot;: "),Ue=k("<span>&quot;<!>&quot;"),Je=k("<span>null"),Ye=k("<span>undefined"),Ze=k("<div>"),Qe=k("<span>,"),et=k("<span><span>[]"),Ge=k("<span>..."),tt=k("<span><span>[</span><span>]"),Pe=k("<span>&quot;<!>&quot;: <span> items"),rt=k("<span><span>{}"),at=k("<span><span>{</span><span>}"),ot=k('<button title="Copy object to clipboard">'),nt=k('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>');function O(t){return m(te,{isRoot:!0,get value(){return t.value},get copyable(){return t.copyable},depth:0,get defaultExpansionDepth(){return t.defaultExpansionDepth??1},path:"",get collapsePaths(){return t.collapsePaths}})}function te(t){const e=T();return(()=>{var i=j();return f(i,(()=>{var a=P(()=>!!(t.keyName&&typeof t.value!="object"&&!Array.isArray(t.value)));return()=>a()&&(()=>{var s=ee(),l=s.firstChild,o=l.nextSibling;return o.nextSibling,f(s,()=>t.keyName,o),p(()=>c(s,e().tree.valueKey)),s})()})(),null),f(i,()=>typeof t.value=="string"?(()=>{var a=Ue(),s=a.firstChild,l=s.nextSibling;return l.nextSibling,f(a,()=>t.value,l),p(()=>c(a,e().tree.valueString)),a})():typeof t.value=="number"?(()=>{var a=j();return f(a,()=>t.value),p(()=>c(a,e().tree.valueNumber)),a})():typeof t.value=="boolean"?(()=>{var a=j();return f(a,()=>String(t.value)),p(()=>c(a,e().tree.valueBoolean)),a})():t.value===null?(()=>{var a=Je();return p(()=>c(a,e().tree.valueNull)),a})():t.value===void 0?(()=>{var a=Ye();return p(()=>c(a,e().tree.valueNull)),a})():typeof t.value=="function"?(()=>{var a=j();return f(a,()=>String(t.value)),p(()=>c(a,e().tree.valueFunction)),a})():Array.isArray(t.value)?m(it,{get defaultExpansionDepth(){return t.defaultExpansionDepth},get depth(){return t.depth},get copyable(){return t.copyable},get keyName(){return t.keyName},get value(){return t.value},get collapsePaths(){return t.collapsePaths},get path(){return t.path}}):typeof t.value=="object"?m(lt,{get defaultExpansionDepth(){return t.defaultExpansionDepth},get depth(){return t.depth},get copyable(){return t.copyable},get keyName(){return t.keyName},get value(){return t.value},get collapsePaths(){return t.collapsePaths},get path(){return t.path}}):j(),null),f(i,(()=>{var a=P(()=>!!t.copyable);return()=>a()&&(()=>{var s=Ze();return f(s,m(st,{get value(){return t.value}})),p(()=>c(s,E(e().tree.actions,"actions"))),s})()})(),null),f(i,(()=>{var a=P(()=>!!(t.isLastKey||t.isRoot));return()=>a()?"":Qe()})(),null),p(()=>c(i,e().tree.valueContainer(t.isRoot??!1))),i})()}const it=t=>{const e=T(),[i,a]=A(t.depth<=t.defaultExpansionDepth&&!t.collapsePaths?.includes(t.path));return t.value.length===0?(()=>{var s=et(),l=s.firstChild;return f(s,(()=>{var o=P(()=>!!t.keyName);return()=>o()&&(()=>{var d=ee(),n=d.firstChild,r=n.nextSibling;return r.nextSibling,f(d,()=>t.keyName,r),p(()=>c(d,E(e().tree.valueKey,e().tree.collapsible))),d})()})(),l),p(o=>{var d=e().tree.expanderContainer,n=e().tree.valueBraces;return d!==o.e&&c(s,o.e=d),n!==o.t&&c(l,o.t=n),o},{e:void 0,t:void 0}),s})():(()=>{var s=tt(),l=s.firstChild,o=l.nextSibling;return f(s,m(Be,{onClick:()=>a(!i()),get expanded(){return i()}}),l),f(s,(()=>{var d=P(()=>!!t.keyName);return()=>d()&&(()=>{var n=Pe(),r=n.firstChild,u=r.nextSibling,g=u.nextSibling,h=g.nextSibling,C=h.firstChild;return n.$$click=x=>{x.stopPropagation(),x.stopImmediatePropagation(),a(!i())},f(n,()=>t.keyName,u),f(h,()=>t.value.length,C),p(x=>{var F=E(e().tree.valueKey,e().tree.collapsible),b=e().tree.info;return F!==x.e&&c(n,x.e=F),b!==x.t&&c(h,x.t=b),x},{e:void 0,t:void 0}),n})()})(),l),f(s,m(q,{get when(){return i()},get children(){var d=j();return f(d,m(Y,{get each(){return t.value},children:(n,r)=>{const u=r()===t.value.length-1;return m(te,{get copyable(){return t.copyable},value:n,isLastKey:u,get defaultExpansionDepth(){return t.defaultExpansionDepth},get depth(){return t.depth+1},get collapsePaths(){return t.collapsePaths},get path(){return P(()=>!!t.path)()?`${t.path}[${r()}]`:`[${r()}]`}})}})),p(()=>c(d,e().tree.expandedLine(!!t.keyName))),d}}),o),f(s,m(q,{get when(){return!i()},get children(){var d=Ge();return d.$$click=n=>{n.stopPropagation(),n.stopImmediatePropagation(),a(!i())},p(()=>c(d,E(e().tree.valueKey,e().tree.collapsible))),d}}),o),p(d=>{var n=e().tree.expanderContainer,r=e().tree.valueBraces,u=e().tree.valueBraces;return n!==d.e&&c(s,d.e=n),r!==d.t&&c(l,d.t=r),u!==d.a&&c(o,d.a=u),d},{e:void 0,t:void 0,a:void 0}),s})()},lt=t=>{const e=T(),[i,a]=A(t.depth<=t.defaultExpansionDepth&&!t.collapsePaths?.includes(t.path)),s=Object.keys(t.value),l=s[s.length-1];return s.length===0?(()=>{var o=rt(),d=o.firstChild;return f(o,(()=>{var n=P(()=>!!t.keyName);return()=>n()&&(()=>{var r=ee(),u=r.firstChild,g=u.nextSibling;return g.nextSibling,f(r,()=>t.keyName,g),p(()=>c(r,E(e().tree.valueKey,e().tree.collapsible))),r})()})(),d),p(n=>{var r=e().tree.expanderContainer,u=e().tree.valueBraces;return r!==n.e&&c(o,n.e=r),u!==n.t&&c(d,n.t=u),n},{e:void 0,t:void 0}),o})():(()=>{var o=at(),d=o.firstChild,n=d.nextSibling;return f(o,(()=>{var r=P(()=>!!t.keyName);return()=>r()&&m(Be,{onClick:()=>a(!i()),get expanded(){return i()}})})(),d),f(o,(()=>{var r=P(()=>!!t.keyName);return()=>r()&&(()=>{var u=Pe(),g=u.firstChild,h=g.nextSibling,C=h.nextSibling,x=C.nextSibling,F=x.firstChild;return u.$$click=b=>{b.stopPropagation(),b.stopImmediatePropagation(),a(!i())},f(u,()=>t.keyName,h),f(x,()=>s.length,F),p(b=>{var w=E(e().tree.valueKey,e().tree.collapsible),z=e().tree.info;return w!==b.e&&c(u,b.e=w),z!==b.t&&c(x,b.t=z),b},{e:void 0,t:void 0}),u})()})(),d),f(o,m(q,{get when(){return i()},get children(){var r=j();return f(r,m(Y,{each:s,children:u=>m(te,{get value(){return t.value[u]},keyName:u,isLastKey:l===u,get copyable(){return t.copyable},get defaultExpansionDepth(){return t.defaultExpansionDepth},get depth(){return t.depth+1},get collapsePaths(){return t.collapsePaths},get path(){return`${t.path}${t.path?".":""}${u}`}})})),p(()=>c(r,e().tree.expandedLine(!!t.keyName))),r}}),n),f(o,m(q,{get when(){return!i()},get children(){var r=Ge();return r.$$click=u=>{u.stopPropagation(),u.stopImmediatePropagation(),a(!i())},p(()=>c(r,E(e().tree.valueKey,e().tree.collapsible))),r}}),n),p(r=>{var u=e().tree.expanderContainer,g=e().tree.valueBraces,h=e().tree.valueBraces;return u!==r.e&&c(o,r.e=u),g!==r.t&&c(d,r.t=g),h!==r.a&&c(n,r.a=h),r},{e:void 0,t:void 0,a:void 0}),o})()},st=t=>{const e=T(),[i,a]=A("NoCopy");return(()=>{var s=ot();return Q(s,"click",i()==="NoCopy"?()=>{navigator.clipboard.writeText(JSON.stringify(t.value,null,2)).then(()=>{a("SuccessCopy"),setTimeout(()=>{a("NoCopy")},1500)},l=>{console.error("Failed to copy: ",l),a("ErrorCopy"),setTimeout(()=>{a("NoCopy")},1500)})}:void 0,!0),f(s,m(Me,{get children(){return[m(Z,{get when(){return i()==="NoCopy"},get children(){return m(Oe,{})}}),m(Z,{get when(){return i()==="SuccessCopy"},get children(){return m(We,{theme:"dark"})}}),m(Z,{get when(){return i()==="ErrorCopy"},get children(){return m(Xe,{})}})]}})),p(l=>{var o=e().tree.actionButton,d=`${i()==="NoCopy"?"Copy object to clipboard":i()==="SuccessCopy"?"Object copied to clipboard":"Error copying object to clipboard"}`;return o!==l.e&&c(s,l.e=o),d!==l.t&&Se(s,"aria-label",l.t=d),l},{e:void 0,t:void 0}),s})()},Be=t=>{const e=T();return(()=>{var i=nt();return Q(i,"click",t.onClick,!0),p(()=>c(i,E(e().tree.expander,v`
          transform: rotate(${t.expanded?90:0}deg);
        `,t.expanded&&v`
            & svg {
              top: -1px;
            }
          `))),i})()};W(["click"]);var dt=k("<div>");const ct=({className:t,children:e,class:i,withPadding:a})=>{const s=T();return(()=>{var l=dt();return f(l,e),p(()=>c(l,E(s().mainPanel.panel(!!a),t,i))),l})()};var ut=k("<header>"),gt=k("<div><button><span>TANSTACK</span><span>");function vt({children:t,class:e,...i}){const a=T();return(()=>{var s=ut();return He(s,Ne({get class(){return E(a().header.row,"tsqd-header",e)}},i),!1),f(s,t),s})()}function ft({children:t,flavor:e,onClick:i}){const a=T();return(()=>{var s=gt(),l=s.firstChild,o=l.firstChild,d=o.nextSibling;return Q(l,"click",i,!0),f(d,t),p(n=>{var r=a().header.logoAndToggleContainer,u=E(a().header.logo),g=E(a().header.tanstackLogo),h=E(a().header.flavorLogo(e.light,e.dark));return r!==n.e&&c(s,n.e=r),u!==n.t&&c(l,n.t=u),g!==n.a&&c(o,n.a=g),h!==n.o&&c(d,n.o=h),n},{e:void 0,t:void 0,a:void 0,o:void 0}),s})()}W(["click"]);const $e={colors:{black:"#000000",white:"#ffffff",darkGray:{400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318"},gray:{100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",800:"#1d2939",900:"#101828"},blue:{100:"#D1E9FF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",900:"#194185"},green:{400:"#32D583"},red:{400:"#f87171"},yellow:{400:"#FDB022"},purple:{400:"#9B8AFB"},pink:{400:"#ec4899"}},alpha:{80:"cc",30:"4d",20:"33"},font:{size:{xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)",lg:"calc(var(--tsrd-font-size) * 1.125)"},weight:{semibold:"600",bold:"700"},fontFamily:{mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",lg:"calc(var(--tsrd-font-size) * 0.5)"}},size:{1:"calc(var(--tsrd-font-size) * 0.25)",2:"calc(var(--tsrd-font-size) * 0.5)",3:"calc(var(--tsrd-font-size) * 0.75)",4:"calc(var(--tsrd-font-size) * 1)"},shadow:{xs:(t="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(t="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${t}, 0 1px 2px -1px ${t}`,md:(t="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${t}, 0 2px 4px -2px ${t}`,lg:(t="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${t}, 0 4px 6px -4px ${t}`,xl:(t="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${t}, 0 8px 10px -6px ${t}`,"2xl":(t="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${t}`,inner:(t="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${t}`,none:()=>"none"}},pe=t=>{const{colors:e,font:i,size:a,alpha:s,border:l}=$e,{fontFamily:o,size:d}=i,n=ze,r=(u,g)=>t==="light"?u:g;return{mainContainer:n`
      display: flex;
      flex: 1;
      min-height: 80%;
      overflow: hidden;
      padding: ${a[2]};
    `,dragHandle:n`
      width: 8px;
      background: ${r(e.gray[300],e.darkGray[600])};
      cursor: col-resize;
      position: relative;
      transition: all 0.2s ease;
      user-select: none;
      pointer-events: all;
      margin: 0 ${a[1]};
      border-radius: 2px;

      &:hover {
        background: ${r(e.blue[600],e.blue[500])};
        margin: 0 ${a[1]};
      }

      &.dragging {
        background: ${r(e.blue[700],e.blue[600])};
        margin: 0 ${a[1]};
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 2px;
        height: 20px;
        background: ${r(e.gray[400],e.darkGray[400])};
        border-radius: 1px;
        pointer-events: none;
      }

      &:hover::after,
      &.dragging::after {
        background: ${r(e.blue[500],e.blue[300])};
      }
    `,leftPanel:n`
      background: ${r(e.gray[100],e.darkGray[800])};
      border-radius: ${l.radius.lg};
      border: 1px solid ${r(e.gray[200],e.darkGray[700])};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-height: 0;
      flex-shrink: 0;
    `,rightPanel:n`
      background: ${r(e.gray[100],e.darkGray[800])};
      border-radius: ${l.radius.lg};
      border: 1px solid ${r(e.gray[200],e.darkGray[700])};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-height: 0;
      flex: 1;
    `,panelHeader:n`
      font-size: ${d.md};
      font-weight: ${i.weight.bold};
      color: ${r(e.blue[700],e.blue[400])};
      padding: ${a[2]};
      border-bottom: 1px solid ${r(e.gray[200],e.darkGray[700])};
      background: ${r(e.gray[100],e.darkGray[800])};
      flex-shrink: 0;
    `,utilList:n`
      flex: 1;
      overflow-y: auto;
      padding: ${a[1]};
      min-height: 0;
    `,utilGroup:n`
      margin-bottom: ${a[2]};
    `,utilGroupHeader:n`
      font-size: ${d.xs};
      font-weight: ${i.weight.semibold};
      color: ${r(e.gray[600],e.gray[400])};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: ${a[1]};
      padding: ${a[1]} ${a[2]};
      background: ${r(e.gray[200],e.darkGray[700])};
      border-radius: ${l.radius.md};
    `,utilRow:n`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${a[2]};
      margin-bottom: ${a[1]};
      background: ${r(e.gray[200],e.darkGray[700])};
      border-radius: ${l.radius.md};
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid transparent;

      &:hover {
        background: ${r(e.gray[300],e.darkGray[600])};
        border-color: ${r(e.gray[400],e.darkGray[500])};
      }
    `,utilRowSelected:n`
      background: ${r(e.blue[100],e.blue[900]+s[20])};
      border-color: ${r(e.blue[600],e.blue[500])};
      box-shadow: 0 0 0 1px
        ${r(e.blue[600]+s[30],e.blue[500]+s[30])};
    `,utilKey:n`
      font-family: ${o.mono};
      font-size: ${d.xs};
      color: ${r(e.gray[900],e.gray[100])};
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,utilStatus:n`
      font-size: ${d.xs};
      color: ${r(e.gray[600],e.gray[400])};
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: ${a[1]} ${a[1]};
      background: ${r(e.gray[300],e.darkGray[600])};
      border-radius: ${l.radius.sm};
      margin-left: ${a[1]};
    `,stateDetails:n`
      flex: 1;
      overflow-y: auto;
      padding: ${a[2]};
      min-height: 0;
    `,stateHeader:n`
      margin-bottom: ${a[2]};
      padding-bottom: ${a[2]};
      border-bottom: 1px solid ${r(e.gray[200],e.darkGray[700])};
    `,stateTitle:n`
      font-size: ${d.md};
      font-weight: ${i.weight.bold};
      color: ${r(e.blue[700],e.blue[400])};
      margin-bottom: ${a[1]};
    `,stateKey:n`
      font-family: ${o.mono};
      font-size: ${d.xs};
      color: ${r(e.gray[600],e.gray[400])};
      word-break: break-all;
    `,stateContent:n`
      background: ${r(e.gray[100],e.darkGray[700])};
      border-radius: ${l.radius.md};
      padding: ${a[2]};
      border: 1px solid ${r(e.gray[300],e.darkGray[600])};
    `,detailsGrid:n`
      display: grid;
      grid-template-columns: 1fr;
      gap: ${a[2]};
      align-items: start;
    `,detailSection:n`
      background: ${r(e.white,e.darkGray[700])};
      border: 1px solid ${r(e.gray[300],e.darkGray[600])};
      border-radius: ${l.radius.md};
      padding: ${a[2]};
    `,detailSectionHeader:n`
      font-size: ${d.sm};
      font-weight: ${i.weight.bold};
      color: ${r(e.gray[800],e.gray[200])};
      margin-bottom: ${a[1]};
      text-transform: uppercase;
      letter-spacing: 0.04em;
    `,actionsRow:n`
      display: flex;
      flex-wrap: wrap;
      gap: ${a[2]};
    `,actionButton:n`
      display: inline-flex;
      align-items: center;
      gap: ${a[1]};
      padding: ${a[1]} ${a[2]};
      border-radius: ${l.radius.md};
      border: 1px solid ${r(e.gray[300],e.darkGray[500])};
      background: ${r(e.gray[200],e.darkGray[600])};
      color: ${r(e.gray[900],e.gray[100])};
      font-size: ${d.xs};
      cursor: pointer;
      user-select: none;
      transition:
        background 0.15s,
        border-color 0.15s;
      &:hover {
        background: ${r(e.gray[300],e.darkGray[500])};
        border-color: ${r(e.gray[400],e.darkGray[400])};
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        &:hover {
          background: ${r(e.gray[200],e.darkGray[600])};
          border-color: ${r(e.gray[300],e.darkGray[500])};
        }
      }
    `,actionDotBlue:n`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.blue[400]};
    `,actionDotGreen:n`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.green[400]};
    `,actionDotRed:n`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.red[400]};
    `,actionDotYellow:n`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.yellow[400]};
    `,actionDotOrange:n`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.pink[400]};
    `,actionDotPurple:n`
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background: ${e.purple[400]};
    `,infoGrid:n`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: ${a[1]};
      row-gap: ${a[1]};
      align-items: center;
    `,infoLabel:n`
      color: ${r(e.gray[600],e.gray[400])};
      font-size: ${d.xs};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    `,infoValueMono:n`
      font-family: ${o.mono};
      font-size: ${d.xs};
      color: ${r(e.gray[900],e.gray[100])};
      word-break: break-all;
    `,noSelection:n`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${r(e.gray[500],e.gray[500])};
      font-style: italic;
      text-align: center;
      padding: ${a[4]};
    `,sectionContainer:n`
      display: flex;
      flex-wrap: wrap;
      gap: ${a[4]};
    `,section:n`
      background: ${r(e.gray[100],e.darkGray[800])};
      border-radius: ${l.radius.lg};
      box-shadow: ${$e.shadow.md(r(e.gray[400]+s[80],e.black+s[80]))};
      padding: ${a[4]};
      margin-bottom: ${a[4]};
      border: 1px solid ${r(e.gray[200],e.darkGray[700])};
      min-width: 0;
      max-width: 33%;
      max-height: fit-content;
    `,sectionHeader:n`
      font-size: ${d.lg};
      font-weight: ${i.weight.bold};
      margin-bottom: ${a[2]};
      color: ${r(e.blue[600],e.blue[400])};
      letter-spacing: 0.01em;
      display: flex;
      align-items: center;
      gap: ${a[2]};
    `,sectionEmpty:n`
      color: ${r(e.gray[500],e.gray[500])};
      font-size: ${d.sm};
      font-style: italic;
      margin: ${a[2]} 0;
    `,instanceList:n`
      display: flex;
      flex-direction: column;
      gap: ${a[2]};
      background: ${r(e.gray[200],e.darkGray[700])};
      border: 1px solid ${r(e.gray[300],e.darkGray[600])};
    `,instanceCard:n`
      background: ${r(e.gray[200],e.darkGray[700])};
      border-radius: ${l.radius.md};
      padding: ${a[3]};
      border: 1px solid ${r(e.gray[300],e.darkGray[600])};
      font-size: ${d.sm};
      color: ${r(e.gray[900],e.gray[100])};
      font-family: ${o.mono};
      overflow-x: auto;
      transition:
        box-shadow 0.3s,
        background 0.3s;
    `}};function X(){const{theme:t}=De(),[e,i]=A(pe(t()));return V(()=>{i(pe(t()))}),e}var xe=k("<div>"),yt=k("<div><div>");function mt(t){const e=X(),{store:i}=Ee();return(()=>{var a=xe();return f(a,(()=>{var s=P(()=>i().length>0);return()=>s()&&(()=>{var l=xe();return f(l,m(Y,{get each(){return i()},children:o=>(()=>{var d=yt(),n=d.firstChild;return d.$$click=()=>t.setSelectedKey(o.id),f(n,()=>o.id),p(r=>{var u=E(e().utilRow,t.selectedKey()===o.id&&e().utilRowSelected),g=e().utilKey;return u!==r.e&&c(d,r.e=u),g!==r.t&&c(n,r.t=g),r},{e:void 0,t:void 0}),d})()})),p(()=>c(l,e().utilGroup)),l})()})()),p(()=>c(a,e().utilList)),a})()}W(["click"]);var bt=k("<div><button><span></span>Flush</button><button><span></span>Reset</button><button><span></span>Submit (-f)");function ht(t){const e=X();return(()=>{var i=bt(),a=i.firstChild,s=a.firstChild,l=a.nextSibling,o=l.firstChild,d=l.nextSibling,n=d.firstChild;return a.$$mousedown=()=>{I.emit("request-form-state",{id:t.selectedInstance()?.id})},l.$$mousedown=()=>{I.emit("request-form-reset",{id:t.selectedInstance()?.id})},d.$$mousedown=()=>{I.emit("request-form-force-submit",{id:t.selectedInstance()?.id})},p(r=>{var u=e().actionsRow,g=e().actionButton,h=e().actionDotGreen,C=e().actionButton,x=e().actionDotRed,F=e().actionButton,b=e().actionDotYellow;return u!==r.e&&c(i,r.e=u),g!==r.t&&c(a,r.t=g),h!==r.a&&c(s,r.a=h),C!==r.o&&c(l,r.o=C),x!==r.i&&c(o,r.i=x),F!==r.n&&c(d,r.n=F),b!==r.s&&c(n,r.s=b),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),i})()}W(["mousedown"]);var J={exports:{}},$t=J.exports,ke;function pt(){return ke||(ke=1,(function(t,e){(function(i,a){t.exports=a()})($t,(function(){return function(i,a,s){i=i||{};var l=a.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function d(r,u,g,h){return l.fromToBase(r,u,g,h)}s.en.relativeTime=o,l.fromToBase=function(r,u,g,h,C){for(var x,F,b,w=g.$locale().relativeTime||o,z=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],G=z.length,_=0;_<G;_+=1){var S=z[_];S.d&&(x=h?s(r).diff(g,S.d,!0):g.diff(r,S.d,!0));var D=(i.rounding||Math.round)(Math.abs(x));if(b=x>0,D<=S.r||!S.r){D<=1&&_>0&&(S=z[_-1]);var B=w[S.l];C&&(D=C(""+D)),F=typeof B=="string"?B.replace("%d",D):B(D,u,S.l,b);break}}if(u)return F;var M=b?w.future:w.past;return typeof M=="function"?M(F):M.replace("%s",F)},l.to=function(r,u){return d(r,u,this,!0)},l.from=function(r,u){return d(r,u,this)};var n=function(r){return r.$u?s.utc():s()};l.toNow=function(r){return this.to(n(this),r)},l.fromNow=function(r){return this.from(n(this),r)}}}))})(J)),J.exports}var xt=pt();const kt=Ae(xt);var wt=k("<div><div>Form state</div><div><div><div>Key</div><div></div><div>Last Updated</div><div> (<!>)");N.extend(kt);function Ct(t){const e=X(),[i,a]=A(N().unix());Fe(()=>{const d=setInterval(()=>a(N().unix()),1e3);R(()=>clearInterval(d))});const s=t.selectedInstance,l=H(()=>s()?.date.unix()??N().unix()),o=H(()=>{const d=Math.max(i()-l(),0);return d<60?`${d} second${d!==1?"s":""} ago`:N.unix(l()).fromNow()});return s()?(()=>{var d=wt(),n=d.firstChild,r=n.nextSibling,u=r.firstChild,g=u.firstChild,h=g.nextSibling,C=h.nextSibling,x=C.nextSibling,F=x.firstChild,b=F.nextSibling;return b.nextSibling,r.style.setProperty("display","flex"),r.style.setProperty("align-items","center"),r.style.setProperty("gap","16px"),f(h,()=>s().id),f(x,()=>new Date(l()*1e3).toLocaleTimeString(),F),f(x,o,b),p(w=>{var z=e().stateHeader,G=e().stateTitle,_=e().infoGrid,S=e().infoLabel,D=e().infoValueMono,B=e().infoLabel,M=e().infoValueMono;return z!==w.e&&c(d,w.e=z),G!==w.t&&c(n,w.t=G),_!==w.a&&c(u,w.a=_),S!==w.o&&c(g,w.o=S),D!==w.i&&c(h,w.i=D),B!==w.n&&c(C,w.n=B),M!==w.s&&c(x,w.s=M),w},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),d})():null}var Ft=k("<div><div><div>Actions</div></div><div><div>Individual Fields</div><div></div></div><div><div>Form values</div><div></div></div><div><div>Form status</div><div></div></div><div><div>Form options</div><div></div></div><div><div>Submission history</div><div>"),St=k("<div>"),zt=k("<div><div>");function _t({selectedKey:t}){const e=X(),{store:i}=Ee(),a=H(()=>i().findIndex(n=>n.id===t())),s=H(()=>a()>-1?i()[a()]:null),l=H(()=>s()?.state),o=H(()=>({canSubmit:l()?.canSubmit,isFormValid:l()?.isFormValid,isFormValidating:l()?.isFormValidating,isSubmitted:l()?.isSubmitted,isSubmitting:l()?.isSubmitting,isSubmitSuccessful:l()?.isSubmitSuccessful,submissionAttempts:l()?.submissionAttempts,errors:l()?.errors,errorMap:l()?.errorMap})),d=H(()=>{const n={},r=l()?.values||{},u=l()?.fieldMeta||{};return Object.keys(r).forEach(g=>{n[g]={value:r[g],meta:u[g]}}),n});return(()=>{var n=St();return f(n,m(q,{get when(){return s()},get children(){return[m(Ct,{selectedInstance:s}),(()=>{var r=Ft(),u=r.firstChild,g=u.firstChild,h=u.nextSibling,C=h.firstChild,x=C.nextSibling,F=h.nextSibling,b=F.firstChild,w=b.nextSibling,z=F.nextSibling,G=z.firstChild,_=G.nextSibling,S=z.nextSibling,D=S.firstChild,B=D.nextSibling,M=S.nextSibling,re=M.firstChild,ae=re.nextSibling;return f(u,m(ht,{selectedInstance:s}),null),x.style.setProperty("display","flex"),x.style.setProperty("gap","8px"),f(x,m(Y,{get each(){return Object.entries(d())},children:([$,U])=>(()=>{var L=zt(),K=L.firstChild;return L.style.setProperty("margin-bottom","16px"),K.style.setProperty("font-weight","bold"),K.style.setProperty("margin-bottom","4px"),f(K,$),f(L,m(O,{copyable:!0,value:U}),null),p(()=>c(L,e().stateContent)),L})()})),f(w,m(O,{copyable:!0,get value(){return i()[a()].state.values}})),f(_,m(O,{copyable:!0,get value(){return o()}})),f(B,m(O,{copyable:!0,get value(){return i()[a()]?.options},collapsePaths:["validators"]})),f(ae,m(O,{copyable:!0,get value(){return i()[a()]?.history}})),p($=>{var U=e().detailsGrid,L=e().detailSection,K=e().detailSectionHeader,oe=e().detailSection,ne=e().detailSectionHeader,ie=e().detailSection,le=e().detailSectionHeader,se=e().stateContent,de=e().detailSection,ce=e().detailSectionHeader,ue=e().stateContent,ge=e().detailSection,ve=e().detailSectionHeader,fe=e().stateContent,ye=e().detailSection,me=e().detailSectionHeader,be=e().stateContent;return U!==$.e&&c(r,$.e=U),L!==$.t&&c(u,$.t=L),K!==$.a&&c(g,$.a=K),oe!==$.o&&c(h,$.o=oe),ne!==$.i&&c(C,$.i=ne),ie!==$.n&&c(F,$.n=ie),le!==$.s&&c(b,$.s=le),se!==$.h&&c(w,$.h=se),de!==$.r&&c(z,$.r=de),ce!==$.d&&c(G,$.d=ce),ue!==$.l&&c(_,$.l=ue),ge!==$.u&&c(S,$.u=ge),ve!==$.c&&c(D,$.c=ve),fe!==$.w&&c(B,$.w=fe),ye!==$.m&&c(M,$.m=ye),me!==$.f&&c(re,$.f=me),be!==$.y&&c(ae,$.y=be),$},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0}),r})()]}})),p(()=>c(n,e().stateDetails)),n})()}var Et=k("<div>Details"),Dt=k("<div><div></div><div></div><div>");function Gt(){const t=X(),[e,i]=A(300),[a,s]=A(!1),[l,o]=A(null);let d=0,n=0;const r=h=>{h.preventDefault(),h.stopPropagation(),s(!0),document.body.style.cursor="col-resize",document.body.style.userSelect="none",d=h.clientX,n=e()},u=h=>{if(!a())return;h.preventDefault();const C=h.clientX-d,x=Math.max(150,Math.min(800,n+C));i(x)},g=()=>{s(!1),document.body.style.cursor="",document.body.style.userSelect=""};return Fe(()=>{document.addEventListener("mousemove",u),document.addEventListener("mouseup",g)}),R(()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",g)}),m(ct,{get children(){return[m(vt,{get children(){return m(ft,{flavor:{light:"#eeaf00",dark:"#eeaf00"},onClick:()=>{window.open("https://tanstack.com/form/latest/docs/overview","_blank")},children:"TanStack Form"})}}),(()=>{var h=Dt(),C=h.firstChild,x=C.nextSibling,F=x.nextSibling;return C.style.setProperty("min-width","150px"),C.style.setProperty("max-width","800px"),f(C,m(mt,{selectedKey:l,setSelectedKey:o})),x.$$mousedown=r,F.style.setProperty("flex","1"),f(F,m(q,{get when(){return l()!=null},get children(){return[(()=>{var b=Et();return p(()=>c(b,t().panelHeader)),b})(),m(_t,{selectedKey:l})]}})),p(b=>{var w=t().mainContainer,z=t().leftPanel,G=`${e()}px`,_=`${t().dragHandle} ${a()?"dragging":""}`,S=t().rightPanel;return w!==b.e&&c(h,b.e=w),z!==b.t&&c(C,b.t=z),G!==b.a&&((b.a=G)!=null?C.style.setProperty("width",G):C.style.removeProperty("width")),_!==b.o&&c(x,b.o=_),S!==b.i&&c(F,b.i=S),b},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),h})()]}})}W(["mousedown"]);function Tt(){return m(je,{get children(){return m(Gt,{})}})}export{Tt as default};
