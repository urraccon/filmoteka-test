function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequire23fa;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},e.parcelRequire23fa=r),r.register("1dkLo",(function(e,n){function i(t){const e=t.map((({id:t,poster_path:e,title:n,genres:i,release_year:r,vote_average:s})=>`<div>\n    <img id="${t}" src="${e}" alt="movie poster" loading="lazy" />\n            <p class="movie-title">   ${n} </p>\n            <p class="movie-short-descr"> ${i} | ${r} | <span>${s}</span></p>\n        </div>`)).join("");document.querySelector(".movies-div").innerHTML=e}function r(t,e){const n=document.querySelector(".buttons-div");if(null!==n&&n.remove(),1===e)return;let i,r,s,o=`\n      <button id="rgtdotBtn">...</button>\n      <button>${e}</button>\n      <button id="rgtarwBtn">&rarr;</button>\n    </div>`;switch(t){case 1:i=1,r=3;break;case 2:i=1,r=4;break;default:i=t-2,r=t+2}r>=e&&(r=e-1);let a="";for(let t=i;t<=r;t++)1!==t&&(a+=`<button>${t}</button>`);let c='<div class="buttons-div">\n      <button id="lftarwBtn">&larr;</button>\n      <button id="oneBtn">1</button>\n      <button id="lftdotBtn">...</button>'+a+o;document.querySelector("main").insertAdjacentHTML("beforeend",c);const u=document.querySelector("#lftarwBtn"),h=document.querySelector("#lftdotBtn"),l=document.querySelector("#rgtdotBtn"),d=document.querySelector("#rgtarwBtn");t>=1&&t<=4&&(h.style.display="none",s=t+2),1===t&&(u.style.display="none",s=2),t>4&&(s=6),e-r<2&&(l.style.display="none"),t===e&&(d.style.display="none",s=7);document.querySelector(`.buttons-div :nth-child(${s})`).classList.add("active"),u.style.backgroundColor="#F7F7F7",d.style.backgroundColor="#F7F7F7"}t(e.exports,"renderMoviesList",(function(){return i})),t(e.exports,"renderPaginationButtons",(function(){return r}))})),r.register("5uEKZ",(function(t,e){})),r.register("jPzW1",(function(e,n){t(e.exports,"itemAccess",(function(){return h})),t(e.exports,"downloadWatchedQueuedMoviesFromDB",(function(){return d})),t(e.exports,"uploadWatchedQueuedMoviesToDB",(function(){return f})),r("ftYLF");var i=r("3PjDZ"),s=r("9FYXe"),o=r("l9sJR");const a=(0,i.getFirestore)(s.app),c=(new(0,o.DeviceUUID)).get(),u=(0,i.doc)(a,"watched_and_queued_movie_list",`${c}`);let h="",l={watchedMovies:[],queuedMovies:[]};console.dir(s.app),console.dir(a),console.log(`Your device ID is: ${c}`);const d=async function(){try{h=await(0,i.getDoc)(u);const t=h.data();if(void 0===t)return void await(0,i.setDoc)(u,l);Object.keys(t).length;l.watchedMovies=t.watchedMovies,l.queuedMovies=t.queuedMovies,console.log("The movies saved to watched are: ",JSON.parse(t.watchedMovies[0]),"and queued are: ",JSON.parse(t.queuedMovies[0]))}catch(t){console.log("I couldn't find the list of movies, because: ",t)}},f=async function(t,e){try{d();const n=JSON.stringify(e);"watched"===t?(l.watchedMovies=[],l.watchedMovies.push(n)):(l.queuedMovies=[],l.queuedMovies.push(n)),await(0,i.setDoc)(u,l),console.log("The movies added in watched list are: ",l.watchedMovies," and in queued list are: ",l.queuedMovies)}catch(t){console.log("I couldn't save the list of movies, because: ",t)}}})),r.register("ftYLF",(function(e,n){t(e.exports,"getFirestore",(function(){return r("3PjDZ").getFirestore})),t(e.exports,"doc",(function(){return r("3PjDZ").doc})),t(e.exports,"getDoc",(function(){return r("3PjDZ").getDoc})),t(e.exports,"setDoc",(function(){return r("3PjDZ").setDoc})),r("3PjDZ")})),r.register("3PjDZ",(function(e,n){t(e.exports,"doc",(function(){return oo})),t(e.exports,"getFirestore",(function(){return uo})),t(e.exports,"getDoc",(function(){return jo})),t(e.exports,"setDoc",(function(){return qo}));var i=r("ix4Jr"),s=r("4a6xH"),o=r("7vF8m"),a=r("ffjl9"),c=r("4bwHs");r("4TNnu");const u="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="10.7.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new(0,o.Logger)("@firebase/firestore");function f(){return d.logLevel}function g(t,...e){if(d.logLevel<=o.LogLevel.DEBUG){const n=e.map(y);d.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(d.logLevel<=o.LogLevel.ERROR){const n=e.map(y);d.error(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(d.logLevel<=o.LogLevel.WARN){const n=e.map(y);d.warn(`Firestore (${l}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return e=t,JSON.stringify(e)}catch(e){return t}var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function w(t,e){t||v()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(h.UNAUTHENTICATED)))}shutdown(){}}class C{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class I{constructor(t){this.t=t,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new S;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new S,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new S)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new h(t)}}class D{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=h.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new D(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(h.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class x{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,g("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(w("string"==typeof t.token),this.R=t.token,new x(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=O(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function R(t,e){return t<e?-1:t>e?1:0}function P(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new _(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new _(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new _(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return M.fromMillis(Date.now())}static fromDate(t){return M.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new M(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?R(this.nanoseconds,t.nanoseconds):R(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new M(0,0))}static max(){return new F(new M(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===V.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof V?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class U extends V{construct(t,e,n){return new U(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new _(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new U(e)}static emptyPath(){return new U([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends V{construct(t,e,n){return new j(t,e,n)}static isValidIdentifier(t){return B.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new j(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new _(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new _(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new _(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new _(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new j(e)}static emptyPath(){return new j([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.path=t}static fromPath(t){return new $(U.fromString(t))}static fromName(t){return new $(U.fromString(t).popFirst(5))}static empty(){return new $(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===U.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return U.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $(new U(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}q.UNKNOWN_ID=-1;function K(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=F.fromTimestamp(1e9===i?new M(n+1,0):new M(n,i));return new W(r,$.empty(),e)}function z(t){return new W(t.readTime,t.key,-1)}class W{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new W(F.min(),$.empty(),-1)}static max(){return new W(F.max(),$.empty(),-1)}}function H(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=$.comparator(t.documentKey,e.documentKey),0!==n?n:R(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==G)throw t;g("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new J(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof J?e:J.resolve(e)}catch(t){return J.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):J.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):J.reject(e)}static resolve(t){return new J(((e,n)=>{e(t)}))}static reject(t){return new J(((e,n)=>{n(t)}))}static waitFor(t){return new J(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=J.resolve(!1);for(const n of t)e=e.next((t=>t?J.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new J(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new J(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function tt(t){return null==t}function et(t){return 0===t&&1/t==-1/0}function nt(t){return"number"==typeof t&&Number.isInteger(t)&&!et(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Z._e=-1;const it=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],rt=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],st=rt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ot(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function at(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ct(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new ut(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ht(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ht(this.root,t,this.comparator,!1)}getReverseIterator(){return new ht(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ht(this.root,t,this.comparator,!0)}}class ht{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:lt.RED,this.left=null!=i?i:lt.EMPTY,this.right=null!=r?r:lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new lt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return lt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1,lt.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,i,r){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(t){this.comparator=t,this.data=new ut(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ft(this.data.getIterator())}getIteratorFrom(t){return new ft(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof dt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class ft{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(t){this.fields=t,t.sort(j.comparator)}static empty(){return new gt([])}unionWith(t){let e=new dt(j.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new gt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return P(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new pt("Invalid base64 string: "+t):t}}(t);return new mt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new mt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return R(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const yt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vt(t){if(w(!!t),"string"==typeof t){let e=0;const n=yt.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:wt(t.seconds),nanos:wt(t.nanos)}}function wt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function bt(t){return"string"==typeof t?mt.fromBase64String(t):mt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function _t(t){const e=t.mapValue.fields.__previous_value__;return Et(e)?_t(e):e}function St(t){const e=vt(t.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,n,i,r,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class At{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new At("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof At&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function It(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Et(t)?4:Bt(t)?9007199254740991:10:v()}function Dt(t,e){if(t===e)return!0;const n=It(t);if(n!==It(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return St(t).isEqual(St(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=vt(t.timestampValue),i=vt(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,bt(t.bytesValue).isEqual(bt(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return wt(t.geoPointValue.latitude)===wt(e.geoPointValue.latitude)&&wt(t.geoPointValue.longitude)===wt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return wt(t.integerValue)===wt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=wt(t.doubleValue),i=wt(e.doubleValue);return n===i?et(n)===et(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return P(t.arrayValue.values||[],e.arrayValue.values||[],Dt);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(ot(n)!==ot(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Dt(n[t],i[t])))return!1;return!0}(t,e);default:return v()}var i}function kt(t,e){return void 0!==(t.values||[]).find((t=>Dt(t,e)))}function xt(t,e){if(t===e)return 0;const n=It(t),i=It(e);if(n!==i)return R(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=wt(t.integerValue||t.doubleValue),i=wt(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Nt(t.timestampValue,e.timestampValue);case 4:return Nt(St(t),St(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(t,e){const n=bt(t),i=bt(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=R(n[t],i[t]);if(0!==e)return e}return R(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=R(wt(t.latitude),wt(e.latitude));return 0!==n?n:R(wt(t.longitude),wt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=xt(n[t],i[t]);if(e)return e}return R(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Ct.mapValue&&e===Ct.mapValue)return 0;if(t===Ct.mapValue)return 1;if(e===Ct.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=R(i[t],s[t]);if(0!==e)return e;const o=xt(n[i[t]],r[s[t]]);if(0!==o)return o}return R(i.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function Nt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return R(t,e);const n=vt(t),i=vt(e),r=R(n.seconds,i.seconds);return 0!==r?r:R(n.nanos,i.nanos)}function Ot(t){return Lt(t)}function Lt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=vt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bt(t.bytesValue).toBase64():"referenceValue"in t?function(t){return $.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Lt(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Lt(t.fields[r])}`;return n+"}"}(t.mapValue):v()}function Rt(t){return!!t&&"integerValue"in t}function Pt(t){return!!t&&"arrayValue"in t}function Mt(t){return!!t&&"nullValue"in t}function Ft(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vt(t){return!!t&&"mapValue"in t}function Ut(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return at(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ut(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ut(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Bt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt{constructor(t){this.value=t}static empty(){return new jt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Vt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ut(e)}setAll(t){let e=j.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Ut(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Vt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Vt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){at(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new jt(Ut(this.value))}}function $t(t){const e=[];return at(t.fields,((t,n)=>{const i=new j([t]);if(Vt(n)){const t=$t(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new gt(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class qt{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new qt(t,0,F.min(),F.min(),F.min(),jt.empty(),0)}static newFoundDocument(t,e,n,i){return new qt(t,1,e,F.min(),n,i,0)}static newNoDocument(t,e){return new qt(t,2,e,F.min(),F.min(),jt.empty(),0)}static newUnknownDocument(t,e){return new qt(t,3,e,F.min(),F.min(),jt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof qt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e){this.position=t,this.inclusive=e}}function zt(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?$.comparator($.fromName(o.referenceValue),n.key):xt(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Wt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e="asc"){this.field=t,this.dir=e}}function Gt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{}class Xt extends Qt{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new re(t,e,n):"array-contains"===e?new ce(t,n):"in"===e?new ue(t,n):"not-in"===e?new he(t,n):"array-contains-any"===e?new le(t,n):new Xt(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new se(t,n):new oe(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(xt(e,this.value)):null!==e&&It(this.value)===It(e)&&this.matchesComparison(xt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends Qt{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Jt(t,e)}matches(t){return Yt(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Yt(t){return"and"===t.op}function Zt(t){return te(t)&&Yt(t)}function te(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function ee(t){if(t instanceof Xt)return t.field.canonicalString()+t.op.toString()+Ot(t.value);if(Zt(t))return t.filters.map((t=>ee(t))).join(",");{const e=t.filters.map((t=>ee(t))).join(",");return`${t.op}(${e})`}}function ne(t,e){return t instanceof Xt?(n=t,(i=e)instanceof Xt&&n.op===i.op&&n.field.isEqual(i.field)&&Dt(n.value,i.value)):t instanceof Jt?function(t,e){return e instanceof Jt&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&ne(n,e.filters[i])),!0)}(t,e):void v();var n,i}function ie(t){return t instanceof Xt?`${(e=t).field.canonicalString()} ${e.op} ${Ot(e.value)}`:t instanceof Jt?function(t){return t.op.toString()+" {"+t.getFilters().map(ie).join(" ,")+"}"}(t):"Filter";var e}class re extends Xt{constructor(t,e,n){super(t,e,n),this.key=$.fromName(n.referenceValue)}matches(t){const e=$.comparator(t.key,this.key);return this.matchesComparison(e)}}class se extends Xt{constructor(t,e){super(t,"in",e),this.keys=ae("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class oe extends Xt{constructor(t,e){super(t,"not-in",e),this.keys=ae("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ae(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>$.fromName(t.referenceValue)))}class ce extends Xt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Pt(e)&&kt(e.arrayValue,this.value)}}class ue extends Xt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&kt(this.value.arrayValue,e)}}class he extends Xt{constructor(t,e){super(t,"not-in",e)}matches(t){if(kt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!kt(this.value.arrayValue,e)}}class le extends Xt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Pt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>kt(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ce=null}}function fe(t,e=null,n=[],i=[],r=null,s=null,o=null){return new de(t,e,n,i,r,s,o)}function ge(t){const e=b(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ee(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),tt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ot(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ot(t))).join(",")),e.ce=t}return e.ce}function pe(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Gt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ne(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wt(t.startAt,e.startAt)&&Wt(t.endAt,e.endAt)}function me(t){return $.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ve(t,e,n,i,r,s,o,a){return new ye(t,e,n,i,r,s,o,a)}function we(t){return new ye(t)}function be(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ee(t){return null!==t.collectionGroup}function _e(t){const e=b(t);if(null===e.le){e.le=[];const t=new Set;for(const n of e.explicitOrderBy)e.le.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new dt(j.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.le.push(new Ht(i,n))})),t.has(j.keyField().canonicalString())||e.le.push(new Ht(j.keyField(),n))}return e.le}function Se(t){const e=b(t);return e.he||(e.he=Te(e,_e(t))),e.he}function Te(t,e){if("F"===t.limitType)return fe(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Ht(t.field,e)}));const n=t.endAt?new Kt(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Kt(t.startAt.position,t.startAt.inclusive):null;return fe(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Ae(t,e,n){return new ye(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ce(t,e){return pe(Se(t),Se(e))&&t.limitType===e.limitType}function Ie(t){return`${ge(Se(t))}|lt:${t.limitType}`}function De(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>ie(t))).join(", ")}]`),tt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ot(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ot(t))).join(",")),`Target(${e})`}(Se(t))}; limitType=${t.limitType})`}function ke(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):$.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of _e(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=zt(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,_e(n),i)||n.endAt&&!function(t,e,n){const i=zt(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,_e(n),i)));var n,i}function xe(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ne(t){return(e,n)=>{let i=!1;for(const r of _e(t)){const t=Oe(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Oe(t,e,n){const i=t.field.isKeyField()?$.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?xt(i,r):v()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return v()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){at(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return ct(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new ut($.comparator);function Pe(){return Re}const Me=new ut($.comparator);function Fe(...t){let e=Me;for(const n of t)e=e.insert(n.key,n);return e}function Ve(t){let e=Me;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ue(){return je()}function Be(){return je()}function je(){return new Le((t=>t.toString()),((t,e)=>t.isEqual(e)))}const $e=new ut($.comparator),qe=new dt($.comparator);function Ke(...t){let e=qe;for(const n of t)e=e.add(n);return e}const ze=new dt(R);function We(){return ze}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:et(e)?"-0":e}}function Ge(t){return{integerValue:""+t}}function Qe(t,e){return nt(e)?Ge(e):He(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(){this._=void 0}}function Je(t,e,n){return t instanceof tn?en(t,e):t instanceof nn?rn(t,e):n}function Ye(t,e){return t instanceof sn?Rt(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null;var n,i}class Ze extends Xe{}class tn extends Xe{constructor(t){super(),this.elements=t}}function en(t,e){const n=an(e);for(const e of t.elements)n.some((t=>Dt(t,e)))||n.push(e);return{arrayValue:{values:n}}}class nn extends Xe{constructor(t){super(),this.elements=t}}function rn(t,e){let n=an(e);for(const e of t.elements)n=n.filter((t=>!Dt(t,e)));return{arrayValue:{values:n}}}class sn extends Xe{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function on(t){return wt(t.integerValue||t.doubleValue)}function an(t){return Pt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e){this.version=t,this.transformResults=e}}class un{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new un}static exists(t){return new un(void 0,t)}static updateTime(t){return new un(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ln{}function dn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new _n(t.key,un.none()):new yn(t.key,t.data,un.none());{const n=t.data,i=jt.empty();let r=new dt(j.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new vn(t.key,i,new gt(r.toArray()),un.none())}}function fn(t,e,n){var i;t instanceof yn?function(t,e,n){const i=t.value.clone(),r=bn(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof vn?function(t,e,n){if(!hn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=bn(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(wn(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function gn(t,e,n,i){return t instanceof yn?function(t,e,n,i){if(!hn(t.precondition,e))return n;const r=t.value.clone(),s=En(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof vn?function(t,e,n,i){if(!hn(t.precondition,e))return n;const r=En(t.fieldTransforms,i,e),s=e.data;return s.setAll(wn(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(r=e,s=n,hn(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):s);var r,s}function pn(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=Ye(i.transform,t||null);null!=r&&(null===n&&(n=jt.empty()),n.set(i.field,r))}return n||null}function mn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&P(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof tn&&i instanceof tn||n instanceof nn&&i instanceof nn?P(n.elements,i.elements,Dt):n instanceof sn&&i instanceof sn?Dt(n.Ie,i.Ie):n instanceof Ze&&i instanceof Ze);var n,i}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class yn extends ln{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vn extends ln{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function wn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function bn(t,e,n){const i=new Map;w(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Je(o,a,n[r]))}return i}function En(t,e,n){const i=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);i.set(a.field,(s=c,o=e,(r=t)instanceof Ze?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Et(e)&&(e=_t(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):r instanceof tn?en(r,s):r instanceof nn?rn(r,s):function(t,e){const n=Ye(t,e),i=on(n)+on(t.Ie);return Rt(n)&&Rt(t.Ie)?Ge(i):He(t.serializer,i)}(r,s)))}var r,s,o;return i}class _n extends ln{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sn extends ln{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&fn(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=gn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=gn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Be();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=dn(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(F.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ke())}isEqual(t){return this.batchId===t.batchId&&P(this.mutations,t.mutations,((t,e)=>mn(t,e)))&&P(this.baseMutations,t.baseMutations,((t,e)=>mn(t,e)))}}class An{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){w(t.mutations.length===n.length);let i=$e;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new An(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn,kn;function xn(t){switch(t){default:return v();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Nn(t){if(void 0===t)return p("GRPC error has no .code"),E.UNKNOWN;switch(t){case Dn.OK:return E.OK;case Dn.CANCELLED:return E.CANCELLED;case Dn.UNKNOWN:return E.UNKNOWN;case Dn.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Dn.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Dn.INTERNAL:return E.INTERNAL;case Dn.UNAVAILABLE:return E.UNAVAILABLE;case Dn.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Dn.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Dn.NOT_FOUND:return E.NOT_FOUND;case Dn.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Dn.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Dn.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Dn.ABORTED:return E.ABORTED;case Dn.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Dn.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Dn.DATA_LOSS:return E.DATA_LOSS;default:return v()}}(kn=Dn||(Dn={}))[kn.OK=0]="OK",kn[kn.CANCELLED=1]="CANCELLED",kn[kn.UNKNOWN=2]="UNKNOWN",kn[kn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",kn[kn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",kn[kn.NOT_FOUND=5]="NOT_FOUND",kn[kn.ALREADY_EXISTS=6]="ALREADY_EXISTS",kn[kn.PERMISSION_DENIED=7]="PERMISSION_DENIED",kn[kn.UNAUTHENTICATED=16]="UNAUTHENTICATED",kn[kn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",kn[kn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",kn[kn.ABORTED=10]="ABORTED",kn[kn.OUT_OF_RANGE=11]="OUT_OF_RANGE",kn[kn.UNIMPLEMENTED=12]="UNIMPLEMENTED",kn[kn.INTERNAL=13]="INTERNAL",kn[kn.UNAVAILABLE=14]="UNAVAILABLE",kn[kn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let On=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new(0,c.Integer)([4294967295,4294967295],0);function Pn(t){const e=Ln().encode(t),n=new(0,c.Md5);return n.update(e),new Uint8Array(n.digest())}function Mn(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new(0,c.Integer)([n,i],0),new(0,c.Integer)([r,s],0)]}class Fn{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Vn(`Invalid padding: ${e}`);if(n<0)throw new Vn(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Vn(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Vn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=c.Integer.fromNumber(this.Te)}de(t,e,n){let i=t.add(e.multiply(c.Integer.fromNumber(n)));return 1===i.compare(Rn)&&(i=new(0,c.Integer)([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=Pn(t),[n,i]=Mn(e);for(let t=0;t<this.hashCount;t++){const e=this.de(n,i,t);if(!this.Ae(e))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),s=new Fn(r,i,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Te)return;const e=Pn(t),[n,i]=Mn(e);for(let t=0;t<this.hashCount;t++){const e=this.de(n,i,t);this.Re(e)}}Re(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Vn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Bn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Un(F.min(),i,new ut(R),Pe(),Ke())}}class Bn{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Bn(n,e,Ke(),Ke(),Ke())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e,n,i){this.Ve=t,this.removedTargetIds=e,this.key=n,this.me=i}}class $n{constructor(t,e){this.targetId=t,this.fe=e}}class qn{constructor(t,e,n=mt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Kn{constructor(){this.ge=0,this.pe=Hn(),this.ye=mt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=Ke(),e=Ke(),n=Ke();return this.pe.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:v()}})),new Bn(this.ye,this.we,t,e,n)}Fe(){this.Se=!1,this.pe=Hn()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,w(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class zn{constructor(t){this.Le=t,this.ke=new Map,this.qe=Pe(),this.Qe=Wn(),this.Ke=new ut(R)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.Ce(t.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(t.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(e);break;case 3:this.je(e)&&(n.Be(),n.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.Ce(t.resumeToken));break;default:v()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.fe.count,i=this.Ye(e);if(i){const r=i.target;if(me(r))if(0===n){const t=new $(r.path);this.We(e,t,qt.newNoDocument(t,F.min()))}else w(1===n);else{const i=this.Ze(e);if(i!==n){const n=this.Xe(t),r=n?this.et(n,t,i):1;if(0!==r){this.He(e);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==On||On.tt(function(t,e,n,i,r){var s,o,a,c,u,h;const l={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(l.bloomFilter={applied:0===r,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(h=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==h?h:0,mightContain:t=>{var e;return null!==(e=null==i?void 0:i.mightContain(t))&&void 0!==e&&e}}),l}(i,t.fe,this.Le.nt(),n,r))}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:r=0}=e;let s,o;try{s=bt(n).toUint8Array()}catch(t){if(t instanceof pt)return m("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Fn(s,i,r)}catch(t){return m(t instanceof Vn?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Te?null:o}et(t,e,n){return e.fe.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const r=this.Le.nt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.We(e,n,null),i++)})),i}it(t){const e=new Map;this.ke.forEach(((n,i)=>{const r=this.Ye(i);if(r){if(n.current&&me(r.target)){const e=new $(r.target.path);null!==this.qe.get(e)||this.st(i,e)||this.We(i,e,qt.newNoDocument(e,t))}n.De&&(e.set(i,n.ve()),n.Fe())}}));let n=Ke();this.Qe.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.qe.forEach(((e,n)=>n.setReadTime(t)));const i=new Un(t,e,this.Ke,this.qe,n);return this.qe=Pe(),this.Qe=Wn(),this.Ke=new ut(R),i}Ue(t,e){if(!this.je(t))return;const n=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,n),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),n&&(this.qe=this.qe.insert(e,n))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Kn,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new dt(R),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||g("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Kn),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Wn(){return new ut($.comparator)}function Hn(){return new ut($.comparator)}const Gn={asc:"ASCENDING",desc:"DESCENDING"},Qn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xn={and:"AND",or:"OR"};class Jn{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Yn(t,e){return t.useProto3Json||tt(e)?e:{value:e}}function Zn(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ti(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ei(t,e){return Zn(t,e.toTimestamp())}function ni(t){return w(!!t),F.fromTimestamp(function(t){const e=vt(t);return new M(e.seconds,e.nanos)}(t))}function ii(t,e){return(n=t,new U(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function ri(t){const e=U.fromString(t);return w(Si(e)),e}function si(t,e){return ii(t.databaseId,e.path)}function oi(t,e){const n=ri(e);if(n.get(1)!==t.databaseId.projectId)throw new _(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(hi(n))}function ai(t,e){return ii(t.databaseId,e)}function ci(t){const e=ri(t);return 4===e.length?U.emptyPath():hi(e)}function ui(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hi(t){return w(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function li(t,e,n){return{name:si(t,e),fields:n.value.mapValue.fields}}function di(t,e){let n;if(e instanceof yn)n={update:li(t,e.key,e.value)};else if(e instanceof _n)n={delete:si(t,e.key)};else if(e instanceof vn)n={update:li(t,e.key,e.data),updateMask:_i(e.fieldMask)};else{if(!(e instanceof Sn))return v();n={verify:si(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ze)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tn)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof nn)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof sn)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw v()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(r=e.precondition).updateTime?{updateTime:ei(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:v())),n;var i,r}function fi(t,e){return{documents:[ai(t,e.path)]}}function gi(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=ai(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ai(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0!==t.length)return Ei(Jt.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:wi((e=t).field),direction:yi(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Yn(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n;var a}function pi(t){let e=ci(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){w(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=mi(t);return e instanceof Jt&&Zt(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Ht(bi((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,tt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Kt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Kt(n,e)}(n.endAt)),ve(e,r,o,s,a,"F",c,u)}function mi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=bi(t.unaryFilter.field);return Xt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=bi(t.unaryFilter.field);return Xt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bi(t.unaryFilter.field);return Xt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=bi(t.unaryFilter.field);return Xt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?(n=t,Xt.create(bi(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,Jt.create(e.compositeFilter.filters.map((t=>mi(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return v()}}(e.compositeFilter.op))):v();var e,n}function yi(t){return Gn[t]}function vi(t){return Qn[t]}function wi(t){return{fieldPath:t.canonicalString()}}function bi(t){return j.fromServerFormat(t.fieldPath)}function Ei(t){return t instanceof Xt?function(t){if("=="===t.op){if(Ft(t.value))return{unaryFilter:{field:wi(t.field),op:"IS_NAN"}};if(Mt(t.value))return{unaryFilter:{field:wi(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ft(t.value))return{unaryFilter:{field:wi(t.field),op:"IS_NOT_NAN"}};if(Mt(t.value))return{unaryFilter:{field:wi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(t.field),op:vi(t.op),value:t.value}}}(t):t instanceof Jt?function(t){const e=t.getFilters().map((t=>Ei(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,Xn[n]),filters:e}};var n}(t):v()}function _i(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Si(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e,n,i,r=F.min(),s=F.min(),o=mt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Ti(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t){this.ut=t}}function Ci(t){const e=pi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ae(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){}ht(t,e){this.Pt(t,e),e.It()}Pt(t,e){if("nullValue"in t)this.Tt(e,5);else if("booleanValue"in t)this.Tt(e,10),e.Et(t.booleanValue?1:0);else if("integerValue"in t)this.Tt(e,15),e.Et(wt(t.integerValue));else if("doubleValue"in t){const n=wt(t.doubleValue);isNaN(n)?this.Tt(e,13):(this.Tt(e,15),et(n)?e.Et(0):e.Et(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Tt(e,20),"string"==typeof n?e.dt(n):(e.dt(`${n.seconds||""}`),e.Et(n.nanos||0))}else if("stringValue"in t)this.At(t.stringValue,e),this.Rt(e);else if("bytesValue"in t)this.Tt(e,30),e.Vt(bt(t.bytesValue)),this.Rt(e);else if("referenceValue"in t)this.ft(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Tt(e,45),e.Et(n.latitude||0),e.Et(n.longitude||0)}else"mapValue"in t?Bt(t)?this.Tt(e,Number.MAX_SAFE_INTEGER):(this.gt(t.mapValue,e),this.Rt(e)):"arrayValue"in t?(this.yt(t.arrayValue,e),this.Rt(e)):v()}At(t,e){this.Tt(e,25),this.wt(t,e)}wt(t,e){e.dt(t)}gt(t,e){const n=t.fields||{};this.Tt(e,55);for(const t of Object.keys(n))this.At(t,e),this.Pt(n[t],e)}yt(t,e){const n=t.values||[];this.Tt(e,50);for(const t of n)this.Pt(t,e)}ft(t,e){this.Tt(e,37),$.fromName(t).path.forEach((t=>{this.Tt(e,60),this.wt(t,e)}))}Tt(t,e){t.Et(e)}Rt(t){t.Et(2)}}Ii.St=new Ii;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di{constructor(){this.on=new ki}addToCollectionParentIndex(t,e){return this.on.add(e),J.resolve()}getCollectionParents(t,e){return J.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return J.resolve()}deleteFieldIndex(t,e){return J.resolve()}deleteAllFieldIndexes(t){return J.resolve()}createTargetIndexes(t,e){return J.resolve()}getDocumentsMatchingTarget(t,e){return J.resolve(null)}getIndexType(t,e){return J.resolve(0)}getFieldIndexes(t,e){return J.resolve([])}getNextCollectionGroupToUpdate(t){return J.resolve(null)}getMinOffset(t,e){return J.resolve(W.min())}getMinOffsetFromCollectionGroup(t,e){return J.resolve(W.min())}updateCollectionGroup(t,e,n){return J.resolve()}updateIndexEntries(t,e){return J.resolve()}}class ki{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new dt(U.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new dt(U.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class xi{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new xi(t,xi.DEFAULT_COLLECTION_PERCENTILE,xi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xi.DEFAULT_COLLECTION_PERCENTILE=10,xi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xi.DEFAULT=new xi(41943040,xi.DEFAULT_COLLECTION_PERCENTILE,xi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xi.DISABLED=new xi(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Ni(0)}static Nn(){return new Ni(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oi{constructor(){this.changes=new Le((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,qt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?J.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&gn(n.mutation,t,gt.empty(),M.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ke()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ke()){const i=Ue();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Fe();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ue();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ke())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Pe();const s=je(),o=je();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof vn)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),gn(o.mutation,e,o.mutation.getFieldMask(),M.now())):s.set(e.key,gt.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Li(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=je();let i=new ut(((t,e)=>t-e)),r=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||gt.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||Ke()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,u=Be();c.forEach((t=>{if(!r.has(t)){const i=dn(e.get(t),n.get(t));null!==i&&u.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return J.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return r=e,$.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):Ee(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i);var r}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):J.resolve(Ue());let o=-1,a=r;return s.next((e=>J.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?J.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Ke()))).next((t=>({batchId:o,changes:Ve(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new $(e)).next((t=>{let e=Fe();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=Fe();return this.indexManager.getCollectionParents(t,r).next((o=>J.forEach(o,(o=>{const a=(c=e,u=o.child(r),new ye(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,qt.newInvalidDocument(i)))}));let n=Fe();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&gn(s.mutation,i,gt.empty(),M.now()),ke(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return J.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,{id:(n=e).id,version:n.version,createTime:ni(n.createTime)}),J.resolve();var n}getNamedQuery(t,e){return J.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,{name:(n=e).name,query:Ci(n.bundledQuery),readTime:ni(n.readTime)}),J.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.overlays=new ut($.comparator),this.lr=new Map}getOverlay(t,e){return J.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ue();return J.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.lt(t,e,i)})),J.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.lr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.lr.delete(n)),J.resolve()}getOverlaysForCollection(t,e,n){const i=Ue(),r=e.length+1,s=new $(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return J.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new ut(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Ue(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ue(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return J.resolve(o)}lt(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.lr.get(i.largestBatchId).delete(n.key);this.lr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Cn(e,n));let r=this.lr.get(e);void 0===r&&(r=Ke(),this.lr.set(e,r)),this.lr.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.hr=new dt(Vi.Pr),this.Ir=new dt(Vi.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const n=new Vi(t,e);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.dr(new Vi(t,e))}Ar(t,e){t.forEach((t=>this.removeReference(t,e)))}Rr(t){const e=new $(new U([])),n=new Vi(e,t),i=new Vi(e,t+1),r=[];return this.Ir.forEachInRange([n,i],(t=>{this.dr(t),r.push(t.key)})),r}Vr(){this.hr.forEach((t=>this.dr(t)))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new $(new U([])),n=new Vi(e,t),i=new Vi(e,t+1);let r=Ke();return this.Ir.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Vi(t,0),n=this.hr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Vi{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return $.comparator(t.key,e.key)||R(t.gr,e.gr)}static Tr(t,e){return R(t.gr,e.gr)||$.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new dt(Vi.Pr)}checkEmpty(t){return J.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Tn(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this.yr=this.yr.add(new Vi(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return J.resolve(s)}lookupMutationBatch(t,e){return J.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Sr(n),r=i<0?0:i;return J.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(t){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Vi(e,0),i=new Vi(e,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([n,i],(t=>{const e=this.wr(t.gr);r.push(e)})),J.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new dt(R);return e.forEach((t=>{const e=new Vi(t,0),i=new Vi(t,Number.POSITIVE_INFINITY);this.yr.forEachInRange([e,i],(t=>{n=n.add(t.gr)}))})),J.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;$.isDocumentKey(r)||(r=r.child(""));const s=new Vi(new $(r),0);let o=new dt(R);return this.yr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.gr)),!0)}),s),J.resolve(this.br(o))}br(t){const e=[];return t.forEach((t=>{const n=this.wr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){w(0===this.Dr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return J.forEach(e.mutations,(i=>{const r=new Vi(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.yr=n}))}Fn(t){}containsKey(t,e){const n=new Vi(e,0),i=this.yr.firstAfterOrEqual(n);return J.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,J.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t){this.Cr=t,this.docs=new ut($.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return J.resolve(n?n.document.mutableCopy():qt.newInvalidDocument(e))}getEntries(t,e){let n=Pe();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():qt.newInvalidDocument(t))})),J.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Pe();const s=e.path,o=new $(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||H(z(o),n)<=0||(i.has(o.key)||ke(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return J.resolve(r)}getAllFromCollectionGroup(t,e,n,i){v()}vr(t,e){return J.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ji(this)}getSize(t){return J.resolve(this.size)}}class ji extends Oi{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(n)})),J.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t){this.persistence=t,this.Fr=new Le((t=>ge(t)),pe),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Fi,this.targetCount=0,this.Nr=Ni.On()}forEachTarget(t,e){return this.Fr.forEach(((t,n)=>e(n))),J.resolve()}getLastRemoteSnapshotVersion(t){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return J.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Mr&&(this.Mr=e),J.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new Ni(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,J.resolve()}updateTargetData(t,e){return this.kn(e),J.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,J.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Fr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),J.waitFor(r).next((()=>i))}getTargetCount(t){return J.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fr.get(e)||null;return J.resolve(n)}addMatchingKeys(t,e,n){return this.Or.Er(e,n),J.resolve()}removeMatchingKeys(t,e,n){this.Or.Ar(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),J.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),J.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Or.mr(e);return J.resolve(n)}containsKey(t,e){return J.resolve(this.Or.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e){this.Br={},this.overlays={},this.Lr=new Z(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new $i(this),this.indexManager=new Di,this.remoteDocumentCache=new Bi((t=>this.referenceDelegate.Qr(t))),this.serializer=new Ai(e),this.Kr=new Pi(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Mi,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new Ui(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,n){g("MemoryPersistence","Starting transaction:",t);const i=new Ki(this.Lr.next());return this.referenceDelegate.$r(),n(i).next((t=>this.referenceDelegate.Ur(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Wr(t,e){return J.or(Object.values(this.Br).map((n=>()=>n.containsKey(t,e))))}}class Ki extends Q{constructor(t){super(),this.currentSequenceNumber=t}}class zi{constructor(t){this.persistence=t,this.Gr=new Fi,this.zr=null}static jr(t){return new zi(t)}get Hr(){if(this.zr)return this.zr;throw v()}addReference(t,e,n){return this.Gr.addReference(n,e),this.Hr.delete(n.toString()),J.resolve()}removeReference(t,e,n){return this.Gr.removeReference(n,e),this.Hr.add(n.toString()),J.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),J.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach((t=>this.Hr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.Hr,(n=>{const i=$.fromPath(n);return this.Jr(t,i).next((t=>{t||e.removeEntry(i,F.min())}))})).next((()=>(this.zr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Jr(t,e).next((t=>{t?this.Hr.delete(e.toString()):this.Hr.add(e.toString())}))}Qr(t){return 0}Jr(t,e){return J.or([()=>J.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wi{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.ki=n,this.qi=i}static Qi(t,e){let n=Ke(),i=Ke();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new Wi(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.zi(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.ji(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new Hi;return this.Hi(t,e,n).next((i=>{if(r.result=i,this.$i)return this.Ji(t,e,n,i.size)}))})).next((()=>r.result))}Ji(t,e,n,i){return n.documentReadCount<this.Ui?(f()<=o.LogLevel.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",De(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),J.resolve()):(f()<=o.LogLevel.DEBUG&&g("QueryEngine","Query:",De(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Wi*i?(f()<=o.LogLevel.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",De(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Se(e))):J.resolve())}zi(t,e){if(be(e))return J.resolve(null);let n=Se(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Ae(e,null,"F"),n=Se(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=Ke(...i);return this.Gi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Yi(e,i);return this.Zi(e,s,r,n.readTime)?this.zi(t,Ae(e,null,"F")):this.Xi(t,s,e,n)}))))})))))}ji(t,e,n,i){return be(e)||i.isEqual(F.min())?J.resolve(null):this.Gi.getDocuments(t,n).next((r=>{const s=this.Yi(e,r);return this.Zi(e,s,n,i)?J.resolve(null):(f()<=o.LogLevel.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),De(e)),this.Xi(t,s,e,K(i,-1)).next((t=>t)))}))}Yi(t,e){let n=new dt(Ne(t));return e.forEach(((e,i)=>{ke(t,i)&&(n=n.add(i))})),n}Zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Hi(t,e,n){return f()<=o.LogLevel.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",De(e)),this.Gi.getDocumentsMatchingQuery(t,e,W.min(),n)}Xi(t,e,n,i){return this.Gi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,e,n,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new ut(R),this.ns=new Le((t=>ge(t)),pe),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(n)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ri(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ts)))}}function Xi(t,e,n,i){return new Qi(t,e,n,i)}async function Ji(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.os(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=Ke();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({_s:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function Yi(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qr.getLastRemoteSnapshotVersion(t)))}function Zi(t,e,n){let i=Ke(),r=Ke();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Pe();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(F.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):g("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{us:i,cs:r}}))}function tr(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function er(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.qr.getTargetData(t,e).next((r=>r?(i=r,J.resolve(i)):n.qr.allocateTargetId(t).next((r=>(i=new Ti(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.qr.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.ts.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(t.targetId,t),n.ns.set(e,t.targetId)),t}))}async function nr(t,e,n){const i=b(t),r=i.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Y(t))throw t;g("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.ts=i.ts.remove(e),i.ns.delete(r.target)}function ir(t,e,n){const i=b(t);let r=F.min(),s=Ke();return i.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const i=b(t),r=i.ns.get(n);return void 0!==r?J.resolve(i.ts.get(r)):i.qr.getTargetData(e,n)}(i,t,Se(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.es.getDocumentsMatchingQuery(t,e,n?r:F.min(),n?s:Ke()))).next((t=>(rr(i,xe(e),t),{documents:t,ls:s})))))}function rr(t,e,n){let i=t.rs.get(e)||F.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.rs.set(e,i)}class sr{constructor(){this.activeTargetIds=We()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class or{constructor(){this.eo=new sr,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,n){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new sr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{ro(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur=null;function hr(){return null===ur?ur=268435456+Math.round(2147483648*Math.random()):ur++,"0x"+ur.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const lr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="WebChannelConnection";class gr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=e+"://"+t.host,this.fo=`projects/${n}/databases/${i}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get yo(){return!1}wo(t,e,n,i,r){const s=hr(),o=this.So(t,e);g("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(a,i,r),this.Do(t,o,a,n).then((e=>(g("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw m("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Co(t,e,n,i,r,s){return this.wo(t,e,n,i,r)}bo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}So(t,e){const n=lr[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,n,i){const r=hr();return new Promise(((s,o)=>{const a=new(0,c.XhrIo);a.setWithCredentials(!0),a.listenOnce(c.EventType.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const e=a.getResponseJson();g(fr,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case c.ErrorCode.TIMEOUT:g(fr,`RPC '${t}' ${r} timed out`),o(new _(E.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:const n=a.getStatus();if(g(fr,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(e)>=0?e:E.UNKNOWN}(e.status);o(new _(t,e.message))}else o(new _(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{g(fr,`RPC '${t}' ${r} completed.`)}}));const u=JSON.stringify(i);g(fr,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",u,n,15)}))}vo(t,e,n){const i=hr(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=(0,c.createWebChannelTransport)(),o=(0,c.getStatEventTarget)(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.bo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const h=r.join("");g(fr,`Creating RPC '${t}' stream ${i}: ${h}`,a);const l=s.createWebChannel(h,a);let d=!1,f=!1;const p=new dr({co:e=>{f?g(fr,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(d||(g(fr,`Opening RPC '${t}' stream ${i} transport.`),l.open(),d=!0),g(fr,`RPC '${t}' stream ${i} sending:`,e),l.send(e))},lo:()=>l.close()}),y=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return y(l,c.WebChannel.EventType.OPEN,(()=>{f||g(fr,`RPC '${t}' stream ${i} transport opened.`)})),y(l,c.WebChannel.EventType.CLOSE,(()=>{f||(f=!0,g(fr,`RPC '${t}' stream ${i} transport closed`),p.Ro())})),y(l,c.WebChannel.EventType.ERROR,(e=>{f||(f=!0,m(fr,`RPC '${t}' stream ${i} transport errored:`,e),p.Ro(new _(E.UNAVAILABLE,"The operation could not be completed")))})),y(l,c.WebChannel.EventType.MESSAGE,(e=>{var n;if(!f){const r=e.data[0];w(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){g(fr,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Dn[t];if(void 0!==e)return Nn(e)}(e),r=o.message;void 0===n&&(n=E.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),f=!0,p.Ro(new _(n,r)),l.close()}else g(fr,`RPC '${t}' stream ${i} received:`,r),p.Vo(r)}})),y(o,c.Event.STAT_EVENT,(e=>{e.stat===c.Stat.PROXY?g(fr,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===c.Stat.NOPROXY&&g(fr,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{p.Ao()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){return new Jn(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,n=1e3,i=1.5,r=6e4){this.si=t,this.timerId=e,this.Fo=n,this.Mo=i,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-n);i>0&&g("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,(()=>(this.Bo=Date.now(),t()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,n,i,r,s,o,a){this.si=t,this.Ko=n,this.$o=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new yr(t,e)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==t?this.zo.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Uo===e&&this.s_(t,n)}),(e=>{t((()=>{const t=new _(E.UNKNOWN,"Fetching auth token failed: "+e.message);return this.o_(t)}))}))}s_(t,e){const n=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho((()=>{n((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((t=>{n((()=>this.o_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(t){return g("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget((()=>this.Uo===t?e():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wr extends vr{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r="NO_CHANGE"===(i=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:v(),s=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(w(void 0===e||"string"==typeof e),mt.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),mt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?E.UNKNOWN:Nn(t.code);return new _(e,t.message||"")}(a);n=new qn(r,s,o,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=oi(t,i.document.name),s=ni(i.document.updateTime),o=i.document.createTime?ni(i.document.createTime):F.min(),a=new jt({mapValue:{fields:i.document.fields}}),c=qt.newFoundDocument(r,s,o,a),u=i.targetIds||[],h=i.removedTargetIds||[];n=new jn(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=oi(t,i.document),s=i.readTime?ni(i.readTime):F.min(),o=qt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new jn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=oi(t,i.document),s=i.removedTargetIds||[];n=new jn([],s,r,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const{count:i=0,unchangedNames:r}=t,s=new In(i,r),o=t.targetId;n=new $n(o,s)}}var i;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return F.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?F.min():e.readTime?ni(e.readTime):F.min()}(t);return this.listener.a_(e,n)}u_(t){const e={};e.database=ui(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;if(n=me(i)?{documents:fi(t,i)}:{query:gi(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=ti(t,e.resumeToken);const i=Yn(t,e.expectedCount);null!==i&&(n.expectedCount=i)}else if(e.snapshotVersion.compareTo(F.min())>0){n.readTime=Zn(t,e.snapshotVersion.toTimestamp());const i=Yn(t,e.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.e_(e)}c_(t){const e={};e.database=ui(this.serializer),e.removeTarget=t,this.e_(e)}}class br extends vr{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(w(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?ni(t.updateTime):ni(e);return n.isEqual(F.min())&&(n=ni(e)),new cn(n,t.transformResults||[])}(t,n)))):[]),r=ni(t.commitTime);return this.listener.I_(r,i)}var e,n;return w(!t.writeResults||0===t.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=ui(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>di(this.serializer,t)))};this.e_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new _(E.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.wo(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(E.UNKNOWN,t.toString())}))}Co(t,e,n,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Co(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(E.UNKNOWN,t.toString())}))}terminate(){this.d_=!0}}class _r{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(t){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,"Online"===t&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(p(e),this.f_=!1):g("OnlineStateTracker",e)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro((t=>{n.enqueueAndForget((async()=>{Or(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.C_.add(4),await Ar(e),e.M_.set("Unknown"),e.C_.delete(4),await Tr(e)}(this))}))})),this.M_=new _r(n,i)}}async function Tr(t){if(Or(t))for(const e of t.v_)await e(!0)}async function Ar(t){for(const e of t.v_)await e(!1)}function Cr(t,e){const n=b(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Nr(n)?xr(n):Xr(n).Ho()&&Dr(n,e))}function Ir(t,e){const n=b(t),i=Xr(n);n.D_.delete(e),i.Ho()&&kr(n,e),0===n.D_.size&&(i.Ho()?i.Zo():Or(n)&&n.M_.set("Unknown"))}function Dr(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xr(t).u_(e)}function kr(t,e){t.x_.Oe(e),Xr(t).c_(e)}function xr(t){t.x_=new zn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Xr(t).start(),t.M_.g_()}function Nr(t){return Or(t)&&!Xr(t).jo()&&t.D_.size>0}function Or(t){return 0===b(t).C_.size}function Lr(t){t.x_=void 0}async function Rr(t){t.D_.forEach(((e,n)=>{Dr(t,e)}))}async function Pr(t,e){Lr(t),Nr(t)?(t.M_.w_(e),xr(t)):t.M_.set("Unknown")}async function Mr(t,e,n){if(t.M_.set("Online"),e instanceof qn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.D_.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.D_.delete(i),t.x_.removeTarget(i))}(t,e)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Fr(t,n)}else if(e instanceof jn?t.x_.$e(e):e instanceof $n?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(F.min()))try{const e=await Yi(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.x_.it(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.D_.get(i);r&&t.D_.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const i=t.D_.get(e);if(!i)return;t.D_.set(e,i.withResumeToken(mt.EMPTY_BYTE_STRING,i.snapshotVersion)),kr(t,e);const r=new Ti(i.target,e,n,i.sequenceNumber);Dr(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){g("RemoteStore","Failed to raise snapshot:",e),await Fr(t,e)}}async function Fr(t,e,n){if(!Y(e))throw e;t.C_.add(1),await Ar(t),t.M_.set("Offline"),n||(n=()=>Yi(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Tr(t)}))}function Vr(t,e){return e().catch((n=>Fr(t,n,e)))}async function Ur(t){const e=b(t),n=Jr(e);let i=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Br(e);)try{const t=await tr(e.localStore,i);if(null===t){0===e.b_.length&&n.Zo();break}i=t.batchId,jr(e,t)}catch(t){await Fr(e,t)}$r(e)&&qr(e)}function Br(t){return Or(t)&&t.b_.length<10}function jr(t,e){t.b_.push(e);const n=Jr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function $r(t){return Or(t)&&!Jr(t).jo()&&t.b_.length>0}function qr(t){Jr(t).start()}async function Kr(t){Jr(t).E_()}async function zr(t){const e=Jr(t);for(const n of t.b_)e.P_(n.mutations)}async function Wr(t,e,n){const i=t.b_.shift(),r=An.from(i,e,n);await Vr(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Ur(t)}async function Hr(t,e){e&&Jr(t).h_&&await async function(t,e){if(xn(n=e.code)&&n!==E.ABORTED){const n=t.b_.shift();Jr(t).Yo(),await Vr(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ur(t)}var n}(t,e),$r(t)&&qr(t)}async function Gr(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const i=Or(n);n.C_.add(3),await Ar(n),i&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Tr(n)}async function Qr(t,e){const n=b(t);e?(n.C_.delete(2),await Tr(n)):e||(n.C_.add(2),await Ar(n),n.M_.set("Unknown"))}function Xr(t){return t.O_||(t.O_=function(t,e,n){const i=b(t);return i.A_(),new wr(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{ho:Rr.bind(null,t),Io:Pr.bind(null,t),a_:Mr.bind(null,t)}),t.v_.push((async e=>{e?(t.O_.Yo(),Nr(t)?xr(t):t.M_.set("Unknown")):(await t.O_.stop(),Lr(t))}))),t.O_}function Jr(t){return t.N_||(t.N_=function(t,e,n){const i=b(t);return i.A_(),new br(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{ho:Kr.bind(null,t),Io:Hr.bind(null,t),T_:zr.bind(null,t),I_:Wr.bind(null,t)}),t.v_.push((async e=>{e?(t.N_.Yo(),await Ur(t)):(await t.N_.stop(),t.b_.length>0&&(g("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))}))),t.N_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Yr{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new S,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Yr(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zr(t,e){if(p("AsyncQueue",`${e}: ${t}`),Y(t))return new _(E.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t){this.comparator=t?(e,n)=>t(e,n)||$.comparator(e.key,n.key):(t,e)=>$.comparator(t.key,e.key),this.keyedMap=Fe(),this.sortedSet=new ut(this.comparator)}static emptySet(t){return new ts(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ts))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new ts;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.B_=new ut($.comparator)}track(t){const e=t.doc.key,n=this.B_.get(e);n?0!==t.type&&3===n.type?this.B_=this.B_.insert(e,t):3===t.type&&1!==n.type?this.B_=this.B_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.B_=this.B_.remove(e):1===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):v():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ns{constructor(t,e,n,i,r,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new ns(t,e,ts.emptySet(e),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ce(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.k_=void 0,this.listeners=[]}}class rs{constructor(){this.queries=new Le((t=>Ie(t)),Ce),this.onlineState="Unknown",this.q_=new Set}}async function ss(t,e){const n=b(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new is),r)try{s.k_=await n.onListen(i)}catch(t){const n=Zr(t,`Initialization of query '${De(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&us(n)}async function os(t,e){const n=b(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function as(t,e){const n=b(t);let i=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.K_(t)&&(i=!0);r.k_=t}}i&&us(n)}function cs(t,e,n){const i=b(t),r=i.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);i.queries.delete(e)}function us(t){t.q_.forEach((t=>{t.next()}))}class hs{constructor(t,e,n){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}K_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ns(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.J_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}H_(t){t=ns.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ls{constructor(t){this.key=t}}class ds{constructor(t){this.key=t}}class fs{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Ke(),this.mutatedKeys=Ke(),this._a=Ne(t),this.aa=new ts(this._a)}get ua(){return this.ia}ca(t,e){const n=e?e.la:new es,i=e?e.aa:this.aa;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const u=i.get(t),h=ke(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.ha(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this._a(h,a)>0||c&&this._a(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{aa:s,la:n,Zi:o,mutatedKeys:r}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const r=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}(t.type,e.type)||this._a(t.doc,e.doc))),this.Pa(n),i=null!=i&&i;const o=e&&!i?this.Ia():[],a=0===this.oa.size&&this.current&&!i?1:0,c=a!==this.sa;return this.sa=a,0!==s.length||c?{snapshot:new ns(this.query,t.aa,r,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({aa:this.aa,la:new es,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach((t=>this.ia=this.ia.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.ia=this.ia.delete(t))),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=Ke(),this.aa.forEach((t=>{this.Ea(t.key)&&(this.oa=this.oa.add(t.key))}));const e=[];return t.forEach((t=>{this.oa.has(t)||e.push(new ds(t))})),this.oa.forEach((n=>{t.has(n)||e.push(new ls(n))})),e}da(t){this.ia=t.ls,this.oa=Ke();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return ns.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class gs{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ps{constructor(t){this.key=t,this.Ra=!1}}class ms{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new Le((t=>Ie(t)),Ce),this.fa=new Map,this.ga=new Set,this.pa=new ut($.comparator),this.ya=new Map,this.wa=new Fi,this.Sa={},this.ba=new Map,this.Da=Ni.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function ys(t,e){const n=Ps(t);let i,r;const s=n.ma.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Aa();else{const t=await er(n.localStore,Se(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await vs(n,e,i,"current"===s,t.resumeToken),n.isPrimaryClient&&Cr(n.remoteStore,t)}return r}async function vs(t,e,n,i,r){t.va=(e,n,i)=>async function(t,e,n,i){let r=e.view.ca(n);r.Zi&&(r=await ir(t.localStore,e.query,!1).then((({documents:t})=>e.view.ca(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=i&&null!=i.targetMismatches.get(e.targetId),a=e.view.applyChanges(r,t.isPrimaryClient,s,o);return ks(t,e.targetId,a.Ta),a.snapshot}(t,e,n,i);const s=await ir(t.localStore,e,!0),o=new fs(e,s.ls),a=o.ca(s.documents),c=Bn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),u=o.applyChanges(a,t.isPrimaryClient,c);ks(t,n,u.Ta);const h=new gs(e,n,o);return t.ma.set(e,h),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function ws(t,e){const n=b(t),i=n.ma.get(e),r=n.fa.get(i.targetId);if(r.length>1)return n.fa.set(i.targetId,r.filter((t=>!Ce(t,e)))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await nr(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Ir(n.remoteStore,i.targetId),Is(n,i.targetId)})).catch(X)):(Is(n,i.targetId),await nr(n.localStore,i.targetId,!0))}async function bs(t,e){const n=b(t);try{const t=await function(t,e){const n=b(t),i=e.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.qr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.qr.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);var h,l,d;null!==e.targetMismatches.get(a)?u=u.withResumeToken(mt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,i)),r=r.insert(a,u),l=u,d=s,(0===(h=c).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.qr.updateTargetData(t,u))}));let a=Pe(),c=Ke();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(Zi(t,s,e.documentUpdates).next((t=>{a=t.us,c=t.cs}))),!i.isEqual(F.min())){const e=n.qr.getLastRemoteSnapshotVersion(t).next((e=>n.qr.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return J.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.ts=r,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.ya.get(e);i&&(w(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Ra=!0:t.modifiedDocuments.size>0?w(i.Ra):t.removedDocuments.size>0&&(w(i.Ra),i.Ra=!1))})),await Os(n,t,e)}catch(t){await X(t)}}function Es(t,e,n){const i=b(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ma.forEach(((n,i)=>{const r=i.view.Q_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=b(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Q_(e)&&(i=!0)})),i&&us(n)}(i.eventManager,e),t.length&&i.Va.a_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function _s(t,e,n){const i=b(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.ya.get(e),s=r&&r.key;if(s){let t=new ut($.comparator);t=t.insert(s,qt.newNoDocument(s,F.min()));const n=Ke().add(s),r=new Un(F.min(),new Map,new ut(R),t,n);await bs(i,r),i.pa=i.pa.remove(s),i.ya.delete(e),Ns(i)}else await nr(i.localStore,e,!1).then((()=>Is(i,e,n))).catch(X)}async function Ss(t,e){const n=b(t),i=e.batch.batchId;try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=J.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);w(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ke();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);Cs(n,i,null),As(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Os(n,t)}catch(t){await X(t)}}async function Ts(t,e,n){const i=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(w(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Cs(i,e,n),As(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Os(i,t)}catch(t){await X(t)}}function As(t,e){(t.ba.get(e)||[]).forEach((t=>{t.resolve()})),t.ba.delete(e)}function Cs(t,e,n){const i=b(t);let r=i.Sa[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.Sa[i.currentUser.toKey()]=r}}function Is(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.fa.get(e))t.ma.delete(i),n&&t.Va.Fa(i,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach((e=>{t.wa.containsKey(e)||Ds(t,e)}))}function Ds(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);null!==n&&(Ir(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Ns(t))}function ks(t,e,n){for(const i of n)i instanceof ls?(t.wa.addReference(i.key,e),xs(t,i)):i instanceof ds?(g("SyncEngine","Document no longer in limbo: "+i.key),t.wa.removeReference(i.key,e),t.wa.containsKey(i.key)||Ds(t,i.key)):v()}function xs(t,e){const n=e.key,i=n.path.canonicalString();t.pa.get(n)||t.ga.has(i)||(g("SyncEngine","New document in limbo: "+n),t.ga.add(i),Ns(t))}function Ns(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new $(U.fromString(e)),i=t.Da.next();t.ya.set(i,new ps(n)),t.pa=t.pa.insert(n,i),Cr(t.remoteStore,new Ti(Se(we(n.path)),i,"TargetPurposeLimboResolution",Z._e))}}async function Os(t,e,n){const i=b(t),r=[],s=[],o=[];i.ma.isEmpty()||(i.ma.forEach(((t,a)=>{o.push(i.va(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=Wi.Qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Va.a_(r),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>J.forEach(e,(e=>J.forEach(e.ki,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>J.forEach(e.qi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Y(t))throw t;g("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ts.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.ts=n.ts.insert(e,r)}}}(i.localStore,s))}async function Ls(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){g("SyncEngine","User change. New user:",e.toKey());const t=await Ji(n.localStore,e);n.currentUser=e,r="'waitForPendingWrites' promise is rejected due to a user change.",(i=n).ba.forEach((t=>{t.forEach((t=>{t.reject(new _(E.CANCELLED,r))}))})),i.ba.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Os(n,t._s)}var i,r}function Rs(t,e){const n=b(t),i=n.ya.get(e);if(i&&i.Ra)return Ke().add(i.key);{let t=Ke();const i=n.fa.get(e);if(!i)return t;for(const e of i){const i=n.ma.get(e);t=t.unionWith(i.view.ua)}return t}}function Ps(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bs.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rs.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_s.bind(null,e),e.Va.a_=as.bind(null,e.eventManager),e.Va.Fa=cs.bind(null,e.eventManager),e}function Ms(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ss.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ts.bind(null,e),e}class Fs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=mr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Xi(this.persistence,new Gi,t.initialUser,this.serializer)}createPersistence(t){return new qi(zi.jr,this.serializer)}createSharedClientState(t){return new or}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Es(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ls.bind(null,this.syncEngine),await Qr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new rs}createDatastore(t){const e=mr(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new gr(i));var i;return function(t,e,n,i){return new Er(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>Es(this.syncEngine,t,0),s=cr.D()?new cr:new ar,new Sr(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new ms(t,e,n,i,r,s);return o&&(a.Ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);g("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await Ar(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):p("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bs{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=h.UNAUTHENTICATED,this.clientId=L.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{g("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(g("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new S;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Zr(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function js(t,e){t.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Ji(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function $s(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ks(t);g("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Gr(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Gr(e.remoteStore,n))),t._onlineComponents=e}function qs(t){return"FirebaseError"===t.name?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Ks(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await js(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!qs(n))throw n;m("Error using user provided cache. Falling back to memory cache: "+n),await js(t,new Fs)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await js(t,new Fs);return t._offlineComponents}async function zs(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await $s(t,t._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await $s(t,new Vs))),t._onlineComponents}function Ws(t){return zs(t).then((t=>t.syncEngine))}async function Hs(t){const e=await zs(t),n=e.eventManager;return n.onListen=ys.bind(null,e.syncEngine),n.onUnlisten=ws.bind(null,e.syncEngine),n}function Gs(t,e,n={}){const i=new S;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new Us({next:s=>{e.enqueueAndForget((()=>os(t,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new _(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new _(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:t=>r.reject(t)}),o=new hs(we(n.path),s,{includeMetadataChanges:!0,J_:!0});return ss(t,o)}(await Hs(t),t.asyncQueue,e,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qs(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Xs=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e,n){if(!n)throw new _(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ys(t){if(!$.isDocumentKey(t))throw new _(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zs(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":v()}function to(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zs(t);throw new _(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new _(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new _(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new _(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qs(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new _(E.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new _(E.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new _(E.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class no{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new _(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eo(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new A;switch(t.type){case"firstParty":return new k(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new _(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Xs.get(t);e&&(g("ComponentProvider","Removing Datastore"),Xs.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new io(this.firestore,t,this._query)}}class ro{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new so(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ro(this.firestore,t,this._key)}}class so extends io{constructor(t,e,n){super(t,e,we(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ro(this.firestore,null,new $(t))}withConverter(t){return new so(this.firestore,t,this._path)}}function oo(t,e,...n){if(t=(0,a.getModularInstance)(t),1===arguments.length&&(e=L.newId()),Js("doc","path",e),t instanceof no){const i=U.fromString(e,...n);return Ys(i),new ro(t,null,new $(i))}{if(!(t instanceof ro||t instanceof so))throw new _(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(U.fromString(e,...n));return Ys(i),new ro(t.firestore,t instanceof so?t.converter:null,new $(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new yr(this,"async_queue_retry"),this.iu=()=>{const t=pr();t&&g("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const t=pr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=pr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise((()=>{}));const e=new S;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ya.push(t),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Y(t))throw t;g("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(t){const e=this.Ja.then((()=>(this.tu=!0,t().catch((t=>{this.eu=t,this.tu=!1;throw p("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.tu=!1,t))))));return this.Ja=e,e}enqueueAfterDelay(t,e,n){this.su(),this.ru.indexOf(t)>-1&&(e=0);const i=Yr.createAndSchedule(this,t,e,n,(t=>this.au(t)));return this.Xa.push(i),i}su(){this.eu&&v()}verifyOperationInProgress(){}async uu(){let t;do{t=this.Ja,await t}while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then((()=>{this.Xa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Xa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.uu()}))}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}class co extends no{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new ao,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lo(this),this._firestoreClient.terminate()}}function uo(t,e){const n="object"==typeof t?t:(0,i.getApp)(),r="string"==typeof t?t:e||"(default)",s=(0,i._getProvider)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");t&&function(t,e,n,i={}){var r;const s=(t=to(t,no))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&m("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=h.MOCK_USER;else{e=(0,a.createMockUserToken)(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new _(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new h(s)}t._authCredentials=new C(new T(e,n))}}(s,...t)}return s}function ho(t){return t._firestoreClient||lo(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lo(t){var e,n,i;const r=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,new Tt(o,a,c,(u=r).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Qs(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,c,u;t._firestoreClient=new Bs(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new fo(mt.fromBase64String(t))}catch(t){throw new _(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new fo(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new _(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class po{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new _(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new _(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return R(this._lat,t._lat)||R(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=/^__.*__$/;class vo{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new vn(t,this.data,this.fieldMask,e,this.fieldTransforms):new yn(t,this.data,e,this.fieldTransforms)}}function wo(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class bo{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new bo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Tu({path:n,du:!1});return i.Au(t),i}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Tu({path:n,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return No(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(0===t.length)throw this.mu("Document fields must not be empty");if(wo(this.Iu)&&yo.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Eo{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||mr(t)}pu(t,e,n,i=!1){return new bo({Iu:t,methodName:e,gu:n,path:j.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _o(t){const e=t._freezeSettings(),n=mr(t._databaseId);return new Eo(t._databaseId,!!e.ignoreUndefinedProperties,n)}function So(t,e,n,i,r,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,r);Io("Data must be an object, but it was:",o,i);const a=Ao(i,o);let c,u;if(s.merge)c=new gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Do(e,i,n);if(!o.contains(r))throw new _(E.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Oo(t,r)||t.push(r)}c=new gt(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new vo(new jt(a),c,u)}function To(t,e){if(Co(t=(0,a.getModularInstance)(t)))return Io("Unsupported field value:",e,t),Ao(t,e);if(t instanceof po)return function(t,e){if(!wo(e.Iu))throw e.mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&4!==e.Iu)throw e.mu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=To(r,e.Vu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Qe(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=M.fromDate(t);return{timestampValue:Zn(e.serializer,n)}}if(t instanceof M){const n=new M(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Zn(e.serializer,n)}}if(t instanceof mo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof fo)return{bytesValue:ti(e.serializer,t._byteString)};if(t instanceof ro){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.mu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ii(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.mu(`Unsupported field value: ${Zs(t)}`)}(t,e)}function Ao(t,e){const n={};return ct(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):at(t,((t,i)=>{const r=To(i,e.Eu(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Co(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof M||t instanceof mo||t instanceof fo||t instanceof ro||t instanceof po)}function Io(t,e,n){if(!Co(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Zs(n);throw"an object"===i?e.mu(t+" a custom object"):e.mu(t+" "+i)}var i}function Do(t,e,n){if((e=(0,a.getModularInstance)(e))instanceof go)return e._internalPath;if("string"==typeof e)return xo(t,e);throw No("Field path arguments must be of type string or ",t,!1,void 0,n)}const ko=new RegExp("[~\\*/\\[\\]]");function xo(t,e,n){if(e.search(ko)>=0)throw No(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new go(...e.split("."))._internalPath}catch(i){throw No(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function No(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new _(E.INVALID_ARGUMENT,a+t+c)}function Oo(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ro(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ro(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Po("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ro extends Lo{data(){return super.data()}}function Po(t,e){return"string"==typeof e?xo(t,e):e instanceof go?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{convertValue(t,e="none"){switch(It(t)){case 0:return null;case 1:return t.booleanValue;case 2:return wt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return at(t,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new mo(wt(t.latitude),wt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=_t(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(St(t));default:return null}}convertTimestamp(t){const e=vt(t);return new M(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=U.fromString(t);w(Si(n));const i=new At(n.get(1),n.get(3)),r=new $(n.popFirst(5));return i.isEqual(e)||p(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Uo extends Lo{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Po("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Bo extends Uo{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jo(t){t=to(t,ro);const e=to(t.firestore,co);return Gs(ho(e),t._key).then((n=>zo(e,t,n)))}class $o extends Mo{constructor(t){super(),this.firestore=t}convertBytes(t){return new fo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ro(this.firestore,null,e)}}function qo(t,e,n){t=to(t,ro);const i=to(t.firestore,co),r=Fo(t.converter,e,n);return Ko(i,[So(_o(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,un.none())])}function Ko(t,e){return function(t,e){const n=new S;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=Ms(t);try{const t=await function(t,e){const n=b(t),i=M.now(),r=e.reduce(((t,e)=>t.add(e.key)),Ke());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Pe(),c=Ke();return n.ss.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=pn(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new vn(t.key,e,$t(e.value.mapValue),un.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Ve(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Sa[t.currentUser.toKey()];i||(i=new ut(R)),i=i.insert(e,n),t.Sa[t.currentUser.toKey()]=i}(i,t.batchId,n),await Os(i,t.changes),await Ur(i.remoteStore)}catch(t){const e=Zr(t,"Failed to persist write");n.reject(e)}}(await Ws(t),e,n))),n.promise}(ho(t),e)}function zo(t,e,n){const i=n.docs.get(e._key),r=new $o(t);return new Uo(t,r,e._key,i,new Vo(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){var n;n=i.SDK_VERSION,l=n,(0,i._registerComponent)(new(0,s.Component)("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new co(new I(t.getProvider("auth-internal")),new N(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new _(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new At(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(u,"4.4.0",t),(0,i.registerVersion)(u,"4.4.0","esm2017")}()})),r.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return w})),t(e.exports,"SDK_VERSION",(function(){return S})),t(e.exports,"initializeApp",(function(){return T})),t(e.exports,"getApp",(function(){return A})),t(e.exports,"registerVersion",(function(){return C}));var i=r("4a6xH"),s=r("7vF8m"),o=r("ffjl9"),a=r("cCiiD");o=r("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const u="@firebase/app",h="0.9.25",l=new(0,s.Logger)("@firebase/app"),d="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},g=new Map,p=new Map;function m(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function y(t){const e=t.name;if(p.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;p.set(e,t);for(const e of g.values())m(e,t);return!0}function v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function w(t,e,n="[DEFAULT]"){v(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},E=new(0,o.ErrorFactory)("app","Firebase",b);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="10.7.1";function T(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:d,automaticDataCollectionEnabled:!1},e),s=r.name;if("string"!=typeof s||!s)throw E.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw E.create("no-options");const a=g.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(r,a.config))return a;throw E.create("duplicate-app",{appName:s})}const c=new(0,i.ComponentContainer)(s);for(const t of p.values())c.addComponent(t);const u=new _(n,r,c);return g.set(s,u),u}function A(t="[DEFAULT]"){const e=g.get(t);if(!e&&t===d&&(0,o.getDefaultAppConfig)())return T();if(!e)throw E.create("no-app",{appName:t});return e}function C(t,e,n){var r;let s=null!==(r=f[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}y(new(0,i.Component)(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="firebase-heartbeat-store";let D=null;function k(){return D||(D=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(I)}}).catch((t=>{throw E.create("idb-open",{originalErrorMessage:t.message})}))),D}async function x(t,e){try{const n=(await k()).transaction(I,"readwrite"),i=n.objectStore(I);await i.put(e,N(t)),await n.done}catch(t){if(t instanceof o.FirebaseError)l.warn(t.message);else{const e=E.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});l.warn(e.message)}}}function N(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new R(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=L();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=L(),{heartbeatsToSend:n,unsentEntries:i}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),P(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),P(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function L(){return(new Date).toISOString().substring(0,10)}class R{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await k();return await e.transaction(I).objectStore(I).get(N(t))}catch(t){if(t instanceof o.FirebaseError)l.warn(t.message);else{const e=E.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});l.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return x(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return x(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function P(t){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;M="",y(new(0,i.Component)("platform-logger",(t=>new c(t)),"PRIVATE")),y(new(0,i.Component)("heartbeat",(t=>new O(t)),"PRIVATE")),C(u,h,M),C(u,h,"esm2017"),C("fire-js","")})),r.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return s})),t(e.exports,"ComponentContainer",(function(){return c}));var i=r("ffjl9");class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new(0,i.Deferred);if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===o?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class c{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}})),r.register("ffjl9",(function(n,i){t(n.exports,"base64urlEncodeWithoutPadding",(function(){return u})),t(n.exports,"getDefaultEmulatorHostnameAndPort",(function(){return f})),t(n.exports,"getDefaultAppConfig",(function(){return g})),t(n.exports,"Deferred",(function(){return p})),t(n.exports,"createMockUserToken",(function(){return m})),t(n.exports,"getUA",(function(){return y})),t(n.exports,"isSafari",(function(){return v})),t(n.exports,"isIndexedDBAvailable",(function(){return w})),t(n.exports,"validateIndexedDBOpenable",(function(){return b})),t(n.exports,"FirebaseError",(function(){return E})),t(n.exports,"ErrorFactory",(function(){return _})),t(n.exports,"deepEqual",(function(){return T})),t(n.exports,"getModularInstance",(function(){return C}));var s=r("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=r>>2,h=(3&r)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),i.push(n[u],n[h],n[l],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw new c;const u=r<<2|s>>4;if(i.push(u),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(t){return function(t){const e=o(t);return a.encodeByteArray(e,!0)}(t).replace(/\./g,"")},h=function(t){try{return a.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,d=()=>{try{return l()||(()=>{if(void 0===s||void 0===s.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&h(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},f=t=>{const e=(t=>{var e,n;return null===(n=null===(e=d())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},g=()=>{var t;return null===(t=d())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function v(){return!function(){var t;const n=null===(t=d())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){try{return"object"==typeof indexedDB}catch(t){return!1}}function b(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(S,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new E(i,o,n)}}const S=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(A(n)&&A(s)){if(!T(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function A(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(t){return t&&t._delegate?t._delegate:t}})),r.register("4TNnu",(function(t,e){var n,i,r=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var c,u=[],h=!1,l=-1;function d(){h&&c&&(h=!1,c.length?u=c.concat(u):l=-1,u.length&&f())}function f(){if(!h){var t=a(d);h=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,h=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function p(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new g(t,e)),1!==u.length||h||a(f)},g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),r.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return r})),t(e.exports,"Logger",(function(){return h})),t(e.exports,"setLogLevel",(function(){return l})),t(e.exports,"setUserLogHandler",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r,s;(s=r||(r={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,c={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=c[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class h{constructor(t){this.name=t,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function l(t){i.forEach((e=>{e.setLogLevel(t)}))}function d(t,e){for(const n of i){let i=null;e&&e.level&&(i=o[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=i?i:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:s,type:e.name})}}}})),r.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return s}));var i=r("ekHjI");i=r("ekHjI");function s(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=(0,i.w)(a);return r&&a.addEventListener("upgradeneeded",(t=>{r((0,i.w)(a.result),t.oldVersion,t.newVersion,(0,i.w)(a.transaction),t)})),n&&a.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),c.then((t=>{o&&t.addEventListener("close",(()=>o())),s&&t.addEventListener("versionchange",(t=>s(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),c}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function u(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(c.get(e))return c.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!o.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return c.set(e,s),s}(0,i.r)((t=>({...t,get:(e,n,i)=>u(e,n)||t.get(e,n,i),has:(e,n)=>!!u(e,n)||t.has(e,n)})))})),r.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return g})),t(e.exports,"r",(function(){return l}));let i,r;const s=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap;let h={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function l(t){h=t(h)}function d(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),g(s.get(this))}:function(...e){return g(t.apply(p(this),e))}:function(e,...n){const i=t.call(p(this),e,...n);return a.set(i,e.sort?e.sort():[e]),g(i)}}function f(t){return"function"==typeof t?d(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));o.set(t,e)}(t),e=t,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,h):t);var e}function g(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(g(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&s.set(e,t)})).catch((()=>{})),u.set(e,t),e}(t);if(c.has(t))return c.get(t);const e=f(t);return e!==t&&(c.set(t,e),u.set(e,t)),e}const p=t=>u.get(t)})),r.register("4bwHs",(function(n,i){t(n.exports,"createWebChannelTransport",(function(){return di})),t(n.exports,"getStatEventTarget",(function(){return fi})),t(n.exports,"ErrorCode",(function(){return gi})),t(n.exports,"EventType",(function(){return pi})),t(n.exports,"Event",(function(){return mi})),t(n.exports,"Stat",(function(){return yi})),t(n.exports,"WebChannel",(function(){return vi})),t(n.exports,"XhrIo",(function(){return wi})),t(n.exports,"Md5",(function(){return bi})),t(n.exports,"Integer",(function(){return Ei}));var r,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o={},a=a||{},c=s||self;function u(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var l="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function p(t,e,n){return(p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:g).apply(null,arguments)}function m(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function v(){this.s=this.s,this.o=this.o}v.prototype.s=!1,v.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,l)&&t[l]||(t[l]=++d))},v.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function b(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function E(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(u(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function _(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};c.addEventListener("test",t,e),c.removeEventListener("test",t,e)}catch(t){}return t}();function T(t){return/^[\s\xa0]*$/.test(t)}function A(){var t=c.navigator;return t&&(t=t.userAgent)?t:""}function C(t){return-1!=A().indexOf(t)}function I(t){return I[" "](t),t}I[" "]=function(){};var D,k,x,N=C("Opera"),O=C("Trident")||C("MSIE"),L=C("Edge"),R=L||O,P=C("Gecko")&&!(-1!=A().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),M=-1!=A().toLowerCase().indexOf("webkit")&&!C("Edge");function F(){var t=c.document;return t?t.documentMode:void 0}t:{var V="",U=(k=A(),P?/rv:([^\);]+)(\)|;)/.exec(k):L?/Edge\/([\d\.]+)/.exec(k):O?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(k):M?/WebKit\/(\S+)/.exec(k):N?/(?:Version)[ \/]?(\S+)/.exec(k):void 0);if(U&&(V=U?U[1]:""),O){var B=F();if(null!=B&&B>parseFloat(V)){D=String(B);break t}}D=V}if(c.document&&O){var j=F();x=j||(parseInt(D,10)||void 0)}else x=void 0;var $=x;function q(t,e){if(_.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(P){t:{try{I(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:K[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&q.$.h.call(this)}}y(q,_);var K={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),W=0;function H(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++W,this.fa=this.ia=!1}function G(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Q(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function X(t){const e={};for(const n in t)e[n]=t[n];return e}const J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<J.length;e++)n=J[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Z(t){this.src=t,this.g={},this.h=0}function tt(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=w(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(G(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function et(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}Z.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=et(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new H(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var nt="closure_lm_"+(1e6*Math.random()|0),it={};function rt(t,e,n,i,r){if(i&&i.once)return ot(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)rt(t,e[s],n,i,r);return null}return n=ft(n),t&&t[z]?t.O(e,n,h(i)?!!i.capture:!!i,r):st(t,e,n,!1,i,r)}function st(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=h(r)?!!r.capture:!!r,a=lt(t);if(a||(t[nt]=a=new Z(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ht;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)S||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(ut(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ot(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ot(t,e[s],n,i,r);return null}return n=ft(n),t&&t[z]?t.P(e,n,h(i)?!!i.capture:!!i,r):st(t,e,n,!0,i,r)}function at(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)at(t,e[s],n,i,r);else i=h(i)?!!i.capture:!!i,n=ft(n),t&&t[z]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=et(s=t.g[e],n,i,r))&&(G(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=lt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=et(e,n,i,r)),(n=-1<t?e[t]:null)&&ct(n))}function ct(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[z])tt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(ut(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=lt(e))?(tt(n,t),0==n.h&&(n.src=null,e[nt]=null)):G(t)}}}function ut(t){return t in it?it[t]:it[t]="on"+t}function ht(t,e){if(t.fa)t=!0;else{e=new q(e,this);var n=t.listener,i=t.la||t.src;t.ia&&ct(t),t=n.call(i,e)}return t}function lt(t){return(t=t[nt])instanceof Z?t:null}var dt="__closure_events_fn_"+(1e9*Math.random()>>>0);function ft(t){return"function"==typeof t?t:(t[dt]||(t[dt]=function(e){return t.handleEvent(e)}),t[dt])}function gt(){v.call(this),this.i=new Z(this),this.S=this,this.J=null}function pt(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new _(e,t);else if(e instanceof _)e.target=e.target||t;else{var r=e;Y(e=new _(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=mt(o,i,!0,e)&&r}if(r=mt(o=e.g=t,i,!0,e)&&r,r=mt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=mt(o=e.g=n[s],i,!1,e)&&r}function mt(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&tt(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}y(gt,v),gt.prototype[z]=!0,gt.prototype.removeEventListener=function(t,e,n,i){at(this,t,e,n,i)},gt.prototype.N=function(){if(gt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)G(n[i]);delete e.g[t],e.h--}}this.J=null},gt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},gt.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var yt=c.JSON.stringify;function vt(){var t=At;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var wt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new bt),(t=>t.reset()));class bt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Et(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _t(t){c.setTimeout((()=>{throw t}),0)}let St,Tt=!1,At=new class{constructor(){this.h=this.g=null}add(t,e){const n=wt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Ct=()=>{const t=c.Promise.resolve(void 0);St=()=>{t.then(It)}};var It=()=>{for(var t;t=vt();){try{t.h.call(t.g)}catch(t){_t(t)}var e=wt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Tt=!1};function Dt(t,e){gt.call(this),this.h=t||1,this.g=e||c,this.j=p(this.qb,this),this.l=Date.now()}function kt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function xt(t,e,n){if("function"==typeof t)n&&(t=p(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=p(t.handleEvent,t)}return 2147483647<Number(e)?-1:c.setTimeout(t,e||0)}function Nt(t){t.g=xt((()=>{t.g=null,t.i&&(t.i=!1,Nt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}y(Dt,gt),(r=Dt.prototype).ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pt(this,"tick"),this.ga&&(kt(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Dt.$.N.call(this),kt(this),delete this.g};class Ot extends v{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Nt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lt(t){v.call(this),this.h=t,this.g={}}y(Lt,v);var Rt=[];function Pt(t,e,n,i){Array.isArray(n)||(n&&(Rt[0]=n.toString()),n=Rt);for(var r=0;r<n.length;r++){var s=rt(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Mt(t){Q(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ct(t)}),t),t.g={}}function Ft(){this.g=!0}function Vt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return yt(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Lt.prototype.N=function(){Lt.$.N.call(this),Mt(this)},Lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ft.prototype.Ea=function(){this.g=!1},Ft.prototype.info=function(){};var Ut={},Bt=null;function jt(){return Bt=Bt||new gt}function $t(t){_.call(this,Ut.Ta,t)}function qt(t){const e=jt();pt(e,new $t(e))}function Kt(t,e){_.call(this,Ut.STAT_EVENT,t),this.stat=e}function zt(t){const e=jt();pt(e,new Kt(e,t))}function Wt(t,e){_.call(this,Ut.Ua,t),this.size=e}function Ht(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){t()}),e)}Ut.Ta="serverreachability",y($t,_),Ut.STAT_EVENT="statevent",y(Kt,_),Ut.Ua="timingevent",y(Wt,_);var Gt={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Qt={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xt(){}function Jt(t){return t.h||(t.h=t.i())}function Yt(){}Xt.prototype.h=null;var Zt,te={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ee(){_.call(this,"d")}function ne(){_.call(this,"c")}function ie(){}function re(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Lt(this),this.P=oe,t=R?125:void 0,this.V=new Dt(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new se}function se(){this.i=null,this.g="",this.h=!1}y(ee,_),y(ne,_),y(ie,Xt),ie.prototype.g=function(){return new XMLHttpRequest},ie.prototype.i=function(){return{}},Zt=new ie;var oe=45e3,ae={},ce={};function ue(t,e,n){t.L=1,t.A=De(Se(e)),t.u=n,t.S=!0,he(t,null)}function he(t,e){t.G=Date.now(),ge(t),t.B=Se(t.A);var n=t.B,i=t.W;Array.isArray(i)||(i=[String(i)]),je(n.i,"t",i),t.o=0,n=t.l.J,t.h=new se,t.g=Bn(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Ot(p(t.Pa,t,t.g),t.O)),Pt(t.U,t.g,"readystatechange",t.nb),e=t.I?X(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),qt(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.v,t.B,t.m,t.W,t.u)}function le(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function de(t,e,n){let i,r=!0;for(;!t.J&&t.o<n.length;){if(i=fe(t,n),i==ce){4==e&&(t.s=4,zt(14),r=!1),Vt(t.j,t.m,null,"[Incomplete Response]");break}if(i==ae){t.s=4,zt(15),Vt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Vt(t.j,t.m,i,null),we(t,i)}le(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,zt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),On(e),e.M=!0,zt(11))):(Vt(t.j,t.m,n,"[Invalid Chunked Response]"),ve(t),ye(t))}function fe(t,e){var n=t.o,i=e.indexOf("\n",n);return-1==i?ce:(n=Number(e.substring(n,i)),isNaN(n)?ae:(i+=1)+n>e.length?ce:(e=e.slice(i,i+n),t.o=i+n,e))}function ge(t){t.Y=Date.now()+t.P,pe(t,t.P)}function pe(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=Ht(p(t.lb,t),e)}function me(t){t.C&&(c.clearTimeout(t.C),t.C=null)}function ye(t){0==t.l.H||t.J||Pn(t.l,t)}function ve(t){me(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,kt(t.V),Mt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function we(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||He(n.i,t)))if(!t.K&&He(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Rn(n),Tn(n)}Nn(n),zt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=Ht(p(n.ib,n),6e3));if(1>=We(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Fn(n,11)}else if((t.K||n.g==t)&&Rn(n),!T(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=u[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ge(s,s.h),s.h=null))}if(i.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,Ie(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((i=n).wa=Un(i,i.J?i.pa:null,i.Y),o.K){Qe(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.C&&(me(a),ge(a)),i.g=o}else xn(i);0<n.j.length&&Cn(n)}else"stop"!=u[0]&&"close"!=u[0]||Fn(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Fn(n,7):Sn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}qt()}catch(t){}}function be(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(u(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(r=re.prototype).setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==yn(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=yn(this.g);var e=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||R||this.g&&(this.h.h||this.g.ja()||vn(this.g)))){this.J||4!=l||7==e||qt(),me(this);var n=this.g.da();this.ca=n;e:if(le(this)){var i=vn(this.g);t="";var r=i.length,s=4==yn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ve(this),ye(this);var o="";break e}this.h.i=new c.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.s=3,zt(12),ve(this),ye(this);break t}Vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,we(this,n)}this.S?(de(this,l,o),R&&this.i&&3==l&&(Pt(this.U,this.V,"tick",this.mb),this.V.start())):(Vt(this.j,this.m,o,null),we(this,o)),4==l&&ve(this),this.i&&!this.J&&(4==l?Pn(this.l,this):(this.i=!1,ge(this)))}else(function(t){const e={};t=(t.g&&2<=yn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(T(t[i]))continue;var n=Et(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),ve(this),ye(this)}}}catch(t){}},r.mb=function(){if(this.g){var t=yn(this.g),e=this.g.ja();this.o<e.length&&(me(this),de(this,t,e),this.i&&4!=t&&ge(this))}},r.cancel=function(){this.J=!0,ve(this)},r.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.B),2!=this.L&&(qt(),zt(17)),ve(this),this.s=2,ye(this)):pe(this,this.Y-t)};var Ee=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _e(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _e){this.h=t.h,Te(this,t.j),this.s=t.s,this.g=t.g,Ae(this,t.m),this.l=t.l;var e=t.i,n=new Fe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ce(this,n),this.o=t.o}else t&&(e=String(t).match(Ee))?(this.h=!1,Te(this,e[1]||"",!0),this.s=ke(e[2]||""),this.g=ke(e[3]||"",!0),Ae(this,e[4]),this.l=ke(e[5]||"",!0),Ce(this,e[6]||"",!0),this.o=ke(e[7]||"")):(this.h=!1,this.i=new Fe(null,this.h))}function Se(t){return new _e(t)}function Te(t,e,n){t.j=n?ke(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ae(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ce(t,e,n){e instanceof Fe?(t.i=e,function(t,e){e&&!t.j&&(Ve(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ue(this,e),je(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=xe(e,Pe)),t.i=new Fe(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function De(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ke(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ne),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ne(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}_e.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xe(e,Oe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(xe(e,Oe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(xe(n,"/"==n.charAt(0)?Re:Le,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",xe(n,Me)),t.join("")};var Oe=/[#\/\?@]/g,Le=/[#\?:]/g,Re=/[#\?]/g,Pe=/[#\?@]/g,Me=/#/g;function Fe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ve(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ue(t,e){Ve(t),e=$e(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Be(t,e){return Ve(t),e=$e(t,e),t.g.has(e)}function je(t,e,n){Ue(t,e),0<n.length&&(t.i=null,t.g.set($e(t,e),b(n)),t.h+=n.length)}function $e(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(r=Fe.prototype).add=function(t,e){Ve(this),this.i=null,t=$e(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){Ve(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},r.ta=function(){Ve(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},r.Z=function(t){Ve(this);let e=[];if("string"==typeof t)Be(this,t)&&(e=e.concat(this.g.get($e(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return Ve(this),this.i=null,Be(this,t=$e(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function qe(t){this.l=t||Ke,c.PerformanceNavigationTiming?t=0<(t=c.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(c.g&&c.g.Ka&&c.g.Ka()&&c.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ke=10;function ze(t){return!!t.h||!!t.g&&t.g.size>=t.j}function We(t){return t.h?1:t.g?t.g.size:0}function He(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ge(t,e){t.g?t.g.add(e):t.h=e}function Qe(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Xe(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return b(t.i)}qe.prototype.cancel=function(){if(this.i=Xe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};function Je(){this.g=new class{stringify(t){return c.JSON.stringify(t,void 0)}parse(t){return c.JSON.parse(t,void 0)}}}function Ye(t,e,n){const i=n||"";try{be(t,(function(t,n){let r=t;h(t)&&(r=yt(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Ze(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function tn(t){this.l=t.ec||null,this.j=t.ob||!1}function en(t,e){gt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}y(tn,Xt),tn.prototype.g=function(){return new en(this.l,this.j)},tn.prototype.i=function(t){return function(){return t}}({}),y(en,gt);var nn=0;function rn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,on(t)}function on(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(r=en.prototype).open=function(t,e){if(this.readyState!=nn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,on(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||c).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,sn(this)),this.readyState=nn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,on(this)),this.g&&(this.readyState=3,on(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==c.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?sn(this):on(this),3==this.readyState&&rn(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,sn(this))},r.Ya=function(t){this.g&&(this.response=t,sn(this))},r.ka=function(){this.g&&sn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(en.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var an=c.JSON.parse;function cn(t){gt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=un,this.L=this.M=!1}y(cn,gt);var un="",hn=/^https?$/i,ln=["POST","PUT"];function dn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fn(t),pn(t)}function fn(t){t.F||(t.F=!0,pt(t,"complete"),pt(t,"error"))}function gn(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=yn(t)||2!=t.da()))if(t.v&&4==yn(t))xt(t.La,0,t);else if(pt(t,"readystatechange"),4==yn(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.I).match(Ee)[1]||null;!r&&c.self&&c.self.location&&(r=c.self.location.protocol.slice(0,-1)),i=!hn.test(r?r.toLowerCase():"")}n=i}if(n)pt(t,"complete"),pt(t,"success");else{t.m=6;try{var s=2<yn(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",fn(t)}}finally{pn(t)}}}function pn(t,e){if(t.g){mn(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||pt(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function mn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(c.clearTimeout(t.A),t.A=null)}function yn(t){return t.g?t.g.readyState:0}function vn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case un:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function wn(t){let e="";return Q(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function bn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=wn(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ie(t,e,n))}function En(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _n(t){this.Ga=0,this.j=[],this.l=new Ft,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=En("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=En("baseRetryDelayMs",5e3,t),this.hb=En("retryDelaySeedMs",1e4,t),this.eb=En("forwardChannelMaxRetries",2,t),this.xa=En("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new qe(t&&t.concurrentRequestLimit),this.Ja=new Je,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Sn(t){if(An(t),3==t.H){var e=t.W++,n=Se(t.I);if(Ie(n,"SID",t.K),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),Dn(t,n),(e=new re(t,t.l,e)).L=2,e.A=De(Se(n)),n=!1,c.navigator&&c.navigator.sendBeacon)try{n=c.navigator.sendBeacon(e.A.toString(),"")}catch(t){}!n&&c.Image&&((new Image).src=e.A,n=!0),n||(e.g=Bn(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ge(e)}Vn(t)}function Tn(t){t.g&&(On(t),t.g.cancel(),t.g=null)}function An(t){Tn(t),t.u&&(c.clearTimeout(t.u),t.u=null),Rn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&c.clearTimeout(t.m),t.m=null)}function Cn(t){if(!ze(t.i)&&!t.m){t.m=!0;var e=t.Na;St||Ct(),Tt||(St(),Tt=!0),At.add(e,t),t.C=0}}function In(t,e){var n;n=e?e.m:t.W++;const i=Se(t.I);Ie(i,"SID",t.K),Ie(i,"RID",n),Ie(i,"AID",t.V),Dn(t,i),t.o&&t.s&&bn(i,t.o,t.s),n=new re(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=kn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ge(t.i,n),ue(n,i,e)}function Dn(t,e){t.na&&Q(t.na,(function(t,n){Ie(e,n,t)})),t.h&&be({},(function(t,n){Ie(e,n,t)}))}function kn(t,e,n){n=Math.min(t.j.length,n);var i=t.h?p(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),s=!1;else try{Ye(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function xn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;St||Ct(),Tt||(St(),Tt=!0),At.add(e,t),t.A=0}}function Nn(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Ht(p(t.Ma,t),Mn(t,t.A)),t.A++,!0)}function On(t){null!=t.B&&(c.clearTimeout(t.B),t.B=null)}function Ln(t){t.g=new re(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Se(t.wa);Ie(e,"RID","rpc"),Ie(e,"SID",t.K),Ie(e,"AID",t.V),Ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ie(e,"TO",t.qa),Ie(e,"TYPE","xmlhttp"),Dn(t,e),t.o&&t.s&&bn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=De(Se(e)),n.u=null,n.S=!0,he(n,t)}function Rn(t){null!=t.v&&(c.clearTimeout(t.v),t.v=null)}function Pn(t,e){var n=null;if(t.g==e){Rn(t),On(t),t.g=null;var i=2}else{if(!He(t.i,e))return;n=e.F,Qe(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;pt(i=jt(),new Wt(i,n)),Cn(t)}else xn(t);else if(3==(r=e.s)||0==r&&0<e.ca||!(1==i&&function(t,e){return!(We(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Ht(p(t.Na,t,e),Mn(t,t.C)),t.C++,0)))}(t,e)||2==i&&Nn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Fn(t,5);break;case 4:Fn(t,10);break;case 3:Fn(t,6);break;default:Fn(t,2)}}function Mn(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Fn(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=p(t.pb,t);n||(n=new _e("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Te(n,"https"),De(n)),function(t,e){const n=new Ft;if(c.Image){const i=new Image;i.onload=m(Ze,n,i,"TestLoadImage: loaded",!0,e),i.onerror=m(Ze,n,i,"TestLoadImage: error",!1,e),i.onabort=m(Ze,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=m(Ze,n,i,"TestLoadImage: timeout",!1,e),c.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else zt(2);t.H=0,t.h&&t.h.za(e),Vn(t),An(t)}function Vn(t){if(t.H=0,t.ma=[],t.h){const e=Xe(t.i);0==e.length&&0==t.j.length||(E(t.ma,e),E(t.ma,t.j),t.i.i.length=0,b(t.j),t.j.length=0),t.h.ya()}}function Un(t,e,n){var i=n instanceof _e?Se(n):new _e(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Ae(i,i.m);else{var r=c.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new _e(null);i&&Te(s,i),e&&(s.g=e),r&&Ae(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&Ie(i,n,e),Ie(i,"VER",t.ra),Dn(t,i),i}function Bn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ha&&!t.va?new cn(new tn({ob:n})):new cn(t.va)).Oa(t.J),e}function jn(){}function $n(){if(O&&!(10<=Number($)))throw Error("Environmental error: no available transport.")}function qn(t,e){gt.call(this),this.g=new _n(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!T(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!T(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Wn(this)}function Kn(t){ee.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function zn(){ne.call(this),this.status=1}function Wn(t){this.g=t}function Hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Gn(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function Qn(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(r=cn.prototype).Oa=function(t){this.M=t},r.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Zt.g(),this.C=this.u?Jt(this.u):Jt(Zt),this.g.onreadystatechange=p(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void dn(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=c.FormData&&t instanceof c.FormData,!(0<=w(ln,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{mn(this),0<this.B&&((this.L=function(t){return O&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=p(this.ua,this)):this.A=xt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){dn(this,t)}},r.ua=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pt(this,"complete"),pt(this,"abort"),pn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pn(this,!0)),cn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?gn(this):this.kb())},r.kb=function(){gn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<yn(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),an(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=_n.prototype).ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new re(this,this.l,t);let s=this.s;if(this.U&&(s?(s=X(s),Y(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=kn(this,r,e),Ie(n=Se(this.I),"RID",t),Ie(n,"CVER",22),this.F&&Ie(n,"X-HTTP-Session-Id",this.F),Dn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(wn(s)))+"&"+e:this.o&&bn(n,this.o,s)),Ge(this.i,r),this.bb&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",e),Ie(n,"SID","null"),r.aa=!0,ue(r,n,null)):ue(r,n,e),this.H=2}}else 3==this.H&&(t?In(this,t):0==this.j.length||ze(this.i)||In(this))},r.Ma=function(){if(this.u=null,Ln(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ht(p(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,zt(10),Tn(this),Ln(this))},r.ib=function(){null!=this.v&&(this.v=null,Tn(this),Nn(this),zt(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),zt(2)):(this.l.info("Failed to ping google.com"),zt(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},(r=jn.prototype).Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},$n.prototype.g=function(t,e){return new qn(t,e)},y(qn,gt),qn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;zt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Un(t,null,t.Y),Cn(t)},qn.prototype.close=function(){Sn(this.g)},qn.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=yt(t),t=n);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&Cn(e)},qn.prototype.N=function(){this.g.h=null,delete this.j,Sn(this.g),delete this.g,qn.$.N.call(this)},y(Kn,ee),y(zn,ne),y(Wn,jn),Wn.prototype.Ba=function(){pt(this.g,"a")},Wn.prototype.Aa=function(t){pt(this.g,new Kn(t))},Wn.prototype.za=function(t){pt(this.g,new zn)},Wn.prototype.ya=function(){pt(this.g,"b")},y(Hn,(function(){this.blockSize=-1})),Hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Hn.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)Gn(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Gn(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Gn(this,i),r=0;break}}this.h=r,this.i+=e},Hn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var Xn={};function Jn(t){return-128<=t&&128>t?function(t,e){var n=Xn;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new Qn([0|t],0>t?-1:0)})):new Qn([0|t],0>t?-1:0)}function Yn(t){if(isNaN(t)||!isFinite(t))return ti;if(0>t)return si(Yn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Zn;return new Qn(e,0)}var Zn=4294967296,ti=Jn(0),ei=Jn(1),ni=Jn(16777216);function ii(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function ri(t){return-1==t.h}function si(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new Qn(n,~t.h).add(ei)}function oi(t,e){return t.add(si(e))}function ai(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ci(t,e){this.g=t,this.h=e}function ui(t,e){if(ii(e))throw Error("division by zero");if(ii(t))return new ci(ti,ti);if(ri(t))return e=ui(si(t),e),new ci(si(e.g),si(e.h));if(ri(e))return e=ui(t,si(e)),new ci(si(e.g),e.h);if(30<t.g.length){if(ri(t)||ri(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ei,i=e;0>=i.X(t);)n=hi(n),i=hi(i);var r=li(n,1),s=li(i,1);for(i=li(i,2),n=li(n,2);!ii(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=li(i,1),n=li(n,1)}return e=oi(t,r.R(e)),new ci(r,e)}for(r=ti;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(s=Yn(n)).R(e);ri(o)||0<o.X(t);)o=(s=Yn(n-=i)).R(e);ii(s)&&(s=ei),r=r.add(s),t=oi(t,o)}return new ci(r,t)}function hi(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new Qn(n,t.h)}function li(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Qn(r,t.h)}(r=Qn.prototype).ea=function(){if(ri(this))return-si(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Zn+i)*e,e*=Zn}return t},r.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(ii(this))return"0";if(ri(this))return"-"+si(this).toString(t);for(var e=Yn(Math.pow(t,6)),n=this,i="";;){var r=ui(n,e).g,s=((0<(n=oi(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(ii(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return ri(t=oi(this,t))?-1:ii(t)?0:1},r.abs=function(){return ri(this)?si(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new Qn(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(ii(this)||ii(t))return ti;if(ri(this))return ri(t)?si(this).R(si(t)):si(si(this).R(t));if(ri(t))return si(this.R(si(t)));if(0>this.X(ni)&&0>t.X(ni))return Yn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,c=65535&t.D(r);n[2*i+2*r]+=o*c,ai(n,2*i+2*r),n[2*i+2*r+1]+=s*c,ai(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,ai(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,ai(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new Qn(n,0)},r.gb=function(t){return ui(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new Qn(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new Qn(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new Qn(n,this.h^t.h)},$n.prototype.createWebChannel=$n.prototype.g,qn.prototype.send=qn.prototype.u,qn.prototype.open=qn.prototype.m,qn.prototype.close=qn.prototype.close,Gt.NO_ERROR=0,Gt.TIMEOUT=8,Gt.HTTP_ERROR=6,Qt.COMPLETE="complete",Yt.EventType=te,te.OPEN="a",te.CLOSE="b",te.ERROR="c",te.MESSAGE="d",gt.prototype.listen=gt.prototype.O,cn.prototype.listenOnce=cn.prototype.P,cn.prototype.getLastError=cn.prototype.Sa,cn.prototype.getLastErrorCode=cn.prototype.Ia,cn.prototype.getStatus=cn.prototype.da,cn.prototype.getResponseJson=cn.prototype.Wa,cn.prototype.getResponseText=cn.prototype.ja,cn.prototype.send=cn.prototype.ha,cn.prototype.setWithCredentials=cn.prototype.Oa,Hn.prototype.digest=Hn.prototype.l,Hn.prototype.reset=Hn.prototype.reset,Hn.prototype.update=Hn.prototype.j,Qn.prototype.add=Qn.prototype.add,Qn.prototype.multiply=Qn.prototype.R,Qn.prototype.modulo=Qn.prototype.gb,Qn.prototype.compare=Qn.prototype.X,Qn.prototype.toNumber=Qn.prototype.ea,Qn.prototype.toString=Qn.prototype.toString,Qn.prototype.getBits=Qn.prototype.D,Qn.fromNumber=Yn,Qn.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return si(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=Yn(Math.pow(n,8)),r=ti,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=Yn(Math.pow(n,o)),r=r.R(o).add(Yn(a))):r=(r=r.R(i)).add(Yn(a))}return r};var di=o.createWebChannelTransport=function(){return new $n},fi=o.getStatEventTarget=function(){return jt()},gi=o.ErrorCode=Gt,pi=o.EventType=Qt,mi=o.Event=Ut,yi=o.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},vi=(o.FetchXmlHttpFactory=tn,o.WebChannel=Yt),wi=o.XhrIo=cn,bi=o.Md5=Hn,Ei=o.Integer=Qn})),r.register("9FYXe",(function(e,n){t(e.exports,"app",(function(){return i})),r("gKkQl");const i=(0,r("ix4Jr").initializeApp)({apiKey:"AIzaSyAKYrF2YoqGKSaSU407C9X91DqaZMAg4q4",authDomain:"filmoteka-urraccon.firebaseapp.com",projectId:"filmoteka-urraccon",storageBucket:"filmoteka-urraccon.appspot.com",messagingSenderId:"712511464775",appId:"1:712511464775:web:f28be5eb7fc38469c69862"})})),r.register("gKkQl",(function(e,n){t(e.exports,"initializeApp",(function(){return r("ix4Jr").initializeApp})),t(e.exports,"registerVersion",(function(){return r("ix4Jr").registerVersion}));r("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r("ix4Jr").registerVersion)("firebase","10.7.1","app")})),r.register("l9sJR",(function(t,e){
/**
 *
 * @revision    $Id: index.js 2012-03-24 16:21:10 Aleksey $
 * @created     2016-09-24 16:21:10
 * @category    Express Helpers
 * @package     device-uuid
 * @version     1.0.2
 * @copyright   Copyright (c) 2016-2017 - All rights reserved.
 * @license     MIT License
 * @author      Alexey Gordeyev IK <aleksej@gordejev.lv>
 * @link        http://www.gordejev.lv
 *
 */
t.exports=r("gqRwb")})),r.register("gqRwb",(function(t,e){
/*!
 * device-uuid.js v1.0.4 (https://github.com/biggora/device-uuid/)
 * Copyright 2016-2017 Alexey Gordeyev
 * Licensed under MIT (https://github.com/biggora/device-uuid/blob/master/LICENSE)
 */
!function(t){var e=new RegExp("^.*("+["\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/","googlebot","baiduspider","gurujibot","yandexbot","slurp","msnbot","bingbot","facebookexternalhit","linkedinbot","twitterbot","slackbot","telegrambot","applebot","pingdom","tumblr ","Embedly","spbot"].join("|")+").*$"),n=function(t){t=t||{};var i={version:!1,language:!1,platform:!0,os:!0,pixelDepth:!0,colorDepth:!0,resolution:!1,isAuthoritative:!0,silkAccelerated:!0,isKindleFire:!0,isDesktop:!0,isMobile:!0,isTablet:!0,isWindows:!0,isLinux:!0,isLinux64:!0,isChromeOS:!0,isMac:!0,isiPad:!0,isiPhone:!0,isiPod:!0,isAndroid:!0,isSamsung:!0,isSmartTV:!0,isRaspberry:!0,isBlackberry:!0,isTouchScreen:!0,isOpera:!1,isIE:!1,isEdge:!1,isIECompatibilityMode:!1,isSafari:!1,isFirefox:!1,isWebkit:!1,isChrome:!1,isKonqueror:!1,isOmniWeb:!1,isSeaMonkey:!1,isFlock:!1,isAmaya:!1,isPhantomJS:!1,isEpiphany:!1,source:!1,cpuCores:!1};for(var r in t)t.hasOwnProperty(r)&&void 0!==i[r]&&(i[r]=t[r]);return this.options=i,this.version="1.0.0",this._Versions={Edge:/Edge\/([\d\w\.\-]+)/i,Firefox:/firefox\/([\d\w\.\-]+)/i,IE:/msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,Chrome:/chrome\/([\d\w\.\-]+)/i,Chromium:/(?:chromium|crios)\/([\d\w\.\-]+)/i,Safari:/version\/([\d\w\.\-]+)/i,Opera:/version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i,Ps3:/([\d\w\.\-]+)\)\s*$/i,Psp:/([\d\w\.\-]+)\)?\s*$/i,Amaya:/amaya\/([\d\w\.\-]+)/i,SeaMonkey:/seamonkey\/([\d\w\.\-]+)/i,OmniWeb:/omniweb\/v([\d\w\.\-]+)/i,Flock:/flock\/([\d\w\.\-]+)/i,Epiphany:/epiphany\/([\d\w\.\-]+)/i,WinJs:/msapphost\/([\d\w\.\-]+)/i,PhantomJS:/phantomjs\/([\d\w\.\-]+)/i,UC:/UCBrowser\/([\d\w\.]+)/i},this._Browsers={Edge:/edge/i,Amaya:/amaya/i,Konqueror:/konqueror/i,Epiphany:/epiphany/i,SeaMonkey:/seamonkey/i,Flock:/flock/i,OmniWeb:/omniweb/i,Chromium:/chromium|crios/i,Chrome:/chrome/i,Safari:/safari/i,IE:/msie|trident/i,Opera:/opera|OPR/i,PS3:/playstation 3/i,PSP:/playstation portable/i,Firefox:/firefox/i,WinJs:/msapphost/i,PhantomJS:/phantomjs/i,UC:/UCBrowser/i},this._OS={Windows10:/windows nt 10\.0/i,Windows81:/windows nt 6\.3/i,Windows8:/windows nt 6\.2/i,Windows7:/windows nt 6\.1/i,UnknownWindows:/windows nt 6\.\d+/i,WindowsVista:/windows nt 6\.0/i,Windows2003:/windows nt 5\.2/i,WindowsXP:/windows nt 5\.1/i,Windows2000:/windows nt 5\.0/i,WindowsPhone8:/windows phone 8\./,OSXCheetah:/os x 10[._]0/i,OSXPuma:/os x 10[._]1(\D|$)/i,OSXJaguar:/os x 10[._]2/i,OSXPanther:/os x 10[._]3/i,OSXTiger:/os x 10[._]4/i,OSXLeopard:/os x 10[._]5/i,OSXSnowLeopard:/os x 10[._]6/i,OSXLion:/os x 10[._]7/i,OSXMountainLion:/os x 10[._]8/i,OSXMavericks:/os x 10[._]9/i,OSXYosemite:/os x 10[._]10/i,OSXElCapitan:/os x 10[._]11/i,OSXSierra:/os x 10[._]12/i,Mac:/os x/i,Linux:/linux/i,Linux64:/linux x86_64/i,ChromeOS:/cros/i,Wii:/wii/i,PS3:/playstation 3/i,PSP:/playstation portable/i,iPad:/\(iPad.*os (\d+)[._](\d+)/i,iPhone:/\(iPhone.*os (\d+)[._](\d+)/i,Bada:/Bada\/(\d+)\.(\d+)/i,Curl:/curl\/(\d+)\.(\d+)\.(\d+)/i},this._Platform={Windows:/windows nt/i,WindowsPhone:/windows phone/i,Mac:/macintosh/i,Linux:/linux/i,Wii:/wii/i,Playstation:/playstation/i,iPad:/ipad/i,iPod:/ipod/i,iPhone:/iphone/i,Android:/android/i,Blackberry:/blackberry/i,Samsung:/samsung/i,Curl:/curl/i},this.DefaultAgent={isAuthoritative:!0,isMobile:!1,isTablet:!1,isiPad:!1,isiPod:!1,isiPhone:!1,isAndroid:!1,isBlackberry:!1,isOpera:!1,isIE:!1,isEdge:!1,isIECompatibilityMode:!1,isSafari:!1,isFirefox:!1,isWebkit:!1,isChrome:!1,isKonqueror:!1,isOmniWeb:!1,isSeaMonkey:!1,isFlock:!1,isAmaya:!1,isPhantomJS:!1,isEpiphany:!1,isDesktop:!1,isWindows:!1,isLinux:!1,isLinux64:!1,isMac:!1,isChromeOS:!1,isBada:!1,isSamsung:!1,isRaspberry:!1,isBot:!1,isCurl:!1,isAndroidTablet:!1,isWinJs:!1,isKindleFire:!1,isSilk:!1,isCaptive:!1,isSmartTV:!1,isUC:!1,isTouchScreen:!1,silkAccelerated:!1,colorDepth:-1,pixelDepth:-1,resolution:[],cpuCores:-1,language:"unknown",browser:"unknown",version:"unknown",os:"unknown",platform:"unknown",geoIp:{},source:"",hashInt:function(t){var e,n,i=0;if(0===t.length)return i;for(e=0,n=t.length;e<n;e++)i=(i<<5)-i+t.charCodeAt(e),i|=0;return i},hashMD5:function(t){function e(t,e){return t<<e|t>>>32-e}function n(t,e){var n,i,r,s,o;return r=2147483648&t,s=2147483648&e,o=(1073741823&t)+(1073741823&e),(n=1073741824&t)&(i=1073741824&e)?2147483648^o^r^s:n|i?1073741824&o?3221225472^o^r^s:1073741824^o^r^s:o^r^s}function i(t,i,r,s,o,a,c){return t=n(t,n(n(function(t,e,n){return t&e|~t&n}(i,r,s),o),c)),n(e(t,a),i)}function r(t,i,r,s,o,a,c){return t=n(t,n(n(function(t,e,n){return t&n|e&~n}(i,r,s),o),c)),n(e(t,a),i)}function s(t,i,r,s,o,a,c){return t=n(t,n(n(function(t,e,n){return t^e^n}(i,r,s),o),c)),n(e(t,a),i)}function o(t,i,r,s,o,a,c){return t=n(t,n(n(function(t,e,n){return e^(t|~n)}(i,r,s),o),c)),n(e(t,a),i)}function a(t){var e,n="",i="";for(e=0;e<=3;e++)n+=(i="0"+(t>>>8*e&255).toString(16)).substr(i.length-2,2);return n}var c,u,h,l,d,f,g,p,m,y;for(c=function(t){for(var e,n=t.length,i=n+8,r=16*((i-i%64)/64+1),s=new Array(r-1),o=0,a=0;a<n;)o=a%4*8,s[e=(a-a%4)/4]=s[e]|t.charCodeAt(a)<<o,a++;return o=a%4*8,s[e=(a-a%4)/4]=s[e]|128<<o,s[r-2]=n<<3,s[r-1]=n>>>29,s}(t=function(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;n<t.length;n++){var i=t.charCodeAt(n);i<128?e+=String.fromCharCode(i):i>127&&i<2048?(e+=String.fromCharCode(i>>6|192),e+=String.fromCharCode(63&i|128)):(e+=String.fromCharCode(i>>12|224),e+=String.fromCharCode(i>>6&63|128),e+=String.fromCharCode(63&i|128))}return e}(t)),g=1732584193,p=4023233417,m=2562383102,y=271733878,u=0;u<c.length;u+=16)h=g,l=p,d=m,f=y,g=i(g,p,m,y,c[u+0],7,3614090360),y=i(y,g,p,m,c[u+1],12,3905402710),m=i(m,y,g,p,c[u+2],17,606105819),p=i(p,m,y,g,c[u+3],22,3250441966),g=i(g,p,m,y,c[u+4],7,4118548399),y=i(y,g,p,m,c[u+5],12,1200080426),m=i(m,y,g,p,c[u+6],17,2821735955),p=i(p,m,y,g,c[u+7],22,4249261313),g=i(g,p,m,y,c[u+8],7,1770035416),y=i(y,g,p,m,c[u+9],12,2336552879),m=i(m,y,g,p,c[u+10],17,4294925233),p=i(p,m,y,g,c[u+11],22,2304563134),g=i(g,p,m,y,c[u+12],7,1804603682),y=i(y,g,p,m,c[u+13],12,4254626195),m=i(m,y,g,p,c[u+14],17,2792965006),g=r(g,p=i(p,m,y,g,c[u+15],22,1236535329),m,y,c[u+1],5,4129170786),y=r(y,g,p,m,c[u+6],9,3225465664),m=r(m,y,g,p,c[u+11],14,643717713),p=r(p,m,y,g,c[u+0],20,3921069994),g=r(g,p,m,y,c[u+5],5,3593408605),y=r(y,g,p,m,c[u+10],9,38016083),m=r(m,y,g,p,c[u+15],14,3634488961),p=r(p,m,y,g,c[u+4],20,3889429448),g=r(g,p,m,y,c[u+9],5,568446438),y=r(y,g,p,m,c[u+14],9,3275163606),m=r(m,y,g,p,c[u+3],14,4107603335),p=r(p,m,y,g,c[u+8],20,1163531501),g=r(g,p,m,y,c[u+13],5,2850285829),y=r(y,g,p,m,c[u+2],9,4243563512),m=r(m,y,g,p,c[u+7],14,1735328473),g=s(g,p=r(p,m,y,g,c[u+12],20,2368359562),m,y,c[u+5],4,4294588738),y=s(y,g,p,m,c[u+8],11,2272392833),m=s(m,y,g,p,c[u+11],16,1839030562),p=s(p,m,y,g,c[u+14],23,4259657740),g=s(g,p,m,y,c[u+1],4,2763975236),y=s(y,g,p,m,c[u+4],11,1272893353),m=s(m,y,g,p,c[u+7],16,4139469664),p=s(p,m,y,g,c[u+10],23,3200236656),g=s(g,p,m,y,c[u+13],4,681279174),y=s(y,g,p,m,c[u+0],11,3936430074),m=s(m,y,g,p,c[u+3],16,3572445317),p=s(p,m,y,g,c[u+6],23,76029189),g=s(g,p,m,y,c[u+9],4,3654602809),y=s(y,g,p,m,c[u+12],11,3873151461),m=s(m,y,g,p,c[u+15],16,530742520),g=o(g,p=s(p,m,y,g,c[u+2],23,3299628645),m,y,c[u+0],6,4096336452),y=o(y,g,p,m,c[u+7],10,1126891415),m=o(m,y,g,p,c[u+14],15,2878612391),p=o(p,m,y,g,c[u+5],21,4237533241),g=o(g,p,m,y,c[u+12],6,1700485571),y=o(y,g,p,m,c[u+3],10,2399980690),m=o(m,y,g,p,c[u+10],15,4293915773),p=o(p,m,y,g,c[u+1],21,2240044497),g=o(g,p,m,y,c[u+8],6,1873313359),y=o(y,g,p,m,c[u+15],10,4264355552),m=o(m,y,g,p,c[u+6],15,2734768916),p=o(p,m,y,g,c[u+13],21,1309151649),g=o(g,p,m,y,c[u+4],6,4149444226),y=o(y,g,p,m,c[u+11],10,3174756917),m=o(m,y,g,p,c[u+2],15,718787259),p=o(p,m,y,g,c[u+9],21,3951481745),g=n(g,h),p=n(p,l),m=n(m,d),y=n(y,f);return(a(g)+a(p)+a(m)+a(y)).toLowerCase()}},this.Agent={},this.getBrowser=function(t){switch(!0){case this._Browsers.Edge.test(t):return this.Agent.isEdge=!0,"Edge";case this._Browsers.PhantomJS.test(t):return this.Agent.isPhantomJS=!0,"PhantomJS";case this._Browsers.Konqueror.test(t):return this.Agent.isKonqueror=!0,"Konqueror";case this._Browsers.Amaya.test(t):return this.Agent.isAmaya=!0,"Amaya";case this._Browsers.Epiphany.test(t):return this.Agent.isEpiphany=!0,"Epiphany";case this._Browsers.SeaMonkey.test(t):return this.Agent.isSeaMonkey=!0,"SeaMonkey";case this._Browsers.Flock.test(t):return this.Agent.isFlock=!0,"Flock";case this._Browsers.OmniWeb.test(t):return this.Agent.isOmniWeb=!0,"OmniWeb";case this._Browsers.Opera.test(t):return this.Agent.isOpera=!0,"Opera";case this._Browsers.Chromium.test(t):return this.Agent.isChrome=!0,"Chromium";case this._Browsers.Chrome.test(t):return this.Agent.isChrome=!0,"Chrome";case this._Browsers.Safari.test(t):return this.Agent.isSafari=!0,"Safari";case this._Browsers.WinJs.test(t):return this.Agent.isWinJs=!0,"WinJs";case this._Browsers.IE.test(t):return this.Agent.isIE=!0,"IE";case this._Browsers.PS3.test(t):return"ps3";case this._Browsers.PSP.test(t):return"psp";case this._Browsers.Firefox.test(t):return this.Agent.isFirefox=!0,"Firefox";case this._Browsers.UC.test(t):return this.Agent.isUC=!0,"UCBrowser";default:return 0!==t.indexOf("Mozilla")&&/^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(t)?(this.Agent.isAuthoritative=!1,RegExp.$1):"unknown"}},this.getBrowserVersion=function(t){switch(this.Agent.browser){case"Edge":if(this._Versions.Edge.test(t))return RegExp.$1;break;case"PhantomJS":if(this._Versions.PhantomJS.test(t))return RegExp.$1;break;case"Chrome":if(this._Versions.Chrome.test(t))return RegExp.$1;break;case"Chromium":if(this._Versions.Chromium.test(t))return RegExp.$1;break;case"Safari":if(this._Versions.Safari.test(t))return RegExp.$1;break;case"Opera":if(this._Versions.Opera.test(t))return RegExp.$1?RegExp.$1:RegExp.$2;break;case"Firefox":if(this._Versions.Firefox.test(t))return RegExp.$1;break;case"WinJs":if(this._Versions.WinJs.test(t))return RegExp.$1;break;case"IE":if(this._Versions.IE.test(t))return RegExp.$2?RegExp.$2:RegExp.$1;break;case"ps3":if(this._Versions.Ps3.test(t))return RegExp.$1;break;case"psp":if(this._Versions.Psp.test(t))return RegExp.$1;break;case"Amaya":if(this._Versions.Amaya.test(t))return RegExp.$1;break;case"Epiphany":if(this._Versions.Epiphany.test(t))return RegExp.$1;break;case"SeaMonkey":if(this._Versions.SeaMonkey.test(t))return RegExp.$1;break;case"Flock":if(this._Versions.Flock.test(t))return RegExp.$1;break;case"OmniWeb":if(this._Versions.OmniWeb.test(t))return RegExp.$1;break;case"UCBrowser":if(this._Versions.UC.test(t))return RegExp.$1;break;default:if("unknown"!==this.Agent.browser&&new RegExp(this.Agent.browser+"[\\/ ]([\\d\\w\\.\\-]+)","i").test(t))return RegExp.$1}},this.getOS=function(t){switch(!0){case this._OS.WindowsVista.test(t):return this.Agent.isWindows=!0,"Windows Vista";case this._OS.Windows7.test(t):return this.Agent.isWindows=!0,"Windows 7";case this._OS.Windows8.test(t):return this.Agent.isWindows=!0,"Windows 8";case this._OS.Windows81.test(t):return this.Agent.isWindows=!0,"Windows 8.1";case this._OS.Windows10.test(t):return this.Agent.isWindows=!0,"Windows 10.0";case this._OS.Windows2003.test(t):return this.Agent.isWindows=!0,"Windows 2003";case this._OS.WindowsXP.test(t):return this.Agent.isWindows=!0,"Windows XP";case this._OS.Windows2000.test(t):return this.Agent.isWindows=!0,"Windows 2000";case this._OS.WindowsPhone8.test(t):return"Windows Phone 8";case this._OS.Linux64.test(t):return this.Agent.isLinux=!0,this.Agent.isLinux64=!0,"Linux 64";case this._OS.Linux.test(t):return this.Agent.isLinux=!0,"Linux";case this._OS.ChromeOS.test(t):return this.Agent.isChromeOS=!0,"Chrome OS";case this._OS.Wii.test(t):return"Wii";case this._OS.PS3.test(t):case this._OS.PSP.test(t):return"Playstation";case this._OS.OSXCheetah.test(t):return this.Agent.isMac=!0,"OS X Cheetah";case this._OS.OSXPuma.test(t):return this.Agent.isMac=!0,"OS X Puma";case this._OS.OSXJaguar.test(t):return this.Agent.isMac=!0,"OS X Jaguar";case this._OS.OSXPanther.test(t):return this.Agent.isMac=!0,"OS X Panther";case this._OS.OSXTiger.test(t):return this.Agent.isMac=!0,"OS X Tiger";case this._OS.OSXLeopard.test(t):return this.Agent.isMac=!0,"OS X Leopard";case this._OS.OSXSnowLeopard.test(t):return this.Agent.isMac=!0,"OS X Snow Leopard";case this._OS.OSXLion.test(t):return this.Agent.isMac=!0,"OS X Lion";case this._OS.OSXMountainLion.test(t):return this.Agent.isMac=!0,"OS X Mountain Lion";case this._OS.OSXMavericks.test(t):return this.Agent.isMac=!0,"OS X Mavericks";case this._OS.OSXYosemite.test(t):return this.Agent.isMac=!0,"OS X Yosemite";case this._OS.OSXElCapitan.test(t):return this.Agent.isMac=!0,"OS X El Capitan";case this._OS.OSXSierra.test(t):return this.Agent.isMac=!0,"macOS Sierra";case this._OS.Mac.test(t):return this.Agent.isMac=!0,"OS X";case this._OS.iPad.test(t):return this.Agent.isiPad=!0,t.match(this._OS.iPad)[0].replace("_",".");case this._OS.iPhone.test(t):return this.Agent.isiPhone=!0,t.match(this._OS.iPhone)[0].replace("_",".");case this._OS.Bada.test(t):return this.Agent.isBada=!0,"Bada";case this._OS.Curl.test(t):return this.Agent.isCurl=!0,"Curl";default:return"unknown"}},this.getPlatform=function(t){switch(!0){case this._Platform.Windows.test(t):return"Microsoft Windows";case this._Platform.WindowsPhone.test(t):return this.Agent.isWindowsPhone=!0,"Microsoft Windows Phone";case this._Platform.Mac.test(t):return"Apple Mac";case this._Platform.Curl.test(t):return"Curl";case this._Platform.Android.test(t):return this.Agent.isAndroid=!0,"Android";case this._Platform.Blackberry.test(t):return this.Agent.isBlackberry=!0,"Blackberry";case this._Platform.Linux.test(t):return"Linux";case this._Platform.Wii.test(t):return"Wii";case this._Platform.Playstation.test(t):return"Playstation";case this._Platform.iPad.test(t):return this.Agent.isiPad=!0,"iPad";case this._Platform.iPod.test(t):return this.Agent.isiPod=!0,"iPod";case this._Platform.iPhone.test(t):return this.Agent.isiPhone=!0,"iPhone";case this._Platform.Samsung.test(t):return this.Agent.isiSamsung=!0,"Samsung";default:return"unknown"}},this.testCompatibilityMode=function(){var t=this;if(this.Agent.isIE&&/Trident\/(\d)\.0/i.test(t.Agent.source)){var e=parseInt(RegExp.$1,10),n=parseInt(t.Agent.version,10);7===n&&7===e&&(t.Agent.isIECompatibilityMode=!0,t.Agent.version=11),7===n&&6===e&&(t.Agent.isIECompatibilityMode=!0,t.Agent.version=10),7===n&&5===e&&(t.Agent.isIECompatibilityMode=!0,t.Agent.version=9),7===n&&4===e&&(t.Agent.isIECompatibilityMode=!0,t.Agent.version=8)}},this.testSilk=function(){if(!0===new RegExp("silk","gi").test(this.Agent.source))this.Agent.isSilk=!0;return/Silk-Accelerated=true/gi.test(this.Agent.source)&&(this.Agent.SilkAccelerated=!0),!!this.Agent.isSilk&&"Silk"},this.testKindleFire=function(){var t=this;switch(!0){case/KFOT/gi.test(t.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire";case/KFTT/gi.test(t.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HD";case/KFJWI/gi.test(t.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HD 8.9";case/KFJWA/gi.test(t.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HD 8.9 4G";case/KFSOWI/gi.test(t.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HD 7";case/KFTHWI/gi.test(t.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HDX 7";case/KFTHWA/gi.test(t.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HDX 7 4G";case/KFAPWI/gi.test(t.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HDX 8.9";case/KFAPWA/gi.test(t.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HDX 8.9 4G";default:return!1}},this.testCaptiveNetwork=function(){var t=this;return!0===/CaptiveNetwork/gi.test(t.Agent.source)&&(t.Agent.isCaptive=!0,t.Agent.isMac=!0,t.Agent.platform="Apple Mac","CaptiveNetwork")},this.testMobile=function(){var t=this;switch(!0){case t.Agent.isWindows:case t.Agent.isLinux:case t.Agent.isMac:case t.Agent.isChromeOS:t.Agent.isDesktop=!0;break;case t.Agent.isAndroid:case t.Agent.isSamsung:t.Agent.isMobile=!0,t.Agent.isDesktop=!1}switch(!0){case t.Agent.isiPad:case t.Agent.isiPod:case t.Agent.isiPhone:case t.Agent.isBada:case t.Agent.isBlackberry:case t.Agent.isAndroid:case t.Agent.isWindowsPhone:t.Agent.isMobile=!0,t.Agent.isDesktop=!1}/mobile/i.test(t.Agent.source)&&(t.Agent.isMobile=!0,t.Agent.isDesktop=!1)},this.testTablet=function(){var t=this;switch(!0){case t.Agent.isiPad:case t.Agent.isAndroidTablet:case t.Agent.isKindleFire:t.Agent.isTablet=!0}/tablet/i.test(t.Agent.source)&&(t.Agent.isTablet=!0)},this.testNginxGeoIP=function(t){var e=this;Object.keys(t).forEach((function(n){/^GEOIP/i.test(n)&&(e.Agent.geoIp[n]=t[n])}))},this.testBot=function(){var t=this,n=e.exec(t.Agent.source.toLowerCase());n?t.Agent.isBot=n[1]:t.Agent.isAuthoritative||(t.Agent.isBot=/bot/i.test(t.Agent.source))},this.testSmartTV=function(){var t=new RegExp("smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv","gi").exec(this.Agent.source.toLowerCase());t&&(this.Agent.isSmartTV=t[1])},this.testAndroidTablet=function(){var t=this;t.Agent.isAndroid&&!/mobile/i.test(t.Agent.source)&&(t.Agent.isAndroidTablet=!0)},this.testTouchSupport=function(){this.Agent.isTouchScreen="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},this.getLaguage=function(){this.Agent.language=(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||"").toLowerCase()},this.getColorDepth=function(){this.Agent.colorDepth=screen.colorDepth||-1},this.getScreenResolution=function(){this.Agent.resolution=[screen.availWidth,screen.availHeight]},this.getPixelDepth=function(){this.Agent.pixelDepth=screen.pixelDepth||-1},this.getCPU=function(){this.Agent.cpuCores=navigator.hardwareConcurrency||-1},this.reset=function(){var t=this;for(var e in t.DefaultAgent)t.DefaultAgent.hasOwnProperty(e)&&(t.Agent[e]=t.DefaultAgent[e]);return t},this.parse=function(t){t=t||navigator.userAgent;var e=new n;return e.Agent.source=t.replace(/^\s*/,"").replace(/\s*$/,""),e.Agent.os=e.getOS(e.Agent.source),e.Agent.platform=e.getPlatform(e.Agent.source),e.Agent.browser=e.getBrowser(e.Agent.source),e.Agent.version=e.getBrowserVersion(e.Agent.source),e.testBot(),e.testSmartTV(),e.testMobile(),e.testAndroidTablet(),e.testTablet(),e.testCompatibilityMode(),e.testSilk(),e.testKindleFire(),e.testCaptiveNetwork(),e.testTouchSupport(),e.getLaguage(),e.getColorDepth(),e.getPixelDepth(),e.getScreenResolution(),e.getCPU(),e.Agent},this.get=function(t){var e=this.parse(),n=[];for(var i in this.options)this.options.hasOwnProperty(i)&&!0===this.options[i]&&n.push(e[i]);t&&n.push(t),!this.options.resolution&&e.isMobile&&n.push(e.resolution);var r=e.hashMD5(n.join(":"));return[r.slice(0,8),r.slice(8,12),"4"+r.slice(12,15),"b"+r.slice(15,18),r.slice(20)].join("-")},this.Agent=this.DefaultAgent,this};t.DeviceUUID=n,new n(navigator.userAgent)}(t.exports)}));
//# sourceMappingURL=my_library.aa60b4ba.js.map
