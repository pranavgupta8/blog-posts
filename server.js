const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {BlogPosts} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

const blogPostsRouter = require('./blogPostsRouter');

app.use(morgan('common'));

BlogPosts.create('Humor: darker better',
 'You can learn a lot about a person by knowing what they laugh at. Well then, sadist is my middle name, my puny reader. You talk about accident in Mexico, I\'ll make fun of the deaths cause it\'s overpopulated. Haha!', 
 'Peep GupGup');

app.use('/blogposts', blogPostsRouter);
app.listen(process.env.PORT || 8080, () => {
	console.log(`Your app is listening on port \`${process.env.PORT || 8080}\``);
});