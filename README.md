# Visit this site:

deployed site: https://next-app-ten-azure.vercel.app/

## Getting Started with local dev, backbones of this project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
First, run the development server:

```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# NextJS Playground:

- video: https://www.youtube.com/watch?v=ZVnjOPwW4ZA
- tuto repo: https://members.codewithmosh.com/courses/enrolled/240431
- course link: https://members.codewithmosh.com/courses/mastering-next-js-13-with-typescript-1/lectures/49144416

When creating the app, selected the following options

- create-next-app@13.4.19
- Ok to proceed? (y) y

- ✔ What is your project named? … next_app
- ✔ Would you like to use TypeScript? Yes
- ✔ Would you like to use ESLint? Yes
- ✔ Would you like to use Tailwind CSS? Yes ----> so that we can use ctrl + space to see intelligence suggestions
- ✔ Would you like to use `src/` directory? … No
- ✔ Would you like to use App Router? (recommended) Yes
- ✔ Would you like to customize the default import alias? … No

## Adding new pages

Navigation and new pages structured is built in.
just adding new folders in the three under app directory, it will load the pages automaticaaly.
eg. adding a folder with a name for the route, and a file thats named Page.tsx (for typescript)

Navigation:
we use

> import Link from "next/link";

as we call it client side navigation to optimize what its being downloaded

## Client-side Components CSC vs Server-side components SSC

we should default to Server-side components and do as minimal Client-side components
![Alt text](readme_imgs/image.png)
![Alt text](readme_imgs/image-1.png)

note that server side components limit the interactivity with the user, so we use the Atomic desing to decouple a strategy.
![Alt text](readme_imgs/image-2.png)
![Alt text](readme_imgs/image-3.png)

## Pages router vs New app router

Pages router its deprecated, it does not support server components so you should stop using it

'use client' decorator. we use this to tell nextjs this file will be rendered in the browser

Fetching data:
![Alt text](readme_imgs/image-4.png)
using jsonplaceholder.typicode.com to get random data

to fetch data, whenever possible, we should fetch it from server-side components

## Caching

there are 3 places to get data.

- Memory (fast)
- File system (mid)
- Network (slow)

by default, nextjs stores data in its file system as cache. it is built in.
we need to be explicit to disable this in each fetch so for those data that changes a lot and we need it from the source.
{ cache: no-store},
or we can add: {next: { revalidate: 10 }} // this would refetch for new data every 10 seconds

## Static and Dynamic Rendering

if we hace pages or components with static data, to be render once only, payload and content will come from chache in its file system

testing static pages:
you need to build the app for production, and because next is using the default cache, it renders statically. avoiding to run a new fetch to the network. unless we add the param to the fetch built in module: { cache: "no-store" }
![Alt text](readme_imgs/dynamic-static-ssr-pages.png)

> npm run build // to create a new build
> npm run start // to run the prod build

when you build, you c
lamda is dynamic
circle is static
![Alt text](readme_imgs/image-5.png)
![Alt text](readme_imgs/image-6.png)

## Next.js Fundamentals

### Terms

- Client componentsClient-side Rendering (CSR)
- Dynamic rendering
- Node.js runtime
- Server components
- Server-side Rendering (SSR)
- Static rendering
- Static Site Generation (SSG)

### Summary

- Next.js is a framework for building fast, and search-engine friendly applications.
- It includes a compiler for transforming and minifying JavaScript code, a Command-line Interface (CLI) for building and starting our application, and a Node.js runtime for running backend code. This enables full-stack development.
- With Next.js, we can render our components on the server and return their content to the client. This technique is called Server-side Rendering (SSR) and makes our applications search-engine friendly.
- To further improve performance, we can pre-render pages and components that have static data during the build and serve them whenever needed. This technique is called Static Site Generation (SSG).
- The new app router in Next.js 13 makes it incredibly easy to create routes. We can define route segments by creating directories. To make a route public, we add a page file (page.js, page.jsx, or page.tsx) in the corresponding directory.
- Next.js provides the Link component to enable client-side navigation. This means as the user navigates between pages, the new content is loaded quickly and smoothly without the entire page being reloaded.
- Next.js 13 supports client and server components introduced in React 18. Client components are rendered on the client within a web browser. This technique is called Client-side Rendering (CSR) and it’s how traditional React apps work. Server components are rendered on the server within a Node.js runtime. This technique is called Server-side Rendering (SSR).
- Server components lead to reduced bundle sizes, better performance, increased search engine visibility, and enhanced security. But they cannot handle browser events, access browser APIs, or use the state or effect hooks. These functionalities are only available in client components. So we should use them whenever possible unless we need interactivity.
- All the components and pages in the /app directory are server components by default. To make a component a client component, we add the ‘use client’ directive on top of the component file.
- Server components are great for fetching data because they don’t require extra server trips, making our application faster and more search-engine friendly.
- Next.js enhances the fetch() function by adding automatic caching. This boosts performance and reduces the need to retrieve the same piece of data twice.
- In Next.js, components can be rendered at build time (called Static Rendering) or at request time (called Dynamic Rendering). If we have pages or components with static data, we can pre-render them during build time to improve our application’s performance.

![Alt text](readme_imgs/image-7.png)

## Styling

### Terms

- CSS modules
- Daisy UI
- Global styles
- PostCSS
- Tailwind

### Summary

- In Next.js projects, we define global styles in /app/global.css. Reserve this file for global styles that need to be applied across multiple pages and components. Avoid adding excessive styles to this file, as it can quickly grow out of hand and become difficult to maintain.
- In traditional CSS, if we define the same class in two different files, one will overwrite the other depending on the order in which these files are imported. CSS modules help us prevent this problem. A CSS module is a CSS file that is scoped to a page or component.
- During the build process, Next.js uses a tool called PostCSS to transform our CSS class names and generate unique class names. This prevents clashes between different CSS classes across the application.
- Tailwind is a widely-used CSS framework for styling application. It offers a comprehensive set of small, reusable utility classes. We can combine these classes to create beautiful user interfaces.
- DaisyUI is a component library built on top of Tailwind. It provides a collection of pre-designed and reusable components such as accordion, badge, card, etc.

## CSS Modules.

it helps to prevent a named class does not override with other. this ocurrs when we import files with same class names,
we use css modules to separate their concern.
as the javascript engine takes care of it, we need to keep the class names as key for objects in javascript.
meaning we should not use - in names like: class-name, we use camelCase: className

## postcss.config.js

this file helps configure so that css modules work in nextjs. the idea is to autogenerate new classnames so that even if we repeat names. they wont crash

## Tailwind

one benefit is many classes out of the box, and whenever a component is removed with its class, if the class is not used anywhere else, then the build will not include that class anymore. helping to clean the code automatically.

## Daisy UI

This is a boostrap for tailwind
install: https://daisyui.com/docs/install/

## special files in Nextjs

- page.tsx: We already used this to create our pages.
- layout.tsx: Defined to create the layouts per folder.
- loading.tsx: Optional loading component can be used to show a loading state.
- error.tsx: Optional error state can be used only to show the error in a specific application part.
- template.tsx: Optional and very similar to layout, but this one will always remount on navigation, and the state is not shared.
- head.tsx: Optional to add a different <head> tag for a specific route.

## About navigation with Link

only downloads the content of the target page.
pre-fetches link that are in portview
caches pages on the client

# Navigation - note useRouter from next/router is depricated instead use next/navigation

## Suspense and Loading

we can think about 3 ways of showing loading states.
1 directly in a parent component
2 wrapping the children in a suspense component to handle loading states.
we do this by adding the element in the layout file
3 using the special file loading.tsx to get loading states under the hood

## Handling not found files

there is a build in function within next to navigate to a not-found.tsx view: notFound()

> import { notFound } from "next/navigation";
> if (id > 10) notFound();

when a new not-found.tsx page is added to the same level of a page.tsx, then that will be the view rendered.

## Error handling

in dev mode (npm run dev) we can see a stacktrace of the error, but in production build, a generic error page is displayed.

> Application error: a server-side exception has occurred (see the server logs for more information).
> Digest: 3461117963

we can create a custom error page with the special file: error.tsx (it must be a client-component wuth 'use client' clause)
error pages can be at any level of the application

Note: for specific errros in the layout.tsx , we need a special catcher file for errors, name `global-error.tsx` at the app level as well.

the error event is automatically passed to the component, so we can do stuff with it. look at the `error.tsx` file for the example

Login error in prod: Sentry (sentry.io/welcome/)

## Routing and Navigation (summary)

### terms:

- Client cache, Dynamic routes, Layout, Prefetching

### Summary

- The new App router in Next.js uses convention over configuration to define routes. It looks for special files such as page.tsx, layout.tsx, loading.tsx, route.tsx, etc.
- With the App router, we can colocate our pages and their building blocks (eg components, services, etc). This helps us better organize our projects as we can keep highly related files next to each other. No need to dump all the components in a centralized components directory.
- A dynamic route is one that takes one or more parameters. To add parameters to our routes, we wrap directory names with square brackets (eg [id]).
- In standard React applications, we use the state hook for managing component state. In server-rendered applications, however, we use query string parameters to keep state. This also allows us to bookmark our pages in specific state. For example, we can bookmark a filtered and sorted list of products.
- We use layoutfiles (layout.tsx) to create UI that is shared between multiple pages. The root layout (/app/layout.tsx) defines the common UI for all our pages. We can create additional layouts for specific areas of our application (eg /app/admin/layout.tsx).
- To provide smooth navigation between pages, the Link component prefetches the links that are in the viewport.
- As the user moves around our application, Next.js stores the page content in a cache on the client. So, if they revisit a page that already exists in the cache, Next.js simply grabs it from the cache instead of making a new request to the server. The client cache exists in the browser’s memory and lasts for an entire session. It gets reset when we do a full refresh.

## File Conventions

- page.tsx
- layout.tsx
- loading.tsx
- not-found.tsx
- error.tsx

![Alt text](readme_imgs/image-routes-and-navigation.png)

## Building an API

conventional file: route.tsx
NextRequest and NextResponse are used as middlewares
api objects validation with Zod -> https://zod.dev/

```
import { z } from "zod";
const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  age: z.number(),
});
export default schema;
```

```
const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
```

```
if error is found, this is the structure:
{
"error": [
  {
    "code": "too_small",
    "minimum": 3,
    "type": "string",
    "inclusive": true,
    "exact": false,
    "message": "String must contain at least 3 character(s)",
    "path": [
      "name"
      ]
    }
  ]
}

