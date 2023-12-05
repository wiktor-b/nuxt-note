import { sql } from "~~/server/db";

export type NotepadModel = {
  id: number;
  title: string;
  content: string;
  created_date: string;
};

export const read = async () => {
  const result = await sql({
    query: "SELECT id, title, content, created_date FROM notepad",
  });

  return result as NotepadModel[];
};

export const create = async (data: Pick<NotepadModel, "title" | "content">) => {
  const result = (await sql({
    query: `INSERT INTO notepad (
        title,
        content
        ) VALUES (?, ?) RETURNING *
        `,
    values: [data.title, data.content],
  })) as NotepadModel[];

  return result.length === 1 ? (result[0] as NotepadModel) : null;
};

export const detail = async (id: string) => {
  const result = (await sql({
    query: "SELECT id, title, content, created_date FROM notepad WHERE id = ?",
    values: [id],
  })) as NotepadModel[];

  return result.length === 1 ? (result[0] as NotepadModel) : null;
};

export const update = async (
  id: string,
  data: Pick<NotepadModel, "title" | "content">
) => {
  await sql({
    query: `UPDATE notepad SET
        title = ?,
        content = ?
        WHERE id = ?
        `,
    values: [data.title, data.content, id],
  });

  return await detail(id);
};

export const remove = async (id: string) => {
  await sql({
    query: "DELETE FROM notepad WHERE id = ?",
    values: [id],
  });

  return true;
};
