import { useBase, createRouter, defineEventHandler } from "h3";
import * as notepadCon from "../controller/notepad";

const router = createRouter();

router.get("/notepad", defineEventHandler(notepadCon.read));
router.post("/notepad", defineEventHandler(notepadCon.create));
router.get("/notepad/:id", defineEventHandler(notepadCon.detail));
router.put("/notepad/:id", defineEventHandler(notepadCon.update));
router.delete("/notepad/:id", defineEventHandler(notepadCon.remove));

export default useBase("/api", router.handler);
