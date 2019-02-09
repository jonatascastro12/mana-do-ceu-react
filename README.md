# 🍞☁ Maná do Céu
This project is a simple ans scalable daily blog website that runs completly at client-side. Each message is stored as a .json in `/public/mana` folder. It has a low-cost and scalable hosting solution using Amazon S3 and Cloudfront.
There is a index file: `/public/mana/_index.json` that lists each post. When accessing the root page, it will get the day of the year and fetch corresponding post according to index file.

![Maná do Céu logo](https://github.com/jonatascastro12/mana-do-ceu-react/raw/master/public/mana.gif)

Visit: http://www.manadoceu.com

## Technologies
- [x] Javascript ES6
- [x] React 16.7
- [x] React router
- [x] Bootstrap 4

## Hosting
- [x] Amazon S3
- [x] Amazon Cloudfront

## Quick start
1. Install dependencies: `npm install`
2. Run dev server: `npm start`

## Message posts
The posts contains scripture verses with a piece of meditation message written in portuguese.
The messages were written by my father pastor Eli Vilela.

## Contributions
Feel free to contribute to this project. Create a new issue if you have a new idea to this project.

## Roadmap / Next steps
- [x] Auto generate SEO metatags using Amazon Lambda/API Gateway
  - This was made using API Gateway and AWS Lambda to generate SEO metatags page and redirect to React client.
  This is transparent to the user.
- [ ] Generate post thumbnail using API Gateway and AWS Lambda
- [ ] Make this project more shareable to contribute as an open source project
- [ ] Create a local client for manage the posts (manas)
- [ ] Make deploy on S3 using after Git pushing
- [ ] Create multi-language support
