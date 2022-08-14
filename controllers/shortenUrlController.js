import { insert, find } from '../db.js';
import { validateUrl, generateUrl } from '../helpers/urlHelpers.js';

//create constant base_url

export const shortenUrl = async (req, res) => {
    const { url } = req.body;
    const validationResult = await validateUrl(url);
    if (!validationResult) {
        return {
            error: "Invalid URL"
        };
    }
    try {
        const shortenedUrl = await generateUrl(url);
        insert(shortenedUrl.id, url);
        res.status(200).send(shortenedUrl);
    } catch (error) {
        return {
            error: "Error when generating URL"
        };
    }
};

export const customShortenUrl = async (req, res) => {
    try {
        const { url } = req.body;
        const { customId } = req.body;
        const validationResult = await validateUrl(url);
        if (!validationResult) {
            res.status(404).send({
                error: "Invalid URL"
            });
        }
        const isInUse = await find(customId);
        if (isInUse) {
            res.status(404).send({
                error: "Custom ID is already in use"
            });
        }
        res.status(200).send("http://localhost:3000/" + customId);
    } catch (error) {
        return {
            error: "Error when generating custom URL"
        };
    }
}

export const findUrlById = async (req, res) => {
    try {
        const { id } = req.params;
        const url = await find(id);
        if (!url) {
            res.status(404).send({
                error: "URL not found"
            });
        }
        res.status(200).send(url);
    } catch (error) {
        res.status(500).send({
            error: "Error when finding URL"
        });
    }

}