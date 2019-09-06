Chapter 4: Getting From A → B
=============================

<!-- 2,197 Words -->

**This chapter isn’t worth reading just now (unless you want to get a feel for how I research and write). I hope to have it finished in August.**

**As I’ve noted in the [overview](https://github.com/buildingbeautifuluis/bbuis/blob/master/00-Overview.md), this is a work in progress and I’m sharing it here in draft form. The book isn’t finished, but I hope the draft content I’m providing has some value as I finalise the chapters.**



Table of Contents
-----------------

+ [Section 1: Considering User Flows](#)
+ [Section 2: Choices and Branches](#)
+ [Section 3: Page-to-Page and State-to-State](#)
+ [Section 4: Onboarding Users](#)
+ [Section 5: Empty States](#)



Summary
-------

With our pages built, **we need to focus on the flows that users take through the user interfaces we design**. In this chapter, I’ll explore designing user flows, stressing the need to **consider flows in different contexts: page-to-page, and state-to-state**. In short: I’ll explore the idea of getting from A → B, **ensuring our users are guided by our user interface**.

I’ll also consider **a number of critical flows that need to be considered when you’re designing digital products**, including: **’onboarding’**, when a user is taken through the initial screens of an application; and considering **’empty states’**, when a user is confronted by an application that, at that moment, contains no content.


<!--

Where is empty states? I think probably here, because it involves a process: empty → full.

Empty States
------------

**First define what 'empty states' are.**

When dealing with empty states – before a user has uploaded any content to a publishing system, for example – we need to saisfy the following goals:

1. educate users;
2. direct them towards an action; and
3. delight them.

What we don't want is a user staring at a blank screen and not knowing what to do next.

-->


Overview
--------

Overview goes here…



Section 1: Considering User Flows
---------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


<!--

This is all about getting from A-Z. There are many routes through content. Our role is to signpost and help the user. I've merged journey mapping in here. It should be a sub-section.

This section's more about a high level of flows, introducing the idea that we flow through apps or sites. The next section explains the idea of choices and branches, e.g.

+ Sign Up
+ Sign Up
+ Forgot Username / Password
+ Etc.

Explain what wayfinding is and then map this over to UI.

Great navigation helps you move forward. It doesn’t try to second guess you.

Add too much secondary navigation – and alternative options – and you’ll get in your users’ way. Don’t second guess.

**Design for momentum.**

As well as primary and secondary navigation, talk about breadcrumb trails and how these can be used to locate a user within space conceptually.

-->

With our pages mapped out – whether they’re desktop, mobile or wrist-based – we need to focus on the flows through the user interface.

Any application, even the simplest, will feature flows through different screens (and, perhaps different states within those screens) and it’s important that we consider these flows from a user interface perspective.

Our job as user interface designers is to ensure the routes through an application are clearly mapped out and signposted to our users. In order to provide clear directions we need to consider the 'journey' users undertake when using the applications or sites we're building.


### Journey Maps

<!--

NN/g have a whole page (and a five step process) for journey maps. It might be substantial enough to merit a part.

Maybe sub-sections on:

+ Journey Maps
+ User Flows

-->

We can use journey maps to visualise the process that a user goes through in order to accomplish a specific goal. For example, my goal might be to buy a specific book at Amazon's website. At the simplest level, we can compile a series of user actions into a timeline. This might include:

+ I search for book;
+ Amazon returns a number of results;
+ I choose one of the options (a paperback, a hardback or an audiobook, for example);
+ I add it to my basket; and
+ I check out.

There are many flow-charting applications you can use to map out your flows, equally you can build these flows (and create a clickable prototype) using Adobe XD. **Stress XD more. This should be the other way around (if we're mentioning alternatives to XD at all).**

Before building higher fidelity digital deliverables, it helps to map everything out with Post-It Notes. Post-Its are a useful tool because they allow you to re-organise your flows as you map everything out.

IMG: POST-IT NOTES <!-- Show some faked-up Post-It Notes using a handwriting typeface. -->

CAPTION: Post-It Notes are incredibly useful when mapping out flows…

This is very good:

https://uxdesign.cc/when-to-use-user-flows-guide-8b26ca9aa36a

> A user flow is a series of steps a user takes to achieve a meaningful goal.

A minor side-note on the power of paper… Briefly mention paper prototypes. They're useful at eery stage, but when you're mapping out flows large sheets of paper and a range of different colored pens will help you get the flows established.



Section 2: Choices and Branches
-------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


As you map out your project consider the choices that users will be presented with. For example, when building an application you might offer users the opportunity to sign up and create an account, enabling them to log in when they return.

As you design this, you’ll need to consider the different flows users will encounter. This is where choices and branches come in. It helps to map out the user journey in diagrammatic form so you can map out the process and identify the different pages you'll need to build.

Returning to our sign up example…

A new user – who hasn’t yet signed up – will need to be taken through a sign up flow, which you’ll need to consider and design. A returning user – with an existing account – will need to be taken through a different flow that signs them back in. Your user might have forgotten their password and need to reset it, again this will need to be mapped out.

This simple example gives a glimpse of the potential complexities that we might encounter. Once you begin to map out other user interactions you’ll begin to paint a clearer picture of your application from a bird’s eye perspective.

IMG: Flowchart…

CAPTION: This diagram is similar to one of the diagrams I used for the inspo for Gaby. Show that for now. Ideally show sign up and sign in. Maybe a detail of that on – say – Dribbble.

It helps to create a standalone flow diagram – in addition to your prototype – to show your stakeholders how everything is organised from a high-level perspective.

Both of these design deliverables serve different purposes:

+ Your flow diagram allows you to demonstrate your application’s overall structure;

+ Your prototype allows you to demonstrate how the interactions between different pages or states are handled.

Increasingly when we present to clients we do so using a variety of different design artefacts. As the products we design become more and more complex, so too does the need to develop new ways of presenting our thinking.

A prototype – built in XD, for example – is useful for providing an immersive feel of what you're building. You might augment this with other design deliverables, for example, a 'visual grammar' document that provides an insight into different aesthetic directions.

As designers, we orchestrate these different design artefacts to present a rounded view of the product we're building.

<!--

Find somewhere for this:

Jakob Nielsen's heuristics. Look at the 10 principles posters and link to these in the relevant further reading section.

Also by NN/g:

1. Prevent Errors (Good microcopy helps, look in the Components folder.)

2. Allow undo.

3. Enable users to resolve situations.

-->



Section 3: Page-to-Page and State-to-State
------------------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


<!-- Also talk about pages within pages and the idea that we're augmenting page to page with more complex on-page journeys… -->

As applications become more complex, we’ve begun to develop different design patterns to handle different flows.

In some cases your users will move through your application page-to-page, with different discrete pages handling different points on the journey. In other cases, your users will encounter different states **within** a page (or even at a component and page level).

Your job as a user interface designer is to:

1. Consider these flows;
2. Consider how you signpost the flows (so users know where their journey can take them); and
3. Consider how you communicate feedback to the user, so they can build a mental model of your application.

Managing this complexity – and simplifying it for your users – is one of the reasons that interaction design presents challenges. Your role as a designer is to help your users paint a picture of your application’s overall structure and how they can move through it.

This involves establishing a clear information architecture and signposting that throughout your user’s journey through it.

Increasingly pages are comprised of multiple **states** that we need to consider. I should show an example of this, where we're not moving to a separate screen per se, but we are moving to a different **parts of an interface** (perhaps using modals and overlays).

The 'add a calendar event' shot (Yellow Plus Button – REDRAW THIS) is a nice example. The user is interacting with the page and the page is responding to their actions. This needs to be considered also, as much as a page to page interaction.


### State-to-State

Also talk about pages within pages and the idea that we're augmenting page to page with more complex on-page journeys…


### Modals

Overlays and modals merit a section in themselves. Users will undoubtedly have run into them.

Explain how they work and how they should be designed. By overlaying the content – and greying out what's behind (but **leaving it there**) – users understand that this is a page within a page.

We don't necessarily need to go to another page to do something. We might handle it **on a page itself**. This is more efficient and gives the user a sense of where they are in the flow.

Equally, it draws on users' **existing mental models**, so it's a pattern that doesn't need to be explained.

**This might be the section to include scrims and overlays…**



Section 4: Onboarding Users
---------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


This section stresses the importance of onboarding. <!-- I think I should mention CTAs in the desktop or mobile chapters, but mention it here? -->

Before we even get to the onboarding part of the journey, the user needs to have interacted in some way, perhaps:

+ Signing up (a flow that we also need to consider); or
+ Downloading an application, via the App Store or Google Play, for example.

With the sign up taken care of, we need to consider how we introduce the user to what's on offer. This is the perfect time to provide some guidance, for example:

1. Explaining how things work at a birds' eye level;
2. Walking users through various features; and
3. ????

It's about telling the story of an application – web or native – before the user actually starts using it.

Explain what onboarding is and show some examples. The examples can be used to explain how a considered onboarding process helps users understand a user interface before they've actually started using it.

Apple is very good at this, with little modal overlays that explain what's happening and how to use things.

<!-- Somewhere I need to explain what a modal is! -->

Show some examples, e.g. Things 3, which is nicely considered. I have **lots of examples** in my Components deck.

It's not about a sign up, for example, that will have happened before we get to this point. (Or we'll have downloaded an app, e.g.)



Section 5: Empty States
-----------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


After the user's completed the onboarding they may face an empty state…

Explain what an empty state is.

The following article is very good for empty states:

	https://www.toptal.com/designers/ux/empty-state-ux-design

> A useful empty state will let the user know what’s happening, why it’s happening, and what to do about it.

The following list provides some common situations in which an empty state might be encountered:

+ Setting up a new social media account, where – until you follow others – you have no connections.

+ A new Dropbox screen, when no files or folders have been created.

+ The resulting screen after completing all of your tasks in a to-do list manager.

Google, there's another article (Medium?) on empty states that has other examples.

I have screenshots of Grammarly's onboarding, which are worth showing because they've really considered the empty states problem. Things 3 also provide a sample project with instructions on how to use the app, again this is nicely considered. Lastly, Agenda does a great job of handling empty states, again by providing sample content.






Google has some great examples in their [Material Design](https://material.io/design/communication/empty-states.html) guidelines.


Empty states are important because – unless you consider them – your users can – confronted with a need to do something (and perhaps confused) – they may never return.

A better approach is to ease a user in, perhaps providing some guidance. Indie Hackers' approach to this is lovely. Once the user has signed up, they encourage the user to:

+ Follow some other users to kickstart their community;
+ Add a name, city, etc..

The short bio screen is particularly nice. The copy provided is a touch humorous, but it clearly points users in the right direction and – just as importantly – gives them a sense of how much content works.

THERE'S MUCH MORE ON ENPTY STATES



Further Reading
---------------

There are many great publications, offline and online, that will help further underpin your understanding of user journeys. I’ve included a few below to start you on your journey.

+ Alexander Handley’s [User Flow Is the New Wireframe](https://uxdesign.cc/when-to-use-user-flows-guide-8b26ca9aa36a) – for UX Collective – is well worth reading. Its emphasis on the different resolution of design deliverables (created at low-, mid- and high-fidelity) is well worth noting.

+ Donna Lichaw and Eva-Lotta Lamm’s [The User’s Journey: Storymapping Products That People Love](https://amzn.to/2WFmIig) is an excellent guide to user journeys, positioning users – as the heroes – at the heart of your product’s story.

+ Lastly – although its printing and production values leave a lot to be desired – Peter W. Szabo’s [User Experience Mapping](https://amzn.to/2FdVlWz) is a very comprehensive overview of user story maps and customer journey maps.



About the Author
----------------

![Christopher Murphy](images/overview/mr-murphy.png)

### Christopher Murphy

[@fehler](https://www.twitter.com/fehler)

A designer, writer and speaker based in Belfast, Christopher mentors purpose-driven businesses, helping them to launch and thrive. He encourages small businesses to think big and he enables big businesses to think small.

As a design strategist he has worked with companies, large and small, to help drive innovation, drawing on his 25+ years of experience working with clients including: Adobe, EA and the BBC.

The author of numerous books, he is currently hard at work on his eighth, ‘Designing Delightful Experiences’, for Smashing Magazine and ninth, ‘Building Beautiful UIs’, for Adobe. Both are accompanied by a wealth of digital resources, and are drawn from Christopher’s 15+ years of experience as a design educator.



---



I hope you find this resource useful. I’m also currently working on a book for the fine folks at [Smashing Magazine](https://www.smashingmagazine.com) – ‘Designing Delightful Experiences’ – which focuses on the user experience design process from start to finish. It will be published in late 2019.

You might like to [follow me on Twitter](https://www.twitter.com/fehler) for updates on this book and other projects I’m working on.

Copyright · Mr Murphy + Adobe  
Design and Build · Dan Gold + Little Thunder