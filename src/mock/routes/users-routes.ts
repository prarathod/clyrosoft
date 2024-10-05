import { Express } from 'express';
import users from '../data/users';

export default function usersRoutes(app: Express) {
  app.get('/users', (req, res) => {
    res.status(200).json(users);
  });

  app.get('/users/:id', (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id, 10));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
}
