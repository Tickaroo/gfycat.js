/*! gfycat 04-04-2015 */
var gfyCollection=function(){function a(a,b){if(b.getElementsByClassName)return b.getElementsByClassName(a);for(var c=[],d=b.getElementsByTagName("*"),e=0;e<d.length;e++)(" "+d[e].className+" ").indexOf(" "+a+" ")>-1&&c.push(d[e]);return c}function b(a){a="string"==typeof a?a:f,c(a)}function c(b){b="string"==typeof b?b:f;var c=e.length;elem_coll=a(b,document);for(var d=0;d<elem_coll.length;d++){var g=new gfyObject(elem_coll[d]);e.push(g)}for(var d=c;d<e.length;d++)e[d].init()}function d(){return e}var e=[],f="gfyitem";return{init:b,get:d,scan:c}}(),gfyObject=function(a){function b(a,b){if(b.getElementsByClassName)return b.getElementsByClassName(a);for(var c=[],d=b.getElementsByTagName("*"),e=0;e<d.length;e++)(" "+d[e].className+" ").indexOf(" "+a+" ")>-1&&c.push(d[e]);return c}function c(){N=document.createElement("div"),N.style.position="absolute";try{N.style.backgroundColor="rgba(0,0,0,0.4)"}catch(a){N.style.backgroundColor="#000";try{N.style.filter="alpha(opacity=60)"}catch(a){}}N.style.color="#fff",N.style.fontFamily="Arial,sans-serif",N.style.fontSize="20px",N.style.padding="10px",N.innerHTML=P.title,N.style.width="100%",N.style.left="0",N.style.top="0",N.style.boxSizing="border-box",N.style.display="none",S.appendChild(N)}function d(){L=document.createElement("div"),L.style.position="absolute",L.style.width="100%",L.style.height="99%",L.style.left="0",L.style.top="0",L.style.boxSizing="border-box",L.style.pointer="cursor",L.style.textAlign="center",L.onclick=s,L.onmouseout=u,L.onmouseover=t,L.button=e(),S.appendChild(L)}function e(){return M=document.createElement("div"),M.style.color="#fff",M.style.fontSize="50px",M.style.marginTop=E?"-40px":"-25px",M.style.position="relative",M.style.left="1%",M.style.top="50%",M.innerHTML="&#9654;",M.style.display="none",L.appendChild(M),M}function f(){J=document.createElement("video"),J.className="gfyVid",T&&(J.autoplay=!0),J.loop=!0,J.controls=O?!0:!1,J.style.width="100%",J.style.height="auto",J.setAttribute("poster","https://thumbs.gfycat.com/"+P.gfyName+"-poster.jpg"),source2=document.createElement("source"),source2.src=gfyWebmUrl,source2.type="video/webm",source2.className="webmsource",J.appendChild(source2),source=document.createElement("source"),source.src=gfyMp4Url,source.type="video/mp4",source.className="mp4source",J.appendChild(source),S.appendChild(J)}function g(){var a=!1;return function(b){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|android|ipad|playbook|silk|blackberry|htc|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a}function h(){K=document.createElement("img"),K.src=P.gifUrl,C?K.style.width="100%":K.style.maxWidth=P.width+"px",K.style.height="auto",K.onmouseout=u,K.onmouseover=t,S.appendChild(K),S.style.position="relative",S.style.padding=0}function i(){S.style.position="relative",S.style.padding=0,C||(S.style.display="inline-block",S.style.overflow="hidden",S.style.boxSizing="border-box",S.style.MozBoxSizing="border-box",S.style.webkitBoxSizing="border-box")}function j(){E&&(ctrlRow=document.createElement("div"),ctrlRow.style.position="relative",F=document.createElement("div"),F.className="CtrlBox",G=document.createElement("img"),G.className="gfyCtrlPause",G.src="https://assets.gfycat.com/img/placeholder.png",G.style.backgroundImage="url('https://assets.gfycat.com/img/gfycontrols.png')",G.style.cssFloat="right",G.style.marginRight="5px",G.style.width="12px",G.style.height="12px",G.style.borderStyle="none",F.appendChild(G),ctrlReverse=document.createElement("img"),ctrlReverse.className="gfyCtrlReverse",ctrlReverse.src="https://assets.gfycat.com/img/placeholder.png",ctrlReverse.style.backgroundImage="url('https://assets.gfycat.com/img/gfycontrols.png')",ctrlReverse.style.cssFloat="right",ctrlReverse.style.marginRight="5px",ctrlReverse.style.width="14px",ctrlReverse.style.height="12px",ctrlReverse.style.backgroundPosition="-46px 0",ctrlReverse.style.borderStyle="none",H=document.createElement("img"),H.className="gfyCtrlSlower",H.src="https://assets.gfycat.com/img/placeholder.png",H.style.backgroundImage="url('https://assets.gfycat.com/img/gfycontrols.png')",H.style.marginRight="5px",H.style.width="14px",H.style.height="12px",H.style.cssFloat="right",H.style.borderStyle="none",I=document.createElement("img"),I.className="gfyCtrlFaster",I.src="https://assets.gfycat.com/img/placeholder.png",I.style.backgroundImage="url('https://assets.gfycat.com/img/gfycontrols.png')",I.style.width="14px",I.style.height="12px",I.style.cssFloat="right",I.style.marginRight="5px",I.style.borderStyle="none",J.paused?q():r(),F.style.position="relative",F.style.cssFloat="right",F.style.width="100px",F.style.padding="5px",F.style.margin="0",F.setAttribute("id","ctr"+B),G.onclick=s,ctrlReverse.onclick=v,F.appendChild(I),F.appendChild(H),F.appendChild(ctrlReverse),F.appendChild(G),ctrlRow.appendChild(F),S.appendChild(ctrlRow))}function k(){O=g(),B=S.getAttribute("data-id"),"true"==S.getAttribute("data-title")&&(D=!0),"true"==S.getAttribute("data-expand")&&(C=!0),"true"==S.getAttribute("data-controls")&&(E=!0),"false"==S.getAttribute("data-autoplay")&&(T=!1);var a=document.createElement("div");attrib_src=S.attributes,attrib_dest=a.attributes;for(var b=0;b<attrib_src.length;b++){var e=attrib_src.item(b),j=e.cloneNode();"style"==j.name&&"null"!=e.value&&attrib_dest.setNamedItem(j)}S.parentNode.replaceChild(a,S),S=a,l("https://gfycat.com/cajax/get/"+B,function(a){a&&(P=a.gfyItem,gfyMp4Url=P.mp4Url,gfyWebmUrl=P.webmUrl,gfyFrameRate=P.frameRate,document.createElement("video").canPlayType?(f(),i(),c(),d(),J.addEventListener?J.addEventListener("loadedmetadata",n,!1):J.attachEvent("onloadedmetadata",n),T&&J.play()):(V=!0,h(),c(),K.onload=function(){var a=navigator.userAgent.toLowerCase();N.style.width=a.indexOf("msie")>-1?K.clientWidth+"px":K.clientWidth-20+"px"}))})}function l(a,b,c){var d=Math.floor(1e7*Math.random()+1),e="_"+B+"_"+d++;a+=a.match(/\?/)?"&callback="+e:"?callback="+e;var f=document.createElement("script");f.type="text/javascript",f.src=a,window[e]=function(a){b.call(c||window,a),document.getElementsByTagName("head")[0].removeChild(f),f=null;try{delete window[e]}catch(d){}},document.getElementsByTagName("head")[0].appendChild(f)}function m(){Q=J.offsetWidth,R=J.offsetHeight,!C&&Q>J.videoWidth&&(Q=J.videoWidth,R=J.videoHeight)}function n(){m(),F||j(),T||O||p()}function o(){L.button.style.display="none"}function p(){L.button.style.display="inline-block"}function q(){return E?(G.style.backgroundPosition="-71px 0",H.style.backgroundPosition="0 0",H.style.marginLeft="6px",I.style.backgroundPosition="-192px 0",I.style.width="8px",I.onclick=y,void(H.onclick=z)):void p()}function r(){o(),E&&(G.style.backgroundPosition="-95px 0",I.style.backgroundPosition="-20px 0",H.style.backgroundPosition="-165px 0",I.style.width="14px",H.style.marginLeft="0px",I.onclick=x,H.onclick=w)}function s(){J.paused?(J.play(),r()):(J.pause(),q())}function t(){D&&P.title&&(N.style.display="block")}function u(){D&&(N.style.display="none")}function v(){G.style.backgroundPosition="-95px 0",H.style.backgroundPosition="0 0",H.style.marginLeft="6px",I.style.backgroundPosition="-192px 0",I.style.width="8px",I.onclick=y,H.onclick=z,J.pause();var a=b("mp4source",J)[0],c=b("webmsource",J)[0];U?(a.src=a.src.replace(/-reverse\.mp4/g,".mp4"),a.src=a.src.replace(/-reverse\.webm/g,".webm"),c.src=c.src.replace(/-reverse\.webm/g,".webm"),ctrlReverse.style.backgroundPosition="-46px 0",U=!1):(a.src=a.src.replace(/\.mp4/g,"-reverse.mp4"),a.src=a.src.replace(/\.webm/g,"-reverse.webm"),c.src=c.src.replace(/\.webm/g,"-reverse.webm"),ctrlReverse.style.backgroundPosition="-141px 0",U=!0),J.playbackRate=1,J.load(),J.play()}function w(){J.playbackRate<=1?J.playbackRate=J.playbackRate/2:J.playbackRate--}function x(){J.playbackRate<=1?J.playbackRate=2*J.playbackRate:J.playbackRate++}function y(){if(window.opera){var a=J.onplay;J.onplay=function(){J.pause(),J.onplay=a},J.play()}else J.currentTime+=1/gfyFrameRate}function z(){J.currentTime-=1/gfyFrameRate}function A(){J.load(),J.play()}var B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S=a,T=!0,U=!1,V=!1;return{init:k,refresh:A}};