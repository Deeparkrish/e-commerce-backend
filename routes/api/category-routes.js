const router = require('express').Router();
const { Category, Product,ProductTag,Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: ['id','category_name'],
    include :[
    {
      model :Product,
      attributes:['product_name','price','stock']
    }
    ]
    })
  .then(
    categoryData => res.json(categoryData)
  )
  .catch(err=>{
    console.log(err);
    res.status(500).json.res(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where :{
      id :req.params.id
    },
    attributes: ['id','category_name'],
    include :[
    {
      model :Product,
      attributes:['product_name','price','stock']
    }
    ]
    })
  .then(categoryData => {
    if(!categoryData){
      res.status(404).json({message:'Id not found'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err =>{ console.log(err); 
      res.json(500).json(err);
  })

});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(categoryData =>res.json(categoryData))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{
    category_name :req.body.category_name,
    where :{
      id: req.params.id
    }
  })
  .then(categoryData => {
    if(!categoryData){
      res.status(404).json({message:'Id not found'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err =>{ console.log(err); 
      res.json(500).json(err);
  })

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where :{
      id:req.params.id
    }
  })
  .then(categoryData =>{
    if(!categoryData){
      res.status(404).json({message:'Id not found'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err =>{ console.log(err); 
      res.json(500).json(err);

  })
});

module.exports = router;
