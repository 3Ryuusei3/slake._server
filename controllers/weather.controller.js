

const weatherApiKey = (req, res, next) => {
    res.json(process.env.API_KEY_WEATHER)
}


module.exports = {
    weatherApiKey,
}