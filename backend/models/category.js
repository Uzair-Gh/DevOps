import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  color: {
    type: String,
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
