---
chapter-number: "03"
title: "Information Architecture ≠"
layout: chapter
opening-text: "<p class='text--warning'><strong>This is draft content.</strong> I’m working on this chapter as we speak (15 September), I’ll be releasing it section by section over the next few days.</p>

<p class='text--warning'>Unfortunately, my schedule hit a huge detour over the last 2-3 weeks. My father-in-law ended up in hospital after having a stroke and, I had to pause writing to focus on family. Thankfully, he is doing better so I’m back to writing, I’m just a little further behind than I’d hoped to be.</p>

<p>In this chapter <strong>I’ll level up the complexity a little</strong>. I’ll take the idea of components that I explored in Chapter 2 and develop it to explore the creation of <strong>patterns: reusable solutions to user interface problems that occur frequently</strong>.</p>

<p>Once I’ve explored patterns, <strong>I’ll tie everything together</strong> to consider how <strong>we can use patterns, alongside components and objects, to build pages</strong>. With patterns and pages covered, I’ll stress the need to consider information architecture, <strong>so that we ensure our users can find their way to what they’re looking for</strong>.</p>

<p>Lastly, I’ll introduce a number of methods – iconic layouts, blockframes and wireframes – at different levels of fidelity, which are <strong>useful  at different stages of the design process</strong> and which will pave the way for Chapter 4, <strong>where I explore user flows and getting from A → B</strong>.</p>"

table-of-contents:
  - section: "1"
    section-title: "A Pattern Language"
  - section: "2"
    section-title: "Components → Patterns → Pages"
  - section: "3"
    section-title: "A Library of Patterns"
  - section: "4"
    section-title: "Information Architecture"
  - section: "5"
    section-title: "Iconic Layouts, Blockframes and Wireframes"
---



### Draft Content Notes

**This is a complete rebuild of Chapter 3. I’m adding to it section by section.**

Some of the images in this preview are draft images that I’ll be developing further, **i.e. these are not the final images (particularly in Section 3).** With that disclaimer out of the way, feel free to dive in.



Overview
--------

When we design an interface, it’s important to put some thought into our overall information architecture (IA). Information architecture is focused on **organising, structuring and labelling content in a way that eases users through the overall information presented**.

Our goal as designers is to:

1. **help users find the information they’re looking for**; and

2. **enable them to complete the goals they aim to undertake**.

In order to do this, it’s important to put some thought into **how the different elements we use in an interface fit together as part of the overall system** within which they exist.

To design an effective information architecture, **we need to consider the hierarchy of our content at a range of different levels**:

+ The Pattern Level
+ The Page Level; and
+ The Site Level *

The components and patterns we design – the content elements that make up our pages – **will have their own information architecture, that we need to consider at the micro-level**. As we design patterns for user interfaces, we need to consider how their content is organised, hierarchically.

Similarly, pages will have a page-level information architecture, that relates to the context in which they’re consumed, for example, in a browser in a desktop or a mobile context. **How pages are laid out, with a considered hierarchy, will help users achieve their goals.**

At the macro-level, we also need to **consider the overall information architecture of the site or application we’re building**. We need to **ensure that we organise our information clearly**, ensuring users understand the overall structure of the site that enables them to build a ‘mental model’ of how everything is organised.

With an overview of this chapter covered, let’s get down to business and explore some further building blocks of user interfaces: patterns.

\* Our site might, of course, be an app.



Section 1: A Pattern Language
-----------------------------

{% include figure.html url="/images/ch3/c3-s1-p1-1-pattern-tap-collections.png" alt="Pattern Tap > Collections (2008)" description="By drawing upon ‘pattern libraries’ – like Pattern Tap (2008) – for the patterns we need to design, we can save time in the design process by: 1. Drawing on tried and tested methods that have been proven to work; and 2. Showing clients examples of the types of patterns we propose to use before we spend time building them." %}


In Chapter 2 I introduced the idea of Design Systems. In this chapter I’d like to introduce **the idea of patterns and ‘pattern languages’** as I begin to explore the ‘**Patterns → Pages…**’ part of the interface equation.

**A pattern language is a system for cataloguing and describing good design practice.** The term was coined in 1977 by the architect, Christopher Alexander (who I’ll return to shortly). Essentially pattern languages are used to gather **tried and tested solutions to design problems**, for example, a login pattern that’s been shown to work through thorough testing.

The thinking behind pattern languages pre-dates design systems, as we currently understand them in user interface design, by quite some time.

