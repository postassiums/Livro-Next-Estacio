// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleDeleteLivro, handleGetSpecificLivro } from "@/server";
import { Livro } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    switch(req.method)
    {
        case 'DELETE':
            await handleDeleteLivro(req.query,res)
        break
        case 'GET':
            await handleGetSpecificLivro(req.query,res)
        break
    }
}
