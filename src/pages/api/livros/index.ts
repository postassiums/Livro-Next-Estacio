// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handleCreateNewLivro as handleCreateNewLivro, handleDeleteLivro, handleGetAllLivros as handleGetAllLivros } from "@/server";

import { Livro } from "@/types";
import { readFile } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";





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
