(function(g){var window=this;'use strict';var d4=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.Be=!1;this.player=a;this.T(a,"minimized",this.rg);this.T(a,"onStateChange",this.dI)},e4=function(a){g.rL.call(this,a);
this.j=new d4(this.player);this.j.hide();g.eL(this.player,this.j.element,4);a.Te()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(d4,g.W);g.h=d4.prototype;
g.h.OF=function(){this.tooltip=new g.oP(this.player,this);g.H(this,this.tooltip);g.eL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.yc=new g.mM(this.player);g.H(this,this.yc);this.Qg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.H(this,this.Qg);this.Qg.Ba(this.element);this.T(this.Qg.element,"click",this.sB);var a=new g.W({G:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Cerrar"},U:[g.vI()]});g.H(this,a);a.Ba(this.Qg.element);this.T(a.element,"click",this.Ti);
a=new g.t_(this.player,this);g.H(this,a);a.Ba(this.Qg.element);this.gq=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.H(this,this.gq);this.gq.Ba(this.Qg.element);this.T(this.gq.element,"click",this.sB);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,b);b.Ba(this.gq.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ba(this.gq.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,c);c.Ba(this.gq.element);this.cP=new g.NN(this.player,
this,!1);g.H(this,this.cP);this.cP.Ba(b.element);b=new g.LN(this.player,this);g.H(this,b);b.Ba(a.element);this.nextButton=new g.NN(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ba(c.element);this.Tg=new g.aP(this.player,this);g.H(this,this.Tg);this.Tg.Ba(this.Qg.element);this.Ic=new g.XN(this.player,this);g.H(this,this.Ic);g.eL(this.player,this.Ic.element,4);this.hB=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.H(this,this.hB);g.eL(this.player,this.hB.element,4);a=new g.W({G:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Cerrar"},U:[g.vI()]});g.H(this,a);a.Ba(this.hB.element);this.T(a.element,"click",this.Ti);a=new g.W({G:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Cerrar"},U:[g.BI()]});g.H(this,a);a.Ba(this.hB.element);this.T(a.element,"click",this.eY);this.T(this.player,"presentingplayerstatechange",this.Tc);this.T(this.player,"appresize",this.yb);this.T(this.player,"fullscreentoggled",this.yb);this.yb()};
g.h.show=function(){this.Zd=new g.op(this.Pq,null,this);this.Zd.start();this.Be||(this.OF(),this.Be=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Ic.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.Zd&&(this.Zd.dispose(),this.Zd=void 0);g.W.prototype.hide.call(this);this.player.Te()||(this.Be&&this.Ic.hide(),this.player.loadModule("annotations_module"))};
g.h.ra=function(){this.Zd&&(this.Zd.dispose(),this.Zd=void 0);g.W.prototype.ra.call(this)};
g.h.Ti=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.h.eY=function(){this.player.playVideo()};
g.h.sB=function(a){if(a.target===this.Qg.element||a.target===this.gq.element)this.player.V().S("kevlar_miniplayer_play_pause_on_scrim")?g.zH(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.h.rg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.Te())};
g.h.Gd=function(){this.Ic.Qb();this.Tg.Qb()};
g.h.Pq=function(){this.Gd();this.Zd&&this.Zd.start()};
g.h.Tc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.h.yb=function(){g.mO(this.Ic,0,this.player.eb().getPlayerSize().width,!1);g.$N(this.Ic)};
g.h.dI=function(a){this.player.Te()&&(0===a?this.hide():this.show())};
g.h.pc=function(){return this.tooltip};
g.h.cf=function(){return!1};
g.h.Ff=function(){return!1};
g.h.Ni=function(){return!1};
g.h.ly=function(){};
g.h.Sn=function(){};
g.h.Us=function(){};
g.h.Bo=function(){return null};
g.h.Nw=function(){return null};
g.h.Kj=function(){return new g.Am(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Wq=function(a,b,c,d,e){var f=0,k=d=0,l=g.Om(a);if(b){c=g.wp(b,"ytp-prev-button")||g.wp(b,"ytp-next-button");var m=g.wp(b,"ytp-play-button"),n=g.wp(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Mm(b,this.element),k=b.x,f=b.y-12):n&&(k=g.wp(b,"ytp-miniplayer-button-top-left"),f=g.Mm(b,this.element),b=g.Om(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.eb().getPlayerSize().width;e=f+(e||0);l=g.wh(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Jl=function(){};
g.h.Yk=function(){return!1};g.w(e4,g.rL);e4.prototype.create=function(){};
e4.prototype.ai=function(){return!1};
e4.prototype.load=function(){this.player.hideControls();this.j.show()};
e4.prototype.unload=function(){this.player.showControls();this.j.hide()};g.qL("miniplayer",e4);})(_yt_player);