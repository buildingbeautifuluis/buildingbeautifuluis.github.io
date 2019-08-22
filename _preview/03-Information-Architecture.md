---
chapter-number: "03"
title: "Information Architecture ¼"
layout: chapter
opening-text: "<p class='text--warning'><strong>This is draft content.</strong> I’m working on this chapter as we speak (21 August), I’ll be releasing it section by section over the next few days.</p>

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



### Draft Content

**This is a complete rebuild of Chapter 3. I’m adding to it section by section.**

It was a struggle to find the time to work on this chapter on top of a short break I took for a much-needed holiday. My holiday, however, is now over, so I’m back at the coal face. I hope to have the entirety of the chapter in a fully readable form by the end of this week (25 August).

The images, for the most part, are draft images that I’ll develop further. **These are not the final images.** With that disclaimer out of the way, feel free to dive in!



Overview
--------

When we design an interface, it’s important to put some thought into our overall information architecture (IA). Information architecture is focused on **organising, structuring and labelling content in a way that eases users through the overall information presented**.

Our goal as designers is to:

1. **help users find the information they’re looking for**; and

2. **enable them to complete the goals they aim to undertake**.

In order to do this, it’s important to put some thought into **how the different elements we use in an interface fit together as part of the overall system** within which they exist.

To design an effective information architecture, **we need to consider the relationship of elements at a range of different levels**:

+ The Pattern Level
+ The Page Level; and
+ The Site Level *

The components and patterns we design – the content elements that make up our pages – **will have their own information architecture that we need to consider at the micro-level**. As we design patterns for user interfaces we need to consider how their content is organised, hierarchically.

Similarly, pages will have a page-level information architecture, that relates to the context in which they’re consumed, for example, in a browser in a desktop or a mobile context. **How pages are laid out, with a considered hierarchy, will help users achieve their goals.**

At the macro-level, we also need to **consider the overall information architecture of the site or application we’re building**. We need to **ensure that we organise our information clearly**, ensuring users understand the overall structure of the site that enabled them to build a ‘mental model’ of how everything is organised.

With an overview of this chapter covered, let’s get down to business and explore some further building blocks of user interfaces: patterns.

\* Our site might, of course, be an app.



Section 1: A Pattern Language
-----------------------------

{% include figure.html url="/images/ch3/c3-temp-password-pattern.png" alt="An Example of a UI Pattern" description="By building ‘pattern libraries’ for the patterns we design, we can save time in the design process, by: 1. drawing on tried and tested methods that have been proven to work; and 2. Showing clients examples of the types of patterns we propose to use within projects we’re about to start." %}


In Chapter 2 I introduced the idea of Design Systems. In this chapter I’d like to introduce **the idea of patterns and ‘pattern languages’** as I begin to explore the ‘Components → **Patterns → Pages…**’ part of the interface equation.

**A pattern language is a system for cataloguing and describing good design practice.** The term was coined in 1977 by the architect, Christopher Alexander (who I’ll return to shortly). Essentially pattern languages are used to gather **tried and tested solutions to design problems**, for example, a login pattern that’s been shown to work through thorough testing.

The thinking behind pattern languages pre-dates design systems, as we currently understand them in user interface design, by quite some time.

