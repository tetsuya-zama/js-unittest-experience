const assert = require("power-assert");
const sinon = require("sinon");

const target = require("../target-sample");

describe("add function",() =>{
    it("passes result of n(1st arg) plus m(2nd arg) to logger", ()=>{
        const logger = {log: sinon.spy()};
        
        const addFunction = target.add(logger);
        
        addFunction(1,2);
        
        assert(logger.log.called);
        assert(logger.log.getCall(0).args[0] === 3);
    });
})