
(function(global){
    var jsTypes = ["string","object","null","undefined","function","boolean"];

    function createTypeCheck(typeHash){
        function typeCheck(typeName, obj){
            var type = typeHash[typeName]; 
            for(var key in type){
                if(isJSType(type[key])){
                    expect(obj).to.have.property(key).that.is.a(type[key]);
                }else if(isClassType(type)){
                    expect(obj).to.have.property(key).that.is.an.instanceof(type[key]);
                }else{
                    typeCheck(type[key], obj[key]);
                }
            }
        }

        function isJSType(type){
            return (jsTypes.indexOf(type) > -1);
        }

        function isClassType(type){
            return ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(type[0]) > -1);
        }
        return typeCheck;
    }
    
    global.createTypeCheck = createTypeCheck;
})(window);
