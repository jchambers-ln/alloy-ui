AUI.add("aui-event-delegate-change",function(a){var h=a.Object,c=a.Node,b=a.Selector,e=a.config.doc,f=e.implementation,g="beforeactivate",d="change";if(!f||!f.hasFeature("Events","2.0")){a.Event.define(d,{delegate:function(m,l,k,j){var i=this;i._attachEvents(m,l,k,j);},detach:function(l,k,j){var i=this;i._detachEvents(l,k,j);},detachDelegate:function(l,k,j){var i=this;i._detachEvents(l,k,j);},on:function(l,k,j){var i=this;i._attachEvent(l,k,j);},_attachEvent:function(k,p,q,l,i){var n=this;var m=n._getEventName(k);var o=n._prepareHandles(p,k);if(!h.owns(o,m)){var j=q.fire;if(l){j=function(v){var t=l.getDOM();var r=true;var u=k.getDOM();var s=a.clone(v);do{if(u&&b.test(u,i)){s.currentTarget=a.one(u);s.container=l;r=q.fire(s);}u=u.parentNode;}while(r!==false&&!s.stopped&&u&&u!==t);return((r!==false)&&(s.stopped!==2));};}o[m]=a.Event._attach([m,j,k,q]);}},_attachEvents:function(n,m,l,k){var i=this;var j=i._prepareHandles(m,n);j[g]=n.delegate(g,function(p){var o=p.target;i._attachEvent(o,m,l,n,k);},k);},_detachEvents:function(k,j,i){a.each(j._handles,function(m,n,l){a.each(m,function(q,p,o){q.detach();});});delete j._handles;},_getEventName:a.cached(function(l){var i=d;var j=l.attr("tagName").toLowerCase();var k=l.attr("type").toLowerCase();if(j=="input"&&(k=="checkbox"||k=="radio")){i="click";}return i;}),_prepareHandles:function(k,j){if(!h.owns(k,"_handles")){k._handles={};}var i=k._handles;if(!h.owns(i,j)){i[j]={};}return i[j];}},true);}},"@VERSION@",{requires:["aui-node-base","aui-event-base"],condition:{name:"aui-event-delegate-change",trigger:"event-base-ie",ua:"ie"}});