```

we can infer a schema from z to be used as Typescript interfaces.
eg:

```
type issueForm = z.infer<typeof createIssueSchema>;
// interface issueForm {
//   title: string;
//   description: string;
// }
```

## Building API (summary):

### Terms:

- API endpoint
- Data validation library: Zod
- HTTP Methods and status codes
- Route handlers
- Postman tool

### Summary

- To build APIs, we add a route file (route.tsx) in a directory. Note that within a single directory, we can either have a page or a route file but not both. •In route files, we add one or more route handlers. A route handler is a function that handles an HTTP request.
- HTTP requests have a method which can be GET (for getting data), POST (for creating data), PUT/PATCH (for updating data), and DELETE (for deleting data).
- HTTP protocol defines standard status codes for different situations. A few commonly used ones include: 200 (for success), 201 (when a resource is created), 400 (indicating a bad request), 404 (if something is not found), and 500 (for internal server errors).
- To create an object, the client should send a POST request to an API endpoint and include the object in the body of the request.
- We should always validate objects sent by clients. We can validate objects using simple if statements but as our applications get more complex, we may end up with complex and nested if statements.
- Data validation libraries, such as Zod, allow us to define the structure of our objects using a simple syntax, taking care of all the complexity involved in data validation.
- To update an object, the client should send a PUT or PATCH request to an API endpoint and include the object in the request body. PUT and PATCH are often used interchangeably. However, PUT is intended for replacing objects, while PATCH is intended for updating one or more properties.
- To delete an object, the client should send a DELETE request to an API endpoint. The request body should be empty.
- We can use Postman for testing APIs. With Postman we can easily send HTTP requests to API endpoints and inspect the responses.

## Database integration with Prisma

Testing and installing MySQL engine and workbench tool locally - https://dev.mysql.com/downloads/mysql/
we also added prisma ORM https://www.prisma.io/
installed the extension in VScode for Prisma official and install npm i primsa
we use npx prisma to do the setup
creating models, they can have relationships as well as db tables. https://www.prisma.io/docs/concepts/components/prisma-schema/data-model
creating migrations with npx prisma migrate dev

whenver we edit a model, we want to format it:

> npx prisma format

whenever we change or add a model, we need to run the prisma migration

> npx prisma migrate dev

created the prisma client instance to be using in the code

> import { PrismaClient } from "@prisma/client";
> const prisma = new PrismaClient();
> export default prisma;

note: to use Prisma client instance in development, we need to add additional code to prevent the refresh (2twice load) from dev to create too many instances in every import.
see: https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

### Terms

- Database engine: mysql
- Object Oriented Mapper (ORM) - Prisma
- Models and migrations

### Summary

- We use databases to permanently store data. There are many database engines available. Some of the popular ones are MySQL, PostgreSQL, MongoDB, etc.
- To connect our applications to a database, we often use an Object-relational Mapper (ORM). An ORM is a tool that sits between a database and an application. It’s responsible for mapping database records to objects in an application. Prisma is the most widely-used ORM for Next.js (or Node.js) applications.
- To use Prisma, first we have to define our data models. These are entities that represent our application domain, such as User, Order, Customer, etc. Each model has one or more fields (or properties).
- Once we create a model, we use Prisma CLI to create a migrationfile. A migration file contains instructions to generate or update database tables to match our models. These instructions are in SQL language, which is the language database engines understand.
- To connect with a database, we create an instance of PrismaClient. This client object gets automatically generated whenever we create a new migration. It exposes properties that represent our models (eg user).

## Key commands

- Setting up Prisma `npx prisma init`
- Format schema file `npx prisma format`
- Creting and running a migration `npm prisma migrate dev`

## Uploading files with Cloudinary

- Setup cloudinary:
  install the npm package: https://console.cloudinary.com/console/c-7a6c04749c39512e5174cf535ef869/getting-started
  complete the setup for next env: https://next.cloudinary.dev/

- To add the upload widget, we need to get the upload preset key from settings of our account.
  https://console.cloudinary.com/settings/c-7a6c04749c39512e5174cf535ef869/upload
  make sure to add the upload preset.

  - we create an unsign preset for this project

```

    <CldUploadWidget process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME">
      {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
              Upload
          </button>
      )}
    </CldUploadWidget>

