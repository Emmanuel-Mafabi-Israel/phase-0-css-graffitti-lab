/*
    GLORY BE TO GOD,
    CSS Graffitti Project,
    By Israel Mafabi Emmanuel
*/

const { expect } = require("chai");
const fs = require("fs");
const path = require("path");

describe("index.html", () => {
    it("exists", () => {
        const fileExists = fs.existsSync(
            path.resolve(__dirname, "..", "index.html")
        );

        const hint = "The index.html file must exist";
        expect(fileExists, hint).to.be.true;
    });
});

describe("css/cleanup.css", () => {
    it("exists", () => {
        const fileExists = fs.existsSync(
            path.resolve(__dirname, "..", "css/cleanup.css")
        );

        const hint = "The cleanup.css file must exist";
        expect(fileExists, hint).to.be.true;
    });

    it("has overrides added", () => {
        const fileData = fs.statSync(
            path.resolve(__dirname, "..", "css/cleanup.css")
        );

        const hint = "You should have at least 300 bytes worth of updates to css/cleanup.css";
        expect(fileData.size, hint).to.be.greaterThan(300);
    });
});

describe("css/paint.css", () => {
    it("exists", () => {
        const fileExists = fs.existsSync(
            path.resolve(__dirname, "..", "css/paint.css")
        );

        const hint = "The paint.css file must exist";
        expect(fileExists, hint).to.be.true;
    });
});