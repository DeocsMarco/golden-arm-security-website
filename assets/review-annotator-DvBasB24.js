var e=`golden-arm.review.focus-note`,t=1e3,n=2e3,r=`[data-review-id],[data-ai-tour],a,button,input,select,textarea,[role="button"],img,figure,article,section,form,nav,header,footer,h1,h2,h3,h4,p,li,.proof-card,.home-environment-card,.industry-card,.service-card,.content-card,.scope-card,.credential-card,.faq-item`.split(`,`).join(`,`),i=[`Visual`,`Image`,`Copy`,`Layout`,`Spacing`,`Motion`,`Responsive`,`Accessibility`,`Other`],a=[`P0`,`P1`,`P2`,`P3`],o=[`Open`,`Resolved`],s={Visual:`Overall design`,Image:`Image or photo`,Copy:`Text or wording`,Layout:`Page layout`,Spacing:`Spacing`,Motion:`Animation`,Responsive:`Mobile or tablet`,Accessibility:`Accessibility`,Other:`Other`},c={P0:`Must change`,P1:`Important`,P2:`Suggestion`,P3:`Optional`},l=e=>window.CSS?.escape?window.CSS.escape(e):String(e).replace(/[^a-zA-Z0-9_-]/g,e=>`\\${e.codePointAt(0).toString(16)} `),u=(e,t,n)=>Math.min(n,Math.max(t,e)),d=e=>Math.round(Number(e)*100)/100,f=()=>new Date().toISOString(),p=(e=window.location.pathname)=>{let t=e.replace(/\/index\.html$/i,`/`);return t.startsWith(`/`)||(t=`/${t}`),!t.includes(`.`)&&!t.endsWith(`/`)&&(t+=`/`),t||`/`},ee=e=>{try{return window.localStorage.getItem(e)}catch{return null}},m=(e,t)=>{try{window.localStorage.setItem(e,t)}catch{}},te=e=>{try{window.localStorage.removeItem(e)}catch{}},h=e=>e instanceof Element?e.matches(`input, select, textarea`)?(e.id?document.querySelector(`label[for="${l(e.id)}"]`):null)?.textContent||e.getAttribute(`aria-label`)||e.getAttribute(`placeholder`)||`${e.tagName.toLowerCase()} field`:e instanceof HTMLImageElement?e.alt||`Image`:e.getAttribute(`aria-label`)||e.getAttribute(`title`)||e.querySelector?.(`h1, h2, h3, h4`)?.textContent||e.textContent||e.tagName.toLowerCase():``,g=e=>h(e).replace(/\s+/g,` `).trim().slice(0,140)||e.tagName.toLowerCase(),_=e=>{try{return document.querySelectorAll(e).length===1}catch{return!1}},v=e=>{if(!(e instanceof Element))return`body`;for(let t of[`data-review-id`,`data-ai-tour`]){let n=e.getAttribute(t);if(n){let e=`[${t}="${l(n)}"]`;if(_(e))return e}}if(e.id){let t=`#${l(e.id)}`;if(_(t))return t}let t=[...e.classList].filter(e=>!e.startsWith(`is-`)&&!e.startsWith(`has-`)&&!e.startsWith(`reveal-`)).slice(0,2);if(t.length){let n=`${e.tagName.toLowerCase()}${t.map(e=>`.${l(e)}`).join(``)}`;if(_(n))return n}let n=[],r=e;for(;r&&r!==document.body&&n.length<6;){let e=r.tagName.toLowerCase();if(r.id){n.unshift(`#${l(r.id)}`);break}let t=[...r.classList].filter(e=>!e.startsWith(`is-`)&&!e.startsWith(`has-`)&&!e.startsWith(`reveal-`)).slice(0,1);t.length&&(e+=`.${l(t[0])}`);let i=r.parentElement?[...r.parentElement.children].filter(e=>e.tagName===r.tagName):[];i.length>1&&(e+=`:nth-of-type(${i.indexOf(r)+1})`),n.unshift(e);let a=n.join(` > `);if(_(a))return a;r=r.parentElement}return n.join(` > `)||`body`},ne=e=>{let t=e.getBoundingClientRect();return{top:d(t.top),right:d(t.right),bottom:d(t.bottom),left:d(t.left),width:d(t.width),height:d(t.height)}},y=e=>{try{return document.querySelector(e)}catch{return null}},b=e=>!e||typeof e!=`object`||typeof e.comment!=`string`||typeof e.selector!=`string`?null:{id:typeof e.id==`string`&&e.id?e.id:crypto.randomUUID(),route:p(typeof e.route==`string`?e.route:`/`),hash:typeof e.hash==`string`?e.hash.slice(0,180):``,selector:e.selector.slice(0,500),tag:typeof e.tag==`string`?e.tag.slice(0,40):`element`,label:typeof e.label==`string`?e.label.slice(0,140):`Element`,comment:e.comment.trim().slice(0,n),category:i.includes(e.category)?e.category:`Visual`,priority:a.includes(e.priority)?e.priority:`P1`,status:o.includes(e.status)?e.status:`Open`,viewport:{width:Number(e.viewport?.width)||0,height:Number(e.viewport?.height)||0},scroll:{x:Number(e.scroll?.x)||0,y:Number(e.scroll?.y)||0},rect:{top:Number(e.rect?.top)||0,right:Number(e.rect?.right)||0,bottom:Number(e.rect?.bottom)||0,left:Number(e.rect?.left)||0,width:Number(e.rect?.width)||0,height:Number(e.rect?.height)||0},anchor:{xRatio:u(Number(e.anchor?.xRatio)||.5,0,1),yRatio:u(Number(e.anchor?.yRatio)||.5,0,1)},createdAt:typeof e.createdAt==`string`?e.createdAt:f(),updatedAt:typeof e.updatedAt==`string`?e.updatedAt:f()},re=()=>{try{let e=JSON.parse(ee(`golden-arm.review.annotations.v1`)||`[]`);return Array.isArray(e)?e.map(b).filter(Boolean).slice(0,t):[]}catch{return[]}},ie=`
  :host {
    all: initial;
    color-scheme: dark;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --review-gold: #d7ad61;
    --review-ink: #111214;
    --review-panel: #191b1f;
    --review-panel-2: #23262b;
    --review-line: #484d55;
    --review-copy: #f6f4ef;
    --review-muted: #b7bac0;
  }
  *, *::before, *::after { box-sizing: border-box; }
  button, input, select, textarea { font: inherit; }
  button { color: inherit; }
  [hidden] { display: none !important; }
  .review-frame {
    position: fixed;
    pointer-events: none;
    border: 2px solid var(--review-gold);
    box-shadow: 0 0 0 1px rgba(17,18,20,.92), 0 8px 24px rgba(0,0,0,.18);
    z-index: 1;
  }
  .review-frame--hover { border-style: dashed; opacity: .8; }
  .review-frame--selected { border-width: 3px; }
  .review-pin {
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
    border-radius: 999px;
    background: var(--review-gold);
    color: #111;
    box-shadow: 0 4px 18px rgba(0,0,0,.34);
    font-weight: 800;
    font-size: 12px;
    line-height: 1;
    cursor: pointer;
    pointer-events: auto;
    z-index: 2;
  }
  .review-pin[data-status="Resolved"] { background: #596069; color: #fff; opacity: .78; }
  .review-dock {
    position: fixed;
    left: 18px;
    bottom: calc(18px + env(safe-area-inset-bottom));
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 7px;
    border: 1px solid var(--review-line);
    border-radius: 12px;
    background: rgba(17,18,20,.96);
    box-shadow: 0 12px 36px rgba(0,0,0,.35);
    pointer-events: auto;
    z-index: 5;
  }
  .review-brand {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 7px;
    color: var(--review-muted);
    font-size: 11px;
    font-weight: 750;
    letter-spacing: .08em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .review-brand::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--review-gold); }
  .review-button {
    min-height: 38px;
    padding: 8px 11px;
    border: 1px solid var(--review-line);
    border-radius: 8px;
    background: var(--review-panel-2);
    color: var(--review-copy);
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }
  .review-button:hover { border-color: #707680; background: #2b2f35; }
  .review-button:focus-visible, .review-field:focus-visible, .review-link-button:focus-visible {
    outline: 3px solid rgba(215,173,97,.55);
    outline-offset: 2px;
  }
  .review-button[aria-pressed="true"], .review-button--primary { background: var(--review-gold); border-color: var(--review-gold); color: #111; }
  .review-button--danger { color: #ffb0a7; }
  .review-count { display: inline-grid; place-items: center; min-width: 20px; height: 20px; margin-left: 4px; padding: 0 5px; border-radius: 999px; background: #0c0d0f; color: var(--review-copy); }
  .review-panel {
    position: fixed;
    width: min(430px, calc(100vw - 36px));
    max-height: calc(100vh - 40px);
    overflow: auto;
    border: 1px solid var(--review-line);
    border-radius: 15px;
    background: var(--review-panel);
    color: var(--review-copy);
    box-shadow: 0 24px 64px rgba(0,0,0,.48);
    pointer-events: auto;
    z-index: 6;
  }
  .review-panel--draft { right: 18px; bottom: calc(18px + env(safe-area-inset-bottom)); }
  .review-panel--notes { left: 18px; bottom: calc(78px + env(safe-area-inset-bottom)); max-height: min(720px, calc(100vh - 110px)); }
  .review-panel__header { position: sticky; top: 0; z-index: 1; display: flex; justify-content: space-between; gap: 14px; padding: 16px 18px; border-bottom: 1px solid var(--review-line); background: var(--review-panel); }
  .review-panel__header h2 { margin: 0; font-size: 16px; line-height: 1.25; }
  .review-panel__header p { margin: 4px 0 0; color: var(--review-muted); font-size: 11px; line-height: 1.45; }
  .review-icon-button { flex: 0 0 auto; width: 34px; height: 34px; padding: 0; border: 1px solid var(--review-line); border-radius: 8px; background: var(--review-panel-2); color: var(--review-copy); cursor: pointer; }
  .review-form, .review-panel__body { padding: 17px 18px 18px; }
  .review-target { margin-bottom: 15px; padding: 11px 12px; border-left: 3px solid var(--review-gold); background: #111317; }
  .review-target strong { display: block; margin-bottom: 5px; font-size: 13px; line-height: 1.35; }
  .review-target code { display: block; overflow-wrap: anywhere; color: var(--review-muted); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px; line-height: 1.45; }
  .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .review-label { display: grid; gap: 6px; margin-bottom: 12px; color: var(--review-muted); font-size: 11px; font-weight: 700; letter-spacing: .03em; }
  .review-field { width: 100%; min-height: 40px; border: 1px solid var(--review-line); border-radius: 8px; background: #101215; color: var(--review-copy); padding: 9px 10px; }
  textarea.review-field { min-height: 126px; resize: vertical; line-height: 1.5; }
  .review-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
  .review-help { margin: 12px 0 0; color: var(--review-muted); font-size: 10px; line-height: 1.5; }
  .review-toolbar { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
  .review-toolbar .review-field { width: auto; flex: 1 1 130px; }
  .review-list { display: grid; gap: 10px; }
  .review-note { padding: 13px; border: 1px solid var(--review-line); border-radius: 11px; background: #121417; }
  .review-note[data-status="Resolved"] { opacity: .7; }
  .review-note__meta { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin-bottom: 8px; color: var(--review-muted); font-size: 10px; font-weight: 750; text-transform: uppercase; letter-spacing: .04em; }
  .review-note__number { display: inline-grid; place-items: center; width: 23px; height: 23px; border-radius: 50%; background: var(--review-gold); color: #111; }
  .review-note p { margin: 0 0 8px; color: var(--review-copy); font-size: 12px; line-height: 1.5; white-space: pre-wrap; overflow-wrap: anywhere; }
  .review-note code { display: block; margin-bottom: 8px; color: var(--review-muted); font-size: 9px; line-height: 1.4; overflow-wrap: anywhere; }
  .review-link-button { padding: 0; border: 0; background: transparent; color: var(--review-gold); font: inherit; text-align: left; cursor: pointer; }
  :host([data-review-mode="client"]) .review-target code,
  :host([data-review-mode="client"]) .review-note code { display: none; }
  :host([data-review-mode="client"]) .review-button--download { background: var(--review-gold); border-color: var(--review-gold); color: #111; }
  .review-empty { padding: 20px; border: 1px dashed var(--review-line); border-radius: 10px; color: var(--review-muted); font-size: 12px; line-height: 1.5; text-align: center; }
  .review-live { position: fixed; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; }
  @media (max-width: 720px) {
    .review-dock { left: 10px; right: 10px; bottom: calc(76px + env(safe-area-inset-bottom)); overflow-x: auto; }
    .review-brand { display: none; }
    .review-button { flex: 0 0 auto; min-height: 44px; }
    .review-icon-button { width: 44px; height: 44px; }
    .review-field { min-height: 44px; }
    .review-panel { left: 10px; right: 10px; width: auto; }
    .review-panel--draft, .review-panel--notes {
      bottom: calc(136px + env(safe-area-inset-bottom));
      max-height: calc(100vh - 154px);
      max-height: calc(100dvh - 154px);
    }
    .review-grid { grid-template-columns: 1fr; gap: 0; }
  }
  @media (prefers-reduced-motion: reduce) { .review-frame { transition: none; } }
`,ae=({mode:l=`internal`}={})=>{if(document.querySelector(`#ga-review-annotator`))return()=>{};let h=l===`client`,_=i.map(e=>`<option value="${e}">${h?s[e]:e}</option>`).join(``),ae=a.map(e=>`<option value="${e}">${h?c[e]:e}</option>`).join(``),oe=o.map(e=>`<option value="${e}">${h&&e===`Resolved`?`Addressed`:e}</option>`).join(``),se=e=>h&&c[e]||e,x=document.createElement(`div`);x.id=`ga-review-annotator`,x.setAttribute(`data-review-ui`,`true`),x.setAttribute(`data-review-mode`,h?`client`:`internal`),x.style.cssText=`position:fixed;inset:0;z-index:2147483000;pointer-events:none;contain:layout style;`;let S=x.attachShadow({mode:`open`});S.innerHTML=`
    <style>${ie}</style>
    <div class="review-frame review-frame--hover" data-role="hover-frame" aria-hidden="true" hidden></div>
    <div class="review-frame review-frame--selected" data-role="selected-frame" aria-hidden="true" hidden></div>
    <div data-role="pins" aria-label="Review annotation pins"></div>
    <div class="review-dock" role="toolbar" aria-label="${h?`Client feedback tools`:`Website review tools`}">
      <span class="review-brand">${h?`Client review`:`Review tools`}</span>
      <button class="review-button" type="button" data-action="toggle-annotate" aria-pressed="false">${h?`Add comment`:`Annotate`}</button>
      <button class="review-button" type="button" data-action="page-note">${h?`Page feedback`:`Page note`}</button>
      <button class="review-button" type="button" data-action="toggle-notes" aria-expanded="false">${h?`Feedback`:`Review notes`} <span class="review-count" data-role="note-count">0</span></button>
    </div>
    <section class="review-panel review-panel--draft" data-panel="draft" role="dialog" aria-modal="false" aria-labelledby="review-draft-title" hidden>
      <div class="review-panel__header">
        <div><h2 id="review-draft-title">${h?`Add feedback`:`Annotate element`}</h2><p>${h?`Tell us what you would like changed here.`:`Comment on the selected live element.`}</p></div>
        <button class="review-icon-button" type="button" data-action="close-draft" aria-label="Close annotation draft">×</button>
      </div>
      <form class="review-form" data-role="draft-form">
        <div class="review-target">
          <strong data-role="target-label">Element</strong>
          <code data-role="target-selector">body</code>
        </div>
        <div class="review-grid">
          <label class="review-label">Category
            <select class="review-field" name="category">${_}</select>
          </label>
          <label class="review-label">Priority
            <select class="review-field" name="priority">${ae}</select>
          </label>
        </div>
        <label class="review-label">Status
          <select class="review-field" name="status">${oe}</select>
        </label>
        <label class="review-label">Comment
          <textarea class="review-field" name="comment" maxlength="${n}" required placeholder="${h?`What should change, or what do you like about this?`:`What should change, and what outcome should it create?`}"></textarea>
        </label>
        <div class="review-actions">
          <button class="review-button review-button--primary" type="submit">${h?`Save feedback`:`Save note`}</button>
          <button class="review-button" type="button" data-action="select-parent">${h?`Select a larger area`:`Use parent element`}</button>
          <button class="review-button" type="button" data-action="close-draft">Cancel</button>
        </div>
        <p class="review-help">${h?`Your feedback stays in this browser until you download it. Information typed into website forms is never captured.`:`Shortcut: Ctrl/⌘ + Enter saves. Escape closes. Field values are never captured.`}</p>
      </form>
    </section>
    <section class="review-panel review-panel--notes" data-panel="notes" role="dialog" aria-modal="false" aria-labelledby="review-notes-title" hidden>
      <div class="review-panel__header">
        <div><h2 id="review-notes-title">${h?`Your feedback`:`Review notes`}</h2><p>${h?`Review your comments, then download the feedback file when finished.`:`Stored only in this browser until exported.`}</p></div>
        <button class="review-icon-button" type="button" data-action="close-notes" aria-label="Close review notes">×</button>
      </div>
      <div class="review-panel__body">
        <div class="review-toolbar">
          <select class="review-field" name="scope" aria-label="Note scope"><option value="current">${h?`This page`:`Current page`}</option><option value="all">All pages</option></select>
          <select class="review-field" name="status-filter" aria-label="Note status"><option value="all">All statuses</option><option value="Open">Open</option><option value="Resolved">${h?`Addressed`:`Resolved`}</option></select>
        </div>
        <div class="review-toolbar">
          <button class="review-button" type="button" data-action="copy-markdown">${h?`Copy summary`:`Copy Markdown`}</button>
          <button class="review-button" type="button" data-action="download-markdown">${h?`Download summary`:`Download Markdown`}</button>
          <button class="review-button ${h?`review-button--download`:``}" type="button" data-action="download-json">${h?`Download feedback`:`Download JSON`}</button>
          ${h?``:`<button class="review-button" type="button" data-action="import-json">Import JSON</button>`}
          <input type="file" data-role="import-input" accept="application/json,.json" hidden>
        </div>
        <div class="review-list" data-role="note-list"></div>
        <div class="review-actions">
          <button class="review-button review-button--danger" type="button" data-action="clear-notes">${h?`Clear all feedback`:`Clear all notes`}</button>
        </div>
      </div>
    </section>
    <div class="review-live" data-role="live" aria-live="polite"></div>
  `,document.body.append(x);let C=S.querySelector(`[data-role="hover-frame"]`),w=S.querySelector(`[data-role="selected-frame"]`),T=S.querySelector(`[data-role="pins"]`),ce=S.querySelector(`[data-role="note-count"]`),E=S.querySelector(`[data-action="toggle-annotate"]`),D=S.querySelector(`[data-action="toggle-notes"]`),O=S.querySelector(`[data-panel="draft"]`),k=S.querySelector(`[data-panel="notes"]`),A=S.querySelector(`[data-role="draft-form"]`),le=A.elements.comment,ue=S.querySelector(`[data-role="target-label"]`),de=S.querySelector(`[data-role="target-selector"]`),j=S.querySelector(`[data-role="note-list"]`),fe=S.querySelector(`select[name="scope"]`),M=S.querySelector(`select[name="status-filter"]`),N=S.querySelector(`[data-role="import-input"]`),P=S.querySelector(`[data-role="live"]`),F=re(),I=!1,L=null,R=null,z={xRatio:.5,yRatio:.5},B=null,V=null,H=0,U=document.body.style.cursor,W=e=>{P.textContent=``,window.requestAnimationFrame(()=>{P.textContent=e})},G=()=>{m(`golden-arm.review.annotations.v1`,JSON.stringify(F)),ce.textContent=String(F.length)},K=(e,t)=>{if(!(t instanceof Element)||!t.isConnected){e.hidden=!0;return}let n=t.getBoundingClientRect();if(n.width<=0||n.height<=0||n.bottom<0||n.top>innerHeight||n.right<0||n.left>innerWidth){e.hidden=!0;return}e.hidden=!1,e.style.width=`${d(n.width)}px`,e.style.height=`${d(n.height)}px`,e.style.transform=`translate3d(${d(n.left)}px, ${d(n.top)}px, 0)`},pe=()=>{T.replaceChildren(),F.forEach((e,t)=>{if(e.route!==p())return;let n=y(e.selector);if(!n)return;let r=n.getBoundingClientRect();if(r.width<=0||r.height<=0||r.bottom<-20||r.top>innerHeight+20)return;let i=document.createElement(`button`),a=t+1,o=r.left+r.width*u(e.anchor.xRatio,.04,.96),s=r.top+r.height*u(e.anchor.yRatio,.04,.96);i.type=`button`,i.className=`review-pin`,i.dataset.role=`pin`,i.dataset.noteId=e.id,i.dataset.status=e.status,i.textContent=String(a),i.setAttribute(`aria-label`,`Edit review note ${a}: ${e.comment.slice(0,90)}`),i.title=`${e.priority} · ${e.category} · ${e.status}\n${e.comment}`,i.style.transform=`translate3d(${d(o)}px, ${d(s)}px, 0) translate(-50%, -50%)`,i.addEventListener(`click`,()=>X(e)),T.append(i)})},me=()=>{H=0,K(C,I?L:null),K(w,O.hidden?null:R),pe()},q=()=>{H||=window.requestAnimationFrame(me)},he=e=>{I=!!e,E.setAttribute(`aria-pressed`,String(I)),E.textContent=I?h?`Stop selecting`:`Pause annotation`:h?`Add comment`:`Annotate`,document.documentElement.dataset.reviewAnnotating=String(I),document.body.style.cursor=I?`crosshair`:U,I||(L=null,C.hidden=!0),W(I?h?`Choose anything on the page to comment on.`:`Annotation mode enabled. Click any page element to comment.`:h?`Selection stopped. Website links work normally.`:`Annotation mode paused. Site controls work normally.`)},J=({restoreFocus:e=!0}={})=>{O.hidden=!0,w.hidden=!0,R=null,B=null,A.reset(),A.elements.category.value=`Visual`,A.elements.priority.value=`P1`,A.elements.status.value=`Open`,e&&V instanceof HTMLElement&&V.focus({preventScroll:!0}),V=null},Y=(e,t,n,r=null)=>{R=e instanceof Element?e:null,B=r?.id||null,V=S.activeElement instanceof HTMLElement?S.activeElement:null;let i=R?.getBoundingClientRect();z=r?.anchor||{xRatio:i?.width?u((t-i.left)/i.width,0,1):.5,yRatio:i?.height?u((n-i.top)/i.height,0,1):.5};let a=r?.selector||v(R||document.body);ue.textContent=r?.label||g(R||document.body),de.textContent=a,A.elements.category.value=r?.category||`Visual`,A.elements.priority.value=r?.priority||`P1`,A.elements.status.value=r?.status||`Open`,A.elements.comment.value=r?.comment||``,O.querySelector(`h2`).textContent=r?h?`Edit feedback`:`Edit annotation`:h?`Add feedback`:`Annotate element`,k.hidden=!0,D.setAttribute(`aria-expanded`,`false`),O.hidden=!1,q(),window.requestAnimationFrame(()=>le.focus())},X=t=>{if(t.route!==p()){m(e,t.id),window.location.assign(t.route);return}let n=y(t.selector);n&&n.scrollIntoView({block:`center`,behavior:matchMedia(`(prefers-reduced-motion: reduce)`).matches?`auto`:`smooth`}),Y(n,0,0,t)},ge=e=>F.findIndex(({id:t})=>t===e.id)+1,Z=()=>{let e=fe.value,t=M.value,n=F.filter(n=>(e===`all`||n.route===p())&&(t===`all`||n.status===t));if(j.replaceChildren(),!n.length){let t=document.createElement(`div`);t.className=`review-empty`,t.textContent=e===`current`?h?`No feedback on this page yet. Choose Add comment, then select anything on the page.`:`No notes on this page yet. Choose Annotate, then click an element.`:h?`No feedback matches these filters.`:`No review notes match these filters.`,j.append(t);return}n.forEach(e=>{let t=ge(e),n=document.createElement(`article`);n.className=`review-note`,n.dataset.status=e.status;let r=document.createElement(`div`);r.className=`review-note__meta`;let i=document.createElement(`span`);i.className=`review-note__number`,i.textContent=String(t),r.append(i,document.createTextNode(`${se(e.priority)} · ${h&&s[e.category]||e.category} · ${h&&e.status===`Resolved`?`Addressed`:e.status}`));let a=document.createElement(`button`);a.type=`button`,a.className=`review-link-button`,a.textContent=`${e.route}${e.hash||``} — ${e.label}`,a.addEventListener(`click`,()=>X(e));let o=document.createElement(`p`);o.textContent=e.comment;let c=document.createElement(`code`);c.textContent=e.selector;let l=document.createElement(`div`);l.className=`review-actions`;let u=document.createElement(`button`);u.type=`button`,u.className=`review-button`,u.textContent=`Edit`,u.setAttribute(`aria-label`,`Edit note ${t}`),u.addEventListener(`click`,()=>X(e));let d=document.createElement(`button`);d.type=`button`,d.className=`review-button`,d.textContent=e.status===`Open`?h?`Mark addressed`:`Resolve`:`Reopen`,d.setAttribute(`aria-label`,`${e.status===`Open`?h?`Mark addressed`:`Resolve`:`Reopen`} ${h?`feedback`:`note`} ${t}`),d.addEventListener(`click`,()=>{e.status=e.status===`Open`?`Resolved`:`Open`,e.updatedAt=f(),G(),Z(),q(),W(`Note ${t} marked ${e.status.toLowerCase()}.`)});let p=document.createElement(`button`);p.type=`button`,p.className=`review-button review-button--danger`,p.textContent=`Delete`,p.setAttribute(`aria-label`,`Delete note ${t}`),p.addEventListener(`click`,()=>{window.confirm(`Delete review note ${t}?`)&&(F=F.filter(({id:t})=>t!==e.id),G(),Z(),q(),W(`Note ${t} deleted.`))}),l.append(u,d,p),n.append(r,a,o,c,l),j.append(n)})},Q=e=>{let t=typeof e==`boolean`?e:k.hidden;k.hidden=!t,D.setAttribute(`aria-expanded`,String(t)),t&&(O.hidden=!0,w.hidden=!0,Z(),k.querySelector(`h2`).focus?.({preventScroll:!0}))},$=()=>{let e=[h?`# Golden Arm website feedback`:`# Golden Arm website review`,``,`- Exported: ${f()}`,`- Origin reviewed: ${window.location.origin}`,`- Notes: ${F.length}`,``];return F.forEach((t,n)=>{e.push(`## ${n+1}. [${t.priority}] ${t.category} — ${t.status}`,``,`- Page: \`${t.route}${t.hash||``}\``,`- Target: ${t.label} (\`${t.tag}\`)`,`- Selector: \`${t.selector.replaceAll("`","\\`")}\``,`- Viewport: ${t.viewport.width}×${t.viewport.height}; scroll ${t.scroll.x}, ${t.scroll.y}`,`- Rect: left ${t.rect.left}, top ${t.rect.top}, width ${t.rect.width}, height ${t.rect.height}`,`- Created: ${t.createdAt}`,``,t.comment,``)}),e.join(`
`)},_e=()=>({schemaVersion:1,site:`Golden Arm Elite Security Agency website`,mode:h?`client`:`internal`,origin:window.location.origin,exportedAt:f(),notes:F}),ve=(e,t,n)=>{let r=URL.createObjectURL(new Blob([t],{type:n})),i=document.createElement(`a`);i.href=r,i.download=e,S.append(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)},ye=e=>`golden-arm-${h?`client-feedback`:`review`}-${new Date().toISOString().slice(0,10)}.${e}`,be=async()=>{let e=$();try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.left=`-9999px`,document.body.append(t),t.select(),document.execCommand(`copy`),t.remove()}W(h?`Feedback summary copied to the clipboard.`:`Markdown review copied to the clipboard.`)},xe=()=>{let e=A.elements.comment.value.trim().slice(0,n);if(!e){le.focus();return}let r=F.find(({id:e})=>e===B),i=R||(r?y(r.selector):null)||document.body,a=f(),o=b({...r||{},id:r?.id||crypto.randomUUID(),route:r?.route||p(),hash:r?.hash??window.location.hash,selector:r&&!R?r.selector:v(i),tag:r&&!R?r.tag:i.tagName.toLowerCase(),label:r&&!R?r.label:g(i),comment:e,category:A.elements.category.value,priority:A.elements.priority.value,status:A.elements.status.value,viewport:{width:innerWidth,height:innerHeight},scroll:{x:d(scrollX),y:d(scrollY)},rect:ne(i),anchor:z,createdAt:r?.createdAt||a,updatedAt:a});o&&(F=r?F.map(e=>e.id===r.id?o:e):[...F,o].slice(0,t),G(),Z(),J({restoreFocus:!1}),q(),W(r?h?`Feedback updated.`:`Review note updated.`:h?`Feedback saved.`:`Review note saved.`))},Se=e=>!(e instanceof Element)||e===x?null:e.closest(r)||e,Ce=e=>{if(!I||e.composedPath().includes(x))return;let t=Se(e.target);t!==L&&(L=t,q())},we=e=>{if(!I||e.composedPath().includes(x))return;let t=Se(e.target);t&&(e.preventDefault(),e.stopImmediatePropagation(),Y(t,e.clientX,e.clientY))},Te=e=>{if((e.ctrlKey||e.metaKey)&&e.key===`Enter`&&!O.hidden){e.preventDefault(),xe();return}e.key===`Escape`&&(O.hidden?k.hidden?I&&he(!1):Q(!1):J())};E.addEventListener(`click`,()=>he(!I)),S.querySelector(`[data-action="page-note"]`).addEventListener(`click`,()=>{let e=document.querySelector(`main`)||document.body,t=e.getBoundingClientRect();Y(e,t.left+t.width/2,u(t.top+100,0,innerHeight))}),D.addEventListener(`click`,()=>Q()),S.querySelectorAll(`[data-action="close-draft"]`).forEach(e=>e.addEventListener(`click`,()=>J())),S.querySelector(`[data-action="close-notes"]`).addEventListener(`click`,()=>Q(!1)),S.querySelector(`[data-action="select-parent"]`).addEventListener(`click`,()=>{let e=R?.parentElement;for(;e&&e!==document.body&&!e.matches(r);)e=e.parentElement;if(!e)return;let t=e.getBoundingClientRect();Y(e,t.left+t.width/2,t.top+t.height/2)}),A.addEventListener(`submit`,e=>{e.preventDefault(),xe()}),fe.addEventListener(`change`,Z),M.addEventListener(`change`,Z),S.querySelector(`[data-action="copy-markdown"]`).addEventListener(`click`,be),S.querySelector(`[data-action="download-markdown"]`).addEventListener(`click`,()=>ve(ye(`md`),$(),`text/markdown;charset=utf-8`)),S.querySelector(`[data-action="download-json"]`).addEventListener(`click`,()=>ve(ye(`json`),`${JSON.stringify(_e(),null,2)}\n`,`application/json;charset=utf-8`)),S.querySelector(`[data-action="import-json"]`)?.addEventListener(`click`,()=>N.click()),N.addEventListener(`change`,async()=>{let[e]=N.files||[];if(N.value=``,e)try{let n=JSON.parse(await e.text());if(n.schemaVersion!==1||!Array.isArray(n.notes))throw Error(`Expected a schemaVersion 1 review export.`);let r=n.notes.map(b).filter(Boolean),i=new Map(F.map(e=>[e.id,e]));r.forEach(e=>i.set(e.id,e)),F=[...i.values()].slice(0,t),G(),Z(),q(),W(`${r.length} review notes imported.`)}catch(e){W(`Import failed: ${e.message}`)}}),S.querySelector(`[data-action="clear-notes"]`).addEventListener(`click`,()=>{!F.length||!window.confirm(`Clear all locally stored review notes? Export first if you need a copy.`)||(F=[],G(),Z(),q(),W(`All review notes cleared.`))}),document.addEventListener(`pointermove`,Ce,!0),document.addEventListener(`click`,we,!0),document.addEventListener(`keydown`,Te,!0),window.addEventListener(`scroll`,q,{passive:!0}),window.addEventListener(`resize`,q,{passive:!0}),window.addEventListener(`hashchange`,()=>{Z(),q()}),G(),Z(),q(),document.documentElement.dataset.reviewAnnotator=`ready`;let Ee=ee(e);if(Ee){te(e);let t=F.find(({id:e})=>e===Ee);t&&window.setTimeout(()=>X(t),120)}return()=>{window.cancelAnimationFrame(H),window.clearTimeout(0),document.removeEventListener(`pointermove`,Ce,!0),document.removeEventListener(`click`,we,!0),document.removeEventListener(`keydown`,Te,!0),window.removeEventListener(`scroll`,q),window.removeEventListener(`resize`,q),document.body.style.cursor=U,delete document.documentElement.dataset.reviewAnnotating,delete document.documentElement.dataset.reviewAnnotator,x.remove()}};export{ae as setupReviewAnnotator};