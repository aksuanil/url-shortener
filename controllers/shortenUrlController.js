import { insert, find } from './dbController.js';
import { validateUrl, generateUrl } from '../helpers/urlHelpers.js';

export const shortenUrl = async (req, res) => {
    const hostname = req.headers.host;
    const { url } = req.body;
    const validationResult = await validateUrl(url);
    if (!validationResult) {
        return res.status(400).send({
            error: "Invalid URL"
        });
    }
    try {
        const shortenedUrl = await generateUrl(url, hostname);
        insert(shortenedUrl.id, url);
        return res.status(201).send(shortenedUrl);
    } catch (error) {
        return res.status(500).send({
            error: "Error when generating URL"
        });
    }
};
export const customShortenUrl = async (req, res) => {
    try {
        const hostname = req.headers.host;
        const { url } = req.body;
        const { customId } = req.body;
        if (customId.length > 6) {
            return res.status(400).send({
                error: "Custom ID must be less than 6 characters"
            });
        }
        const validationResult = await validateUrl(url);
        if (!validationResult) {
            return res.status(400).send({
                error: "Invalid URL"
            });
        }
        const isInUse = await find(customId);
        if (isInUse) {
            return res.status(400).send({
                error: "Custom ID is already in use"
            });
        }
        insert(customId, url);
        return res.status(201).send({ url: hostname + "/" + customId, id: customId });
    } catch (error) {
        return res.status(500).send({
            error: "Error when generating custom URL"
        });
    }
}

export const redirectById = async (req, res) => {
    try {
        const { id } = req.params;
        if (id > 6) {
            return res.status(400).send({
                error: "ID can't be more than 6 characters"
            });
        }
        const url = await find(id);
        if (!url) {
            return res.status(404).send({
                error: "Couldn't find any URL for this ID"
            });
        }
        return res.redirect(url);
    } catch (error) {
        return res.status(500).send({
            error: "Error when finding URL"
        });
    }

}