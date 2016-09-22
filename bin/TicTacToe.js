(function (console) { "use strict";
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = $iterator(it)();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = $iterator(it)();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
};
Math.__name__ = ["Math"];
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null; else return js_Boot.getClass(o);
};
Type.getSuperClass = function(c) {
	return c.__super__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
var _$UInt_UInt_$Impl_$ = {};
$hxClasses["_UInt.UInt_Impl_"] = _$UInt_UInt_$Impl_$;
_$UInt_UInt_$Impl_$.__name__ = ["_UInt","UInt_Impl_"];
_$UInt_UInt_$Impl_$.gt = function(a,b) {
	var aNeg = a < 0;
	var bNeg = b < 0;
	if(aNeg != bNeg) return aNeg; else return a > b;
};
_$UInt_UInt_$Impl_$.gte = function(a,b) {
	var aNeg = a < 0;
	var bNeg = b < 0;
	if(aNeg != bNeg) return aNeg; else return a >= b;
};
_$UInt_UInt_$Impl_$.toFloat = function(this1) {
	var $int = this1;
	if($int < 0) return 4294967296.0 + $int; else return $int + 0.0;
};
var Xml = function(nodeType) {
	this.nodeType = nodeType;
	this.children = [];
	this.attributeMap = new haxe_ds_StringMap();
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.parse = function(str) {
	return haxe_xml_Parser.parse(str);
};
Xml.createElement = function(name) {
	var xml = new Xml(Xml.Element);
	if(xml.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + xml.nodeType);
	xml.nodeName = name;
	return xml;
};
Xml.createPCData = function(data) {
	var xml = new Xml(Xml.PCData);
	if(xml.nodeType == Xml.Document || xml.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + xml.nodeType);
	xml.nodeValue = data;
	return xml;
};
Xml.createCData = function(data) {
	var xml = new Xml(Xml.CData);
	if(xml.nodeType == Xml.Document || xml.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + xml.nodeType);
	xml.nodeValue = data;
	return xml;
};
Xml.createComment = function(data) {
	var xml = new Xml(Xml.Comment);
	if(xml.nodeType == Xml.Document || xml.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + xml.nodeType);
	xml.nodeValue = data;
	return xml;
};
Xml.createDocType = function(data) {
	var xml = new Xml(Xml.DocType);
	if(xml.nodeType == Xml.Document || xml.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + xml.nodeType);
	xml.nodeValue = data;
	return xml;
};
Xml.createProcessingInstruction = function(data) {
	var xml = new Xml(Xml.ProcessingInstruction);
	if(xml.nodeType == Xml.Document || xml.nodeType == Xml.Element) throw new js__$Boot_HaxeError("Bad node type, unexpected " + xml.nodeType);
	xml.nodeValue = data;
	return xml;
};
Xml.createDocument = function() {
	return new Xml(Xml.Document);
};
Xml.prototype = {
	set: function(att,value) {
		if(this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + this.nodeType);
		this.attributeMap.set(att,value);
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + this.nodeType);
		return this.attributeMap.exists(att);
	}
	,addChild: function(x) {
		if(this.nodeType != Xml.Document && this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + this.nodeType);
		if(x.parent != null) x.parent.removeChild(x);
		this.children.push(x);
		x.parent = this;
	}
	,removeChild: function(x) {
		if(this.nodeType != Xml.Document && this.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element or Document but found " + this.nodeType);
		if(HxOverrides.remove(this.children,x)) {
			x.parent = null;
			return true;
		}
		return false;
	}
	,__class__: Xml
};
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = ["haxe","IMap"];
var haxe_Log = function() { };
$hxClasses["haxe.Log"] = haxe_Log;
haxe_Log.__name__ = ["haxe","Log"];
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var haxe_ds_ArraySort = function() { };
$hxClasses["haxe.ds.ArraySort"] = haxe_ds_ArraySort;
haxe_ds_ArraySort.__name__ = ["haxe","ds","ArraySort"];
haxe_ds_ArraySort.sort = function(a,cmp) {
	haxe_ds_ArraySort.rec(a,cmp,0,a.length);
};
haxe_ds_ArraySort.rec = function(a,cmp,from,to) {
	var middle = from + to >> 1;
	if(to - from < 12) {
		if(to <= from) return;
		var _g = from + 1;
		while(_g < to) {
			var i = _g++;
			var j = i;
			while(j > from) {
				if(cmp(a[j],a[j - 1]) < 0) haxe_ds_ArraySort.swap(a,j - 1,j); else break;
				j--;
			}
		}
		return;
	}
	haxe_ds_ArraySort.rec(a,cmp,from,middle);
	haxe_ds_ArraySort.rec(a,cmp,middle,to);
	haxe_ds_ArraySort.doMerge(a,cmp,from,middle,to,middle - from,to - middle);
};
haxe_ds_ArraySort.doMerge = function(a,cmp,from,pivot,to,len1,len2) {
	var first_cut;
	var second_cut;
	var len11;
	var len22;
	var new_mid;
	if(len1 == 0 || len2 == 0) return;
	if(len1 + len2 == 2) {
		if(cmp(a[pivot],a[from]) < 0) haxe_ds_ArraySort.swap(a,pivot,from);
		return;
	}
	if(len1 > len2) {
		len11 = len1 >> 1;
		first_cut = from + len11;
		second_cut = haxe_ds_ArraySort.lower(a,cmp,pivot,to,first_cut);
		len22 = second_cut - pivot;
	} else {
		len22 = len2 >> 1;
		second_cut = pivot + len22;
		first_cut = haxe_ds_ArraySort.upper(a,cmp,from,pivot,second_cut);
		len11 = first_cut - from;
	}
	haxe_ds_ArraySort.rotate(a,cmp,first_cut,pivot,second_cut);
	new_mid = first_cut + len22;
	haxe_ds_ArraySort.doMerge(a,cmp,from,first_cut,new_mid,len11,len22);
	haxe_ds_ArraySort.doMerge(a,cmp,new_mid,second_cut,to,len1 - len11,len2 - len22);
};
haxe_ds_ArraySort.rotate = function(a,cmp,from,mid,to) {
	var n;
	if(from == mid || mid == to) return;
	n = haxe_ds_ArraySort.gcd(to - from,mid - from);
	while(n-- != 0) {
		var val = a[from + n];
		var shift = mid - from;
		var p1 = from + n;
		var p2 = from + n + shift;
		while(p2 != from + n) {
			a[p1] = a[p2];
			p1 = p2;
			if(to - p2 > shift) p2 += shift; else p2 = from + (shift - (to - p2));
		}
		a[p1] = val;
	}
};
haxe_ds_ArraySort.gcd = function(m,n) {
	while(n != 0) {
		var t = m % n;
		m = n;
		n = t;
	}
	return m;
};
haxe_ds_ArraySort.upper = function(a,cmp,from,to,val) {
	var len = to - from;
	var half;
	var mid;
	while(len > 0) {
		half = len >> 1;
		mid = from + half;
		if(cmp(a[val],a[mid]) < 0) len = half; else {
			from = mid + 1;
			len = len - half - 1;
		}
	}
	return from;
};
haxe_ds_ArraySort.lower = function(a,cmp,from,to,val) {
	var len = to - from;
	var half;
	var mid;
	while(len > 0) {
		half = len >> 1;
		mid = from + half;
		if(cmp(a[mid],a[val]) < 0) {
			from = mid + 1;
			len = len - half - 1;
		} else len = half;
	}
	return from;
};
haxe_ds_ArraySort.swap = function(a,i,j) {
	var tmp = a[i];
	a[i] = a[j];
	a[j] = tmp;
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe_ds_IntMap;
haxe_ds_IntMap.__name__ = ["haxe","ds","IntMap"];
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
$hxClasses["haxe.ds._StringMap.StringMapIterator"] = haxe_ds__$StringMap_StringMapIterator;
haxe_ds__$StringMap_StringMapIterator.__name__ = ["haxe","ds","_StringMap","StringMapIterator"];
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		return this.map.get(this.keys[this.index++]);
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) return false;
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) return false;
			delete(this.h[key]);
			return true;
		}
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator(this,this.arrayKeys());
	}
	,__class__: haxe_ds_StringMap
};
var haxe_macro_Constant = { __ename__ : true, __constructs__ : ["CInt","CFloat","CString","CIdent","CRegexp"] };
haxe_macro_Constant.CInt = function(v) { var $x = ["CInt",0,v]; $x.__enum__ = haxe_macro_Constant; $x.toString = $estr; return $x; };
haxe_macro_Constant.CFloat = function(f) { var $x = ["CFloat",1,f]; $x.__enum__ = haxe_macro_Constant; $x.toString = $estr; return $x; };
haxe_macro_Constant.CString = function(s) { var $x = ["CString",2,s]; $x.__enum__ = haxe_macro_Constant; $x.toString = $estr; return $x; };
haxe_macro_Constant.CIdent = function(s) { var $x = ["CIdent",3,s]; $x.__enum__ = haxe_macro_Constant; $x.toString = $estr; return $x; };
haxe_macro_Constant.CRegexp = function(r,opt) { var $x = ["CRegexp",4,r,opt]; $x.__enum__ = haxe_macro_Constant; $x.toString = $estr; return $x; };
var haxe_macro_Binop = { __ename__ : true, __constructs__ : ["OpAdd","OpMult","OpDiv","OpSub","OpAssign","OpEq","OpNotEq","OpGt","OpGte","OpLt","OpLte","OpAnd","OpOr","OpXor","OpBoolAnd","OpBoolOr","OpShl","OpShr","OpUShr","OpMod","OpAssignOp","OpInterval","OpArrow"] };
haxe_macro_Binop.OpAdd = ["OpAdd",0];
haxe_macro_Binop.OpAdd.toString = $estr;
haxe_macro_Binop.OpAdd.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpMult = ["OpMult",1];
haxe_macro_Binop.OpMult.toString = $estr;
haxe_macro_Binop.OpMult.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpDiv = ["OpDiv",2];
haxe_macro_Binop.OpDiv.toString = $estr;
haxe_macro_Binop.OpDiv.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpSub = ["OpSub",3];
haxe_macro_Binop.OpSub.toString = $estr;
haxe_macro_Binop.OpSub.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpAssign = ["OpAssign",4];
haxe_macro_Binop.OpAssign.toString = $estr;
haxe_macro_Binop.OpAssign.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpEq = ["OpEq",5];
haxe_macro_Binop.OpEq.toString = $estr;
haxe_macro_Binop.OpEq.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpNotEq = ["OpNotEq",6];
haxe_macro_Binop.OpNotEq.toString = $estr;
haxe_macro_Binop.OpNotEq.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpGt = ["OpGt",7];
haxe_macro_Binop.OpGt.toString = $estr;
haxe_macro_Binop.OpGt.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpGte = ["OpGte",8];
haxe_macro_Binop.OpGte.toString = $estr;
haxe_macro_Binop.OpGte.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpLt = ["OpLt",9];
haxe_macro_Binop.OpLt.toString = $estr;
haxe_macro_Binop.OpLt.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpLte = ["OpLte",10];
haxe_macro_Binop.OpLte.toString = $estr;
haxe_macro_Binop.OpLte.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpAnd = ["OpAnd",11];
haxe_macro_Binop.OpAnd.toString = $estr;
haxe_macro_Binop.OpAnd.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpOr = ["OpOr",12];
haxe_macro_Binop.OpOr.toString = $estr;
haxe_macro_Binop.OpOr.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpXor = ["OpXor",13];
haxe_macro_Binop.OpXor.toString = $estr;
haxe_macro_Binop.OpXor.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpBoolAnd = ["OpBoolAnd",14];
haxe_macro_Binop.OpBoolAnd.toString = $estr;
haxe_macro_Binop.OpBoolAnd.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpBoolOr = ["OpBoolOr",15];
haxe_macro_Binop.OpBoolOr.toString = $estr;
haxe_macro_Binop.OpBoolOr.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpShl = ["OpShl",16];
haxe_macro_Binop.OpShl.toString = $estr;
haxe_macro_Binop.OpShl.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpShr = ["OpShr",17];
haxe_macro_Binop.OpShr.toString = $estr;
haxe_macro_Binop.OpShr.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpUShr = ["OpUShr",18];
haxe_macro_Binop.OpUShr.toString = $estr;
haxe_macro_Binop.OpUShr.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpMod = ["OpMod",19];
haxe_macro_Binop.OpMod.toString = $estr;
haxe_macro_Binop.OpMod.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpAssignOp = function(op) { var $x = ["OpAssignOp",20,op]; $x.__enum__ = haxe_macro_Binop; $x.toString = $estr; return $x; };
haxe_macro_Binop.OpInterval = ["OpInterval",21];
haxe_macro_Binop.OpInterval.toString = $estr;
haxe_macro_Binop.OpInterval.__enum__ = haxe_macro_Binop;
haxe_macro_Binop.OpArrow = ["OpArrow",22];
haxe_macro_Binop.OpArrow.toString = $estr;
haxe_macro_Binop.OpArrow.__enum__ = haxe_macro_Binop;
var haxe_macro_Unop = { __ename__ : true, __constructs__ : ["OpIncrement","OpDecrement","OpNot","OpNeg","OpNegBits"] };
haxe_macro_Unop.OpIncrement = ["OpIncrement",0];
haxe_macro_Unop.OpIncrement.toString = $estr;
haxe_macro_Unop.OpIncrement.__enum__ = haxe_macro_Unop;
haxe_macro_Unop.OpDecrement = ["OpDecrement",1];
haxe_macro_Unop.OpDecrement.toString = $estr;
haxe_macro_Unop.OpDecrement.__enum__ = haxe_macro_Unop;
haxe_macro_Unop.OpNot = ["OpNot",2];
haxe_macro_Unop.OpNot.toString = $estr;
haxe_macro_Unop.OpNot.__enum__ = haxe_macro_Unop;
haxe_macro_Unop.OpNeg = ["OpNeg",3];
haxe_macro_Unop.OpNeg.toString = $estr;
haxe_macro_Unop.OpNeg.__enum__ = haxe_macro_Unop;
haxe_macro_Unop.OpNegBits = ["OpNegBits",4];
haxe_macro_Unop.OpNegBits.toString = $estr;
haxe_macro_Unop.OpNegBits.__enum__ = haxe_macro_Unop;
var haxe_macro_ExprDef = { __ename__ : true, __constructs__ : ["EConst","EArray","EBinop","EField","EParenthesis","EObjectDecl","EArrayDecl","ECall","ENew","EUnop","EVars","EFunction","EBlock","EFor","EIn","EIf","EWhile","ESwitch","ETry","EReturn","EBreak","EContinue","EUntyped","EThrow","ECast","EDisplay","EDisplayNew","ETernary","ECheckType","EMeta"] };
haxe_macro_ExprDef.EConst = function(c) { var $x = ["EConst",0,c]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EArray = function(e1,e2) { var $x = ["EArray",1,e1,e2]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EBinop = function(op,e1,e2) { var $x = ["EBinop",2,op,e1,e2]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EField = function(e,field) { var $x = ["EField",3,e,field]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EParenthesis = function(e) { var $x = ["EParenthesis",4,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EObjectDecl = function(fields) { var $x = ["EObjectDecl",5,fields]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EArrayDecl = function(values) { var $x = ["EArrayDecl",6,values]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ECall = function(e,params) { var $x = ["ECall",7,e,params]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ENew = function(t,params) { var $x = ["ENew",8,t,params]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EUnop = function(op,postFix,e) { var $x = ["EUnop",9,op,postFix,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EVars = function(vars) { var $x = ["EVars",10,vars]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EFunction = function(name,f) { var $x = ["EFunction",11,name,f]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EBlock = function(exprs) { var $x = ["EBlock",12,exprs]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EFor = function(it,expr) { var $x = ["EFor",13,it,expr]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EIn = function(e1,e2) { var $x = ["EIn",14,e1,e2]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EIf = function(econd,eif,eelse) { var $x = ["EIf",15,econd,eif,eelse]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EWhile = function(econd,e,normalWhile) { var $x = ["EWhile",16,econd,e,normalWhile]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ESwitch = function(e,cases,edef) { var $x = ["ESwitch",17,e,cases,edef]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ETry = function(e,catches) { var $x = ["ETry",18,e,catches]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EReturn = function(e) { var $x = ["EReturn",19,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EBreak = ["EBreak",20];
haxe_macro_ExprDef.EBreak.toString = $estr;
haxe_macro_ExprDef.EBreak.__enum__ = haxe_macro_ExprDef;
haxe_macro_ExprDef.EContinue = ["EContinue",21];
haxe_macro_ExprDef.EContinue.toString = $estr;
haxe_macro_ExprDef.EContinue.__enum__ = haxe_macro_ExprDef;
haxe_macro_ExprDef.EUntyped = function(e) { var $x = ["EUntyped",22,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EThrow = function(e) { var $x = ["EThrow",23,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ECast = function(e,t) { var $x = ["ECast",24,e,t]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EDisplay = function(e,isCall) { var $x = ["EDisplay",25,e,isCall]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EDisplayNew = function(t) { var $x = ["EDisplayNew",26,t]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ETernary = function(econd,eif,eelse) { var $x = ["ETernary",27,econd,eif,eelse]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.ECheckType = function(e,t) { var $x = ["ECheckType",28,e,t]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
haxe_macro_ExprDef.EMeta = function(s,e) { var $x = ["EMeta",29,s,e]; $x.__enum__ = haxe_macro_ExprDef; $x.toString = $estr; return $x; };
var haxe_macro_ComplexType = { __ename__ : true, __constructs__ : ["TPath","TFunction","TAnonymous","TParent","TExtend","TOptional"] };
haxe_macro_ComplexType.TPath = function(p) { var $x = ["TPath",0,p]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
haxe_macro_ComplexType.TFunction = function(args,ret) { var $x = ["TFunction",1,args,ret]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
haxe_macro_ComplexType.TAnonymous = function(fields) { var $x = ["TAnonymous",2,fields]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
haxe_macro_ComplexType.TParent = function(t) { var $x = ["TParent",3,t]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
haxe_macro_ComplexType.TExtend = function(p,fields) { var $x = ["TExtend",4,p,fields]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
haxe_macro_ComplexType.TOptional = function(t) { var $x = ["TOptional",5,t]; $x.__enum__ = haxe_macro_ComplexType; $x.toString = $estr; return $x; };
var haxe_rtti_Meta = function() { };
$hxClasses["haxe.rtti.Meta"] = haxe_rtti_Meta;
haxe_rtti_Meta.__name__ = ["haxe","rtti","Meta"];
haxe_rtti_Meta.getMeta = function(t) {
	return t.__meta__;
};
haxe_rtti_Meta.getFields = function(t) {
	var meta = haxe_rtti_Meta.getMeta(t);
	if(meta == null || meta.fields == null) return { }; else return meta.fields;
};
var haxe_xml_Parser = function() { };
$hxClasses["haxe.xml.Parser"] = haxe_xml_Parser;
haxe_xml_Parser.__name__ = ["haxe","xml","Parser"];
haxe_xml_Parser.parse = function(str,strict) {
	if(strict == null) strict = false;
	var doc = Xml.createDocument();
	haxe_xml_Parser.doParse(str,strict,0,doc);
	return doc;
};
haxe_xml_Parser.doParse = function(str,strict,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	var buf = new StringBuf();
	var escapeNext = 1;
	var attrValQuote = -1;
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				buf.addSub(str,start,p - start);
				var child = Xml.createPCData(buf.b);
				buf = new StringBuf();
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf.addSub(str,start,p - start);
				state = 18;
				escapeNext = 13;
				start = p + 1;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child1 = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child1);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw new js__$Boot_HaxeError("Expected <![CDATA[");
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw new js__$Boot_HaxeError("Expected <!DOCTYPE");
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw new js__$Boot_HaxeError("Expected <!--"); else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw new js__$Boot_HaxeError("Expected node name");
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw new js__$Boot_HaxeError("Expected node name");
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				nsubs++;
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				break;
			case 62:
				state = 9;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp;
				if(start == p) throw new js__$Boot_HaxeError("Expected attribute name");
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) throw new js__$Boot_HaxeError("Duplicate attribute");
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw new js__$Boot_HaxeError("Expected =");
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				buf = new StringBuf();
				state = 8;
				start = p + 1;
				attrValQuote = c;
				break;
			default:
				throw new js__$Boot_HaxeError("Expected \"");
			}
			break;
		case 8:
			switch(c) {
			case 38:
				buf.addSub(str,start,p - start);
				state = 18;
				escapeNext = 8;
				start = p + 1;
				break;
			case 62:
				if(strict) throw new js__$Boot_HaxeError("Invalid unescaped " + String.fromCharCode(c) + " in attribute value"); else if(c == attrValQuote) {
					buf.addSub(str,start,p - start);
					var val = buf.b;
					buf = new StringBuf();
					xml.set(aname,val);
					state = 0;
					next = 4;
				}
				break;
			case 60:
				if(strict) throw new js__$Boot_HaxeError("Invalid unescaped " + String.fromCharCode(c) + " in attribute value"); else if(c == attrValQuote) {
					buf.addSub(str,start,p - start);
					var val1 = buf.b;
					buf = new StringBuf();
					xml.set(aname,val1);
					state = 0;
					next = 4;
				}
				break;
			default:
				if(c == attrValQuote) {
					buf.addSub(str,start,p - start);
					var val2 = buf.b;
					buf = new StringBuf();
					xml.set(aname,val2);
					state = 0;
					next = 4;
				}
			}
			break;
		case 9:
			p = haxe_xml_Parser.doParse(str,strict,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw new js__$Boot_HaxeError("Expected >");
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw new js__$Boot_HaxeError("Expected >");
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw new js__$Boot_HaxeError("Expected node name");
				var v = HxOverrides.substr(str,start,p - start);
				if(v != (function($this) {
					var $r;
					if(parent.nodeType != Xml.Element) throw new js__$Boot_HaxeError("Bad node type, expected Element but found " + parent.nodeType);
					$r = parent.nodeName;
					return $r;
				}(this))) throw new js__$Boot_HaxeError("Expected </" + (function($this) {
					var $r;
					if(parent.nodeType != Xml.Element) throw "Bad node type, expected Element but found " + parent.nodeType;
					$r = parent.nodeName;
					return $r;
				}(this)) + ">");
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				var xml1 = Xml.createComment(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml1);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				var xml2 = Xml.createDocType(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml2);
				nsubs++;
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				var xml3 = Xml.createProcessingInstruction(str1);
				parent.addChild(xml3);
				nsubs++;
				state = 1;
			}
			break;
		case 18:
			if(c == 59) {
				var s = HxOverrides.substr(str,start,p - start);
				if(s.charCodeAt(0) == 35) {
					var c1;
					if(s.charCodeAt(1) == 120) c1 = Std.parseInt("0" + HxOverrides.substr(s,1,s.length - 1)); else c1 = Std.parseInt(HxOverrides.substr(s,1,s.length - 1));
					buf.b += String.fromCharCode(c1);
				} else if(!haxe_xml_Parser.escapes.exists(s)) {
					if(strict) throw new js__$Boot_HaxeError("Undefined entity: " + s);
					buf.b += Std.string("&" + s + ";");
				} else buf.add(haxe_xml_Parser.escapes.get(s));
				start = p + 1;
				state = escapeNext;
			} else if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45) && c != 35) {
				if(strict) throw new js__$Boot_HaxeError("Invalid character in entity: " + String.fromCharCode(c));
				buf.b += "&";
				buf.addSub(str,start,p - start);
				p--;
				start = p + 1;
				state = escapeNext;
			}
			break;
		}
		c = StringTools.fastCodeAt(str,++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) {
			buf.addSub(str,start,p - start);
			var xml4 = Xml.createPCData(buf.b);
			parent.addChild(xml4);
			nsubs++;
		}
		return p;
	}
	if(!strict && state == 18 && escapeNext == 13) {
		buf.b += "&";
		buf.addSub(str,start,p - start);
		var xml5 = Xml.createPCData(buf.b);
		parent.addChild(xml5);
		nsubs++;
		return p;
	}
	throw new js__$Boot_HaxeError("Unexpected end");
};
var hex_collection_IHashMap = function() { };
$hxClasses["hex.collection.IHashMap"] = hex_collection_IHashMap;
hex_collection_IHashMap.__name__ = ["hex","collection","IHashMap"];
hex_collection_IHashMap.prototype = {
	__class__: hex_collection_IHashMap
};
var hex_collection_HashMap = function() {
	this._init();
};
$hxClasses["hex.collection.HashMap"] = hex_collection_HashMap;
hex_collection_HashMap.__name__ = ["hex","collection","HashMap"];
hex_collection_HashMap.__interfaces__ = [hex_collection_IHashMap];
hex_collection_HashMap.prototype = {
	_init: function() {
		this._keys = new haxe_ds_StringMap();
		this._values = new haxe_ds_StringMap();
		this._size = 0;
	}
	,clear: function() {
		this._init();
	}
	,containsKey: function(key) {
		if(key != null) {
			var key1 = this._getName(key);
			return this._keys.exists(key1);
		} else throw new js__$Boot_HaxeError(new hex_error_NullPointerException(Std.string(this) + ".containsKey() failed. key can't be null",{ fileName : "HashMap.hx", lineNumber : 57, className : "hex.collection.HashMap", methodName : "containsKey"}));
	}
	,containsValue: function(value) {
		if(value != null) {
			var key = this._getName(value);
			return this._values.exists(key);
		} else throw new js__$Boot_HaxeError(new hex_error_NullPointerException(Std.string(this) + ".containsValue() failed. value can't be null",{ fileName : "HashMap.hx", lineNumber : 80, className : "hex.collection.HashMap", methodName : "containsValue"}));
	}
	,get: function(key) {
		if(key != null) {
			var key1 = this._getName(key);
			return this._keys.get(key1);
		} else throw new js__$Boot_HaxeError(new hex_error_NullPointerException(Std.string(this) + ".get() failed. key can't be null",{ fileName : "HashMap.hx", lineNumber : 112, className : "hex.collection.HashMap", methodName : "get"}));
	}
	,isEmpty: function() {
		return this._size == 0;
	}
	,put: function(key,value) {
		var oldValue = null;
		if(key == null) throw new js__$Boot_HaxeError(new hex_error_NullPointerException(Std.string(this) + ".put() failed. key can't be null",{ fileName : "HashMap.hx", lineNumber : 147, className : "hex.collection.HashMap", methodName : "put"})); else if(value == null) throw new js__$Boot_HaxeError(new hex_error_NullPointerException(Std.string(this) + ".put() failed. value can't be null",{ fileName : "HashMap.hx", lineNumber : 151, className : "hex.collection.HashMap", methodName : "put"})); else {
			if(this.containsKey(key)) oldValue = this.remove(key);
			this._size++;
			var key1 = this._getName(key);
			this._keys.set(key1,value);
			var key2 = this._getName(value);
			this._values.set(key2,key);
			return oldValue;
		}
	}
	,_getName: function(o) {
		var s;
		if(typeof(o) == "string") s = "_S" + Std.string(o); else if(typeof(o) == "boolean") s = "_B" + Std.string(o); else if(typeof(o) == "number" || ((o | 0) === o)) s = "_N" + Std.string(o); else s = "_O" + hex_core_HashCodeFactory.getKey(o);
		return s;
	}
	,remove: function(key) {
		if(key != null) {
			var sKID = this._getName(key);
			if(this._keys.exists(sKID)) {
				var sVID = this._getName(this._keys.get(sKID));
				var value = this._keys.get(sKID);
				this._values.remove(sVID);
				this._keys.remove(sKID);
				this._size--;
				return value;
			} else return null;
		} else throw new js__$Boot_HaxeError(new hex_error_NullPointerException(Std.string(this) + ".remove() failed. key can't be null",{ fileName : "HashMap.hx", lineNumber : 236, className : "hex.collection.HashMap", methodName : "remove"}));
	}
	,size: function() {
		return this._size;
	}
	,getKeys: function() {
		var a = [];
		var it = this._values.iterator();
		while(it.hasNext()) a.push(it.next());
		return a;
	}
	,getValues: function() {
		var a = [];
		var it = this._keys.iterator();
		while(it.hasNext()) a.push(it.next());
		return a;
	}
	,__class__: hex_collection_HashMap
};
var hex_event_IObservable = function() { };
$hxClasses["hex.event.IObservable"] = hex_event_IObservable;
hex_event_IObservable.__name__ = ["hex","event","IObservable"];
hex_event_IObservable.prototype = {
	__class__: hex_event_IObservable
};
var hex_collection_ILocator = function() { };
$hxClasses["hex.collection.ILocator"] = hex_collection_ILocator;
hex_collection_ILocator.__name__ = ["hex","collection","ILocator"];
hex_collection_ILocator.__interfaces__ = [hex_event_IObservable];
hex_collection_ILocator.prototype = {
	__class__: hex_collection_ILocator
};
var hex_collection_ILocatorListener = function() { };
$hxClasses["hex.collection.ILocatorListener"] = hex_collection_ILocatorListener;
hex_collection_ILocatorListener.__name__ = ["hex","collection","ILocatorListener"];
hex_collection_ILocatorListener.prototype = {
	__class__: hex_collection_ILocatorListener
};
var hex_collection_Locator = function() {
	this._map = new hex_collection_HashMap();
	this._dispatcher = new hex_event_ClosureDispatcher();
};
$hxClasses["hex.collection.Locator"] = hex_collection_Locator;
hex_collection_Locator.__name__ = ["hex","collection","Locator"];
hex_collection_Locator.__interfaces__ = [hex_collection_ILocator];
hex_collection_Locator.prototype = {
	clear: function() {
		this._map.clear();
	}
	,release: function() {
		this.clear();
		this._dispatcher.removeAllListeners();
	}
	,isEmpty: function() {
		return this._map.size() == 0;
	}
	,keys: function() {
		return this._map.getKeys();
	}
	,values: function() {
		return this._map.getValues();
	}
	,isRegisteredWithKey: function(key) {
		return this._map.containsKey(key);
	}
	,locate: function(key) {
		if(this.isRegisteredWithKey(key)) return this._map.get(key); else throw new js__$Boot_HaxeError(new hex_error_NoSuchElementException("Can't find item with '" + Std.string(key) + "' key in " + this.toString(),{ fileName : "Locator.hx", lineNumber : 63, className : "hex.collection.Locator", methodName : "locate"}));
	}
	,add: function(m) {
		var iterator = m.keys();
		while(iterator.hasNext()) {
			var key = iterator.next();
			this.register(key,m.h[key]);
		}
	}
	,register: function(key,element) {
		if(this._map.containsKey(key)) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("item is already registered with '" + Std.string(key) + "' key in " + this.toString(),{ fileName : "Locator.hx", lineNumber : 82, className : "hex.collection.Locator", methodName : "register"})); else {
			this._map.put(key,element);
			this._dispatchRegisterEvent(key,element);
			return true;
		}
	}
	,unregister: function(key) {
		if(this.isRegisteredWithKey(key)) {
			this._map.remove(key);
			this._dispatchUnregisterEvent(key);
			return true;
		} else return false;
	}
	,addHandler: function(messageType,callback) {
		return this._dispatcher.addHandler(messageType,callback);
	}
	,removeHandler: function(messageType,callback) {
		return this._dispatcher.removeHandler(messageType,callback);
	}
	,addListener: function(listener) {
		var b = this._dispatcher.addHandler(hex_collection_LocatorMessage.REGISTER,$bind(listener,listener.onRegister));
		return this._dispatcher.addHandler(hex_collection_LocatorMessage.UNREGISTER,$bind(listener,listener.onUnregister)) || b;
	}
	,removeListener: function(listener) {
		var b = this._dispatcher.removeHandler(hex_collection_LocatorMessage.REGISTER,$bind(listener,listener.onRegister));
		return this._dispatcher.removeHandler(hex_collection_LocatorMessage.UNREGISTER,$bind(listener,listener.onUnregister)) || b;
	}
	,toString: function() {
		return hex_log_Stringifier.stringify(this);
	}
	,_dispatchRegisterEvent: function(key,element) {
	}
	,_dispatchUnregisterEvent: function(key) {
	}
	,__class__: hex_collection_Locator
};
var hex_event_MessageType = function(messageName) {
	if(messageName == null) messageName = "handleMessage";
	this.name = messageName;
};
$hxClasses["hex.event.MessageType"] = hex_event_MessageType;
hex_event_MessageType.__name__ = ["hex","event","MessageType"];
hex_event_MessageType.prototype = {
	__class__: hex_event_MessageType
};
var hex_collection_LocatorMessage = function() {
};
$hxClasses["hex.collection.LocatorMessage"] = hex_collection_LocatorMessage;
hex_collection_LocatorMessage.__name__ = ["hex","collection","LocatorMessage"];
hex_collection_LocatorMessage.prototype = {
	__class__: hex_collection_LocatorMessage
};
var hex_compiler_parser_xml_XmlCompiler = function() { };
$hxClasses["hex.compiler.parser.xml.XmlCompiler"] = hex_compiler_parser_xml_XmlCompiler;
hex_compiler_parser_xml_XmlCompiler.__name__ = ["hex","compiler","parser","xml","XmlCompiler"];
var hex_config_stateful_IStatefulConfig = function() { };
$hxClasses["hex.config.stateful.IStatefulConfig"] = hex_config_stateful_IStatefulConfig;
hex_config_stateful_IStatefulConfig.__name__ = ["hex","config","stateful","IStatefulConfig"];
hex_config_stateful_IStatefulConfig.prototype = {
	__class__: hex_config_stateful_IStatefulConfig
};
var hex_config_stateful_ServiceLocator = function() {
	this._mapping = new hex_collection_HashMap();
	hex_collection_Locator.call(this);
};
$hxClasses["hex.config.stateful.ServiceLocator"] = hex_config_stateful_ServiceLocator;
hex_config_stateful_ServiceLocator.__name__ = ["hex","config","stateful","ServiceLocator"];
hex_config_stateful_ServiceLocator.__interfaces__ = [hex_config_stateful_IStatefulConfig];
hex_config_stateful_ServiceLocator.__super__ = hex_collection_Locator;
hex_config_stateful_ServiceLocator.prototype = $extend(hex_collection_Locator.prototype,{
	getService: function(type,name) {
		if(name == null) name = "";
		var helper;
		if(name.length > 0) helper = this.locate(name + "#" + Type.getClassName(type)); else helper = this.locate(Type.getClassName(type));
		var service = helper.value;
		if(js_Boot.__instanceof(service,Class)) service = Type.createInstance(service,[]);
		if(js_Boot.__instanceof(service,hex_service_IService)) return service; else throw new js__$Boot_HaxeError(new hex_error_NoSuchElementException(Std.string(this) + ".getService failed to retrieve service with key '" + Std.string(type) + "'",{ fileName : "ServiceLocator.hx", lineNumber : 58, className : "hex.config.stateful.ServiceLocator", methodName : "getService"}));
	}
	,configure: function(injector,dispatcher,module) {
		var keys = this.keys();
		var _g = 0;
		while(_g < keys.length) {
			var className = keys[_g];
			++_g;
			var separatorIndex = className.indexOf("#");
			var serviceClassKey;
			if(separatorIndex != -1) serviceClassKey = Type.resolveClass(HxOverrides.substr(className,separatorIndex + 1,null)); else serviceClassKey = Type.resolveClass(className);
			var helper = this.locate(className);
			var service = helper.value;
			if(js_Boot.__instanceof(service,Class)) injector.mapToType(serviceClassKey,service,helper.mapName); else if(js_Boot.__instanceof(service,hex_service_stateful_IStatefulService)) {
				var serviceDispatcher = service.getDispatcher();
				if(serviceDispatcher != null) serviceDispatcher.add(dispatcher);
				injector.mapToValue(serviceClassKey,service,helper.mapName);
			} else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("Mapping failed on '" + Std.string(service) + "' This instance is not a stateful service nor a service class.",{ fileName : "ServiceLocator.hx", lineNumber : 98, className : "hex.config.stateful.ServiceLocator", methodName : "configure"}));
			this._mapping.put(serviceClassKey,service);
		}
	}
	,addService: function(service,value,mapName) {
		if(mapName == null) mapName = "";
		return this._registerService(service,new hex_config_stateful__$ServiceLocator_ServiceLocatorHelper(value,mapName),mapName);
	}
	,getMapping: function() {
		return this._mapping;
	}
	,_registerService: function(type,service,mapName) {
		if(mapName == null) mapName = "";
		var className;
		className = (mapName != ""?mapName + "#":"") + Type.getClassName(type);
		return this.register(className,service);
	}
	,_dispatchRegisterEvent: function(key,element) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.REGISTER,[key,element]);
	}
	,_dispatchUnregisterEvent: function(key) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.UNREGISTER,[key]);
	}
	,__class__: hex_config_stateful_ServiceLocator
});
var hex_config_stateful__$ServiceLocator_ServiceLocatorHelper = function(value,mapName) {
	this.value = value;
	this.mapName = mapName;
};
$hxClasses["hex.config.stateful._ServiceLocator.ServiceLocatorHelper"] = hex_config_stateful__$ServiceLocator_ServiceLocatorHelper;
hex_config_stateful__$ServiceLocator_ServiceLocatorHelper.__name__ = ["hex","config","stateful","_ServiceLocator","ServiceLocatorHelper"];
hex_config_stateful__$ServiceLocator_ServiceLocatorHelper.prototype = {
	toString: function() {
		return "ServiceLocatorHelper( value:" + Std.string(this.value) + ", mapName:" + this.mapName + " )";
	}
	,__class__: hex_config_stateful__$ServiceLocator_ServiceLocatorHelper
};
var hex_config_stateless_IStatelessConfig = function() { };
$hxClasses["hex.config.stateless.IStatelessConfig"] = hex_config_stateless_IStatelessConfig;
hex_config_stateless_IStatelessConfig.__name__ = ["hex","config","stateless","IStatelessConfig"];
hex_config_stateless_IStatelessConfig.prototype = {
	__class__: hex_config_stateless_IStatelessConfig
};
var hex_di_IInjectorContainer = function() { };
$hxClasses["hex.di.IInjectorContainer"] = hex_di_IInjectorContainer;
hex_di_IInjectorContainer.__name__ = ["hex","di","IInjectorContainer"];
var hex_config_stateless_StatelessModuleConfig = function() {
};
$hxClasses["hex.config.stateless.StatelessModuleConfig"] = hex_config_stateless_StatelessModuleConfig;
hex_config_stateless_StatelessModuleConfig.__name__ = ["hex","config","stateless","StatelessModuleConfig"];
hex_config_stateless_StatelessModuleConfig.__interfaces__ = [hex_config_stateless_IStatelessConfig];
hex_config_stateless_StatelessModuleConfig.prototype = {
	configure: function() {
		throw new js__$Boot_HaxeError(new hex_error_VirtualMethodException(Std.string(this) + ".configure must be overridden",{ fileName : "StatelessModuleConfig.hx", lineNumber : 30, className : "hex.config.stateless.StatelessModuleConfig", methodName : "configure"}));
	}
	,mapCommand: function(messageType,commandClass) {
		return this.frontController.map(messageType,commandClass);
	}
	,mapController: function(controllerInterface,controllerClass,name) {
		if(name == null) name = "";
		var instance = this.injector.instantiateUnmapped(controllerClass);
		this.injector.mapToValue(controllerInterface,instance,name);
	}
	,mapModel: function(modelInterface,modelClass,name) {
		if(name == null) name = "";
		var instance = this.injector.instantiateUnmapped(modelClass);
		this.injector.mapToValue(modelInterface,instance,name);
		this.injector.mapToValue(Type.resolveClass(Type.getClassName(modelInterface) + "RO"),instance);
	}
	,__class__: hex_config_stateless_StatelessModuleConfig
};
var hex_control_ICompletable = function() { };
$hxClasses["hex.control.ICompletable"] = hex_control_ICompletable;
hex_control_ICompletable.__name__ = ["hex","control","ICompletable"];
hex_control_ICompletable.prototype = {
	__class__: hex_control_ICompletable
};
var hex_control_AsyncResponder = function() {
	this._hasFailed = false;
	this._hasCompleted = false;
	this._completeResponder = [];
	this._failResponder = [];
	this._hasCompleted = false;
	this._hasFailed = false;
};
$hxClasses["hex.control.AsyncResponder"] = hex_control_AsyncResponder;
hex_control_AsyncResponder.__name__ = ["hex","control","AsyncResponder"];
hex_control_AsyncResponder.__interfaces__ = [hex_control_ICompletable];
hex_control_AsyncResponder.prototype = {
	onComplete: function(callback) {
		if(!this._hasCompleted) this._completeResponder.push(callback); else callback(this._result);
		return this;
	}
	,onFail: function(callback) {
		if(!this._hasFailed) this._failResponder.push(callback); else callback(this._errorMessage);
		return this;
	}
	,complete: function(result) {
		if(!this._hasCompleted && !this._hasFailed) {
			this._result = result;
			this._hasCompleted = true;
			var _g = 0;
			var _g1 = this._completeResponder;
			while(_g < _g1.length) {
				var responder = _g1[_g];
				++_g;
				responder(result);
			}
		} else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException("this instance has already completed",{ fileName : "AsyncResponder.hx", lineNumber : 69, className : "hex.control.AsyncResponder", methodName : "complete"}));
	}
	,fail: function(errorMessage) {
		if(!this._hasCompleted && !this._hasFailed) {
			this._errorMessage = errorMessage;
			this._hasFailed = true;
			var _g = 0;
			var _g1 = this._failResponder;
			while(_g < _g1.length) {
				var responder = _g1[_g];
				++_g;
				responder(errorMessage);
			}
		} else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException("this instance has already failed",{ fileName : "AsyncResponder.hx", lineNumber : 86, className : "hex.control.AsyncResponder", methodName : "fail"}));
	}
	,__class__: hex_control_AsyncResponder
};
var hex_control_IFrontController = function() { };
$hxClasses["hex.control.IFrontController"] = hex_control_IFrontController;
hex_control_IFrontController.__name__ = ["hex","control","IFrontController"];
hex_control_IFrontController.prototype = {
	__class__: hex_control_IFrontController
};
var hex_control_FrontController = function(facadeDispatcher,injector,module) {
	hex_collection_Locator.call(this);
	this._facadeDispatcher = facadeDispatcher;
	this._injector = injector;
	this._module = module;
	this._facadeDispatcher.addListener(this);
};
$hxClasses["hex.control.FrontController"] = hex_control_FrontController;
hex_control_FrontController.__name__ = ["hex","control","FrontController"];
hex_control_FrontController.__interfaces__ = [hex_control_IFrontController];
hex_control_FrontController.__super__ = hex_collection_Locator;
hex_control_FrontController.prototype = $extend(hex_collection_Locator.prototype,{
	map: function(messageType,commandClass) {
		var commandMapping = new hex_control_command_CommandMapping(commandClass);
		this.register(messageType,commandMapping);
		return commandMapping;
	}
	,unmap: function(messageType) {
		var commandMapping = this.locate(messageType);
		this.unregister(messageType);
		return commandMapping;
	}
	,handleMessage: function(messageType,request) {
		if(this.isRegisteredWithKey(messageType)) {
			var commandMapping = this.locate(messageType);
			var commandExecutor = new hex_control_command_CommandExecutor(this._injector,this._module);
			var mappingRemoval = null;
			if(commandMapping.get_isFiredOnce()) mappingRemoval = (function(f,a1) {
				return function() {
					return f(a1);
				};
			})($bind(this,this.unmap),messageType);
			commandExecutor.executeCommand(commandMapping,request,mappingRemoval);
		}
	}
	,_dispatchRegisterEvent: function(key,element) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.REGISTER,[key,element]);
	}
	,_dispatchUnregisterEvent: function(key) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.UNREGISTER,[key]);
	}
	,__class__: hex_control_FrontController
});
var hex_control_Request = function(executionPayloads) {
	this._executionPayloads = executionPayloads;
};
$hxClasses["hex.control.Request"] = hex_control_Request;
hex_control_Request.__name__ = ["hex","control","Request"];
hex_control_Request.prototype = {
	getExecutionPayloads: function() {
		return this._executionPayloads;
	}
	,clone: function() {
		return new hex_control_Request(this._executionPayloads);
	}
	,__class__: hex_control_Request
};
var hex_control_command_ICommand = function() { };
$hxClasses["hex.control.command.ICommand"] = hex_control_command_ICommand;
hex_control_command_ICommand.__name__ = ["hex","control","command","ICommand"];
hex_control_command_ICommand.prototype = {
	__class__: hex_control_command_ICommand
};
var hex_control_async_IAsyncCommand = function() { };
$hxClasses["hex.control.async.IAsyncCommand"] = hex_control_async_IAsyncCommand;
hex_control_async_IAsyncCommand.__name__ = ["hex","control","async","IAsyncCommand"];
hex_control_async_IAsyncCommand.__interfaces__ = [hex_control_command_ICommand];
hex_control_async_IAsyncCommand.prototype = {
	__class__: hex_control_async_IAsyncCommand
	,__properties__: {get_isCancelled:"get_isCancelled",get_hasFailed:"get_hasFailed",get_hasCompleted:"get_hasCompleted",get_isRunning:"get_isRunning",get_wasUsed:"get_wasUsed"}
};
var hex_control_async_AsyncCommand = function() {
	this.executeMethodName = "execute";
	this._status = "WAS_NEVER_USED";
	this._dispatcher = new hex_event_ClosureDispatcher();
};
$hxClasses["hex.control.async.AsyncCommand"] = hex_control_async_AsyncCommand;
hex_control_async_AsyncCommand.__name__ = ["hex","control","async","AsyncCommand"];
hex_control_async_AsyncCommand.__interfaces__ = [hex_control_async_IAsyncCommand];
hex_control_async_AsyncCommand.isDetained = function(aSynCommand) {
	return hex_control_async_AsyncCommand._POOL.h.__keys__[aSynCommand.__id__] != null;
};
hex_control_async_AsyncCommand.detain = function(aSynCommand) {
	hex_control_async_AsyncCommand._POOL.set(aSynCommand,true);
};
hex_control_async_AsyncCommand.release = function(aSynCommand) {
	if(hex_control_async_AsyncCommand._POOL.h.__keys__[aSynCommand.__id__] != null) hex_control_async_AsyncCommand._POOL.remove(aSynCommand);
};
hex_control_async_AsyncCommand.prototype = {
	getLogger: function() {
		return this._owner.getLogger();
	}
	,preExecute: function(request) {
		this.get_wasUsed() && this._throwExecutionIllegalStateError();
		this._status = "IS_RUNNING";
		hex_control_async_AsyncCommand.detain(this);
	}
	,cancel: function() {
		this._handleCancel();
	}
	,addAsyncCommandListener: function(listener) {
		this.addCompleteHandler($bind(listener,listener.onAsyncCommandComplete));
		this.addFailHandler($bind(listener,listener.onAsyncCommandFail));
		this.addCancelHandler($bind(listener,listener.onAsyncCommandCancel));
	}
	,removeAsyncCommandListener: function(listener) {
		this.removeCompleteHandler($bind(listener,listener.onAsyncCommandComplete));
		this.removeFailHandler($bind(listener,listener.onAsyncCommandFail));
		this.removeCancelHandler($bind(listener,listener.onAsyncCommandCancel));
	}
	,addCompleteHandler: function(callback) {
		if(this.get_hasCompleted()) callback(this); else this._dispatcher.addHandler(hex_control_async_AsyncCommandMessage.COMPLETE,callback);
	}
	,removeCompleteHandler: function(callback) {
		this._dispatcher.removeHandler(hex_control_async_AsyncCommandMessage.COMPLETE,callback);
	}
	,addFailHandler: function(callback) {
		if(this.get_hasFailed()) callback(this); else this._dispatcher.addHandler(hex_control_async_AsyncCommandMessage.FAIL,callback);
	}
	,removeFailHandler: function(callback) {
		this._dispatcher.removeHandler(hex_control_async_AsyncCommandMessage.FAIL,callback);
	}
	,addCancelHandler: function(callback) {
		if(this.get_isCancelled()) callback(this); else this._dispatcher.addHandler(hex_control_async_AsyncCommandMessage.CANCEL,callback);
	}
	,removeCancelHandler: function(callback) {
		this._dispatcher.removeHandler(hex_control_async_AsyncCommandMessage.CANCEL,callback);
	}
	,_handleComplete: function() {
		this.get_wasUsed() && this._status != "IS_RUNNING" && this._throwIllegalStateError("_handleComplete");
		this._status = "IS_COMPLETED";
		this._dispatcher.dispatch(hex_control_async_AsyncCommandMessage.COMPLETE,[this]);
		this._release();
	}
	,_handleFail: function() {
		this.get_wasUsed() && this._status != "IS_RUNNING" && this._throwIllegalStateError("_handleFail");
		this._status = "IS_FAILED";
		this._dispatcher.dispatch(hex_control_async_AsyncCommandMessage.FAIL,[this]);
		this._release();
	}
	,_handleCancel: function() {
		this.get_wasUsed() && this._status != "IS_RUNNING" && this._throwIllegalStateError("_handleCancel");
		this._status = "IS_CANCELLED";
		this._dispatcher.dispatch(hex_control_async_AsyncCommandMessage.CANCEL,[this]);
		this._release();
	}
	,get_wasUsed: function() {
		return this._status != "WAS_NEVER_USED";
	}
	,get_isRunning: function() {
		return this._status == "IS_RUNNING";
	}
	,get_hasCompleted: function() {
		return this._status == "IS_COMPLETED";
	}
	,get_hasFailed: function() {
		return this._status == "IS_FAILED";
	}
	,get_isCancelled: function() {
		return this._status == "IS_CANCELLED";
	}
	,getResult: function() {
		return null;
	}
	,getReturnedExecutionPayload: function() {
		return null;
	}
	,getOwner: function() {
		return this._owner;
	}
	,setOwner: function(owner) {
		if(this._owner == null) this._owner = owner;
	}
	,_removeAllListeners: function() {
		this._dispatcher.removeAllListeners();
	}
	,_throwExecutionIllegalStateError: function() {
		var msg = "";
		if(this.get_isRunning()) msg = "'execute' call failed. This command is already processing."; else if(this.get_isCancelled()) msg = "'execute' call failed. This command is cancelled."; else if(this.get_hasCompleted()) msg = "'execute' call failed. This command is completed and can't be executed twice."; else if(this.get_hasFailed()) msg = "'execute' call failed. This command has failed and can't be executed twice."; else if(!this.get_wasUsed()) msg = "'execute' call failed. 'preExecute' should be called before.";
		this._release();
		throw new js__$Boot_HaxeError(new hex_error_IllegalStateException(msg,{ fileName : "AsyncCommand.hx", lineNumber : 240, className : "hex.control.async.AsyncCommand", methodName : "_throwExecutionIllegalStateError"}));
	}
	,_throwIllegalStateError: function(process) {
		var msg = "";
		if(this.get_isCancelled()) msg = "'" + process + "' call failed in '" + hex_log_Stringifier.stringify(this) + "'. This command was already cancelled."; else if(this.get_hasCompleted()) msg = "'" + process + "' call failed in '" + hex_log_Stringifier.stringify(this) + "'. This command was already completed."; else if(this.get_hasFailed()) msg = "'" + process + "' call failed in '" + hex_log_Stringifier.stringify(this) + "'. This command has already failed.";
		this._release();
		throw new js__$Boot_HaxeError(new hex_error_IllegalStateException(msg,{ fileName : "AsyncCommand.hx", lineNumber : 261, className : "hex.control.async.AsyncCommand", methodName : "_throwIllegalStateError"}));
	}
	,_release: function() {
		this._removeAllListeners();
		hex_control_async_AsyncCommand.release(this);
	}
	,__class__: hex_control_async_AsyncCommand
	,__properties__: {get_isCancelled:"get_isCancelled",get_hasFailed:"get_hasFailed",get_hasCompleted:"get_hasCompleted",get_isRunning:"get_isRunning",get_wasUsed:"get_wasUsed"}
};
var hex_control_async_AsyncCommandMessage = function() {
};
$hxClasses["hex.control.async.AsyncCommandMessage"] = hex_control_async_AsyncCommandMessage;
hex_control_async_AsyncCommandMessage.__name__ = ["hex","control","async","AsyncCommandMessage"];
hex_control_async_AsyncCommandMessage.prototype = {
	__class__: hex_control_async_AsyncCommandMessage
};
var hex_control_async_AsyncCommandUtil = function() {
	throw new js__$Boot_HaxeError(new hex_error_PrivateConstructorException("'AsyncCommandUtil' class can't be instantiated.",{ fileName : "AsyncCommandUtil.hx", lineNumber : 15, className : "hex.control.async.AsyncCommandUtil", methodName : "new"}));
};
$hxClasses["hex.control.async.AsyncCommandUtil"] = hex_control_async_AsyncCommandUtil;
hex_control_async_AsyncCommandUtil.__name__ = ["hex","control","async","AsyncCommandUtil"];
hex_control_async_AsyncCommandUtil.addListenersToAsyncCommand = function(handlers,methodToAddListener) {
	var _g = 0;
	while(_g < handlers.length) {
		var handler = handlers[_g];
		++_g;
		methodToAddListener(handler);
	}
};
hex_control_async_AsyncCommandUtil.prototype = {
	__class__: hex_control_async_AsyncCommandUtil
};
var hex_control_async_IAsyncCommandListener = function() { };
$hxClasses["hex.control.async.IAsyncCommandListener"] = hex_control_async_IAsyncCommandListener;
hex_control_async_IAsyncCommandListener.__name__ = ["hex","control","async","IAsyncCommandListener"];
hex_control_async_IAsyncCommandListener.prototype = {
	__class__: hex_control_async_IAsyncCommandListener
};
var hex_control_command_CommandExecutor = function(injector,module) {
	this._injector = injector;
	this._module = module;
};
$hxClasses["hex.control.command.CommandExecutor"] = hex_control_command_CommandExecutor;
hex_control_command_CommandExecutor.__name__ = ["hex","control","command","CommandExecutor"];
hex_control_command_CommandExecutor.prototype = {
	executeCommand: function(mapping,request,mappingRemoval) {
		var payloads = mapping.getPayloads();
		if(request != null) if(payloads != null) payloads = payloads.concat(request.getExecutionPayloads()); else payloads = request.getExecutionPayloads();
		if(mapping.get_hasMappingResult()) if(payloads != null) payloads = payloads.concat(mapping.getPayloadResult()); else payloads = mapping.getPayloadResult();
		if(payloads != null) hex_control_payload_PayloadUtil.mapPayload(payloads,this._injector);
		var command = null;
		if(!mapping.get_hasGuard() || hex_control_guard_GuardUtil.guardsApprove(mapping.getGuards(),this._injector)) {
			if(mappingRemoval != null) mappingRemoval();
			command = this._injector.getOrCreateNewInstance(mapping.getCommandClass());
			mapping.setLastCommandInstance(command);
		}
		if(payloads != null) hex_control_payload_PayloadUtil.unmapPayload(payloads,this._injector);
		if(command != null) {
			command.setOwner(this._module);
			var isAsync = js_Boot.__instanceof(command,hex_control_async_IAsyncCommand);
			if(isAsync) {
				var asynCommand;
				asynCommand = js_Boot.__cast(command , hex_control_async_IAsyncCommand);
				asynCommand.preExecute(request);
				if(mapping.get_hasCompleteHandler()) hex_control_async_AsyncCommandUtil.addListenersToAsyncCommand(mapping.getCompleteHandlers(),$bind(asynCommand,asynCommand.addCompleteHandler));
				if(mapping.get_hasFailHandler()) hex_control_async_AsyncCommandUtil.addListenersToAsyncCommand(mapping.getFailHandlers(),$bind(asynCommand,asynCommand.addFailHandler));
				if(mapping.get_hasCancelHandler()) hex_control_async_AsyncCommandUtil.addListenersToAsyncCommand(mapping.getCancelHandlers(),$bind(asynCommand,asynCommand.addCancelHandler));
			}
			Reflect.callMethod(command,Reflect.field(command,command.executeMethodName),request != null?[request]:[]);
		}
	}
	,__class__: hex_control_command_CommandExecutor
};
var hex_control_command_ICommandMapping = function() { };
$hxClasses["hex.control.command.ICommandMapping"] = hex_control_command_ICommandMapping;
hex_control_command_ICommandMapping.__name__ = ["hex","control","command","ICommandMapping"];
hex_control_command_ICommandMapping.prototype = {
	__class__: hex_control_command_ICommandMapping
	,__properties__: {get_hasMappingResult:"get_hasMappingResult",get_hasCancelHandler:"get_hasCancelHandler",get_hasFailHandler:"get_hasFailHandler",get_hasCompleteHandler:"get_hasCompleteHandler",get_hasPayload:"get_hasPayload",get_isFiredOnce:"get_isFiredOnce",get_hasGuard:"get_hasGuard"}
};
var hex_control_command_CommandMapping = function(commandClass) {
	this._commandClass = commandClass;
	this.isFiredOnce = false;
};
$hxClasses["hex.control.command.CommandMapping"] = hex_control_command_CommandMapping;
hex_control_command_CommandMapping.__name__ = ["hex","control","command","CommandMapping"];
hex_control_command_CommandMapping.__interfaces__ = [hex_control_command_ICommandMapping];
hex_control_command_CommandMapping.prototype = {
	getCommandClass: function() {
		return this._commandClass;
	}
	,get_hasGuard: function() {
		return this._guards != null;
	}
	,getGuards: function() {
		return this._guards;
	}
	,withGuard: function(guard) {
		if(this._guards == null) this._guards = [];
		this._guards.push(guard);
		return this;
	}
	,get_isFiredOnce: function() {
		return this.isFiredOnce;
	}
	,once: function() {
		this.isFiredOnce = true;
		return this;
	}
	,get_hasPayload: function() {
		return this._payloads != null;
	}
	,getPayloads: function() {
		return this._payloads;
	}
	,withPayload: function(payload) {
		if(this._payloads == null) this._payloads = [];
		this._payloads.push(payload);
		return this;
	}
	,getCompleteHandlers: function() {
		return this._completeHandlers;
	}
	,get_hasCompleteHandler: function() {
		return this._completeHandlers != null;
	}
	,withCompleteHandler: function(handler) {
		if(this._completeHandlers == null) this._completeHandlers = [];
		this._completeHandlers.push(handler);
		return this;
	}
	,getFailHandlers: function() {
		return this._failHandlers;
	}
	,get_hasFailHandler: function() {
		return this._failHandlers != null;
	}
	,withFailHandler: function(handler) {
		if(this._failHandlers == null) this._failHandlers = [];
		this._failHandlers.push(handler);
		return this;
	}
	,getCancelHandlers: function() {
		return this._cancelHandlers;
	}
	,get_hasCancelHandler: function() {
		return this._cancelHandlers != null;
	}
	,withCancelHandler: function(handler) {
		if(this._cancelHandlers == null) this._cancelHandlers = [];
		this._cancelHandlers.push(handler);
		return this;
	}
	,setContextOwner: function(contextOwner) {
		this._contextOwner = contextOwner;
	}
	,getContextOwner: function() {
		return this._contextOwner;
	}
	,get_hasMappingResult: function() {
		return this._mappingResults != null;
	}
	,withMappingResult: function(mappingResult) {
		if(this._mappingResults == null) this._mappingResults = [];
		this._mappingResults.push(mappingResult);
		return this;
	}
	,setLastCommandInstance: function(command) {
		this._command = command;
	}
	,getPayloadResult: function() {
		var payload = [];
		if(this._mappingResults != null) {
			var _g = 0;
			var _g1 = this._mappingResults;
			while(_g < _g1.length) {
				var mapping = _g1[_g];
				++_g;
				var command;
				command = (js_Boot.__cast(mapping , hex_control_command_CommandMapping))._command;
				if(command != null) {
					var returnedExecutionPayload = command.getReturnedExecutionPayload();
					if(returnedExecutionPayload != null) payload = payload.concat(command.getReturnedExecutionPayload());
				}
			}
		}
		if(payload.length > 0) return payload; else return null;
	}
	,__class__: hex_control_command_CommandMapping
	,__properties__: {get_hasMappingResult:"get_hasMappingResult",get_hasCancelHandler:"get_hasCancelHandler",get_hasFailHandler:"get_hasFailHandler",get_hasCompleteHandler:"get_hasCompleteHandler",get_hasPayload:"get_hasPayload",get_isFiredOnce:"get_isFiredOnce",get_hasGuard:"get_hasGuard"}
};
var hex_control_guard_GuardUtil = function() {
	throw new js__$Boot_HaxeError(new hex_error_PrivateConstructorException("'GuardUtil' class can't be instantiated.",{ fileName : "GuardUtil.hx", lineNumber : 14, className : "hex.control.guard.GuardUtil", methodName : "new"}));
};
$hxClasses["hex.control.guard.GuardUtil"] = hex_control_guard_GuardUtil;
hex_control_guard_GuardUtil.__name__ = ["hex","control","guard","GuardUtil"];
hex_control_guard_GuardUtil.guardsApprove = function(guards,injector) {
	if(guards != null) {
		var _g = 0;
		while(_g < guards.length) {
			var guard = guards[_g];
			++_g;
			if(js_Boot.__instanceof(guard,Class)) {
				var scope;
				if(injector != null) scope = injector.instantiateUnmapped(guard); else scope = Type.createInstance(guard,[]);
				return Reflect.callMethod(scope,Reflect.field(scope,"approve"),[]);
			} else if(Object.prototype.hasOwnProperty.call(guard,"approve")) guard = Reflect.field(guard,"approve");
			if(Reflect.isFunction(guard)) {
				var b = guard();
				if(!b) return false;
			}
		}
	}
	return true;
};
hex_control_guard_GuardUtil.prototype = {
	__class__: hex_control_guard_GuardUtil
};
var hex_control_macro_IMacroExecutor = function() { };
$hxClasses["hex.control.macro.IMacroExecutor"] = hex_control_macro_IMacroExecutor;
hex_control_macro_IMacroExecutor.__name__ = ["hex","control","macro","IMacroExecutor"];
hex_control_macro_IMacroExecutor.prototype = {
	__class__: hex_control_macro_IMacroExecutor
	,__properties__: {get_commandIndex:"get_commandIndex",get_hasRunEveryCommand:"get_hasRunEveryCommand",get_hasNextCommandMapping:"get_hasNextCommandMapping"}
};
var hex_control_macro_Macro = function() {
	this._isSequenceMode = true;
	this._isAtomic = true;
	hex_control_async_AsyncCommand.call(this);
	this.set_isAtomic(true);
	this.set_isInSequenceMode(true);
};
$hxClasses["hex.control.macro.Macro"] = hex_control_macro_Macro;
hex_control_macro_Macro.__name__ = ["hex","control","macro","Macro"];
hex_control_macro_Macro.__interfaces__ = [hex_control_async_IAsyncCommandListener];
hex_control_macro_Macro.__super__ = hex_control_async_AsyncCommand;
hex_control_macro_Macro.prototype = $extend(hex_control_async_AsyncCommand.prototype,{
	_prepare: function() {
		throw new js__$Boot_HaxeError(new hex_error_VirtualMethodException(Std.string(this) + ".execute must be overridden",{ fileName : "Macro.hx", lineNumber : 36, className : "hex.control.macro.Macro", methodName : "_prepare"}));
	}
	,preExecute: function(request) {
		if(this.macroExecutor != null) this.macroExecutor.setAsyncCommandListener(this); else throw new js__$Boot_HaxeError(new hex_error_NullPointerException("macroExecutor can't be null in '" + hex_log_Stringifier.stringify(this) + "'",{ fileName : "Macro.hx", lineNumber : 47, className : "hex.control.macro.Macro", methodName : "preExecute"}));
		if(request != null) this._request = request;
		this._prepare();
		hex_control_async_AsyncCommand.prototype.preExecute.call(this,request);
	}
	,execute: function(request) {
		!this.get_isRunning() && this._throwExecutionIllegalStateError();
		this._executeNextCommand();
	}
	,add: function(commandClass) {
		return this.macroExecutor.add(commandClass);
	}
	,addMapping: function(mapping) {
		return this.macroExecutor.addMapping(mapping);
	}
	,_executeCommand: function() {
		var command = this.macroExecutor.executeNextCommand(this._request);
		if(command != null) {
			var isAsync = js_Boot.__instanceof(command,hex_control_async_IAsyncCommand);
			if(!isAsync || this.get_isInParallelMode()) this._executeNextCommand();
		}
	}
	,_executeNextCommand: function() {
		if(this.macroExecutor.get_hasNextCommandMapping()) this._executeCommand(); else if(this.macroExecutor.get_hasRunEveryCommand()) this._handleComplete();
	}
	,get_isAtomic: function() {
		return this.isAtomic;
	}
	,set_isAtomic: function(value) {
		this.isAtomic = value;
		return value;
	}
	,get_isInSequenceMode: function() {
		return this.isInSequenceMode;
	}
	,set_isInSequenceMode: function(value) {
		this.isInSequenceMode = value;
		return value;
	}
	,get_isInParallelMode: function() {
		return !this.get_isInSequenceMode();
	}
	,set_isInParallelMode: function(value) {
		this.set_isInSequenceMode(!value);
		return this.get_isInSequenceMode();
	}
	,onAsyncCommandComplete: function(cmd) {
		this.macroExecutor.asyncCommandCalled(cmd);
		this._executeNextCommand();
	}
	,onAsyncCommandFail: function(cmd) {
		if(cmd != null) this.macroExecutor.asyncCommandCalled(cmd);
		if(this.get_isAtomic()) {
			if(this.get_isRunning()) this._handleFail();
		} else this._executeNextCommand();
	}
	,onAsyncCommandCancel: function(cmd) {
		this.macroExecutor.asyncCommandCalled(cmd);
		if(this.get_isAtomic()) this.cancel(); else this._executeNextCommand();
	}
	,toString: function() {
		return hex_log_Stringifier.stringify(this);
	}
	,__class__: hex_control_macro_Macro
	,__properties__: $extend(hex_control_async_AsyncCommand.prototype.__properties__,{set_isInParallelMode:"set_isInParallelMode",get_isInParallelMode:"get_isInParallelMode",set_isInSequenceMode:"set_isInSequenceMode",get_isInSequenceMode:"get_isInSequenceMode",set_isAtomic:"set_isAtomic",get_isAtomic:"get_isAtomic"})
});
var hex_control_macro_MacroExecutor = function() {
	this._commandMappingCollection = [];
	this._runningAsyncCommandList = [];
	this._commandIndex = 0;
	this._commandCalledCount = 0;
};
$hxClasses["hex.control.macro.MacroExecutor"] = hex_control_macro_MacroExecutor;
hex_control_macro_MacroExecutor.__name__ = ["hex","control","macro","MacroExecutor"];
hex_control_macro_MacroExecutor.__interfaces__ = [hex_control_macro_IMacroExecutor];
hex_control_macro_MacroExecutor.prototype = {
	executeCommand: function(mapping,request) {
		var injector = null;
		var contextOwner = mapping.getContextOwner();
		if(contextOwner != null) injector = contextOwner.getInjector(); else injector = this.injector;
		var payloads = mapping.getPayloads();
		if(request != null) {
			var requestPayloads = request.getExecutionPayloads();
			if(requestPayloads != null) if(payloads != null) payloads = payloads.concat(request.getExecutionPayloads()); else payloads = requestPayloads;
		}
		if(mapping.get_hasMappingResult()) if(payloads != null) payloads = payloads.concat(mapping.getPayloadResult()); else payloads = mapping.getPayloadResult();
		if(payloads != null) hex_control_payload_PayloadUtil.mapPayload(payloads,injector);
		var command = null;
		if(!mapping.get_hasGuard() || hex_control_guard_GuardUtil.guardsApprove(mapping.getGuards(),injector)) {
			command = injector.getOrCreateNewInstance(mapping.getCommandClass());
			mapping.setLastCommandInstance(command);
		} else {
			this._commandCalledCount++;
			this._asyncCommandListener.onAsyncCommandFail(null);
			return null;
		}
		if(payloads != null) hex_control_payload_PayloadUtil.unmapPayload(payloads,injector);
		if(command != null) {
			if(injector.hasMapping(hex_module_IModule)) command.setOwner(injector.getInstance(hex_module_IModule));
			var isAsync = js_Boot.__instanceof(command,hex_control_async_IAsyncCommand);
			if(isAsync) {
				var aSyncCommand;
				aSyncCommand = js_Boot.__cast(command , hex_control_async_IAsyncCommand);
				aSyncCommand.preExecute(request);
				if(mapping.get_hasCompleteHandler()) hex_control_async_AsyncCommandUtil.addListenersToAsyncCommand(mapping.getCompleteHandlers(),$bind(aSyncCommand,aSyncCommand.addCompleteHandler));
				if(mapping.get_hasFailHandler()) hex_control_async_AsyncCommandUtil.addListenersToAsyncCommand(mapping.getFailHandlers(),$bind(aSyncCommand,aSyncCommand.addFailHandler));
				if(mapping.get_hasCancelHandler()) hex_control_async_AsyncCommandUtil.addListenersToAsyncCommand(mapping.getCancelHandlers(),$bind(aSyncCommand,aSyncCommand.addCancelHandler));
				aSyncCommand.addAsyncCommandListener(this._asyncCommandListener);
				this._runningAsyncCommandList.push(aSyncCommand);
			}
			Reflect.callMethod(command,Reflect.field(command,command.executeMethodName),request != null?[request]:[]);
			if(!isAsync) this._commandCalledCount++;
		}
		return command;
	}
	,get_commandIndex: function() {
		return this._commandIndex;
	}
	,get_hasRunEveryCommand: function() {
		return this._commandCalledCount == this._commandMappingCollection.length;
	}
	,setAsyncCommandListener: function(listener) {
		this._asyncCommandListener = listener;
	}
	,get_hasNextCommandMapping: function() {
		return this._commandMappingCollection != null && this._commandIndex < this._commandMappingCollection.length;
	}
	,add: function(commandClass) {
		var mapping = new hex_control_command_CommandMapping(commandClass);
		this._commandMappingCollection.push(mapping);
		return mapping;
	}
	,addMapping: function(mapping) {
		this._commandMappingCollection.push(mapping);
		return mapping;
	}
	,executeNextCommand: function(request) {
		return this.executeCommand(this._commandMappingCollection[this._commandIndex++],request);
	}
	,asyncCommandCalled: function(asyncCommand) {
		var index = HxOverrides.indexOf(this._runningAsyncCommandList,asyncCommand,0);
		if(index > -1) {
			this._runningAsyncCommandList.splice(index,1);
			this._commandCalledCount++;
		} else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException("Following command was not running: " + Std.string(asyncCommand),{ fileName : "MacroExecutor.hx", lineNumber : 183, className : "hex.control.macro.MacroExecutor", methodName : "asyncCommandCalled"}));
	}
	,__class__: hex_control_macro_MacroExecutor
	,__properties__: {get_hasNextCommandMapping:"get_hasNextCommandMapping",get_hasRunEveryCommand:"get_hasRunEveryCommand",get_commandIndex:"get_commandIndex"}
};
var hex_control_payload_ExecutionPayload = function(data,type,name) {
	if(name == null) name = "";
	if(data == null) throw new js__$Boot_HaxeError(new hex_error_NullPointerException("ExecutionPayload data can't be null",{ fileName : "ExecutionPayload.hx", lineNumber : 21, className : "hex.control.payload.ExecutionPayload", methodName : "new"})); else if(!js_Boot.__instanceof(data,type)) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("ExecutionPayload data '" + Std.string(data) + "' should be an instance of type '" + Std.string(type) + "'",{ fileName : "ExecutionPayload.hx", lineNumber : 25, className : "hex.control.payload.ExecutionPayload", methodName : "new"}));
	this._data = data;
	this._type = type;
	this._name = name;
};
$hxClasses["hex.control.payload.ExecutionPayload"] = hex_control_payload_ExecutionPayload;
hex_control_payload_ExecutionPayload.__name__ = ["hex","control","payload","ExecutionPayload"];
hex_control_payload_ExecutionPayload.prototype = {
	getData: function() {
		return this._data;
	}
	,getType: function() {
		return this._type;
	}
	,getName: function() {
		return this._name;
	}
	,withClass: function(type) {
		this._type = type;
		return this;
	}
	,withName: function(name) {
		if(name != null) this._name = name; else this._name = "";
		return this;
	}
	,__class__: hex_control_payload_ExecutionPayload
};
var hex_control_payload_PayloadUtil = function() {
	throw new js__$Boot_HaxeError(new hex_error_PrivateConstructorException("'PayloadUtil' class can't be instantiated.",{ fileName : "PayloadUtil.hx", lineNumber : 14, className : "hex.control.payload.PayloadUtil", methodName : "new"}));
};
$hxClasses["hex.control.payload.PayloadUtil"] = hex_control_payload_PayloadUtil;
hex_control_payload_PayloadUtil.__name__ = ["hex","control","payload","PayloadUtil"];
hex_control_payload_PayloadUtil.mapPayload = function(payloads,injector) {
	var _g = 0;
	while(_g < payloads.length) {
		var payload = payloads[_g];
		++_g;
		injector.mapToValue(payload.getType(),payload.getData(),payload.getName());
	}
};
hex_control_payload_PayloadUtil.unmapPayload = function(payloads,injector) {
	var _g = 0;
	while(_g < payloads.length) {
		var payload = payloads[_g];
		++_g;
		injector.unmap(payload.getType(),payload.getName());
	}
};
hex_control_payload_PayloadUtil.prototype = {
	__class__: hex_control_payload_PayloadUtil
};
var hex_core_HashCodeFactory = function() {
	throw new js__$Boot_HaxeError(new hex_error_PrivateConstructorException("This class can't be instantiated.",{ fileName : "HashCodeFactory.hx", lineNumber : 15, className : "hex.core.HashCodeFactory", methodName : "new"}));
};
$hxClasses["hex.core.HashCodeFactory"] = hex_core_HashCodeFactory;
hex_core_HashCodeFactory.__name__ = ["hex","core","HashCodeFactory"];
hex_core_HashCodeFactory.getNextKEY = function() {
	return hex_core_HashCodeFactory._nKEY++;
};
hex_core_HashCodeFactory.getNextName = function() {
	return "" + hex_core_HashCodeFactory._nKEY;
};
hex_core_HashCodeFactory.getKey = function(o) {
	if(!(function($this) {
		var $r;
		var key = o;
		$r = hex_core_HashCodeFactory._M.h.__keys__[key.__id__] != null;
		return $r;
	}(this))) {
		var key1 = o;
		var value = hex_core_HashCodeFactory.getNextKEY();
		hex_core_HashCodeFactory._M.set(key1,value);
	}
	var key2 = o;
	return hex_core_HashCodeFactory._M.h[key2.__id__];
};
hex_core_HashCodeFactory.previewNextKey = function() {
	return hex_core_HashCodeFactory._nKEY;
};
hex_core_HashCodeFactory.prototype = {
	__class__: hex_core_HashCodeFactory
};
var hex_core_IAnnotationParsable = function() { };
$hxClasses["hex.core.IAnnotationParsable"] = hex_core_IAnnotationParsable;
hex_core_IAnnotationParsable.__name__ = ["hex","core","IAnnotationParsable"];
var hex_data_IParser = function() { };
$hxClasses["hex.data.IParser"] = hex_data_IParser;
hex_data_IParser.__name__ = ["hex","data","IParser"];
hex_data_IParser.prototype = {
	__class__: hex_data_IParser
};
var hex_di_IBasicInjector = function() { };
$hxClasses["hex.di.IBasicInjector"] = hex_di_IBasicInjector;
hex_di_IBasicInjector.__name__ = ["hex","di","IBasicInjector"];
hex_di_IBasicInjector.prototype = {
	__class__: hex_di_IBasicInjector
};
var hex_di_IContextOwner = function() { };
$hxClasses["hex.di.IContextOwner"] = hex_di_IContextOwner;
hex_di_IContextOwner.__name__ = ["hex","di","IContextOwner"];
hex_di_IContextOwner.prototype = {
	__class__: hex_di_IContextOwner
};
var hex_di_IDependencyInjector = function() { };
$hxClasses["hex.di.IDependencyInjector"] = hex_di_IDependencyInjector;
hex_di_IDependencyInjector.__name__ = ["hex","di","IDependencyInjector"];
hex_di_IDependencyInjector.__interfaces__ = [hex_di_IBasicInjector];
hex_di_IDependencyInjector.prototype = {
	__class__: hex_di_IDependencyInjector
};
var hex_event_IEvent = function() { };
$hxClasses["hex.event.IEvent"] = hex_event_IEvent;
hex_event_IEvent.__name__ = ["hex","event","IEvent"];
hex_event_IEvent.prototype = {
	__class__: hex_event_IEvent
};
var hex_event_BasicEvent = function(type,target) {
	this.type = type;
	this.target = target;
};
$hxClasses["hex.event.BasicEvent"] = hex_event_BasicEvent;
hex_event_BasicEvent.__name__ = ["hex","event","BasicEvent"];
hex_event_BasicEvent.__interfaces__ = [hex_event_IEvent];
hex_event_BasicEvent.prototype = {
	clone: function() {
		return new hex_event_BasicEvent(this.type,this.target);
	}
	,toString: function() {
		return hex_log_Stringifier.stringify(this) + (":{ type:" + this.type + ", target:" + Std.string(this.target) + " }");
	}
	,__class__: hex_event_BasicEvent
};
var hex_di_InjectionEvent = function(type,target,instance,instanceType) {
	hex_event_BasicEvent.call(this,type,target);
	this.instance = instance;
	this.instanceType = instanceType;
};
$hxClasses["hex.di.InjectionEvent"] = hex_di_InjectionEvent;
hex_di_InjectionEvent.__name__ = ["hex","di","InjectionEvent"];
hex_di_InjectionEvent.__super__ = hex_event_BasicEvent;
hex_di_InjectionEvent.prototype = $extend(hex_event_BasicEvent.prototype,{
	clone: function() {
		return new hex_di_InjectionEvent(this.type,this.target,this.instance,this.instanceType);
	}
	,__class__: hex_di_InjectionEvent
});
var hex_di_Injector = function() {
	this._classDescriptor = new hex_di_reflect_FastClassDescriptionProvider();
	this._ed = new hex_event_LightweightClosureDispatcher();
	this._mapping = new haxe_ds_StringMap();
	this._processedMapping = new haxe_ds_StringMap();
	this._managedObjects = new hex_collection_HashMap();
};
$hxClasses["hex.di.Injector"] = hex_di_Injector;
hex_di_Injector.__name__ = ["hex","di","Injector"];
hex_di_Injector.__interfaces__ = [hex_di_IDependencyInjector];
hex_di_Injector.prototype = {
	createChildInjector: function() {
		var injector = new hex_di_Injector();
		injector._parentInjector = this;
		return injector;
	}
	,addEventListener: function(eventType,callback) {
		return this._ed.addEventListener(eventType,callback);
	}
	,removeEventListener: function(eventType,callback) {
		return this._ed.removeEventListener(eventType,callback);
	}
	,mapToValue: function(clazz,value,name) {
		if(name == null) name = "";
		this.map(clazz,name).toValue(value);
	}
	,mapToType: function(clazz,type,name) {
		if(name == null) name = "";
		this.map(clazz,name).toType(type);
	}
	,mapToSingleton: function(clazz,type,name) {
		if(name == null) name = "";
		this.map(clazz,name).toSingleton(type);
	}
	,getInstance: function(type,name) {
		if(name == null) name = "";
		var mappingID = Type.getClassName(type) + "|" + name;
		var mapping = this._mapping.get(mappingID);
		if(this._mapping.get(mappingID) != null) return mapping.getResult(); else if(this._parentInjector != null) return this._parentInjector.getInstance(type,name); else throw new js__$Boot_HaxeError(new hex_di_error_MissingMappingException("'" + hex_log_Stringifier.stringify(this) + "' is missing a mapping to get instance with type '" + Type.getClassName(type) + "' inside instance of '" + hex_log_Stringifier.stringify(this) + "'. Target dependency: '" + mappingID + "'",{ fileName : "Injector.hx", lineNumber : 91, className : "hex.di.Injector", methodName : "getInstance"}));
	}
	,getProvider: function(type,name) {
		if(name == null) name = "";
		var mappingID = Type.getClassName(type) + "|" + name;
		var mapping = this._mapping.get(mappingID);
		if(this._mapping.get(mappingID) != null) return mapping.provider; else if(this._parentInjector != null) return this._parentInjector.getInstance(type,name); else return null;
	}
	,instantiateUnmapped: function(type) {
		var classDescription = this._classDescriptor.getClassDescription(type);
		var instance;
		if(classDescription != null && classDescription.c != null) instance = Type.createInstance(type,hex_di_reflect_InjectionUtil.gatherArgs(type,this,classDescription.c.a,"new")); else instance = Type.createInstance(type,[]);
		this._ed.dispatchEvent(new hex_di_InjectionEvent("onPostInstantiate",this,instance,type));
		if(classDescription != null) this._applyInjection(instance,type,classDescription);
		return instance;
	}
	,getOrCreateNewInstance: function(type) {
		if(this.satisfies(type)) return this.getInstance(type); else return this.instantiateUnmapped(type);
	}
	,hasMapping: function(type,name) {
		if(name == null) name = "";
		var mappingID = Type.getClassName(type) + "|" + name;
		if(this._mapping.get(mappingID) != null) return true; else if(this._parentInjector != null) return this._parentInjector.hasMapping(type,name); else return false;
	}
	,unmap: function(type,name) {
		if(name == null) name = "";
		var mappingID = Type.getClassName(type) + "|" + name;
		var mapping = this._mapping.get(mappingID);
		if(mapping == null) throw new js__$Boot_HaxeError(new hex_di_error_InjectorException("unmap failed with mapping named '" + mappingID + "' @" + hex_log_Stringifier.stringify(this),{ fileName : "Injector.hx", lineNumber : 171, className : "hex.di.Injector", methodName : "unmap"}));
		mapping.provider.destroy();
		this._mapping.remove(mappingID);
	}
	,hasDirectMapping: function(type,name) {
		if(name == null) name = "";
		return (function($this) {
			var $r;
			var key = Type.getClassName(type) + "|" + name;
			$r = $this._mapping.get(key);
			return $r;
		}(this)) != null;
	}
	,satisfies: function(type,name) {
		if(name == null) name = "";
		var mappingID = Type.getClassName(type) + "|" + name;
		var mapping = this._mapping.get(mappingID);
		if(this._mapping.get(mappingID) != null) return mapping.provider != null; else if(this._parentInjector != null) return this._parentInjector.satisfies(type,name); else return false;
	}
	,satisfiesDirectly: function(type,name) {
		if(name == null) name = "";
		var mappingID = Type.getClassName(type) + "|" + name;
		var mapping = this._mapping.get(mappingID);
		if(mapping != null) return mapping.provider != null; else return false;
	}
	,injectInto: function(target) {
		var targetType = Type.getClass(target);
		var classDescription = this._classDescriptor.getClassDescription(targetType);
		if(classDescription != null) this._applyInjection(target,targetType,classDescription); else throw new js__$Boot_HaxeError(new hex_di_error_MissingClassDescriptionException("'" + hex_log_Stringifier.stringify(this) + "' is missing a class description to inject into an instance of '" + hex_util_ClassUtil.getClassName(target) + "'. This class should implement IInjectorContainer",{ fileName : "Injector.hx", lineNumber : 228, className : "hex.di.Injector", methodName : "injectInto"}));
	}
	,destroyInstance: function(instance) {
		this._managedObjects.remove(instance);
		var classDescription = this._classDescriptor.getClassDescription(Type.getClass(instance));
		if(classDescription != null) {
			var _g = 0;
			var _g1 = classDescription.pd;
			while(_g < _g1.length) {
				var preDestroy = _g1[_g];
				++_g;
				hex_di_reflect_InjectionUtil.applyMethodInjection(instance,this,preDestroy.a,preDestroy.m);
			}
		}
	}
	,map: function(type,name) {
		if(name == null) name = "";
		var mappingID = Type.getClassName(type) + "|" + name;
		if(this._mapping.get(mappingID) != null) return this._mapping.get(mappingID); else return this._createMapping(type,name,mappingID);
	}
	,teardown: function() {
		var $it0 = this._mapping.iterator();
		while( $it0.hasNext() ) {
			var mapping = $it0.next();
			mapping.provider.destroy();
		}
		var values = this._managedObjects.getValues();
		var _g = 0;
		while(_g < values.length) {
			var value = values[_g];
			++_g;
			this.destroyInstance(value);
		}
		this._mapping = new haxe_ds_StringMap();
		this._processedMapping = new haxe_ds_StringMap();
		this._managedObjects = new hex_collection_HashMap();
		this._ed = new hex_event_LightweightClosureDispatcher();
	}
	,_createMapping: function(type,name,mappingID) {
		if(this._processedMapping.get(mappingID)) throw new js__$Boot_HaxeError(new hex_di_error_InjectorException("Mapping named '" + mappingID + "' is already processing @" + hex_log_Stringifier.stringify(this),{ fileName : "Injector.hx", lineNumber : 286, className : "hex.di.Injector", methodName : "_createMapping"}));
		{
			this._processedMapping.set(mappingID,true);
			true;
		}
		var mapping = new hex_di_mapping_InjectionMapping(this,type,name,mappingID);
		{
			this._mapping.set(mappingID,mapping);
			mapping;
		}
		this._processedMapping.remove(mappingID);
		return mapping;
	}
	,_applyInjection: function(target,targetType,classDescription) {
		this._ed.dispatchEvent(new hex_di_InjectionEvent("onPreConstruct",this,target,targetType));
		hex_di_reflect_InjectionUtil.applyClassInjection(target,this,classDescription);
		if(classDescription.pd.length > 0) this._managedObjects.put(target,target);
		this._ed.dispatchEvent(new hex_di_InjectionEvent("onPostConstruct",this,target,targetType));
	}
	,_getMappingID: function(type,name) {
		if(name == null) name = "";
		return Type.getClassName(type) + "|" + name;
	}
	,__class__: hex_di_Injector
};
var hex_di_annotation_IAnnotationDataProvider = function() { };
$hxClasses["hex.di.annotation.IAnnotationDataProvider"] = hex_di_annotation_IAnnotationDataProvider;
hex_di_annotation_IAnnotationDataProvider.__name__ = ["hex","di","annotation","IAnnotationDataProvider"];
hex_di_annotation_IAnnotationDataProvider.prototype = {
	__class__: hex_di_annotation_IAnnotationDataProvider
};
var hex_error_Exception = function(message,posInfos) {
	this.message = message;
	this.posInfos = posInfos;
	this.name = hex_log_Stringifier.stringify(this);
	hex_log_Logger.ERROR(this.toString(),null,{ fileName : "Exception.hx", lineNumber : 24, className : "hex.error.Exception", methodName : "new"});
};
$hxClasses["hex.error.Exception"] = hex_error_Exception;
hex_error_Exception.__name__ = ["hex","error","Exception"];
hex_error_Exception.prototype = {
	toString: function() {
		return (this.posInfos != null?this.name + " at " + this.posInfos.className + "#" + this.posInfos.methodName + " line:" + this.posInfos.lineNumber + " in file '" + this.posInfos.fileName + "'":this.name) + " | " + this.message;
	}
	,__class__: hex_error_Exception
};
var hex_di_error_InjectorException = function(message,posInfos) {
	hex_error_Exception.call(this,message,posInfos);
};
$hxClasses["hex.di.error.InjectorException"] = hex_di_error_InjectorException;
hex_di_error_InjectorException.__name__ = ["hex","di","error","InjectorException"];
hex_di_error_InjectorException.__super__ = hex_error_Exception;
hex_di_error_InjectorException.prototype = $extend(hex_error_Exception.prototype,{
	__class__: hex_di_error_InjectorException
});
var hex_di_error_MissingClassDescriptionException = function(message,posInfos) {
	hex_di_error_InjectorException.call(this,message,posInfos);
};
$hxClasses["hex.di.error.MissingClassDescriptionException"] = hex_di_error_MissingClassDescriptionException;
hex_di_error_MissingClassDescriptionException.__name__ = ["hex","di","error","MissingClassDescriptionException"];
hex_di_error_MissingClassDescriptionException.__super__ = hex_di_error_InjectorException;
hex_di_error_MissingClassDescriptionException.prototype = $extend(hex_di_error_InjectorException.prototype,{
	__class__: hex_di_error_MissingClassDescriptionException
});
var hex_di_error_MissingMappingException = function(message,posInfos) {
	hex_di_error_InjectorException.call(this,message,posInfos);
};
$hxClasses["hex.di.error.MissingMappingException"] = hex_di_error_MissingMappingException;
hex_di_error_MissingMappingException.__name__ = ["hex","di","error","MissingMappingException"];
hex_di_error_MissingMappingException.__super__ = hex_di_error_InjectorException;
hex_di_error_MissingMappingException.prototype = $extend(hex_di_error_InjectorException.prototype,{
	__class__: hex_di_error_MissingMappingException
});
var hex_di_mapping_InjectionMapping = function(injector,type,name,mappingID) {
	this._injector = injector;
	this._type = type;
	this._name = name;
	this._mappingID = mappingID;
};
$hxClasses["hex.di.mapping.InjectionMapping"] = hex_di_mapping_InjectionMapping;
hex_di_mapping_InjectionMapping.__name__ = ["hex","di","mapping","InjectionMapping"];
hex_di_mapping_InjectionMapping.prototype = {
	getResult: function() {
		if(this.provider == null) throw new js__$Boot_HaxeError(new hex_error_NullPointerException("can't retrieve result, mapping with id '" + this._mappingID + "' has no provider",{ fileName : "InjectionMapping.hx", lineNumber : 36, className : "hex.di.mapping.InjectionMapping", methodName : "getResult"}));
		return this.provider.getResult(this._injector);
	}
	,asSingleton: function() {
		return this._toProvider(new hex_di_provider_SingletonProvider(this._type,this._injector));
	}
	,toSingleton: function(type) {
		return this._toProvider(new hex_di_provider_SingletonProvider(type,this._injector));
	}
	,toType: function(type) {
		return this._toProvider(new hex_di_provider_ClassProvider(type));
	}
	,toValue: function(value) {
		return this._toProvider(new hex_di_provider_ValueProvider(value,this._injector));
	}
	,_toProvider: function(provider) {
		if(this.provider != null) haxe_Log.trace("Warning: Injector already has a mapping for " + this._mappingID + ".\n " + "If you have overridden this mapping intentionally you can use " + "\"injector.unmap()\" prior to your replacement mapping in order to " + "avoid seeing this message.",{ fileName : "InjectionMapping.hx", lineNumber : 68, className : "hex.di.mapping.InjectionMapping", methodName : "_toProvider"});
		this.provider = provider;
		return this;
	}
	,__class__: hex_di_mapping_InjectionMapping
};
var hex_di_provider_IDependencyProvider = function() { };
$hxClasses["hex.di.provider.IDependencyProvider"] = hex_di_provider_IDependencyProvider;
hex_di_provider_IDependencyProvider.__name__ = ["hex","di","provider","IDependencyProvider"];
hex_di_provider_IDependencyProvider.prototype = {
	__class__: hex_di_provider_IDependencyProvider
};
var hex_di_provider_ClassProvider = function(type) {
	this._type = type;
};
$hxClasses["hex.di.provider.ClassProvider"] = hex_di_provider_ClassProvider;
hex_di_provider_ClassProvider.__name__ = ["hex","di","provider","ClassProvider"];
hex_di_provider_ClassProvider.__interfaces__ = [hex_di_provider_IDependencyProvider];
hex_di_provider_ClassProvider.prototype = {
	getResult: function(injector) {
		return injector.instantiateUnmapped(this._type);
	}
	,destroy: function() {
	}
	,__class__: hex_di_provider_ClassProvider
};
var hex_di_provider_SingletonProvider = function(type,injector) {
	this._isDestroyed = false;
	this._type = type;
	this._injector = injector;
};
$hxClasses["hex.di.provider.SingletonProvider"] = hex_di_provider_SingletonProvider;
hex_di_provider_SingletonProvider.__name__ = ["hex","di","provider","SingletonProvider"];
hex_di_provider_SingletonProvider.__interfaces__ = [hex_di_provider_IDependencyProvider];
hex_di_provider_SingletonProvider.prototype = {
	getResult: function(injector) {
		if(this._isDestroyed) throw new js__$Boot_HaxeError(new hex_di_error_InjectorException("Forbidden usage of unmapped singleton provider for type '" + Type.getClassName(this._value) + "'",{ fileName : "SingletonProvider.hx", lineNumber : 29, className : "hex.di.provider.SingletonProvider", methodName : "getResult"})); else if(this._value == null) this._value = this._injector.instantiateUnmapped(this._type);
		return this._value;
	}
	,destroy: function() {
		this._isDestroyed = true;
		if(this._value != null) this._injector.destroyInstance(this._value);
		this._injector = null;
		this._value = null;
	}
	,__class__: hex_di_provider_SingletonProvider
};
var hex_di_provider_ValueProvider = function(value,injector) {
	this._value = value;
	this._injector = injector;
};
$hxClasses["hex.di.provider.ValueProvider"] = hex_di_provider_ValueProvider;
hex_di_provider_ValueProvider.__name__ = ["hex","di","provider","ValueProvider"];
hex_di_provider_ValueProvider.__interfaces__ = [hex_di_provider_IDependencyProvider];
hex_di_provider_ValueProvider.prototype = {
	getResult: function(injector) {
		return this._value;
	}
	,destroy: function() {
		this._injector.destroyInstance(this._value);
		this._injector = null;
		this._value = null;
	}
	,__class__: hex_di_provider_ValueProvider
};
var hex_di_reflect_IClassDescriptionProvider = function() { };
$hxClasses["hex.di.reflect.IClassDescriptionProvider"] = hex_di_reflect_IClassDescriptionProvider;
hex_di_reflect_IClassDescriptionProvider.__name__ = ["hex","di","reflect","IClassDescriptionProvider"];
hex_di_reflect_IClassDescriptionProvider.prototype = {
	__class__: hex_di_reflect_IClassDescriptionProvider
};
var hex_di_reflect_ClassDescriptionProvider = function(classAnnotationDataProvider) {
	this._classAnnotationDataProvider = classAnnotationDataProvider;
	this._classDescription = new hex_collection_HashMap();
};
$hxClasses["hex.di.reflect.ClassDescriptionProvider"] = hex_di_reflect_ClassDescriptionProvider;
hex_di_reflect_ClassDescriptionProvider.__name__ = ["hex","di","reflect","ClassDescriptionProvider"];
hex_di_reflect_ClassDescriptionProvider.__interfaces__ = [hex_di_reflect_IClassDescriptionProvider];
hex_di_reflect_ClassDescriptionProvider._sort = function(a,b) {
	return a.o - b.o;
};
hex_di_reflect_ClassDescriptionProvider.prototype = {
	getClassDescription: function(type) {
		if(this._classDescription.containsKey(type)) return this._classDescription.get(type); else return this._getClassDescription(type);
	}
	,_getClassDescription: function(type) {
		var classAnnotationData = this._classAnnotationDataProvider.getClassAnnotationData(type);
		if(classAnnotationData != null) {
			var properties;
			var _g = [];
			var _g1 = 0;
			var _g2 = classAnnotationData.props;
			while(_g1 < _g2.length) {
				var prop = _g2[_g1];
				++_g1;
				_g.push({ p : prop.name, t : prop.type, n : prop.key, o : prop.isOpt});
			}
			properties = _g;
			var methods = [];
			var postConstruct = [];
			var preDestroy = [];
			var _g11 = 0;
			var _g21 = classAnnotationData.methods;
			while(_g11 < _g21.length) {
				var method = _g21[_g11];
				++_g11;
				var $arguments;
				var _g3 = [];
				var _g4 = 0;
				var _g5 = method.args;
				while(_g4 < _g5.length) {
					var arg = _g5[_g4];
					++_g4;
					_g3.push({ t : arg.type, n : arg.key, o : arg.isOpt});
				}
				$arguments = _g3;
				if(method.isPost) postConstruct.push({ m : method.name, a : $arguments, o : method.order}); else if(method.isPre) preDestroy.push({ m : method.name, a : $arguments, o : method.order}); else methods.push({ m : method.name, a : $arguments});
			}
			if(postConstruct.length > 0) haxe_ds_ArraySort.sort(postConstruct,hex_di_reflect_ClassDescriptionProvider._sort);
			if(preDestroy.length > 0) haxe_ds_ArraySort.sort(preDestroy,hex_di_reflect_ClassDescriptionProvider._sort);
			var ctor = classAnnotationData.ctor;
			var ctorArguments;
			var _g12 = [];
			var _g22 = 0;
			var _g31 = ctor.args;
			while(_g22 < _g31.length) {
				var arg1 = _g31[_g22];
				++_g22;
				_g12.push({ t : arg1.type, n : arg1.key, o : arg1.isOpt});
			}
			ctorArguments = _g12;
			var constructorInjection = { a : ctorArguments};
			return { c : constructorInjection, p : properties, m : methods, pc : postConstruct, pd : preDestroy};
		} else return null;
	}
	,__class__: hex_di_reflect_ClassDescriptionProvider
};
var hex_di_reflect_FastClassDescriptionProvider = function() {
};
$hxClasses["hex.di.reflect.FastClassDescriptionProvider"] = hex_di_reflect_FastClassDescriptionProvider;
hex_di_reflect_FastClassDescriptionProvider.__name__ = ["hex","di","reflect","FastClassDescriptionProvider"];
hex_di_reflect_FastClassDescriptionProvider.__interfaces__ = [hex_di_reflect_IClassDescriptionProvider];
hex_di_reflect_FastClassDescriptionProvider.prototype = {
	getClassDescription: function(type) {
		if(type == null) throw new js__$Boot_HaxeError(new hex_error_NullPointerException("type cannot be null",{ fileName : "FastClassDescriptionProvider.hx", lineNumber : 21, className : "hex.di.reflect.FastClassDescriptionProvider", methodName : "getClassDescription"}));
		return Reflect.getProperty(type,"__INJECTION_DATA");
	}
	,__class__: hex_di_reflect_FastClassDescriptionProvider
};
var hex_di_reflect_InjectionUtil = function() {
};
$hxClasses["hex.di.reflect.InjectionUtil"] = hex_di_reflect_InjectionUtil;
hex_di_reflect_InjectionUtil.__name__ = ["hex","di","reflect","InjectionUtil"];
hex_di_reflect_InjectionUtil.applyClassInjection = function(target,injector,classDescription) {
	var _g = 0;
	var _g1 = classDescription.p;
	while(_g < _g1.length) {
		var property = _g1[_g];
		++_g;
		hex_di_reflect_InjectionUtil.applyPropertyInjection(property.p,property.t,property.n,property.o,target,injector);
	}
	var _g2 = 0;
	var _g11 = classDescription.m;
	while(_g2 < _g11.length) {
		var method = _g11[_g2];
		++_g2;
		hex_di_reflect_InjectionUtil.applyMethodInjection(target,injector,method.a,method.m);
	}
	var _g3 = 0;
	var _g12 = classDescription.pc;
	while(_g3 < _g12.length) {
		var postConstruct = _g12[_g3];
		++_g3;
		hex_di_reflect_InjectionUtil.applyMethodInjection(target,injector,postConstruct.a,postConstruct.m);
	}
	return target;
};
hex_di_reflect_InjectionUtil.applyConstructorInjection = function(type,injector,$arguments) {
	return Type.createInstance(type,hex_di_reflect_InjectionUtil.gatherArgs(type,injector,$arguments,"new"));
};
hex_di_reflect_InjectionUtil.applyPropertyInjection = function(propertyName,propertyType,injectionName,isOptional,target,injector) {
	if(isOptional == null) isOptional = false;
	if(injectionName == null) injectionName = "";
	var provider = injector.getProvider(Type.resolveClass(propertyType),injectionName);
	if(provider != null) Reflect.setProperty(target,propertyName,provider.getResult(injector)); else if(!isOptional) throw new js__$Boot_HaxeError(new hex_di_error_MissingMappingException("'" + hex_log_Stringifier.stringify(injector) + "' is missing a mapping to inject into property named '" + propertyName + "' with type '" + propertyType + "' inside instance of '" + hex_log_Stringifier.stringify(target) + "'. Target dependency: '" + propertyType + "|" + injectionName + "'",{ fileName : "InjectionUtil.hx", lineNumber : 58, className : "hex.di.reflect.InjectionUtil", methodName : "applyPropertyInjection"}));
	return target;
};
hex_di_reflect_InjectionUtil.applyMethodInjection = function(target,injector,$arguments,methodName) {
	Reflect.callMethod(target,Reflect.field(target,methodName),hex_di_reflect_InjectionUtil.gatherArgs(target,injector,$arguments,methodName));
	return target;
};
hex_di_reflect_InjectionUtil.gatherArgs = function(target,injector,$arguments,methodName) {
	var args = [];
	var _g = 0;
	while(_g < $arguments.length) {
		var arg = $arguments[_g];
		++_g;
		var provider = injector.getProvider(Type.resolveClass(arg.t),arg.n);
		if(provider != null) args.push(provider.getResult(injector)); else if(!arg.o) {
			if(methodName == "new") hex_di_reflect_InjectionUtil._throwMissingMappingConstructorException(target,arg.t,arg.n,injector); else hex_di_reflect_InjectionUtil._throwMissingMappingException(target,arg.t,arg.n,injector,methodName);
		}
	}
	return args;
};
hex_di_reflect_InjectionUtil._throwMissingMappingException = function(target,type,injectionName,injector,methodName) {
	throw new js__$Boot_HaxeError(new hex_di_error_MissingMappingException("'" + hex_log_Stringifier.stringify(injector) + "' is missing a mapping to inject argument into method named '" + methodName + "' with type '" + type + "' inside instance of '" + hex_log_Stringifier.stringify(target) + "'. Target dependency: '" + type + "|" + injectionName + "'",{ fileName : "InjectionUtil.hx", lineNumber : 104, className : "hex.di.reflect.InjectionUtil", methodName : "_throwMissingMappingException"}));
};
hex_di_reflect_InjectionUtil._throwMissingMappingConstructorException = function(target,type,injectionName,injector) {
	throw new js__$Boot_HaxeError(new hex_di_error_MissingMappingException("'" + hex_log_Stringifier.stringify(injector) + "' is missing a mapping to inject argument" + " with type '" + type + "' into constructor of class '" + hex_log_Stringifier.stringify(target) + "'. Target dependency: '" + type + "|" + injectionName + "'",{ fileName : "InjectionUtil.hx", lineNumber : 114, className : "hex.di.reflect.InjectionUtil", methodName : "_throwMissingMappingConstructorException"}));
};
hex_di_reflect_InjectionUtil.prototype = {
	__class__: hex_di_reflect_InjectionUtil
};
var hex_domain_IDomainDispatcher = function() { };
$hxClasses["hex.domain.IDomainDispatcher"] = hex_domain_IDomainDispatcher;
hex_domain_IDomainDispatcher.__name__ = ["hex","domain","IDomainDispatcher"];
hex_domain_IDomainDispatcher.prototype = {
	__class__: hex_domain_IDomainDispatcher
};
var hex_domain_DomainDispatcher = function(defaultDomain,dispatcherClass) {
	this.clear();
	this.setDefaultDomain(defaultDomain);
	this.setDispatcherClass(dispatcherClass);
};
$hxClasses["hex.domain.DomainDispatcher"] = hex_domain_DomainDispatcher;
hex_domain_DomainDispatcher.__name__ = ["hex","domain","DomainDispatcher"];
hex_domain_DomainDispatcher.__interfaces__ = [hex_domain_IDomainDispatcher];
hex_domain_DomainDispatcher.prototype = {
	setDispatcherClass: function(dispatcherClass) {
		if(dispatcherClass != null) this._dispatcherClass = dispatcherClass; else this._dispatcherClass = hex_event_Dispatcher;
	}
	,getDefaultDispatcher: function() {
		return this._domains.h[this._defaultDomain.__id__];
	}
	,getDefaultDomain: function() {
		return this._defaultDomain;
	}
	,setDefaultDomain: function(domain) {
		if(domain == null) this._defaultDomain = hex_domain_DefaultDomain.DOMAIN; else this._defaultDomain = domain;
		this.getDomainDispatcher(this.getDefaultDomain());
	}
	,clear: function() {
		this._domains = new haxe_ds_ObjectMap();
		var domain = this.getDefaultDomain();
		if(domain != null) this.getDomainDispatcher(domain);
	}
	,isRegistered: function(listener,messageType,domain) {
		if(this.hasChannelDispatcher(domain)) return this.getDomainDispatcher(domain).isRegistered(listener,messageType); else return false;
	}
	,hasChannelDispatcher: function(domain) {
		if(domain == null) return this._domains.h.__keys__[this._defaultDomain.__id__] != null; else return this._domains.h.__keys__[domain.__id__] != null;
	}
	,getDomainDispatcher: function(domain) {
		if(this.hasChannelDispatcher(domain)) if(domain == null) return this._domains.h[this._defaultDomain.__id__]; else return this._domains.h[domain.__id__]; else {
			var dispatcher = new hex_event_Dispatcher();
			this._domains.set(domain,dispatcher);
			return dispatcher;
		}
	}
	,releaseDomainDispatcher: function(domain) {
		if(this.hasChannelDispatcher(domain)) {
			this._domains.h[domain.__id__].removeAllListeners();
			this._domains.remove(domain);
			return true;
		} else return false;
	}
	,addListener: function(listener,domain) {
		return this.getDomainDispatcher(domain).addListener(listener);
	}
	,removeListener: function(listener,domain) {
		return this.getDomainDispatcher(domain).removeListener(listener);
	}
	,addHandler: function(messageType,scope,callback,domain) {
		return this.getDomainDispatcher(domain).addHandler(messageType,scope,callback);
	}
	,removeHandler: function(messageType,scope,callback,domain) {
		return this.getDomainDispatcher(domain).removeHandler(messageType,scope,callback);
	}
	,dispatch: function(messageType,domain,data) {
		this.getDomainDispatcher(domain).dispatch(messageType,data);
		if(domain != this._defaultDomain && domain != null) this.getDefaultDispatcher().dispatch(messageType,data);
	}
	,removeAllListeners: function() {
		var iterator = this._domains.keys();
		while(iterator.hasNext()) ((function($this) {
			var $r;
			var key = iterator.next();
			$r = $this._domains.h[key.__id__];
			return $r;
		}(this))).removeAllListeners();
		this.clear();
	}
	,__class__: hex_domain_DomainDispatcher
};
var hex_domain_IApplicationDomainDispatcher = function() { };
$hxClasses["hex.domain.IApplicationDomainDispatcher"] = hex_domain_IApplicationDomainDispatcher;
hex_domain_IApplicationDomainDispatcher.__name__ = ["hex","domain","IApplicationDomainDispatcher"];
hex_domain_IApplicationDomainDispatcher.__interfaces__ = [hex_domain_IDomainDispatcher];
var hex_domain_Domain = function(domainName) {
	if(domainName == null) throw new js__$Boot_HaxeError(new hex_error_NullPointerException("Domain's name can't be null",{ fileName : "Domain.hx", lineNumber : 20, className : "hex.domain.Domain", methodName : "new"})); else if(hex_domain_Domain._domainNames.exists(domainName)) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("Domain has already been registered with name '" + domainName + "'",{ fileName : "Domain.hx", lineNumber : 24, className : "hex.domain.Domain", methodName : "new"})); else {
		hex_domain_Domain._domainNames.set(domainName,this);
		this._domainName = domainName;
	}
};
$hxClasses["hex.domain.Domain"] = hex_domain_Domain;
hex_domain_Domain.__name__ = ["hex","domain","Domain"];
hex_domain_Domain.getDomain = function(domainName) {
	if(!hex_domain_Domain._domainNames.exists(domainName)) return null; else return hex_domain_Domain._domainNames.get(domainName);
};
hex_domain_Domain.prototype = {
	getName: function() {
		return this._domainName;
	}
	,toString: function() {
		return hex_log_Stringifier.stringify(this) + " with name '" + this.getName() + "'";
	}
	,__class__: hex_domain_Domain
};
var hex_domain_DomainUtil = function() {
};
$hxClasses["hex.domain.DomainUtil"] = hex_domain_DomainUtil;
hex_domain_DomainUtil.__name__ = ["hex","domain","DomainUtil"];
hex_domain_DomainUtil.getDomain = function(domainName,type) {
	var domain = null;
	if(hex_domain_DomainUtil._domain.exists(domainName)) domain = hex_domain_DomainUtil._domain.get(domainName); else {
		domain = Type.createInstance(type,[domainName]);
		hex_domain_DomainUtil._domain.set(domainName,domain);
	}
	return domain;
};
hex_domain_DomainUtil.prototype = {
	__class__: hex_domain_DomainUtil
};
var hex_domain_TopLevelDomain = function(domainName) {
	hex_domain_Domain.call(this,domainName);
};
$hxClasses["hex.domain.TopLevelDomain"] = hex_domain_TopLevelDomain;
hex_domain_TopLevelDomain.__name__ = ["hex","domain","TopLevelDomain"];
hex_domain_TopLevelDomain.__super__ = hex_domain_Domain;
hex_domain_TopLevelDomain.prototype = $extend(hex_domain_Domain.prototype,{
	__class__: hex_domain_TopLevelDomain
});
var hex_event_IDispatcher = function() { };
$hxClasses["hex.event.IDispatcher"] = hex_event_IDispatcher;
hex_event_IDispatcher.__name__ = ["hex","event","IDispatcher"];
hex_event_IDispatcher.prototype = {
	__class__: hex_event_IDispatcher
};
var hex_event_Dispatcher = function() {
	this._isSealed = false;
	this._cachedMethodCalls = [];
	this._listeners = new haxe_ds_ObjectMap();
};
$hxClasses["hex.event.Dispatcher"] = hex_event_Dispatcher;
hex_event_Dispatcher.__name__ = ["hex","event","Dispatcher"];
hex_event_Dispatcher.__interfaces__ = [hex_event_IDispatcher];
hex_event_Dispatcher.prototype = {
	dispatch: function(messageType,data) {
		this._seal(true);
		var parameters = null;
		var iterator = this._listeners.keys();
		while(iterator.hasNext()) {
			var listener = iterator.next();
			var m = this._listeners.h[listener.__id__];
			if(Lambda.count(m) > 0) {
				if(m.h.__keys__[messageType.__id__] != null) {
					var handler = m.h[messageType.__id__];
					handler.call(data);
				}
			} else {
				var messageName = messageType.name;
				var callback = Reflect.field(listener,messageName);
				if(callback != null && messageName != "handleMessage") callback.apply(listener,data); else {
					callback = Reflect.field(listener,"handleMessage");
					if(callback != null) {
						if(parameters == null) {
							parameters = [messageType];
							if(data != null) parameters = parameters.concat(data);
						}
						callback.apply(listener,parameters);
					} else {
						var msg = hex_log_Stringifier.stringify(this) + ".dispatch failed. " + " You must implement '" + messageType.name + "' or 'handleMessage' method in '" + hex_log_Stringifier.stringify(listener) + "' instance.";
						throw new js__$Boot_HaxeError(new hex_error_UnsupportedOperationException(msg,{ fileName : "Dispatcher.hx", lineNumber : 74, className : "hex.event.Dispatcher", methodName : "dispatch"}));
					}
				}
			}
		}
		this._seal(false);
	}
	,addHandler: function(messageType,scope,callback) {
		if(!this._isSealed) {
			if((function($this) {
				var $r;
				var key = scope;
				$r = $this._listeners.h.__keys__[key.__id__] != null;
				return $r;
			}(this))) {
				var m;
				var key1 = scope;
				m = this._listeners.h[key1.__id__];
				if(Lambda.count(m) == 0) {
					var msg = hex_log_Stringifier.stringify(this) + ".addHandler failed. " + hex_log_Stringifier.stringify(scope) + " is already registered for all message types.";
					throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException(msg,{ fileName : "Dispatcher.hx", lineNumber : 95, className : "hex.event.Dispatcher", methodName : "addHandler"}));
				} else if(m.h.__keys__[messageType.__id__] != null) {
					var handler = m.h[messageType.__id__];
					return handler.add(callback);
				} else {
					var handler1 = new hex_event_CallbackHandler(scope,callback);
					m.set(messageType,handler1);
					return true;
				}
			} else {
				var m1 = new haxe_ds_ObjectMap();
				var handler2 = new hex_event_CallbackHandler(scope,callback);
				m1.set(messageType,handler2);
				var key2 = scope;
				this._listeners.set(key2,m1);
				return true;
			}
		} else {
			this._cachedMethodCalls.push((function(f,a1,a2,a3) {
				return function() {
					return f(a1,a2,a3);
				};
			})($bind(this,this.addHandler),messageType,scope,callback));
			return false;
		}
	}
	,removeHandler: function(messageType,scope,callback) {
		if(!this._isSealed) {
			if((function($this) {
				var $r;
				var key = scope;
				$r = $this._listeners.h.__keys__[key.__id__] != null;
				return $r;
			}(this))) {
				var m;
				var key1 = scope;
				m = this._listeners.h[key1.__id__];
				if(Lambda.count(m) == 0) {
					var msg = hex_log_Stringifier.stringify(this) + ".removeHandler failed. " + hex_log_Stringifier.stringify(scope) + " is registered for all message types." + " Use 'removeListener' to unsubscribe.";
					throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException(msg,{ fileName : "Dispatcher.hx", lineNumber : 139, className : "hex.event.Dispatcher", methodName : "removeHandler"}));
				} else if(m.h.__keys__[messageType.__id__] != null) {
					var handler = m.h[messageType.__id__];
					var b = handler.remove(callback);
					if(handler.isEmpty()) {
						m.remove(messageType);
						if(Lambda.count(m) == 0) {
							var key2 = scope;
							this._listeners.remove(key2);
						}
					}
					return b;
				} else return false;
			} else return false;
		} else {
			this._cachedMethodCalls.push((function(f,a1,a2,a3) {
				return function() {
					return f(a1,a2,a3);
				};
			})($bind(this,this.removeHandler),messageType,scope,callback));
			return false;
		}
	}
	,addListener: function(listener) {
		if(!this._isSealed) {
			if(this._listeners.h.__keys__[listener.__id__] != null) {
				var m = this._listeners.h[listener.__id__];
				if(Lambda.count(m) > 0) {
					var msg = hex_log_Stringifier.stringify(this) + ".addListener failed. " + hex_log_Stringifier.stringify(listener) + " is already registered to ";
					var iterator = m.keys();
					while(iterator.hasNext()) msg += "'" + Std.string(iterator.next()) + "' ";
					msg += "message types.";
					throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException(msg,{ fileName : "Dispatcher.hx", lineNumber : 192, className : "hex.event.Dispatcher", methodName : "addListener"}));
				} else return false;
			} else {
				var value = new haxe_ds_ObjectMap();
				this._listeners.set(listener,value);
				return true;
			}
		} else {
			this._cachedMethodCalls.push((function(f,a1) {
				return function() {
					return f(a1);
				};
			})($bind(this,this.addListener),listener));
			return false;
		}
	}
	,removeListener: function(listener) {
		if(!this._isSealed) {
			if(this._listeners.h.__keys__[listener.__id__] != null) {
				this._listeners.remove(listener);
				return true;
			} else return false;
		} else {
			this._cachedMethodCalls.push((function(f,a1) {
				return function() {
					return f(a1);
				};
			})($bind(this,this.removeListener),listener));
			return false;
		}
	}
	,removeAllListeners: function() {
		if(!this._isSealed) this._listeners = new haxe_ds_ObjectMap(); else this._cachedMethodCalls.push((function(f) {
			return function() {
				f();
			};
		})($bind(this,this.removeAllListeners)));
	}
	,isEmpty: function() {
		return Lambda.count(this._listeners) == 0;
	}
	,isRegistered: function(listener,messageType) {
		if(this._listeners.h.__keys__[listener.__id__] != null) {
			if(messageType == null) return true; else {
				var m = this._listeners.h[listener.__id__];
				return m.h.__keys__[messageType.__id__] != null;
			}
		} else return false;
	}
	,hasHandler: function(messageType,scope) {
		if(scope == null) {
			var iterator = this._listeners.keys();
			while(iterator.hasNext()) {
				var listener = iterator.next();
				var m = this._listeners.h[listener.__id__];
				if(Lambda.count(m) == 0) return true; else if(m.h.__keys__[messageType.__id__] != null) return true;
			}
			return false;
		} else if((function($this) {
			var $r;
			var key = scope;
			$r = $this._listeners.h.__keys__[key.__id__] != null;
			return $r;
		}(this))) {
			var m1;
			var key1 = scope;
			m1 = this._listeners.h[key1.__id__];
			if(Lambda.count(m1) == 0) return true; else if(m1.h.__keys__[messageType.__id__] != null) return true;
			return false;
		} else return false;
	}
	,_seal: function(isSealed) {
		if(isSealed != this._isSealed) {
			this._isSealed = isSealed;
			if(!this._isSealed && this._cachedMethodCalls.length > 0) {
				var _g = 0;
				var _g1 = this._cachedMethodCalls;
				while(_g < _g1.length) {
					var cachedMethodCall = _g1[_g];
					++_g;
					cachedMethodCall();
				}
				this._cachedMethodCalls = [];
			}
		}
	}
	,__class__: hex_event_Dispatcher
};
var hex_domain_ApplicationDomainDispatcher = function() {
	hex_domain_DomainDispatcher.call(this,hex_domain_TopLevelDomain.DOMAIN,hex_event_Dispatcher);
};
$hxClasses["hex.domain.ApplicationDomainDispatcher"] = hex_domain_ApplicationDomainDispatcher;
hex_domain_ApplicationDomainDispatcher.__name__ = ["hex","domain","ApplicationDomainDispatcher"];
hex_domain_ApplicationDomainDispatcher.__interfaces__ = [hex_domain_IApplicationDomainDispatcher];
hex_domain_ApplicationDomainDispatcher.getInstance = function() {
	return hex_domain_ApplicationDomainDispatcher._Instance;
};
hex_domain_ApplicationDomainDispatcher.__super__ = hex_domain_DomainDispatcher;
hex_domain_ApplicationDomainDispatcher.prototype = $extend(hex_domain_DomainDispatcher.prototype,{
	getDomainDispatcher: function(domain) {
		if(domain != hex_domain_NoDomain.DOMAIN) return hex_domain_DomainDispatcher.prototype.getDomainDispatcher.call(this,domain); else return null;
	}
	,__class__: hex_domain_ApplicationDomainDispatcher
});
var hex_domain_DefaultDomain = function(domainName) {
	hex_domain_Domain.call(this,domainName);
};
$hxClasses["hex.domain.DefaultDomain"] = hex_domain_DefaultDomain;
hex_domain_DefaultDomain.__name__ = ["hex","domain","DefaultDomain"];
hex_domain_DefaultDomain.__super__ = hex_domain_Domain;
hex_domain_DefaultDomain.prototype = $extend(hex_domain_Domain.prototype,{
	__class__: hex_domain_DefaultDomain
});
var hex_domain_DomainExpert = function() {
	this._registeredDomains = new haxe_ds_IntMap();
	this._subscribedModules = new haxe_ds_ObjectMap();
	this._removedModules = new haxe_ds_StringMap();
};
$hxClasses["hex.domain.DomainExpert"] = hex_domain_DomainExpert;
hex_domain_DomainExpert.__name__ = ["hex","domain","DomainExpert"];
hex_domain_DomainExpert.getInstance = function() {
	return hex_domain_DomainExpert._Instance;
};
hex_domain_DomainExpert.prototype = {
	getDomainFor: function(module) {
		if(!(this._subscribedModules.h.__keys__[module.__id__] != null)) {
			if(this._registeredDomains.h.hasOwnProperty(hex_domain_DomainExpert._DomainIndex)) {
				var moduleDomain = this._registeredDomains.h[hex_domain_DomainExpert._DomainIndex];
				this._registeredDomains.remove(hex_domain_DomainExpert._DomainIndex);
				hex_domain_DomainExpert._DomainIndex++;
				var key = moduleDomain.getName();
				this._removedModules.set(key,false);
				this._subscribedModules.set(module,moduleDomain);
				return moduleDomain;
			} else {
				var key1 = Type.getClassName(module == null?null:js_Boot.getClass(module)) + hex_core_HashCodeFactory.getKey(module);
				if(this._removedModules.exists(key1) && this._removedModules.get(key1)) return null; else {
					var domain = hex_domain_DomainUtil.getDomain(key1,hex_domain_Domain);
					this._removedModules.set(key1,false);
					this._subscribedModules.set(module,domain);
					return domain;
				}
			}
		} else return this._subscribedModules.h[module.__id__];
	}
	,registerDomain: function(domain) {
		this._registeredDomains.h[hex_domain_DomainExpert._DomainIndex] = domain;
	}
	,releaseDomain: function(module) {
		if(module.get_isReleased()) {
			var key = Type.getClassName(module == null?null:js_Boot.getClass(module)) + hex_core_HashCodeFactory.getKey(module);
			if(this._removedModules.exists(key)) this._removedModules.set(key,true); else {
				var key1 = module.getDomain().getName();
				this._removedModules.set(key1,true);
			}
			this._subscribedModules.remove(module);
		} else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException("Illegal call, '" + Std.string(module) + "' is not released.",{ fileName : "DomainExpert.hx", lineNumber : 93, className : "hex.domain.DomainExpert", methodName : "releaseDomain"}));
	}
	,__class__: hex_domain_DomainExpert
};
var hex_domain_NoDomain = function(domainName) {
	hex_domain_Domain.call(this,domainName);
};
$hxClasses["hex.domain.NoDomain"] = hex_domain_NoDomain;
hex_domain_NoDomain.__name__ = ["hex","domain","NoDomain"];
hex_domain_NoDomain.__super__ = hex_domain_Domain;
hex_domain_NoDomain.prototype = $extend(hex_domain_Domain.prototype,{
	__class__: hex_domain_NoDomain
});
var hex_error_IllegalArgumentException = function(message,posInfos) {
	hex_error_Exception.call(this,message,posInfos);
};
$hxClasses["hex.error.IllegalArgumentException"] = hex_error_IllegalArgumentException;
hex_error_IllegalArgumentException.__name__ = ["hex","error","IllegalArgumentException"];
hex_error_IllegalArgumentException.__super__ = hex_error_Exception;
hex_error_IllegalArgumentException.prototype = $extend(hex_error_Exception.prototype,{
	__class__: hex_error_IllegalArgumentException
});
var hex_error_IllegalStateException = function(message,posInfos) {
	hex_error_Exception.call(this,message,posInfos);
};
$hxClasses["hex.error.IllegalStateException"] = hex_error_IllegalStateException;
hex_error_IllegalStateException.__name__ = ["hex","error","IllegalStateException"];
hex_error_IllegalStateException.__super__ = hex_error_Exception;
hex_error_IllegalStateException.prototype = $extend(hex_error_Exception.prototype,{
	__class__: hex_error_IllegalStateException
});
var hex_error_NoSuchElementException = function(message,posInfos) {
	hex_error_Exception.call(this,message,posInfos);
};
$hxClasses["hex.error.NoSuchElementException"] = hex_error_NoSuchElementException;
hex_error_NoSuchElementException.__name__ = ["hex","error","NoSuchElementException"];
hex_error_NoSuchElementException.__super__ = hex_error_Exception;
hex_error_NoSuchElementException.prototype = $extend(hex_error_Exception.prototype,{
	__class__: hex_error_NoSuchElementException
});
var hex_error_NullPointerException = function(message,posInfos) {
	hex_error_Exception.call(this,message,posInfos);
};
$hxClasses["hex.error.NullPointerException"] = hex_error_NullPointerException;
hex_error_NullPointerException.__name__ = ["hex","error","NullPointerException"];
hex_error_NullPointerException.__super__ = hex_error_Exception;
hex_error_NullPointerException.prototype = $extend(hex_error_Exception.prototype,{
	__class__: hex_error_NullPointerException
});
var hex_error_PrivateConstructorException = function(message,posInfos) {
	hex_error_Exception.call(this,message,posInfos);
};
$hxClasses["hex.error.PrivateConstructorException"] = hex_error_PrivateConstructorException;
hex_error_PrivateConstructorException.__name__ = ["hex","error","PrivateConstructorException"];
hex_error_PrivateConstructorException.__super__ = hex_error_Exception;
hex_error_PrivateConstructorException.prototype = $extend(hex_error_Exception.prototype,{
	__class__: hex_error_PrivateConstructorException
});
var hex_error_UnsupportedOperationException = function(message,posInfos) {
	hex_error_Exception.call(this,message,posInfos);
};
$hxClasses["hex.error.UnsupportedOperationException"] = hex_error_UnsupportedOperationException;
hex_error_UnsupportedOperationException.__name__ = ["hex","error","UnsupportedOperationException"];
hex_error_UnsupportedOperationException.__super__ = hex_error_Exception;
hex_error_UnsupportedOperationException.prototype = $extend(hex_error_Exception.prototype,{
	__class__: hex_error_UnsupportedOperationException
});
var hex_error_VirtualMethodException = function(message,posInfos) {
	hex_error_Exception.call(this,message,posInfos);
};
$hxClasses["hex.error.VirtualMethodException"] = hex_error_VirtualMethodException;
hex_error_VirtualMethodException.__name__ = ["hex","error","VirtualMethodException"];
hex_error_VirtualMethodException.__super__ = hex_error_Exception;
hex_error_VirtualMethodException.prototype = $extend(hex_error_Exception.prototype,{
	__class__: hex_error_VirtualMethodException
});
var hex_event_BasicHandler = function(scope,callback) {
	this.scope = scope;
	this.callback = callback;
};
$hxClasses["hex.event.BasicHandler"] = hex_event_BasicHandler;
hex_event_BasicHandler.__name__ = ["hex","event","BasicHandler"];
hex_event_BasicHandler.prototype = {
	__class__: hex_event_BasicHandler
};
var hex_event_CallbackHandler = function(scope,callback) {
	this.callbacks = [];
	this.scope = scope;
	this.callbacks.push(callback);
};
$hxClasses["hex.event.CallbackHandler"] = hex_event_CallbackHandler;
hex_event_CallbackHandler.__name__ = ["hex","event","CallbackHandler"];
hex_event_CallbackHandler.prototype = {
	call: function(data) {
		var _g = 0;
		var _g1 = this.callbacks;
		while(_g < _g1.length) {
			var callback = _g1[_g];
			++_g;
			Reflect.callMethod(this.scope,callback,data);
		}
	}
	,add: function(callback) {
		if((function($this) {
			var $r;
			var x = callback;
			$r = HxOverrides.indexOf($this.callbacks,x,0);
			return $r;
		}(this)) == -1) {
			this.callbacks.push(callback);
			return true;
		} else return false;
	}
	,remove: function(callback) {
		var index;
		var x = callback;
		index = HxOverrides.indexOf(this.callbacks,x,0);
		if(index != -1) {
			this.callbacks.splice(index,1);
			return true;
		} else return false;
	}
	,isEmpty: function() {
		return this.callbacks.length == 0;
	}
	,__class__: hex_event_CallbackHandler
};
var hex_event_ClassAdapter = function() {
};
$hxClasses["hex.event.ClassAdapter"] = hex_event_ClassAdapter;
hex_event_ClassAdapter.__name__ = ["hex","event","ClassAdapter"];
hex_event_ClassAdapter.prototype = {
	setCallBackMethod: function(callbackTarget,callbackMethod) {
		this._callbackTarget = callbackTarget;
		this._callbackMethod = callbackMethod;
	}
	,setAdapterClass: function(adapterClass,adapterMethodName) {
		if(adapterMethodName == null) adapterMethodName = "adapt";
		this._adapterClass = adapterClass;
		this._adapterMethodName = adapterMethodName;
	}
	,setFactoryMethod: function(factoryTarget,factoryMethod) {
		this._factoryTarget = factoryTarget;
		this._factoryMethod = factoryMethod;
	}
	,setAnnotationProvider: function(annotationProvider) {
		this._annotationProvider = annotationProvider;
	}
	,getCallbackAdapter: function() {
		var annotationProvider = this._annotationProvider;
		var callbackTarget = this._callbackTarget;
		var callbackMethod = this._callbackMethod;
		var adapterInstance = null;
		var adapterClass = null;
		var adapterMethodName = this._adapterMethodName;
		var factoryTarget = null;
		var factoryMethod = null;
		var isEventAdapterStrategyMacro = false;
		if(this._adapterClass != null) {
			adapterClass = this._adapterClass;
			factoryTarget = this._factoryTarget;
			factoryMethod = this._factoryMethod;
			isEventAdapterStrategyMacro = hex_util_ClassUtil.classExtendsOrImplements(this._adapterClass,hex_event_MacroAdapterStrategy);
			if(!isEventAdapterStrategyMacro) adapterInstance = this._factoryMethod != null?this._adapterInstance = this._factoryMethod(this._adapterClass):this._adapterInstance = Type.createInstance(this._adapterClass,[]);
		}
		var f = function(rest) {
			var result = null;
			if(isEventAdapterStrategyMacro) {
				var aSyncCommand;
				if(factoryTarget != null && factoryMethod != null) aSyncCommand = factoryMethod(adapterClass); else aSyncCommand = Type.createInstance(adapterClass,[]);
				if(!js_Boot.__instanceof(aSyncCommand,hex_event_IAdapterStrategy)) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("adapterInstance class should extend AdapterStrategy. Check if you passed the correct class",{ fileName : "ClassAdapter.hx", lineNumber : 108, className : "hex.event.ClassAdapter", methodName : "getCallbackAdapter"}));
				if(js_Boot.__instanceof(aSyncCommand,hex_core_IAnnotationParsable)) annotationProvider.parse(aSyncCommand);
				adapterInstance = aSyncCommand;
				$bind(aSyncCommand,aSyncCommand.adapt).apply(aSyncCommand,rest);
				aSyncCommand.preExecute();
				var handler = new hex_event__$ClassAdapter_MacroAdapterStrategyHandler(callbackTarget,callbackMethod);
				aSyncCommand.addCompleteHandler($bind(handler,handler.onAsyncCommandComplete));
				aSyncCommand.execute();
				return;
			} else if(adapterInstance != null) {
				if(js_Boot.__instanceof(adapterInstance,hex_core_IAnnotationParsable)) annotationProvider.parse(adapterInstance);
				result = Reflect.callMethod(adapterInstance,Reflect.field(adapterInstance,adapterMethodName),rest);
			}
			Reflect.callMethod(callbackTarget,callbackMethod,(result instanceof Array) && result.__enum__ == null?result:[result]);
		};
		return Reflect.makeVarArgs(f);
	}
	,__class__: hex_event_ClassAdapter
};
var hex_event__$ClassAdapter_MacroAdapterStrategyHandler = function(scope,callback) {
	this.scope = scope;
	this.callback = callback;
};
$hxClasses["hex.event._ClassAdapter.MacroAdapterStrategyHandler"] = hex_event__$ClassAdapter_MacroAdapterStrategyHandler;
hex_event__$ClassAdapter_MacroAdapterStrategyHandler.__name__ = ["hex","event","_ClassAdapter","MacroAdapterStrategyHandler"];
hex_event__$ClassAdapter_MacroAdapterStrategyHandler.prototype = {
	onAsyncCommandComplete: function(command) {
		if(this.callback != null) Reflect.callMethod(this.scope,this.callback,[command.getResult()]);
	}
	,__class__: hex_event__$ClassAdapter_MacroAdapterStrategyHandler
};
var hex_event_IClosureDispatcher = function() { };
$hxClasses["hex.event.IClosureDispatcher"] = hex_event_IClosureDispatcher;
hex_event_IClosureDispatcher.__name__ = ["hex","event","IClosureDispatcher"];
hex_event_IClosureDispatcher.prototype = {
	__class__: hex_event_IClosureDispatcher
};
var hex_event_ClosureDispatcher = function() {
	this._callbacks = new haxe_ds_ObjectMap();
	this._callbackSize = 0;
};
$hxClasses["hex.event.ClosureDispatcher"] = hex_event_ClosureDispatcher;
hex_event_ClosureDispatcher.__name__ = ["hex","event","ClosureDispatcher"];
hex_event_ClosureDispatcher.__interfaces__ = [hex_event_IClosureDispatcher];
hex_event_ClosureDispatcher.prototype = {
	dispatch: function(messageType,data) {
		if(this._callbacks.h.__keys__[messageType.__id__] != null) {
			var callbacks;
			var _this = this._callbacks.h[messageType.__id__];
			callbacks = _this.slice();
			var _g = 0;
			while(_g < callbacks.length) {
				var f = callbacks[_g];
				++_g;
				f.apply(null,data);
			}
		}
	}
	,addHandler: function(messageType,callback) {
		if(!(this._callbacks.h.__keys__[messageType.__id__] != null)) this._callbacks.set(messageType,[]);
		var callbacks = this._callbacks.h[messageType.__id__];
		var index = HxOverrides.indexOf(callbacks,callback,0);
		if(index == -1) {
			callbacks.push(callback);
			this._callbackSize++;
			return true;
		} else return false;
	}
	,removeHandler: function(messageType,callback) {
		if(!(this._callbacks.h.__keys__[messageType.__id__] != null)) return false;
		var callbacks = this._callbacks.h[messageType.__id__];
		var index = HxOverrides.indexOf(callbacks,callback,0);
		if(index == -1) return false; else {
			callbacks.splice(index,1);
			this._callbackSize--;
			if(callbacks.length == 0) this._callbacks.remove(messageType);
			return true;
		}
	}
	,removeAllListeners: function() {
		this._callbacks = new haxe_ds_ObjectMap();
		this._callbackSize = 0;
	}
	,isEmpty: function() {
		return this._callbackSize == 0;
	}
	,hasHandler: function(messageType,callback) {
		if(!(this._callbacks.h.__keys__[messageType.__id__] != null)) return false;
		if(callback == null) return true; else return (function($this) {
			var $r;
			var _this = $this._callbacks.h[messageType.__id__];
			$r = HxOverrides.indexOf(_this,callback,0);
			return $r;
		}(this)) != -1;
	}
	,__class__: hex_event_ClosureDispatcher
};
var hex_event_CompositeDispatcher = function() {
	this._isSealed = false;
	this._cachedMethodCalls = [];
	this._dispatchers = [];
};
$hxClasses["hex.event.CompositeDispatcher"] = hex_event_CompositeDispatcher;
hex_event_CompositeDispatcher.__name__ = ["hex","event","CompositeDispatcher"];
hex_event_CompositeDispatcher.prototype = {
	dispatch: function(messageType,data) {
		this._seal(true);
		var _g = 0;
		var _g1 = this._dispatchers;
		while(_g < _g1.length) {
			var dispatcher = _g1[_g];
			++_g;
			dispatcher.dispatch(messageType,data);
		}
		this._seal(false);
	}
	,addListener: function(listener) {
		throw new js__$Boot_HaxeError(new hex_error_UnsupportedOperationException("'addListener' is not supported in '" + hex_log_Stringifier.stringify(this) + "'",{ fileName : "CompositeDispatcher.hx", lineNumber : 75, className : "hex.event.CompositeDispatcher", methodName : "addListener"}));
	}
	,removeListener: function(listener) {
		throw new js__$Boot_HaxeError(new hex_error_UnsupportedOperationException("'removeListener' is not supported in '" + hex_log_Stringifier.stringify(this) + "'",{ fileName : "CompositeDispatcher.hx", lineNumber : 80, className : "hex.event.CompositeDispatcher", methodName : "removeListener"}));
	}
	,removeAllListeners: function() {
		if(!this._isSealed) {
			var _g = 0;
			var _g1 = this._dispatchers;
			while(_g < _g1.length) {
				var dispatcher = _g1[_g];
				++_g;
				dispatcher.removeAllListeners();
			}
		} else this._cachedMethodCalls.push((function(f) {
			return function() {
				f();
			};
		})($bind(this,this.removeAllListeners)));
	}
	,isEmpty: function() {
		var _g = 0;
		var _g1 = this._dispatchers;
		while(_g < _g1.length) {
			var dispatcher = _g1[_g];
			++_g;
			if(!dispatcher.isEmpty()) return false;
		}
		return true;
	}
	,isRegistered: function(listener,messageType) {
		throw new js__$Boot_HaxeError(new hex_error_UnsupportedOperationException("'isRegistered' is not supported in '" + hex_log_Stringifier.stringify(this) + "'",{ fileName : "CompositeDispatcher.hx", lineNumber : 112, className : "hex.event.CompositeDispatcher", methodName : "isRegistered"}));
	}
	,hasHandler: function(messageType,scope) {
		var b = false;
		var _g = 0;
		var _g1 = this._dispatchers;
		while(_g < _g1.length) {
			var dispatcher = _g1[_g];
			++_g;
			b = dispatcher.hasHandler(messageType,scope) || b;
		}
		return b;
	}
	,add: function(dispatcher) {
		if(!this._isSealed) {
			if(HxOverrides.indexOf(this._dispatchers,dispatcher,0) == -1) {
				this._dispatchers.push(dispatcher);
				return true;
			} else return false;
		} else {
			this._cachedMethodCalls.push((function(f,a1) {
				return function() {
					return f(a1);
				};
			})($bind(this,this.add),dispatcher));
			return false;
		}
	}
	,remove: function(dispatcher) {
		if(!this._isSealed) {
			var index = HxOverrides.indexOf(this._dispatchers,dispatcher,0);
			if(index != -1) {
				this._dispatchers.splice(index,1);
				return true;
			} else return false;
		} else {
			this._cachedMethodCalls.push((function(f,a1) {
				return function() {
					return f(a1);
				};
			})($bind(this,this.remove),dispatcher));
			return false;
		}
	}
	,_seal: function(isSealed) {
		if(isSealed != this._isSealed) {
			this._isSealed = isSealed;
			if(!this._isSealed && this._cachedMethodCalls.length > 0) {
				var _g = 0;
				var _g1 = this._cachedMethodCalls;
				while(_g < _g1.length) {
					var cachedMethodCall = _g1[_g];
					++_g;
					cachedMethodCall();
				}
				this._cachedMethodCalls = [];
			}
		}
	}
	,__class__: hex_event_CompositeDispatcher
};
var hex_event_EventProxy = function(scope,method) {
	this.scope = scope;
	this.callback = method;
};
$hxClasses["hex.event.EventProxy"] = hex_event_EventProxy;
hex_event_EventProxy.__name__ = ["hex","event","EventProxy"];
hex_event_EventProxy.prototype = {
	handleCallback: function(args) {
		if(this.scope != null && this.callback != null) Reflect.callMethod(this.scope,this.callback,args); else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("handleCallback call failed with method '" + Std.string(this.callback) + " and scope '" + Std.string(this.scope) + "'",{ fileName : "EventProxy.hx", lineNumber : 28, className : "hex.event.EventProxy", methodName : "handleCallback"}));
	}
	,__class__: hex_event_EventProxy
};
var hex_event_IAdapterStrategy = function() { };
$hxClasses["hex.event.IAdapterStrategy"] = hex_event_IAdapterStrategy;
hex_event_IAdapterStrategy.__name__ = ["hex","event","IAdapterStrategy"];
hex_event_IAdapterStrategy.prototype = {
	__class__: hex_event_IAdapterStrategy
};
var hex_event_IEventDispatcher = function() { };
$hxClasses["hex.event.IEventDispatcher"] = hex_event_IEventDispatcher;
hex_event_IEventDispatcher.__name__ = ["hex","event","IEventDispatcher"];
hex_event_IEventDispatcher.prototype = {
	__class__: hex_event_IEventDispatcher
};
var hex_event_IEventListener = function() { };
$hxClasses["hex.event.IEventListener"] = hex_event_IEventListener;
hex_event_IEventListener.__name__ = ["hex","event","IEventListener"];
hex_event_IEventListener.prototype = {
	__class__: hex_event_IEventListener
};
var hex_event_LightweightClosureDispatcher = function() {
	this._callbacks = new haxe_ds_StringMap();
	this._callbackSize = 0;
};
$hxClasses["hex.event.LightweightClosureDispatcher"] = hex_event_LightweightClosureDispatcher;
hex_event_LightweightClosureDispatcher.__name__ = ["hex","event","LightweightClosureDispatcher"];
hex_event_LightweightClosureDispatcher.__interfaces__ = [hex_event_IEventDispatcher];
hex_event_LightweightClosureDispatcher.prototype = {
	dispatchEvent: function(e) {
		var eventType = e.type;
		if(this._callbacks.exists(eventType)) {
			var callbacks;
			var _this = this._callbacks.get(eventType);
			callbacks = _this.slice();
			var _g = 0;
			while(_g < callbacks.length) {
				var f = callbacks[_g];
				++_g;
				f(e);
			}
		}
	}
	,addEventListener: function(eventType,callback) {
		if(!this._callbacks.exists(eventType)) this._callbacks.set(eventType,[]);
		var callbacks = this._callbacks.get(eventType);
		var index = HxOverrides.indexOf(callbacks,callback,0);
		if(index == -1) {
			callbacks.push(callback);
			this._callbackSize++;
			return true;
		} else return false;
	}
	,removeEventListener: function(eventType,callback) {
		if(!this._callbacks.exists(eventType)) return false;
		var callbacks = this._callbacks.get(eventType);
		var index = HxOverrides.indexOf(callbacks,callback,0);
		if(index == -1) return false; else {
			callbacks.splice(index,1);
			this._callbackSize--;
			if(callbacks.length == 0) this._callbacks.remove(eventType);
			return true;
		}
	}
	,addListener: function(listener) {
		throw new js__$Boot_HaxeError(new hex_error_UnsupportedOperationException("'addListener' is not supported in '" + hex_log_Stringifier.stringify(this) + "'",{ fileName : "LightweightClosureDispatcher.hx", lineNumber : 122, className : "hex.event.LightweightClosureDispatcher", methodName : "addListener"}));
	}
	,removeListener: function(listener) {
		throw new js__$Boot_HaxeError(new hex_error_UnsupportedOperationException("'removeListener' is not supported in '" + hex_log_Stringifier.stringify(this) + "'",{ fileName : "LightweightClosureDispatcher.hx", lineNumber : 127, className : "hex.event.LightweightClosureDispatcher", methodName : "removeListener"}));
	}
	,removeAllListeners: function() {
		this._callbacks = new haxe_ds_StringMap();
		this._callbackSize = 0;
	}
	,isEmpty: function() {
		return this._callbackSize == 0;
	}
	,isRegistered: function(listener,eventType) {
		throw new js__$Boot_HaxeError(new hex_error_UnsupportedOperationException("'isRegistered' is not supported in '" + hex_log_Stringifier.stringify(this) + "'",{ fileName : "LightweightClosureDispatcher.hx", lineNumber : 143, className : "hex.event.LightweightClosureDispatcher", methodName : "isRegistered"}));
	}
	,hasEventListener: function(eventType,callback) {
		if(!this._callbacks.exists(eventType)) return false;
		if(callback == null) return true; else return (function($this) {
			var $r;
			var _this = $this._callbacks.get(eventType);
			$r = HxOverrides.indexOf(_this,callback,0);
			return $r;
		}(this)) != -1;
	}
	,__class__: hex_event_LightweightClosureDispatcher
};
var hex_event_MacroAdapterStrategy = function(target,method) {
	this._target = target;
	this._method = method;
	hex_control_macro_Macro.call(this);
};
$hxClasses["hex.event.MacroAdapterStrategy"] = hex_event_MacroAdapterStrategy;
hex_event_MacroAdapterStrategy.__name__ = ["hex","event","MacroAdapterStrategy"];
hex_event_MacroAdapterStrategy.__interfaces__ = [hex_event_IAdapterStrategy];
hex_event_MacroAdapterStrategy.__super__ = hex_control_macro_Macro;
hex_event_MacroAdapterStrategy.prototype = $extend(hex_control_macro_Macro.prototype,{
	adapt: function(args) {
		return Reflect.callMethod(this._target,this._method,args);
	}
	,getResult: function() {
		return this._result;
	}
	,__class__: hex_event_MacroAdapterStrategy
});
var hex_ioc_assembler_AbstractApplicationContext = function(coreFactory,name) {
	this._coreFactory = coreFactory;
	this._name = name;
	this._domain = hex_domain_DomainUtil.getDomain(name,hex_domain_Domain);
};
$hxClasses["hex.ioc.assembler.AbstractApplicationContext"] = hex_ioc_assembler_AbstractApplicationContext;
hex_ioc_assembler_AbstractApplicationContext.__name__ = ["hex","ioc","assembler","AbstractApplicationContext"];
hex_ioc_assembler_AbstractApplicationContext.__interfaces__ = [hex_di_IContextOwner];
hex_ioc_assembler_AbstractApplicationContext.prototype = {
	getName: function() {
		return this._name;
	}
	,getDomain: function() {
		return this._domain;
	}
	,resolve: function(field) {
		return this._coreFactory.locate(field);
	}
	,addChild: function(applicationContext) {
		try {
			return this._coreFactory.register(applicationContext.getName(),applicationContext);
		} catch( ex ) {
			if (ex instanceof js__$Boot_HaxeError) ex = ex.val;
			if( js_Boot.__instanceof(ex,hex_error_IllegalArgumentException) ) {
				hex_log_Logger.ERROR("addChild failed with applicationContext named '" + applicationContext.getName() + "'",null,{ fileName : "AbstractApplicationContext.hx", lineNumber : 54, className : "hex.ioc.assembler.AbstractApplicationContext", methodName : "addChild"});
				return false;
			} else throw(ex);
		}
	}
	,dispatch: function(messageType,data) {
		throw new js__$Boot_HaxeError(new hex_error_VirtualMethodException(hex_log_Stringifier.stringify(this) + "._dispatch is not implemented",{ fileName : "AbstractApplicationContext.hx", lineNumber : 62, className : "hex.ioc.assembler.AbstractApplicationContext", methodName : "dispatch"}));
	}
	,getCoreFactory: function() {
		return this._coreFactory;
	}
	,getInjector: function() {
		return this._coreFactory.getInjector();
	}
	,__class__: hex_ioc_assembler_AbstractApplicationContext
};
var hex_ioc_assembler_IApplicationAssembler = function() { };
$hxClasses["hex.ioc.assembler.IApplicationAssembler"] = hex_ioc_assembler_IApplicationAssembler;
hex_ioc_assembler_IApplicationAssembler.__name__ = ["hex","ioc","assembler","IApplicationAssembler"];
hex_ioc_assembler_IApplicationAssembler.prototype = {
	__class__: hex_ioc_assembler_IApplicationAssembler
};
var hex_ioc_assembler_ApplicationAssembler = function() {
	this._mContextFactories = new haxe_ds_ObjectMap();
	this._mApplicationContext = new haxe_ds_StringMap();
};
$hxClasses["hex.ioc.assembler.ApplicationAssembler"] = hex_ioc_assembler_ApplicationAssembler;
hex_ioc_assembler_ApplicationAssembler.__name__ = ["hex","ioc","assembler","ApplicationAssembler"];
hex_ioc_assembler_ApplicationAssembler.__interfaces__ = [hex_ioc_assembler_IApplicationAssembler];
hex_ioc_assembler_ApplicationAssembler.prototype = {
	getContextFactory: function(applicationContext) {
		return this._mContextFactories.h[applicationContext.__id__];
	}
	,release: function() {
		var itFactory = this._mContextFactories.iterator();
		while(itFactory.hasNext()) itFactory.next().release();
		this._mApplicationContext = new haxe_ds_StringMap();
		this._mContextFactories = new haxe_ds_ObjectMap();
		hex_metadata_AnnotationProvider.release();
	}
	,buildProperty: function(applicationContext,propertyVO) {
		this.getContextFactory(applicationContext).registerPropertyVO(propertyVO);
	}
	,buildObject: function(applicationContext,constructorVO) {
		this.getContextFactory(applicationContext).registerID(constructorVO.ID);
		this.getContextFactory(applicationContext).registerConstructorVO(constructorVO);
	}
	,buildMethodCall: function(applicationContext,methodCallVO) {
		this.getContextFactory(applicationContext).registerMethodCallVO(methodCallVO);
	}
	,buildDomainListener: function(applicationContext,domainListenerVO) {
		this.getContextFactory(applicationContext).registerDomainListenerVO(domainListenerVO);
	}
	,configureStateTransition: function(applicationContext,stateTransitionVO) {
		this.getContextFactory(applicationContext).registerID(stateTransitionVO.ID);
		this.getContextFactory(applicationContext).registerStateTransitionVO(stateTransitionVO);
	}
	,buildEverything: function() {
		var itFactory = this._mContextFactories.iterator();
		var contextFactories;
		var _g = [];
		while(itFactory.hasNext()) _g.push(itFactory.next());
		contextFactories = _g;
		contextFactories.map(function(factory) {
			factory.buildAllStateTransitions();
		});
		contextFactories.map(function(factory1) {
			factory1.dispatchAssemblingStart();
		});
		contextFactories.map(function(factory2) {
			factory2.buildAllObjects();
		});
		contextFactories.map(function(factory3) {
			factory3.assignAllDomainListeners();
		});
		contextFactories.map(function(factory4) {
			factory4.callAllMethods();
		});
		contextFactories.map(function(factory5) {
			factory5.callModuleInitialisation();
		});
		contextFactories.map(function(factory6) {
			factory6.dispatchAssemblingEnd();
		});
	}
	,getApplicationContext: function(applicationContextName,applicationContextClass) {
		var applicationContext;
		if(this._mApplicationContext.exists(applicationContextName)) applicationContext = this._mApplicationContext.get(applicationContextName); else {
			var builderFactory = new hex_ioc_core_ContextFactory(applicationContextName,applicationContextClass);
			applicationContext = builderFactory.getApplicationContext();
			this._mApplicationContext.set(applicationContextName,applicationContext);
			this._mContextFactories.set(applicationContext,builderFactory);
		}
		return applicationContext;
	}
	,_registerID: function(applicationContext,ID) {
		return this.getContextFactory(applicationContext).registerID(ID);
	}
	,__class__: hex_ioc_assembler_ApplicationAssembler
};
var hex_ioc_assembler_ApplicationAssemblerMessage = function() {
};
$hxClasses["hex.ioc.assembler.ApplicationAssemblerMessage"] = hex_ioc_assembler_ApplicationAssemblerMessage;
hex_ioc_assembler_ApplicationAssemblerMessage.__name__ = ["hex","ioc","assembler","ApplicationAssemblerMessage"];
hex_ioc_assembler_ApplicationAssemblerMessage.prototype = {
	__class__: hex_ioc_assembler_ApplicationAssemblerMessage
};
var hex_ioc_assembler_ApplicationContext = function(dispatcher,coreFactory,name) {
	hex_ioc_assembler_AbstractApplicationContext.call(this,coreFactory,name);
	this._dispatcher = dispatcher;
	this._initStateMachine();
};
$hxClasses["hex.ioc.assembler.ApplicationContext"] = hex_ioc_assembler_ApplicationContext;
hex_ioc_assembler_ApplicationContext.__name__ = ["hex","ioc","assembler","ApplicationContext"];
hex_ioc_assembler_ApplicationContext.__super__ = hex_ioc_assembler_AbstractApplicationContext;
hex_ioc_assembler_ApplicationContext.prototype = $extend(hex_ioc_assembler_AbstractApplicationContext.prototype,{
	_initStateList: function() {
		this.state = new hex_ioc_assembler_ApplicationContextStateList();
	}
	,_initStateMachine: function() {
		this._initStateList();
		this._stateMachine = new hex_state_StateMachine(this.state.CONTEXT_INITIALIZED);
		this._stateController = new hex_state_control_StateController(this.getInjector(),this._stateMachine);
		this._dispatcher.addListener(this._stateController);
	}
	,dispatch: function(messageType,data) {
		this._dispatcher.dispatch(messageType,data);
	}
	,getCurrentState: function() {
		return this._stateController.getCurrentState();
	}
	,__class__: hex_ioc_assembler_ApplicationContext
});
var hex_ioc_assembler_ApplicationContextStateList = function() {
	this.ASSEMBLING_END = new hex_state_State("onAssemblingEnd");
	this.MODULES_INITIALIZED = new hex_state_State("onModulesInitialized");
	this.METHODS_CALLED = new hex_state_State("onMethodsCalled");
	this.DOMAIN_LISTENERS_ASSIGNED = new hex_state_State("onDomainListenersAssigned");
	this.OBJECTS_BUILT = new hex_state_State("onObjectsBuilt");
	this.ASSEMBLING_START = new hex_state_State("onAssemblingStart");
	this.STATE_TRANSITIONS_BUILT = new hex_state_State("onStateTransitionsBuilt");
	this.CONTEXT_PARSED = new hex_state_State("onContextParsed");
	this.CONTEXT_INITIALIZED = new hex_state_State("onContextInitialized");
	this.CONTEXT_INITIALIZED.addTransition(hex_ioc_assembler_ApplicationAssemblerMessage.CONTEXT_PARSED,this.CONTEXT_PARSED);
	this.CONTEXT_PARSED.addTransition(hex_ioc_assembler_ApplicationAssemblerMessage.STATE_TRANSITIONS_BUILT,this.STATE_TRANSITIONS_BUILT);
	this.STATE_TRANSITIONS_BUILT.addTransition(hex_ioc_assembler_ApplicationAssemblerMessage.ASSEMBLING_START,this.ASSEMBLING_START);
	this.ASSEMBLING_START.addTransition(hex_ioc_assembler_ApplicationAssemblerMessage.OBJECTS_BUILT,this.OBJECTS_BUILT);
	this.OBJECTS_BUILT.addTransition(hex_ioc_assembler_ApplicationAssemblerMessage.DOMAIN_LISTENERS_ASSIGNED,this.DOMAIN_LISTENERS_ASSIGNED);
	this.DOMAIN_LISTENERS_ASSIGNED.addTransition(hex_ioc_assembler_ApplicationAssemblerMessage.METHODS_CALLED,this.METHODS_CALLED);
	this.METHODS_CALLED.addTransition(hex_ioc_assembler_ApplicationAssemblerMessage.MODULES_INITIALIZED,this.MODULES_INITIALIZED);
	this.MODULES_INITIALIZED.addTransition(hex_ioc_assembler_ApplicationAssemblerMessage.ASSEMBLING_END,this.ASSEMBLING_END);
	this.ASSEMBLING_END.addTransition(hex_ioc_assembler_ApplicationAssemblerMessage.STATE_TRANSITIONS_BUILT,this.STATE_TRANSITIONS_BUILT);
};
$hxClasses["hex.ioc.assembler.ApplicationContextStateList"] = hex_ioc_assembler_ApplicationContextStateList;
hex_ioc_assembler_ApplicationContextStateList.__name__ = ["hex","ioc","assembler","ApplicationContextStateList"];
hex_ioc_assembler_ApplicationContextStateList.prototype = {
	__class__: hex_ioc_assembler_ApplicationContextStateList
};
var hex_ioc_control_ArrayFactory = function() {
};
$hxClasses["hex.ioc.control.ArrayFactory"] = hex_ioc_control_ArrayFactory;
hex_ioc_control_ArrayFactory.__name__ = ["hex","ioc","control","ArrayFactory"];
hex_ioc_control_ArrayFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var array = [];
	var args = constructorVO["arguments"];
	if(args != null) array = args.slice();
	constructorVO.result = array;
};
hex_ioc_control_ArrayFactory.prototype = {
	__class__: hex_ioc_control_ArrayFactory
};
var hex_ioc_control_BoolFactory = function() {
};
$hxClasses["hex.ioc.control.BoolFactory"] = hex_ioc_control_BoolFactory;
hex_ioc_control_BoolFactory.__name__ = ["hex","ioc","control","BoolFactory"];
hex_ioc_control_BoolFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var value = "";
	var args = constructorVO["arguments"];
	if(args != null && args.length > 0) value = args[0];
	if(value == "true") constructorVO.result = true; else if(value == "false") constructorVO.result = false; else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("BoolFactory.build(" + value + ") failed.",{ fileName : "BoolFactory.hx", lineNumber : 40, className : "hex.ioc.control.BoolFactory", methodName : "build"}));
};
hex_ioc_control_BoolFactory.prototype = {
	__class__: hex_ioc_control_BoolFactory
};
var hex_ioc_control_ClassFactory = function() {
};
$hxClasses["hex.ioc.control.ClassFactory"] = hex_ioc_control_ClassFactory;
hex_ioc_control_ClassFactory.__name__ = ["hex","ioc","control","ClassFactory"];
hex_ioc_control_ClassFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var clazz;
	var qualifiedClassName = "";
	var args = constructorVO["arguments"];
	if(args != null && args.length > 0) qualifiedClassName = "" + Std.string(args[0]);
	try {
		clazz = Type.resolveClass(qualifiedClassName);
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		clazz = null;
	}
	if(clazz == null) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("'" + qualifiedClassName + "' is not available",{ fileName : "ClassFactory.hx", lineNumber : 42, className : "hex.ioc.control.ClassFactory", methodName : "build"}));
	constructorVO.result = clazz;
};
hex_ioc_control_ClassFactory.prototype = {
	__class__: hex_ioc_control_ClassFactory
};
var hex_ioc_control_ClassInstanceFactory = function() {
};
$hxClasses["hex.ioc.control.ClassInstanceFactory"] = hex_ioc_control_ClassInstanceFactory;
hex_ioc_control_ClassInstanceFactory.__name__ = ["hex","ioc","control","ClassInstanceFactory"];
hex_ioc_control_ClassInstanceFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	if(constructorVO.ref != null) hex_ioc_control_ReferenceFactory.build(factoryVO); else {
		if(!factoryVO.coreFactory.hasProxyFactoryMethod(constructorVO.type)) {
			var classReference = hex_util_ClassUtil.getClassReference(constructorVO.type);
			var isModule = hex_util_ClassUtil.classExtendsOrImplements(classReference,hex_module_IModule);
			if(isModule && constructorVO.ID != null && constructorVO.ID.length > 0) {
				var moduleDomain = hex_domain_DomainUtil.getDomain(constructorVO.ID,hex_domain_Domain);
				hex_domain_DomainExpert.getInstance().registerDomain(moduleDomain);
				hex_metadata_AnnotationProvider.registerToParentDomain(moduleDomain,factoryVO.contextFactory.getApplicationContext().getDomain());
			}
		}
		constructorVO.result = factoryVO.coreFactory.buildInstance(constructorVO);
		if(js_Boot.__instanceof(constructorVO.result,hex_module_IModule)) factoryVO.moduleLocator.register(constructorVO.ID,constructorVO.result);
		if(constructorVO.mapTypes != null) {
			var mapTypes = constructorVO.mapTypes;
			var _g = 0;
			while(_g < mapTypes.length) {
				var mapType = mapTypes[_g];
				++_g;
				var classToMap = Type.resolveClass(mapType);
				factoryVO.contextFactory.getApplicationContext().getInjector().mapToValue(classToMap,constructorVO.result,constructorVO.ID);
			}
		}
	}
};
hex_ioc_control_ClassInstanceFactory.prototype = {
	__class__: hex_ioc_control_ClassInstanceFactory
};
var hex_ioc_control_DomainListenerFactory = function() {
};
$hxClasses["hex.ioc.control.DomainListenerFactory"] = hex_ioc_control_DomainListenerFactory;
hex_ioc_control_DomainListenerFactory.__name__ = ["hex","ioc","control","DomainListenerFactory"];
hex_ioc_control_DomainListenerFactory.build = function(id,domainListenerVOLocator,applicationContext,annotationProvider) {
	var coreFactory = applicationContext.getCoreFactory();
	var domainListener = domainListenerVOLocator.locate(id);
	var listener = coreFactory.locate(domainListener.ownerID);
	var args = domainListener["arguments"];
	var observable = null;
	if(coreFactory.isRegisteredWithKey(domainListener.listenedDomainName)) {
		var located = coreFactory.locate(domainListener.listenedDomainName);
		if(js_Boot.__instanceof(located,hex_event_IObservable)) observable = located;
	}
	if(args != null && args.length > 0) {
		var _g = 0;
		while(_g < args.length) {
			var domainListenerArgument = args[_g];
			++_g;
			var method;
			if(js_Boot.__instanceof(listener,hex_event_EventProxy)) method = "handleCallback"; else method = domainListenerArgument.method;
			var messageType = hex_util_ClassUtil.getStaticVariableReference(domainListenerArgument.staticRef);
			if(method != null && Reflect.isFunction(Reflect.field(listener,method)) || domainListenerArgument.strategy != null) {
				var callback = [domainListenerArgument.strategy != null?hex_ioc_control_DomainListenerFactory._getStrategyCallback(annotationProvider,applicationContext,listener,method,domainListenerArgument.strategy,domainListenerArgument.injectedInModule):Reflect.field(listener,method)];
				if(observable == null) {
					var domain = hex_domain_DomainUtil.getDomain(domainListener.listenedDomainName,hex_domain_Domain);
					hex_domain_ApplicationDomainDispatcher.getInstance().addHandler(messageType,listener,callback[0],domain);
				} else {
					var f = (function(callback) {
						return function(rest) {
							Reflect.callMethod(listener,callback[0],rest);
						};
					})(callback);
					observable.addHandler(messageType,Reflect.makeVarArgs(f));
				}
			} else if(method == null) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("DomainListenerFactory.build failed. Callback should be defined (use 'method' attribute) in instance of '" + hex_log_Stringifier.stringify(listener) + "' class with '" + domainListener.ownerID + "' id",{ fileName : "DomainListenerFactory.hx", lineNumber : 81, className : "hex.ioc.control.DomainListenerFactory", methodName : "build"})); else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("DomainListenerFactory.build failed. Method named '" + method + "' can't be found in instance of '" + hex_log_Stringifier.stringify(listener) + "' class with '" + domainListener.ownerID + "' id",{ fileName : "DomainListenerFactory.hx", lineNumber : 86, className : "hex.ioc.control.DomainListenerFactory", methodName : "build"}));
		}
		return true;
	} else {
		var domain1 = hex_domain_DomainUtil.getDomain(domainListener.listenedDomainName,hex_domain_Domain);
		return hex_domain_ApplicationDomainDispatcher.getInstance().addListener(listener,domain1);
	}
};
hex_ioc_control_DomainListenerFactory._getStrategyCallback = function(annotationProvider,applicationContext,listener,method,strategyClassName,injectedInModule) {
	if(injectedInModule == null) injectedInModule = false;
	var callback = null;
	if(method != null) callback = Reflect.field(listener,method);
	var strategyClass = hex_util_ClassUtil.getClassReference(strategyClassName);
	var adapter = new hex_event_ClassAdapter();
	adapter.setCallBackMethod(listener,callback);
	adapter.setAdapterClass(strategyClass);
	adapter.setAnnotationProvider(annotationProvider);
	if(injectedInModule && js_Boot.__instanceof(listener,hex_module_IModule)) {
		var basicInjector = listener.getInjector();
		adapter.setFactoryMethod(basicInjector,$bind(basicInjector,basicInjector.instantiateUnmapped));
	} else adapter.setFactoryMethod(applicationContext.getInjector(),($_=applicationContext.getInjector(),$bind($_,$_.instantiateUnmapped)));
	var f = function(rest) {
		(adapter.getCallbackAdapter())(rest);
	};
	return Reflect.makeVarArgs(f);
};
hex_ioc_control_DomainListenerFactory.prototype = {
	__class__: hex_ioc_control_DomainListenerFactory
};
var hex_ioc_control_DynamicObjectFactory = function() {
};
$hxClasses["hex.ioc.control.DynamicObjectFactory"] = hex_ioc_control_DynamicObjectFactory;
hex_ioc_control_DynamicObjectFactory.__name__ = ["hex","ioc","control","DynamicObjectFactory"];
hex_ioc_control_DynamicObjectFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	factoryVO.constructorVO.result = { };
};
hex_ioc_control_DynamicObjectFactory.prototype = {
	__class__: hex_ioc_control_DynamicObjectFactory
};
var hex_ioc_control_FloatFactory = function() {
};
$hxClasses["hex.ioc.control.FloatFactory"] = hex_ioc_control_FloatFactory;
hex_ioc_control_FloatFactory.__name__ = ["hex","ioc","control","FloatFactory"];
hex_ioc_control_FloatFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var args = constructorVO["arguments"];
	var number = NaN;
	if(args != null && args.length > 0) number = Std.parseFloat(args[0]);
	if(!isNaN(number)) constructorVO.result = number; else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("FloatFactory.build(" + number + ") failed.",{ fileName : "FloatFactory.hx", lineNumber : 36, className : "hex.ioc.control.FloatFactory", methodName : "build"}));
};
hex_ioc_control_FloatFactory.prototype = {
	__class__: hex_ioc_control_FloatFactory
};
var hex_ioc_control_FunctionFactory = function() {
};
$hxClasses["hex.ioc.control.FunctionFactory"] = hex_ioc_control_FunctionFactory;
hex_ioc_control_FunctionFactory.__name__ = ["hex","ioc","control","FunctionFactory"];
hex_ioc_control_FunctionFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var method;
	var msg;
	var args = constructorVO["arguments"][0].split(".");
	var targetID = args[0];
	var path = args.slice(1).join(".");
	if(!factoryVO.coreFactory.isRegisteredWithKey(targetID)) factoryVO.contextFactory.buildObject(targetID);
	var target = factoryVO.coreFactory.locate(targetID);
	try {
		method = factoryVO.coreFactory.fastEvalFromTarget(target,path);
	} catch( error ) {
		if (error instanceof js__$Boot_HaxeError) error = error.val;
		msg = "FunctionFactory.build() failed on " + Std.string(target) + " with id '" + targetID + "'. ";
		msg += path + " method can't be found.";
		throw new js__$Boot_HaxeError(new hex_error_Exception(msg,{ fileName : "FunctionFactory.hx", lineNumber : 44, className : "hex.ioc.control.FunctionFactory", methodName : "build"}));
	}
	constructorVO.result = method;
};
hex_ioc_control_FunctionFactory.prototype = {
	__class__: hex_ioc_control_FunctionFactory
};
var hex_ioc_control_HashMapFactory = function() {
};
$hxClasses["hex.ioc.control.HashMapFactory"] = hex_ioc_control_HashMapFactory;
hex_ioc_control_HashMapFactory.__name__ = ["hex","ioc","control","HashMapFactory"];
hex_ioc_control_HashMapFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var map = new hex_collection_HashMap();
	var args = constructorVO["arguments"];
	if(args.length == 0) hex_log_Logger.WARN("HashMapFactory.build(" + Std.string(args) + ") returns an empty HashMap.",null,{ fileName : "HashMapFactory.hx", lineNumber : 30, className : "hex.ioc.control.HashMapFactory", methodName : "build"}); else {
		var _g = 0;
		while(_g < args.length) {
			var item = args[_g];
			++_g;
			if(item.key != null) map.put(item.key,item.value); else haxe_Log.trace("HashMapFactory.build() adds item with a 'null' key for '" + Std.string(item.value) + "' value.",{ fileName : "HashMapFactory.hx", lineNumber : 43, className : "hex.ioc.control.HashMapFactory", methodName : "build"});
		}
	}
	constructorVO.result = map;
};
hex_ioc_control_HashMapFactory.prototype = {
	__class__: hex_ioc_control_HashMapFactory
};
var hex_ioc_control_IntFactory = function() {
};
$hxClasses["hex.ioc.control.IntFactory"] = hex_ioc_control_IntFactory;
hex_ioc_control_IntFactory.__name__ = ["hex","ioc","control","IntFactory"];
hex_ioc_control_IntFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var args = constructorVO["arguments"];
	var number = 0;
	if(args != null && args.length > 0) number = Std.parseInt(Std.string(args[0])); else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("IntFactory.build(" + (args != null && args.length > 0?args[0]:"") + ") failed.",{ fileName : "IntFactory.hx", lineNumber : 30, className : "hex.ioc.control.IntFactory", methodName : "build"}));
	if(number == null) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("IntFactory.build(" + number + ") failed.",{ fileName : "IntFactory.hx", lineNumber : 39, className : "hex.ioc.control.IntFactory", methodName : "build"})); else constructorVO.result = number;
};
hex_ioc_control_IntFactory.prototype = {
	__class__: hex_ioc_control_IntFactory
};
var hex_ioc_control_MappingConfigurationFactory = function() {
};
$hxClasses["hex.ioc.control.MappingConfigurationFactory"] = hex_ioc_control_MappingConfigurationFactory;
hex_ioc_control_MappingConfigurationFactory.__name__ = ["hex","ioc","control","MappingConfigurationFactory"];
hex_ioc_control_MappingConfigurationFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var config = new hex_ioc_di_MappingConfiguration();
	var args = constructorVO["arguments"];
	if(args.length <= 0) haxe_Log.trace("MappingConfigurationFactory.build(" + Std.string(args) + ") returns an empty congiuration.",{ fileName : "MappingConfigurationFactory.hx", lineNumber : 28, className : "hex.ioc.control.MappingConfigurationFactory", methodName : "build"}); else {
		var _g = 0;
		while(_g < args.length) {
			var item = args[_g];
			++_g;
			if(item.key != null) config.addMapping(item.key,item.value,item.mapName,item.asSingleton,item.injectInto); else haxe_Log.trace("MappingConfigurationFactory.build() adds item with a 'null' key for '" + Std.string(item.value) + "' value.",{ fileName : "MappingConfigurationFactory.hx", lineNumber : 40, className : "hex.ioc.control.MappingConfigurationFactory", methodName : "build"});
		}
	}
	constructorVO.result = config;
};
hex_ioc_control_MappingConfigurationFactory.prototype = {
	__class__: hex_ioc_control_MappingConfigurationFactory
};
var hex_ioc_control_NullFactory = function() {
};
$hxClasses["hex.ioc.control.NullFactory"] = hex_ioc_control_NullFactory;
hex_ioc_control_NullFactory.__name__ = ["hex","ioc","control","NullFactory"];
hex_ioc_control_NullFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	constructorVO.result = null;
};
hex_ioc_control_NullFactory.prototype = {
	__class__: hex_ioc_control_NullFactory
};
var hex_ioc_control_ReferenceFactory = function() {
};
$hxClasses["hex.ioc.control.ReferenceFactory"] = hex_ioc_control_ReferenceFactory;
hex_ioc_control_ReferenceFactory.__name__ = ["hex","ioc","control","ReferenceFactory"];
hex_ioc_control_ReferenceFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var key = constructorVO.ref;
	if(key.indexOf(".") != -1) key = Std.string(key.split(".").shift());
	if(!factoryVO.coreFactory.isRegisteredWithKey(key)) factoryVO.contextFactory.buildObject(key);
	var result = factoryVO.coreFactory.locate(key);
	if(constructorVO.ref.indexOf(".") != -1) {
		var args = constructorVO.ref.split(".");
		args.shift();
		constructorVO.result = factoryVO.coreFactory.fastEvalFromTarget(result,args.join("."));
	} else constructorVO.result = result;
};
hex_ioc_control_ReferenceFactory.prototype = {
	__class__: hex_ioc_control_ReferenceFactory
};
var hex_ioc_control_ServiceLocatorFactory = function() {
};
$hxClasses["hex.ioc.control.ServiceLocatorFactory"] = hex_ioc_control_ServiceLocatorFactory;
hex_ioc_control_ServiceLocatorFactory.__name__ = ["hex","ioc","control","ServiceLocatorFactory"];
hex_ioc_control_ServiceLocatorFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var serviceLocator = new hex_config_stateful_ServiceLocator();
	var args = constructorVO["arguments"];
	if(args.length <= 0) haxe_Log.trace("ServiceLocatorFactory.build(" + Std.string(args) + ") returns an empty ServiceConfig.",{ fileName : "ServiceLocatorFactory.hx", lineNumber : 28, className : "hex.ioc.control.ServiceLocatorFactory", methodName : "build"}); else {
		var _g = 0;
		while(_g < args.length) {
			var item = args[_g];
			++_g;
			if(item.key != null) serviceLocator.addService(item.key,item.value,item.mapName); else haxe_Log.trace("ServiceLocatorFactory.build() adds item with a 'null' key for '" + Std.string(item.value) + "' value.",{ fileName : "ServiceLocatorFactory.hx", lineNumber : 40, className : "hex.ioc.control.ServiceLocatorFactory", methodName : "build"});
		}
	}
	constructorVO.result = serviceLocator;
};
hex_ioc_control_ServiceLocatorFactory.prototype = {
	__class__: hex_ioc_control_ServiceLocatorFactory
};
var hex_ioc_control_StateTransitionFactory = function() {
};
$hxClasses["hex.ioc.control.StateTransitionFactory"] = hex_ioc_control_StateTransitionFactory;
hex_ioc_control_StateTransitionFactory.__name__ = ["hex","ioc","control","StateTransitionFactory"];
hex_ioc_control_StateTransitionFactory.build = function(vo,contextFactory) {
	var coreFactory = contextFactory.getCoreFactory();
	var state = null;
	if(vo.staticReference != null) state = hex_util_ClassUtil.getStaticVariableReference(vo.staticReference); else if(vo.instanceReference != null) state = coreFactory.locate(vo.instanceReference); else throw new js__$Boot_HaxeError(new hex_ioc_error_BuildingException("StateTransitionFactory.build failed with value object '" + Std.string(vo) + "'",{ fileName : "StateTransitionFactory.hx", lineNumber : 43, className : "hex.ioc.control.StateTransitionFactory", methodName : "build"}));
	var stateUnmapper = hex_state_StateUnmapper.register(state);
	if(state == null) throw new js__$Boot_HaxeError(new hex_ioc_error_BuildingException("StateTransitionFactory.build failed with value object '" + Std.string(vo) + "'",{ fileName : "StateTransitionFactory.hx", lineNumber : 50, className : "hex.ioc.control.StateTransitionFactory", methodName : "build"}));
	var enterList = vo.enterList;
	var _g = 0;
	while(_g < enterList.length) {
		var enterVO = enterList[_g];
		++_g;
		var enterCommandClass = hex_util_ClassUtil.getClassReference(enterVO.commandClassName);
		var enterMapping = new hex_control_command_CommandMapping(enterCommandClass);
		var enterContextOwner = null;
		if(enterVO.contextOwner != null) enterContextOwner = new hex_ioc_di_ContextOwnerWrapper(coreFactory,enterVO.contextOwner);
		enterMapping.setContextOwner(enterContextOwner != null?enterContextOwner:contextFactory.getApplicationContext());
		if(enterVO.fireOnce) enterMapping.once();
		state.addEnterCommandMapping(enterMapping);
		stateUnmapper.addEnterMapping(enterMapping);
	}
	var exitList = vo.exitList;
	var _g1 = 0;
	while(_g1 < exitList.length) {
		var exitVO = exitList[_g1];
		++_g1;
		var exitCommandClass = hex_util_ClassUtil.getClassReference(exitVO.commandClassName);
		var exitMapping = new hex_control_command_CommandMapping(exitCommandClass);
		var exitContextOwner = null;
		if(exitVO.contextOwner != null) exitContextOwner = new hex_ioc_di_ContextOwnerWrapper(coreFactory,exitVO.contextOwner);
		exitMapping.setContextOwner(exitContextOwner != null?exitContextOwner:contextFactory.getApplicationContext());
		if(exitVO.fireOnce) exitMapping.once();
		state.addExitCommandMapping(exitMapping);
		stateUnmapper.addExitMapping(exitMapping);
	}
};
hex_ioc_control_StateTransitionFactory.prototype = {
	__class__: hex_ioc_control_StateTransitionFactory
};
var hex_ioc_control_StaticVariableFactory = function() {
};
$hxClasses["hex.ioc.control.StaticVariableFactory"] = hex_ioc_control_StaticVariableFactory;
hex_ioc_control_StaticVariableFactory.__name__ = ["hex","ioc","control","StaticVariableFactory"];
hex_ioc_control_StaticVariableFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	constructorVO.result = hex_util_ClassUtil.getStaticVariableReference(constructorVO.staticRef);
};
hex_ioc_control_StaticVariableFactory.prototype = {
	__class__: hex_ioc_control_StaticVariableFactory
};
var hex_ioc_control_StringFactory = function() {
};
$hxClasses["hex.ioc.control.StringFactory"] = hex_ioc_control_StringFactory;
hex_ioc_control_StringFactory.__name__ = ["hex","ioc","control","StringFactory"];
hex_ioc_control_StringFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var value = null;
	var args = constructorVO["arguments"];
	if(args != null && args.length > 0 && args[0] != null) value = Std.string(args[0]); else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("StringFactory.build(" + value + ") returns empty String.",{ fileName : "StringFactory.hx", lineNumber : 32, className : "hex.ioc.control.StringFactory", methodName : "build"}));
	if(value == null) {
		value = "";
		hex_log_Logger.WARN("StringFactory.build(" + value + ") returns empty String.",null,{ fileName : "StringFactory.hx", lineNumber : 39, className : "hex.ioc.control.StringFactory", methodName : "build"});
	}
	constructorVO.result = value;
};
hex_ioc_control_StringFactory.prototype = {
	__class__: hex_ioc_control_StringFactory
};
var hex_ioc_control_UIntFactory = function() {
};
$hxClasses["hex.ioc.control.UIntFactory"] = hex_ioc_control_UIntFactory;
hex_ioc_control_UIntFactory.__name__ = ["hex","ioc","control","UIntFactory"];
hex_ioc_control_UIntFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var args = constructorVO["arguments"];
	var number = 0;
	if(args != null && args.length > 0) number = Std.parseInt(Std.string(args[0])); else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("UIntFactory.build(" + (args != null && args.length > 0?args[0]:"") + ") failed.",{ fileName : "UIntFactory.hx", lineNumber : 30, className : "hex.ioc.control.UIntFactory", methodName : "build"}));
	if(number == null || _$UInt_UInt_$Impl_$.gt(0,number)) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("UIntFactory.build(" + Std.string(_$UInt_UInt_$Impl_$.toFloat(number)) + ") failed.",{ fileName : "UIntFactory.hx", lineNumber : 39, className : "hex.ioc.control.UIntFactory", methodName : "build"})); else constructorVO.result = number;
};
hex_ioc_control_UIntFactory.prototype = {
	__class__: hex_ioc_control_UIntFactory
};
var hex_ioc_control_XmlFactory = function() {
};
$hxClasses["hex.ioc.control.XmlFactory"] = hex_ioc_control_XmlFactory;
hex_ioc_control_XmlFactory.__name__ = ["hex","ioc","control","XmlFactory"];
hex_ioc_control_XmlFactory.build = function(factoryVO) {
	var constructorVO = factoryVO.constructorVO;
	var args = constructorVO["arguments"];
	var factory = constructorVO.factory;
	if(args != null || args.length > 0) {
		var source = args[0];
		if(source.length > 0) {
			if(factory == null) constructorVO.result = Xml.parse(source); else try {
				var parser = factoryVO.coreFactory.buildInstance(new hex_ioc_vo_ConstructorVO(null,factory));
				constructorVO.result = parser.parse(Xml.parse(source));
			} catch( error ) {
				if (error instanceof js__$Boot_HaxeError) error = error.val;
				throw new js__$Boot_HaxeError(new hex_ioc_error_ParsingException("XmlFactory.build() failed to deserialize XML with '" + factory + "' deserializer class.",{ fileName : "XmlFactory.hx", lineNumber : 48, className : "hex.ioc.control.XmlFactory", methodName : "build"}));
			}
		} else {
			haxe_Log.trace("XmlFactory.build() returns an empty XML.",{ fileName : "XmlFactory.hx", lineNumber : 55, className : "hex.ioc.control.XmlFactory", methodName : "build"});
			constructorVO.result = Xml.parse("");
		}
	} else {
		haxe_Log.trace("XmlFactory.build() returns an empty XML.",{ fileName : "XmlFactory.hx", lineNumber : 64, className : "hex.ioc.control.XmlFactory", methodName : "build"});
		constructorVO.result = Xml.parse("");
	}
};
hex_ioc_control_XmlFactory.prototype = {
	__class__: hex_ioc_control_XmlFactory
};
var hex_ioc_core_IContextFactory = function() { };
$hxClasses["hex.ioc.core.IContextFactory"] = hex_ioc_core_IContextFactory;
hex_ioc_core_IContextFactory.__name__ = ["hex","ioc","core","IContextFactory"];
hex_ioc_core_IContextFactory.prototype = {
	__class__: hex_ioc_core_IContextFactory
};
var hex_ioc_core_ContextFactory = function(applicationContextName,applicationContextClass) {
	var domain = hex_domain_DomainUtil.getDomain(applicationContextName,hex_domain_Domain);
	this._contextDispatcher = hex_domain_ApplicationDomainDispatcher.getInstance().getDomainDispatcher(domain);
	var injector = new hex_di_Injector();
	injector.mapToValue(hex_di_IBasicInjector,injector);
	injector.mapToValue(hex_di_IDependencyInjector,injector);
	injector.mapToType(hex_control_macro_IMacroExecutor,hex_control_macro_MacroExecutor);
	var logger = new hex_log_DomainLogger(domain);
	injector.mapToValue(hex_log_ILogger,logger);
	this._annotationProvider = hex_metadata_AnnotationProvider.getAnnotationProvider(hex_domain_DomainUtil.getDomain(applicationContextName,hex_domain_Domain));
	this._annotationProvider.registerInjector(injector);
	this._coreFactory = new hex_ioc_core_CoreFactory(injector,this._annotationProvider);
	if(applicationContextClass != null) this._applicationContext = Type.createInstance(applicationContextClass,[this._contextDispatcher,this._coreFactory,applicationContextName]); else this._applicationContext = new hex_ioc_assembler_ApplicationContext(this._contextDispatcher,this._coreFactory,applicationContextName);
	injector.mapToValue(hex_ioc_assembler_AbstractApplicationContext,this._applicationContext);
	this._coreFactory.register(applicationContextName,this._applicationContext);
	this._contextDispatcher.dispatch(hex_ioc_assembler_ApplicationAssemblerMessage.CONTEXT_PARSED);
	this._init();
};
$hxClasses["hex.ioc.core.ContextFactory"] = hex_ioc_core_ContextFactory;
hex_ioc_core_ContextFactory.__name__ = ["hex","ioc","core","ContextFactory"];
hex_ioc_core_ContextFactory.__interfaces__ = [hex_collection_ILocatorListener,hex_ioc_core_IContextFactory];
hex_ioc_core_ContextFactory.prototype = {
	dispatchAssemblingStart: function() {
		this._contextDispatcher.dispatch(hex_ioc_assembler_ApplicationAssemblerMessage.ASSEMBLING_START);
	}
	,dispatchAssemblingEnd: function() {
		this._contextDispatcher.dispatch(hex_ioc_assembler_ApplicationAssemblerMessage.ASSEMBLING_END);
	}
	,registerID: function(id) {
		return this._IDExpert.register(id);
	}
	,registerStateTransitionVO: function(stateTransitionVO) {
		this._stateTransitionVOLocator.register(stateTransitionVO.ID,stateTransitionVO);
	}
	,buildStateTransition: function(key) {
		if(this._stateTransitionVOLocator.isRegisteredWithKey(key)) {
			hex_ioc_control_StateTransitionFactory.build(this._stateTransitionVOLocator.locate(key),this);
			this._stateTransitionVOLocator.unregister(key);
		}
	}
	,buildAllStateTransitions: function() {
		var keys = this._stateTransitionVOLocator.keys();
		var _g = 0;
		while(_g < keys.length) {
			var key = keys[_g];
			++_g;
			this.buildStateTransition(key);
		}
		this._contextDispatcher.dispatch(hex_ioc_assembler_ApplicationAssemblerMessage.STATE_TRANSITIONS_BUILT);
	}
	,registerPropertyVO: function(propertyVO) {
		var id = propertyVO.ownerID;
		if(this._propertyVOLocator.isRegisteredWithKey(id)) this._propertyVOLocator.locate(id).push(propertyVO); else this._propertyVOLocator.register(id,[propertyVO]);
	}
	,_getPropertyValue: function(property) {
		if(property.method != null) return this._build(new hex_ioc_vo_ConstructorVO(null,"Function",[property.method])); else if(property.ref != null) return this._build(new hex_ioc_vo_ConstructorVO(null,"Instance",null,null,null,false,property.ref)); else if(property.staticRef != null) return hex_util_ClassUtil.getStaticVariableReference(property.staticRef); else {
			var type;
			if(property.type != null) type = property.type; else type = "String";
			return this._build(new hex_ioc_vo_ConstructorVO(property.ownerID,type,[property.value]));
		}
	}
	,_setPropertyValue: function(property,target,id) {
		var propertyName = property.name;
		if(propertyName.indexOf(".") == -1) Reflect.setProperty(target,propertyName,this._getPropertyValue(property)); else {
			var props = propertyName.split(".");
			propertyName = props.pop();
			var target1 = this._coreFactory.fastEvalFromTarget(target,props.join("."));
			Reflect.setProperty(target1,propertyName,this._getPropertyValue(property));
		}
	}
	,onRegister: function(key,instance) {
		if(this._propertyVOLocator.isRegisteredWithKey(key)) {
			var properties = this._propertyVOLocator.locate(key);
			var _g = 0;
			while(_g < properties.length) {
				var p = properties[_g];
				++_g;
				this._setPropertyValue(p,instance,key);
			}
		}
	}
	,onUnregister: function(key) {
	}
	,handleEvent: function(e) {
	}
	,registerConstructorVO: function(constructorVO) {
		this._constructorVOLocator.register(constructorVO.ID,constructorVO);
	}
	,buildObject: function(id) {
		if(this._constructorVOLocator.isRegisteredWithKey(id)) {
			var cons = this._constructorVOLocator.locate(id);
			var args = cons["arguments"];
			if(args != null) {
				if(cons.type == "hex.collection.HashMap" || cons.type == "hex.config.stateful.ServiceLocator" || cons.type == "hex.ioc.di.MappingConfiguration") {
					var result = [];
					var _g = 0;
					while(_g < args.length) {
						var obj = args[_g];
						++_g;
						var mapVO = obj;
						mapVO.key = this._build(mapVO.getPropertyKey());
						mapVO.value = this._build(mapVO.getPropertyValue());
						result.push(mapVO);
					}
					cons["arguments"] = result;
				} else {
					var $arguments = cons["arguments"];
					var l = $arguments.length;
					var _g1 = 0;
					while(_g1 < l) {
						var i = _g1++;
						$arguments[i] = this._build($arguments[i]);
					}
				}
			}
			this._build(cons,id);
			this._constructorVOLocator.unregister(id);
		}
	}
	,buildAllObjects: function() {
		var keys = this._constructorVOLocator.keys();
		var _g = 0;
		while(_g < keys.length) {
			var key = keys[_g];
			++_g;
			this.buildObject(key);
		}
		this._contextDispatcher.dispatch(hex_ioc_assembler_ApplicationAssemblerMessage.OBJECTS_BUILT);
	}
	,registerDomainListenerVO: function(domainListenerVO) {
		this._domainListenerVOLocator.register("" + hex_core_HashCodeFactory.getKey(domainListenerVO),domainListenerVO);
	}
	,assignAllDomainListeners: function() {
		var listeners = this._domainListenerVOLocator.keys();
		var _g = 0;
		while(_g < listeners.length) {
			var key = listeners[_g];
			++_g;
			this.assignDomainListener(key);
		}
		this._domainListenerVOLocator.clear();
		this._contextDispatcher.dispatch(hex_ioc_assembler_ApplicationAssemblerMessage.DOMAIN_LISTENERS_ASSIGNED);
	}
	,assignDomainListener: function(id) {
		return hex_ioc_control_DomainListenerFactory.build(id,this._domainListenerVOLocator,this._applicationContext,this._annotationProvider);
	}
	,registerMethodCallVO: function(methodCallVO) {
		var index = this._methodCallVOLocator.keys().length + 1;
		this._methodCallVOLocator.register("" + index,methodCallVO);
	}
	,callMethod: function(id) {
		var method = this._methodCallVOLocator.locate(id);
		var cons = new hex_ioc_vo_ConstructorVO(null,"Function",[method.ownerID + "." + method.name]);
		var func = this._build(cons);
		var $arguments = method["arguments"];
		var l = $arguments.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			$arguments[i] = this._build($arguments[i]);
		}
		Reflect.callMethod(this._coreFactory.locate(method.ownerID),func,$arguments);
	}
	,callAllMethods: function() {
		var keyList = this._methodCallVOLocator.keys();
		var _g = 0;
		while(_g < keyList.length) {
			var key = keyList[_g];
			++_g;
			this.callMethod(key);
		}
		this._methodCallVOLocator.clear();
		this._contextDispatcher.dispatch(hex_ioc_assembler_ApplicationAssemblerMessage.METHODS_CALLED);
	}
	,callModuleInitialisation: function() {
		var modules = this._moduleLocator.values();
		var _g = 0;
		while(_g < modules.length) {
			var module = modules[_g];
			++_g;
			module.initialize();
		}
		this._moduleLocator.clear();
		this._contextDispatcher.dispatch(hex_ioc_assembler_ApplicationAssemblerMessage.MODULES_INITIALIZED);
	}
	,getApplicationContext: function() {
		return this._applicationContext;
	}
	,getCoreFactory: function() {
		return this._coreFactory;
	}
	,getAnnotationProvider: function() {
		return this._annotationProvider;
	}
	,getStateTransitionVOLocator: function() {
		return this._stateTransitionVOLocator;
	}
	,release: function() {
		this._coreFactory.removeListener(this);
		this._coreFactory.clear();
		this._constructorVOLocator.release();
		this._propertyVOLocator.release();
		this._methodCallVOLocator.release();
		this._domainListenerVOLocator.release();
		this._stateTransitionVOLocator.release();
		this._moduleLocator.release();
		this._factoryMap = new haxe_ds_StringMap();
		this._IDExpert.clear();
	}
	,_init: function() {
		this._factoryMap = new haxe_ds_StringMap();
		this._IDExpert = new hex_ioc_core_IDExpert();
		this._constructorVOLocator = new hex_ioc_locator_ConstructorVOLocator();
		this._propertyVOLocator = new hex_ioc_locator_PropertyVOLocator();
		this._methodCallVOLocator = new hex_ioc_locator_MethodCallVOLocator();
		this._domainListenerVOLocator = new hex_ioc_locator_DomainListenerVOLocator();
		this._stateTransitionVOLocator = new hex_ioc_locator_StateTransitionVOLocator(this);
		this._moduleLocator = new hex_ioc_locator_ModuleLocator(this);
		this._factoryMap.set("Array",hex_ioc_control_ArrayFactory.build);
		this._factoryMap.set("Bool",hex_ioc_control_BoolFactory.build);
		this._factoryMap.set("Int",hex_ioc_control_IntFactory.build);
		this._factoryMap.set("null",hex_ioc_control_NullFactory.build);
		this._factoryMap.set("Float",hex_ioc_control_FloatFactory.build);
		this._factoryMap.set("Object",hex_ioc_control_DynamicObjectFactory.build);
		this._factoryMap.set("String",hex_ioc_control_StringFactory.build);
		this._factoryMap.set("UInt",hex_ioc_control_UIntFactory.build);
		this._factoryMap.set("Default",hex_ioc_control_StringFactory.build);
		this._factoryMap.set("hex.collection.HashMap",hex_ioc_control_HashMapFactory.build);
		this._factoryMap.set("hex.config.stateful.ServiceLocator",hex_ioc_control_ServiceLocatorFactory.build);
		this._factoryMap.set("Class",hex_ioc_control_ClassFactory.build);
		this._factoryMap.set("XML",hex_ioc_control_XmlFactory.build);
		this._factoryMap.set("Function",hex_ioc_control_FunctionFactory.build);
		this._factoryMap.set("Instance",hex_ioc_control_ClassInstanceFactory.build);
		this._factoryMap.set("StaticVariable",hex_ioc_control_StaticVariableFactory.build);
		this._factoryMap.set("hex.ioc.di.MappingConfiguration",hex_ioc_control_MappingConfigurationFactory.build);
		this._coreFactory.addListener(this);
	}
	,_build: function(constructorVO,id) {
		var type = constructorVO.type;
		var buildMethod;
		if(this._factoryMap.exists(type)) buildMethod = this._factoryMap.get(type); else buildMethod = hex_ioc_control_ClassInstanceFactory.build;
		var builderHelperVO = new hex_ioc_vo_FactoryVO();
		builderHelperVO.type = type;
		builderHelperVO.contextFactory = this;
		builderHelperVO.coreFactory = this._coreFactory;
		builderHelperVO.constructorVO = constructorVO;
		builderHelperVO.moduleLocator = this._moduleLocator;
		buildMethod(builderHelperVO);
		if(id != null) this._coreFactory.register(id,constructorVO.result);
		return constructorVO.result;
	}
	,__class__: hex_ioc_core_ContextFactory
};
var hex_ioc_core_ContextTypeList = function() { };
$hxClasses["hex.ioc.core.ContextTypeList"] = hex_ioc_core_ContextTypeList;
hex_ioc_core_ContextTypeList.__name__ = ["hex","ioc","core","ContextTypeList"];
var hex_ioc_core_ICoreFactory = function() { };
$hxClasses["hex.ioc.core.ICoreFactory"] = hex_ioc_core_ICoreFactory;
hex_ioc_core_ICoreFactory.__name__ = ["hex","ioc","core","ICoreFactory"];
hex_ioc_core_ICoreFactory.__interfaces__ = [hex_collection_ILocator];
hex_ioc_core_ICoreFactory.prototype = {
	__class__: hex_ioc_core_ICoreFactory
};
var hex_util_FastEval = function() {
};
$hxClasses["hex.util.FastEval"] = hex_util_FastEval;
hex_util_FastEval.__name__ = ["hex","util","FastEval"];
hex_util_FastEval.fromTarget = function(target,toEval,coreFactory) {
	var members = toEval.split(".");
	var result;
	while(members.length > 0) {
		var member = members.shift();
		result = Reflect.field(target,member);
		if(result == null) {
			if(js_Boot.__instanceof(target,hex_ioc_assembler_ApplicationContext) && coreFactory.isRegisteredWithKey(member)) result = coreFactory.locate(member); else if(js_Boot.__instanceof(target,HTMLElement)) result = (js_Boot.__cast(target , HTMLElement)).getElementsByClassName(member)[0]; else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("ObjectUtil.fastEvalFromTarget(" + Std.string(target) + ", " + toEval + ", " + Std.string(coreFactory) + ") failed.",{ fileName : "FastEval.hx", lineNumber : 42, className : "hex.util.FastEval", methodName : "fromTarget"}));
		}
		target = result;
	}
	return target;
};
hex_util_FastEval.prototype = {
	__class__: hex_util_FastEval
};
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = ["js","Boot"];
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js_Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
var hex_log_Stringifier = function() {
	throw new js__$Boot_HaxeError(new hex_error_PrivateConstructorException("Stringifier class can't be instantiated.",{ fileName : "Stringifier.hx", lineNumber : 15, className : "hex.log.Stringifier", methodName : "new"}));
};
$hxClasses["hex.log.Stringifier"] = hex_log_Stringifier;
hex_log_Stringifier.__name__ = ["hex","log","Stringifier"];
hex_log_Stringifier.setStringifier = function(o) {
	hex_log_Stringifier._STRATEGY = o;
};
hex_log_Stringifier.getStringifier = function() {
	return hex_log_Stringifier._STRATEGY;
};
hex_log_Stringifier.stringify = function(target) {
	if(hex_log_Stringifier._STRATEGY == null) hex_log_Stringifier._STRATEGY = new hex_log_BasicStringifierStrategy();
	return hex_log_Stringifier._STRATEGY.stringify(target);
};
hex_log_Stringifier.getPosInfos = function(posInfos) {
	return posInfos;
};
hex_log_Stringifier.prototype = {
	__class__: hex_log_Stringifier
};
var hex_log_IStringifierStrategy = function() { };
$hxClasses["hex.log.IStringifierStrategy"] = hex_log_IStringifierStrategy;
hex_log_IStringifierStrategy.__name__ = ["hex","log","IStringifierStrategy"];
hex_log_IStringifierStrategy.prototype = {
	__class__: hex_log_IStringifierStrategy
};
var hex_log_BasicStringifierStrategy = function() {
};
$hxClasses["hex.log.BasicStringifierStrategy"] = hex_log_BasicStringifierStrategy;
hex_log_BasicStringifierStrategy.__name__ = ["hex","log","BasicStringifierStrategy"];
hex_log_BasicStringifierStrategy.__interfaces__ = [hex_log_IStringifierStrategy];
hex_log_BasicStringifierStrategy.prototype = {
	stringify: function(target) {
		var type = Type.getClass(target);
		if(type != null) return Type.getClassName(type); else return "Dynamic";
	}
	,toString: function() {
		return hex_log_Stringifier.stringify(this);
	}
	,__class__: hex_log_BasicStringifierStrategy
};
var hex_log_Logger = function() {
	this.setLevel(hex_log_LogLevel._ALL);
	this._dispatcher = new hex_domain_DomainDispatcher();
};
$hxClasses["hex.log.Logger"] = hex_log_Logger;
hex_log_Logger.__name__ = ["hex","log","Logger"];
hex_log_Logger.getInstance = function() {
	if(hex_log_Logger._Instance == null) hex_log_Logger._Instance = new hex_log_Logger();
	return hex_log_Logger._Instance;
};
hex_log_Logger.DEBUG = function(o,domain,posInfos) {
	hex_log_Logger.getInstance().log(o,hex_log_LogLevel._DEBUG,domain,posInfos);
};
hex_log_Logger.INFO = function(o,domain,posInfos) {
	hex_log_Logger.getInstance().log(o,hex_log_LogLevel._INFO,domain,posInfos);
};
hex_log_Logger.WARN = function(o,domain,posInfos) {
	hex_log_Logger.getInstance().log(o,hex_log_LogLevel._WARN,domain,posInfos);
};
hex_log_Logger.ERROR = function(o,domain,posInfos) {
	hex_log_Logger.getInstance().log(o,hex_log_LogLevel._ERROR,domain,posInfos);
};
hex_log_Logger.FATAL = function(o,domain,posInfos) {
	hex_log_Logger.getInstance().log(o,hex_log_LogLevel._FATAL,domain,posInfos);
};
hex_log_Logger.CLEAR_ALL = function(domain) {
	hex_log_Logger.getInstance().clear();
};
hex_log_Logger.prototype = {
	setLevel: function(level) {
		this._level = level;
	}
	,getLevel: function() {
		return this._level;
	}
	,clear: function() {
		this._dispatcher.dispatch(hex_log_LoggerMessage.CLEAR);
	}
	,log: function(o,level,domain,posInfos) {
		if(this._level.get_value() <= level.get_value()) this._dispatcher.dispatch(hex_log_LoggerMessage.LOG,domain,[new hex_log_LoggerMessage(o,level,domain == null?hex_domain_NoDomain.DOMAIN:domain,posInfos)]);
	}
	,addListener: function(listener,domain) {
		this._dispatcher.addHandler(hex_log_LoggerMessage.LOG,listener,$bind(listener,listener.onLog),domain);
		return this._dispatcher.addHandler(hex_log_LoggerMessage.CLEAR,listener,$bind(listener,listener.onClear),domain);
	}
	,removeListener: function(listener,domain) {
		this._dispatcher.removeHandler(hex_log_LoggerMessage.LOG,listener,$bind(listener,listener.onLog),domain);
		return this._dispatcher.removeHandler(hex_log_LoggerMessage.CLEAR,listener,$bind(listener,listener.onClear),domain);
	}
	,isRegistered: function(listener,domain) {
		return this._dispatcher.isRegistered(listener,hex_log_LoggerMessage.LOG,domain);
	}
	,removeAllListeners: function() {
		this._dispatcher.removeAllListeners();
	}
	,toString: function() {
		return hex_log_Stringifier.stringify(this);
	}
	,__class__: hex_log_Logger
};
var hex_log_LogLevel = function(value) {
	this.value = value;
};
$hxClasses["hex.log.LogLevel"] = hex_log_LogLevel;
hex_log_LogLevel.__name__ = ["hex","log","LogLevel"];
hex_log_LogLevel.__properties__ = {get_OFF:"get_OFF",get_FATAL:"get_FATAL",get_ERROR:"get_ERROR",get_WARN:"get_WARN",get_INFO:"get_INFO",get_DEBUG:"get_DEBUG",get_ALL:"get_ALL",get_LEVELS:"get_LEVELS"}
hex_log_LogLevel.get_LEVELS = function() {
	return [hex_log_LogLevel._ALL,hex_log_LogLevel._DEBUG,hex_log_LogLevel._INFO,hex_log_LogLevel._WARN,hex_log_LogLevel._ERROR,hex_log_LogLevel._FATAL,hex_log_LogLevel._OFF];
};
hex_log_LogLevel.get_ALL = function() {
	return hex_log_LogLevel._ALL;
};
hex_log_LogLevel.get_DEBUG = function() {
	return hex_log_LogLevel._DEBUG;
};
hex_log_LogLevel.get_INFO = function() {
	return hex_log_LogLevel._INFO;
};
hex_log_LogLevel.get_WARN = function() {
	return hex_log_LogLevel._WARN;
};
hex_log_LogLevel.get_ERROR = function() {
	return hex_log_LogLevel._ERROR;
};
hex_log_LogLevel.get_FATAL = function() {
	return hex_log_LogLevel._FATAL;
};
hex_log_LogLevel.get_OFF = function() {
	return hex_log_LogLevel._OFF;
};
hex_log_LogLevel.prototype = {
	get_value: function() {
		return this.value;
	}
	,toString: function() {
		var _g = this.get_value();
		switch(_g) {
		case 0:
			return "ALL";
		case 10000:
			return "DEBUG";
		case 20000:
			return "INFO";
		case 30000:
			return "WARN";
		case 40000:
			return "ERROR";
		case 50000:
			return "FATAL";
		case 60000:
			return "OFF";
		}
		return "";
	}
	,__class__: hex_log_LogLevel
	,__properties__: {get_value:"get_value"}
};
var hex_ioc_core_CoreFactory = function(injector,annotationProvider) {
	this._injector = injector;
	this._annotationProvider = annotationProvider;
	this._dispatcher = new hex_event_ClosureDispatcher();
	this._map = new haxe_ds_StringMap();
	this._classPaths = new haxe_ds_StringMap();
};
$hxClasses["hex.ioc.core.CoreFactory"] = hex_ioc_core_CoreFactory;
hex_ioc_core_CoreFactory.__name__ = ["hex","ioc","core","CoreFactory"];
hex_ioc_core_CoreFactory.__interfaces__ = [hex_ioc_core_ICoreFactory];
hex_ioc_core_CoreFactory.setFastEvalMethod = function(method) {
	hex_ioc_core_CoreFactory._fastEvalMethod = method;
};
hex_ioc_core_CoreFactory.prototype = {
	getAnnotationProvider: function() {
		return this._annotationProvider;
	}
	,addHandler: function(messageType,callback) {
		return this._dispatcher.addHandler(messageType,callback);
	}
	,removeHandler: function(messageType,callback) {
		return this._dispatcher.removeHandler(messageType,callback);
	}
	,addListener: function(listener) {
		var b = this._dispatcher.addHandler(hex_collection_LocatorMessage.REGISTER,$bind(listener,listener.onRegister));
		return this._dispatcher.addHandler(hex_collection_LocatorMessage.UNREGISTER,$bind(listener,listener.onUnregister)) || b;
	}
	,removeListener: function(listener) {
		var b = this._dispatcher.removeHandler(hex_collection_LocatorMessage.REGISTER,$bind(listener,listener.onRegister));
		return this._dispatcher.removeHandler(hex_collection_LocatorMessage.UNREGISTER,$bind(listener,listener.onUnregister)) || b;
	}
	,keys: function() {
		var a = [];
		var it = this._map.keys();
		while(it.hasNext()) a.push(it.next());
		return a;
	}
	,values: function() {
		var a = [];
		var it = this._map.iterator();
		while(it.hasNext()) a.push(it.next());
		return a;
	}
	,locate: function(key) {
		if(this._map.exists(key)) return this._map.get(key); else if(key.indexOf(".") != -1) {
			var props = key.split(".");
			var baseKey = props.shift();
			if(this._map.exists(baseKey)) {
				var target = this._map.get(baseKey);
				return this.fastEvalFromTarget(target,props.join("."));
			}
		}
		throw new js__$Boot_HaxeError(new hex_error_NoSuchElementException("Can't find item with '" + key + "' key in " + hex_log_Stringifier.stringify(this),{ fileName : "CoreFactory.hx", lineNumber : 102, className : "hex.ioc.core.CoreFactory", methodName : "locate"}));
	}
	,isRegisteredWithKey: function(key) {
		var key1 = key;
		return this._map.exists(key1);
	}
	,isInstanceRegistered: function(instance) {
		return (function($this) {
			var $r;
			var _this = $this.values();
			var x = instance;
			$r = HxOverrides.indexOf(_this,x,0);
			return $r;
		}(this)) != -1;
	}
	,register: function(key,element) {
		if(!this._map.exists(key)) {
			var value = element;
			this._map.set(key,value);
			this._dispatcher.dispatch(hex_collection_LocatorMessage.REGISTER,[key,element]);
			return true;
		} else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("register fails, key is already registered.",{ fileName : "CoreFactory.hx", lineNumber : 125, className : "hex.ioc.core.CoreFactory", methodName : "register"}));
	}
	,unregisterWithKey: function(key) {
		if(this._map.exists(key)) {
			var instance = this._map.get(key);
			this._map.remove(key);
			this._dispatcher.dispatch(hex_collection_LocatorMessage.UNREGISTER,[key]);
			return true;
		} else return false;
	}
	,unregister: function(instance) {
		var key = this.getKeyOfInstance(instance);
		if(key != null) return this.unregisterWithKey(key); else return false;
	}
	,getKeyOfInstance: function(instance) {
		var iterator = this._map.keys();
		while(iterator.hasNext()) {
			var key = iterator.next();
			if(this._map.get(key) == instance) return key;
		}
		return null;
	}
	,add: function(map) {
		var iterator = map.keys();
		while(iterator.hasNext()) {
			var key = iterator.next();
			try {
				this.register(key,__map_reserved[key] != null?map.getReserved(key):map.h[key]);
			} catch( e ) {
				if (e instanceof js__$Boot_HaxeError) e = e.val;
				if( js_Boot.__instanceof(e,hex_error_IllegalArgumentException) ) {
					e.message = "add() fails. " + e.message;
					throw new js__$Boot_HaxeError(e);
				} else throw(e);
			}
		}
	}
	,buildInstance: function(constructorVO) {
		var qualifiedClassName = constructorVO.type;
		var args = constructorVO["arguments"];
		var factoryMethod = constructorVO.factory;
		var singletonAccess = constructorVO.singleton;
		var staticRef = constructorVO.staticRef;
		var injectorCreation = constructorVO.injectorCreation;
		var classReference = null;
		var classFactory = null;
		if(this._classPaths.exists(qualifiedClassName)) classFactory = this._classPaths.get(qualifiedClassName); else try {
			classReference = hex_util_ClassUtil.getClassReference(qualifiedClassName);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			if( js_Boot.__instanceof(e,hex_error_IllegalArgumentException) ) {
				throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("'" + qualifiedClassName + "' class is not available in current domain",{ fileName : "CoreFactory.hx", lineNumber : 208, className : "hex.ioc.core.CoreFactory", methodName : "buildInstance"}));
			} else throw(e);
		}
		var obj = null;
		if(injectorCreation) obj = this._injector.instantiateUnmapped(classReference); else if(factoryMethod != null) {
			if(staticRef != null) {
				var staticReference = Reflect.field(classReference,staticRef);
				if(staticReference != null) {
					var methodReference = Reflect.field(staticReference,factoryMethod);
					if(methodReference != null) obj = methodReference.apply(staticReference,args); else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException(qualifiedClassName + "." + staticReference + "." + factoryMethod + "()' factory method call failed.",{ fileName : "CoreFactory.hx", lineNumber : 237, className : "hex.ioc.core.CoreFactory", methodName : "buildInstance"}));
				} else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException(qualifiedClassName + "." + staticReference + "' is not available.",{ fileName : "CoreFactory.hx", lineNumber : 243, className : "hex.ioc.core.CoreFactory", methodName : "buildInstance"}));
			} else if(singletonAccess != null) {
				var inst = null;
				var singletonCall = Reflect.field(classReference,singletonAccess);
				if(singletonCall != null) inst = singletonCall(); else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException(qualifiedClassName + "." + singletonAccess + "()' singleton access failed.",{ fileName : "CoreFactory.hx", lineNumber : 259, className : "hex.ioc.core.CoreFactory", methodName : "buildInstance"}));
				var methodReference1 = Reflect.field(inst,factoryMethod);
				if(methodReference1 != null) obj = Reflect.callMethod(inst,methodReference1,args); else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException(qualifiedClassName + "." + singletonAccess + "()." + factoryMethod + "()' factory method call failed.",{ fileName : "CoreFactory.hx", lineNumber : 269, className : "hex.ioc.core.CoreFactory", methodName : "buildInstance"}));
			} else {
				var methodReference2 = Reflect.field(classReference,factoryMethod);
				if(methodReference2 != null) obj = Reflect.callMethod(classReference,methodReference2,args); else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException(qualifiedClassName + "." + factoryMethod + "()' factory method call failed.",{ fileName : "CoreFactory.hx", lineNumber : 282, className : "hex.ioc.core.CoreFactory", methodName : "buildInstance"}));
			}
		} else if(singletonAccess != null) {
			var singletonCall1 = Reflect.field(classReference,singletonAccess);
			if(singletonCall1 != null) obj = singletonCall1(); else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException(qualifiedClassName + "." + singletonAccess + "()' singleton call failed.",{ fileName : "CoreFactory.hx", lineNumber : 296, className : "hex.ioc.core.CoreFactory", methodName : "buildInstance"}));
		} else {
			if(args == null) args = [];
			if(classReference != null) try {
				obj = Type.createInstance(classReference,args);
			} catch( e1 ) {
				if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
				throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("Instantiation of class '" + qualifiedClassName + "' failed with arguments: " + Std.string(args) + " : " + Std.string(e1),{ fileName : "CoreFactory.hx", lineNumber : 314, className : "hex.ioc.core.CoreFactory", methodName : "buildInstance"}));
			} else try {
				obj = Reflect.callMethod(classFactory.scope,classFactory.factoryMethod,args);
			} catch( e2 ) {
				if (e2 instanceof js__$Boot_HaxeError) e2 = e2.val;
				throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("Instantiation of class '" + qualifiedClassName + "' failed with class factory and arguments: " + Std.string(args) + " : " + Std.string(e2),{ fileName : "CoreFactory.hx", lineNumber : 326, className : "hex.ioc.core.CoreFactory", methodName : "buildInstance"}));
			}
			if(js_Boot.__instanceof(obj,hex_core_IAnnotationParsable)) this._annotationProvider.parse(obj);
			if(js_Boot.__instanceof(obj,hex_service_IService)) obj.createConfiguration();
		}
		return obj;
	}
	,clear: function() {
		this._map = new haxe_ds_StringMap();
		this._classPaths = new haxe_ds_StringMap();
	}
	,getInjector: function() {
		return this._injector;
	}
	,addProxyFactoryMethod: function(classPath,scope,factoryMethod) {
		if(!this._classPaths.exists(classPath)) this._classPaths.set(classPath,{ scope : scope, factoryMethod : factoryMethod}); else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("registerClassPath(" + classPath + ", " + Std.string(factoryMethod) + ") fails, classPath is already registered.",{ fileName : "CoreFactory.hx", lineNumber : 364, className : "hex.ioc.core.CoreFactory", methodName : "addProxyFactoryMethod"}));
	}
	,removeProxyFactoryMethod: function(classPath) {
		if(this._classPaths.exists(classPath)) {
			this._classPaths.remove(classPath);
			return true;
		} else return false;
	}
	,hasProxyFactoryMethod: function(className) {
		return this._classPaths.exists(className);
	}
	,fastEvalFromTarget: function(target,toEval) {
		return hex_ioc_core_CoreFactory._fastEvalMethod(target,toEval,this);
	}
	,__class__: hex_ioc_core_CoreFactory
};
var hex_ioc_core_IDExpert = function() {
	this._map = new haxe_ds_StringMap();
};
$hxClasses["hex.ioc.core.IDExpert"] = hex_ioc_core_IDExpert;
hex_ioc_core_IDExpert.__name__ = ["hex","ioc","core","IDExpert"];
hex_ioc_core_IDExpert.prototype = {
	isRegistered: function(id) {
		return this._map.exists(id);
	}
	,clear: function() {
		this._map = new haxe_ds_StringMap();
	}
	,register: function(id) {
		if(this._map.exists(id)) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException(Std.string(this) + ".register(" + id + ") failed. This id was already registered, check conflicts in your config file.",{ fileName : "IDExpert.hx", lineNumber : 32, className : "hex.ioc.core.IDExpert", methodName : "register"})); else {
			this._map.set(id,true);
			return true;
		}
		return false;
	}
	,unregister: function(id) {
		if(this.isRegistered(id)) {
			this._map.remove(id);
			return true;
		} else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException(Std.string(this) + ".unregister(" + id + ") failed.",{ fileName : "IDExpert.hx", lineNumber : 52, className : "hex.ioc.core.IDExpert", methodName : "unregister"}));
		return false;
	}
	,__class__: hex_ioc_core_IDExpert
};
var hex_ioc_di_ContextOwnerWrapper = function(coreFactory,id) {
	this._coreFactory = coreFactory;
	this._id = id;
};
$hxClasses["hex.ioc.di.ContextOwnerWrapper"] = hex_ioc_di_ContextOwnerWrapper;
hex_ioc_di_ContextOwnerWrapper.__name__ = ["hex","ioc","di","ContextOwnerWrapper"];
hex_ioc_di_ContextOwnerWrapper.__interfaces__ = [hex_di_IContextOwner];
hex_ioc_di_ContextOwnerWrapper.prototype = {
	getInjector: function() {
		return this._coreFactory.locate(this._id).getInjector();
	}
	,__class__: hex_ioc_di_ContextOwnerWrapper
};
var hex_ioc_di_MappingConfiguration = function() {
	this._mapping = new hex_collection_HashMap();
	hex_collection_Locator.call(this);
};
$hxClasses["hex.ioc.di.MappingConfiguration"] = hex_ioc_di_MappingConfiguration;
hex_ioc_di_MappingConfiguration.__name__ = ["hex","ioc","di","MappingConfiguration"];
hex_ioc_di_MappingConfiguration.__interfaces__ = [hex_config_stateful_IStatefulConfig];
hex_ioc_di_MappingConfiguration.__super__ = hex_collection_Locator;
hex_ioc_di_MappingConfiguration.prototype = $extend(hex_collection_Locator.prototype,{
	configure: function(injector,dispatcher,module) {
		var keys = this.keys();
		var _g = 0;
		while(_g < keys.length) {
			var className = keys[_g];
			++_g;
			var separatorIndex = className.indexOf("#");
			var classKey;
			if(separatorIndex != -1) classKey = Type.resolveClass(HxOverrides.substr(className,separatorIndex + 1,null)); else classKey = Type.resolveClass(className);
			var helper = this.locate(className);
			var mapped = helper.value;
			if(js_Boot.__instanceof(mapped,Class)) {
				if(helper.isSingleton) injector.mapToSingleton(classKey,mapped,helper.mapName); else injector.mapToType(classKey,mapped,helper.mapName);
			} else {
				if(js_Boot.__instanceof(mapped,hex_service_stateful_IStatefulService)) {
					var serviceDispatcher = mapped.getDispatcher();
					if(serviceDispatcher != null) serviceDispatcher.add(dispatcher);
				}
				if(helper.injectInto) injector.injectInto(mapped);
				injector.mapToValue(classKey,mapped,helper.mapName);
			}
			this._mapping.put(classKey,mapped);
		}
	}
	,addMapping: function(type,value,mapName,asSingleton,injectInto) {
		if(injectInto == null) injectInto = false;
		if(asSingleton == null) asSingleton = false;
		if(mapName == null) mapName = "";
		return this._registerMapping(type,new hex_ioc_di__$MappingConfiguration_Helper(value,mapName,asSingleton,injectInto),mapName);
	}
	,getMapping: function() {
		return this._mapping;
	}
	,_registerMapping: function(type,helper,mapName) {
		if(mapName == null) mapName = "";
		var className;
		className = (mapName != ""?mapName + "#":"") + Type.getClassName(type);
		return this.register(className,helper);
	}
	,_dispatchRegisterEvent: function(key,element) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.REGISTER,[key,element]);
	}
	,_dispatchUnregisterEvent: function(key) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.UNREGISTER,[key]);
	}
	,__class__: hex_ioc_di_MappingConfiguration
});
var hex_ioc_di__$MappingConfiguration_Helper = function(value,mapName,isSingleton,injectInto) {
	this.value = value;
	this.mapName = mapName;
	this.isSingleton = isSingleton;
	this.injectInto = injectInto;
};
$hxClasses["hex.ioc.di._MappingConfiguration.Helper"] = hex_ioc_di__$MappingConfiguration_Helper;
hex_ioc_di__$MappingConfiguration_Helper.__name__ = ["hex","ioc","di","_MappingConfiguration","Helper"];
hex_ioc_di__$MappingConfiguration_Helper.prototype = {
	toString: function() {
		return "Helper( value:" + Std.string(this.value) + ", mapName:" + this.mapName + ", isSingleton:" + Std.string(this.isSingleton) + ", injectInto:" + Std.string(this.injectInto) + " )";
	}
	,__class__: hex_ioc_di__$MappingConfiguration_Helper
};
var hex_ioc_error_BuildingException = function(message,posInfos) {
	hex_error_Exception.call(this,message,posInfos);
};
$hxClasses["hex.ioc.error.BuildingException"] = hex_ioc_error_BuildingException;
hex_ioc_error_BuildingException.__name__ = ["hex","ioc","error","BuildingException"];
hex_ioc_error_BuildingException.__super__ = hex_error_Exception;
hex_ioc_error_BuildingException.prototype = $extend(hex_error_Exception.prototype,{
	__class__: hex_ioc_error_BuildingException
});
var hex_ioc_error_ParsingException = function(message,posInfos) {
	hex_error_Exception.call(this,message,posInfos);
};
$hxClasses["hex.ioc.error.ParsingException"] = hex_ioc_error_ParsingException;
hex_ioc_error_ParsingException.__name__ = ["hex","ioc","error","ParsingException"];
hex_ioc_error_ParsingException.__super__ = hex_error_Exception;
hex_ioc_error_ParsingException.prototype = $extend(hex_error_Exception.prototype,{
	__class__: hex_ioc_error_ParsingException
});
var hex_ioc_locator_ConstructorVOLocator = function() {
	hex_collection_Locator.call(this);
};
$hxClasses["hex.ioc.locator.ConstructorVOLocator"] = hex_ioc_locator_ConstructorVOLocator;
hex_ioc_locator_ConstructorVOLocator.__name__ = ["hex","ioc","locator","ConstructorVOLocator"];
hex_ioc_locator_ConstructorVOLocator.__super__ = hex_collection_Locator;
hex_ioc_locator_ConstructorVOLocator.prototype = $extend(hex_collection_Locator.prototype,{
	_dispatchRegisterEvent: function(key,element) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.REGISTER,[key,element]);
	}
	,_dispatchUnregisterEvent: function(key) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.UNREGISTER,[key]);
	}
	,__class__: hex_ioc_locator_ConstructorVOLocator
});
var hex_ioc_locator_DomainListenerVOLocator = function() {
	hex_collection_Locator.call(this);
};
$hxClasses["hex.ioc.locator.DomainListenerVOLocator"] = hex_ioc_locator_DomainListenerVOLocator;
hex_ioc_locator_DomainListenerVOLocator.__name__ = ["hex","ioc","locator","DomainListenerVOLocator"];
hex_ioc_locator_DomainListenerVOLocator.__super__ = hex_collection_Locator;
hex_ioc_locator_DomainListenerVOLocator.prototype = $extend(hex_collection_Locator.prototype,{
	_dispatchRegisterEvent: function(key,element) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.REGISTER,[key,element]);
	}
	,_dispatchUnregisterEvent: function(key) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.UNREGISTER,[key]);
	}
	,__class__: hex_ioc_locator_DomainListenerVOLocator
});
var hex_ioc_locator_MethodCallVOLocator = function() {
	hex_collection_Locator.call(this);
};
$hxClasses["hex.ioc.locator.MethodCallVOLocator"] = hex_ioc_locator_MethodCallVOLocator;
hex_ioc_locator_MethodCallVOLocator.__name__ = ["hex","ioc","locator","MethodCallVOLocator"];
hex_ioc_locator_MethodCallVOLocator.__super__ = hex_collection_Locator;
hex_ioc_locator_MethodCallVOLocator.prototype = $extend(hex_collection_Locator.prototype,{
	_dispatchRegisterEvent: function(key,element) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.REGISTER,[key,element]);
	}
	,_dispatchUnregisterEvent: function(key) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.UNREGISTER,[key]);
	}
	,__class__: hex_ioc_locator_MethodCallVOLocator
});
var hex_ioc_locator_ModuleLocator = function(contextFactory) {
	hex_collection_Locator.call(this);
	this._contextFactory = contextFactory;
};
$hxClasses["hex.ioc.locator.ModuleLocator"] = hex_ioc_locator_ModuleLocator;
hex_ioc_locator_ModuleLocator.__name__ = ["hex","ioc","locator","ModuleLocator"];
hex_ioc_locator_ModuleLocator.__super__ = hex_collection_Locator;
hex_ioc_locator_ModuleLocator.prototype = $extend(hex_collection_Locator.prototype,{
	_dispatchRegisterEvent: function(key,element) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.REGISTER,[key,element]);
	}
	,_dispatchUnregisterEvent: function(key) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.UNREGISTER,[key]);
	}
	,__class__: hex_ioc_locator_ModuleLocator
});
var hex_ioc_locator_PropertyVOLocator = function() {
	hex_collection_Locator.call(this);
};
$hxClasses["hex.ioc.locator.PropertyVOLocator"] = hex_ioc_locator_PropertyVOLocator;
hex_ioc_locator_PropertyVOLocator.__name__ = ["hex","ioc","locator","PropertyVOLocator"];
hex_ioc_locator_PropertyVOLocator.__super__ = hex_collection_Locator;
hex_ioc_locator_PropertyVOLocator.prototype = $extend(hex_collection_Locator.prototype,{
	__class__: hex_ioc_locator_PropertyVOLocator
});
var hex_ioc_locator_StateTransitionVOLocator = function(contextFactory) {
	hex_collection_Locator.call(this);
	this._contextFactory = contextFactory;
};
$hxClasses["hex.ioc.locator.StateTransitionVOLocator"] = hex_ioc_locator_StateTransitionVOLocator;
hex_ioc_locator_StateTransitionVOLocator.__name__ = ["hex","ioc","locator","StateTransitionVOLocator"];
hex_ioc_locator_StateTransitionVOLocator.__super__ = hex_collection_Locator;
hex_ioc_locator_StateTransitionVOLocator.prototype = $extend(hex_collection_Locator.prototype,{
	release: function() {
		hex_state_StateUnmapper.release();
		hex_collection_Locator.prototype.release.call(this);
	}
	,_dispatchRegisterEvent: function(key,element) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.REGISTER,[key,element]);
	}
	,_dispatchUnregisterEvent: function(key) {
		this._dispatcher.dispatch(hex_collection_LocatorMessage.UNREGISTER,[key]);
	}
	,__class__: hex_ioc_locator_StateTransitionVOLocator
});
var hex_ioc_vo_AssemblerVO = function() {
	this.ifNotList = null;
	this.ifList = null;
};
$hxClasses["hex.ioc.vo.AssemblerVO"] = hex_ioc_vo_AssemblerVO;
hex_ioc_vo_AssemblerVO.__name__ = ["hex","ioc","vo","AssemblerVO"];
hex_ioc_vo_AssemblerVO.prototype = {
	__class__: hex_ioc_vo_AssemblerVO
};
var hex_ioc_vo_ConstructorVO = function(id,type,args,factory,singleton,injectInto,ref,mapTypes,staticRef,injectorCreation) {
	if(injectInto == null) injectInto = false;
	hex_ioc_vo_AssemblerVO.call(this);
	this.ID = id;
	this.type = type;
	this["arguments"] = args;
	this.factory = factory;
	this.singleton = singleton;
	this.injectInto = injectInto;
	this.ref = ref;
	this.mapTypes = mapTypes;
	this.staticRef = staticRef;
	this.injectorCreation = injectorCreation;
};
$hxClasses["hex.ioc.vo.ConstructorVO"] = hex_ioc_vo_ConstructorVO;
hex_ioc_vo_ConstructorVO.__name__ = ["hex","ioc","vo","ConstructorVO"];
hex_ioc_vo_ConstructorVO.__super__ = hex_ioc_vo_AssemblerVO;
hex_ioc_vo_ConstructorVO.prototype = $extend(hex_ioc_vo_AssemblerVO.prototype,{
	toString: function() {
		return "(" + "id:" + this.ID + ", " + "type:" + this.type + ", " + "arguments:[" + Std.string(this["arguments"]) + "], " + "factory:" + this.factory + ", " + "singleton:" + this.singleton + ", " + "injectInto:" + Std.string(this.injectInto) + ", " + "ref:" + this.ref + ", " + "mapTypes:" + Std.string(this.mapTypes) + ", " + "staticRef:" + this.staticRef + ")" + "injectorCreation:" + Std.string(this.injectorCreation) + ")";
	}
	,__class__: hex_ioc_vo_ConstructorVO
});
var hex_ioc_vo_DomainListenerVO = function(ownerID,listenedDomainName,$arguments) {
	hex_ioc_vo_AssemblerVO.call(this);
	this.ownerID = ownerID;
	this.listenedDomainName = listenedDomainName;
	this["arguments"] = $arguments;
};
$hxClasses["hex.ioc.vo.DomainListenerVO"] = hex_ioc_vo_DomainListenerVO;
hex_ioc_vo_DomainListenerVO.__name__ = ["hex","ioc","vo","DomainListenerVO"];
hex_ioc_vo_DomainListenerVO.__super__ = hex_ioc_vo_AssemblerVO;
hex_ioc_vo_DomainListenerVO.prototype = $extend(hex_ioc_vo_AssemblerVO.prototype,{
	__class__: hex_ioc_vo_DomainListenerVO
});
var hex_ioc_vo_DomainListenerVOArguments = function(staticRef,method,strategy,injectedInModule) {
	if(injectedInModule == null) injectedInModule = false;
	this.injectedInModule = false;
	this.staticRef = staticRef;
	this.method = method;
	this.strategy = strategy;
	this.injectedInModule = injectedInModule;
};
$hxClasses["hex.ioc.vo.DomainListenerVOArguments"] = hex_ioc_vo_DomainListenerVOArguments;
hex_ioc_vo_DomainListenerVOArguments.__name__ = ["hex","ioc","vo","DomainListenerVOArguments"];
hex_ioc_vo_DomainListenerVOArguments.prototype = {
	__class__: hex_ioc_vo_DomainListenerVOArguments
};
var hex_ioc_vo_FactoryVO = function() {
};
$hxClasses["hex.ioc.vo.FactoryVO"] = hex_ioc_vo_FactoryVO;
hex_ioc_vo_FactoryVO.__name__ = ["hex","ioc","vo","FactoryVO"];
hex_ioc_vo_FactoryVO.prototype = {
	__class__: hex_ioc_vo_FactoryVO
};
var hex_ioc_vo_MapVO = function(key,value,mapName,asSingleton,injectInto) {
	if(injectInto == null) injectInto = false;
	if(asSingleton == null) asSingleton = false;
	this.injectInto = false;
	this.asSingleton = false;
	this._key = key;
	this._value = value;
	this.mapName = mapName;
	this.asSingleton = asSingleton;
	this.injectInto = injectInto;
};
$hxClasses["hex.ioc.vo.MapVO"] = hex_ioc_vo_MapVO;
hex_ioc_vo_MapVO.__name__ = ["hex","ioc","vo","MapVO"];
hex_ioc_vo_MapVO.prototype = {
	getPropertyKey: function() {
		return this._key;
	}
	,getPropertyValue: function() {
		return this._value;
	}
	,__class__: hex_ioc_vo_MapVO
};
var hex_ioc_vo_MethodCallVO = function(ownerID,name,args) {
	hex_ioc_vo_AssemblerVO.call(this);
	this.ownerID = ownerID;
	this.name = name;
	this["arguments"] = args;
};
$hxClasses["hex.ioc.vo.MethodCallVO"] = hex_ioc_vo_MethodCallVO;
hex_ioc_vo_MethodCallVO.__name__ = ["hex","ioc","vo","MethodCallVO"];
hex_ioc_vo_MethodCallVO.__super__ = hex_ioc_vo_AssemblerVO;
hex_ioc_vo_MethodCallVO.prototype = $extend(hex_ioc_vo_AssemblerVO.prototype,{
	__class__: hex_ioc_vo_MethodCallVO
});
var hex_ioc_vo_PropertyVO = function(ownerID,name,value,type,ref,method,staticRef) {
	hex_ioc_vo_AssemblerVO.call(this);
	this.ownerID = ownerID;
	this.name = name;
	this.value = value;
	this.type = type;
	this.ref = ref;
	this.method = method;
	this.staticRef = staticRef;
};
$hxClasses["hex.ioc.vo.PropertyVO"] = hex_ioc_vo_PropertyVO;
hex_ioc_vo_PropertyVO.__name__ = ["hex","ioc","vo","PropertyVO"];
hex_ioc_vo_PropertyVO.__super__ = hex_ioc_vo_AssemblerVO;
hex_ioc_vo_PropertyVO.prototype = $extend(hex_ioc_vo_AssemblerVO.prototype,{
	__class__: hex_ioc_vo_PropertyVO
});
var hex_ioc_vo_StateTransitionVO = function(ID,staticReference,instanceReference,enterList,exitList) {
	hex_ioc_vo_AssemblerVO.call(this);
	this.ID = ID;
	this.staticReference = staticReference;
	this.instanceReference = instanceReference;
	this.enterList = enterList;
	this.exitList = exitList;
};
$hxClasses["hex.ioc.vo.StateTransitionVO"] = hex_ioc_vo_StateTransitionVO;
hex_ioc_vo_StateTransitionVO.__name__ = ["hex","ioc","vo","StateTransitionVO"];
hex_ioc_vo_StateTransitionVO.__super__ = hex_ioc_vo_AssemblerVO;
hex_ioc_vo_StateTransitionVO.prototype = $extend(hex_ioc_vo_AssemblerVO.prototype,{
	__class__: hex_ioc_vo_StateTransitionVO
});
var hex_log_ILogger = function() { };
$hxClasses["hex.log.ILogger"] = hex_log_ILogger;
hex_log_ILogger.__name__ = ["hex","log","ILogger"];
hex_log_ILogger.prototype = {
	__class__: hex_log_ILogger
};
var hex_log_DomainLogger = function(domain) {
	if(domain == null) throw new js__$Boot_HaxeError(new hex_error_NullPointerException("Domain should be specified for contructor call",{ fileName : "DomainLogger.hx", lineNumber : 21, className : "hex.log.DomainLogger", methodName : "new"}));
	this._domain = domain;
	this._logger = hex_log_Logger.getInstance();
};
$hxClasses["hex.log.DomainLogger"] = hex_log_DomainLogger;
hex_log_DomainLogger.__name__ = ["hex","log","DomainLogger"];
hex_log_DomainLogger.__interfaces__ = [hex_log_ILogger];
hex_log_DomainLogger.prototype = {
	clear: function() {
		this._logger.clear();
	}
	,debug: function(o,posInfos) {
		this._logger.log(o,hex_log_LogLevel._DEBUG,this._domain,posInfos);
	}
	,info: function(o,posInfos) {
		this._logger.log(o,hex_log_LogLevel._INFO,this._domain,posInfos);
	}
	,warn: function(o,posInfos) {
		this._logger.log(o,hex_log_LogLevel._WARN,this._domain,posInfos);
	}
	,error: function(o,posInfos) {
		this._logger.log(o,hex_log_LogLevel._ERROR,this._domain,posInfos);
	}
	,fatal: function(o,posInfos) {
		this._logger.log(o,hex_log_LogLevel._FATAL,this._domain,posInfos);
	}
	,getDomain: function() {
		return this._domain;
	}
	,__class__: hex_log_DomainLogger
};
var hex_log_ILogListener = function() { };
$hxClasses["hex.log.ILogListener"] = hex_log_ILogListener;
hex_log_ILogListener.__name__ = ["hex","log","ILogListener"];
hex_log_ILogListener.prototype = {
	__class__: hex_log_ILogListener
};
var hex_log_LoggerMessage = function(message,level,domain,posInfos) {
	this.message = message;
	this.level = level;
	this.domain = domain;
	this.posInfos = posInfos;
};
$hxClasses["hex.log.LoggerMessage"] = hex_log_LoggerMessage;
hex_log_LoggerMessage.__name__ = ["hex","log","LoggerMessage"];
hex_log_LoggerMessage.prototype = {
	__class__: hex_log_LoggerMessage
};
var hex_log_layout_JavaScriptConsoleLayout = function() {
};
$hxClasses["hex.log.layout.JavaScriptConsoleLayout"] = hex_log_layout_JavaScriptConsoleLayout;
hex_log_layout_JavaScriptConsoleLayout.__name__ = ["hex","log","layout","JavaScriptConsoleLayout"];
hex_log_layout_JavaScriptConsoleLayout.__interfaces__ = [hex_log_ILogListener];
hex_log_layout_JavaScriptConsoleLayout.prototype = {
	onLog: function(message) {
		var posInfos = message.posInfos;
		var info;
		if(posInfos != null) info = " at " + posInfos.className + "::" + posInfos.methodName + " line " + posInfos.lineNumber + " in file " + posInfos.fileName; else info = "";
		var m;
		if(message.level.get_value() == hex_log_LogLevel._DEBUG.get_value()) m = ($_=window.console,$bind($_,$_.debug)); else if(message.level.get_value() == hex_log_LogLevel._INFO.get_value()) m = ($_=window.console,$bind($_,$_.info)); else if(message.level.get_value() == hex_log_LogLevel._WARN.get_value()) m = ($_=window.console,$bind($_,$_.warn)); else if(message.level.get_value() == hex_log_LogLevel._FATAL.get_value() || message.level.get_value() == hex_log_LogLevel._ERROR.get_value()) m = ($_=window.console,$bind($_,$_.error)); else m = ($_=window.console,$bind($_,$_.log));
		m(message.message,"[" + message.domain.getName() + "]" + info);
	}
	,onClear: function() {
		window.console.clear();
	}
	,__class__: hex_log_layout_JavaScriptConsoleLayout
};
var hex_log_layout_LogProxyLayout = function() {
	this._searchedWord = "";
	this._dispatcher = new hex_log_layout_LogProxyLayoutDispatcher();
	this._messages = [];
	this._filteredLevel = hex_log_LogLevel._ALL;
	this._filteredDomain = hex_log_layout_AllDomain.DOMAIN;
	hex_log_Logger.getInstance().addListener(this);
};
$hxClasses["hex.log.layout.LogProxyLayout"] = hex_log_layout_LogProxyLayout;
hex_log_layout_LogProxyLayout.__name__ = ["hex","log","layout","LogProxyLayout"];
hex_log_layout_LogProxyLayout.__interfaces__ = [hex_log_ILogListener];
hex_log_layout_LogProxyLayout.prototype = {
	onClear: function() {
		this._dispatcher.onClear();
	}
	,onLog: function(message) {
		this._messages.push(message);
		if((this._filteredDomain == hex_log_layout_AllDomain.DOMAIN || this._filteredDomain == message.domain) && (this._filteredLevel == hex_log_LogLevel._ALL || this._filteredLevel == message.level)) this._dispatcher.onLog(message);
	}
	,addListener: function(listener) {
		return this._dispatcher.addListener(listener);
	}
	,removeListener: function(listener) {
		return this._dispatcher.removeListener(listener);
	}
	,filter: function(level,domain) {
		if(level == null) this._filteredLevel = hex_log_LogLevel._ALL; else this._filteredLevel = level;
		if(domain == null) this._filteredDomain = hex_log_layout_AllDomain.DOMAIN; else this._filteredDomain = domain;
		this._dispatcher.onClear();
		this._render();
	}
	,searchFor: function(word,leftSearchSeparator,rightSearchSeparator) {
		if(word == null) word = "";
		this._searchedWord = word;
		this._leftSearchSeparator = leftSearchSeparator;
		this._rightSearchSeparator = rightSearchSeparator;
		this._dispatcher.onClear();
		return this._render();
	}
	,_render: function() {
		var searchLength = 0;
		var _g = 0;
		var _g1 = this._messages;
		while(_g < _g1.length) {
			var message = _g1[_g];
			++_g;
			if((this._filteredDomain == hex_log_layout_AllDomain.DOMAIN || this._filteredDomain == message.domain) && (this._filteredLevel == hex_log_LogLevel._ALL || this._filteredLevel == message.level)) {
				var messageContent = "" + Std.string(message.message);
				if(this._searchedWord.length > 0 && messageContent.indexOf(this._searchedWord) != -1) {
					messageContent = messageContent.split(this._searchedWord).join(this._getLeftSeparator(searchLength,this._leftSearchSeparator) + this._searchedWord + this._rightSearchSeparator);
					searchLength++;
				}
				this._dispatcher.onLog(new hex_log_LoggerMessage(messageContent,message.level,message.domain,message.posInfos));
			}
		}
		return searchLength;
	}
	,_getLeftSeparator: function(index,separator) {
		return separator.split(">").join(" id='searchedWord" + index) + "'>";
	}
	,__class__: hex_log_layout_LogProxyLayout
};
var hex_log_layout_AllDomain = function(domainName) {
	hex_domain_Domain.call(this,domainName);
};
$hxClasses["hex.log.layout.AllDomain"] = hex_log_layout_AllDomain;
hex_log_layout_AllDomain.__name__ = ["hex","log","layout","AllDomain"];
hex_log_layout_AllDomain.__super__ = hex_domain_Domain;
hex_log_layout_AllDomain.prototype = $extend(hex_domain_Domain.prototype,{
	__class__: hex_log_layout_AllDomain
});
var hex_model_ModelDispatcher = function() {
	this._listeners = [];
};
$hxClasses["hex.model.ModelDispatcher"] = hex_model_ModelDispatcher;
hex_model_ModelDispatcher.__name__ = ["hex","model","ModelDispatcher"];
hex_model_ModelDispatcher.prototype = {
	addListener: function(listener) {
		if(HxOverrides.indexOf(this._listeners,listener,0) == -1) {
			this._listeners.push(listener);
			return true;
		} else return false;
	}
	,removeListener: function(listener) {
		var index = HxOverrides.indexOf(this._listeners,listener,0);
		if(index > -1) {
			this._listeners.splice(index,1);
			return true;
		} else return false;
	}
	,__class__: hex_model_ModelDispatcher
};
var hex_log_layout_LogProxyLayoutDispatcher = function() {
	hex_model_ModelDispatcher.call(this);
};
$hxClasses["hex.log.layout.LogProxyLayoutDispatcher"] = hex_log_layout_LogProxyLayoutDispatcher;
hex_log_layout_LogProxyLayoutDispatcher.__name__ = ["hex","log","layout","LogProxyLayoutDispatcher"];
hex_log_layout_LogProxyLayoutDispatcher.__interfaces__ = [hex_log_ILogListener];
hex_log_layout_LogProxyLayoutDispatcher.__super__ = hex_model_ModelDispatcher;
hex_log_layout_LogProxyLayoutDispatcher.prototype = $extend(hex_model_ModelDispatcher.prototype,{
	onClear: function() {
		var _g = 0;
		var _g1 = this._listeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener.onClear();
		}
	}
	,onLog: function(message) {
		var _g = 0;
		var _g1 = this._listeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener.onLog(message);
		}
	}
	,__class__: hex_log_layout_LogProxyLayoutDispatcher
});
var hex_metadata_IAnnotationProvider = function() { };
$hxClasses["hex.metadata.IAnnotationProvider"] = hex_metadata_IAnnotationProvider;
hex_metadata_IAnnotationProvider.__name__ = ["hex","metadata","IAnnotationProvider"];
hex_metadata_IAnnotationProvider.prototype = {
	__class__: hex_metadata_IAnnotationProvider
};
var hex_metadata_AnnotationProvider = function(domain,parent) {
	this._domain = domain;
	this._parent = parent;
	this._cache = new hex_collection_HashMap();
	this._metadata = new haxe_ds_StringMap();
	this._instances = new haxe_ds_StringMap();
};
$hxClasses["hex.metadata.AnnotationProvider"] = hex_metadata_AnnotationProvider;
hex_metadata_AnnotationProvider.__name__ = ["hex","metadata","AnnotationProvider"];
hex_metadata_AnnotationProvider.__interfaces__ = [hex_metadata_IAnnotationProvider];
hex_metadata_AnnotationProvider.release = function() {
	hex_metadata_AnnotationProvider._initialized = false;
	hex_metadata_AnnotationProvider._Domains = new haxe_ds_ObjectMap();
	hex_metadata_AnnotationProvider._Parents = new haxe_ds_ObjectMap();
};
hex_metadata_AnnotationProvider.getAnnotationProvider = function(domain,parentDomain) {
	if(!hex_metadata_AnnotationProvider._initialized) {
		hex_metadata_AnnotationProvider._initialized = true;
		var provider = new hex_metadata_AnnotationProvider(hex_domain_TopLevelDomain.DOMAIN,null);
		hex_metadata_AnnotationProvider._Domains.set(hex_domain_TopLevelDomain.DOMAIN,provider);
	}
	if(domain == null) domain = hex_domain_TopLevelDomain.DOMAIN;
	if(parentDomain == null && domain != hex_domain_TopLevelDomain.DOMAIN) {
		if(!(hex_metadata_AnnotationProvider._Parents.h.__keys__[domain.__id__] != null)) parentDomain = hex_domain_TopLevelDomain.DOMAIN; else parentDomain = hex_metadata_AnnotationProvider._Parents.h[domain.__id__];
	}
	if(!(hex_metadata_AnnotationProvider._Domains.h.__keys__[domain.__id__] != null)) {
		var value = new hex_metadata_AnnotationProvider(domain,hex_metadata_AnnotationProvider._Domains.h[parentDomain.__id__]);
		hex_metadata_AnnotationProvider._Domains.set(domain,value);
	}
	return hex_metadata_AnnotationProvider._Domains.h[domain.__id__];
};
hex_metadata_AnnotationProvider.registerToParentDomain = function(domain,parentDomain) {
	if(!(hex_metadata_AnnotationProvider._Parents.h.__keys__[domain.__id__] != null)) hex_metadata_AnnotationProvider._Parents.set(domain,parentDomain); else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException("'" + domain.getName() + "' cannot be registered to '" + parentDomain.getName() + "' parent domain, it's already registered to '" + hex_metadata_AnnotationProvider._Parents.h[domain.__id__].getName() + "' parent domain",{ fileName : "AnnotationProvider.hx", lineNumber : 88, className : "hex.metadata.AnnotationProvider", methodName : "registerToParentDomain"}));
};
hex_metadata_AnnotationProvider._unregisterInstances = function(metaDataName,provider) {
	provider._instances.remove(metaDataName);
	if(provider._parent != null) hex_metadata_AnnotationProvider._unregisterInstances(metaDataName,provider._parent);
};
hex_metadata_AnnotationProvider.prototype = {
	registerMetaData: function(metaDataName,providerMethod) {
		if(!this._metadata.exists(metaDataName)) {
			this._metadata.set(metaDataName,providerMethod);
			var voCollection = this._instances.get(metaDataName);
			if(voCollection != null) {
				var _g = 0;
				while(_g < voCollection.length) {
					var vo = voCollection[_g];
					++_g;
					if(vo.metaDataName == metaDataName) Reflect.setProperty(vo.owner,vo.propertyName,providerMethod(vo.metaDataValue));
				}
			}
			if(this._parent != null) hex_metadata_AnnotationProvider._unregisterInstances(metaDataName,this._parent);
		} else throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("registerMetaData failed. '" + metaDataName + "' is already registered in '" + hex_log_Stringifier.stringify(this) + "'",{ fileName : "AnnotationProvider.hx", lineNumber : 121, className : "hex.metadata.AnnotationProvider", methodName : "registerMetaData"}));
	}
	,clear: function() {
		this._cache = new hex_collection_HashMap();
		this._metadata = new haxe_ds_StringMap();
		this._instances = new haxe_ds_StringMap();
	}
	,_do: function(instance,property) {
		var metaDataName = property.metaDataName;
		if(this._metadata.exists(metaDataName)) {
			var providerMethod = this._metadata.get(metaDataName);
			Reflect.setProperty(instance,property.propertyName,providerMethod(property.metaDataValue));
		} else {
			var instanceVO = new hex_metadata__$AnnotationProvider_InstanceVO(instance,property.propertyName,property.metaDataName,property.metaDataValue);
			if(this._instances.exists(metaDataName)) this._instances.get(metaDataName).push(instanceVO); else this._instances.set(metaDataName,[instanceVO]);
			if(this._parent != null) this._parent._do(instance,property);
		}
	}
	,parse: function(instance) {
		var classMetaDataVO = this._parse(instance);
		if(classMetaDataVO != null) {
			var properties = classMetaDataVO.properties;
			var _g = 0;
			while(_g < properties.length) {
				var property = properties[_g];
				++_g;
				this._do(instance,property);
			}
		}
	}
	,_parse: function(object) {
		var classMetaDataVO = null;
		var classReference;
		if(object == null) classReference = null; else classReference = js_Boot.getClass(object);
		if(classReference != null) {
			if(this._cache.containsKey(classReference)) classMetaDataVO = this._cache.get(classReference); else {
				classMetaDataVO = new hex_metadata__$AnnotationProvider_ClassMetaDataVO();
				var properties = classMetaDataVO.properties;
				var metadata = haxe_rtti_Meta.getFields(classReference);
				var fields = Reflect.fields(metadata);
				var _g = 0;
				while(_g < fields.length) {
					var propertyName = fields[_g];
					++_g;
					var o = Reflect.field(metadata,propertyName);
					var f = Reflect.fields(o);
					if(f != null) {
						var metaDataName = f[0];
						if(metaDataName != null) {
							var field = Reflect.field(o,metaDataName);
							if(field != null) {
								var metaDataValue = field[0];
								properties.push(new hex_metadata__$AnnotationProvider_PropertyMetaDataVO(propertyName,metaDataName,metaDataValue));
							}
						}
					}
				}
				this._cache.put(classReference,classMetaDataVO);
			}
		}
		return classMetaDataVO;
	}
	,registerInjector: function(injector) {
		injector.addEventListener("onPreConstruct",$bind(this,this._onPostconstruct));
	}
	,unregisterInjector: function(injector) {
		injector.removeEventListener("onPreConstruct",$bind(this,this._onPostconstruct));
	}
	,_onPostconstruct: function(event) {
		if(js_Boot.__instanceof(event.instance,hex_core_IAnnotationParsable)) this.parse(event.instance);
	}
	,__class__: hex_metadata_AnnotationProvider
};
var hex_metadata__$AnnotationProvider_ClassMetaDataVO = function() {
	this.properties = [];
};
$hxClasses["hex.metadata._AnnotationProvider.ClassMetaDataVO"] = hex_metadata__$AnnotationProvider_ClassMetaDataVO;
hex_metadata__$AnnotationProvider_ClassMetaDataVO.__name__ = ["hex","metadata","_AnnotationProvider","ClassMetaDataVO"];
hex_metadata__$AnnotationProvider_ClassMetaDataVO.prototype = {
	__class__: hex_metadata__$AnnotationProvider_ClassMetaDataVO
};
var hex_metadata__$AnnotationProvider_PropertyMetaDataVO = function(propertyName,metaDataName,metaDataValue) {
	this.propertyName = propertyName;
	this.metaDataName = metaDataName;
	this.metaDataValue = metaDataValue;
};
$hxClasses["hex.metadata._AnnotationProvider.PropertyMetaDataVO"] = hex_metadata__$AnnotationProvider_PropertyMetaDataVO;
hex_metadata__$AnnotationProvider_PropertyMetaDataVO.__name__ = ["hex","metadata","_AnnotationProvider","PropertyMetaDataVO"];
hex_metadata__$AnnotationProvider_PropertyMetaDataVO.prototype = {
	__class__: hex_metadata__$AnnotationProvider_PropertyMetaDataVO
};
var hex_metadata__$AnnotationProvider_InstanceVO = function(owner,propertyName,metaDataName,metaDataValue) {
	this.owner = owner;
	this.propertyName = propertyName;
	this.metaDataName = metaDataName;
	this.metaDataValue = metaDataValue;
};
$hxClasses["hex.metadata._AnnotationProvider.InstanceVO"] = hex_metadata__$AnnotationProvider_InstanceVO;
hex_metadata__$AnnotationProvider_InstanceVO.__name__ = ["hex","metadata","_AnnotationProvider","InstanceVO"];
hex_metadata__$AnnotationProvider_InstanceVO.prototype = {
	__class__: hex_metadata__$AnnotationProvider_InstanceVO
};
var hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$BoardModel_$BoardModelDispatcher_$tictactoe_$module_$game_$model_$IBoardModelListener = function() {
	this.dispatcher = new tictactoe_module_game_model__$BoardModel_BoardModelDispatcher();
};
$hxClasses["hex.model.BasicModel_tictactoe_module_game_model__BoardModel_BoardModelDispatcher_tictactoe_module_game_model_IBoardModelListener"] = hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$BoardModel_$BoardModelDispatcher_$tictactoe_$module_$game_$model_$IBoardModelListener;
hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$BoardModel_$BoardModelDispatcher_$tictactoe_$module_$game_$model_$IBoardModelListener.__name__ = ["hex","model","BasicModel_tictactoe_module_game_model__BoardModel_BoardModelDispatcher_tictactoe_module_game_model_IBoardModelListener"];
hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$BoardModel_$BoardModelDispatcher_$tictactoe_$module_$game_$model_$IBoardModelListener.prototype = {
	addListener: function(listener) {
		this.dispatcher.addListener(listener);
	}
	,removeListener: function(listener) {
		this.dispatcher.removeListener(listener);
	}
	,__class__: hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$BoardModel_$BoardModelDispatcher_$tictactoe_$module_$game_$model_$IBoardModelListener
};
var hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$GameModel_$GameModelDispatcher_$tictactoe_$module_$game_$model_$IGameModelListener = function() {
	this.dispatcher = new tictactoe_module_game_model__$GameModel_GameModelDispatcher();
};
$hxClasses["hex.model.BasicModel_tictactoe_module_game_model__GameModel_GameModelDispatcher_tictactoe_module_game_model_IGameModelListener"] = hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$GameModel_$GameModelDispatcher_$tictactoe_$module_$game_$model_$IGameModelListener;
hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$GameModel_$GameModelDispatcher_$tictactoe_$module_$game_$model_$IGameModelListener.__name__ = ["hex","model","BasicModel_tictactoe_module_game_model__GameModel_GameModelDispatcher_tictactoe_module_game_model_IGameModelListener"];
hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$GameModel_$GameModelDispatcher_$tictactoe_$module_$game_$model_$IGameModelListener.prototype = {
	addListener: function(listener) {
		this.dispatcher.addListener(listener);
	}
	,removeListener: function(listener) {
		this.dispatcher.removeListener(listener);
	}
	,__class__: hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$GameModel_$GameModelDispatcher_$tictactoe_$module_$game_$model_$IGameModelListener
};
var hex_model_IModelRO = function() { };
$hxClasses["hex.model.IModelRO"] = hex_model_IModelRO;
hex_model_IModelRO.__name__ = ["hex","model","IModelRO"];
hex_model_IModelRO.prototype = {
	__class__: hex_model_IModelRO
};
var hex_model_IModelRO_$tictactoe_$module_$game_$model_$IBoardModelListener = function() { };
$hxClasses["hex.model.IModelRO_tictactoe_module_game_model_IBoardModelListener"] = hex_model_IModelRO_$tictactoe_$module_$game_$model_$IBoardModelListener;
hex_model_IModelRO_$tictactoe_$module_$game_$model_$IBoardModelListener.__name__ = ["hex","model","IModelRO_tictactoe_module_game_model_IBoardModelListener"];
hex_model_IModelRO_$tictactoe_$module_$game_$model_$IBoardModelListener.prototype = {
	__class__: hex_model_IModelRO_$tictactoe_$module_$game_$model_$IBoardModelListener
};
var hex_model_IModelRO_$tictactoe_$module_$game_$model_$IGameModelListener = function() { };
$hxClasses["hex.model.IModelRO_tictactoe_module_game_model_IGameModelListener"] = hex_model_IModelRO_$tictactoe_$module_$game_$model_$IGameModelListener;
hex_model_IModelRO_$tictactoe_$module_$game_$model_$IGameModelListener.__name__ = ["hex","model","IModelRO_tictactoe_module_game_model_IGameModelListener"];
hex_model_IModelRO_$tictactoe_$module_$game_$model_$IGameModelListener.prototype = {
	__class__: hex_model_IModelRO_$tictactoe_$module_$game_$model_$IGameModelListener
};
var hex_module_IModule = function() { };
$hxClasses["hex.module.IModule"] = hex_module_IModule;
hex_module_IModule.__name__ = ["hex","module","IModule"];
hex_module_IModule.__interfaces__ = [hex_di_IContextOwner];
hex_module_IModule.prototype = {
	__class__: hex_module_IModule
	,__properties__: {get_isReleased:"get_isReleased",get_isInitialized:"get_isInitialized"}
};
var hex_module_Module = function() {
	this._injector = new hex_di_Injector();
	this._injector.mapToValue(hex_di_IBasicInjector,this._injector);
	this._injector.mapToValue(hex_di_IDependencyInjector,this._injector);
	this._domainDispatcher = hex_domain_ApplicationDomainDispatcher.getInstance().getDomainDispatcher(this.getDomain());
	this._annotationProvider = hex_metadata_AnnotationProvider.getAnnotationProvider(this.getDomain());
	this._annotationProvider.registerInjector(this._injector);
	this._internalDispatcher = new hex_event_Dispatcher();
	this._injector.mapToValue(hex_control_IFrontController,new hex_control_FrontController(this._internalDispatcher,this._injector,this));
	this._injector.mapToValue(hex_event_IDispatcher,this._internalDispatcher);
	this._injector.mapToType(hex_control_macro_IMacroExecutor,hex_control_macro_MacroExecutor);
	this._injector.mapToValue(hex_module_IModule,this);
	this._logger = new hex_log_DomainLogger(this.getDomain());
	this._injector.mapToValue(hex_log_ILogger,this._logger);
};
$hxClasses["hex.module.Module"] = hex_module_Module;
hex_module_Module.__name__ = ["hex","module","Module"];
hex_module_Module.__interfaces__ = [hex_module_IModule];
hex_module_Module.prototype = {
	initialize: function() {
		if(!this.get_isInitialized()) {
			this._onInitialisation();
			this._checkRuntimeDependencies(this._getRuntimeDependencies());
			this.isInitialized = true;
			this._fireInitialisationEvent();
		} else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException("initialize can't be called more than once. Check your code.",{ fileName : "Module.hx", lineNumber : 79, className : "hex.module.Module", methodName : "initialize"}));
	}
	,get_isInitialized: function() {
		return this.isInitialized;
	}
	,get_isReleased: function() {
		return this.isReleased;
	}
	,getDomain: function() {
		return hex_domain_DomainExpert.getInstance().getDomainFor(this);
	}
	,dispatchPublicMessage: function(messageType,data) {
		if(this._domainDispatcher != null) this._domainDispatcher.dispatch(messageType,data); else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException("Domain dispatcher is null. Try to use 'Module.registerInternalDomain' before calling super constructor to fix the problem",{ fileName : "Module.hx", lineNumber : 126, className : "hex.module.Module", methodName : "dispatchPublicMessage"}));
	}
	,addHandler: function(messageType,scope,callback) {
		if(this._domainDispatcher != null) this._domainDispatcher.addHandler(messageType,scope,callback); else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException("Domain dispatcher is null. Try to use 'Module.registerInternalDomain' before calling super constructor to fix the problem",{ fileName : "Module.hx", lineNumber : 141, className : "hex.module.Module", methodName : "addHandler"}));
	}
	,removeHandler: function(messageType,scope,callback) {
		if(this._domainDispatcher != null) this._domainDispatcher.removeHandler(messageType,scope,callback); else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException("Domain dispatcher is null. Try to use 'Module.registerInternalDomain' before calling super constructor to fix the problem",{ fileName : "Module.hx", lineNumber : 156, className : "hex.module.Module", methodName : "removeHandler"}));
	}
	,_dispatchPrivateMessage: function(messageType,data) {
		this._internalDispatcher.dispatch(messageType,data);
	}
	,buildViewHelper: function(type,view) {
		return hex_view_viewhelper_ViewHelperManager.getInstance(this).buildViewHelper(this._injector,type,view);
	}
	,release: function() {
		if(!this.get_isReleased()) {
			this.isReleased = true;
			this._onRelease();
			this._fireReleaseEvent();
			hex_view_viewhelper_ViewHelperManager.release(this);
			if(this._domainDispatcher != null) this._domainDispatcher.removeAllListeners();
			this._internalDispatcher.removeAllListeners();
			hex_domain_DomainExpert.getInstance().releaseDomain(this);
			this._annotationProvider.unregisterInjector(this._injector);
			this._injector.destroyInstance(this);
			this._injector.teardown();
			this._logger = null;
		} else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException(Std.string(this) + ".release can't be called more than once. Check your code.",{ fileName : "Module.hx", lineNumber : 200, className : "hex.module.Module", methodName : "release"}));
	}
	,getInjector: function() {
		return this._injector;
	}
	,getLogger: function() {
		return this._logger;
	}
	,_fireInitialisationEvent: function() {
		if(this.get_isInitialized()) this.dispatchPublicMessage(hex_module_ModuleMessage.INITIALIZED,[this]); else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException(Std.string(this) + ".fireModuleInitialisationNote can't be called with previous initialize call.",{ fileName : "Module.hx", lineNumber : 226, className : "hex.module.Module", methodName : "_fireInitialisationEvent"}));
	}
	,_fireReleaseEvent: function() {
		if(this.get_isReleased()) this.dispatchPublicMessage(hex_module_ModuleMessage.RELEASED,[this]); else throw new js__$Boot_HaxeError(new hex_error_IllegalStateException(Std.string(this) + ".fireModuleReleaseNote can't be called with previous release call.",{ fileName : "Module.hx", lineNumber : 242, className : "hex.module.Module", methodName : "_fireReleaseEvent"}));
	}
	,_onInitialisation: function() {
	}
	,_onRelease: function() {
	}
	,_getDependencyInjector: function() {
		return this._injector;
	}
	,_getRuntimeDependencies: function() {
		throw new js__$Boot_HaxeError(new hex_error_VirtualMethodException(hex_log_Stringifier.stringify(this) + ".checkDependencies is not implemented",{ fileName : "Module.hx", lineNumber : 278, className : "hex.module.Module", methodName : "_getRuntimeDependencies"}));
	}
	,_checkRuntimeDependencies: function(dependencies) {
		hex_module_dependency_RuntimeDependencyChecker.check(this,this._injector,dependencies);
	}
	,_addStatelessConfigClasses: function(configurations) {
		var _g = 0;
		while(_g < configurations.length) {
			var configurationClass = configurations[_g];
			++_g;
			var config = this._injector.instantiateUnmapped(configurationClass);
			config.configure();
		}
	}
	,_addStatefulConfigs: function(configurations) {
		var _g = 0;
		while(_g < configurations.length) {
			var configuration = configurations[_g];
			++_g;
			configuration.configure(this._injector,this._internalDispatcher,this);
		}
	}
	,_get: function(type) {
		return this._injector.getInstance(type);
	}
	,__class__: hex_module_Module
	,__properties__: {get_isReleased:"get_isReleased",get_isInitialized:"get_isInitialized"}
};
var hex_module_ModuleMessage = function() {
};
$hxClasses["hex.module.ModuleMessage"] = hex_module_ModuleMessage;
hex_module_ModuleMessage.__name__ = ["hex","module","ModuleMessage"];
hex_module_ModuleMessage.prototype = {
	__class__: hex_module_ModuleMessage
};
var hex_module_dependency_IRuntimeDependencies = function() { };
$hxClasses["hex.module.dependency.IRuntimeDependencies"] = hex_module_dependency_IRuntimeDependencies;
hex_module_dependency_IRuntimeDependencies.__name__ = ["hex","module","dependency","IRuntimeDependencies"];
hex_module_dependency_IRuntimeDependencies.prototype = {
	__class__: hex_module_dependency_IRuntimeDependencies
};
var hex_module_dependency_RuntimeDependencies = function() {
};
$hxClasses["hex.module.dependency.RuntimeDependencies"] = hex_module_dependency_RuntimeDependencies;
hex_module_dependency_RuntimeDependencies.__name__ = ["hex","module","dependency","RuntimeDependencies"];
hex_module_dependency_RuntimeDependencies.__interfaces__ = [hex_module_dependency_IRuntimeDependencies];
hex_module_dependency_RuntimeDependencies.prototype = {
	addMappedDependencies: function(serviceDependencies) {
		if(this._mappedDependencies == null) this._mappedDependencies = [];
		this._mappedDependencies = this._mappedDependencies.concat(serviceDependencies);
	}
	,getMappedDependencies: function() {
		return this._mappedDependencies;
	}
	,hasMappedDependencies: function() {
		return this._mappedDependencies != null;
	}
	,__class__: hex_module_dependency_RuntimeDependencies
};
var hex_module_dependency_RuntimeDependencyChecker = function() {
	throw new js__$Boot_HaxeError(new hex_error_PrivateConstructorException("'RuntimeDependecyChecker' class can't be instantiated.",{ fileName : "RuntimeDependencyChecker.hx", lineNumber : 17, className : "hex.module.dependency.RuntimeDependencyChecker", methodName : "new"}));
};
$hxClasses["hex.module.dependency.RuntimeDependencyChecker"] = hex_module_dependency_RuntimeDependencyChecker;
hex_module_dependency_RuntimeDependencyChecker.__name__ = ["hex","module","dependency","RuntimeDependencyChecker"];
hex_module_dependency_RuntimeDependencyChecker.check = function(module,injector,dependencies) {
	if(dependencies.hasMappedDependencies()) {
		var mappedDependencies = dependencies.getMappedDependencies();
		var _g = 0;
		while(_g < mappedDependencies.length) {
			var dependency = mappedDependencies[_g];
			++_g;
			if(!injector.hasMapping(dependency)) throw new js__$Boot_HaxeError(new hex_module_dependency_RuntimeDependencyException("'" + Std.string(dependency) + "' class dependency is not available during '" + hex_log_Stringifier.stringify(module) + "' initialisation.",{ fileName : "RuntimeDependencyChecker.hx", lineNumber : 30, className : "hex.module.dependency.RuntimeDependencyChecker", methodName : "check"}));
		}
	}
};
hex_module_dependency_RuntimeDependencyChecker.prototype = {
	__class__: hex_module_dependency_RuntimeDependencyChecker
};
var hex_module_dependency_RuntimeDependencyException = function(message,posInfos) {
	hex_error_Exception.call(this,message,posInfos);
};
$hxClasses["hex.module.dependency.RuntimeDependencyException"] = hex_module_dependency_RuntimeDependencyException;
hex_module_dependency_RuntimeDependencyException.__name__ = ["hex","module","dependency","RuntimeDependencyException"];
hex_module_dependency_RuntimeDependencyException.__super__ = hex_error_Exception;
hex_module_dependency_RuntimeDependencyException.prototype = $extend(hex_error_Exception.prototype,{
	__class__: hex_module_dependency_RuntimeDependencyException
});
var hex_service_IService = function() { };
$hxClasses["hex.service.IService"] = hex_service_IService;
hex_service_IService.__name__ = ["hex","service","IService"];
hex_service_IService.__interfaces__ = [hex_event_IObservable];
hex_service_IService.prototype = {
	__class__: hex_service_IService
};
var hex_service_ServiceConfiguration = function(timeout) {
	if(timeout == null) timeout = 5000;
	this.serviceTimeout = timeout;
};
$hxClasses["hex.service.ServiceConfiguration"] = hex_service_ServiceConfiguration;
hex_service_ServiceConfiguration.__name__ = ["hex","service","ServiceConfiguration"];
hex_service_ServiceConfiguration.prototype = {
	__class__: hex_service_ServiceConfiguration
};
var hex_service_stateful_IStatefulService = function() { };
$hxClasses["hex.service.stateful.IStatefulService"] = hex_service_stateful_IStatefulService;
hex_service_stateful_IStatefulService.__name__ = ["hex","service","stateful","IStatefulService"];
hex_service_stateful_IStatefulService.__interfaces__ = [hex_service_IService];
hex_service_stateful_IStatefulService.prototype = {
	__class__: hex_service_stateful_IStatefulService
};
var hex_state_State = function(stateName) {
	this._exitHandlers = [];
	this._enterHandlers = [];
	this._exitCommandMappings = [];
	this._enterCommandMappings = [];
	this._transitions = new haxe_ds_ObjectMap();
	this._stateName = stateName;
};
$hxClasses["hex.state.State"] = hex_state_State;
hex_state_State.__name__ = ["hex","state","State"];
hex_state_State.prototype = {
	clearEnterHandler: function() {
		this._enterHandlers = [];
	}
	,clearExitHandler: function() {
		this._exitHandlers = [];
	}
	,getEnterHandlerList: function() {
		return this._enterHandlers;
	}
	,getExitHandlerList: function() {
		return this._exitHandlers;
	}
	,addEnterHandler: function(scope,callback) {
		return this._addHandler(this._enterHandlers,new hex_event_BasicHandler(scope,callback));
	}
	,addExitHandler: function(scope,callback) {
		return this._addHandler(this._exitHandlers,new hex_event_BasicHandler(scope,callback));
	}
	,removeEnterHandler: function(handler) {
		return this._removeHandler(this._enterHandlers,handler);
	}
	,removeExitHandler: function(handler) {
		return this._removeHandler(this._exitHandlers,handler);
	}
	,addEnterCommandMapping: function(mapping) {
		if(HxOverrides.indexOf(this._enterCommandMappings,mapping,0) == -1) this._enterCommandMappings.push(mapping);
	}
	,addExitCommandMapping: function(mapping) {
		if(HxOverrides.indexOf(this._exitCommandMappings,mapping,0) == -1) this._exitCommandMappings.push(mapping);
	}
	,removeEnterCommandMapping: function(mapping) {
		var i = HxOverrides.indexOf(this._enterCommandMappings,mapping,0);
		if(i != -1) this._enterCommandMappings.splice(i,1);
	}
	,removeExitCommandMapping: function(mapping) {
		var i = HxOverrides.indexOf(this._exitCommandMappings,mapping,0);
		if(i != -1) this._exitCommandMappings.splice(i,1);
	}
	,addEnterCommand: function(commandClass,contextOwner) {
		var mapping = new hex_control_command_CommandMapping(commandClass);
		mapping.setContextOwner(contextOwner);
		this._enterCommandMappings.push(mapping);
		return mapping;
	}
	,addExitCommand: function(commandClass,contextOwner) {
		var mapping = new hex_control_command_CommandMapping(commandClass);
		mapping.setContextOwner(contextOwner);
		this._exitCommandMappings.push(mapping);
		return mapping;
	}
	,addTransition: function(messageType,targetState) {
		var value = new hex_state_Transition(this,messageType,targetState);
		this._transitions.set(messageType,value);
	}
	,getMachine: function() {
		return this._stateMachine;
	}
	,getEvents: function() {
		var transitions = this.getTransitions();
		var result = [];
		var _g = 0;
		while(_g < transitions.length) {
			var transition = transitions[_g];
			++_g;
			result[result.length] = transition.getMessageType();
		}
		return result;
	}
	,getAllTargets: function() {
		var transitions = this.getTransitions();
		var result = [];
		var _g = 0;
		while(_g < transitions.length) {
			var transition = transitions[_g];
			++_g;
			result.push(transition.getTarget());
		}
		return result;
	}
	,getTransitions: function() {
		var i = this._transitions.iterator();
		var a = [];
		while(i.hasNext()) a.push(i.next());
		return a;
	}
	,hasTransition: function(messageType) {
		return this._transitions.h.__keys__[messageType.__id__] != null;
	}
	,targetState: function(messageType) {
		return this._transitions.h[messageType.__id__].getTarget();
	}
	,getEnterCommandMapping: function() {
		return this._enterCommandMappings;
	}
	,getExitCommandMapping: function() {
		return this._exitCommandMappings;
	}
	,toString: function() {
		return hex_log_Stringifier.stringify(this) + "::" + this._stateName;
	}
	,_addHandler: function(handlers,handler) {
		if(HxOverrides.indexOf(handlers,handler,0) == -1) {
			handlers.push(handler);
			return true;
		} else return false;
	}
	,_removeHandler: function(handlers,handler) {
		var id = HxOverrides.indexOf(handlers,handler,0);
		if(id != -1) {
			handlers.splice(id,1);
			return true;
		} else return false;
	}
	,__class__: hex_state_State
};
var hex_state_StateMachine = function(start) {
	this._start = start;
};
$hxClasses["hex.state.StateMachine"] = hex_state_StateMachine;
hex_state_StateMachine.__name__ = ["hex","state","StateMachine"];
hex_state_StateMachine.prototype = {
	addResetMessageType: function(messageTypes) {
		var _g = 0;
		while(_g < messageTypes.length) {
			var messageType = messageTypes[_g];
			++_g;
			if(messageType != null) this._addResetMessageType_byAddingTransition(messageType);
		}
	}
	,_addResetMessageType_byAddingTransition: function(messageType) {
		var states = this.getStates();
		var _g = 0;
		while(_g < states.length) {
			var state = states[_g];
			++_g;
			if(state.hasTransition(messageType)) state.addTransition(messageType,this._start);
		}
	}
	,getStates: function() {
		var result = [];
		this._collectStates(result,this._start);
		return result;
	}
	,_collectStates: function(result,state) {
		if(this._start == null || HxOverrides.indexOf(result,state,0) != -1) return; else {
			result.push(state);
			var targets = state.getAllTargets();
			var _g = 0;
			while(_g < targets.length) {
				var target = targets[_g];
				++_g;
				this._collectStates(result,target);
			}
		}
	}
	,getStart: function() {
		return this._start;
	}
	,isResetMessageType: function(messageType) {
		var states = this.getStates();
		var _g = 0;
		while(_g < states.length) {
			var state = states[_g];
			++_g;
			if(state.hasTransition(messageType) && state.targetState(messageType) == this._start) return true;
		}
		return false;
	}
	,__class__: hex_state_StateMachine
};
var hex_state_StateUnmapper = function(state) {
	this._exitMappings = [];
	this._enterMappings = [];
	this._state = state;
};
$hxClasses["hex.state.StateUnmapper"] = hex_state_StateUnmapper;
hex_state_StateUnmapper.__name__ = ["hex","state","StateUnmapper"];
hex_state_StateUnmapper.register = function(state) {
	var stateUnmapper = null;
	if(!hex_state_StateUnmapper._stateUnmapper.containsKey(state)) {
		stateUnmapper = new hex_state_StateUnmapper(state);
		hex_state_StateUnmapper._stateUnmapper.put(state,stateUnmapper);
	} else stateUnmapper = hex_state_StateUnmapper._stateUnmapper.get(state);
	return stateUnmapper;
};
hex_state_StateUnmapper.release = function() {
	var stateUnmappers = hex_state_StateUnmapper._stateUnmapper.getValues();
	var _g = 0;
	while(_g < stateUnmappers.length) {
		var unmapper = stateUnmappers[_g];
		++_g;
		unmapper.unmap();
	}
	hex_state_StateUnmapper._stateUnmapper = new hex_collection_HashMap();
};
hex_state_StateUnmapper.prototype = {
	unmap: function() {
		var _g = 0;
		var _g1 = this._enterMappings;
		while(_g < _g1.length) {
			var m = _g1[_g];
			++_g;
			this._state.removeEnterCommandMapping(m);
		}
		var _g2 = 0;
		var _g11 = this._exitMappings;
		while(_g2 < _g11.length) {
			var m1 = _g11[_g2];
			++_g2;
			this._state.removeExitCommandMapping(m1);
		}
		this._state = null;
		this._enterMappings = null;
		this._exitMappings = null;
	}
	,addEnterMapping: function(mapping) {
		this._enterMappings.push(mapping);
	}
	,addExitMapping: function(mapping) {
		this._exitMappings.push(mapping);
	}
	,__class__: hex_state_StateUnmapper
};
var hex_state_Transition = function(source,messageType,target) {
	this._source = source;
	this._target = target;
	this._messageType = messageType;
};
$hxClasses["hex.state.Transition"] = hex_state_Transition;
hex_state_Transition.__name__ = ["hex","state","Transition"];
hex_state_Transition.prototype = {
	getSource: function() {
		return this._source;
	}
	,getTarget: function() {
		return this._target;
	}
	,getMessageType: function() {
		return this._messageType;
	}
	,__class__: hex_state_Transition
};
var hex_state_control_StateChangeMacro = function() {
	hex_control_macro_Macro.call(this);
};
$hxClasses["hex.state.control.StateChangeMacro"] = hex_state_control_StateChangeMacro;
hex_state_control_StateChangeMacro.__name__ = ["hex","state","control","StateChangeMacro"];
hex_state_control_StateChangeMacro.__super__ = hex_control_macro_Macro;
hex_state_control_StateChangeMacro.prototype = $extend(hex_control_macro_Macro.prototype,{
	_prepare: function() {
	}
	,__class__: hex_state_control_StateChangeMacro
});
var hex_state_control_StateController = function(injector,stateMachine) {
	this._injector = injector;
	this._stateMachine = stateMachine;
	this._currentState = this._stateMachine.getStart();
	this._isInTransition = false;
};
$hxClasses["hex.state.control.StateController"] = hex_state_control_StateController;
hex_state_control_StateController.__name__ = ["hex","state","control","StateController"];
hex_state_control_StateController.prototype = {
	transitionTo: function(target,request) {
		if(this._isInTransition) {
		} else {
			this._isInTransition = true;
			if(request != null) this._request = request;
			this._targetedState = target;
			this._dispatchStateChange(this._currentState,this._currentState.getExitHandlerList());
			this._triggerCommand(this._currentState.getExitCommandMapping(),$bind(this,this._onExitCurrentState));
		}
	}
	,_triggerCommand: function(mappings,callback) {
		if(mappings.length > 0) {
			var sm = this._injector.instantiateUnmapped(hex_state_control_StateChangeMacro);
			var mappingToRemove = [];
			var _g = 0;
			while(_g < mappings.length) {
				var mapping = mappings[_g];
				++_g;
				if(mapping.get_isFiredOnce()) mappingToRemove.push(mapping);
				sm.addMapping(mapping);
			}
			var _g1 = 0;
			while(_g1 < mappingToRemove.length) {
				var mapping1 = mappingToRemove[_g1];
				++_g1;
				mappings.splice(HxOverrides.indexOf(mappings,mapping1,0),1);
			}
			sm.addCompleteHandler(callback);
			sm.addFailHandler(callback);
			sm.addCancelHandler(callback);
			sm.preExecute(this._request);
			sm.execute(this._request);
		} else callback(null);
	}
	,handleMessage: function(messageType,request) {
		if(this._currentState.hasTransition(messageType)) this.transitionTo(this._currentState.targetState(messageType),request); else if(this._stateMachine.isResetMessageType(messageType)) this.transitionTo(this._stateMachine.getStart(),request);
	}
	,getCurrentState: function() {
		return this._currentState;
	}
	,getTargetedState: function() {
		return this._targetedState;
	}
	,_onExitCurrentState: function(cmd) {
		this._triggerCommand(this._targetedState.getEnterCommandMapping(),$bind(this,this._onEnterTargetState));
	}
	,_onEnterTargetState: function(cmd) {
		if(this._request != null) this._request = null;
		this._currentState = this._targetedState;
		this._isInTransition = false;
		this._dispatchStateChange(this._currentState,this._currentState.getEnterHandlerList());
	}
	,_dispatchStateChange: function(state,handlers) {
		var _g = 0;
		while(_g < handlers.length) {
			var handler = handlers[_g];
			++_g;
			Reflect.callMethod(handler.scope,handler.callback,[state]);
		}
	}
	,__class__: hex_state_control_StateController
};
var hex_structures__$Point_Point_$Impl_$ = {};
$hxClasses["hex.structures._Point.Point_Impl_"] = hex_structures__$Point_Point_$Impl_$;
hex_structures__$Point_Point_$Impl_$.__name__ = ["hex","structures","_Point","Point_Impl_"];
hex_structures__$Point_Point_$Impl_$.__properties__ = {set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x"}
hex_structures__$Point_Point_$Impl_$.get_x = function(this1) {
	return this1.x;
};
hex_structures__$Point_Point_$Impl_$.set_x = function(this1,v) {
	return this1.x = v;
};
hex_structures__$Point_Point_$Impl_$.get_y = function(this1) {
	return this1.y;
};
hex_structures__$Point_Point_$Impl_$.set_y = function(this1,v) {
	return this1.y = v;
};
hex_structures__$Point_Point_$Impl_$._new = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	return { x : x, y : y};
};
hex_structures__$Point_Point_$Impl_$.fromIPoint = function(p) {
	return p;
};
hex_structures__$Point_Point_$Impl_$.fromISize = function(s) {
	return { x : s.width | 0, y : s.height | 0};
};
hex_structures__$Point_Point_$Impl_$.toSize = function(this1) {
	return new hex_structures_Size(this1.x,this1.y);
};
hex_structures__$Point_Point_$Impl_$.toArray = function(this1) {
	return [this1.x,this1.y];
};
hex_structures__$Point_Point_$Impl_$.plus = function(p1,p2) {
	return { x : p1.x + p2.x, y : p1.y + p2.y};
};
hex_structures__$Point_Point_$Impl_$.plusEquals = function(p1,p2) {
	p1.x = p1.x + p2.x;
	p1.y = p1.y + p2.y;
};
hex_structures__$Point_Point_$Impl_$.minus = function(p1,p2) {
	return { x : p1.x - p2.x, y : p1.y - p2.y};
};
hex_structures__$Point_Point_$Impl_$.minusEquals = function(p1,p2) {
	p1.x = p1.x - p2.x;
	p1.y = p1.y - p2.y;
};
hex_structures__$Point_Point_$Impl_$.multiply = function(p1,p2) {
	return { x : p1.x * p2.x, y : p1.y * p2.y};
};
hex_structures__$Point_Point_$Impl_$.multiplyEquals = function(p1,p2) {
	p1.x = p1.x * p2.x;
	p1.y = p1.y * p2.y;
};
hex_structures__$Point_Point_$Impl_$.divide = function(p1,p2) {
	return { x : p1.x / p2.x | 0, y : p1.y / p2.y | 0};
};
hex_structures__$Point_Point_$Impl_$.divideEquals = function(p1,p2) {
	p1.x = p1.x / p2.x | 0;
	p1.y = p1.y / p2.y | 0;
};
hex_structures__$Point_Point_$Impl_$.equals = function(p1,p2) {
	return p1.x == p2.x && p1.y == p2.y;
};
hex_structures__$Point_Point_$Impl_$.unequals = function(p1,p2) {
	return p1.x != p2.x || p1.y != p2.y;
};
hex_structures__$Point_Point_$Impl_$.assigns = function(p1,p2) {
	p1.x = p2.x;
	p1.y = p2.y;
};
var hex_structures_Size = function(width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	this.width = width;
	this.height = height;
};
$hxClasses["hex.structures.Size"] = hex_structures_Size;
hex_structures_Size.__name__ = ["hex","structures","Size"];
hex_structures_Size.prototype = {
	equals: function(size) {
		return this.width == size.width && this.height == size.height;
	}
	,setSize: function(size) {
		if(size != null) {
			this.width = size.width;
			this.height = size.height;
		}
	}
	,setSizeWH: function(width,height) {
		if(!isNaN(width)) this.width = width;
		if(!isNaN(height)) this.height = height;
	}
	,clone: function() {
		return new hex_structures_Size(this.width,this.height);
	}
	,scale: function(factor) {
		if(!isNaN(factor)) return new hex_structures_Size(this.width * factor,this.height * factor); else return this.clone();
	}
	,substract: function(size) {
		if(size != null) return new hex_structures_Size(this.width - size.width,this.height - size.height); else return this.clone();
	}
	,add: function(size) {
		if(size != null) return new hex_structures_Size(this.width + size.width,this.height + size.height); else return this.clone();
	}
	,toPoint: function() {
		return { x : this.width | 0, y : this.height | 0};
	}
	,__class__: hex_structures_Size
};
var hex_util_ArrayUtil = function() {
	throw new js__$Boot_HaxeError(new hex_error_PrivateConstructorException("This class can't be instantiated.",{ fileName : "ArrayUtil.hx", lineNumber : 17, className : "hex.util.ArrayUtil", methodName : "new"}));
};
$hxClasses["hex.util.ArrayUtil"] = hex_util_ArrayUtil;
hex_util_ArrayUtil.__name__ = ["hex","util","ArrayUtil"];
hex_util_ArrayUtil.arrowDecompose = function(f) {
	var l = null;
	var r = null;
	{
		var _g = f.expr;
		switch(_g[1]) {
		case 2:
			switch(_g[2][1]) {
			case 22:
				var e2 = _g[4];
				var e1 = _g[3];
				l = e1;
				r = e2;
				break;
			default:
				r = f;
			}
			break;
		default:
			r = f;
		}
	}
	return { left : l, right : r};
};
hex_util_ArrayUtil._getLeftName = function(e) {
	return hex_util_ArrayUtil._getLeftNames(e)[0];
};
hex_util_ArrayUtil._getLeftNames = function(L,min) {
	if(min == null) min = 1;
	var names;
	if(L != null) {
		var _g = L.expr;
		switch(_g[1]) {
		case 0:
			switch(_g[2][1]) {
			case 3:
				var s = _g[2][2];
				names = [s];
				break;
			default:
				names = [];
			}
			break;
		case 6:
			var els = _g[2];
			names = els.map(function(e) {
				{
					var _g1 = e.expr;
					switch(_g1[1]) {
					case 0:
						switch(_g1[2][1]) {
						case 3:
							var s1 = _g1[2][2];
							return s1;
						default:
							return "_";
						}
						break;
					default:
						return "_";
					}
				}
			});
			break;
		default:
			names = [];
		}
	} else names = [];
	var t = "";
	while(names.length < min) names.push(t += "_");
	return names;
};
hex_util_ArrayUtil._getUniqueLocalVarNames = function(count,locals) {
	var r = [];
	var tmap = new haxe_ds_StringMap();
	while(r.length < count) {
		var t = "__tmp_" + Std.random(16777215);
		if(!locals.exists(t) && !(__map_reserved[t] != null?tmap.existsReserved(t):tmap.h.hasOwnProperty(t))) {
			r.push(t);
			if(__map_reserved[t] != null) tmap.setReserved(t,1); else tmap.h[t] = 1;
		}
	}
	return r;
};
hex_util_ArrayUtil.prototype = {
	__class__: hex_util_ArrayUtil
};
var hex_util_ClassUtil = function() {
	throw new js__$Boot_HaxeError(new hex_error_PrivateConstructorException("'" + hex_log_Stringifier.stringify(this) + "' class can't be instantiated.",{ fileName : "ClassUtil.hx", lineNumber : 15, className : "hex.util.ClassUtil", methodName : "new"}));
};
$hxClasses["hex.util.ClassUtil"] = hex_util_ClassUtil;
hex_util_ClassUtil.__name__ = ["hex","util","ClassUtil"];
hex_util_ClassUtil.getInheritanceChain = function(clazz) {
	var inherintanceChain = [clazz];
	while((clazz = Type.getSuperClass(clazz)) != null) inherintanceChain.push(clazz);
	return inherintanceChain;
};
hex_util_ClassUtil.getInheritanceChainFrom = function(instance) {
	var type = Type.getClass(instance);
	if(type != null) return hex_util_ClassUtil.getInheritanceChain(type); else return [];
};
hex_util_ClassUtil.classExtendsOrImplements = function(classOrClassName,superClass) {
	var actualClass = null;
	if(js_Boot.__instanceof(classOrClassName,Class)) actualClass = js_Boot.__cast(classOrClassName , Class); else if(typeof(classOrClassName) == "string") try {
		actualClass = Type.resolveClass(js_Boot.__cast(classOrClassName , String));
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		throw new js__$Boot_HaxeError("The class name " + Std.string(classOrClassName) + " is not valid because of " + Std.string(e) + "\n" + Std.string(e.getStackTrace()));
	}
	if(actualClass == null) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("The parameter classOrClassName must be a Class or fully qualified class name.",{ fileName : "ClassUtil.hx", lineNumber : 56, className : "hex.util.ClassUtil", methodName : "classExtendsOrImplements"}));
	var classInstance = Type.createEmptyInstance(actualClass);
	return js_Boot.__instanceof(classInstance,superClass);
};
hex_util_ClassUtil.getStaticVariableReference = function(qualifiedClassName) {
	var a = qualifiedClassName.split(".");
	var type = a[a.length - 1];
	a.splice(a.length - 1,1);
	var classReference = hex_util_ClassUtil.getClassReference(a.join("."));
	var staticRef = Reflect.field(classReference,type);
	if(staticRef == null) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("ClassUtil.getStaticReference fails with '" + qualifiedClassName + "'",{ fileName : "ClassUtil.hx", lineNumber : 73, className : "hex.util.ClassUtil", methodName : "getStaticVariableReference"}));
	return staticRef;
};
hex_util_ClassUtil.getClassNameFromFullyQualifiedName = function(qualifiedClassName) {
	var a = qualifiedClassName.split(".");
	return a[a.length - 1];
};
hex_util_ClassUtil.getClassNameFromStaticReference = function(qualifiedClassName) {
	var a = qualifiedClassName.split(".");
	var type = a[a.length - 1];
	a.splice(a.length - 1,1);
	return a.join(".");
};
hex_util_ClassUtil.getStaticVariableNameFromStaticReference = function(qualifiedClassName) {
	var a = qualifiedClassName.split(".");
	return a[a.length - 1];
};
hex_util_ClassUtil.getClassReference = function(qualifiedClassName) {
	var classReference = Type.resolveClass(qualifiedClassName);
	if(classReference == null) throw new js__$Boot_HaxeError(new hex_error_IllegalArgumentException("ClassUtil.getClassReference fails with class named '" + qualifiedClassName + "'",{ fileName : "ClassUtil.hx", lineNumber : 105, className : "hex.util.ClassUtil", methodName : "getClassReference"}));
	return classReference;
};
hex_util_ClassUtil.getClassName = function(target) {
	var type = Type.getClassName(target == null?null:js_Boot.getClass(target));
	if(type != null) return type; else return "Dynamic";
};
hex_util_ClassUtil.prototype = {
	__class__: hex_util_ClassUtil
};
var hex_view_IView = function() { };
$hxClasses["hex.view.IView"] = hex_view_IView;
hex_view_IView.__name__ = ["hex","view","IView"];
var hex_view_BasicView = function() {
};
$hxClasses["hex.view.BasicView"] = hex_view_BasicView;
hex_view_BasicView.__name__ = ["hex","view","BasicView"];
hex_view_BasicView.__interfaces__ = [hex_view_IView];
hex_view_BasicView.prototype = {
	__class__: hex_view_BasicView
};
var hex_view_viewhelper_IMainViewHelperManagerListener = function() { };
$hxClasses["hex.view.viewhelper.IMainViewHelperManagerListener"] = hex_view_viewhelper_IMainViewHelperManagerListener;
hex_view_viewhelper_IMainViewHelperManagerListener.__name__ = ["hex","view","viewhelper","IMainViewHelperManagerListener"];
hex_view_viewhelper_IMainViewHelperManagerListener.prototype = {
	__class__: hex_view_viewhelper_IMainViewHelperManagerListener
};
var hex_view_viewhelper_IViewHelper = function() { };
$hxClasses["hex.view.viewhelper.IViewHelper"] = hex_view_viewhelper_IViewHelper;
hex_view_viewhelper_IViewHelper.__name__ = ["hex","view","viewhelper","IViewHelper"];
hex_view_viewhelper_IViewHelper.prototype = {
	__class__: hex_view_viewhelper_IViewHelper
	,__properties__: {set_visible:"set_visible",get_visible:"get_visible",set_view:"set_view",get_view:"get_view"}
};
var hex_view_viewhelper_IViewHelperManagerListener = function() { };
$hxClasses["hex.view.viewhelper.IViewHelperManagerListener"] = hex_view_viewhelper_IViewHelperManagerListener;
hex_view_viewhelper_IViewHelperManagerListener.__name__ = ["hex","view","viewhelper","IViewHelperManagerListener"];
hex_view_viewhelper_IViewHelperManagerListener.prototype = {
	__class__: hex_view_viewhelper_IViewHelperManagerListener
};
var hex_view_viewhelper_MainViewHelperManagerMessage = function() {
};
$hxClasses["hex.view.viewhelper.MainViewHelperManagerMessage"] = hex_view_viewhelper_MainViewHelperManagerMessage;
hex_view_viewhelper_MainViewHelperManagerMessage.__name__ = ["hex","view","viewhelper","MainViewHelperManagerMessage"];
hex_view_viewhelper_MainViewHelperManagerMessage.prototype = {
	__class__: hex_view_viewhelper_MainViewHelperManagerMessage
};
var hex_view_viewhelper_ViewHelper = function() {
	this._isPreInitialized = false;
	this._isVisible = hex_view_viewhelper_ViewHelper.DEFAULT_VISIBLE;
	this._internal = new hex_event_ClosureDispatcher();
};
$hxClasses["hex.view.viewhelper.ViewHelper"] = hex_view_viewhelper_ViewHelper;
hex_view_viewhelper_ViewHelper.__name__ = ["hex","view","viewhelper","ViewHelper"];
hex_view_viewhelper_ViewHelper.__interfaces__ = [hex_view_viewhelper_IViewHelper];
hex_view_viewhelper_ViewHelper.prototype = {
	_preInitialize: function() {
	}
	,_initialize: function() {
	}
	,_release: function() {
	}
	,get_view: function() {
		return this._view;
	}
	,set_view: function(view) {
		if(!this._isPreInitialized) {
			this._isPreInitialized = true;
			this._preInitialize();
		}
		if(this.get_view() != null || view == null) this._internal.dispatch(hex_view_viewhelper_ViewHelperMessage.REMOVE_VIEW,[this,this._view]);
		this._view = view;
		if(view != null) {
			this._internal.dispatch(hex_view_viewhelper_ViewHelperMessage.ATTACH_VIEW,[this,this._view]);
			this._fireInitialisation();
		}
		return this._view;
	}
	,_fireInitialisation: function() {
		this._initialize();
		this._internal.dispatch(hex_view_viewhelper_ViewHelperMessage.INIT,[this]);
	}
	,getOwner: function() {
		return this._owner;
	}
	,getLogger: function() {
		return this._owner.getLogger();
	}
	,setOwner: function(owner) {
		this._owner = owner;
	}
	,show: function() {
		if(!this._isVisible) this._isVisible = true;
	}
	,hide: function() {
		if(this._isVisible) this._isVisible = false;
	}
	,get_visible: function() {
		return this._isVisible;
	}
	,set_visible: function(visible) {
		if(visible) this.show(); else this.hide();
		return this._isVisible;
	}
	,release: function() {
		this._release();
		this._internal.dispatch(hex_view_viewhelper_ViewHelperMessage.RELEASE,[this]);
		this._view = null;
		this._internal.removeAllListeners();
	}
	,addHandler: function(messageType,callback) {
		this._internal.addHandler(messageType,callback);
	}
	,removeHandler: function(messageType,callback) {
		this._internal.removeHandler(messageType,callback);
	}
	,__class__: hex_view_viewhelper_ViewHelper
	,__properties__: {set_visible:"set_visible",get_visible:"get_visible",set_view:"set_view",get_view:"get_view"}
};
var hex_view_viewhelper_ViewHelperManager = function(owner) {
	this._owner = owner;
	this._dispatcher = new hex_event_Dispatcher();
	this._viewHelpers = [];
};
$hxClasses["hex.view.viewhelper.ViewHelperManager"] = hex_view_viewhelper_ViewHelperManager;
hex_view_viewhelper_ViewHelperManager.__name__ = ["hex","view","viewhelper","ViewHelperManager"];
hex_view_viewhelper_ViewHelperManager.getInstance = function(owner) {
	var viewHelperManager = hex_view_viewhelper_ViewHelperManager._mInstances.h[owner.__id__];
	if(viewHelperManager == null) {
		viewHelperManager = new hex_view_viewhelper_ViewHelperManager(owner);
		hex_view_viewhelper_ViewHelperManager._mInstances.set(owner,viewHelperManager);
		hex_view_viewhelper_ViewHelperManager.notifyViewHelperManagerCreation(viewHelperManager);
	}
	return viewHelperManager;
};
hex_view_viewhelper_ViewHelperManager.release = function(owner) {
	var viewHelperManager = hex_view_viewhelper_ViewHelperManager._mInstances.h[owner.__id__];
	if(viewHelperManager != null) {
		hex_view_viewhelper_ViewHelperManager.notifyViewHelperManagerRelease(viewHelperManager);
		viewHelperManager.releaseAllViewHelpers();
		hex_view_viewhelper_ViewHelperManager._mInstances.remove(owner);
	}
};
hex_view_viewhelper_ViewHelperManager.addGlobalListener = function(listener) {
	hex_view_viewhelper_ViewHelperManager._DISPATCHER.addHandler(hex_view_viewhelper_MainViewHelperManagerMessage.VIEW_HELPER_MANAGER_CREATION,listener,$bind(listener,listener.onViewHelperManagerCreation));
	hex_view_viewhelper_ViewHelperManager._DISPATCHER.addHandler(hex_view_viewhelper_MainViewHelperManagerMessage.VIEW_HELPER_MANAGER_RELEASE,listener,$bind(listener,listener.onViewHelperManagerRelease));
};
hex_view_viewhelper_ViewHelperManager.removeGlobalListener = function(listener) {
	hex_view_viewhelper_ViewHelperManager._DISPATCHER.removeHandler(hex_view_viewhelper_MainViewHelperManagerMessage.VIEW_HELPER_MANAGER_CREATION,listener,$bind(listener,listener.onViewHelperManagerCreation));
	hex_view_viewhelper_ViewHelperManager._DISPATCHER.removeHandler(hex_view_viewhelper_MainViewHelperManagerMessage.VIEW_HELPER_MANAGER_RELEASE,listener,$bind(listener,listener.onViewHelperManagerRelease));
};
hex_view_viewhelper_ViewHelperManager.notifyViewHelperManagerCreation = function(viewHelperManager) {
	hex_view_viewhelper_ViewHelperManager._DISPATCHER.dispatch(hex_view_viewhelper_MainViewHelperManagerMessage.VIEW_HELPER_MANAGER_CREATION,[viewHelperManager]);
};
hex_view_viewhelper_ViewHelperManager.notifyViewHelperManagerRelease = function(viewHelperManager) {
	hex_view_viewhelper_ViewHelperManager._DISPATCHER.dispatch(hex_view_viewhelper_MainViewHelperManagerMessage.VIEW_HELPER_MANAGER_RELEASE,[viewHelperManager]);
};
hex_view_viewhelper_ViewHelperManager.prototype = {
	getOwner: function() {
		return this._owner;
	}
	,releaseAllViewHelpers: function() {
		var len = this._viewHelpers.length;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			var viewHelper = this._viewHelpers[len - i - 1];
			this._viewHelpers.splice(len - i - 1,1);
			viewHelper.removeHandler(hex_view_viewhelper_ViewHelperMessage.RELEASE,$bind(this,this._onViewHelperRelease));
			viewHelper.release();
			this._notifyViewHelperRelease(viewHelper);
		}
	}
	,buildViewHelper: function(injector,clazz,view) {
		var viewHelper = injector.instantiateUnmapped(clazz);
		if(viewHelper != null) {
			this._notifyViewHelperCreation(viewHelper);
			injector.mapToValue(clazz,viewHelper);
			viewHelper.setOwner(this._owner);
			viewHelper.set_view(view);
			viewHelper.addHandler(hex_view_viewhelper_ViewHelperMessage.RELEASE,$bind(this,this._onViewHelperRelease));
			this._viewHelpers.push(viewHelper);
		}
		return viewHelper;
	}
	,size: function() {
		return this._viewHelpers.length;
	}
	,_onViewHelperRelease: function(viewHelper) {
		this._notifyViewHelperRelease(viewHelper);
		var index = HxOverrides.indexOf(this._viewHelpers,viewHelper,0);
		if(index != -1) this._viewHelpers.splice(index,1);
	}
	,addListener: function(listener) {
		this._dispatcher.addHandler(hex_view_viewhelper_ViewHelperManagerMessage.VIEW_HELPER_CREATION,listener,$bind(listener,listener.onViewHelperCreation));
		this._dispatcher.addHandler(hex_view_viewhelper_ViewHelperManagerMessage.VIEW_HELPER_RELEASE,listener,$bind(listener,listener.onViewHelperRelease));
	}
	,removeListener: function(listener) {
		this._dispatcher.removeHandler(hex_view_viewhelper_ViewHelperManagerMessage.VIEW_HELPER_CREATION,listener,$bind(listener,listener.onViewHelperCreation));
		this._dispatcher.removeHandler(hex_view_viewhelper_ViewHelperManagerMessage.VIEW_HELPER_RELEASE,listener,$bind(listener,listener.onViewHelperRelease));
	}
	,_notifyViewHelperCreation: function(viewHelper) {
		this._dispatcher.dispatch(hex_view_viewhelper_ViewHelperManagerMessage.VIEW_HELPER_CREATION,[viewHelper]);
	}
	,_notifyViewHelperRelease: function(viewHelper) {
		this._dispatcher.dispatch(hex_view_viewhelper_ViewHelperManagerMessage.VIEW_HELPER_RELEASE,[viewHelper]);
	}
	,__class__: hex_view_viewhelper_ViewHelperManager
};
var hex_view_viewhelper_ViewHelperManagerMessage = function() {
};
$hxClasses["hex.view.viewhelper.ViewHelperManagerMessage"] = hex_view_viewhelper_ViewHelperManagerMessage;
hex_view_viewhelper_ViewHelperManagerMessage.__name__ = ["hex","view","viewhelper","ViewHelperManagerMessage"];
hex_view_viewhelper_ViewHelperManagerMessage.prototype = {
	__class__: hex_view_viewhelper_ViewHelperManagerMessage
};
var hex_view_viewhelper_ViewHelperMessage = function() {
};
$hxClasses["hex.view.viewhelper.ViewHelperMessage"] = hex_view_viewhelper_ViewHelperMessage;
hex_view_viewhelper_ViewHelperMessage.__name__ = ["hex","view","viewhelper","ViewHelperMessage"];
hex_view_viewhelper_ViewHelperMessage.prototype = {
	__class__: hex_view_viewhelper_ViewHelperMessage
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var tictactoe_module_game_model_IGameModelListener = function() { };
$hxClasses["tictactoe.module.game.model.IGameModelListener"] = tictactoe_module_game_model_IGameModelListener;
tictactoe_module_game_model_IGameModelListener.__name__ = ["tictactoe","module","game","model","IGameModelListener"];
tictactoe_module_game_model_IGameModelListener.prototype = {
	__class__: tictactoe_module_game_model_IGameModelListener
};
var tictactoe_module_game_view_IActivePlayerIndicatorView = function() { };
$hxClasses["tictactoe.module.game.view.IActivePlayerIndicatorView"] = tictactoe_module_game_view_IActivePlayerIndicatorView;
tictactoe_module_game_view_IActivePlayerIndicatorView.__name__ = ["tictactoe","module","game","view","IActivePlayerIndicatorView"];
tictactoe_module_game_view_IActivePlayerIndicatorView.prototype = {
	__class__: tictactoe_module_game_view_IActivePlayerIndicatorView
};
var js_tictactoe_view_game_ActivePlayerIndicatorView = function(container) {
	this.playerList = new haxe_ds_StringMap();
	this.container = container;
};
$hxClasses["js.tictactoe.view.game.ActivePlayerIndicatorView"] = js_tictactoe_view_game_ActivePlayerIndicatorView;
js_tictactoe_view_game_ActivePlayerIndicatorView.__name__ = ["js","tictactoe","view","game","ActivePlayerIndicatorView"];
js_tictactoe_view_game_ActivePlayerIndicatorView.__interfaces__ = [tictactoe_module_game_model_IGameModelListener,tictactoe_module_game_view_IActivePlayerIndicatorView];
js_tictactoe_view_game_ActivePlayerIndicatorView.prototype = {
	init: function() {
		this.model.addListener(this);
	}
	,setPlayerList: function(playerList) {
		this.playerList = new haxe_ds_StringMap();
		this.container.innerHTML = "";
		var _g1 = 0;
		var _g = playerList.length;
		while(_g1 < _g) {
			var i = _g1++;
			var sign = playerList[i].sign;
			var li = window.document.createElement("li");
			li.classList.add("player");
			li.innerHTML = "<div class=\"turn-player\">" + sign.toUpperCase() + "</div>";
			this.playerList.set(sign,li);
			this.container.appendChild(li);
		}
	}
	,setActivePlayer: function(sign) {
		if(this.activePlayer != null) this.activePlayer.classList.remove("is-selected");
		this.activePlayer = this.playerList.get(sign);
		this.activePlayer.classList.add("is-selected");
	}
	,onPlayerListUpdate: function(playerList) {
		this.setPlayerList(playerList);
	}
	,onActivePlayerChange: function(player) {
		this.setActivePlayer(player.sign);
	}
	,onDraw: function() {
		this.activePlayer.classList.remove("is-selected");
	}
	,__class__: js_tictactoe_view_game_ActivePlayerIndicatorView
};
var tictactoe_module_game_model_IBoardModelListener = function() { };
$hxClasses["tictactoe.module.game.model.IBoardModelListener"] = tictactoe_module_game_model_IBoardModelListener;
tictactoe_module_game_model_IBoardModelListener.__name__ = ["tictactoe","module","game","model","IBoardModelListener"];
tictactoe_module_game_model_IBoardModelListener.prototype = {
	__class__: tictactoe_module_game_model_IBoardModelListener
};
var tictactoe_module_game_view_IBoardView = function() { };
$hxClasses["tictactoe.module.game.view.IBoardView"] = tictactoe_module_game_view_IBoardView;
tictactoe_module_game_view_IBoardView.__name__ = ["tictactoe","module","game","view","IBoardView"];
tictactoe_module_game_view_IBoardView.prototype = {
	__class__: tictactoe_module_game_view_IBoardView
};
var js_tictactoe_view_game_BoardView = function(container) {
	hex_view_BasicView.call(this);
	this.container = container;
};
$hxClasses["js.tictactoe.view.game.BoardView"] = js_tictactoe_view_game_BoardView;
js_tictactoe_view_game_BoardView.__name__ = ["js","tictactoe","view","game","BoardView"];
js_tictactoe_view_game_BoardView.__interfaces__ = [tictactoe_module_game_model_IBoardModelListener,tictactoe_module_game_view_IBoardView];
js_tictactoe_view_game_BoardView.__super__ = hex_view_BasicView;
js_tictactoe_view_game_BoardView.prototype = $extend(hex_view_BasicView.prototype,{
	init: function() {
		this.model.addListener(this);
	}
	,setSize: function(size) {
		var tbody = this.container.tBodies.item(0);
		tbody.innerHTML = "";
		var _g1 = 0;
		var _g = size.height | 0;
		while(_g1 < _g) {
			var i = _g1++;
			var tr = this.container.insertRow();
			var _g3 = 0;
			var _g2 = size.width | 0;
			while(_g3 < _g2) {
				var j = _g3++;
				var tc = tr.insertCell();
			}
		}
	}
	,setBoardCell: function(point,sign) {
		var cell = (js_Boot.__cast(this.container.rows.item(point.y) , HTMLTableRowElement)).cells.item(point.x);
		cell.innerHTML = sign.toUpperCase();
	}
	,setWinnerLine: function(line) {
		var _g1 = 0;
		var _g = line.line.length;
		while(_g1 < _g) {
			var i = _g1++;
			(js_Boot.__cast(this.container.rows.item(line.line[i].y) , HTMLTableRowElement)).cells.item(line.line[i].x).classList.add("is-winner-cell");
		}
	}
	,onWinnerLine: function(line) {
		this.setWinnerLine(line);
	}
	,onBoardInit: function(size) {
		this.setSize(size);
	}
	,onBoardUpdate: function(point,sign) {
		this.setBoardCell(point,sign);
	}
	,getChoice: function() {
		this.addListeners();
		this.responder = new hex_control_AsyncResponder();
		return this.responder;
	}
	,addListeners: function() {
		var list = this.container.querySelectorAll("td");
		var _g1 = 0;
		var _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			list.item(i).addEventListener("click",$bind(this,this.onClick));
		}
	}
	,removeListeners: function() {
		var list = this.container.querySelectorAll("td");
		var _g1 = 0;
		var _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			list.item(i).removeEventListener("click",$bind(this,this.onClick));
		}
	}
	,onClick: function(e) {
		var target = e.currentTarget;
		this.removeListeners();
		haxe_Log.trace(target.cellIndex,{ fileName : "BoardView.hx", lineNumber : 121, className : "js.tictactoe.view.game.BoardView", methodName : "onClick", customParams : [(js_Boot.__cast(target.parentNode , HTMLTableRowElement)).rowIndex]});
		this.responder.complete((function($this) {
			var $r;
			var y;
			y = (js_Boot.__cast(target.parentNode , HTMLTableRowElement)).rowIndex;
			$r = { x : target.cellIndex, y : y};
			return $r;
		}(this)));
	}
	,__class__: js_tictactoe_view_game_BoardView
});
var tictactoe_TicTacToe = function() {
	var game = new tictactoe_module_game_GameModule(new js_tictactoe_view_game_ActivePlayerIndicatorView(window.document.querySelector(".player-list")),new js_tictactoe_view_game_BoardView(window.document.querySelector(".tic-tac-toe-table")));
	game.initialize();
};
$hxClasses["tictactoe.TicTacToe"] = tictactoe_TicTacToe;
tictactoe_TicTacToe.__name__ = ["tictactoe","TicTacToe"];
tictactoe_TicTacToe.main = function() {
	var proxy = new hex_log_layout_LogProxyLayout();
	proxy.addListener(new hex_log_layout_JavaScriptConsoleLayout());
	new tictactoe_TicTacToe();
};
tictactoe_TicTacToe.prototype = {
	__class__: tictactoe_TicTacToe
};
var tictactoe_module_game_GameModule = function(activePlayerIndicatorView,boardView) {
	hex_module_Module.call(this);
	this._injector.mapToValue(tictactoe_module_game_view_IActivePlayerIndicatorView,activePlayerIndicatorView);
	this._injector.mapToValue(tictactoe_module_game_view_IBoardView,boardView);
	this._addStatelessConfigClasses([tictactoe_module_game__$GameModule_GameModuleConfig]);
	this._injector.injectInto(activePlayerIndicatorView);
	this._injector.injectInto(boardView);
};
$hxClasses["tictactoe.module.game.GameModule"] = tictactoe_module_game_GameModule;
tictactoe_module_game_GameModule.__name__ = ["tictactoe","module","game","GameModule"];
tictactoe_module_game_GameModule.__super__ = hex_module_Module;
tictactoe_module_game_GameModule.prototype = $extend(hex_module_Module.prototype,{
	_getRuntimeDependencies: function() {
		return new hex_module_dependency_RuntimeDependencies();
	}
	,_onInitialisation: function() {
		hex_module_Module.prototype._onInitialisation.call(this);
		this._get(tictactoe_module_game_controller_IGameController).init();
	}
	,__class__: tictactoe_module_game_GameModule
});
var tictactoe_module_game__$GameModule_GameModuleConfig = function() {
	hex_config_stateless_StatelessModuleConfig.call(this);
};
$hxClasses["tictactoe.module.game._GameModule.GameModuleConfig"] = tictactoe_module_game__$GameModule_GameModuleConfig;
tictactoe_module_game__$GameModule_GameModuleConfig.__name__ = ["tictactoe","module","game","_GameModule","GameModuleConfig"];
tictactoe_module_game__$GameModule_GameModuleConfig.__super__ = hex_config_stateless_StatelessModuleConfig;
tictactoe_module_game__$GameModule_GameModuleConfig.prototype = $extend(hex_config_stateless_StatelessModuleConfig.prototype,{
	configure: function() {
		this.mapModel(tictactoe_module_game_model_IGameModel,tictactoe_module_game_model_GameModel);
		this.mapModel(tictactoe_module_game_model_IBoardModel,tictactoe_module_game_model_BoardModel);
		this.mapController(tictactoe_module_game_controller_IGameController,tictactoe_module_game_controller_GameController);
	}
	,__class__: tictactoe_module_game__$GameModule_GameModuleConfig
});
var tictactoe_module_game_controller_IGameController = function() { };
$hxClasses["tictactoe.module.game.controller.IGameController"] = tictactoe_module_game_controller_IGameController;
tictactoe_module_game_controller_IGameController.__name__ = ["tictactoe","module","game","controller","IGameController"];
tictactoe_module_game_controller_IGameController.prototype = {
	__class__: tictactoe_module_game_controller_IGameController
};
var tictactoe_module_game_controller_GameController = function() { };
$hxClasses["tictactoe.module.game.controller.GameController"] = tictactoe_module_game_controller_GameController;
tictactoe_module_game_controller_GameController.__name__ = ["tictactoe","module","game","controller","GameController"];
tictactoe_module_game_controller_GameController.__interfaces__ = [tictactoe_module_game_controller_IGameController];
tictactoe_module_game_controller_GameController.prototype = {
	setPlayerList: function(playerList) {
		this.gameModel.setPlayerList(playerList);
	}
	,init: function() {
		this.setBoard(new hex_structures_Size(3,3),3);
		this.setPlayerList([new tictactoe_module_game_vo_PlayerVO("x"),new tictactoe_module_game_vo_PlayerVO("o")]);
		this.setActivePlayer(0);
	}
	,setBoard: function(size,successLineCount) {
		this.boardModel.initBoard(size,successLineCount);
	}
	,nextPlayer: function() {
		var actIndex = this.gameModel.getAcivePlayerIndex();
		var length = this.gameModel.getPlayerListLength();
		var nextIndex;
		if(_$UInt_UInt_$Impl_$.gt(length - 1,actIndex)) nextIndex = actIndex + 1; else nextIndex = 0;
		this.setActivePlayer(nextIndex);
	}
	,setActivePlayer: function(index) {
		haxe_Log.trace("setActivePlayer",{ fileName : "GameController.hx", lineNumber : 57, className : "tictactoe.module.game.controller.GameController", methodName : "setActivePlayer", customParams : [index]});
		var player = this.gameModel.setActivePlayer(index);
		this.setPlayerTurn();
	}
	,setPlayerChoice: function(point) {
		haxe_Log.trace("onPlayerChoose",{ fileName : "GameController.hx", lineNumber : 65, className : "tictactoe.module.game.controller.GameController", methodName : "setPlayerChoice", customParams : [point]});
		var player = this.gameModel.getAcivePlayer();
		if(this.boardModel.getBoardPoint(point) == null) {
			this.boardModel.setBoardPoint(point,player.sign);
			var line = null;
			if((line = this.boardModel.getFullLine()) != null) {
				haxe_Log.trace("Game Over. Winner: " + line.sign,{ fileName : "GameController.hx", lineNumber : 75, className : "tictactoe.module.game.controller.GameController", methodName : "setPlayerChoice"});
				this.boardModel.setWinnerLine(line);
			} else if(_$UInt_UInt_$Impl_$.gt(this.boardModel.getFreeCellCount(),0)) this.nextPlayer(); else this.gameModel.setDraw();
		} else {
			haxe_Log.trace("Board point already taken",{ fileName : "GameController.hx", lineNumber : 89, className : "tictactoe.module.game.controller.GameController", methodName : "setPlayerChoice"});
			this.setActivePlayer(this.gameModel.getAcivePlayerIndex());
		}
	}
	,setPlayerTurn: function() {
		this.boardView.getChoice().onComplete($bind(this,this.onPlayerTurnResult));
	}
	,onPlayerTurnResult: function(point) {
		if(this.boardModel.getBoardPoint(point) != null) this.boardView.getChoice().onComplete($bind(this,this.onPlayerTurnResult)); else this.setPlayerChoice(point);
	}
	,__class__: tictactoe_module_game_controller_GameController
};
var tictactoe_module_game_model_IBoardModelRO = function() { };
$hxClasses["tictactoe.module.game.model.IBoardModelRO"] = tictactoe_module_game_model_IBoardModelRO;
tictactoe_module_game_model_IBoardModelRO.__name__ = ["tictactoe","module","game","model","IBoardModelRO"];
tictactoe_module_game_model_IBoardModelRO.__interfaces__ = [hex_model_IModelRO_$tictactoe_$module_$game_$model_$IBoardModelListener];
tictactoe_module_game_model_IBoardModelRO.prototype = {
	__class__: tictactoe_module_game_model_IBoardModelRO
};
var tictactoe_module_game_model_IBoardModel = function() { };
$hxClasses["tictactoe.module.game.model.IBoardModel"] = tictactoe_module_game_model_IBoardModel;
tictactoe_module_game_model_IBoardModel.__name__ = ["tictactoe","module","game","model","IBoardModel"];
tictactoe_module_game_model_IBoardModel.__interfaces__ = [tictactoe_module_game_model_IBoardModelRO];
tictactoe_module_game_model_IBoardModel.prototype = {
	__class__: tictactoe_module_game_model_IBoardModel
};
var tictactoe_module_game_model_BoardModel = function() {
	hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$BoardModel_$BoardModelDispatcher_$tictactoe_$module_$game_$model_$IBoardModelListener.call(this);
};
$hxClasses["tictactoe.module.game.model.BoardModel"] = tictactoe_module_game_model_BoardModel;
tictactoe_module_game_model_BoardModel.__name__ = ["tictactoe","module","game","model","BoardModel"];
tictactoe_module_game_model_BoardModel.__interfaces__ = [tictactoe_module_game_model_IBoardModel];
tictactoe_module_game_model_BoardModel.__super__ = hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$BoardModel_$BoardModelDispatcher_$tictactoe_$module_$game_$model_$IBoardModelListener;
tictactoe_module_game_model_BoardModel.prototype = $extend(hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$BoardModel_$BoardModelDispatcher_$tictactoe_$module_$game_$model_$IBoardModelListener.prototype,{
	initBoard: function(size,successLineCount) {
		this.board = new tictactoe_vo_BoardVO(size,successLineCount);
		this.dispatcher.onBoardInit(this.board.size);
	}
	,setBoardPoint: function(point,sign) {
		this.board.board[point.y][point.x] = sign;
		this.dispatcher.onBoardUpdate(point,sign);
	}
	,getBoardPoint: function(point) {
		return this.board.board[point.y][point.x];
	}
	,getFullLine: function() {
		return tictactoe_util_BoardEvaluator.getFullLine(this.board);
	}
	,setWinnerLine: function(line) {
		this.winnerLine = line;
		this.dispatcher.onWinnerLine(line);
	}
	,getSize: function() {
		return this.board.size.clone();
	}
	,getBoard: function() {
		return this.board.clone();
	}
	,getFreeCellCount: function() {
		return this.board.getFreeCellCount();
	}
	,__class__: tictactoe_module_game_model_BoardModel
});
var tictactoe_module_game_model__$BoardModel_BoardModelDispatcher = function() {
	hex_model_ModelDispatcher.call(this);
};
$hxClasses["tictactoe.module.game.model._BoardModel.BoardModelDispatcher"] = tictactoe_module_game_model__$BoardModel_BoardModelDispatcher;
tictactoe_module_game_model__$BoardModel_BoardModelDispatcher.__name__ = ["tictactoe","module","game","model","_BoardModel","BoardModelDispatcher"];
tictactoe_module_game_model__$BoardModel_BoardModelDispatcher.__interfaces__ = [tictactoe_module_game_model_IBoardModelListener];
tictactoe_module_game_model__$BoardModel_BoardModelDispatcher.__super__ = hex_model_ModelDispatcher;
tictactoe_module_game_model__$BoardModel_BoardModelDispatcher.prototype = $extend(hex_model_ModelDispatcher.prototype,{
	onBoardInit: function(size) {
		var _g = 0;
		var _g1 = this._listeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener.onBoardInit(size);
		}
	}
	,onBoardUpdate: function(point,sign) {
		var _g = 0;
		var _g1 = this._listeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener.onBoardUpdate(point,sign);
		}
	}
	,onWinnerLine: function(line) {
		var _g = 0;
		var _g1 = this._listeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener.onWinnerLine(line);
		}
	}
	,__class__: tictactoe_module_game_model__$BoardModel_BoardModelDispatcher
});
var tictactoe_module_game_model_IGameModelRO = function() { };
$hxClasses["tictactoe.module.game.model.IGameModelRO"] = tictactoe_module_game_model_IGameModelRO;
tictactoe_module_game_model_IGameModelRO.__name__ = ["tictactoe","module","game","model","IGameModelRO"];
tictactoe_module_game_model_IGameModelRO.__interfaces__ = [hex_model_IModelRO_$tictactoe_$module_$game_$model_$IGameModelListener];
tictactoe_module_game_model_IGameModelRO.prototype = {
	__class__: tictactoe_module_game_model_IGameModelRO
};
var tictactoe_module_game_model_IGameModel = function() { };
$hxClasses["tictactoe.module.game.model.IGameModel"] = tictactoe_module_game_model_IGameModel;
tictactoe_module_game_model_IGameModel.__name__ = ["tictactoe","module","game","model","IGameModel"];
tictactoe_module_game_model_IGameModel.__interfaces__ = [tictactoe_module_game_model_IGameModelRO];
tictactoe_module_game_model_IGameModel.prototype = {
	__class__: tictactoe_module_game_model_IGameModel
};
var tictactoe_module_game_model_GameModel = function() {
	this.playerList = [];
	hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$GameModel_$GameModelDispatcher_$tictactoe_$module_$game_$model_$IGameModelListener.call(this);
};
$hxClasses["tictactoe.module.game.model.GameModel"] = tictactoe_module_game_model_GameModel;
tictactoe_module_game_model_GameModel.__name__ = ["tictactoe","module","game","model","GameModel"];
tictactoe_module_game_model_GameModel.__interfaces__ = [tictactoe_module_game_model_IGameModel];
tictactoe_module_game_model_GameModel.__super__ = hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$GameModel_$GameModelDispatcher_$tictactoe_$module_$game_$model_$IGameModelListener;
tictactoe_module_game_model_GameModel.prototype = $extend(hex_model_BasicModel_$tictactoe_$module_$game_$model_$_$GameModel_$GameModelDispatcher_$tictactoe_$module_$game_$model_$IGameModelListener.prototype,{
	setPlayerList: function(playerList) {
		this.playerList = playerList;
		this.dispatcher.onPlayerListUpdate(playerList);
	}
	,setActivePlayer: function(index) {
		this.activeIndex = index;
		this.dispatcher.onActivePlayerChange(this.playerList[index]);
		return this.playerList[index];
	}
	,getPlayerListLength: function() {
		return this.playerList.length;
	}
	,getAcivePlayerIndex: function() {
		return this.activeIndex;
	}
	,getAcivePlayer: function() {
		return this.playerList[this.activeIndex];
	}
	,setDraw: function() {
		this.isDraw = true;
		this.dispatcher.onDraw();
	}
	,__class__: tictactoe_module_game_model_GameModel
});
var tictactoe_module_game_model__$GameModel_GameModelDispatcher = function() {
	hex_model_ModelDispatcher.call(this);
};
$hxClasses["tictactoe.module.game.model._GameModel.GameModelDispatcher"] = tictactoe_module_game_model__$GameModel_GameModelDispatcher;
tictactoe_module_game_model__$GameModel_GameModelDispatcher.__name__ = ["tictactoe","module","game","model","_GameModel","GameModelDispatcher"];
tictactoe_module_game_model__$GameModel_GameModelDispatcher.__interfaces__ = [tictactoe_module_game_model_IGameModelListener];
tictactoe_module_game_model__$GameModel_GameModelDispatcher.__super__ = hex_model_ModelDispatcher;
tictactoe_module_game_model__$GameModel_GameModelDispatcher.prototype = $extend(hex_model_ModelDispatcher.prototype,{
	onPlayerListUpdate: function(playerList) {
		var _g = 0;
		var _g1 = this._listeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener.onPlayerListUpdate(playerList);
		}
	}
	,onActivePlayerChange: function(player) {
		var _g = 0;
		var _g1 = this._listeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener.onActivePlayerChange(player);
		}
	}
	,onDraw: function() {
		var _g = 0;
		var _g1 = this._listeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener.onDraw();
		}
	}
	,__class__: tictactoe_module_game_model__$GameModel_GameModelDispatcher
});
var tictactoe_module_game_vo_PlayerVO = function(sign) {
	this.sign = sign;
};
$hxClasses["tictactoe.module.game.vo.PlayerVO"] = tictactoe_module_game_vo_PlayerVO;
tictactoe_module_game_vo_PlayerVO.__name__ = ["tictactoe","module","game","vo","PlayerVO"];
tictactoe_module_game_vo_PlayerVO.prototype = {
	__class__: tictactoe_module_game_vo_PlayerVO
};
var tictactoe_util_BoardEvaluator = function() {
};
$hxClasses["tictactoe.util.BoardEvaluator"] = tictactoe_util_BoardEvaluator;
tictactoe_util_BoardEvaluator.__name__ = ["tictactoe","util","BoardEvaluator"];
tictactoe_util_BoardEvaluator.getFullLine = function(board) {
	var result;
	if((result = tictactoe_util_BoardEvaluator.getFullRow(board)) != null || (result = tictactoe_util_BoardEvaluator.getFullCol(board)) != null || (result = tictactoe_util_BoardEvaluator.getFullDiagonal(board)) != null || (result = tictactoe_util_BoardEvaluator.getFullDiagonalInverse(board)) != null) return result;
	return null;
};
tictactoe_util_BoardEvaluator.getFullRow = function(board) {
	var rowList = [];
	var lastRowSign = null;
	var _g1 = 0;
	var _g = board.size.height | 0;
	while(_g1 < _g) {
		var i = _g1++;
		var _g3 = 0;
		var _g2 = board.size.width | 0;
		while(_g3 < _g2) {
			var j = _g3++;
			var cell = board.board[i][j];
			if(cell != null && cell == lastRowSign) rowList.push({ x : j, y : i}); else {
				if(_$UInt_UInt_$Impl_$.gte(rowList.length,board.successLineCount)) return new tictactoe_vo_LineVO(rowList,lastRowSign);
				rowList = [{ x : j, y : i}];
				lastRowSign = cell;
			}
			if(_$UInt_UInt_$Impl_$.gte(rowList.length,board.successLineCount)) return new tictactoe_vo_LineVO(rowList,lastRowSign);
		}
		rowList = [];
	}
	return null;
};
tictactoe_util_BoardEvaluator.getFullCol = function(board) {
	var colList = [];
	var lastColSign = null;
	var _g1 = 0;
	var _g = board.size.width | 0;
	while(_g1 < _g) {
		var j = _g1++;
		var _g3 = 0;
		var _g2 = board.size.height | 0;
		while(_g3 < _g2) {
			var i = _g3++;
			var cell = board.board[i][j];
			if(cell != null && cell == lastColSign) colList.push({ x : j, y : i}); else {
				if(_$UInt_UInt_$Impl_$.gte(colList.length,board.successLineCount)) return new tictactoe_vo_LineVO(colList,lastColSign);
				colList = [{ x : j, y : i}];
				lastColSign = cell;
			}
			if(_$UInt_UInt_$Impl_$.gte(colList.length,board.successLineCount)) return new tictactoe_vo_LineVO(colList,lastColSign);
		}
		colList = [];
	}
	return null;
};
tictactoe_util_BoardEvaluator.getFullDiagonal = function(board) {
	var diagonalList = [];
	var lastDiagonalSign;
	var _g1 = 0;
	var _g = Std["int"](board.size.height - _$UInt_UInt_$Impl_$.toFloat(board.successLineCount) + 1);
	while(_g1 < _g) {
		var i = _g1++;
		var _g3 = 0;
		var _g2 = Std["int"](board.size.width - _$UInt_UInt_$Impl_$.toFloat(board.successLineCount) + 1);
		while(_g3 < _g2) {
			var j = _g3++;
			lastDiagonalSign = board.board[i][j];
			if(lastDiagonalSign == null) continue;
			diagonalList = [{ x : j, y : i}];
			var _g5 = 1;
			var _g4 = board.successLineCount;
			while(_g5 < _g4) {
				var k = _g5++;
				var cell = board.board[i + k][j + k];
				if(cell != lastDiagonalSign) break; else diagonalList.push({ x : j + k, y : i + k});
			}
			if(_$UInt_UInt_$Impl_$.gte(diagonalList.length,board.successLineCount)) return new tictactoe_vo_LineVO(diagonalList,lastDiagonalSign);
		}
	}
	return null;
};
tictactoe_util_BoardEvaluator.getFullDiagonalInverse = function(board) {
	var diagonalList = [];
	var lastDiagonalSign;
	var width = board.size.width | 0;
	var height = board.size.height | 0;
	var _g1 = 0;
	var _g = height - board.successLineCount + 1;
	while(_g1 < _g) {
		var i = _g1++;
		var _g3 = 0;
		var _g2 = width - board.successLineCount + 1;
		while(_g3 < _g2) {
			var j = _g3++;
			lastDiagonalSign = board.board[height - i - 1][j];
			if(lastDiagonalSign == null) continue;
			diagonalList = [{ x : j, y : height - i - 1}];
			var _g5 = 1;
			var _g4 = board.successLineCount;
			while(_g5 < _g4) {
				var k = _g5++;
				var cell = board.board[height - i - k - 1][j + k];
				if(cell != lastDiagonalSign) break; else diagonalList.push({ x : j + k, y : height - i - k - 1});
			}
			if(_$UInt_UInt_$Impl_$.gte(diagonalList.length,board.successLineCount)) return new tictactoe_vo_LineVO(diagonalList,lastDiagonalSign);
		}
	}
	return null;
};
tictactoe_util_BoardEvaluator.prototype = {
	__class__: tictactoe_util_BoardEvaluator
};
var tictactoe_vo_BoardVO = function(size,successLineCount) {
	this.size = size.clone();
	var _g = [];
	var _g2 = 0;
	var _g1 = size.height | 0;
	while(_g2 < _g1) {
		var i = _g2++;
		_g.push((function($this) {
			var $r;
			var _g3 = [];
			{
				var _g5 = 0;
				var _g4 = size.width | 0;
				while(_g5 < _g4) {
					var j = _g5++;
					_g3.push(null);
				}
			}
			$r = _g3;
			return $r;
		}(this)));
	}
	this.board = _g;
	this.successLineCount = successLineCount;
};
$hxClasses["tictactoe.vo.BoardVO"] = tictactoe_vo_BoardVO;
tictactoe_vo_BoardVO.__name__ = ["tictactoe","vo","BoardVO"];
tictactoe_vo_BoardVO.prototype = {
	clone: function() {
		var board = new tictactoe_vo_BoardVO(this.size,this.successLineCount);
		var _g = [];
		var _g2 = 0;
		var _g1 = this.size.height | 0;
		while(_g2 < _g1) {
			var i = _g2++;
			_g.push((function($this) {
				var $r;
				var _g3 = [];
				{
					var _g5 = 0;
					var _g4 = $this.size.width | 0;
					while(_g5 < _g4) {
						var j = _g5++;
						_g3.push($this.board[i][j]);
					}
				}
				$r = _g3;
				return $r;
			}(this)));
		}
		board.board = _g;
		return board;
	}
	,toString: function() {
		var s = "\n";
		var _g1 = 0;
		var _g = this.size.height | 0;
		while(_g1 < _g) {
			var i = _g1++;
			var _g3 = 0;
			var _g2 = this.size.width | 0;
			while(_g3 < _g2) {
				var j = _g3++;
				if(this.board[i][j] != null) s += this.board[i][j]; else s += ".";
			}
			s += "\n";
		}
		return s;
	}
	,getFreeCellCount: function() {
		var count = 0;
		var _g1 = 0;
		var _g = this.size.height | 0;
		while(_g1 < _g) {
			var i = _g1++;
			var _g3 = 0;
			var _g2 = this.size.width | 0;
			while(_g3 < _g2) {
				var j = _g3++;
				if(this.board[i][j] == null) count++;
			}
		}
		return count;
	}
	,__class__: tictactoe_vo_BoardVO
};
var tictactoe_vo_LineVO = function(line,sign) {
	this.line = line;
	this.sign = sign;
};
$hxClasses["tictactoe.vo.LineVO"] = tictactoe_vo_LineVO;
tictactoe_vo_LineVO.__name__ = ["tictactoe","vo","LineVO"];
tictactoe_vo_LineVO.prototype = {
	__class__: tictactoe_vo_LineVO
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
$hxClasses.Math = Math;
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
var __map_reserved = {}
Xml.Element = 0;
Xml.PCData = 1;
Xml.CData = 2;
Xml.Comment = 3;
Xml.DocType = 4;
Xml.ProcessingInstruction = 5;
Xml.Document = 6;
haxe_ds_ObjectMap.count = 0;
haxe_xml_Parser.escapes = (function($this) {
	var $r;
	var h = new haxe_ds_StringMap();
	if(__map_reserved.lt != null) h.setReserved("lt","<"); else h.h["lt"] = "<";
	if(__map_reserved.gt != null) h.setReserved("gt",">"); else h.h["gt"] = ">";
	if(__map_reserved.amp != null) h.setReserved("amp","&"); else h.h["amp"] = "&";
	if(__map_reserved.quot != null) h.setReserved("quot","\""); else h.h["quot"] = "\"";
	if(__map_reserved.apos != null) h.setReserved("apos","'"); else h.h["apos"] = "'";
	$r = h;
	return $r;
}(this));
hex_collection_LocatorMessage.REGISTER = new hex_event_MessageType("onRegister");
hex_collection_LocatorMessage.UNREGISTER = new hex_event_MessageType("onUnregister");
hex_config_stateless_StatelessModuleConfig.__INJECTION_DATA = { c : { a : []}, p : [{ p : "injector", t : "hex.di.IDependencyInjector", n : "", o : false},{ p : "frontController", t : "hex.control.IFrontController", n : "", o : false}], m : [], pc : [], pd : []};
hex_control_async_AsyncCommand.WAS_NEVER_USED = "WAS_NEVER_USED";
hex_control_async_AsyncCommand.IS_RUNNING = "IS_RUNNING";
hex_control_async_AsyncCommand.IS_COMPLETED = "IS_COMPLETED";
hex_control_async_AsyncCommand.IS_FAILED = "IS_FAILED";
hex_control_async_AsyncCommand.IS_CANCELLED = "IS_CANCELLED";
hex_control_async_AsyncCommand._POOL = new haxe_ds_ObjectMap();
hex_control_async_AsyncCommand.__INJECTION_DATA = { c : { a : []}, p : [], m : [], pc : [], pd : []};
hex_control_async_AsyncCommandMessage.COMPLETE = new hex_event_MessageType("onAsyncCommandComplete");
hex_control_async_AsyncCommandMessage.FAIL = new hex_event_MessageType("onAsyncCommandFail");
hex_control_async_AsyncCommandMessage.CANCEL = new hex_event_MessageType("onAsyncCommandCancel");
hex_control_macro_Macro.__INJECTION_DATA = { c : { a : []}, p : [{ p : "macroExecutor", t : "hex.control.macro.IMacroExecutor", n : "", o : false}], m : [], pc : [], pd : []};
hex_control_macro_MacroExecutor.__INJECTION_DATA = { c : { a : []}, p : [{ p : "injector", t : "hex.di.IBasicInjector", n : "", o : false}], m : [], pc : [], pd : []};
hex_core_HashCodeFactory._nKEY = 0;
hex_core_HashCodeFactory._M = new haxe_ds_ObjectMap();
hex_di_InjectionEvent.POST_INSTANTIATE = "onPostInstantiate";
hex_di_InjectionEvent.PRE_CONSTRUCT = "onPreConstruct";
hex_di_InjectionEvent.POST_CONSTRUCT = "onPostConstruct";
hex_domain_Domain._domainNames = new haxe_ds_StringMap();
hex_domain_DomainUtil._domain = new haxe_ds_StringMap();
hex_domain_TopLevelDomain.DOMAIN = hex_domain_DomainUtil.getDomain("TopLevelDomain",hex_domain_TopLevelDomain);
hex_domain_ApplicationDomainDispatcher._Instance = new hex_domain_ApplicationDomainDispatcher();
hex_domain_DefaultDomain.DOMAIN = hex_domain_DomainUtil.getDomain("DefaultDomain",hex_domain_DefaultDomain);
hex_domain_DomainExpert._Instance = new hex_domain_DomainExpert();
hex_domain_DomainExpert._DomainIndex = 0;
hex_domain_NoDomain.DOMAIN = hex_domain_DomainUtil.getDomain("NoDomain",hex_domain_NoDomain);
hex_event_MacroAdapterStrategy.__INJECTION_DATA = { c : { a : []}, p : [{ p : "macroExecutor", t : "hex.control.macro.IMacroExecutor", n : "", o : false}], m : [], pc : [], pd : []};
hex_ioc_assembler_ApplicationAssemblerMessage.CONTEXT_PARSED = new hex_event_MessageType("onContextParsed");
hex_ioc_assembler_ApplicationAssemblerMessage.ASSEMBLING_START = new hex_event_MessageType("onAssemblingStart");
hex_ioc_assembler_ApplicationAssemblerMessage.STATE_TRANSITIONS_BUILT = new hex_event_MessageType("onStateTransitionsBuilt");
hex_ioc_assembler_ApplicationAssemblerMessage.OBJECTS_BUILT = new hex_event_MessageType("onObjectsBuilt");
hex_ioc_assembler_ApplicationAssemblerMessage.METHODS_CALLED = new hex_event_MessageType("onMethodsCalled");
hex_ioc_assembler_ApplicationAssemblerMessage.DOMAIN_LISTENERS_ASSIGNED = new hex_event_MessageType("onDomainListenersAssigned");
hex_ioc_assembler_ApplicationAssemblerMessage.MODULES_INITIALIZED = new hex_event_MessageType("onModulesInitialized");
hex_ioc_assembler_ApplicationAssemblerMessage.ASSEMBLING_END = new hex_event_MessageType("onAssemblingEnd");
hex_ioc_core_ContextTypeList.ARRAY = "Array";
hex_ioc_core_ContextTypeList.BOOLEAN = "Bool";
hex_ioc_core_ContextTypeList.INSTANCE = "Instance";
hex_ioc_core_ContextTypeList.STATIC_VARIABLE = "StaticVariable";
hex_ioc_core_ContextTypeList.MAPPING_CONFIG = "hex.ioc.di.MappingConfiguration";
hex_ioc_core_ContextTypeList.INT = "Int";
hex_ioc_core_ContextTypeList.NULL = "null";
hex_ioc_core_ContextTypeList.FLOAT = "Float";
hex_ioc_core_ContextTypeList.OBJECT = "Object";
hex_ioc_core_ContextTypeList.STRING = "String";
hex_ioc_core_ContextTypeList.UINT = "UInt";
hex_ioc_core_ContextTypeList.DEFAULT = "Default";
hex_ioc_core_ContextTypeList.HASHMAP = "hex.collection.HashMap";
hex_ioc_core_ContextTypeList.SERVICE_LOCATOR = "hex.config.stateful.ServiceLocator";
hex_ioc_core_ContextTypeList.CLASS = "Class";
hex_ioc_core_ContextTypeList.XML = "XML";
hex_ioc_core_ContextTypeList.FUNCTION = "Function";
js_Boot.__toStr = {}.toString;
hex_log_LogLevel._ALL = new hex_log_LogLevel(0);
hex_log_LogLevel._DEBUG = new hex_log_LogLevel(10000);
hex_log_LogLevel._INFO = new hex_log_LogLevel(20000);
hex_log_LogLevel._WARN = new hex_log_LogLevel(30000);
hex_log_LogLevel._ERROR = new hex_log_LogLevel(40000);
hex_log_LogLevel._FATAL = new hex_log_LogLevel(50000);
hex_log_LogLevel._OFF = new hex_log_LogLevel(60000);
hex_ioc_core_CoreFactory._fastEvalMethod = hex_util_FastEval.fromTarget;
hex_log_LoggerMessage.LOG = new hex_event_MessageType("onLog");
hex_log_LoggerMessage.CLEAR = new hex_event_MessageType("onClear");
hex_log_layout_AllDomain.DOMAIN = hex_domain_DomainUtil.getDomain("AllDomain",hex_log_layout_AllDomain);
hex_metadata_AnnotationProvider._initialized = false;
hex_metadata_AnnotationProvider._Domains = new haxe_ds_ObjectMap();
hex_metadata_AnnotationProvider._Parents = new haxe_ds_ObjectMap();
hex_module_ModuleMessage.INITIALIZED = new hex_event_MessageType("onModuleInitialisation");
hex_module_ModuleMessage.RELEASED = new hex_event_MessageType("onModuleRelease");
hex_state_StateUnmapper._stateUnmapper = new hex_collection_HashMap();
hex_state_control_StateChangeMacro.__INJECTION_DATA = { c : { a : []}, p : [{ p : "macroExecutor", t : "hex.control.macro.IMacroExecutor", n : "", o : false}], m : [], pc : [], pd : []};
hex_view_BasicView.__INJECTION_DATA = { c : { a : []}, p : [], m : [], pc : [], pd : []};
hex_view_viewhelper_MainViewHelperManagerMessage.VIEW_HELPER_MANAGER_CREATION = new hex_event_MessageType("onViewHelperManagerCreation");
hex_view_viewhelper_MainViewHelperManagerMessage.VIEW_HELPER_MANAGER_RELEASE = new hex_event_MessageType("onViewHelperManagerRelease");
hex_view_viewhelper_ViewHelper.DEFAULT_VISIBLE = true;
hex_view_viewhelper_ViewHelper.__INJECTION_DATA = { c : { a : []}, p : [{ p : "dispatcher", t : "hex.event.IDispatcher", n : "", o : false}], m : [], pc : [], pd : []};
hex_view_viewhelper_ViewHelperManager._mInstances = new haxe_ds_ObjectMap();
hex_view_viewhelper_ViewHelperManager._DISPATCHER = new hex_event_Dispatcher();
hex_view_viewhelper_ViewHelperManagerMessage.VIEW_HELPER_CREATION = new hex_event_MessageType("onViewHelperCreation");
hex_view_viewhelper_ViewHelperManagerMessage.VIEW_HELPER_RELEASE = new hex_event_MessageType("onViewHelperRelease");
hex_view_viewhelper_ViewHelperMessage.INIT = new hex_event_MessageType("onInit");
hex_view_viewhelper_ViewHelperMessage.RELEASE = new hex_event_MessageType("onRelease");
hex_view_viewhelper_ViewHelperMessage.ATTACH_VIEW = new hex_event_MessageType("onAttachView");
hex_view_viewhelper_ViewHelperMessage.REMOVE_VIEW = new hex_event_MessageType("onRemoveView");
js_tictactoe_view_game_ActivePlayerIndicatorView.__INJECTION_DATA = { c : { a : []}, p : [{ p : "model", t : "tictactoe.module.game.model.IGameModelRO", n : "", o : false}], m : [], pc : [{ m : "init", a : [], o : 0}], pd : []};
js_tictactoe_view_game_BoardView.__INJECTION_DATA = { c : { a : []}, p : [{ p : "model", t : "tictactoe.module.game.model.IBoardModelRO", n : "", o : false}], m : [], pc : [{ m : "init", a : [], o : 0}], pd : []};
tictactoe_module_game__$GameModule_GameModuleConfig.__INJECTION_DATA = { c : { a : []}, p : [{ p : "injector", t : "hex.di.IDependencyInjector", n : "", o : false},{ p : "frontController", t : "hex.control.IFrontController", n : "", o : false}], m : [], pc : [], pd : []};
tictactoe_module_game_controller_GameController.__INJECTION_DATA = { c : { a : []}, p : [{ p : "gameModel", t : "tictactoe.module.game.model.IGameModel", n : "", o : false},{ p : "boardModel", t : "tictactoe.module.game.model.IBoardModel", n : "", o : false},{ p : "boardView", t : "tictactoe.module.game.view.IBoardView", n : "", o : false}], m : [], pc : [], pd : []};
tictactoe_TicTacToe.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=TicTacToe.js.map