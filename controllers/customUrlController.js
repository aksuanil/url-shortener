import db from '../db.js';

export default customShortenUrl = (req, res) => {
    const { url } = req.body;
    const { customId } = req.body;
    const validationResult = validateUrl(url);
    if (!validationResult) {
        return {
            error: "Invalid URL"
        };
    }
    try {
        const isInUse = db.find(customId);
        if (isInUse) {
            return {
                error: "Custom ID is already in use"
            };
        }
        return "http://localhost:3000/" + customId;
    } catch (error) {
        return {
            error: "This custom id is already in use"
        };
    }
}
