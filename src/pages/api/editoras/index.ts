// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleCreateNewLivro as handleCreateNewLivro, handleDeleteLivro, handleGetAllLivros as handleGetAllLivros, handleGetEditoras } from "@/server";


import type { NextApiRequest, NextApiResponse } from "next";






export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch(req.method)
  {
    case 'GET':
        await handleGetEditoras(res)
        break

  }
}
