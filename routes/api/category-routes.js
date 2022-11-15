const router = require('express').Router();
const { Category, Products, Tags } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const catergoryData = await Category.findAll({
      include: [{ model: Products }, { model: Tags }],
    });
    res.status(200).json(catergoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try  {
    const catergoryData = await Category.findByPk(req.params.id, {
      include: [{ model:Products }, { model:Tags }],
    });
    if(!catergoryData) {
      res.status(400).json({ message: 'No catergory found with that id.' });
      return;
    }

    res.status(200).json(catergoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

// get all products
router.get('/', async (req, res) => {
  // find all products
  try {
    const productData = await Products.findAll({
      include: [{ model: Tags }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  // be sure to include its associated Category and Tag data


// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  try  {
    const productData = await Products.findByPk(req.params.id, {
      include: [{ model:Tags }],
    });
    if(!productData) {
      res.status(400).json({ message: 'No product found with that id.' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    const productData = await Products.create({
      tags_id: req.body.tags_id,
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// PUT update a Product
router.put('/:id', async (req, res) => {
  try {
    const productData = await Products.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!productData[0]) {
      res.status(404).json({ message: 'No product with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE a Product
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Products.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});
 

// get all tags
router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagsData = await Tags.findAll({
      include: [{ model: Products }],
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  // be sure to include its associated Category and Tag data


// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  try  {
    const tagsData = await Tags.findByPk(req.params.id, {
      include: [{ model:Products }],
    });
    if(!tagsData) {
      res.status(400).json({ message: 'No tag found with that id.' });
      return;
    }

    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new tag
router.post('/', async (req, res) => {
  try {
    const tagsData = await Tags.create({
      products_id: req.body.products_id,
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// PUT update a Tags
router.put('/:id', async (req, res) => {
  try {
    const tagsData = await Tags.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!tagsData[0]) {
      res.status(404).json({ message: 'No tags with this id!' });
      return;
    }
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE a Tag
router.delete('/:id', async (req, res) => {
  try {
    const tagsData = await Tags.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagsData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
 

module.exports = router;