```

this simple integration brings to life the upload component:
![Alt text](readme_imgs/cloudinary-upload.png)

# Authentication with Next Auth

- installing the npm package: https://next-auth.js.org/ (note: will turn into auth.js)

- Since Next updated its way to handle routes, we ensure we follow the new Route Handlers way: https://next-auth.js.org/configuration/initialization#route-handlers-app

- We need to generate a NEXTAUTH_SECRET, using openssl: openssl rand -base64 32
- Ensure NEXTAUTH_SECRET is added to env variables in the hosting.
- Ensure NEXTAUTH_SECRET is added .env for local dev.
- it doesn't need any prefix or sufix, keep it as: NEXTAUTH_SECRET

## Configure Google Provider for Next Auth

- docs: https://next-auth.js.org/providers/google

- using ekos sv project: https://console.cloud.google.com/apis/credentials/consent?authuser=4&project=next-app-401523&supportedpurview=project

- in the consent screen, we choose external type.
- we setup the Oauth consent screen, the scopes, test users in the wizard

  - in the scopes, added .../auth/userinfo.email and .../auth/userinfo.profile

- the authorized origin add localhost:3000 for development, make sure to add hosting domain as well.
- the redirect url is grabbed from the next auth for google - https://next-auth.js.org/providers/google
- For production: https://{YOUR_DOMAIN}/api/auth/callback/google
- For development: http://localhost:3000/api/auth/callback/google

## Configure Facebook Provider for Next Auth

- docs: https://next-auth.js.org/providers/facebook
- creating an app within facebook for developers: https://developers.facebook.com/apps/819546503241366/dashboard/

- created next_app_demo for production
- created next_app_test for dev

- as facebook has its built in oauth application, see docs: https://next-auth.js.org/configuration/providers/oauth
- callback url:
- https://next-app-ten-azure.vercel.app/api/auth/callback/facebook (prod)
- http://localhost:3000/api/auth/callback/facebook (dev)

## Configure GitHub Provider for Next Auth

- NOTE: only allows one callback url - meaning it will only work for prod in this demo
- docs: https://next-auth.js.org/providers/github
- creating an OAuth app within github: https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app
- go to developer settings and create the oauth app.

## Authentication sessions

- sessions in nextjs are created as cookies, as JSON web tokens.
- for testing purposes, creted the GET token endpoint to better understand the session in NextJS

`created this file: /auth/token/route.tsx`

```

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
const token = await getToken({ req: request });
return NextResponse.json(token);
}

