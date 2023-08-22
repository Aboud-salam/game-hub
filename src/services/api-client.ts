import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f0e29fdcf019400e9d779a44cfee636e",
  },
});
