var typeChecker = require("../index.js");
var chai = require("chai");
var expect = chai.expect;

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
        expect(function(){
            typeCheck("user", { "id" : "sss" });
        }).to.throw(chai.AssertionError);
        expect(function(){
            typeCheck("techer", { "user" : { "id" : "dfafda" },
                                  "subject" : "language" });
        }).to.throw(chai.AssertionError);
    });

});

