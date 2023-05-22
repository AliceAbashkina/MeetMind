import nc from "next-connect";
import cors from "cors";

const handler = nc()
  // use connect based middleware
  .use(cors())
  .post(async (req, res) => {
    const response = await fetch('http://26.208.21.111:8210', config);
    res.json(response);
  });

export default handler;