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
}
export{
    Products
}