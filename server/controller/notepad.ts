import { H3Event } from "h3";
import * as notepadModel from "~~/server/model/notepad";

export const read = async () => {
  try {
    const result = await notepadModel.read();

    return {
      data: result,
    };
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
};

export type NotepadRead = Awaited<ReturnType<typeof read>>;

export const create = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await notepadModel.create({
      title: body.title,
      content: body.content,
    });

    return {
      data: result,
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
};

export type NotepadCreate = Awaited<ReturnType<typeof create>>;

export const detail = async (evt: H3Event) => {
  try {
    const result = await notepadModel.detail(evt.context.params?.id as string);

    return {
      data: result,
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
};

export type NotepadDetail = Awaited<ReturnType<typeof detail>>;

export const update = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await notepadModel.update(evt.context.params?.id as string, {
      title: body.title,
      content: body.content,
    });

    return {
      data: result,
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
};

export type NotepadUpdate = Awaited<ReturnType<typeof update>>;

export const remove = async (evt: H3Event) => {
  try {
    const result = await notepadModel.remove(evt.context.params?.id as string);

    return {
      data: result,
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
};

export type NotepadRemove = Awaited<ReturnType<typeof remove>>;