```

- to check the token: http://localhost:3000/api/auth/token

## Accessing sessions on the client

- in the layout.tsx file, we add the sessionProvider component from 'next-auth/react'
- we need to create this as a wrapper provider, with the 'use client' because it will interact client rendering and events.
- with this wrapper, now we have access to logged in data from the google provider, using the hook: useSession(). for instance in the NavBar component
- wherever we use the useSession() hook, we need to turn the component to a client-component (example in NavBar)
- but we can also access the session data from the server.

## Accessing sessions on the server

- to access data in the server we use getServerSession() from "next-auth", we use page.tsx in the root directory, meaning home component file for this example
- this functions uses the auth options of the provider, the same way as the nextAuth handler

## Logout session

the logout session is already handled by next-auth, we <Link> to /api/auth/signout and it will take us to the logout provider page
we can customize it on the provider page

## Protecting routes

we use a middleware to inspect every request and determine the next step.

- nextjs is looking for a middleware.ts file in the root directory to execute the logic
- this is an example of how to redirect a call.
  export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("new-page-redirected", request.url));
  }

and this object is to determine the matches:

```
export const config = {
  // \*: zero or more
  // +: one or more
  // ?: zero or more
  matcher: ["/users/:id\*"],
};

```

documentation: https://next-auth.js.org/tutorials/securing-pages-and-api-routes

## Storing user's data with database adapters

documentation: https://next-auth.js.org/adapters --> https://authjs.dev/reference/adapter/prisma

- we install the npm package: npm i @next-auth/prisma-adapter
- initialize the adapter in NextAuth route.ts

## Replacing prisma modules

as we are going to store User data from the provider, the prisma adapter dictates the model structure.
in order to remove our own models, we need to run migrations to clear out the db as well, in preparation of the changes.

> npx prisma migrate dev

now we bring the new models from: https://authjs.dev/reference/adapter/prisma, then again run migrations

after this change, the session strategy becomes to store in the database.
and by default, the session of NextJS is JWT, JSON web token, so this generates a conflict

at the time of this implementation, we can not use database session with social logins or oauth provider.
so we dictate the session strategy in the adapter, we set it as jwt to be compatible. (meaning that the token will still be saved in the cookies of the browser)

```
session: {
  strategy: "jwt",
},
```

##### allowing user / pass credential provider with prisma

- we configure as the provider
- we install bcrypt to compare passwords and its types
  `npm i bcrypt`
  `npm i --save-dev @types/bcrypt`
- we need to add a password field optional to the User model, to play and store password. (this wont save for goolge provider)
  `password String?`
- run migration with prisma
  `npx prisma migrate dev`

```

CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "email", placeholder: "Email" },
    password: {
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
  },
  async authorize(credentials, \_) {
    if (!credentials?.email || !credentials?.password) {
    return null;
    }
    const user = await prisma.user.findUnique({
       where: { email: credentials?.email },
    });
    if (!user) return null;
    const passwordsMatched = await bcrypt.compare(
    credentials.password,
    user.hashedPassword!
    );
    return passwordsMatched ? user : null;
    },
}),

```

##### Registering new Users for CredentialsProvider

- we create a route file in: app/api/register/route.ts
- this file is accessible in http://localhost:3000/register
- we send our new user data to our db using prisma client
- this users list in the db, is used by the CredentialsProvider to validate login for users
- testing user: credentials@test.com / torsept2023

##### Custom login and logout pages, Events in nextjs,

- follow this documentation for nextjs: https://next-auth.js.org/configuration/pages
- Events: NextAuth.js provides a number of events (eg signIn, signOut, createUser, etc) that are useful for auditing or handling any other side effects: https://next-auth.js.org/configuration/events
- We can provide handlers for these events as part of our NextAuth.js setup: https://next-auth.js.org/configuration/options#events

#### Terms

- Authentication
- sessionDatabase
- adapterJSON Web Token (JWT)
- Middleware
- Next Auth

#### Summary

- NextAuth.js is a popular authentication library for Next.js applications. It simples the implementation of secure user authentication and authorization. It supports various authentication providers (eg Google, Twitter, GitHub, Credentials, etc).
- When a user signs in, Next Auth creates an authentication session for that user. By default, authentication sessions are represented using JSON Web Tokens (JWTs). But sessions can also be stored in a database.
- To access the authentication session on the client, we have to wrap our application with SessionProvider. This component uses React Context to pass the authentication session down the component tree. Since React Context is only available in client components, we have to wrap SessionProvider with a client component.
- Using middleware we can execute code before a request is completed. That’s an opportunity for us to redirect the user to the login page if they try to access a private part of our application without having a session. Next Auth includes built-in middleware for this purpose.
- Next Auth comes with many database adapters for storing user and session data.

  ![Alt text](readme_imgs/setup-next-authjs.png)
  ![Alt text](readme_imgs/protecting-routes-and-accessing-session.png)

# Sending Emails

- we use react.email -> npm i react-email @react-email/components
- we add a npm command to see an email preview: "preview-email": "email dev -p 3030" (we specify a different port that our server)
- this preview command will generate a full application to run the web generator locally, so we add it to gitignore `.react-email/`
- we create a email directory in the root of our project to collect all components
- we can visit the local app preview at by running the command `npm run preview-email`: http://localhost:3030
- we can send the test email without configuring any serve, just right out the box with NextJS

#### Stylimng email templates

- we can do it with css or tailwind
- to make it scalable with css, we create style objects outside the component
- we can also use tailwind properties with className, by wrapping the component with the <Tailwind> element that comes with the @react-email/components

#### Sending emails

- in the docs: https://react.email/docs/integrations/resend
- you want to look for the integrationw with resend (the same creators or react.email)
- you need to create an account with resend, they have up to 3k email free per month for testing
- you want to generate a new api key and save it in the .env file
- you install the npm package:
- now you can configure a module to trigger sending emails, for testing purposes, I have set up an enpoint to trigger it. another example can be an email after registering your user
- testing domain tied to account email c.alvarado.. , once a custom domain is setup, then any email can recieve

# Optimizations

### Handling images

- always prefer to use the <Image> component from 'next/image' that automatically rezises images for devices.
- for local images (stored in public folder), nextjs handles the rendering with light overhead.
- for remote images, we need to configure the `remotePatterns`, see docs: https://nextjs.org/docs/pages/building-your-application/optimizing/images#remote-images
- this file should be the more explicit possible for security concerns:

```

