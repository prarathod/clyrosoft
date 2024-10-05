import { Express } from 'express';
import posts from '../data/posts';

export default function postsRoutes(app: Express) {
  app.get('/posts', (req, res) => {
    res.status(200).json(posts);
  });

  app.get('/posts/:id', (req, res) => {
    const post = posts.find((p) => p.id === parseInt(req.params.id, 10));
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  });
}
