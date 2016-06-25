module.exports = function () {
    const 
        _ = require('lodash'),
        chai = require('chai'),
        expect = chai.expect;
        
 
    
    /*Scenario: posting product*/
    
     this.Given(/^ a valid product$/, function () {
         //this.payload = require('../fixtures/valid-order.json')
         this.payload ={
            data: {
                type: 'products',
                attributes: {
                    items: [{ name:'product1', price: 5.0}]
                    }
                }
            }
    });
    
    this.When(/^ I submit it to the API$/, function () {
        const 
            that = this
              return this.doHttpRequest('products/' + 'products/', 'post', this.payload)
        .then((response) => {
            that.validyProduct.id = response.body;
            return response;
        });
    });
    
    this.Then(/^ I receive a success message$/, function () {
        expect(this.validyProduct.id).equals(201);
    });
    
    this.Then(/^the new product id (.*)$/, function () {
        expect(this.validyProduct.id)
    });
    


}
