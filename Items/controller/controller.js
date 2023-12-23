const Category = require("../models/category");
const Item = require("../models/Item");

class ItemsController {
  async createCategory(req, res) {
    try {
      const { name } = req.body;

      await new Category({ ...req.body }).save();
      res.status(200).json({ status: "Ok", msg: "Категория успешно создана" });
    } catch (e) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.body;

      await Category.findByIdAndDelete(id);

      res.status(200).json({ status: "Ok" });
    } catch (e) {
      console.log(e);
    }
  }
  async getAll(req, res) {
    try {
      const categories = await Category.find().populate("items");
      res.status(200).json({ status: "Ok", categories });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async addItem(req, res) {
    try {
      const { name, desc, price, images, categoryID } = req.body;

      const newItem = new Item({
        name,
        desc,
        price,
        images,
        categoryID,
      });

      await newItem.save();

      await Category.findByIdAndUpdate(categoryID, {
        $push: { items: newItem._id },
      });

      res.status(200).json({ status: "Ok", msg: "Товар успешно добавлен" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async deleteItem(req, res) {
    try {
      const { id } = req.body;
  
      await Item.findByIdAndDelete(id);
  
      res.status(200).json({ status: "Ok" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new ItemsController();
