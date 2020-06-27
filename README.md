# Steven Klavins Website

### About 

This repo holds the code for my personal portfolio website, it is built with a combination of React, Javascript, NodeJS/ParticleJS, CSS, and HTML. The purpose of this project is to exhibit my skills as a developer whilst also providing a good user experience.

**[Visit the site](https://steven-klavins.netlify.app/)**

![](/README_Screenshot.png)


### Tech Stack

In this project I used Javascript, React, NodeJS, Particles-JS, JSX, CSS, Axios, the Github API and Framer Motion

**React**

I chose the React library for its ease of use and the simple fact I really enjoy working with it. The React render DOM renders the navigation bar out once and simply switches out the page components on a route change.

**Javascript**

**CSS/HTML (JSX)**

As far as styling goes most of my components are rendered with CSS and the content despite looking like standard HTML is JSX. JSX is an XML/HTML-like syntax used so that XML/HTML-like code can co-exist with JavaScript and React code.

**Framer Motion**

The majority of animation on the site was achieved with Framer Motion. This includes component transitions, the blinking cursor animation on the welcome page, and the message animation on the contact page. The animated background was created with particle JS and CSS.

### API

On the projects page, I used a combination of GitHub's API and Axios to pull in information about my repositories. I originally intended to use GitHub's GraphQL API however this added an unnecessary layer of complexity to the project. To avoid the hassle of dealing with authentication and environment variables I decided to use GitHub's API V3.

**Deployment** 

My website is currently deployed on netlify however it is likely I will set up my own domain in the near future 

**Navigation** 

The navigation of the site is handled by the React Router which will switch components if the route changes. When hovering over links they highlight to help direct the user.

### Future changes

Currently, my website is not optimized for mobile devices, however, this is something I intend to do soon. In addition to this, I would also like to add a contact form, the component for a contact form is present but not in use. I deemed it low priority for now, for some reason or other the API was not excepting my authentication token.
