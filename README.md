# About

This resume started it's life as a [JSON Resume](http://jsonresume.org) yaml file, so the structure of the resume.yaml file resembles that which JSON Resume uses. I had problems with the rendering of that, however, so instead of modifying the template I was using, I entirely rewrote this using [React PDF](https://react-pdf.org/). Overkill?

Anyway, that means the resume.yaml here closely resembles that of JSON Resume, with exceptions particularly around the `skills` list.

# Usage

Changes to any of the files here will be rendered by a Github action when pushed and stored as a release.

You can of course render locally using `npm run dev`, after having run `npm install`.
