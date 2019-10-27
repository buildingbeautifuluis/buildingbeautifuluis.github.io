---
chapter-number: "04"
title: "Getting From A to B"
layout: chapter
opening-text: "<p class='text--warning'><strong>This is draft content.</strong> I’m working on this chapter just now (~27 October) and I’ll be releasing it section by section over the next few days.</p>

<p>With our pages built, <strong>we need to focus on the flows that users take through the user interfaces we design</strong>. In this chapter, I’ll explore designing user flows, stressing the need to <strong>consider flows in different contexts: page-to-page, anchor to anchor and state-to-state</strong>. In short: I’ll explore the idea of getting from A → B, <strong>ensuring our users are guided by our user interface</strong>.</p>

<p>I’ll also consider <strong>a number of critical flows that need to be considered when you’re designing digital products</strong>, including: <strong>‘onboarding’</strong>, when a user is taken through the initial screens of an application; and considering <strong>‘empty states’</strong>, when a user is confronted by an application that, at that moment, contains no content.</p>"

table-of-contents:
  - section: "1"
    section-title: "Maps and Flows"
  - section: "2"
    section-title: "Wireflows"
  - section: "3"
    section-title: "Pages, Anchors and States"
  - section: "4"
    section-title: "Considering States"
  - section: "5"
    section-title: "Onboarding Users"
---



Draft Content
-------------

Notes for Jordan and Kyle….

The above section titles are loose (worked through 225–7 October). I’m not 100% sure about them and they may need top be re-ordered, but they’ve given me a framework to work to and I’ve started blocking out the content.


Section Overviews
-----------------

Most of this overview is thought through and is getting there. Here’s a short pre-overview of what each section is about and includes. As usual, there are five sections with three sub-sections each.


Section 4.1: Maps and Flows
---------------------------

+ 4.1.1: A Bird’s Eye View of Everything
+ 4.1.2: Site Maps
+ 4.1.3: Flowcharts


### A Bird’s Eye View of Everything

This section kicks off with a high level view so I can set the scene: **As designers we need to consider flows and move beyond considering page layouts in isolation.**

Even if you’re building a single page site, you’ll need to consider flows. For example, every chapter of this book has sections and sub-sections that we can fast-forward to, using ‘anchors’. **If you’re building a more complex website or application, the flows will be, naturally, more complicated.**

We need to plan these flows and map out the logic.

Establishing a bird’s eye view allows you to **consider pages as a set of relationships** where one page (or part of a page) links to another page (or part of a page).


### Site Maps

Site maps are useful for establishing the scope and complexity of a website, giving us a view of how everything is organised. With a site map in hand, we can then use this to map out the navigation.

**I didn’t really touch on high-level navigation in Chapter 3, so I think there should be a focus on navigation in the site maps section.**


### Flowcharts

Finally, in the flowcharts section, I’ll introduce the idea of flowcharting everything out, especially when we’re building applications. We need to work out the logic and how it impacts upon the user flow and flowcharts are useful for this.

I think for this subsection, I’ll show some examples of my #ixdbelfast students’ work mapping out flows.


Section 4.2: Wireflows
----------------------

+ 4.2.1: Wireframes + Flowcharts = Wireflows
+ 4.2.2: Wireflow Shorthand
+ 4.2.3: Wireflow, Step by Step


### Wireframes + Flowcharts = Wireflows

With the scene set in the first section – which is more high-level focused – this section will dive into the details. I’ll introduce wireflows, explaining what they are and how we can use them to plan out routes through content and information.

With wireframes introduced in Chapter 3 and flowcharts introduced in Chapter 4 (above), the following equation should make sense:

	Wireframes + Flowcharts = Wireflows

Before I show examples of how we might use wireflows, I’ll explain that there are a number of different terms in use, all for broadly the same thing: wireflows, user flows, UI flows, IX flows and, occasionally, and incorrectly, customer journey.

