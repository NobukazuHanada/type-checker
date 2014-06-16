var typeChecker = require("../index.js");


describe("typecheck", function(){
    var types = {
        "user" : {
            "id" : "string",
            "name" : "string",
            "age" : "number"
        },
        "techer" : {
            "user" : "user",
            "subject" : "string"
        }
    };


    var typeCheck = typeChecker.createTypeCheck(types);

    it("success check!",function(){
        typeCheck("user", { "id" : "safda", "name" : "nobkz", "age" : 24 });
        typeCheck("techer", { "user" : { "id" : "f12ds", "name" : "nobkz", "age" : 24},
                              "subject" : "math" });
    });

    it("unsuccess check!", function(){
        try{
        typeCheck("user", { "id" : "sss" });
        typeCheck("techer", { "user" : { "id" : "dfafda" },
                              "subject" : "language" });
        }
        catch (e){
            console.log(e);
        }
    });

});

