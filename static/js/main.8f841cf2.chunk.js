(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,t){},120:function(e,t){},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),c=n(11),o=n(24),s=n(25),i={iceServers:[{url:"stun:stun.l.google.com:19302"},{url:"stun:stun1.l.google.com:19302"},{url:"stun:stun2.l.google.com:19302"},{url:"stun:stun3.l.google.com:19302"},{url:"stun:stun4.l.google.com:19302"},{url:"stun:stun.ekiga.net"},{url:"stun:stun.ideasip.com"},{url:"stun:stun.rixtelecom.se"},{url:"stun:stun.schlund.de"},{url:"stun:stun.stunprotocol.org:3478"},{url:"stun:stun.voiparound.com"},{url:"stun:stun.voipbuster.com"},{url:"stun:stun.voipstunt.com"},{url:"stun:stun.voxgratia.org"},{url:"stun:23.21.150.121"}]},u={offerToReceiveAudio:1,offerToReceiveVideo:1},l=function(){function e(){Object(o.a)(this,e),this.peerConnection=new RTCPeerConnection(i)}return Object(s.a)(e,[{key:"addStream",value:function(e){var t=this;e.getTracks().forEach((function(n){return t.peerConnection.addTrack(n,e)}))}},{key:"gatherICECandidates",value:function(){var e=this;return new Promise((function(t){setTimeout(t,1e3),e.peerConnection.onicecandidate=function(e){console.log("candidate",e),null==e.candidate&&t()}}))}},{key:"createOffer",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.gatherICECandidates(),e.next=3,this.peerConnection.createOffer(u);case 3:return n=e.sent,e.next=6,this.peerConnection.setLocalDescription(n);case 6:return e.next=8,t;case 8:return e.abrupt("return",this.peerConnection.localDescription);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createAnswer",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.peerConnection.setRemoteDescription(t);case 2:return n=this.gatherICECandidates(),e.next=5,this.peerConnection.createAnswer(u);case 5:return r=e.sent,e.next=8,this.peerConnection.setLocalDescription(r);case 8:return e.next=10,n;case 10:return e.abrupt("return",this.peerConnection.localDescription);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onAnswer",value:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.peerConnection.setRemoteDescription(t);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addOnTrackListener",value:function(e){this.peerConnection.addEventListener("track",e)}},{key:"close",value:function(){this.peerConnection.close()}}]),e}()},64:function(e,t,n){"use strict";(function(e){var r=n(65),a=n(0),c=n.n(a),o=n(11),s=n(24),i=n(25),u=n(67),l=n(66),h=n(68),d=(n(79),n(1)),f=n.n(d),p=n(20),g=n(4),m=n(26),v=/^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/,y={audio:!0,video:!0},b=function(t){function n(e){var t;return Object(s.a)(this,n),(t=Object(u.a)(this,Object(l.a)(n).call(this,e))).state={connected:!1,signedIn:!1,calling:!1,accountId:null,receiverId:"",receiversKey:null,accountLoading:!1,callConnected:!1},t._parseEncryptionKey(),t._initNear().then((function(){t.setState({connected:!0,signedIn:!!t._accountId,accountId:t._accountId})})),t.localVideoRef=f.a.createRef(),t.remoteVideoRef=f.a.createRef(),t}return Object(h.a)(n,t),Object(i.a)(n,[{key:"_parseEncryptionKey",value:function(){var t=localStorage.getItem("enc_key:");if(t){var n=e.from(t,"base64");if(n.length!==g.box.secretKeyLength)throw new Error("Given secret key has wrong length");t=g.box.keyPair.fromSecretKey(n)}else t=new g.box.keyPair,localStorage.setItem("enc_key:",e.from(t.secretKey).toString("base64"));this._key=t}},{key:"_updateEncryptionPublicKey",value:function(){var t=Object(o.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.from(this._key.publicKey).toString("base64"),t.next=3,this._contract.get_key({account_id:this._accountId});case 3:if(t.sent===n){t.next=10;break}return console.log("Updating public encryption key to ".concat(n)),t.next=8,this._contract.set_key({key:n});case 8:t.next=11;break;case 10:console.log("Current public encryption key is up to date: ".concat(n));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"_initNear",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={networkId:"default",nodeUrl:"https://rpc.nearprotocol.com",contractName:"webrtc-chat",walletUrl:"https://wallet.nearprotocol.com"},n=new p.keyStores.BrowserLocalStorageKeyStore,e.next=4,p.connect(Object.assign({deps:{keyStore:n}},t));case 4:if(r=e.sent,this._keyStore=n,this._nearConfig=t,this._near=r,this._walletConnection=new p.WalletConnection(r,"webrtc-chat"),this._accountId=this._walletConnection.getAccountId(),!this._accountId){e.next=15;break}return this._account=this._walletConnection.account(),this._contract=new p.Contract(this._account,"webrtc-chat",{viewMethods:["get_key","get_request","get_response"],changeMethods:["set_key","request","respond"]}),e.next=15,this._updateEncryptionPublicKey();case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var n=this,a=Object(r.a)({},e,t);"receiverId"===e&&(t=t.toLowerCase().replace(/[^a-z0-9\-_.]/,""),a[e]=t,a.receiversKey=null,this.isValidAccount(t)&&(a.accountLoading=!0,this._contract.get_key({account_id:t}).then((function(e){n.state.receiverId===t&&n.setState({accountLoading:!1,receiversKey:e})})).catch((function(e){n.state.receiverId===t&&n.setState({accountLoading:!1})})))),this.setState(a)}},{key:"isValidAccount",value:function(e){return e.length>=2&&e.length<=64&&e.match(v)}},{key:"receiverClass",value:function(){return!this.state.receiverId||this.isValidAccount(this.state.receiverId)&&this.state.accountLoading?"form-control form-control-large":this.isValidAccount(this.state.receiverId)&&this.state.receiversKey?"form-control form-control-large is-valid":"form-control form-control-large is-invalid"}},{key:"requestSignIn",value:function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"WebRTC Chat",e.next=3,this._walletConnection.requestSignIn("webrtc-chat","WebRTC Chat");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"decryptBox",value:function(t,n){var r=e.from(n,"base64");if(r.length!==g.box.publicKeyLength)throw new Error("Given encryption public key is invalid.");var a=e.from(t,"base64"),c=new Uint8Array(g.box.nonceLength);a.copy(c,0,0,c.length);var o=new Uint8Array(a.length-g.box.nonceLength);a.copy(o,0,c.length);var s=g.box.open(o,c,r,this._key.secretKey);return e.from(s).toString()}},{key:"encryptBox",value:function(t,n){var r=e.from(n,"base64");if(r.length!==g.box.publicKeyLength)throw new Error("Given encryption public key is invalid.");var a=e.from(t),c=g.randomBytes(g.box.nonceLength),o=g.box(a,c,r,this._key.secretKey),s=new Uint8Array(o.length+g.box.nonceLength);return s.set(c),s.set(o,g.box.nonceLength),e.from(s).toString("base64")}},{key:"initCall",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,n,r,a,o,s,i,u,l,h,d,f,p,g,v=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.receiverId,n=this.state.receiversKey,this.setState({calling:!0}),this.webrtc=new m.a,this.webrtc.addOnTrackListener((function(e){console.log("got remote streams",e),v.remoteVideoRef.current.srcObject!==e.streams[0]&&(v.remoteVideoRef.current.srcObject=e.streams[0],v.remoteVideoRef.current.play())})),e.next=7,navigator.mediaDevices.getUserMedia(y);case 7:return r=e.sent,this.localVideoRef.current.srcObject=r,this.localVideoRef.current.play(),this.webrtc.addStream(r),e.prev=11,e.next=14,this._contract.get_request({from_account_id:t,to_account_id:this._accountId});case 14:if(!(a=e.sent)){e.next=32;break}if(o=JSON.parse(this.decryptBox(a,n)),console.log(o),!o){e.next=32;break}if(!((o.time||0)+6e4>(new Date).getTime())){e.next=32;break}return s=o.offer,console.log("Remote offer: ",s),e.next=25,this.webrtc.createAnswer(s);case 25:return i=e.sent,console.log("Local answer: ",i),u=this.encryptBox(JSON.stringify({answer:i,time:(new Date).getTime()}),n),e.next=30,this._contract.respond({to_account_id:t,response:u});case 30:return this.setState({callConnected:!0}),e.abrupt("return");case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(11),console.log("Failed to parse request",e.t0);case 37:return e.next=39,this.webrtc.createOffer();case 39:return l=e.sent,console.log("Local offer: ",l),h=(new Date).getTime(),d=this.encryptBox(JSON.stringify({offer:l,time:h}),n),e.next=45,this._contract.request({to_account_id:t,request:d});case 45:this.setState({awaitingResponse:!0});case 46:if(!(this.state.calling&&h+6e4>(new Date).getTime())){e.next=72;break}return e.prev=47,e.next=50,this._contract.get_response({from_account_id:this._accountId,to_account_id:t});case 50:if(!(f=e.sent)){e.next=61;break}if(p=JSON.parse(this.decryptBox(f,n)),console.log(p),!p){e.next=61;break}return g=p.answer,console.log("Remote answer: ",g),e.next=59,this.webrtc.onAnswer(g);case 59:return this.setState({callConnected:!0,awaitingResponse:!1}),e.abrupt("return");case 61:e.next=68;break;case 63:return e.prev=63,e.t1=e.catch(47),console.log("Failed to get response",e.t1),this.setState({awaitingResponse:!1,calling:!1}),e.abrupt("return");case 68:return e.next=70,new Promise((function(e){return setTimeout(e,1e3)}));case 70:e.next=46;break;case 72:this.setState({awaitingResponse:!1,calling:!1}),this.hangUp();case 74:case"end":return e.stop()}}),e,this,[[11,34],[47,63]])})));return function(){return e.apply(this,arguments)}}()},{key:"hangUp",value:function(){this.state.calling&&(this.webrtc.close(),this.webrtc=null,this.localVideoRef.current.pause(),this.setState({calling:!1}))}},{key:"localCall",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,n,r,a,o,s=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new m.a,n=new m.a,t.addOnTrackListener((function(e){return console.log("local",e)})),n.addOnTrackListener((function(e){console.log("remote",e),s.remoteVideoRef.current.srcObject!==e.streams[0]&&(s.remoteVideoRef.current.srcObject=e.streams[0],s.remoteVideoRef.current.play())})),e.next=6,navigator.mediaDevices.getUserMedia(y);case 6:return r=e.sent,this.localVideoRef.current.srcObject=r,this.localVideoRef.current.play(),t.addStream(r),e.next=12,t.createOffer();case 12:return a=e.sent,console.log(a),e.next=16,n.createAnswer(a);case 16:return o=e.sent,console.log(o),e.next=20,t.onAnswer(o);case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.connected?this.state.signedIn?f.a.createElement("div",null,f.a.createElement("h3",null,"Hello, ",this.state.accountId),f.a.createElement("div",{className:"form-group"},f.a.createElement("label",{className:"sr-only",htmlFor:"toAccountId"},"Video Call"),f.a.createElement("div",{className:"input-group"},f.a.createElement("div",{className:"input-group-prepend"},f.a.createElement("div",{className:"input-group-text"},"@")),f.a.createElement("input",{type:"text",className:this.receiverClass(),id:"toAccountId",placeholder:"eugenethedream",disabled:this.state.calling,value:this.state.receiverId,onChange:function(t){return e.handleChange("receiverId",t.target.value)}}))),f.a.createElement("div",{className:"form-group"},f.a.createElement("div",null,f.a.createElement("button",{className:"btn btn-success",disabled:this.state.calling||!this.isValidAccount(this.state.receiverId)||!this.state.receiversKey,onClick:function(){return e.initCall()}},"Initiate Video Call"),f.a.createElement("span",null," "),f.a.createElement("button",{className:"btn btn-danger",disabled:!this.state.calling,onClick:function(){return e.hangUp()}},"Hang up"))),f.a.createElement("hr",null),f.a.createElement("video",{className:"local-video",ref:this.localVideoRef,playsInline:!0,muted:!0}),f.a.createElement("video",{className:"remote-video",ref:this.remoteVideoRef,playsInline:!0})):f.a.createElement("div",null,f.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.requestSignIn()}},"Log in with NEAR Wallet")):f.a.createElement("div",null,"Connecting... ",f.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}));return f.a.createElement("div",null,f.a.createElement("h1",null,"WebRTC Chat"),t)}}]),n}(f.a.Component);t.a=b}).call(this,n(10).Buffer)},69:function(e,t,n){e.exports=n(70)},70:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(63),o=n.n(c),s=(n(75),n(64));o.a.render(a.a.createElement(s.a,null),document.getElementById("root"))},75:function(e,t,n){},79:function(e,t,n){},92:function(e,t){},94:function(e,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.8f841cf2.chunk.js.map