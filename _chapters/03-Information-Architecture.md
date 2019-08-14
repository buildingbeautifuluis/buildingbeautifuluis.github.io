---
chapter-number: "03"
title: "Information Architecture"
opening-text: "<p class='text--warning'>I’m working on this chapter as we speak, I’ll be releasing it section by section over the next few days.</p>

<p>In this chapter <strong>I’ll level up the complexity a little</strong>. I’ll take the idea of components that I explored in Chapter 2 and develop it to explore the creation of <strong>patterns, reusable solutions to user interface problems that occur frequently</strong>.</p>

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



<!-- 5,181 Words -->

<!--

**This is a complete rebuild… This is just Section 1, I’ll add Sections 2-5 shortly.**

**I’m currently working on this chapter (4–? August, 2019). This is ongoing, it’s been a struggle. I hope to have it in a fully readable form this week. For now, it needs a great deal of work, so it’s definitely not worth reading (unless I sent you the link for pre-feedback). I’m in it for the long haul, and have been for days.**

**The images, for the most part, are placeholders and draft images that I’ll develop further. These are not the final images.**

**As I’ve noted in the [overview](https://github.com/buildingbeautifuluis/bbuis/blob/master/00-Overview.md), this is a work in progress and I’m sharing it here in draft form. The book isn’t finished, but I hope the draft content I’m providing has some value as I finalise the chapters.**

-->



Overview
--------

<!-- This might need a sentence to cover off patterns and pages. (Or it might be OK as is, because I cover this in the second half. Re-read on Thursday morning.) -->

When we design an interface, it’s important to put some thought into our overall information architecture (IA). Information architecture is focused on **organising, structuring and labelling content in a way that eases users through the overall information presented**.

Our goal as designers is to:

1. **help users find the information they’re looking for**; and

2. **enable them to complete the goals they aim to undertake**.

In order to do this, it’s important to put some thought into **how the different elements we use in an interface fit together as part of the overall system** within which they exist.

To design an effective information architecture, **we need to consider the relationship of elements at a range of different levels**:

+ The Pattern Level
+ The Page Level; and
+ The Site Level *

The components and patterns we design – the content elements that make up our pages – **will have their own information architecture that we need to consider at the micro-level**.

Similarly, pages will have a page-level information architecture, that relates to the context in which they’re consumed, for example, in a browser in a desktop or a mobile context. **How pages are laid out, with a considered hierarchy, will help users achieve their goals.**

At the macro-level, we need to **consider the overall information architecture of the site or application we’re building**. We need to **ensure that we organise our information clearly**, ensuring users understand the overall structure of the site and enabling them to build a ‘mental model’ of how everything is organised.

With the overview covered, let’s get down to business and explore some further building blocks of user interfaces: patterns.

\* Our site might, of course, be an app.



Section 1: A Pattern Language
-----------------------------

{% include figure.html url="/images/ch3/c3-temp-password-pattern.png" alt="An Example of a UI Pattern" description="(I’ll be replacing this image with a grid of four images showing four different patterns that echoes the image that accompanies Christopher Alexander’s ‘A Pattern Language’.)_  By building ‘pattern libraries’ for the patterns we design, we can save time in the design process, by: 1. drawing on tried and tested methods that have been proven to work; and 2. Showing clients examples of the types of patterns we propose to use within projects we’re about to start." %}


In Chapter 2 I introduced the idea of Design Systems. In this chapter I’d like to introduce **the idea of patterns and ‘pattern languages’** as I begin to explore the ‘Components → **Patterns → Pages…**’ part of the interface equation.

**A pattern language is a system for cataloguing and describing good design practice.** The term was coined in 1977 by the architect, Christopher Alexander (who I’ll return to shortly). Essentially pattern languages are used to gather **tried and tested solutions to design problems**, for example, a login pattern that’s been shown to work through thorough testing.

The thinking behind pattern languages pre-dates design systems, as we currently understand them in user interface design, by quite some time.

Pattern languages, as they relate to user interface design, were popularised by Pattern Tap, an influential website established in 2008 by the prodigiously talented Matthew Smith, **which popularised the thinking behind pattern langauges and design patterns**. Sadly, Pattern Tap is no more, lost – as so many websites are – to the ravages of expired credit cards and lapsed domain names. You can, however, explore it via the [Wayback Machine](https://web.archive.org/web/20081102075428/http://patterntap.com/collections/).


![Pattern Tap](images/ch3/c3-temp-pattern-tap-collections.png)

**CAPTION: Pattern Tap saved you re-inventing the user interface wheel by gathering a wealth of design patterns that designers could learn from and draw inspiration from.**


**Pattern Tap collected examples of user interface design patterns**, largely as applied to the web. As Smith put it:

> Imagine one place where you can **drink deeply of great design patterns**. Imagine there’s no more war. There’s no more dissent. You don’t have to sludge through design after design for **the best pattern inspiration** anymore.

The site allowed you to browse an extensive series of collections – all carefully curated by Smith – to **find design patterns that solved a particular problem you were dealing with**. It’s collections, amongst many others, included:

- forms;
- breadcrumb trails;
- navigation;
- logins; and
- footers.

Imagine you had to include a form on a website you were creating. **Pattern Tap was useful for seeing design patterns for forms that others had designed to address this particular problem.** As Smith summarised it:

> Pattern Tap is here to satisfy and encourage the inspiration needs of my interface design peers. We aspire to be the one stop pattern shop for your next inspiration need.

As with my note of caution about the use of Dribbble in Chapter 2, the intention of **Pattern Tap wasn’t to provide designs to raid for aesthetics**, it was to provide **different ways of tackling a design problem – using patterns – that designers could learn principles from**.

In essence, Pattern Tap was focused more on design principles – methods and approaches – and less on surface-level, aesthetic inspiration. Pattern Tap may have disappeared into the great big website graveyard in the sky, but other pattern libraries have surfaced to take its place.


![Pattern Tap](images/ch3/c3-temp-ui-patterns.png)

**CAPTION: UI Patterns offers a wealth of solutions to commonly recurring design problems. As its founder, Anders Toxboe explains: “Design patterns are standard reference points for the experienced user interface designer.”**


[UI Patterns](http://ui-patterns.com) – created by Anders Toxboe, a Danish web developer – is an extensive collection of design patterns gathered together in one, centralised location. It is very much a successor to Pattern Tap and is well worth bookmarking. As Toxboe puts it:

> By not only listing **different ways of solving common design problems**, but also rationalizing about **how, when and why such solutions should be used**, [my] goal is to **create a tool that will help end feature debates**, get a clear understanding of why we’re doing what we’re doing, and why we’re not doing what we’re not doing.

Where UI Patterns differs to Pattern Tap is Toxboe’s approach, which adopts a more crowdsourced philosophy. Toxboe states: “UI Patterns is a personal project, but it is extremely open to contributions.” The result is a comprehensive resource that will help you to develop an understanding of the power that lies in embracing patterns.



### The Father of Pattern Languages

Long before Pattern Tap existed there was Christopher Alexander’s 1977 book [‘A Pattern Language: Towns, Buildings, Constructions’](https://amzn.to/2JVf2UI). * **Few have read the book, but Alexander’s thinking has certainly shaped where we are today.** One of two books – “two halves of a single work” (which eventually became a trilogy) – ‘A Pattern Language’ was preceded by Alexander’s ‘The Timeless Way of Building’.

Together, these books provided, “**a language**, for building and planning,” and, “the theory **and instructions for the use of that language**,” and were the result of eight years of practice and thought. 

Alexander was careful to stress the book’s title ‘**A** Pattern Language’, not ‘**The** Pattern Language’: “[I] have called it ‘A Pattern Language’ with the emphasis on the word ‘A’.”

It’s also worth noting that Alexander points out, within the book’s opening paragraphs, that ‘A Pattern Language’ (specifically the one introduced in his book) is **one possible pattern langauge, i.e. it is not the only possible pattern language**.

Put simply: **there are many possible patterns** and **the ones you choose will be influenced by your goals and your intended audience** (and to a degree your individual aesthetic preferences).

Alexander’s intention was **to codify an approach towards building** (in an architectural context) and **establish a library of patterns from which an architect could draw**. His book gathered examples that spanned the entire scale of architecture, including:

+ **The Distribution of Towns** (Pattern 2, Global Patterns)
+ **Building Complexes** (Pattern 95, Buildings)
+ **Secret Places** (Pattern 204, Details)

From these patterns, one could build everything from a house (orchestrating people) to a region (orchestrating towns). ‘A Pattern Tap’ remains a central text defining architectural theory, but its impact extends far beyond the realm of architecture.


![A Pattern Language](images/ch3/c3-temp-small-work-groups.png)

**CAPTION: _(I’ll be replacing this image with a grid of four images showing four different patterns that echoes this section’s opening image.)_ Alexander’s patterns for working spaces emphasise the need for privacy. “When asked to compare five different possible layouts for offices (above), workers consistently chose those layouts in which workgroups were smallest.” Those questioned prefer the working spaces on the left, where work is more intimate.**


You might be wondering why I’ve dedicated a section of a book on **user interface design** to an **architect**. That would be a good question.

I believe Alexander’s original work (even in architecture, an entirely different discipline) needs to be included, not least as **Alexander is regarded as the father of the pattern language movement in computer science**.

As the wonderfully archaic [patternlanguage.com](http://www.patternlanguage.com) explains:

> [Alexander] is the father of the pattern language movement in computer science, and ‘A Pattern Language’ was perhaps the first complete book ever written in hypertext fashion.

‘A Pattern Language’ was **influenced by emergent thinking around computer programming and design**. Alexander writes: “A pattern language has the structure of a network.” Echoing networks, and the connections that exist between nodes on the network, **each pattern cross-references others**.

The result is a book that is structured in a similar manner to hypertext, where each pattern links other related patterns. For example, the description of Pattern 148 ‘Small Work Groups’ closes:

> Treat each small work group, in every kind of industry and office, as a place of learning. [See:] ‘Master and Apprentices’ (83).

Pattern 83, ‘Master and Apprentices’, references other patterns:

> Arrange the workspaces as ‘Half-Private Offices (152) or ‘Workplace Enclosures’ (183).

When you consider that Alexander’s book was published in 1977 – **a decade and a half before the birth of the web** – it’s clear that the book was far ahead of its time. Indeed, Alexander’s book would lend itself well to **a new, web-based edition that takes advantage of the extensive cross-referencing that he built into the book**.


![Sketching Interfaces](images/ch3/c3-temp-working-with-patterns.png)

**CAPTION: This will be redrawn. It’s from ‘Working with Patterns: An Introduction’ by Helmut Leitner, who states: “Through sharing and participation [we can] bring about high quality design.”**


Slate highlights the widespread impact of ‘A Pattern Language’ in an excellent article from 2009, titled [‘Do You See a Pattern?’](https://slate.com/culture/2009/12/the-enduring-influence-of-architect-christopher-alexander-author-of-a-pattern-language.html), which explores Alexander’s enduring influence:

> Alexander’s ideas have taken root in unexpected places. His early books, especially [‘Notes on the Synthesis of Form’](https://amzn.to/33bC2aO) and [‘A Pattern Language’](https://amzn.to/2M7M9Za), influenced computer scientists, who found useful parallels between building design and software design.

If you read Alexander’s book – and it’s by no means a brisk read at 1,171 pages! – **the parallels between his methodology and that of user interface pattern libraries**, like Pattern Tap and UI Patterns, become clear.

The methodology I explored in Chapter 2 – **Objects, Components, Patterns, Pages and Flows** – where we use simple things to build complicated things is not unlike Alexander’s methodology. The only difference is that Alexander’s sequencing, designed to meet the needs of a different discipline, moves from the large to the small:

> When we use the network of a language, we always use it as a **sequence**, going through the patterns, moving always from the larger patterns to the smaller, always from the ones which create structures, to the ones which then embellish those structures, and then to those which embellish the embellishments…

We could imagine similar words being used to describe the design of pages, which have to function at a practical level, but which can be embellished at a component and pattern level.

Hopefully – other than the fact that the sequencing we use in user interface design runs in the opposite direction (from the smaller patterns to the larger) – as you read this, you’ll understand the parallel.

Alexander has created **an index of patterns which we can combine, like a language, to build whatever we desire**. Replace ‘building’ (house) with ‘digital product’ (website or application) and a great deal of Alexander’s thinking maps over.

\* Although ‘A Pattern Language’ is widely credited to Christopher Alexander (as the lead author of the book) it was actually co-authored by Sara Ishikawa and Murray Silverstein, with the assistance of Max Jacobson, Ingrid Fiksdahl-King and Shlomo Angel.


### Many patterns form a language…

Just as Alexander created a 1,171 page book including 253 cross-referenced patterns, so too, **we – as user interface designers – can create our own indices, gathering examples of user interface patterns that work**.

Put simply: We can **build our own encyclopaedia of examples**, similar to Smith’s work with Pattern Tap. This encyclopaedia will prove incredibly valuable over time as you encounter new problems and new challenges.

<!--

There is always downtime in a studio. You can use that time to let off steam and play table tennis or fussball, but you can also **put that time to good use, by gathering examples of patterns ‘in the wild’** that you can return to when you embark upon new projects.

-->

It’s a good idea – especially during studio downtime – to **collect examples of the different design patterns** that you either:

+ create on projects, or
+ discover during your research.

These can be useful for showing clients or project partners **examples of how typical design problems are addressed**. (A series of navigation bars in a mobile footer, for example.)

In my work, I keep collections of example patterns organised by folders. **For each pattern, I create a new Keynote slidedeck and organise all of my screenshots accompanied by comments.** [Here is an example.](https://noti.st/mrmurphy/SQzORm/pattern-library-netlify-credit-card-modal)


![Placeholder Image](images/ch3/c3-temp-netlify-credit-card-modal.png)

**CAPTION: An example of one of a series of pattern library slidedecks that I’ve created for my own reference in my studio. (This is a little like building my own Pattern Tap.)**

<!--

At this point, I’ll link to some of the examples I’ve collected (in my Mr Murphy Pattern Library), so I can **show** readers what I’m talking about. Show:

1. Drone Deploy Sign Up Form (or) Netlify Credit Card Form
2. App Footer Nav Bars /* What’s Apple’s term for this? */
3. Twitter (and other) app splash screens / loaders.

-->

By building a collection of design patterns and noting how and why they work, **you can accelerate your design process considerably**. Even better, through careful analysis of others’ work (as I recommended in Chapter 2) you can begin to ‘see through the eyes’ of other designers and begin to think like they think.

Before you build something (which is time-consuming and expensive), you can show clients relevant examples from your library, helping them to visualise how things might look.

When you build your pattern library, it’s important to establish some conventions that you follow. At the very least, each pattern entry should have:

- a clear name;
- an image;
- a descriptive entry; and
- cross-references.

Applying this to the above Netlify credit card modal dialog, this might be:

+ Netlify Credit Card Modal;
+ a [screenshot](https://github.com/buildingbeautifuluis/buildingbeautifuluis.github.io/blob/master/images/ch3/c3-temp-netlify-credit-card-modal.png);
+ Netlify’s credit card modal is a lovely example of a **delightful interaction pattern** for entering credit card details. As you 
enter your card details on the left side, the credit card updates with those details on the right side.
+ links to other payment forms you’ve designed for other projects. (So you can show clients or partners alternative patterns.)

Every entry in your system is a single design pattern and each of your documented patterns should explain why that solution works well in the pattern’s contexts.

**Using our objects and components to create patterns is where things get interesting.** Essentially, we’re building a library – a set of patterns, created from objects and components – that we’ll combine in different ways as we build our interfaces.

By starting from the object and working up towards components and patterns, we can build **a consistent set of user interface elements that we can then further orchestrate within pages, as I’ll explore in the next section.**


_/* I’ve tidied everything up to this point. If you’re reading this pre-draft content, I’m working on Sections 2–5 just now, so everything below this comment is in-progress. (Friday, 9 August) */_

<!--

Something that might be worth touching upon – in the above section? or somewhere – is Brad Frost's idea of an Interface Inventory:

http://bradfrost.com/blog/post/interface-inventory/

It’s not the same as a pattern library and is focused on approaching **existing** elements for a redesign, but used in conjunction with a pattern library, it would allow you to tackle user interface problems from an informed position in a strategic manner.

WHEN I RE-READ THE ABOVE, I THINK IT SHOULD GO **SOMEWHERE**

-->




Section 2: Components → Patterns → Pages
----------------------------------------

Coming soon. (I'm working on it [13 August, 2019].)




Section 3: A Library of Patterns
--------------------------------

Coming soon. (I'm working on it [13 August, 2019].)




Section 4: Information Architecture
-----------------------------------

Coming soon. (I'm working on it [13 August, 2019].)




Section 5: Iconic Layouts, Blockframes and Wireframes
-----------------------------------------------------

Coming soon. (I'm working on it [13 August, 2019].)



Further Reading
---------------

There are many great publications, offline and online, that will help further underpin your understanding of information architecture. I’ve included a few below to start you on your journey.

+ Donna Spencer’s [A Practical Guide to Information Architecture](https://amzn.to/2IkHeRl) – whilst sadly no longer available in print – is, as its title suggests, a practical guide to information architecture. Originally published by Five Simple Steps, I’d strongly recommend buying the Kindle book, which provides a thorough overview of the principles of managing and orchestrating content.

+ usability.gov has an excellent overview of [Information Architecture Basics](https://www.usability.gov/what-and-why/information-architecture.html) that’s well worth reading. The site is an excellent resource that – whilst primarily focused on design for government – offers a wide range of resources that are applicable beyond design for the public sector.

+ Finally, Steve Krug’s [Don’t Make Me Think, Revisited: A Common Sense Approach to Web Usability](https://amzn.to/2Xa5DS3) is a timeless book that I’d highly recommend. Whilst focused on usability, it contains a wealth of insights that are applicable when considering your overall information architecture.