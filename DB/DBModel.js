import { MONGOOSE } from "../Common/common-config";

const instance = MONGOOSE.Schema({
  caption: String,
  user: String,
  images: String,
  comments: [],
});

export default MONGOOSE.model('post', instance);