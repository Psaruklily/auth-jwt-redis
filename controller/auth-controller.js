const User = require('../database/model/User');
const { passwordHelper, tokenizer } = require('../helper');

module.exports = {
    userAuth: async(req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                throw new Error('No user');
            }

            await passwordHelper.compare(password, user.password);

            const tokens = tokenizer();

            console.log('tokens-----', tokens);

            res.json(tokens);
        } catch (e) {
            res.json(e.message);
        }
    },
}