I prefer wireflow because I think the equation above makes sense and, not insignificantly, Nielsen Norman Group use the term and I respect their thinking.


### Wireflow Shorthand

With wireflows explained, I’ll introduce Ryan Singer’s shorthand for designing UI flows:

> Flows are made out of individual interactions. A screen offers some possibilities and the user chooses one. Then something happens, and the screen changes. It’s an ongoing conversation.

First published in 2009, a decade later it still holds true and is a useful means of understanding how to consider flows. I’ll take Singer’s user flow and map out some wireflows verbally, then translated into a wireflow.


### Wireflow, Step by Step

Finally, I’ll run through a wireflow step-by-step. This will take a process: buying a specific book on Amazon (or selecting a course on designtrack?) and map it out.


Section 4.3: Pages, Anchors and States
--------------------------------------

+ 4.3.1: Page to Page
+ 4.3.2: Anchor to Anchor
+ 4.3.3: State to State


### Page to Page; Anchor to Anchor; State to State

I’m unsure if this section should come before the wireflows section (preceding). The reason this is here is the final of the three – states – paves the way for the next section exploring states (empty states, error states, etc.).

Essentially this section maps out different levels of flow:

+ page-level, where we move from one discrete page to another;
+ anchor-level, where we jump between sections of a page; and
+ state-level, where we move between states (e.g. modals).

I’ve not broken this down further as I think the list above is self-explanatory, if you want to know more, I’ll happily expand upon it.


Section 4.4: Considering States
-------------------------------

+ 4.4.1: Considering States
+ 4.4.2: Empty States
+ 4.4.3: Error States


### Considering States

This section will emphasise the need to design for different states. I’ll open with an overview of different states before focusing in on Empty States and Error States, as I think these are particularly important. (I’ll return to the empty state in the final section on onboarding, showing an example: Cultured Code’s Thing 3.)

One thing to emphasise here is the importance of feedback, especially when we're designing applications. The user interfaces we're building are becoming ever more complex, as such it's important to ensure the user is provided with feedback throughout their usage.


### Empty States

We need to consider what screens look like when they have no content to display. This might be because:

+ the user is only using the application, or this screen (part of the application), for the first time; or
+ the user has performed an action that has resulted in no content being returned to them.

We need to consider how we help users, prompting them to take action or giving them guidance.


### Error States

Finally, I’ll stress the need to consider error states. I’ll outline typical error scenarios that we need to design for:

+ Connectivity Errors
+ User Error

I’ll be stressing the need to write helpful error messages, as per my
‘When things go wrong…’ Notist slidedeck that emphasises the need to write helpful error messages: 

	https://noti.st/mrmurphy/OoZel5

Essentially a checklist:

+ Is the error clearly defined and written in a way that’s easily understandable by the user?
+ How can the user recover from the error?
+ Above all: What can we do as designers to prevent this error from happening again in the future?


Section 4.5: Onboarding Users
-----------------------------

+ 4.5.1: A Virtual Unboxing
+ 4.5.2: Prompting Action
+ 4.5.3: Onboarding Models


### A Virtual Unboxing

In the first section, I’ll introduce what onboarding means. Google’s description of onboarding as ‘a virtual unboxing’ is useful, and their Material Design guidelines are worth reading:

> Onboarding is a virtual unboxing experience that helps users get started with an app.

	https://material.io/design/communication/onboarding.html

I’ll be taking this digital / analogue analogy and be pushing it further, emphasising the role that unboxing plays in designing for delight.

Essentially, we need to get the user engaged and excited about the application, emphasising: the experience ahead, how the user might use the app (e.g. InVision (I’ll need to find an alternative!) offer three different scenarios).

I don’t think I’ll be able to use InVision, given this is an Adobe book, perhaps I could look at XD’s onboarding and the way it offers an app that you can open and explore, essentially **educating you how to use the application**.

UI Movement have a useful roundup of onboarding patterns, here:

	https://uimovement.com/tag/onboarding/


### Prompting Action

