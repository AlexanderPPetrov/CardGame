webpackJsonp([1],{"/8fb":function(t,e){},"1/oy":function(t,e){},"7cFA":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("e6fC"),i=s("8AgW"),r=s.n(i),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],staticClass:"loader"})},staticRenderFns:[]};var o={name:"App",components:{Loader:s("VU/8")({computed:{isLoading:function(){return this.$store.state.isLoading}}},c,!1,function(t){s("eUv8")},null,null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-100",attrs:{id:"app"}},[e("loader"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=s("VU/8")(o,d,!1,function(t){s("Oago")},"data-v-1049e9fe",null).exports,u=(s("/8fb"),s("/ocq")),m=s("woOf"),f=s.n(m),g="SET_LOADER",h="SET_CARDS",p="ADD_MATCHED_CARD",v="UPDATE_CARD",C="SET_GAME_FINISHED",_="SET_COUNT",y="SET_START_TIME",T="SET_PLAY_TIME",$="SET_CURRENT_LEVEL",O={getCardById:function(t){return function(e){return t.cards.find(function(t){return t.id===e})}},getOpenedCards:function(t){return t.cards.filter(function(t){return t.isOpened&&!t.isMatched})},getMatchedCards:function(t){return t.cards.filter(function(t){return t.isMatched})}},b={name:"mt-card",props:{card:Object},computed:{getCardFront:function(){return"/static/img/card_front.png"},getImage:function(){return"/static/img/"+this.card.image},getCardBack:function(){return"/static/img/card_back.png"},getDisabledOverlay:function(){return"/static/img/card_disabled_overlay.png"}},data:function(){return{switching:!1}},methods:{closeOpenedCards:function(){var t=this;setTimeout(function(){for(var e=O.getOpenedCards(t.$store.state),s=0;s<e.length;s++)t.toggleOpenedCard(e[s])},1e3)},toggleOpenedCard:function(t){var e=f()({},t);e.isOpened=!t.isOpened,this.$store.commit(v,e),e.isOpened?this.playSound("/static/media/select.mp3"):this.playSound("/static/media/move.mp3")},canOpenMore:function(){return 2!=O.getOpenedCards(this.$store.state).length},setMatchedCards:function(){for(var t=this,e=O.getOpenedCards(this.$store.state),s=0;s<e.length;s++)this.markCardAsMatched(e[s]);setTimeout(function(){t.playSound("/static/media/match.mp3")},250),this.checkGameFinished()},checkGameFinished:function(){O.getMatchedCards(this.$store.state).length==this.$store.state.cards.length&&(this.$store.commit(C,!0),this.$store.commit(T,((new Date).getTime()-this.$store.state.startTime)/1e3))},playSound:function(t){t&&new Audio(t).play()},markCardAsMatched:function(t){var e=f()({},t);e.isMatched=!0,this.$store.commit(v,e)},flipCard:function(){var t=this;if(this.switching)return!1;this.canOpenMore()&&!this.card.isMatched&&(this.switching=!0,setTimeout(function(){t.toggleOpenedCard(t.card);var e=O.getOpenedCards(t.$store.state);2==e.length&&(e[0].type==e[1].type?t.setMatchedCards():t.closeOpenedCards(),t.$store.commit(_,t.$store.state.tryCount+1)),t.switching=!1},250))}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-container js-card col-4 col-sm-3 my-1",class:{switched:!t.card.isOpened},on:{click:function(e){t.flipCard(e)}}},[s("div",{staticClass:"card-wrapper"},[s("div",{staticClass:"card-side d-flex align-items-center justify-content-center",class:{active:t.card.isOpened,matched:t.card.isMatched}},[s("img",{staticClass:"img-fluid vh-image",attrs:{src:t.getCardFront}}),t._v(" "),s("img",{staticClass:"card-image vh-image img-fluid card-disabled-overlay",attrs:{src:t.getDisabledOverlay}}),t._v(" "),s("img",{staticClass:"card-image img-fluid vh-image card-asset",attrs:{src:t.getImage}}),t._v(" "),s("span",{staticClass:"card-title"},[t._v(t._s(t.card.title))])]),t._v(" "),s("div",{staticClass:"card-side card-side-back d-flex align-items-center justify-content-center",class:{active:!t.card.isOpened}},[s("img",{staticClass:"img-fluid vh-image",attrs:{src:t.getCardBack}})])])])},staticRenderFns:[]},x={created:function(){this.startGame()},computed:{cardResults:function(){return this.$store.state.cards},gameFinished:function(){return this.$store.state.gameFinished},getTryCount:function(){return this.$store.state.tryCount},getPlayTime:function(){return this.$store.state.playTime},getCurrentLevel:function(){return this.$store.state.currentLevel+1}},methods:{startGame:function(){this.$store.commit(y,(new Date).getTime());var t=this.$store.state.currentLevel,e=this.$store.state.cardsData[t].level;this.$store.commit(h,e)},newGame:function(){var t=this;this.$store.commit(C,!1),setTimeout(function(){var e=t.$store.state.currentLevel+1;e>=t.$store.state.cardsData.length-1&&(e=t.$store.state.cardsData.length-1),t.$store.commit($,e),t.startGame()},250)}},components:{MtCard:s("VU/8")(b,w,!1,null,null,null).exports}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container h-100 align-items-center justify-content-center d-flex"},[s("div",{staticClass:"row"},t._l(t.cardResults,function(e){return t.cardResults.length?s("mt-card",{key:e.id,attrs:{card:e}}):t._e()})),t._v(" "),s("b-modal",{ref:"modal",attrs:{id:"modalGameEnd","no-close-on-esc":"","no-close-on-backdrop":"",centered:"",cancel:"false",size:"lg","ok-variant":"info btn-lg","ok-only":"","hide-header-close":""},on:{ok:t.newGame},model:{value:t.gameFinished,callback:function(e){t.gameFinished=e},expression:"gameFinished"}},[s("div",{staticClass:"result-header mt-5"},[t._v("\n      Твоят резултат\n    ")]),t._v(" "),s("div",{staticClass:"d-flex w-100 my-5"},[s("div",{staticClass:"stats-container align-items-center justify-content-center text-center d-flex flex-column"},[s("div",{staticClass:"d-flex align-items-center"},[s("i",{staticClass:"fas fa-star icon-star mr-3"}),t._v(" "),s("span",{staticClass:"result"},[t._v("\n            "+t._s(t.getTryCount)+"\n          ")])]),t._v(" "),s("div",{staticClass:"result-label"},[t._v("Опити")])]),t._v(" "),s("div",{staticClass:"stats-container align-items-center justify-content-center text-center d-flex flex-column"},[s("div",{staticClass:"d-flex align-items-center"},[s("i",{staticClass:"fas fa-stopwatch icon-clock mr-3"}),t._v(" "),s("span",{staticClass:"result"},[t._v("\n            "+t._s(t._f("moment")(t._f("moment")(t.getPlayTime,"utc"),"HH:mm:ss"))+"\n          ")])]),t._v(" "),s("div",{staticClass:"result-label"},[t._v("Време")])]),t._v(" "),s("div",{staticClass:"stats-container align-items-center justify-content-center text-center d-flex flex-column"},[s("div",{staticClass:"d-flex align-items-center"},[s("i",{staticClass:"fas fa-gamepad icon-level mr-3"}),t._v(" "),s("span",{staticClass:"result"},[t._v("\n            "+t._s(t.getCurrentLevel)+"\n          ")])]),t._v(" "),s("div",{staticClass:"result-label"},[t._v("Трудност")])])]),t._v(" "),s("span",{staticClass:"d-flex align-items-center",attrs:{slot:"modal-ok"},slot:"modal-ok"},[s("i",{staticClass:"fa fa-play-circle btn-icon mr-3"}),t._v(" "),s("span",[t._v("НОВА ИГРА")])])])],1)},staticRenderFns:[]};var M=s("VU/8")(x,E,!1,function(t){s("7cFA")},null,null).exports;a.a.use(u.a);var L,k=new u.a({routes:[{path:"/",name:"Game",components:{default:M}}]}),A=s("NYxO"),D=s("bOdI"),F=s.n(D),R=s("Gu7T"),S=s.n(R),G=s("mvHQ"),U=s.n(G),j=s("M4fF"),I=s.n(j),H=(L={},F()(L,g,function(t,e){t.isLoading=e}),F()(L,h,function(t,e){for(var s=[],a=0;a<e.length;a++){e[a].isMatched=!1,e[a].isOpened=!1;var n={id:e.length+a,image:e[a].image,title:e[a].title,type:e[a].type};s.push(n)}console.log(U()(s));var i=I.a.shuffle([].concat(s,S()(e)));t.cards=i}),F()(L,p,function(t,e){t.matchedCards.push(e)}),F()(L,v,function(t,e){var s=t.cards.findIndex(function(t){return t.id==e.id});t.cards.splice(s,1,e)}),F()(L,C,function(t,e){t.gameFinished=e}),F()(L,_,function(t,e){t.tryCount=e}),F()(L,y,function(t,e){t.startTime=e}),F()(L,T,function(t,e){t.playTime=e}),F()(L,$,function(t,e){t.currentLevel=e}),L),q=s("mtWM"),N=s.n(q),P={baseURL:"https://api.themoviedb.org/3/"},V={get:function(t,e,s,a){this.request({method:"get",url:t,params:a,success:e,failure:s})},post:function(t,e,s,a){this.request({method:"post",url:t,data:e,success:s,failure:a})},put:function(t,e,s,a){this.request({method:"put",url:t,data:e,success:s,failure:a})},delete:function(t,e,s){this.request({method:"delete",url:t,success:e,failure:s})},request:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.url){var e=f()({method:"get",baseURL:P.baseURL},t);e.params=f()(t.params,{api_key:P.apiKey}),N()(e).then(function(e){t.success&&t.success(e.data)}).catch(function(e){t.failure&&t.failure(e)})}else console.log("URL is required")}},B={getCards:function(t,e,s){V.get("trending/movie/day",e,s,t)}},W=F()({},"GET_CARDS",function(t,e){var s=t.commit;s(g,!0),B.getTrendingMovies(e,function(t){s(h,t),s(g,!1)},function(t){console.log(t),s(g,!1)})});a.a.use(A.a);var z={cardsData:[{level:[{id:0,image:"hat.png",title:"Шапка",type:"hat"},{id:1,image:"boots.png",title:"Ботуши",type:"boots"}]},{level:[{id:0,image:"hat.png",title:"Шапка",type:"hat"},{id:1,image:"boots.png",title:"Ботуши",type:"boots"},{id:2,image:"gloves.png",title:"Ръкавици",type:"gloves"}]},{level:[{id:0,image:"hat.png",title:"Шапка",type:"hat"},{id:1,image:"boots.png",title:"Обувки",type:"boots"},{id:2,image:"gloves.png",title:"Ръкавици",type:"gloves"},{id:3,image:"sweater.png",title:"Пуловер",type:"sweater"}]}],currentLevel:0,cards:[],isLoading:!1,gameFinished:!1,matchedCards:[],tryCount:0,startTime:(new Date).getTime(),playTime:(new Date).getTime()},Q=new A.a.Store({state:z,getters:O,mutations:H,actions:W});a.a.use(n.a),a.a.use(r.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:k,store:Q,components:{App:l},template:"<App/>"})},Oago:function(t,e){},eUv8:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7b177f80ba9d16a3c9e7.js.map