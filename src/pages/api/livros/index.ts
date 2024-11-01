// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleCreateNewLivro as handleCreateNewLivro, handleGetAllLivros as handleGetAllLivros } from "@/server";

import type { NextApiRequest, NextApiResponse } from "next";






export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch(req.method)
  {
    case 'POST':
        await handleCreateNewLivro(req.body,res)
        break
    case 'GET':
        await handleGetAllLivros(res)
        break

  }
}
