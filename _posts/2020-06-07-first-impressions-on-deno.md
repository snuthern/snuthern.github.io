---
layout: post
title: "First Impressions On Deno"
date: 2020-06-07
tags: Deno TypeScript Node.js
---

![Image.Deno_Land](https://res.cloudinary.com/practicaldev/image/fetch/s--rRQOkKpj--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/g5lkpi1owrkthyjw3k7r.jpg)

Over the past few days I have been setting up deno and playing around with it. I have to say I am REALLY enjoying it so far. Working with TypeScript in Node can be a pain at times, running the compiler, then node just to serve up a page. Deno reduces all of that down to a simple ```deno run file.ts``` which I know isn't much, but in terms of production environments that was time saved, which equals $$  
  
Beyond that, I enjoy how coming over to Deno isn't as difficult as you would imagine for a Node developer. Most of the Node packages are already there and you can even import them using a simple `import { whatever_from_node } from "https://deno.land/std/node/module.ts"` it doesn't have *everything* that npm does, but it has many of the common ones.  
  
For the most part all you need to do to get started with Deno is just change your extensions to `.ts` instead of `.js` and start adding what *type* of parameters you are expecting, it will start to give you errors but they aren't difficult to trace down. For a simple tutorial on how to migrate from JavaScript to TypeScript there is one [here](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html) and the [TypeScript Docs](https://www.typescriptlang.org/docs/home.html) is another great source of help.

There is even an edX course from MicroSoft on an ["Intro to TypeScript"](https://www.edx.org/course/introduction-to-typescript-2) where you can get an introduction to the language. If you are already familiar with OOP and typed languages in general moving over isn't too big of an issue. I hope you all enjoy digging in..