With onboarding explained, I’ll explore how we can engage users beyond onboarding, e.g. considering next steps.

This will focus on the twin benefits of: education, subtly showing the user what's possible; and using example content (like Agenda and Things 3) to show the user what's possible.


### Onboarding Models

Google’s Material Design guidelines list three types of onboarding model <!-- Looking at the first two, they’re a little confusing and very similar. -->:

+ Self-Select
+ Quickstart
+ Top User Benefits

I’m considering making this final section a case study, like the Dribbble Case Study in Chapter 3, that focuses on one application. I’ve taken screenshots, step-by-step of Cultured Code’s Things 3 onboarding and I think it would make a great case study that would round out the chapter well.


**EVERYTHING BELOW HERE IS SCRATCH CONTENT TO BE FOLDED INTO THE ABOVE**




Overview
--------

The following is rough.

**In this Chapter I’ll explain the idea of moving from A → B, i.e. that we are designing flows and we need to consider how users move through those flows, guided by our user interface.**

Pages don’t exist in isolation: users arrive at pages from **somewhere** and, when they’re on a page they’ll be moving **somewhere** if they want to take some form of action to achieve a goal.

So, the above has two parts that I need to consider:

1. Flows and how pages are joined up. So, from that perspective, I think I should take the line that over chapters 2–4 I’m continuing to build the complexity.
2. The idea of providing guidance through clear navigation. That’s currently missing from the structure, I need a section on ‘Wayfinding’, or similar.


Maybe Section 1 is site maps and flow charts. It’s a high level birds eye view. I establish the idea that websites or applications – unless they’re a single page site (which I’ll also explore in this section) – are collections of pages, that we need to spend some time organising as designers.

Spending time getting the high-level picture mapped out allows you to start thinking about pages **as relationships**.

Unless you’re building a single page site – in which all the functionality is handled within a page – you’ll need to consider how pages **fit together**.



Section 1: Maps and Flows
-------------------------

+ 4.1.1: A Birds Eye View of Everything
+ 4.1.2: Site Maps
+ 4.1.3: Flowcharts

<!--

Do I also talk about customer journeys here? Or is that too UX focus (as, in the truest sense, it includes all touchpoints and discovery via offline channels, e.g. Twitter, etc.).

also think about the relationship of this mapping to the design of navigation and wayfinding patterns.

There might need to be a subsection on wayfinding patterns we can use, including:

+ Navigation Patterns (Top, Footer);
+ Breadcrumb Trails (Where am I?); and
+ Shopping Cart Flows

Essentially make the point that often users are moving through content and – just like they’d need wayfinding signage in an airport – so, too, they need it in this context.

-->

### A Birds Eye View of Everything

This is an introduction that explains we’re moving from separate pieces of the jigsaw to the jigsaw itself. Considering how it fits together. **Don’t get lost in the detail (yet), keep it high-level.**

Pages don’t exist in isolation, so as designers we need to consider the idea of **pages as relationships**, considering how pages within a site or an application fit together.

One way to do this – and a helpful way of starting to think about navigation – is to consider site maps. Bridge to next section.

I need to explain that we need to consider how our pages fit together so that users can build a picture of how an app works so they can get things done.



### Site Maps

Mention that I touched on site maps in Chapter 3, when I explored information architecture.

Site maps are useful for providing an overview of everything in a site. They’re also helpful for establishing the scope of a site, encompassing all of its different pages.

As NN_g summarise: “[Site maps provide a] _**_visual representation of the information space_**_in order to help users understand where they are and where they can go. /This text isn’t really NNg’s any more, it’s more mine._

Site maps are useful in the early stages of the design process to help to provide a visual overview of a site’s or app’s main areas in a single, glanceable deliverable.

By visualising the overall information architecture, site maps can prove useful for mapping out navigation… enabling us to consider the key sections of a site and how information is organised.

IMAGE: Mr Murphy site map, outlining the overall scope of the site’s main categories… Perhaps this is an animated GIF (site map plus home page mockup?).

