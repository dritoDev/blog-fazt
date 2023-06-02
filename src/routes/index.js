import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("index", {title: 'First web with node'}));

router.get("/about", (req, res) => res.render("about", {title: 'About_me'}));

router.get("/contact", (req, res) => res.render("contact", {title: 'Contact_page'}));

export default router;