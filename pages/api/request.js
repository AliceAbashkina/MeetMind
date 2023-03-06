import nc from "next-connect";
import cors from "cors";

const handler = nc()
  // use connect based middleware
  .use(cors())
  .post(async (req, res) => {
    const response = await fetch('https://89.110.53.157:19525', config);
    res.json(response);
  });

export default handler;