module.exports = {
images: {
remotePatterns: [
{
protocol: 'https',
hostname: 's3.amazonaws.com',
port: '',
pathname: '/my-bucket/\*\*',
},
]
}
}

```

- you can also style it with tailwind,
  `div className="relative h-screen"`
  `Image fill className="object-cover" sizes="100vw"`

- note the parent div with relative position, this is because we set a fill position for the image itself. the h-screen property means it will take height: 100% of the screen

# Using 3rd party scripts - Google Analytics - where to put them?

if you need it at a single page, use the page.ts file.
if you need them in a group of pages, use the layout.ts file
if you need it for all pages, use the layout at the root project

- to setup the google analytics, see docs:

  - https://blog.hootsuite.com/how-to-set-up-google-analytics/
  - https://www.youtube.com/watch?v=BA_mEEUbqAA&t=137s

- added a new property (for new project) and generated new tag
- to implement the tag code in the pages, you follow the script optimization: https://nextjs.org/docs/pages/building-your-application/optimizing/scripts
- Because we want this script available for all pages, we target the layout.tsx at the root level

##### Tips:

- To avoid errors of inline scripts in the `<Script>` element we use back-tilds to pass all content as a text child and so the element will interprets the string as javascript content

  > `<Script>`{`long google tag script passed as string and compiled as JS after`}`</Script>`

- `<Script>` element has strategy property:

#### afterInteractive:

- the default value
- script is loaded after our page becomes interactive
- examples are tag managers or analytics

#### beforeInteractive:

- known as Hydration, it loads before nextjs server injects any client side code to the pages.
  - Hydration: server components are rendered on the server and returned to the client. NextJS will then render and inject client side code on our pages.
  - should only use this strategy for critial code, examples are bot detectors or cookie consent managers.

#### lazyOnLoad:

- the script is loaded after all the resources on the page have been fetched
- usfull for background or low priority scripts that dont need to be be loaded early on.

##### Tip:

- to avoid layout to get polluted, we extract into its own component <GoogleAnalyticsScript>

# Implementing Fonts

you use the next/font libary `import { Inter, Roboto } from "next/font/google"`

then you create an object with params

```

