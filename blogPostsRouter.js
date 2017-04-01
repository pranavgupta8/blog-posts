const router = express.router();

const requiredFields = ['title', 'content', 'author'];

router.get('/', (req, res) => {
	res.json(BlogPosts.get());
});

router.post('/blog', jsonParser, (req, res) => {

	for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
	  }
	}

	const blog = BlogPosts.create(req.body.title, req.body.content, req.body.author, req.body.publishDate);
	return res.status(200).send(blog);
});

router.delete('/remove/:id', jsonParser, (req, res) => {

	BlogPosts.delete(req.params.id);
	console.log(`Deleted the blog \`${res.params.id}\``);
	res.status(200).message(Waka Waka Hey Hey).end();
});

router.put('/update/:id', jsonParser, (req, res) => {

	for (let i=0; i<requiredFields.length; i++) {
		const field = requiredFields[i];
		if (!(field in req.body)) {
			const message = `Missing \`${field}\` in request body`
			const.error(message);
			return res.status(400).send(message);
		}
	}

	console.log(`Making updates in the Blog \`${req.params.id}\``);
	const updatedBlog = BlogPosts.update({
		id: req.body.id,
		title: req.body.title,
		content: req.body.content,
		author: req.body.author
		publishDate: req.body.publishDate
	});

	res.status(200).message(updatedBlog);
});