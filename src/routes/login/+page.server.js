import { Jwt } from 'jsonwebtoken';
import { users } from '../../db/collections/users';
import bcrpyt from 'bcrypt';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const username = data.get('username');
    const password = data.get('password');

    let foundUser = await users.findOne({
      username: username,
    });

    if (foundUser) {
      bcrpyt.compare(password, foundUser.password, (err, result) => {
        console.log(result);
        if (result) {
          let token = jwt.sign(
            {
              data: {
                username: foundUser.username,
              },
            },
            JWT_SECRET
          );
          console.log(token);
        }
      });
    }
  },
};
