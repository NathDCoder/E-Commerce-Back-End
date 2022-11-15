// import models
const Products = require('./Products');
const Category = require('./Category');
const Tags = require('./Tags');
const ProductTags = require('./ProductTags')
// Categories have many Products
Category.belongsToMany(Products, {
  through: {
    model: ProductTags,
    unique: false
  },
  as:'product_tags'
 });

// Products belongsTo Category
Products.belongsTo(Category, {
  //need a foreign key linking to the catergory id//
  through: {
    model: ProductTags,
    unique: false
  },
  as:'catergories'
});

Products.belongsToMany(Tags, {
    through: {
    model: ProductTags,
    unique: false
  },
  as:'product_tags'
})
// Tags belongToMany Products (through ProductTag)
  Tags.belongsToMany(Products, {
    through: {
      model: ProductTags,
      unique: false
    },
    as:'products'
  })

module.exports = {
  Products,
  Category,
  Tags,
};
