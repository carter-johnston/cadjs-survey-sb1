import { users } from '../../db/collections/users';
import { bcrypt } from 'bcrypt';

/** @type {import('./$types').Actions} */
export const actions = {
  register: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(data.password, salt, async function (err, hash) {
        data.password = hash;
        await users.insertOne({
          data,
        });
      });
    });

    return {
      success: true,
    };
  },
};