Site maps (above) allow us to map out the overall information space, identifying key sections and clusters of content. Spending some time building out a site map also allows us to establish the overall scope of what we’re building (which is useful from a project management perspective).

site map's main benefit is to give users an **overview of the site's areas in a single glance**. It does this by dedicating an entire page to a visualization of the information architecture (IA). If designed well, this overview can include several levels of hierarchy, and yet not be so big that users lose their grasp of the map as a whole.


### Flowcharts

Flowcharts are useful for… etc.

I need to explain here what the difference is between a site map and a flow chart. A flow chart allows us to map a user’s route through information, getting a feel for how users get from A to B.

Flowcharts are also useful – particularly when we’re building applications – for identifying choices users might face and the impact that those choices have on the user’s passage through content (pages).

In the last chapter, I explored the design of sign in and sign up patterns. If we consider this from a flowchart perspective we see that a user is faced with choices:

* sign in to the application, if the user already has an account; or
* sign up for an account, if the user hasn’t already undertaken this step in the process.

Flowcharts are important for understanding the logic that underpins applications, allowing us to map out an application at a high level and flowchart the various routes through it.

Using site maps and flowcharts hand-in-hand we can begin to map out the overall architecture of a website or application at a high level, allowing us to establish a birds eye view of what we’re building.

At the end of this section I need to bridge into a more zoomed in view as I begun to explore UI flows, which are more detailed views of a user’s interactions.

So, the point I want to stress here is that site maps and flowcharts are **high level**, providing a macro (zoomed out) view of the pages within an interface, but we also need to consider a micro (zoomed in) view.

This is where wireflows come into play.



Section 2: Wireflows
--------------------

+ 4.2.1: Wireframes + Flowcharts = Wireflows
+ 4.2.2: XXXX
+ 4.2.3: Wireflow, Step by Step


### Wireframes + Flowcharts = Wireflows

With the big picture covered in Section 1, it’s time to dive a little deeper into the details of flows. In this section, I’ll zoom in a little and explore how **we can use wireflows, which I’ll introduce shortly, to map out detailed flows as a user performs some form of action**.

Whilst wireframes and flowcharts are useful in the planning stages of the design process, they both have limitations:

* Wireframes provide us with a detailed view of a single page, which is useful for designing layouts. However, they lack the context of flowcharts, tending to focus on pages in isolation.
* Flowcharts provide us with an abstracted overview of multiple pages, which is useful for documenting complex workflows. However, they lack the page-level detail of wireframes.

We can combine wireframes and flowcharts – giving us the best of both worlds – to create a detailed overview of a series of user tasks. These, unsurprisingly, are called wireflows:

**Wireflow** = **Wire**frame + **Flow**chart

Wireflows give us the benefit of both wireframes (providing **page-level** information) and flowcharts (providing **flow-level** information), enabling us to quickly map out our users’ interactions.

It’s worth noting that there are a number of different naming conventions for these deliverables, with wireflows variously referred to as:

* User Flows
* UI Flows
* Task Flows 
* …

I find the term wireflow easier to remember, however, given its origin from the terms wireframe and flowchart.

Wireflows are particularly useful for documenting desktop and mobile applications that **don’t feature multiple, unique pages, but instead feature core pages that change layout and content dynamically**, based on a user’s input and interactions.

