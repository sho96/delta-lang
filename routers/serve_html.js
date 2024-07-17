import express from "express";
import { readFileSync } from "fs";

const router = express.Router();

router.use(express.json());

router.get("/", (req, resp) => {
    resp.redirect("/")
});
router.get("/:filename", (req, resp) => {
    resp.status(200).render(`./pages/${req.params.filename}.ejs`);
});

export function getHTMLRouter(){
    return router;
}
