(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),i=a.n(s),c=a(2),o=a.n(c),m=a(13),l=a(14),u=a(15),v=a(18),d=a(17),p=a(16),g=a.n(p);a(42),a(43);var E=function(e){e.id;var t=e.title,a=e.year,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",null,t),r.a.createElement("span",null,a),r.a.createElement("ul",{className:"movie__genres"},i.map(function(e,t){return r.a.createElement("li",{key:t,className:"movie__genre"},e)})),r.a.createElement("p",null,n)))},f=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark(function t(){var a,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}},t)})),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading")):r.a.createElement("div",{className:"movies"},a.map(function(e){return r.a.createElement(E,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})})))}}]),a}(r.a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.90ccc8ae.chunk.js.map