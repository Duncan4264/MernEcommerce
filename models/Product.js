const mongoose = require('mongoose');
     
const { String, Number } = mongoose.Schema.Types;
 
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sku: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  }
});
// export default mongoose.models.product || mongoose.model('Product', ProductSchema)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);