[NN/g](https://www.nngroup.com/articles/wireflows/):

> …an alternative deliverable called **wireflow** has emerged as a solution to these issues, used to show designs in the context of common user tasks.

[User Flow Is the New Wireframe](https://uxdesign.cc/when-to-use-user-flows-guide-8b26ca9aa36a)


/* Notes below here… */


### 4.2.2 NEEDS A NAME

A couple of useful reference points:

1. Ryan Singer’s [shorthand][RS] (2009); and
2. UX Misfit’s [UI Flows][UX] article.

[RS]: https://signalvnoise.com/posts/1926-a-shorthand-for-designing-ui-flows
[UX]: https://uxmisfit.com/2018/01/15/ui-flows-tool-for-better-communication-with-clients-and-team/


Ryan Singer first…

This diagram, by Ryan Singer, Basecamp, is a useful shorthand...

A screen offers some possibilities and the user chooses one. Then something happens, and the screen changes. It’s an ongoing conversation.

I think Singer’s metaphor of a conversation is a useful one, essentially as designers we’re mapping out the possibilities for these conversations, allowing for a number of conversational avenues...


UX Misfits has a useful overview of terms:

* Trigger Nodes
* Decision Nodes
* Loops
* Etc.

The above could be expanded out and made my own with [a diagram like this](https://uxmisfit.com/wp-content/uploads/2017/12/ui_flows_sample_squid-1024x576.png).


### Wireflow, Step by Step

This is a walkthrough of an example, applying the theory above with typical content we might encounter.

Flow, step by step:

1. Define user flow
2. Create task flow
3. CreateUI FLOW (NN/g call this a wireflow…)

1. Start with the users goal…

This is a quote from the user flow article re-write it

> A definition of the flow you are designing is what separates it from a sitemap or process map. … I like to define the user and their goal, but you could use a requirement, story, stage of a user journey  

For example:

User: Bibliophile
Goal: Search for book. (Adding a little detail allows you to test this, e.g. search for peter drucker’s ‘managing oneself}…

Now we have a user and a goal, we can begin to map it out with a user flow. _One thing to note: I should be consistent with use of flow and UI flow_

Alternatively, return to the Dribbble case study from Chapter 3. Perhaps the best way to explain this is by returning to the case study I used in Chapter 3, where I analysed Dribbble’s different patterns and pages...

Starting with the profile page…

1. I click on the profile pattern and I’m taken to, e.g. the portfolio of the user...
2. I click on an image, and a modal appears…
3. Etc.

Do these as little illustrations where I show multiple small screenshots on an illustration.

\* One thing that might be worth remembering is drawing attention to the last part of the Objects → Flows equation.

Mapping out routes through everything. Kick off with flow diagrams to map out the overarching logic.

Talk about the use of user stories to drive different scenarios that – collectively – can be used to piece together an overall flow / map.





Section 3: Pages, Anchors and States
------------------------------------

+ 4.3.1: Page to Page
+ 4.3.2: Anchor to Anchor
+ 4.3.3: State to State


This section takes us through: Page to Page; Anchor to Anchor; and State to State.

* A user moves from one page to another page;
* A user can move from one part of a page to another part of a page; or
* we can use modal screens – on top of pages - to take a user through stages…

Somewhere (here?) I need to talk about the fact that we aren't always moving from one discrete page to another. Often – and this is increasingly the case – users take actions **within** an element on a page.

For example, Apple's Apple Trade In process – which I showed in Chapter 3 – takes users through a series of screens that dynamically refresh **within the same on-screen modal dialog**. It might be subtle, but this is a different flow to a multi-page flow.

In the Apple Trade In case, the user isn't moving from one page to another, rather the content of the modal dialog is changing, depending upon where the user is during the process of adding the required information.


### Page to Page

At the simplest level a user can move through a website page to page. Returning to the Dribbble case study I explored in Chapter 3…

Home → Profile → Project

SHOW THIS AS SCREENSHOTS: Home → @fehler → Glyph

### Anchor to Anchor

Single page sites and applications where a user achieves everything they need to achieve by moving between a page’s different sections, e.g. Matej Latin’s UX Buddy site… (or this site).

Clicking on the table of content on this page scrolls the user from the ToC to the section they’d like to jump to.

### State to State

The Apple menu we looked at in the previous chapter. The ussr is moving through a process that is organised through a series of modal dialogs.

SCREENSHOT

The screenshot should show some of the screens / modals that are used when the user wishes to trade in their phone and ascertain its value.







Section 4: Considering States
-----------------------------

Consider the order of these states… also, do I need more? There's an article I've read along the way that has tonnes. (Alternatively, focus on these three and signpost.)

1. Interaction States
2. Error States
3. Empty States

Stress also that error states – to be designed more helpfully – should lead to some form of action. Nielsen Norman usability heuristics: It's better to prevent and pre-empt errors.


### Empty States

<!-- This is scrappy. -->

After the user's completed the onboarding they may face an empty state… Explain what an empty state is. The following article is very good for empty states:

https://www.toptal.com/designers/ux/empty-state-ux-design

A useful empty state will let the user know what’s happening, why it’s happening, and what to do about it.

The following list provides some common situations in which an empty state might be encountered:

Setting up a new social media account, where – until you follow others – you have no connections.

A new Dropbox screen, when no files or folders have been created.

The resulting screen after completing all of your tasks in a to-do list manager.

Google, there's another article (Medium?) on empty states that has other examples.

I have screenshots of Grammarly's onboarding, which are worth showing because they've really considered the empty states problem. Things 3 also provide a sample project with instructions on how to use the app, again this is nicely considered. Lastly, Agenda does a great job of handling empty states, again by providing sample content.

Google has some great examples in their Material Design guidelines.

Empty states are important because – unless you consider them – your users can – confronted with a need to do something (and perhaps confused) – they may never return.

A better approach is to ease a user in, perhaps providing some guidance. Indie Hackers' approach to this is lovely. Once the user has signed up, they encourage the user to:

Follow some other users to kickstart their community;
Add a name, city, etc..
The short bio screen is particularly nice. The copy provided is a touch humorous, but it clearly points users in the right direction and – just as importantly – gives them a sense of how much content works.

THERE'S MUCH MORE ON ENPTY STATES



Section 5: Onboarding Users
---------------------------

+ 4.5.1.

+ Onboarding (Essentially teaching users how to use an app.)
+ Designing for action (empty states, prompts, navigation, avoiding errors, quick recovery when they do happen, etc.) /* The preceding is from Kezie and it needs rethought as some of this is covered in the preceding section. */


This section stresses the importance of onboarding.

Before we even get to the onboarding part of the journey, the user needs to have interacted in some way, perhaps:

Signing up (a flow that we also need to consider); or
Downloading an application, via the App Store or Google Play, for example.
With the sign up taken care of, we need to consider how we introduce the user to what's on offer. This is the perfect time to provide some guidance, for example:

Explaining how things work at a birds' eye level;
Walking users through various features; and
????
It's about telling the story of an application – web or native – before the user actually starts using it.

Explain what onboarding is and show some examples. The examples can be used to explain how a considered onboarding process helps users understand a user interface before they've actually started using it.

Apple is very good at this, with little modal overlays that explain what's happening and how to use things.

Show some examples, e.g. Things 3, which is nicely considered. I have lots of examples in my Components deck.

It's not about a sign up, for example, that will have happened before we get to this point. (Or we'll have downloaded an app, e.g.)





Closing Thoughts
----------------

Some closing thoughts here paving the way for the next chapter.



Further Reading
---------------

There are many great publications, offline and online, that will help further underpin your understanding of user journeys. I’ve included a few below to start you on your journey.

+ Alexander Handley’s [User Flow Is the New Wireframe](https://uxdesign.cc/when-to-use-user-flows-guide-8b26ca9aa36a) – for UX Collective – is well worth reading. Its emphasis on the different resolution of design deliverables (created at low-, mid- and high-fidelity) is well worth noting.
+ Donna Lichaw and Eva-Lotta Lamm’s [The User’s Journey: Storymapping Products That People Love](https://amzn.to/2WFmIig) is an excellent guide to user journeys, positioning users – as the heroes – at the heart of your product’s story.
+ Lastly – although its printing and production values leave a lot to be desired – Peter W. Szabo’s [User Experience Mapping](https://amzn.to/2FdVlWz) is a very comprehensive overview of user story maps and customer journey maps.