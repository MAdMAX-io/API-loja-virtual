
describe('Routes: Products', () => {
    const defaultProducts = {
        name: 'Default product',
        description: 'product description',
        price: 100
    };
   
    describe('GET/products', () => {
        it('Should return a list of products', done => {
            request
                .get('/products')
                .end((err, res) => {
                    expect(res.body[0]).to.eql(defaultProducts);
                    done(err);
            });
        });
    });
});