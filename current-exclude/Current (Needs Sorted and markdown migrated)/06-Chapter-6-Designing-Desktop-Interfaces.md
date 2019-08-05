Chapter 6: Designing Desktop Interfaces
=======================================

<!-- 1,214 Words -->

**This chapter isn’t worth reading just now (unless you want to get a feel for how I research and write). I hope to have it finished in August.**

**As I’ve noted in the [overview](https://github.com/buildingbeautifuluis/bbuis/blob/master/00-Overview.md), this is a work in progress and I’m sharing it here in draft form. The book isn’t finished, but I hope the draft content I’m providing has some value as I finalise the chapters.**



Table of Contents
-----------------

/*

**[4 August, 2019]** This is very rough and needs a few days to tidy it all up. This chapter also has content that needs to be added from Chapter 3, now that the focus of that chapter is on patterns (and less focused on pages at this level of detail).

That content includes:

+ The Importance of a Clear Visual Hierarchy
+ Typography at the Page Level
+ Composition and Grid Systems


Summary

I'll also explore the role that typography plays and introduce grid systems as a backbone for visual alignment and harmony. Lastly, I'll introduce a number of methods – iconic layouts, wireframes and blockframes – that are useful at different stages of the design process.



More scratch content:

**Typography**

Stress that this isn’t a typography course – that could be a standalone course in and of itself – but I am trying to introduce fundamental principles that you’ll find useful when you consider the design of a range of elements.

Stress that all interfaces will feature language somewhere. In addition to developing an understanding of language, it’s important to develop an awareness of fundamental typographic principles.



*/

+ [Section 1: A Different Interaction Paradigm](#)
+ [Section 1: The Importance of Clear Calls to Action](#)
+ [Section 1: A Hierarchy of Needs](#)
+ [Section 1: The Importance of Clear Calls to Action](#)
+ [Section 1: Anatomy of a CTA](#)

/*

This is worth reading:

https://gameanalytics.com/blog/mobile-desktop-ui-design.html

*/



Summary
-------

**In this chapter I'll focus designing interfaces in a desktop context. These might be native app, web app or websites. I'll explore how desktop interfaces differ from mobile interfaces and explore how mouse interfaces can be more granular.**



Overview
--------

Overview goes here…

SOMEWHERE IN THIS CHAPTER I NEED TO TALK ABOUT ART DIRECTION (OTHERWISE WHY MENTION ANDY'S BOOK. (AND I THINK I SHOULD MENTION ANDY'S BOOK, BECAUSE IT ENCOURAGES FOLKS TO BREAK OUT THE EVERYTHING LOOKS THE SAME MENTALITY. WE ARE DESIGNING **EXPERIENCES**, EVEN AT A UI LEVEL.





Section X: Typography at the Page Level
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


### Macro- and Micro-Typography

Perhaps typographic scales? Certainly the relationship between different elements… headings, paragraphs and other semantic components, for example, blockquotes and footnotes… (Footnotes isn't really a mobile thing…)

Detail in typography… Is that a bit much for this? No.



Section X: The Importance of a Clear Visual Hierarchy
-----------------------------------------------------

/* THIS COULD BE MERGED WITH 'Composition and Grid Systems' */

<!--

This is from a review of SuperHuman's onboarding. Look up Visual Anchors and show an example.

### Visual Anchors

Visual Anchors are UI elements that help your eyes easily locate where you need to look.

Side menus and bars are usually coloured or higher contrast so that you can scan the interface. They act as guard rails for your eyes.

-->


![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**

**MAKE SURE TO CROSS-REFERENCE TO CHAPTER 3 SO I DON'T COVER GROUND THAT'S ALREADY COVERED.**

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



Section X: Composition and Grid Systems
---------------------------------------

/* THIS COULD BE MERGED WITH 'The Importance of a Clear Visual Hierarchy' */

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


<!-- LOTS OF MATEJ LATIN STYLE CONTENT HERE -->

We can also put some thought into how our interface elements are arranged compositionally in relation to the page. Different pages – depending upon context (desktop, mobile, wrist…) – will lend themselves to different compositions.

In a desktop context, for example, we might use white space to draw the user’s eye towards critical information. In a wrist based context – where space is at a premium – we need to orchestrate our content in a different manner.

There are whole books written about this. Don't re-invent the wheel, rather signpost readers to helpful content.






Section 1: A Different Interaction Paradigm ← A bit of a shit title.
-------------------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


Designing for desktop contexts is fundamentally different to designing for the considerably more constrained space of mobile interfaces. When designing interfaces for desktop contexts we need to adopt a different approach, tailored to the medium.

Whilst a great deal of time may have elapsed since the first GUIs were designed in the late 60s and early 70s, desktop interfaces at their core have remained remarkably similar.

As Craig Hockenberry, at [Iconfactory](https://iconfactory.com) – a company that has been reimagining computer desktops since 1996 – puts it:

> [A great deal has] changed radically over the past 35 years, but it’s important to note what hasn’t changed during that same period of time. You still use a bitmap display for output with a keyboard and mouse for input.
> 
> The interaction model has changed, but only slightly. There are enhancements and refinements, like trackpads and gestures, but a Mac is completely usable using nothing but the basic concepts that were laid down by the original team.

Whilst Hockenberry is exploring Apple's macOS environment specifically, the underlying fact remains that the interaction paradigms in a desktop context have remained largely similar.

When we design desktop interfaces our users are primarily interacting with our interfaces using:

+ a mouse, which allows for more granular control; and
+ a keyboard, which allow for shortcuts to be used.

In addition to the use of a mouse and a keyboard users now – albeit in a limited manner – are beginning to have access to voice controls, using Siri on macOS, for example. All of that said, the fact remains, when we design desktop interfaces we can draw on tried and tested heuristics that have stood the test of time.


### White Space


There's more space in a desktop context, but that doesn't mean we should fill every ounce of space. A subsection on white space would be useful. I often see students filling space with content and with additional UI elements, e.g. navigation or other components and modules.

White space helps the user, it draws the eye to the content that matters. In addition to the need for hierarchy that I explored in Chapter 3, desktop contexts 

How a user reaches a button, for example, with a mouse… This is different in a desktop context. Tap targets can be smaller (button sizes, etc.) because users are employing a mouse, which is considerably more granular.

Similarly, users have a keyboard at their disposal and we can provide supplementary controls through the use of keyboard shortcuts.



Section 2: Heuristics? Fitt's Law? Psychology?
----------------------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


All of the above could go here, but there might be too much in this scratch list. I'll return to this shortly, when I've mapped everything out on Post-Its.



Section 3: A Hierarchy of Needs
-------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


This title needs to be reworked (and it might change), but I need to cover somewhere – in a way that doesn't overlap too heavily with the IA chapter – the idea that a desktop interface needs a clear hierarchy…

Think about what's presented up-front at the top of the page. Look at 'the inverted pyramid' from the world of journalism.

As we progress further down a page we get into detail. What's at the top, however, needs to tick the boxes that the user needs ticked.

Mention Maslow, it might also be worth mentioning Aarron Walter's thoughts on Maslow as reworked for the web.



Section 4: The Importance of Clear Calls to Action
--------------------------------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


Calls to Action (CTAs) definitely need to be considered somewhere in the book and I think this, or the preceding – mobile – chapter, would be a good place to cover them.

Talk about **a hierarchy of intent**. When a user looks at an interface they need to know what's the most important call to action.

As applications become more complex, this need to be teased out. Designing pages that have **too many CTAs** lead to confusion and inaction. Users can become paralysed by choice.



Section 5: Anatomy of a CTA
---------------------------

![Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Caption here.**


There's a great Medium article that Lee Munroe linked to a few years ago that undertakes an exhaustive analysis of CTA buttons.

This could be reworked for 2019, but a great deal of it still stands. A CTA button might appear to be a simple component, but in reality it's much, much more complex. When designing a CTA button, you need to consider:

+ The form of the button (size, shape, color…);
+ The content of the button (words); and
+ What feedback is presented when a user clicks the button.

Unpacking this we see that something as simple as a button is actually a complicated design challenge.



Further Reading
---------------

There are many great publications, offline and online, that will help further underpin your understanding of designing user interfaces for a desktop context. I’ve included a few below to start you on your journey.

+ Andy Clarke's [Art Direction for the Web](https://shop.smashingmagazine.com/products/art-direction-for-the-web) is a lovely book. The books is published in both ebook and hardback book formats… I'd recommend going the extra mile and ordering the hardback. It's beautifully designed and – as a book (in addition to the excellent content) – is a lovely object.

+ Matej Latin’s [Better Web Typography](https://betterwebtype.com) is a fantastic ‘course in a book’ that offers a wealth of typographic advice for web designers and web developers. Latin’s book is equally applicable beyond the web (in mobile and other contexts) and he offers [a free, seven-part email course](https://betterwebtype.com/web-typography-course/) that’s well worth signing up for.

+ Recommendation 3



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