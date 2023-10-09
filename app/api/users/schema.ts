import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
});

export default schema;

// if error is found, this is the structure:
//   {
//     "error": [
//         {
//             "code": "too_small",
//             "minimum": 3,
//             "type": "string",
//             "inclusive": true,
//             "exact": false,
//             "message": "String must contain at least 3 character(s)",
//             "path": [
//                 "name"
//             ]
//         }
//     ]
// }
