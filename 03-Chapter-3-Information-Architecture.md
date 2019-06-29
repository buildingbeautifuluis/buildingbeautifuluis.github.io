Chapter 3: Information Architecture
===================================

<!-- 3,011 Words -->

**As I’ve noted in the [overview](https://github.com/fehler/building-beautiful-uis/blob/master/00-Overview.md), this is a work in progress and I’m sharing it here in draft form. It isn’t finished, but I hope it provides some value as I finalise all of the chapter content.**

<!--

I’ve used a naming convention in Chapters 2–4 (and later) that’s as follows:

Objects → Elements → Components → Pages → Flows

The ‘Components’ in the new XD are what I call ‘Elements’. Gah! I’m going to go back over everything and change to:

Objects → Components → Modules → Pages → Flows

Modules, or Units? (I prefer Modules.)

-->



Table of Contents
-----------------

+ [Section 1: Elements → Components → Pages](#)
+ [Section 2: Typography at the Page Level](#)
+ [Section 3: The Importance of a Clear Visual Hierarchy](#)
+ [Section 4: Composition and Grid Systems](#)
+ [Section 5: Iconic Layouts and Blockframes](#)
+ [Further Reading](#)



Summary
-------

In an age of information overload, **establishing a clear information architecture (IA) is more critical than ever**. In this chapter, **I’ll explain what information architecture is, introduce the idea of visual hierarchy, explore the role that typography plays, and introduce grid systems as a backbone for visual alignment and harmony**.

In short: This chapter's all about IA.



Overview
--------

When we design an interface, it’s important to put some thought into our overall information architecture (IA). Information architecture is focused on **organising, structuring and labelling content in a way that eases users through the overall information presented**.

Our goal as designers is to:

1. **help users find the information they’re looking for**; and

2. **enable them to complete the goals they intend to undertake**.

In order to do this, it’s important to put some thought into **how the different elements fit together as part of the overall system** within which they exist.

To design an effective information architecture, **we need to consider the relationship of elements at a range of different levels**:

Component Level
Page Level
Site / App Level

Our components – the content elements that make up our pages, that I explored in the preceding chapter – **will have their own information architecture that we need to consider at the micro-level**.

Similarly, pages will have a page-level information architecture, that relates to the context in which they’re consumed, for example, in a browser in a desktop or mobile context. **How pages are laid out, with a considered hierarchy, will help users achieve their goals.**

At the macro-level, we need to **consider the overall information architecture of the site or application we’re building**. We need to **ensure that we organise our information clearly**, ensuring users understand the overall structure of the site and enabling them to build a ‘mental model’ of how everything is organised.



Section 1: Elements → Components → Pages
----------------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


<!--

It feels like there should be a part that comes before 'Elements → Components → Pages' that deals with the overall concept of signposting. That could use the following, airport content.

-->

As UI designers, our role is to orchestrate the elements on a page and impose some order on it. Whether that page is in a desktop-, a mobile- or a wrist-based context we need to take different elements, components, and groupings of content (words, imagery, video…) and organise it.

This is where information architecture (IA) comes in.

Everything we design is created from content. When we design a UI, we take this content and organise it, enabling the user to navigate it, quickly and easily finding their way.

Our job is to consider the hierarchy of information on a page – and the different pages that are connected together and ensure everything is clearly signposted.


This is a new Part 1, it's about building up from the elements and components we explored in the previous chapter.

Show an example of how a page is built up:

+ Element
+ Component
+ Page

Mention design systems (reiterating what I said in the preceding chapter).

This chapter's about IA so focus less on the flows for now and focus on the IA.

Analysing how different interfaces work at different levels of information hierarchy (Elements → Components → Pages) will give you a clearer understanding of how to manage your information architecture.

There's an information architecture at each of these resolutions: components will have their own information architecture, as will pages, which are often created from components.

For example, a simple profile card might have three groupings of information:

+ User Profile
+ Social
+ Tags

MENTION THE XD EXAMPLE FILES


### Cards

<!-- If I'm going to do this, show something else also. Or can cards be the main focus. After all, Material Design is a further development of the cards metaphor from before and we're seeing this model crop up a lot now. -->

**Reword this. (See content below.)**

Focus on the adaptability aspect, i.e. cards can be used as components that can be **reorganised** depending upon screen real estate. For example, in a desktop context we might lay out our cards in a grid, in a mobile context (tablet or phone) – where space is at more of a premium – we might vertically stack cards in a layout that users can scroll down.

A card is a component that’s constructed from smaller elements, for example typographic content, buttons and other elements.

Cards can be used to organise and display logical groupings of information, for example:

+ User Profiles
+ Login Components
+ Content Modules
+ Video or Audio Players
+ Payment Information
+ Etc.

In certain applications cards can also be dragged, dropped and re-ordered. For example, Trello….

> As an information container, cards hold all elements such as text, rich media, buttons, etc. Based on this contents, it can adapt its size to that of different devices and screens, balancing user interface and user experience.
> 
> Compared to traditional UI design, a simple but intuitive advantage of card UI is that it provides a more personalized user experience, making the entire interface more clear, balanced, aesthetically pleasing, simple and stylish with good usability.
> 
> https://www.mockplus.com/blog/post/card-ui-design

### Show and Tell: Dribbble

Look at Dribbble as an example. Cards are used to gather the content that comprises posts:

+ Imagery
+ Likes
+ Comments
+ Views
+ Buckets

This design – which has stood the test of time – still functions well and works in both a desktop, mobile and native context.

SHOW A MARKED UP VERSION WITH ANALYSIS, ASK FOR PERMISSION

<!-- This is ending on pages, so it's logical that pages come next. -->



Section 3: Typography at the Page Level
---------------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


I won't be covering typography in depth – that could be a standalone book in and of itself – what I'll cover are fundamental principles that you’ll find useful for managing information architecture.

All interfaces will feature language somewhere. In addition to developing an understanding of language, it’s important to develop an awareness of fundamental typographic principles.

As the digital landscape evolves, offering us ever more exciting opportunities – and ever more information – well-structured information design will become more critical than ever. We need to make sense of the sea of information that surrounds us…

As designers we need to consider the role that typography plays…

**IMG: Unstructured Content and Structured Content**

**CAPTION: On the left is a typical piece of unstructured content… On the right, typographic hierarchy helps to tease out meaning.**

In the above example – an exercise from 2008 – I added some information hierarchy for a DVD release being designed by [Alorenz, Vienna](http://www.alorenz.net).

The brief was to look at the information hierarchy and the relationship between the different elements, considering how a minimal typographic palette – coupled with typographic scale and color – could be translated from a physical DVD release to an accompanying website.

Using a range of HTML elements:

+ Headings (h1-h3)
+ Classes (.highlight, .smallprint and .copyright)
+ Paragraph Styles
+ Horizontal Rules
+ …

All of the above are at the service of **content hierarchy** through considered semantic markup.

A decade has passed since I designed the above example and yet – thanks to HTML's longevity – I would change very little, other than to use HTML5 elements like `<small>` instead of classes, where new elements made this possible. The information hierarchy remains the same.

Typeface choice, in this instance, wasn't important (although Georgia, designed by Matthew Carter, is a beautifully designed typeface). What was important was the use of the different typographic elements at a designer's disposal - scale, tone, colour, space, rules… - to establish a clear information hierarchy. Using typography to tease out the underlying meaning of the elements.


### Macro-Typography

Perhaps typographic scales? Certainly the relationship between different elements… headings, paragraphs and other semantic components, for example, blockquotes and footnotes… (Footnotes isn't really a mobile thing…)


### Micro-Typography

Detail in typography… Is that a bit much for this?



Section 3: The Importance of a Clear Visual Hierarchy
-----------------------------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


When we’re in an airport, we find our way around by following the signage provided. This ‘wayfinding’ material allows us to navigate through the airport to find our desired destination.

Designing an interface is similar. Our goal is to ensure the user can get from A to B (both within a page and between pages), ideally in the quickest way possible.

Visual hierarchy is critical for this…



We can create hierarchy in a number of ways: through the use of scale or weight; color or tone; or alignment. Hierarchy is important for taking complex, information-heavy material and ordering it so that the user isn’t overwhelmed by the interface.

PICTURE: Clear Visual Hierarchy

**Caption: Above, clockwise from top-left: 1. no hierarchy; 2. hierarchy through scale or weight; 3. hierarchy through color; 4. hierarchy through alignment.**

We can combine these approaches – for example, using scale and colour – to further tease out the hierarchy of our information, but we don’t need to. **Often the best designs are the simplest, the important point is to ensure that we’ve used the principles of design to establish a clear visual hierarchy.**

PICTURE: GOV.UK

**Caption: GOV.UK uses a clear information architecture to ensure users can find out what they need to quickly and easily.**

GOV.UK is a great example of a clear information hierarchy, where a great deal of information is ordered systematically.

At a macro level, the page is clearly organised with prominent, but understated branding (1) at the top of the page. A breadcrumb trail underneath the branding (2) provides users with a clear sense of where the user is in the overall hierarchy:

Home > Money and Tax > Income Tax

The interface is clearly focused on the ‘job to be done’, in this case finding out about how to claim tax relief for work-related expenses (3). Finally, a ‘Contents’ list at the top of the content (4) allows users to jump to the information they need quickly and easily.

The hierarchy is focused on the user’s needs and, as such, it’s no surprise that GOV.UK has won numerous design awards.

The design might look simple, but it’s this simplicity that lies at the heart of the design’s success. This focus on creating a user interface that is uncluttered and highly functional is encapsulated in GOV.UK’s Government Design Principles, specifically Principle 4:

Do the hard work to make it simple.

At GOV.UK users have a clear mental model of the site that they’re using because the information architecture is clearly articulated through:

the site’s simple, yet clearly organised structure;
the use of breadcrumb navigation, which provides a clear sense of where a user is within the site; and
the clear use of language, coupled with an uncluttered design.

From a user interface perspective the site might appear simple, but – as I’ve noted above – that simplicity is driven by users’ needs.

It might be tempting to look at this design and imagine ways in which we could add to the interface – perhaps using animation or other ‘enhancements’ – but this would be missing the point, which is to start with user needs and enable users to satisfy these needs as quickly as possible.

PICTURE: Things 3

**Caption: Things – an award-winning personal task manager – demonstrates the importance of a clear information architecture in a mobile context, where space is at a premium.**

Things, an award-winning personal task manager, is a great example of the importance of establishing a clear information architecture in a mobile context, where space is at a premium.

In the iOS app (left) pages are clearly organised: the user’s tasks for ‘Today’ (1) are clearly listed on the page. Tasks that haven’t been allocated to an established category (2) are listed first. Tasks that are categorised follow (3, 4) with a simple pie chart (4) showing the user’s progress through a category. Despite the limited amount of space, everything is organised clearly communicating a maximum of information.

In the watchOS app (right) – where space is even more premium – the same list of tasks is listed with a micro-chart (5) showing how many tasks have been achieved and with a clear list of tasks (6) that can be scrolled through to access the rest of the tasks.

In both examples above – regardless of the context: desktop, mobile or wrist – the focus is on establishing a clear visual hierarchy to help users navigate the information presented.


### CRAP

How our elements are arranged in relationship to each other is also important. As the number of elements in our interfaces increases, we can use the relationships between elements to organise our information architecture. We can organise our components in a variety of ways:

+ Repetition
+ Symmetry / Asymmetry
+ Groupings
+ Proximity

PICTURE: Relationships (Repetition, Symmetry / Asymmetry, Groupings, proximity.

**Caption: Caption goes here.**

This content will draw from the book Universal Principles of Design, which is absolutely required reading. I’ll cover the principles of repetition, symmetry / asymmetry, groupings and proximity as they’re important for organising information in interfaces.

ADD 'UNIVERSAL PRINCIPLES OF DESIGN' TO FURTHER READING.



Section 4: Composition and Grid Systems
---------------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


<!-- LOTS OF MATEJ LATIN STYLE CONTENT HERE -->

We can also put some thought into how our interface elements are arranged compositionally in relation to the page. Different pages – depending upon context (desktop, mobile, wrist…) – will lend themselves to different compositions.

In a desktop context, for example, we might use white space to draw the user’s eye towards critical information. In a wrist based context – where space is at a premium – we need to orchestrate our content in a different manner.

There are whole books written about this. Don't re-invent the wheel, rather signpost readers to helpful content.



Section 5: Iconic Layouts and Blockframes
-----------------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


The idea for 'Iconic Layouts' is drawn from April Grieman's 1990 book 'Hybrid Imagery: The Fusion of Technology and Graphic Design'. The world has moved on a great deal since 1990, but one idea that Grieman explored has stuck with me over three decades later…

Grieman referred to her initial digital sketches – for Workspirit Magazine (for Swiss furniture manufacturer Vitra) – as the 'iconic' first stage. As she put it:

> A surprise in producing [the] initial miniature version was that I could see the whole magazine as a kind of 'iconic texture', free from detail.

I've used this approach ever since. By creating 'iconic' layouts – very small layouts, focused on scale, color and tone, the hierarchy of pages can be grasped at a high level (a birds' eye view).

This approach allows you to establish page layouts and get a feel for their flows.

/* Insert blockframes here? */

If I put blockframes in here, I need to emphasise their role. They're not about designing in the absence of content (which is never a good idea), they're about getting a feel for the overall page and its content hierarchy.

Expand on this by referencing the Medium article:

https://medium.com/ux-power-tools/blockframing-and-31-free-sketch-ready-layouts-using-auto-layout-by-anima-app-1be039007ecf

By Jon Moore. (Also give Jon Moore credit for his UX Power Tools downloadables.)



Further Reading
---------------

There are many great publications, offline and online, that will help further underpin your understanding of information architecture. I’ve included a few below to start you on your journey.

+ Donna Spencer’s [A Practical Guide to Information Architecture](https://amzn.to/2IkHeRl) – whilst sadly no longer available in print – is, as its title suggests, a practical guide to information architecture. Originally published by Five Simple Steps, I’d strongly recommend buying the Kindle book, which provides a thorough overview of the principles of managing and orchestrating content.

+ usability.gov has an excellent overview of [Information Architecture Basics](https://www.usability.gov/what-and-why/information-architecture.html) that’s well worth reading. The site is an excellent resource that – whilst primarily focused on design for government – offers a wide range of resources that are applicable beyond design for the public sector.

+ Finally, Steve Krug’s [Don’t Make Me Think, Revisited: A Common Sense Approach to Web Usability](https://amzn.to/2Xa5DS3) is a timeless book that I’d highly recommend. Whilst focused on usability, it contains a wealth of insights that are applicable when considering your overall information architecture.

<!--

Maybe replace Steve Krug's book with Josef Muller-Brockmann’s 'Grid Systems in Graphic Design': https://amzn.to/2x8cD33

Reorder: JMB, usability.gov, Donna Spencer…

-->



About the Author
----------------

![Christopher Murphy](images/overview/mr-murphy.png)

### Christopher Murphy

[@fehler](https://www.twitter.com/fehler)

A designer, writer and speaker based in Belfast, Christopher mentors purpose-driven businesses, helping them to launch and thrive. He encourages small businesses to think big and he enables big businesses to think small.

The author of numerous books, he is currently hard at work on his eighth, ‘Designing Delightful Experiences’, for Smashing Magazine and ninth, ‘Building Beautiful UIs’, for Adobe. Both are accompanied by a wealth of digital resources, and are drawn from Christopher’s 15+ years of experience as a design educator.

As a design strategist he has worked with companies, large and small, to help drive innovation, drawing on his 25+ years of experience working with clients including: Adobe, EA and the BBC.



---



I hope you find this resource useful. I’m also currently working on a book for the fine folks at [Smashing Magazine](https://www.smashingmagazine.com) – ‘Designing Delightful Experiences’ – which focuses on the user experience design process from start to finish. It will be published in late 2019.

You might like to [follow me](https://www.twitter.com/fehler) on Twitter for updates on this book, that book and other projects I’m working on.

**Copyright · Adobe XD + Mr Murphy Ltd.**