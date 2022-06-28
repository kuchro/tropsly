This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Before started Please:
make sure that docker is installed.
Run firstly
 - docker-compose in tropsly-api project
 - after postgresql and localstack is up and running check:
 - curl -k https://localhost:4566/health - s3 should be up and running
 - create image bucket:
   - aws s3 mb --endpoint-url http://localhost:4566 s3://sportshop.images
   or
   - aws s3api --endpoint-url http://localhost:4566 create-bucket --bucket sportshop.data --region eu-west-2 --create-bucket-configuration LocationConstraint=eu-west-2

  - then you can run tropsly-api
 tropsly-api
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Now you can go to Admin page > Manage configuration
 - Add category: mens, kids, womens - these are 3 main categories,
 rest is custom, you can put whatever you want. 