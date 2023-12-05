import { H3Event } from "h3";
import * as notepadModel from "../model/notepad";

export const read = async () => {
  try {
    const result = await notepadModel.read();

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
