import {connection as db} from '../config/index.js'
class Products{
    fetchProducts(req,res){
        const qry = `
        select prodID,prodName,prodQuantity, productAmount,description, prodUrl
        FROM products;`
         db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                results
            })
         })
    }
    fetchProduct(req,res){
        const qry = `
        select prodID,prodName,prodQuantity, productAmount,description, prodUrl
        FROM products WHERE prodID = ${req.params.id};`
         db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                results
            })
         })
    }
    addProduct(req,res){
        const qry = `
            insert into products set ?;
        `
        db.query(qry, [data], (err)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                msg : "New product was added"
            })
        })
    }
 deleteProducts(req,res){
      const qry=`DELETE FROM products ;`

      db.query(qry, (err)=>{
        if(err) throw err
        
        res.json({
          status: res.statusCode,
          msg:'Product was delete!'
        })

      })
  }
  deleteProduct(req,res){
    const qry=`DELETE FROM products WHERE prodID=  ${req.params.id} ;`
    db.query(qry, [req.params.id], (err)=>{
        if(err) throw err
        res.json({
            status: res.statusCode,
            msg:'Product is deleted!'
        });
    });
}
async updateProduct(req, res) {
    const qry = `
    UPDATE products 
    SET ?
    WHERE prodID =  ${req.params.id};`;
    db.query(qry, [req.body, req.params.id], (err, results) => {
        if(err) {
            console.error(err);
            return res.status(500).json({
                status: "error",
                message: "An error occurred while updating the product."
            });
        }
        
        res.json({
            status: "success",
            msg: 'Product is updated!'
        });
    });
}
}

export{
    Products
}