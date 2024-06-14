import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apiKey = process.env.API_KEY;
    const response = await axios.get(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fonts" });
  }
};

export default handler;