const roboto = Roboto({
subsets: ["latin"],
weight: ["400", "500"],
});

```

and lastly we apply the className property.
roboto

`<body className={roboto.className}>`

#### local fonts (other than google)

- you use `import localFont from "next/font/local";`
- for the demo, poppins font was added to public/fonts/ folder
- in the object config, you can configure a css variable to refer in styles: `variable: "--font-poppins",`

###### Configure local font with tailwind

- you use the variable to refer in the tailwind config file.
- first, you change the className reference from `className={localFontPoppins.className}` to `className={localFontPoppins.variable}` Note: with this you will see the reference in the DOM inspector of the dev tools of chorme
- you add the tailwind.config.ts file, adding to the theme schema:
  `extend: { fontFamily: {
  poppins: "var(--font-poppins",
}}`
- with this config, the --font-poppins var becomes available to be use as a tailwind style in elements, or into the global css to dictate style in specific elements as well via its symantic
- adding to an elemnt: `<h1 className="font-bold text-3xl font-poppins">`
- adding to global css: `h1 { @apply font-extrabold text-2xl mb-3 font-poppins; }`

## Search Engine Optimization

- you can insert metadata at every page level.
  `export const metadata: Metadata = {
  title: "Products playground page",
  description: "a page to test nextjs capabilities",
};`
- for dynamic data, like product/id, where the content is dynamic to the data fetched, we also generate dynamic metadata

## Lazy loading

- you can laod heavy components using the dynamic method from rest.
- in the example, we hide a component with a state variable, interestingly, the component is preloaded for the static import: `import HeavyComponent from "./components/HeavyComponent";`
- when we use the dynamic import, we allow next to bring that data only when is going to be rendered.
- this add some extra bites of logic, so only makes sense to use it when the size of the heavy component is really large: `const HeavyComponent = dynamic(() => import("./components/HeavyComponent"));`
- you can also add a second parameter to the dynamic function: `, { loading: () => <p>loading</p>, ssr: false, });`
- you can also lazy load npm packages or libraries: eg lodash, wich is very heavy
-

#### Summary

- The Image component in Next.js automatically optimizes and serves images in various formats and sizes, reducing loading times and bandwidth usage for improved site performance.
- The Link component enables client-side navigation between pages within our Next.js application, eliminating full page reloads and creating a smoother user experience.
- The Script component allows you to load and manage external scripts efficiently.
- Next.js automatically optimizes our fonts and removes external network requests for improved privacy and performance.
- To make our applications search engine friendly, we can export a metadata object from our pages and layouts. Metadata exported from a page overwrite metadata defined in the layouts.
- Lazy loading helps us improve the initial loading performance of a page by reducing the amount of JavaScript needed to render the page. With lazy loading we can defer loading of client components and external libraries until when they’re needed.

# Preparing for production

- upload your code to a github repo
- setup an account with any host/cloud service: vercel, AWS, GCP, Azure, Heroku. this demo went to Vercel.
- link your github repo
- migrate your local db to a hosted/cloud db.

  - some services are:
    - Digital Ocean
    - Google Cloud platform
    - MS Azure
    - Hostinger
    - GoDaddy
      - Comparison: https://gist.github.com/bmaupin/0ce79806467804fdbbf8761970511b8c

- setup you cloudinary cloud name for production (need a separate storage for dev and prod)
- setup another google client for oauth and resend api in prod.

#### Setup hosted Mysql database with planetScale service. (learnings)

- reference: https://github.com/vercel/next.js/tree/canary/examples/with-mysql
- setup a hobby tier account to create a mysql datase: https://planetscale.com/blog/planetscale-vercel-integration
- planetScale account: https://app.planetscale.com/c-alvarado
- added an integration plugin in vercel:
- To swith to the cloud-hosted database, the command `npm prisma migrate dev` runs and create a new shadow database under the hood to detect schema drifts and run migrations. Cloud based database prevent sql scripts to create databases for security reasons. because of this you have to manually create the shadow database into mysql. see docs: https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database#cloud-hosted-shadow-databases-must-be-created-manually

  - To hack this limitation, you can reference your shadow db url to your local db, as the `npx prisma migrate dev` only run this as a pre-check to ensure the schema is good to run in the final destination.

- Found another limitation: PlanetScale MySQL db does not support Foreign key constraint.
- They enforce a design patter in the db that enforces referential integrity at the application level instead of at the database level, see docs: https://planetscale.com/docs/learn/operating-without-foreign-key-constraints

  - because of this finding and the potential client uses aws, I decided to implement a aws mysql instance to practice as

- deleting PlanetScale MySql database: https://app.planetscale.com/c-alvarado/next_app/settings
  - note: database was deleted

##### Setup hosted Mysql database with AWS.

- AWS allows foreign key constaint
- see docs: https://docs.aws.amazon.com/dms/latest/sql-server-to-aurora-mysql-migration-playbook/chap-sql-server-aurora-mysql.sql.constraints.html
- after this finding, you better implement mysql db with AWS.
- the HOST is displayed as endpoint in AWS.
- To test the connection you use some CLI or GUI first - MySQL workbench
  - the default privacy group prevents to connect, so you need to add a new rule to allow ALL inbound traffic from Ipv4 0.0.0.0/0 (ALL INBOUND ALLOWED)
- Note: with this AWS instance, the separate shadow_db is no longer needed.

# Building an issue tracker

reference repo: https://github.com/mosh-hamedani/issue-tracker
video course: https://members.codewithmosh.com/courses/nextjs-projects-issue-tracker/lectures/49685068

## Ading Radix UI - radix-ui

- see docs: https://www.radix-ui.com/themes/docs/overview/getting-started
- similar to DaysiUI, a boostrap library of elements
- I use radix-ui theme in this demo
- you import the lib in the root layout: `import '@radix-ui/themes/styles.css';`
- when building ui, at the layout level you can insert the ThemePanel element to play with the theme options.
- from it you can copy the configuration and set the `     <Theme appearance="light" accentColor="grass" radius="small">` at the layout level.
- Now how to configure our local font ? https://www.radix-ui.com/themes/docs/theme/typography

## Adding a MarkDown editor

- SimpleMDE: https://github.com/RIP21/react-simplemde-editor
- Important hack to allow build: (lazy-laoding import needed)

```
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
```

- Note: a pre-render error occurred in every build, thowing a navigator not defined.
  - reading thru this error, its related to useRouter depricated, server client code issues in client side render components. after troubleshooting. this is the best solution to prevent pre-render
    see solution: https://github.com/RIP21/react-simplemde-editor/issues/30

## Adding a form submission lib

- react hook form: https://www.npmjs.com/package/react-hook-form
- import useForm, this one facilitates to collect all data from a form, to avoid using multiple useState, just binding the `{...register("title")}` to each input element.
- for complex elements, a Controller element should wrap it:

```

<Controller
name="description"
control={control}
render={(field) => <SimpleMDE placeholder="Description" {...field} />}
/>

```

- we need to install: `npm i @hookform/resolvers@3.3.1` in order to use zod validations with it
- using `import { zodResolver } from "@hookform/resolvers/zod";`
- the implementation looks like this:

```

const { register, control, handleSubmit } = useForm<issueForm>({
resolver: zodResolver(createIssueSchema),
});

```

## Adding Axios lib

- we can have better error responses and structured with axios