Pattern languages, as they relate to user interface design, were popularised by Pattern Tap, an influential website established in 2008 by the prodigiously talented Matthew Smith, **which popularised the thinking behind pattern langauges and design patterns**. Sadly, Pattern Tap is no more, lost – as so many websites are – to the ravages of expired credit cards and lapsed domain names. You can, however, explore it via the [Wayback Machine](https://web.archive.org/web/20081102075428/http://patterntap.com/collections/).


{% include figure.html url="/images/ch3/c3-s1-p1-2-pattern-tap-collections-footers.png" alt="Pattern Tap > Collections > Footers (2008)" description="Pattern Tap saved you re-inventing the user interface wheel by gathering a wealth of design patterns that designers could learn from and draw inspiration from. In this case an example of a footer pattern from Shaun Inman’s Mint website." %}


**Pattern Tap collected examples of user interface design patterns**, largely as applied to the web. As Smith put it:

> Imagine one place where you can **drink deeply of great design patterns**. Imagine you don’t have to sludge through design after design for **the best pattern inspiration** anymore.

The site allowed you to browse an extensive series of collections – all carefully curated by Smith – to **find design patterns that solved a particular problem you were dealing with**. It’s collections, amongst many others, included:

- forms;
- breadcrumb trails;
- navigation;
- logins; and
- footers.

Imagine you had to include a form on a website you were creating. **Pattern Tap was useful for seeing design patterns for forms that others had designed to address this particular problem.** As Smith summarised it:

> Pattern Tap is here to satisfy and encourage the inspiration needs of my interface design peers. We aspire to be the one stop pattern shop for your next inspiration need.

As with my note of caution about the use of Dribbble in Chapter 2, the intention of **Pattern Tap wasn’t to provide designs to raid for aesthetics**, it was to provide **different ways of tackling a design problem – using pre-existing patterns – that designers could learn from**. In essence, Pattern Tap was focused more on design principles – methods and approaches – and less on surface-level, aesthetic inspiration.

Pattern Tap may have disappeared into the great big website graveyard in the sky, but its resources were [acquired by ZURB in 2012](https://zurb.com/blog/we-ve-acquired-pattern-tap) and it lives on – in a new form – at [ZURB Library](https://patterntap.com/patterntap), a set of resources that ZURB has been gathering since 1998.

In addition to ZURB’s Pattern Tap, **other pattern libraries have surfaced to gather patterns in single, centralised locations**.


{% include figure.html url="/images/ch3/c3-s1-p1-3-ui-patterns-detail.png" alt="UI Patterns (Detail)" description="UI Patterns offers a wealth of solutions to commonly recurring design problems. As its founder, Anders Toxboe explains: “Design patterns are standard reference points for the experienced user interface designer.”" %}


[UI Patterns](http://ui-patterns.com) – created by Anders Toxboe, a Danish web developer – is an extensive collection of design patterns gathered together in one, centralised location. As the detail (above) shows, it collects **User Interface Design Patterns** – navigation, dealing with data, onboarding… – so that designers can explore pre-existing examples of solutions to user interface problems.

UI Patterns is very much a successor to Pattern Tap and is well worth bookmarking. As Toxboe puts it:

> By not only listing **different ways of solving common design problems**, but also rationalizing about **how, when and why such solutions should be used**, [my] goal is to **create a tool that will help end feature debates**, get a clear understanding of why we’re doing what we’re doing, and why we’re not doing what we’re not doing.

Where UI Patterns differs to Pattern Tap is Toxboe’s approach, which adopts a more crowdsourced philosophy. Toxboe states: “UI Patterns is a personal project, but it is extremely open to contributions.” **The result is a comprehensive resource that will help you to develop an understanding of the power that lies in embracing patterns.**



### The Father of Pattern Languages

Long before Pattern Tap existed there was Christopher Alexander’s 1977 book [‘A Pattern Language: Towns, Buildings, Constructions’](https://amzn.to/2JVf2UI). **Few have read the book, but Alexander’s thinking has certainly shaped where we are today.** One of two books – “two halves of a single work” – ‘A Pattern Language’ was followed, in 1980, by Alexander’s [‘The Timeless Way of Building’](https://amzn.to/2ZZDl9Y).

Together, these books provided, “**a language**, for building and planning,” and, “the theory **and instructions for the use of that language**,” and were the result of eight years of practice and thought. 

Alexander was careful to stress the book’s title ‘**A** Pattern Language’, not ‘**The** Pattern Language’, stating: “I have called it ‘A Pattern Language’ with the emphasis on the word ‘A’.”

It’s also worth noting that Alexander points out, within the book’s opening paragraphs, that ‘A Pattern Language’ (specifically the one introduced in his book) is **one possible pattern langauge, i.e. it is not the only possible pattern language**.

Put simply: **there are many possible patterns** (which collectively form a language) and **the patterns you choose will be influenced by your goals and your intended audience** (and to a degree your individual aesthetic preferences).

Alexander’s intention was **to codify an approach towards building** (in an architectural context) and **establish a library of patterns from which an architect could draw**. His book gathered examples that spanned the entire scale of architecture, including:

+ **The Distribution of Towns** (Pattern 2, Global Patterns)
+ **Building Complexes** (Pattern 95, Buildings)
+ **Secret Places** (Pattern 204, Details)

From these patterns, one could build everything from a house (organising people) to a region (organising towns). ‘A Pattern Tap’ remains a central text defining architectural theory, but its impact extends far beyond the realm of architecture.


{% include figure.html url="/images/ch3/c3-s1-p2-1-alexander-patterns.png" alt="A Pattern Language" description="Alexander’s book includes everything from patterns for Flexible Office Space (Pattern 146) to patterns to accommodate a Master and Apprentice (Pattern 83)." %}


You might be wondering why I’ve dedicated a section of a book on **user interface design** to an **architect**. That would be a good question.

I believe Alexander’s original work (even in architecture, an entirely different discipline) needs to be included because **Alexander is regarded as the father of the pattern language movement in computer science**, which has influenced user interface design as we understand it today.

As the wonderfully archaic [patternlanguage.com](http://www.patternlanguage.com) explains:

> [Alexander] is the father of the pattern language movement in computer science, and ‘A Pattern Language’ was perhaps the first complete book ever written in hypertext fashion.

‘A Pattern Language’ was **influenced by emergent thinking around computer programming and design**. Alexander writes: “A pattern language has the structure of a network.” Echoing networks, and the connections that exist between nodes on the network, **each pattern cross-references others**.

The result is a book that is structured in a similar manner to hypertext, where each pattern links to other, related patterns. For example, the description of Pattern 148 ‘Small Work Groups’ references Pattern 83, ‘Master and Apprentices’, which – in turn – references other patterns (Patterns 152 and 183).

When you consider that Alexander’s book was published in 1977 – **a decade and a half before the birth of the web** – it’s clear that the book was far ahead of its time. Indeed, Alexander’s book would lend itself well to **a new, web-based edition that takes advantage of the extensive cross-referencing that he built into the book**.


{% include figure.html url="/images/ch3/c3-s1-p2-2-slate-do-you-see-a-pattern.png" alt="Slate: The Enduring Influence of Architect Christopher Alexander" description="‘Do You See a Pattern?’, published by Slate, highlights the impact Christopher Alexander’s thinking has had on software design and user interface design." %}


Slate highlights the widespread impact of ‘A Pattern Language’ in an excellent article from 2009, titled [‘Do You See a Pattern?’](https://slate.com/culture/2009/12/the-enduring-influence-of-architect-christopher-alexander-author-of-a-pattern-language.html), which explores Alexander’s enduring influence:

> Alexander’s ideas have taken root in unexpected places. His early books, especially [‘Notes on the Synthesis of Form’](https://amzn.to/33bC2aO) and [‘A Pattern Language’](https://amzn.to/2M7M9Za), influenced computer scientists, who found useful parallels between building design and software design.

If you read Alexander’s book – and it’s by no means a brisk read at 1,171 pages! – **the parallels between his methodology and that of user interface pattern libraries**, like Pattern Tap and UI Patterns, become clear.

The methodology I explored in Chapter 2 – **Objects, Components, Patterns, Pages and Flows** – where we use simple things to build complicated things is not unlike Alexander’s methodology. The only difference is that Alexander’s sequencing, designed to meet the needs of architecture, moves from the large to the small:

> When we use the network of a language, we always use it as a **sequence**, going through the patterns, moving always from the larger patterns to the smaller, always from the ones which create structures, to the ones which then embellish those structures, and then to those which embellish the embellishments…

We could imagine similar words being used to describe the design of pages, which have to function at a practical level, but which can be embellished at a pattern and component level.

Hopefully, as you read this, you’ll understand the parallel.

Alexander has created **an index of patterns which designers (architects) can combine, like the words of a language, to build whatever they desire**. Replace ‘building’ (house) with ‘digital product’ (website or application) and a great deal of Alexander’s thinking maps over.

\* Although ‘A Pattern Language’ is widely credited to Christopher Alexander (as the lead author of the book) it was actually co-authored by Sara Ishikawa and Murray Silverstein, with the assistance of Max Jacobson, Ingrid Fiksdahl-King and Shlomo Angel.


### Many patterns form a language…

Just as Alexander created a book including 253 cross-referenced patterns, so too, **we – as user interface designers – can create our own pattern libraries, gathering examples of user interface patterns that work**.

Put simply: We can **build our own libraries of patterns**, similar to Matthew Smith’s work with Pattern Tap. These libraries will prove incredibly valuable over time as you encounter new problems and new challenges in your user interface design.

There is always downtime in a studio. You can use that time to let off steam and play table tennis or fussball, but you can also **put that time to good use, by gathering examples of patterns ‘in the wild’** that you can return to when you embark upon new projects.

It’s a good idea to get into the habit of **collecting examples of the different design patterns** that you either:

+ create for projects, or
+ discover during your research.

These can be useful for showing clients or project partners, using them as **examples of how typical design problems are addressed**. (A series of credit card patterns if you’re developing a digital store, for example.)

In my work, I keep collections of example patterns organised by folders. **For each pattern, I create a new Keynote slidedeck and organise all of my screenshots accompanied by comments.** Here’s an example, analysing [Netlify’s Credit Card Modal Pattern](https://noti.st/mrmurphy/SQzORm/pattern-library-netlify-credit-card-modal).


{% include figure.html url="/images/ch3/c3-s1-p3-1-netlify-credit-card-modal.png" alt="Netlify’s Credit Card Modal Pattern" description="An example of one of a series of pattern library slidedecks that I’ve created for my own reference in my studio. (Essentially my own Pattern Tap.)" %}


By building a collection of design patterns and noting how and why they work, **you can accelerate your design process considerably**. Even better, through careful analysis of others’ work (as I recommended in Chapter 2) you can begin to ‘see through the eyes’ of other designers and begin to think like they think.

Before you build something (which is a time-consuming and expensive process), **it helps to find relevant examples from your library, allowing you to visualise how aspects of your user interface might look**.

When you build your pattern library, **it’s important to establish some conventions that you follow**. At the very least, each pattern entry should have:

- a clear name;
- an image;
- a descriptive entry; and
- cross-references to other related patterns.

Applying this to the above Netlify credit card modal dialog, this might be:

+ **Name:** Netlify Credit Card Modal
+ **Image:** [Modal Screenshot](https://github.com/buildingbeautifuluis/buildingbeautifuluis.github.io/blob/master/images/ch3/c3-temp-netlify-credit-card-modal.png)
+ **Description:** Netlify’s credit card modal is a lovely example of a **delightful interaction pattern** for entering credit card details. As you enter your card details on the left-hand side, the credit card updates, showing your card details on the right-hand side.
+ **Related Patterns:** Here you might gather links to other payment forms you’ve designed for projects, or to others you’ve discovered in your research.

<!-- It would be nice to add a link to another example here: [others you’ve discovered in your research](#). -->

Every entry in your system is a single design pattern and each of your documented patterns should explain why that solution works well in the pattern’s contexts.

**Using the objects and components, which I explored in Chapter 2, to create patterns that we organise on pages is where things get interesting.** Essentially, we’re building a library of consistently designed elements – **a design system** – that we can combine in different ways to create the pages of our interfaces.

By starting from the object and working up towards components and patterns, we can build **a consistent set of user interface elements that we can then further orchestrate within pages, as I’ll explore in the next section.**



Section 2: Components → Patterns → Pages
----------------------------------------

{% include figure.html url="/images/ch3/c3-s2-p1-1-components-patterns-pages.png" alt="Components → Patterns → Pages" description="In the last chapter, I focused on the ‘Objects → Components’ part of the equation. In this chapter, I’m focusing on the next phase of the ‘building from the object up’ approach: ‘Components → Patterns → Pages’." %}


Having explored the benefits of pattern languages, and provided some history about their origins, in this section **I’ll dive deeper and explore some examples of patterns**, demonstrating how they can work together as part of a greater whole.

The beauty of this approach, **building from the object up**, is that it allows us to establish an information architecture at every level of our design’s hierarchy: **Components → Patterns → Pages → Flows**.

If we **consider the information architecture of the patterns we build**, when we subsequently put these patterns together to form pages, our overall information architecture falls more or less into place. In short, it’s important to **consider the information architecture of our content at multiple levels as we design it**.

As with the components I explored in Chapter 2, where components were built out of objects, **patterns are – themselves – built out of objects and components**, we’re simply increasing the complexity.


{% include figure.html url="/images/ch3/c3-s2-p1-2-simple-pattern-noma.png" alt="Restaurant Recommendation Pattern" description="This pattern, though at first glance quite complex, is really quite simple. The pattern is: 1. contained in a card, which provides an overall structure for the objects to sit inside; with 2. a preview image; 3. an overview of the restaurant; and 4. a star rating and a price guide." %}


The restaurant listing pattern (above) is contained in a card (1), gathering together the information required:

+ a preview image (2);
+ an overview of the restaurant (3); and
+ a star rating and a price guide (4).

Establishing a pattern for this content requires us to **analyse the information supplied and consider its overall structure and information architecture**.

The beauty of this approach is that **this pattern can be re-used, for other restaurant listings**, resulting in a more consistent interface that’s efficient to design. We might gather together a series of restaurant listings, for example, where we re-use the pattern to build out our interface (below), gathering a group of listings.


{% include figure.html url="/images/ch3/c3-s2-p1-3-simple-pattern-restaurant-listings.png" alt="Restaurant Listings Pattern" description="By reusing the restaurant listing pattern (above), we can quickly organise a group of listings, ensuring they are clearly structured and easy to understand." %}


The pattern above is relatively simple. Should our design require a little more detail, **we can use the same organising principles to create a more complex pattern** (below), we’re simply levelling up the complexity once again.

Whilst this might look complicated at first glance, if we **break the pattern down into its constituent parts we can see it’s relatively simple**, comprising three content sub-sections:

+ a section for rich media, in this case an image (1);
+ a section for text, where our information is organised with titles and supporting text (2); and
+ a section where we present actions (3).


{% include figure.html url="/images/ch3/c3-s2-p1-4-complex-pattern-noma.png" alt="Restaurant Recommendation Pattern (Complex)" description="We might provide an alternative, richer pattern if we’d like to include actions. This pattern includes: 1. a more generous preview image; 2. some supporting text; and 3. a couple of calls-to-action (a ‘READ MORE’ button and a button to favourite the option." %}


We see these kinds of ‘content clusters’ in both desktop and mobile interfaces, **where information needs to me structured into organised groupings**. This pattern-driven approach is used, for example, in Apple’s [Apple Trade In](https://www.apple.com/shop/trade-in) programme page (below).

Although the user is required to provide a great deal of information (including: their phone’s make and model, its serial number, and its condition) **the information required is broken down into a series of easily understandable groupings**.

The result is that users are taken step-by-step through everything they need to do, in a clearly considered user flow.


{% include figure.html url="/images/ch3/c3-s2-p1-5-complex-pattern-apple.png" alt="Apple Trade In · Modal Dialog" description="This pattern, whilst more complex than the earlier patterns, really just levels up the complexity further." %}


This example, from Apple, levels up the complexity further, drawing together a number of elements, including:

+ a card, grouping everything (1);
+ icons to return to the previous page or close the modal dialog (2);
+ a progress indicator (3);
+ a number of typographic elements (4, 6);
+ a form field (5); and
+ a call to action button (7).

This pattern, coupled with a clearly considered user flow (which I’ll explore in more detail in [Chapter 4: Getting From A → B](#)), eases the process considerably.


### From Patterns to Pages

With some patterns explored, it’s time to explore how **we can use patterns – fitting them together like the pieces of a jigsaw – to create pages**.

Consider a typical page, like the [Curated Galleries](https://www.behance.net/galleries) page at Behance (below). It’s organised at every level, featuring:

1. an overall hierarchy and structure **at the page level** (micro information architecture); and
2. a specific hierarchy and structure **at the pattern level** (macro information architecture).

At an overall page hierarchy, our eye is drawn to the title: Curated Galleries. Its size on the page and the weight of the type used catches our eye, signalling the page we’re on.


{% include figure.html url="/images/ch3/c3-s2-p2-1-behance-curated-galleries.png" alt="Behance · Curated Galleries" description="At the page level, Behance’s Curated Galleries page has a clear hierarchy and structure. The eye is drawn to the title first (1), it’s then drawn to the categories (2), and, finally, it’s drawn to the project thumbnails (3)." %}


Continuing from the overall page hierarchy, our eye is drawn secondly to **the row of thumbnails in the Graphic Design category, which follows a pattern that is repeated down [the page](https://www.behance.net/galleries)** that includes other categories: Photography, Illustration, Interaction….

At the category level, the eye is drawn to the title – Graphic Design – first, with its short overview paragraph (“The best graphic design…”), before being drawn to **the ‘Follow Gallery’ call to action button, which – in blue – catches the eye, perfect for a call to action**. The gold ‘Gr’ bookmark at the top is the least visually dominant element, satisfying a labelling function.

At the pattern level (below), there is an equally clear hierarchy and structure. The thumbnails provided satisfy the purpose of **previewing visual content** (a content pattern), which are in turn repeated on the page as a way of **previewing content from within a category** (a display pattern), which in this case focuses on the Graphic Design category.


{% include figure.html url="/images/ch3/c3-s2-p2-2-behance-curated-galleries-thumbnail.png" alt="Behance · Curated Galleries · Graphic Design" description="The pattern used to preview visual content on Behance has its own hierarchy and structure, which uses a ‘card’ pattern (1), that is organised by: 2. an image; 3. primary content (Title and Studio) and secondary content (Category); and 4. actions components (Likes, Views, Bookmarks)." %}


The ‘card’ pattern that’s used at Behance – carefully organised at the pattern level – is **perfect for page level display**.

As ‘information containers’, cards – self-contained ‘units of content’ – can be used to **organise a range of different objects and components**, including: imagery or rich media (video, for example); text objects (which can also be hierarchically organised); and buttons.

**One of the primary benefits of a embracing cards is their adaptability.** Cards can be **reorganised or reflowed** depending upon the screen real estate available:

+ in a desktop context we might lay out our cards **horizontally and vertically, in a grid**; and
+ in a mobile environment – on a tablet or a smartphone, where space is at a premium – we might **vertically stack cards in a layout that users can scroll down**.

The beauty of card patterns like this is that **they’re perfect when it comes to design, especially responsive web design (RWD), because the cards can reflow at narrower viewport widths**, whilst still retaining their pattern level information architecture.


{% include figure.html url="/images/ch3/c3-s2-p2-3-behance-curated-galleries-desktop-mobile.png" alt="Behance · Curated Galleries: Desktop and Mobile View" description="On the left, on a desktop device with a wider viewport width, the thumbnails are organised horizontally and vertically in a grid. On the right, on a mobile device with a narrower viewport width, the thumbnails are organised vertically, in a narrower grid." %}


When we consider Behance’s desktop and mobile views (above), we can see the beauty of adopting a card pattern for the site’s thumbnail content:

+ in a desktop context, where there is more horizontal space, the grid is allowed to use more horizontal space (**on my external monitor, it displays six thumbnails**); and
+ in a mobile context, where there is less horizontal space, the grid is tighter (**on my iPhone XS Max, it displays two thumbnails**).

In both cases – desktop and mobile – the card pattern, regardless of the viewport width, retains its own internal hierarchy and structure.


### Case Study: Dribbble

In this case study, **I’ll tie together everything I’ve covered above and explore how the various elements comes together** in a website – [Dribbble](https://dribbble.com) – **building complexity step-by-step, from the object up**.

In particular, I’ll focus on how **Dribbble uses cards**, which – as I explored above – are useful for organising complex information.

As we’ll see, Dribbble’s pages – although on the surface relatively complicated – are comprised of a wide range of relatively simple elements including:

+ Objects
+ Components; and
+ Patterns

By using Dribbble as a case study and analysing it, I’ll show how **we can use the objects and components**, that were the focus of Chapter 2, **as the building blocks from which to build patterns and pages** that are the focus of this chapter.

If we look at one of Dribbble’s [profile pages](https://dribbble.com/fehler) (below), we can see that it’s built from a set of core building blocks: **patterns that have been designed to satisfy a variety of particular purposes**. These patterns include:

+ a navigation pattern, at the top of the page (1);
+ a profile pattern, on the left-hand side of the page (2); and
+ a shot pattern that is used multiple times on the right-hand side of the page (3: in a non-active state, and 4: in an active state).


{% include figure.html url="/images/ch3/c3-s2-p3-1-dribbble-profile-page.png" alt="Dribbble’s Profile Page" description="Dribbble’s profile page is comprised of a series of patterns: 1. a ‘navigation pattern’; 2. a ‘profile pattern’; 3. a ‘shot pattern’; and 4. a shot pattern in an active state with metadata showing at the bottom." %}


Each of these patterns has been **designed to communicate different types of information** and, when we look at each of these patterns in turn, we see that they each have their own logical structure.

This is an important point to note and it’s one that’s worth emphasising. **We can – and should – consider information architecture at multiple levels, including the pattern- and the page-level.** So, just as Dribbble’s profile page has a considered **overall** information architecture, so too do the different patterns on the pages.


{% include figure.html url="/images/ch3/c3-s2-p3-2-dribbble-profile-pattern.png" alt="Dribbble’s Profile Pattern" description="Dribbble’s profile pattern is divided into three sub-sections: profile, skills and elsewhere, i.e. this pattern has its own information architecture." %}

<!-- Before publication, re-screenshot this and change the URL to mrmurphy.com. -->


If we focus in one one of these patterns (above), the ‘profile pattern’ communicates information about the user in question. This information is divided into three sub-sections or groupings of content: ‘profile’ (1), ‘skills’ (2) and ‘elsewhere’ (3). **So – even at the pattern level – we can consider our content’s information architecture ensuring everything is logically structured.**

Looking at the above profile pattern (my @fehler profile) we see the information is organised into three logically organised sections:

+ **Profile**
  + **The User’s Name:** Christopher Murphy
  + **The User’s Location:** Belfast
  + **The User’s Biography:** A designer, writer and speaker… etc..
+ **Skills**
  + content design, content strategy, design, etc..
+ **Elsewhere**
  + dev.mrmurphy.com
  + Twitter

This **pattern level information architecture** groups related content – all about the user – into one, carefully organised space.

Dribbble wouldn’t be Dribbble without its ‘shots’ so **it’s no surprise to see a great deal of care and attention (not to mention distillation and refinement over time) has gone into the design of the site’s ‘shot pattern’**. Shots are, after all, the primary focus of Dribbble.


{% include figure.html url="/images/ch3/c3-s2-p3-3-dribbble-shot-pattern.png" alt="Dribbble’s Shot Pattern" description="Dribbble’s shot pattern in its hover state (1) and non-hover state (2). (I’ll be changing this image with some new Dribbble shots to my account. Yikes, I last posted in 2014 (!) when I ran my design conference, Break. Sorry, Dribbble!)" %}

<!-- Before publication, re-screenshot this page with some more up-to-date shots (from this book for added meta). -->


Dribbble’s shot pattern, like the profile pattern, has its own information architecture that communicates information about the shot in question:

+ **The Shot’s Title:** Break Badges [Sketch]
+ **The Shot’s Upload Date:** August 23, 2014

It also features ‘Save’ and ‘Like’ buttons (which are examples of components, as I explored in Chapter 2) so that users can interact with the shot:

+ **A Save Button:** So users can add the shot to their buckets.
+ **A Like Button:** To show your appreciation of the shot in question.

This shot pattern is used in a number of different locations throughout the Dribbble website, including:

+ The [Home](https://dribbble.com) Page
+ The [Shots](https://dribbble.com/shots), [Designers](https://dribbble.com/designers) and [Teams](https://dribbble.com/teams) Pages; and
+ The [Playoffs](https://dribbble.com/shots?list=playoffs) Pages


{% include figure.html url="/images/ch3/c3-s2-p3-4-dribbble-shot-pattern-reused.gif" alt="Dribbble’s Shot Pattern, Reused" description="Dribbble’s shot pattern is used in multiple locations throughout the website underlining another benefit of embracing design patterns: reusability." %}


The re-use of this pattern in so many different areas of Dribbble’s website underlines a further, important, benefit of building patterns as a core part of your design process, namely: **reusability and consistency**.

**The more you embrace reusability** and the less you reinvent the wheel, **the more consistent your user interfaces are and the quicker they are to build**.

Patterns used this way are a little like variables in programming languages: **make a change to a variable and that change cascades out, taking care of the bigger picture**.

If we dive a little deeper and explore Dribbble’s shot pattern in more depth, we see that **the pattern has a number of possible states**:

1. a non-hover state that showcases the shot alone (1);
2. a hover state that reveals metadata about the shot (2);
3. a hover state that highlights when a user has liked a shot (3) (note: the user might also have saved a shot and not liked it, but this is unlikely); and
4. a hover state that highlights when a user has liked a shot and saved it to one of their buckets (4).


{% include figure.html url="/images/ch3/c3-s2-p3-5-dribbble-shots-states.png" alt="Dribbble’s Shot Pattern’s Different States" description="Dribbble’s shot pattern has a number of ‘states’: 1. without the metadata showing; and 2–4. with the metadata showing a user’s interactions with a shot." %}


It should be obvious, after reading Chapter 2, that the ‘Saved’ and ‘Liked’ buttons are examples of **button components** used as a part of the pattern.

By embracing a pattern-driven approach, **Dribbble can re-use these components and patterns elsewhere on the site**.

On Dribbble’s [Home](https://dribbble.com) page, for example, we see the shot pattern re-used multiple times to show the latest shots that have been uploaded. On the [Teams](https://dribbble.com/teams) page, we see the same pattern – at a smaller size – to showcase the work of different design teams using the service.

When we focus on featured shots on Dribbble (below) we see **a different pattern, which presents more detailed information**. From a functional perspective, clicking on a shot preview opens it in **a modal dialog** – a dialog, or window, that appears **on top of the main window** – focusing your attention on the shot in question and presenting it at a larger size.


{% include figure.html url="/images/ch3/c3-s2-p3-6-dribbble-featured-shot.png" alt="Dribbble’s Featured Shot Pattern" description="Clicking on an image on Dribbble opens it in a modal dialog, focusing your attention by providing: 1. the details of shot; 2. a larger image of the shot in question; and 3. supplementary information on the shot provided by its designer." %}


This pattern – which uses more of the viewport – **allows the information to breathe a little more**, thanks to the extra screen real estate used. It also provides: the shot details, including metadata on the left, and ‘Save’ and ‘Like’ buttons on the right (1); the shot itself at a larger size (2); and any additional details about the shot that the designer has provided (3).

Scrolling down the page reveals **additional information about the shot** (below) thanks to the use of a number of other patterns. These include:

+ **a description of the shot**, with users’ responses beneath it;
+ **supplementary information about the shot** including: tags, the shot’s colour palette, the number of times the shot has been viewed, and other details; and
+ **links to other shots**, by the designer in question.


{% include figure.html url="/images/ch3/c3-s2-p3-7-dribbble-featured-shot-details.png" alt="Dribbble’s Featured Shot Pattern Meta Data" description="Underneath the image, Dribbble provides a wide range of metadata about the shot (1) and links to further shots by the designer in question (2)." %}


Hopefully this case study has demonstrated **the power of embracing user interface patterns** as a core part of your user interface design strategy. By incorporating **patterns built from objects and components** into your user interface toolbox, you reap countless benefits, including:

+ **accelerating your design** process;
+ creating updatable patterns, **streamlining the maintenance of your design** over the long-term; and
+ **ensuring your interfaces are more consistent**.

With our case study wrapped up, let’s explore some examples of patterns that you’ll encounter when you’re designing user interfaces.

<!--

In addition to the above, I think I’ll create a Notist slidedeck – [something like this](https://noti.st/mrmurphy/SQzORm/pattern-library-netlify-credit-card-modal) – to gather this analysis of Dribbble into one location for reference. This could be provided with the chapter’s downloadables.

-->



Section 3: A Library of Patterns
--------------------------------

In this section, which echoes the structure of Chapter 2, **I’ll explore a series of typical user interface design patterns** that you might encounter and will almost certainly need to design.

As with the previous chapter, **this is not an exhaustive list, rather it’s intended to focus on a subset of common patterns that exist**, highlighting the principle that patterns are useful in user interface design and need to be considered. There are many more design patterns available, as always, research is key.

I’ll explore the following patterns and, as with Chapter 2, I’ll provide a series of XD artboards that you can also explore further.

+ Date Pickers
+ Register / Sign-In Forms
+ Credit Card Forms
+ Notifications
+ Activity Feeds

As I’ve noted above, **patterns are incredibly useful and can save you a considerable amount of time when you’re designing a user interface**. There’s little point in reinventing the wheel, if a pattern exists, embracing it – and modifying it if you need to – saves you from doing work that’s been done before by others.

With that point stressed, let’s explore some typical user interface patterns you may find useful.



{% include figure.html url="/images/ch3/c3-s3-p1-date-pickers.png" alt="Date Pickers" description="Depending on their context, date patterns come in many different shapes and sizes, and levels of complexity." %}


### Date Pickers

As user interface designers **we frequently encounter a need for date picker patterns**. A user might, for example, need to:

+ book a flight;
+ add a reminder to a calendar; or
+ make an appointment.

All of these interactions require a date – or a span of dates – to be selected. At the simplest level, **a date picker pattern will include a calendar of some description**, allowing the user to select the date or dates they require. At a more complex level, **we might need to consider the inclusion of times in the user’s selection**.

As I’ve stressed throughout this book, **users have mental models of how these interactions function, based on their past experience**. Rather than try to reinvent the wheel, it makes sense to explore what has already been tried and tested and proven to work.

Regardless of your requirements, you’ll almost certainly need to consider:

+ displaying the current day’s date in a clear and obvious manner;
+ how users move between different months and years; and
+ managing error states (for example, if a user enters a return date that’s **before** the departure date).

Searching on Dribbble for [‘date picker’](https://dribbble.com/search?q=date+picker) returns a wealth of different solutions – and aesthetics – for date pickers. Harpal Singh’s [date picker](https://dribbble.com/shots/3397410-Date-Picker-Calendar-Component), in particular, is worth looking at for the consideration he gives to different base, hover and error states). Finally, Vitaly Friedman – Smashing Magazine’s founder – has written an exhaustive and very in-depth overview of date pickers, [Designing the Perfect Date and Time Picker](https://www.smashingmagazine.com/2017/07/designing-perfect-date-time-picker/). A 40 minute read, it’s well worth setting aside some time to work your way through. Never one for half measures, Friedman considers every eventuality.

Google Flights’ date picker is a great example of a date picker that’s **beautifully designed, intuitive and easy to use**. As I did with the Netlify Credit Card Modal (highlighted above), I’ve included an analysis of it in my [pattern library](https://noti.st/mrmurphy/Zy3ib6/pattern-library-google-flights-date-picker).

What’s particularly nice about Google’s approach to its date picker pattern is its relative ease of use. Despite the complexity of the information it presents, **the user interface is clear, chunked into a series of easily parsable steps**.



{% include figure.html url="/images/ch3/c3-s3-p2-sign-up-sign-in.png" alt="Sign-Up / Sign-In Forms" description="When designing Sign-Up and Sign-In forms, it’s best to keep the forms separate. In this example, clicking on the greyed out option switches the form. (Example: Cotton Bureau)" %}


### Sign-Up / Sign-In Forms

If you’re designing a piece of software (especially a piece of web-based software) or building some form of community-focused service, **you’ll need to consider a Sign-Up / Sign-In forms for users to sign up for your product or service, or sign into it**.

When a user first encounters a SaaS (Software as a Service) product, they’ll often be **asked to register for an account**. This allows information relevant to the user to be stored for their return, or items added to a shopping cart to be saved for later.

This will often involve a round trip to an email client for your users to confirm they are who they say they are (something you’ll also need to consider).

Once a user has registered, they’ll need to sign-in to access their account. **If signing in is important to the application you’re building, it’s essential to ensure that the sign-in form is clearly signposted.**

Sign-Up and Sign-In forms at the very least require two pieces of data:

+ a username; and
+ a password.

Some forms ask for more information, but **as a rule of thumb it’s best to keep your forms as short as possible**.

If your goal is for users to sign up for an account, you want to **remove as much friction as possible** and removing form fields is a good way to do this. As a user becomes more embedded, using your application more frequently, **you can ask for additional information you might need**.

In addition to the design of the core sign-up and sign-in forms, **there’s a need to consider what happens should users forget their registration details**.

There’s nothing more frustrating than an application that doesn’t allow you to recover (or reset) your password should you have forgotten or lost it.

It might be tempting to kill two birds with one stone and present users with both the registration and sign-in forms in two forms side-by-side. **This often leads to confusion**, however, where a user tries to register by using the sign-in form (or vice-versa).

A better approach is to **present the user with one form, with a clearly signposted link to the other form**. In the above example, clicking on the greyed out option takes the user to the form they’re not currently on, enabling them to switch easily.

I’ve focused on sign in forms because **doing so enables me to explore forms** (about which entire books have been written!), but do it in a more focused way without getting lost in detail.

If the user interface you’re designing includes forms – and it’s highly likely it will – **I’d strongly recommend Adam Silver’s [Form Design Patterns](https://shop.smashingmagazine.com/products/form-design-patterns-by-adam-silver)**. It’s comprehensive and – like all books published by my friends at Smashing Magazine – it’s beautifully designed and printed.

<!--

Look at Diana's book (pp83-88) for a useful step-by-step login form redesign. Something like this would be nice to accompany these patterns (provided as XD files…?).

-->



{% include figure.html url="/images/ch3/c3-s3-p3-credit-card-form.png" alt="Credit Card Forms" description="Patterns for credit card are, by nature, complicated. As a rule of thumb, it helps to: 1. Show the cards that are accepted up front; provide formatting advice where needed (MM/YY); 3. offer help, in this case should a user be unclear on what a security code is; and 4. ensure payment call to action buttons are clearly signalled. (Example: Gabriel Tomescu for UX Collective)" %}


### Credit Card Forms

The web has proven **a powerful platform for digital commerce** and, as such, credit card patterns – which structure the input of users’ credit card details – are in plentiful supply.

One of the wonderful aspects of working on the web is its leanings towards openness. Thanks to the web’s beginnings, **in particular its ‘View Source’ culture**, we’ve inherited a culture of collective understanding where talented individuals share their thinking for the benefit of all.

UX Collective, which gathers **‘curated stories on user experience, usability and product design’**, offers a wealth of information on the design of all things UX +/ UI, and **Gabriel Tomescu’s [‘Anatomy of a Credit Card Form’](https://uxdesign.cc/the-anatomy-of-a-credit-card-payment-form-32ec0e5708bb) takes the ubiquitous credit card form we meet, day-in day-out, and presents an exhaustive analysis of credit card patterns**. It’s required reading should your project require payments of any kind.

When designing a credit card pattern, you’ll need to include the following:

+ An indication of what cards are accepted.
+ A total field, where the user can enter a total (unless it’s pre-populated as the result of a preceding transaction).
+ The name on the card.
+ A card number (which you can dynamically format, to help the user).
+ The card’s expiry date.
+ The card’s security code.
+ A ZIP or postal code.

In addition to the above, it’s also helpful to **indicate the type of card the user is using, so they feel re-assured that they’ve entered the correct details**. It’s possible to determine the type of card being used by the number the card starts with, as follows:

+ **3:** American Express, Diners Club…
+ **4:** Visa
+ **5:** MasterCard
+ **6:** Discover Card

As I noted in my analysis of Netlify’s Credit Card Modal Pattern, **Netlify uses this approach to change the design of the card on the fly to show the user a [Visa](https://noti.st/mrmurphy/SQzORm/pattern-library-netlify-credit-card-modal#swUfZKe) or [MasterCard](https://noti.st/mrmurphy/SQzORm/pattern-library-netlify-credit-card-modal#sYoOND3)**, for example.

When money is changing hands, it’s important to **establish a bond of trust, indicating to the users that their card details are safe and secure**. UI Patterns has a helpful article on [Designing for Trust](http://ui-patterns.com/blog/Designing-for-trust) that’s worth reading so you can put your users’ minds at ease.

Designing credit card patterns is – as you can see from this section (which is condensed) – a complicated process. In addition to the above, you’ll need to **consider providing feedback when users enter numbers incorrectly**, as they often do.

Ideally error checking can be handled on the client side (before submitting the form to the server) using formulae like the [Luhn algorithm](https://www.geeksforgeeks.org/luhn-algorithm/), which can highlight issues ***before the user submits their payment**. Put simply, it’s complicated (but when you get lost down the rabbit hole of the Luhn algorithm, it’s also fascinating!).



{% include figure.html url="/images/ch3/c3-s3-p4-notifications.png" alt="Notifications" description="Notifications are now an ever-present part of daily life. Notifications can be incredibly useful, but they can equally be incredibly irritating if used too often. Use them sparingly." %}


### Notifications

Notifications are useful to alert users and **draw their attention to important updates or messages**.

Notifications can appear in a number of ways:

- at the system level; and
- at the application level.

System level notifications offer a number of benefits, not least because **they’re persistent at the top level of the interface, i.e. your users can be made aware of notifications when the application you’re building isn’t open**.

**Most operating systems will allow you to tie into system level notifications using <span title="Software Development Kits">SDKs</span> or <span title="Application Programming Interfaces">APIs</span>.** SDKs and APIs are beyond the scope of this book, but it’s worth bearing in mind that notifications are available at the system level, should you need them.

It’s also worth noting that the design of system level notifications are almost exclusively beyond your control as a designer.

Just because you can present your users with notifications doesn’t mean you necessarily should with abandon. **Notifications can, if you’re not careful, prove irritating, annoying users about often trivial matters.**

It’s important to consider, what I call, ‘levels of discretion’ for notifications:

+ some are discrete, subtly sliding in and sliding out, catching the user’s eye and needing no further action (like a well-trained butler);
+ others are a little more persistent, signalling a higher level of priority.

Google’s Material Design guidelines provides an overview of **a variety of different notification patterns (and their levels of priority)**, including:

+ **[Snackbars](https://material.io/components/snackbars/):** Temporary notifications that provide brief messages about app processes at the bottom of the screen. (Low Priority) <!-- Don’t require user input to disappear. -->
+ **[Banners](https://material.io/components/banners/):** Persistent notifications (that need to be dismissed) that provide actions for users to address. (Medium Priority)
+ **[Dialogs](https://material.io/components/dialogs/dialogs.html):** Notifications that appear on top of app content, providing critical information. On appearing, dialogs disable all app functionality and remain on screen until a required action has been taken, or they have been confirmed of dismissed. (High Priority)

<!--

Look at this:

https://material.io/design/platform-guidance/android-notifications.html#anatomy-of-a-notification

Even a simple notification pattern can be logically structured at the Micro-IA level:

https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1S1g0uIqq8cRvxi60yyYj_L2X8YABU_A6%2Fas-notifications-anatomy-2.png

Look at these Material Design videos on notifications at the system level. The first is subtle (an icon in the status bar). The second is more prominent with a notification peek onto the current screen.

1. An icon in the status bar:

https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CfZrxDhHfWFStu9tKiqD6MQHAWpAO3CR%2Fnotifications-arrival-1.mp4

2. Peek (sliding in from top, automatically sliding out):

https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1R6V5oqkr0dbbstx5tvR5R_IjEg6kwT4x%2Fnotifications-arrival-2.mp4

-->



{% include figure.html url="/images/ch3/c3-s3-p5-user-profile.png" alt="User Profile Cards" description="User Profile cards – as I’ve explored with the Dribbble example (above) – come in a variety of content densities, from: lightweight, with a profile photograph, a name and a handful of details; to heavyweight, with a wide range of information." %}


### Activity Feeds

I’m replacing the above image shortly, for an example of an [activity feed](https://getstream.io/activity-feed-design/). I think I covered user profiles enough in the Dribbble case study. I’m working on this just now.

<!--

I think Activity Feeds (p112 in Diana’s book) would be better. Also, these are timeline focused and I don’t have anything timeline focused at the moment.

Use this:

https://getstream.io/activity-feed-design/

-->




Section 4: Information Architecture
-----------------------------------

<!--

Donna Spencer’s Five Simple Steps book explains this well (pp3-4 are great), essentially explaining that Information Architecture is all about…

-->

In an age of information overload, **establishing a clear information architecture – so that we ensure our users can find their way – is more critical than ever**.

Given that this chapter is titled ‘Information Architecture’, I think it’s important I explain what that means! Essentially, **information architecture focuses on organising and structuring information so we can improve its findability and discoverability**.

**The information architecture of websites and applications is critical** because – if it’s done well – it enables users to find the information they’re looking for and complete the tasks that they need to complete. Conversely, if the information architecture is ill-considered, it leads to frustrated users who will very quickly find an alternative solution.

Put simply, information architecture is all about:

1. organising content or objects;
2. describing it clearly; and
3. providing ways for users to get to it.

The above is true of: **parts of a page** (patterns, e.g. forms); **the page itself**; and **the page in relation to other pages**.

It’s essential that we ground everything that we design, no matter how complex, with the principle of helping our users ‘find their way’.

As user interface designers, **our role is to orchestrate the elements that comprise patterns and pages and impose some order on them**. We need to take different objects, components, patterns and groupings of content (words, imagery, video…) and organise them in relation to each other, establishing a clear hierarchy.

This is where information architecture comes in.

Everything we design is created from content. When we design a UI, we take this content and we organise it, enabling the user to navigate it and help them to quickly and easily find their way. As we design, we need to consider the hierarchy of the content we’re organising and apply that hierarchy to our patterns, pages and flows.

There’s an information architecture at each of these resolutions: patterns will have their own information architecture, as will pages, which are created from components and patterns.

I’ll explore flows in [Chapter 4: Getting From A → B](#) so – in this chapter, I’m focusing on patterns and pages – but the overall emphasis remains the same: We need to ensure everything is clearly signposted.


### Finding The Ice Cream

This section is on wayfinding and uses the metaphor of a supermarket – full credit to Donna Spence for this idea – and uses this metaphor to explain what IA is.

_At this point I’ll use the supermarket metaphor that Donna Spencer has used in her book. Donna used chocolate, but I’m using ice cream. (The freezers are broken, so it’s as if this page is down for maintenance.) I can still find what I’m looking for, however… */_

<!--

NNg: “Just like the [IA](https://www.nngroup.com/articles/ia-vs-navigation/) reflects the information structure of a website, the  [mini-IA](https://www.nngroup.com/articles/mini-ia-structuring-information/), which is made up of all the page headings and subheadings, reflects the information structure of a page.

-->

I need to talk about clustering, labelling, etc. (Remember the ice cream metaphor.)

The freezer part of the supermarket is also nice because it’s a grouping of things, but it’s also ‘undergoing maintenance’ (so, even when something isn’t available – because the page content is being updated, for example – the user should be kept informed).


### Wayfinding Patterns

There might also need to be a subsection on wayfinding patterns we can use, including:

+ Navigation Patterns (Top, Footer);
+ Breadcrumb Trails (Where am I?); and
+ Shopping Cart Flows

Essentially make the point that often users are moving through content and – just like they’d need wayfinding signage in an airport – so, too, they need it in this context.



Section 5: Iconic Layouts, Blockframes and Wireframes
-----------------------------------------------------

<!--

![Sketching Interfaces](images/ch3/c3-temp-sketch-pre-iconic.png)

**CAPTION: Before we use a tool like XD to build higher fidelity deliverables, it’s important to get our thinking right through a process of sketching interfaces. This is the lowest form of fidelity in the user interface (and it’s also the fastest, to it’s easier to discard ideas that don’t necessarily work).**

-->

**In the final section, I'll explore the process of creating design deliverables at the page level. I'll stress the need to develop your user interface at a range of fidelities (fast (sketches) → slow (mockups)). I'll explore a typical design process that includes:

+ Sketching Interfaces
+ Creating Low Fidelity 'Iconic Layouts'
+ Exploring Blockframes
+ Increasing Fidelity by Creating Wireframes

This would allow me to talk about mapping out pages at an iconic, birds' eye (high-level) before I move on to cover flows in Chapter 4, where we consider how we connect these pages together.


### Sketching Interfaces + Iconic Layouts

_/* Oops, look below, and merge the second iconic layouts section here. */_

This section will look at the process of mapping out your thinking and stress the fundamental need to **think through paper**.

When I work with learners – students at Belfast School of Art or participants in my [workshops](#) – they frequently have one thing in common: They rush to start designing on a computer far, far too quickly.

Paper is a critical design tool.

**SHOW KHOI VINH'S CHART, REDRAW** <!-- This could be the excuse I need to contact Khoi? -->

These are microlayouts, they’re at a level of fidelity that you can get a feel for the overall look and feel of a page, but they’re not so detailed that they absorb too much time before you explore user flows. At the end of the introductory text, stress that I’ll explore the layout of pages in more detail in [Chapter 6: Designing Desktop Interfaces], where I’ll cover:

+ The Importance of a Clear Visual Hierarchy
+ Typography at the Page Level
+ Composition and Grid Systems

If you want to get a more in-depth view, you might want to take a round trip to [Chapter 6: Designing Desktop Interfaces](#) and return here, before we move on to [Chapter 4: Getting From A → B](#), where I’ll explore user flows and overall site and application structure.


### Iconic Layouts

This kicks off with revisiting April Grieman’s iconic layouts for Vitra magazine. They struck me as interesting at the time (19XX). They very much pre-dated the web, but they looked similar to the kinds of low level iconic layouts I would use in a project to map out flows…

1. Show an example, by Grieman.
2. Show my Camper / Glyph sketches.

The idea for 'Iconic Layouts' is drawn from April Grieman's 1990 book 'Hybrid Imagery: The Fusion of Technology and Graphic Design'. The world has moved on a great deal since 1990, but one idea that Grieman explored has stuck with me over three decades later…

Grieman referred to her initial digital sketches – for Workspirit Magazine (a publication for Swiss furniture manufacturer Vitra) – as the 'iconic' first stage. As she put it:

> A surprise in producing [the] initial miniature version was that I could see the whole magazine as a kind of 'iconic texture', free from detail.


![Workspirit Magazine · Placeholder Image](images/section-opening-placeholder-image.png)

**CAPTION: Grieman's overall page printouts reminded me of the iconic layouts I often sketch at the initial paper prototyping phase of a project.**


I've used this approach ever since. By creating 'iconic' layouts – very small layouts, focused on scale, color and tone, the hierarchy of pages can be grasped at a high level (a birds' eye view).

This approach allows you to establish page layouts and get a feel for their flows.

/* Insert blockframes here? YES? NO? READ TOMORROW. */

If I put blockframes in here, I need to emphasise their role. They're not about designing in the absence of content (which is never a good idea), they're about getting a feel for the overall page and its content hierarchy.

Expand on this by referencing the Medium article:

https://medium.com/ux-power-tools/blockframing-and-31-free-sketch-ready-layouts-using-auto-layout-by-anima-app-1be039007ecf

By Jon Moore. (Also give Jon Moore credit for his UX Power Tools downloadables.)



Closing Thoughts
----------------

Some closing thoughts here paving the way for the next chapter.


### So, what did we learn?

After reading Chapter 3, you should understand that:

1. **Objects and Components can be combined to create Patterns; and Objects, Components and Patterns can can be combined to create Pages.**

2. Something else…

3. Low- → Mid- → High-Fidelity

Lastly, I’ve introduced you to **some typical patterns you’ll encounter when you begin to design user interaces**: A, B, C, D and E. _/* These will be swapped out after I've written the chapter, */_



Further Reading
---------------

There are many great publications, offline and online, that will help further underpin your understanding of information architecture. I’ve included a few below to start you on your journey.

+ Donna Spencer’s [A Practical Guide to Information Architecture](https://amzn.to/2IkHeRl) – whilst sadly no longer available in print – is, as its title suggests, a practical guide to information architecture. Originally published by Five Simple Steps, I’d strongly recommend buying the Kindle book, which provides a thorough overview of the principles of managing and orchestrating content.

_Get rid of the following and replace it with Diana’s book. In fact her book should go first in this section._

+ usability.gov has an excellent overview of [Information Architecture Basics](https://www.usability.gov/what-and-why/information-architecture.html) that’s well worth reading. The site is an excellent resource that – whilst primarily focused on design for government – offers a wide range of resources that are applicable beyond design for the public sector.

+ Finally, Steve Krug’s [Don’t Make Me Think, Revisited: A Common Sense Approach to Web Usability](https://amzn.to/2Xa5DS3) is a timeless book that I’d highly recommend. Whilst focused on usability, it contains a wealth of insights that are applicable when considering your overall information architecture.