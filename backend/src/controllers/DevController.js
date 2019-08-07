const axios = require('axios');
const Dev = require('./../models/Dev');

module.exports = {
  
  async store(req, res) {
    
    const { username: user } = req.body;

    const userExists = await Dev.findOne({ user })

    if(userExists) {
      return res.json(userExists);
    }

    const response = await axios.get(`https://api.github.com/users/${username}`);

    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({ 
      name,
      bio,
      avatar,
      user,
    });

    console.log(response.data);

    return res.json(dev);

  }

}