Pattern languages, as they relate to user interface design, were popularised by Pattern Tap, an influential website established in 2008 by the prodigiously talented Matthew Smith, **which popularised the thinking behind pattern langauges and design patterns**. Sadly, Pattern Tap is no more, lost – as so many websites are – to the ravages of expired credit cards and lapsed domain names. You can, however, explore it via the [Wayback Machine](https://web.archive.org/web/20081102075428/http://patterntap.com/collections/).


{% include figure.html url="/images/ch3/c3-temp-pattern-tap-collections.png" alt="Pattern Tap" description="Pattern Tap saved you re-inventing the user interface wheel by gathering a wealth of design patterns that designers could learn from and draw inspiration from." %}


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


{% include figure.html url="/images/ch3/c3-temp-ui-patterns.png" alt="UI Patterns" description="UI Patterns offers a wealth of solutions to commonly recurring design problems. As its founder, Anders Toxboe explains: “Design patterns are standard reference points for the experienced user interface designer.”" %}


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


{% include figure.html url="/images/ch3/c3-temp-small-work-groups.png" alt="A Pattern Language" description="Alexander’s patterns for working spaces emphasise the need for privacy: “When asked to compare five different possible layouts for offices (above), workers consistently chose those layouts in which workgroups were smallest.” Those questioned prefer the working spaces on the left, where work is more intimate." %}


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


{% include figure.html url="/images/ch3/c3-temp-working-with-patterns.png" alt="Working With Patterns" description="This will be redrawn. It’s from ‘Working with Patterns: An Introduction’ by Helmut Leitner, who states: “Through sharing and participation [we can] bring about high quality design.”" %}


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

Put simply: We can **build our own encyclopaedia of examples**, similar to Matthew Smith’s work with Pattern Tap. This encyclopaedia will prove incredibly valuable over time as you encounter new problems and new challenges in your user interface design.

<!--

There is always downtime in a studio. You can use that time to let off steam and play table tennis or fussball, but you can also **put that time to good use, by gathering examples of patterns ‘in the wild’** that you can return to when you embark upon new projects.

-->

It’s a good idea – especially during studio downtime – to **collect examples of the different design patterns** that you either:

+ create on projects, or
+ discover during your research.

These can be useful for showing clients or project partners **examples of how typical design problems are addressed**. (A series of credit card patterns if you’re developing a digital store, for example.)

In my work, I keep collections of example patterns organised by folders. **For each pattern, I create a new Keynote slidedeck and organise all of my screenshots accompanied by comments.** [Here is an example.](https://noti.st/mrmurphy/SQzORm/pattern-library-netlify-credit-card-modal)


{% include figure.html url="/images/ch3/c3-temp-netlify-credit-card-modal.png" alt="Netlify's Credit Card Modal Pattern" description="An example of one of a series of pattern library slidedecks that I’ve created for my own reference in my studio. (This is a little like building my own Pattern Tap.)" %}


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
+ links to other payment forms you’ve designed for other projects, or discovered in your research. (So you can show clients or partners alternative patterns.)

Every entry in your system is a single design pattern and each of your documented patterns should explain why that solution works well in the pattern’s contexts.

**Using our objects and components to create patterns is where things get interesting.** Essentially, we’re building a library – a set of patterns, created from objects and components – that we’ll combine in different ways to create the pages of our interfaces.

By starting from the object and working up towards components and patterns, we can build **a consistent set of user interface elements that we can then further orchestrate within pages, as I’ll explore in the next section.**

<!--

Something that might be worth touching upon – in the above section? or somewhere – is Brad Frost's idea of an Interface Inventory:

http://bradfrost.com/blog/post/interface-inventory/

It’s not the same as a pattern library and is focused on approaching **existing** elements for a redesign, but used in conjunction with a pattern library, it would allow you to tackle user interface problems from an informed position in a strategic manner.

WHEN I RE-READ THE ABOVE, I THINK IT SHOULD GO **SOMEWHERE**

-->



Section 2: Components → Patterns → Pages
----------------------------------------

{% include figure.html url="/images/ch3/c3-s2-opening-image.jpg" alt="Components → Patterns → Pages" description="This isn’t the final image, it’s a sketch from my sketchbook (with the elements renamed) to fit my naming convention. I’ll update this image shortly." %}


Having explored the benefits of pattern languages, and provided some history about their origins, in this section **I’ll dive deeper and explore some examples of patterns and pages** and demonstrate how they work together as part of a greater whole.

I’ll take a website, [Dribbble](https://dribbble.com), which should be familiar to you, and **I’ll explore its patterns and its pages and how they relate to each other**.

I’ve focused on Dribbble because it’s **a good example of a site that combines a variety of different patterns to create building blocks for the different pages the site requires**. By focusing on a single website as  a case study, **I’ll draw attention to how these principles are applied in a real world context**.

Before exploring Dribbble in detail, and showcasing the ideas I’m establishing in practice, it’s important to stress that this chapter increases the level of complexity by starting to focus in on the **Patterns → Pages** part of the **Objects → Components → Patterns → Pages → Flows** equation._

Put simply: This approach, **building from the object up**, allows us to establish an information architecture at every level of our design’s hierarchy: Components → Patterns → Pages → Flows.

If we consider the information architecture of the patterns we build, when we put them together to form pages, our overall information architecture falls, more or less, into place. In short, it’s important to **consider the information architecture of our content at multiple levels** as we design it.

<!--

This section feels a touch short. There's content in Agenda and below (commented out) that I could perhaps add to it.

-->


### Case Study: Dribbble

This chapter follows the approach I established in Chapter 2, **developing the idea of building complexity step-by-step, from the object up**. As we’ll see, Dribble’s pages are comprised of a wide range of elements including:

+ Objects
+ Components; and
+ Patterns

By using Dribbble as a case study and analysing it, I’ll show how **we can use the objects and components** that were the focus of Chapter 2, **as the building blocks from which to build patterns and pages** that are the focus of this chapter.


{% include figure.html url="/images/ch3/c3-s2-dribbble-page.png" alt="Dribbble’s Profile Page" description="Dribbble’s profile page is comprised of a series of patterns: 1. a ‘profile pattern’; 2. a ‘shot pattern’; and 3. a shot pattern in an active state with metadata content surfaced from the bottom." %}


If we look at Dribbble’s [profile page](https://dribbble.com/fehler), we can see that it’s built from a set of core building blocks: **patterns that have been designed to satisfy a variety of particular purposes**. These patterns include:

+ a navigation pattern, at the top of the page;
+ a profile pattern, on the left-hand side of the page; and
+ a shot pattern that is used multiple times on the right-hand side of the page.

Each of these patterns has been **designed to communicate different types of information** and, when we look at each of these patterns in turn, we see that they each have their own logical structure.

This is an important point and is one that’s worth emphasising. Put simply: **We can consider our overall information architecture at multiple levels, including the pattern and the page level.**


{% include figure.html url="/images/ch3/c3-s2-dribbble-profile-pattern.png" alt="Dribbble’s Profile Pattern" description="Dribbble’s profile pattern is sub-divided into three sub-sections: profile, skills and elsewhere, i.e. this pattern has its own information architecture." %}


The ‘profile pattern’ communicates information about the user in question. This information is sub-divided into three sub-sections or groupings of content: ‘profile’, ‘skills’ and ‘elsewhere’. **So – even at the pattern level – we can consider our content’s information architecture ensuring everything is logically structured.**

+ **Profile**
  + The User’s Name (Christopher Murphy);
  + The User’s Location (Belfast);
  + The User’s Biography (A designer, writer and speaker…);
+ **Skills**
  + content design, content strategy, etc..
+ **Elsewhere**
  + dev.mrmurphy.com
  + Twitter


{% include figure.html url="/images/ch3/c3-s2-dribbble-shot-pattern-reused.gif" alt="Dribbble’s Shot Pattern, Reused" description="Dribbble’s shot pattern is used in multiple locations throughout the website underlining another benefit of embracing design patterns: reusability." %}


Dribbble wouldn’t be Dribbble without its ‘shots’ so **it’s no surprise to see a great deal of care and attention (not to mention distillation and refinement over time) has gone into the design of the site’s ‘shot pattern’**. Shots are, after all, the primary focus of Dribbble.

This shot pattern is used in a number of different locations on the site, including:

+ The [Home](https://dribbble.com) Page
+ The [Shots](https://dribbble.com/shots), [Designers](https://dribbble.com/designers) and [Teams](https://dribbble.com/teams) Pages; and
+ The [Playoffs](https://dribbble.com/shots?list=playoffs) Pages

The re-use of this pattern in so many different areas of Dribbble’s website underlines a further, important, benefit of the **Objects → Components → Patterns → Pages → Flows** approach, namely: reusability.

**The more you embrace reusability** and the less you reinvent the wheel, **the more consistent your user interfaces are and the quicker they are to build**.

Patterns used this way are a little like variables in programming languages: **make a change to a variable and that change cascades out, taking care of the bigger picture**.


{% include figure.html url="/images/ch3/c3-s2-dribbble-shot-pattern.png" alt="Dribbble’s Shot Pattern" description="Dribbble’s shot pattern in its hover state (1) and non-hover state (2). (I’ll be changing this image with some new Dribbble shots to my account. Yikes, I last posted in 2014 (!) when I ran my design conference, Break.)" %}


Dribbble’s ‘shot pattern’ communicates information about the shot in question:

+ **The Shot’s Title:** Break Badges [Sketch]; and
+ **The Shot’s Upload Date:** August 23, 2014;

It also features ‘Save’ and ‘Like’ buttons (which are components, as we explored in Chapter 2) so that users can interact with the shot:

+ **A Save Button:** So user’s can add the shot to buckets; and
+ **A Like Button:** To show your appreciation of the shot.


{% include figure.html url="/images/ch3/c3-s2-dribbble-shots-states.png" alt="Dribbble’s Shot Pattern’s Different States" description="Dribbble’s shot pattern has a number of ‘states’: 1. without the metadata showing; and 2–4. with the metadata showing a user’s interactions with a shot." %}


If we dive a little deeper and explore Dribbble’s shot pattern in more depth, we see that **the pattern has four possible states**:

1. a non-hover state that showcases the shot alone;
2. a hover state that reveals metadata about the shot;
3. a hover state that highlights when a user has liked a shot; and
4. a hover state that highlights when a user has liked a shot and saved it to one of their buckets.

It should be obvious (I hope!) – after reading Chapter 2 – that the ‘Saved’ and ‘Liked’ buttons are examples of **button components** used as a part of the shot pattern.

By embracing a pattern-driven approach, **Dribbble can re-use these patterns elsewhere on the site**, which is: more efficient from a design perspective; and leads to a more cohesive and consistent user interface.

On Dribbble’s [Home](https://dribbble.com) page, for example, we see the shot pattern re-used multiple times to show the latest shots that have been uploaded. On the [Teams](https://dribbble.com/teams) page, we see the same pattern – at a smaller size – to showcase the work of different design teams using the service.

_/* To close out this section, I need to show an example of a shot page, where the shot is featured on its own. This is where I can have fun with the #inception idea._

_In addition to the above, I think I’ll create a Notist slidedeck – [something like this](https://noti.st/mrmurphy/SQzORm/pattern-library-netlify-credit-card-modal) – to gather this analysis of Dribbble into one location for reference. This could be provided with the chapter’s downloadables. */_

With our case study wrapped up, let’s explore the idea of information architecture a little more at the macro- and the micro-level.


### Information Architecture at the Macro- and Micro-Level

In the closing part of this section, I’ll widen the lens out and look at some other examples of sites use pattern-driven approaches. By doing so, I’ll underline how widespread the idea of embracing patterns is.

_/* Given that this is a book commissioned by Adobe, I might use Behance as an example._

_The upsides of Behance: It’s an Adobe product and Becky will appreciate that. The downsides of Behance: It might be a little too similar to Dribbble, but that might not be a bad thing as it might help to underline the fact that we see this approach used by great designers, a great deal._

_Another possible site I could look at, also an Adobe site, would be [Adobe Fonts](https://fonts.adobe.com/fonts), which also uses a lot of repeating patterns.


#### Micro-Level IA _/* Is there an H4? */_

This takes something like Dribbble’s shot pattern (a card, **but not from Dribbble**) and shows how it’s structured. Draw attention to the buttons and typography so that I can show how components and objects come together in these micro-level IA patterns.


#### Macro-Level IA

This takes a page and shows how it’s structured and organised. Again, this could be Behance or Adobe Fonts. Adobe Fonts, in particular, has some lovely varying patterns used to manage the complexity of typographic samples:

+ Sample of Typeface
+ Typeface Name
+ Foundry
+ Number of Fonts
+ Call to Action



Section 3: A Library of Patterns
--------------------------------

_/* This section needs images. For now I’m focused on the content. */_

In this section, which echoes the structure of Chapter 2, **I’ll explore a series of typical design patterns** that you might encounter and that you might also need to design.

As with the previous chapter, **this is not an exhaustive list, rather it’s intended to focus on a subset of common patterns that exist**, highlighting the principle that patterns are useful in user interface design and need to be considered. There are many more design patterns available, as always, research is key.

I’ll explore the following patterns and, as with Chapter 2, I’ll provide a series of XD artboards that you can also explore further.

+ Date Pickers
+ Register / Sign-In Forms
+ Credit Card Forms
+ Notifications
+ Profile Cards

As I’ve noted above, patterns are incredibly useful and can save you a considerable amount of time when you’re designing a user interface. Put simply: If a pattern exists, embracing it (and modifying it if you need to) saves you from doing work that’s been done before by others.

With that point stressed, let’s explore some typical user interface patterns you may find useful.


### Date Pickers

As user interface designers we frequently encounter a need for date patterns. A user might, for example, need to:

+ book a flight;
+ add a reminder to a calendar; or
+ make an appointment.

All of these interactions require a date – or a span of dates – to be selected. At the simplest level, a date selection pattern will include a calendar of some description, allowing the user to select dates. At a more complex level, we might need to consider the inclusion of times in the users’ selection.

As I’ve stressed throughout this book (in particular, in Chapter 1) users have mental models of how these interactions function, based on their past experience. Rather than try to reinvent the wheel it makes sense to explore what has already been tried and tested and proven to work.

Google’s flight selector is a great example of a date selector that’s beautifully designed, intuitive and easy to use.

IMAGE

By pre-focusing on a pre-selected date, it **gives the user a head start**. Of course, not all users will want to travel on the date that Google’s designers have pre-selected, so **the design makes it easy to pick another more convenient date to travel**.

What’s particularly nice about Google’s approach to this pattern is its use of **subtle, yet delightful interactions, which provide feedback to the user in a delightful manner**.

As computers have become more powerful and, hand-in-hand with this, our connections to the web have become more accommodating, there has been **a rise in the use of animation within interfaces**.

Users now expect animation to be an integral part of a user interface and, as a consequence, static interfaces have become less appealing. I’ll explore the use of animation in [Chapter 7: Animating Interfaces](#), but as I explore patterns, it’s worth bearing in mind that **patterns exist not just for how elements look, but also how they feel**.

As you explore patterns and build your own library of examples, it’s worth noting how the various patterns you encounter work at an interactive level, considering:

+ how interfaces change as you interact with them;
+ how transitions are used to signal a shift from one state to another; and
+ how long transitions take.

MAYBE STICK WITH MY OWN EXAMPLE SO THIS CHAPTER BUILDS ON THE DESIGN SYSTEM I’M ESTABLISHING AND USE GOOGLE’s PICKER FOR A PATTERN ANALYSIS (ON NOTIST).

UI Patterns, which I explored in Section 1, has [a useful collection of date pickers](http://ui-patterns.com/patterns/CalendarPicker) that are worth looking at.


### Register / Sign-In Forms

As more and more applications move towards the web the need for Register / Sign-In forms has grown. When a user first encounters a web-based application they will often be asked to register an account. This allows information relevant to the user to be stored for their return.

Once a user has registered, they will need to sign-in to access their account. **If signing in is important to the application you’re building, it’s essential to ensure that the sign-in form is clearly signposted.**

Registration and Sign-In forms at the very least require two pieces of data:

+ a username; and
+ a password.

Some forms ask for more information, but **as a rule of thumb it’s best to keep your forms as short as possible**.

If your goal is for users to sign up for an account, you want to **remove as much friction as possible** and removing form fields is a good way to do this. As a user becomes more embedded, using your application more frequently, **you can ask for additional information you might need**.

In addition to the design of the core registration and sign-in forms there’s a need to consider what happens should users forget their registration details. In this example, I’ve focused on the registration and sign-in forms, but you’ll also need to consider how you support users who have forgotten or lost their details.

It might be tempting to kill two birds with one stone and present users with both the registration and sign-in forms in two forms side-by-side. This often leads to confusion, however, where a user tries to register by using the sign-in form (or vice-versa).

A better approach is to **present the user with one form, with a clearly signposted link to the other form**.

<!-- Look at Silver, pp212-213. It’s excellent. Perhaps mention this in the required reading also? -->

I’ve focused on sign in forms because doing so enables me to explore forms (about which entire books have been written!), but do it in a more focused way without getting lost in detail.

If the user interface you’re designing includes forms – and it’s highly likely it will – I’d strongly recommend Adam Silver’s [Form Design Patterns](https://shop.smashingmagazine.com/products/form-design-patterns-by-adam-silver). It’s comprehensive and – like all books published by my friends at Smashing Magazine – it’s beautifully designed and printed.


### Credit Card Forms

_/* Look at Letterboxd’s credit card form. */_

The web has long proven a powerful platform for digital commerce and, as such, credit card patterns – which codify the input of users’ credit card details – are in plentiful supply.

One of the wonderful aspects of working on the web is its leanings towards openness. Thanks to the web’s beginnings, in particular its open ‘View Source’ culture, we’ve inherited a culture of shared understanding where talented individuals share their thinking for the benefit of all.

UX Collective, which gathers ‘curated stories on user experience, usability and product design’, offers a wealth of information and Gabriel Tomescu’s [‘Anatomy of a Credit Card Form’](https://uxdesign.cc/the-anatomy-of-a-credit-card-payment-form-32ec0e5708bb) takes the ubiquitous credit card form we meet, day-in day-out, and presents an exhaustive analysis of credit card patterns and is required reading should your project require payments of any kind.

When money is changing hands, it’s important to establish a bond of trust, indicating to the users that their card details are safe and secure. UI Patterns has a helpful article on [Designing for Trust](http://ui-patterns.com/blog/Designing-for-trust) that’s worth reading so you can put your users’ minds at ease.


### Notifications

Notifications are useful to alert users and **draw their attention to important updates or messages**. There’s a useful roundup of what not to use notifications for at UI Patterns:

[ui-patterns.com/patterns/notifications](http://ui-patterns.com/patterns/notifications)

Try and find some more examples of where notifications might be useful. The UI Patterns list is good for what not to do, but not so good on what to do.

Notifications can appear in a number of ways:

- at the system level; and
- at the application level.

System level notifications offer a number of benefits, not least because they’re persistent at the top level of the interface, i.e. your users can be made aware of notifications when the application you’re building isn’t open.

Most operating systems will allow you to tie into system level notifications using SDKs (Software Development Kits) or APIs (Application Programming Interfaces). SDKs and APIs are beyond the scope of this book, but as you consider the design of your notifications, it’s worth bearing in mind that they are available.

Just because you can present your users with notifications doesn’t mean you should with abandon. Notifications can, if you’re not careful, prove irritating, pestering users about often trivial matters. Use your judgment.


### Profile Cards

_/* I might remove profile cards, because they are – to a degree – explored in the Dribbble case study. */_

This section picks up from the earlier examples, including the case study from Dribbble, and shows some different approaches towards the design of profile cards.

I’ll be including: tags, social buttons (circles?) and call-to-action buttons, that way I can talk about components and hammer the point home that these card patterns can draw on the components we’ve designed.



Section 4: Information Architecture
-----------------------------------

<!--

Donna Spence’s Five Simple Steps book explains this well (pp3-4 are great), essentially explaining that Information Architecture is all about…

-->

Given that this chapter is titled ‘Information Architecture’, I think it’s important I explain what that means! Essentially, **information architecture focuses on organising and structuring information so we can improve its findability and discoverability**.

**The information architecture of websites and applications is critical** because – if it's done well – it will enable users to find the information they're looking for and complete the tasks that they need to complete. Conversely, if the information architecture is ill-considered, it leads to frustrated users who will very quickly find an alternative solution.

Put simply, information architecture is all about:

1. organising content or objects;
2. describing it clearly; and
3. providing ways for users to get to it.

The above is true of: **parts of a page** (patterns, e.g. forms); **the page itself**; and **the page in relation to other pages**.

It’s essential that we ground everything that we design, no matter how complex, with the principle of helping our users ‘find their way’.

As user interface designers, **our role is to orchestrate the elements that comprise patterns and pages and impose some order on them**. We need to take different objects, components, patterns and groupings of content (words, imagery, video…) and organise everything.

This is where information architecture (IA) comes in.

Everything we design is created from content. When we design a UI, we take this content and we organise it, enabling the user to navigate it and help them to quickly and easily find their way. As we design, we need to consider the hierarchy of the content we're organising and apply that hierarchy to our patterns, pages and flows.

There’s an information architecture at each of these resolutions: patterns will have their own information architecture, as will pages, which are created from components and patterns.

I’ll explore flows in [Chapter 4: Getting From A → B](#) so – in this chapter, I’m focusing on patterns and pages – but the overall emphasis remains the same: We need to ensure everything is clearly signposted.

<!--

_At this point I’ll use the supermarket metaphor that Donna Spencer has used in her book. Donna used chocolate, but I’m using ice cream. (The freezers are broken, so it’s as if this page is down for maintenance.) I can still find what I’m looking for, however… */_

NNg: "Just like the [IA](https://www.nngroup.com/articles/ia-vs-navigation/) reflects the information structure of a website, the  [mini-IA](https://www.nngroup.com/articles/mini-ia-structuring-information/), which is made up of all the page headings and subheadings, reflects the information structure of a page.

-->


### Finding The Ice Cream

This section is on wayfinding and uses the metaphor of a supermarket – full credit to Donna Spence for this idea – and uses this metaphor to explain what IA is.



### Wayfinding Patterns

There might also need to be a subsection on wayfinding patterns we can use, including:

+ Navigation Patterns (Top, Footer);
+ Breadcrumb Trails (Where am I?); and
+ Shopping Cart Flows

I'm working on this chapter just now (22 August) so I'm aiming to expand this section shortly.



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

+ usability.gov has an excellent overview of [Information Architecture Basics](https://www.usability.gov/what-and-why/information-architecture.html) that’s well worth reading. The site is an excellent resource that – whilst primarily focused on design for government – offers a wide range of resources that are applicable beyond design for the public sector.

+ Finally, Steve Krug’s [Don’t Make Me Think, Revisited: A Common Sense Approach to Web Usability](https://amzn.to/2Xa5DS3) is a timeless book that I’d highly recommend. Whilst focused on usability, it contains a wealth of insights that are applicable when considering your overall information architecture.

_/* I think I’ll replace the usability.gov link with Diana MacDonald’s [Practical UI Patterns for Design Systems](https://didoesdigital.com/project/book-practical-ui-patterns-for-design-systems/). It looks great and Apress are sending me an inspection copy. */_