Notes for Feedback
==================

A Wee Update
------------

	Monday, 22 July

Yesterday I had a lengthy discussion with both [Jordan Moore](https://twitter.com/jordanmoore) and [Lee Munroe](https://twitter.com/leemunroe) about the topic of naming conventions (outlined below).

**Thank you Jordan and Lee for your help.**

One thing we all agreed on is that there are a lot of often conflicting naming conventions in use. Of course, finding the ‘one true naming convention’ is a quest worthy of [Don Quixote](http://theconversation.com/guide-to-the-classics-don-quixote-the-worlds-first-modern-novel-and-one-of-the-best-94097), it’s doubtless doomed to failure.

For now I’ve settled on the following terms:

	Objects → Components → Patterns → Pages → Flows

I’ve explained these in this sample from my book, where I explore [Naming Conventions](https://github.com/buildingbeautifuluis/bbuis/blob/master/99-Naming-Conventions.md). The diagram at the top sums everything up visually and it’s followed by some definitions.



The thorny issue I’m grappling with…
------------------------------------

	Sunday, 21 July


In the [May 2019 Update](https://theblog.adobe.com/xd-may-2019-update-create-design-systems/) to XD, **Adobe changed its terminology and introduced supercharged ‘symbols’, which they called ‘components’**. I was using the word components to mean something **higher up the chain of complexity**, but I think I need to revisit my naming convention as the whole book is built around this naming convention and I don’t want to introduce confusion.

In light of how Adobe is using the term components, and through further research – especially looking at GOV.UK’s [Design System](https://design-system.service.gov.uk), which uses components differently to how I had used the term – I think I need to rethink the ‘Objects → Elements → Components’ part of the equation.

It’s worth noting before I dive in, that I purposely didn’t use Brad Frost’s Atomic Design naming conventions (it’s interesting, it has changed how we think about systems, and Brad is a friend of mine). However:

1. I find the terminology (which mixes chemistry and biology metaphors) very confusing, and my students and studiomates find it confusing, too.

2. Atomic Design is very much in the realm of front-end development and I think UX /+ UI is evolving to become a separate specialism – which, for a lot of UX /+ UI designers, like me, doesn’t involve front-end development – but does, of course, involve **an understanding of code**.

**Here’s where I am just now (22 July, 2019):**

When I was teaching my students at Belfast School of Art last semester, I used the following terminology, which I’ve used in the book (v1, below):

	Objects → Elements → Components → Pages → Flows

You can see a visual of this [here](images/ch2/objects-elements-components-2px.png).

+ An **object** is a basic building block from which we build interfaces: points (circles), lines and planes; icons; and typographic elements. (Icons are built from objects, too.)

+ An **element** is *created from objects* and, as I’ve used it below, is something like [a button](images/ch2/buttons.png), [a toggle](images/ch2/toggles.png), or [a progress indicator](images/ch2/progress-indicators.png), etc..

+ A **component** is *created from elements* and, as I’ve used it below and in the next chapter, is something like a [card](https://design-system.futurelearn.com/molecules/card), a [date picker](https://design-system.futurelearn.com/molecules/date-input), or a [feed item](https://design-system.futurelearn.com/molecules/feed-item), etc..

+ A **page** is *created from objects, elements and components*.

+ A **flow** is *created from a series of pages that are linked together*. A flow is what we’re building towards – **from the ground up** – and is the most complex part of the equation.

Last night, at 2.30 am, all of this collapsed, after re-reading GOV.UK’s [Design System](https://design-system.service.gov.uk/) documentation.

😢

**I need to fix this now – as it impacts the whole book – which is why I’m asking for your help, which I very much appreciate!**

🤗

GOV.UK’s *components* are what I’ve been calling *elements* so I need to rethink my approach (I think) and move components further down the chain of complexity.

Here is how GOV.UK defines [components](https://design-system.service.gov.uk/components/):

> Components are reusable parts of the user interface that have been made to support a variety of applications.
> —GOV.UK

Put simply, GOV.UK’s *components* are my *elements*, so I might need to rethink my approach like this:

	Objects → Components → ???? → Pages → Flows

This would have the benefit of fitting with how XD is now naming supercharged symbols as components. It would also build on existing GOV.UK naming conventions, paving the cowpaths, which is a good thing.

Here is how GOV.UK defines [patterns](https://design-system.service.gov.uk/patterns/), which are what I was calling components:

> Patterns often use one or more components and explain how to adapt them to [different] contexts.
> —GOV.UK

This now strikes me as making much more sense. So: **objects** are used to build **components**, which are then organised into **patterns**, that are then used to build **pages** and, subsequently, tied together as **flows**.

My gut tells me to follow GOV.UK’s naming conventions so I’m not introducing **yet another methodology** that will confuse people. So, I’m thinking of changing the naming convention to this:

	Objects → Components → Patterns → Pages → Flows

One added benefit of using the term ‘patterns’ is that **I can also reference Christopher Alexander’s 1977 book *A Pattern Language*, which I cover a great deal in my teaching**.

[I’d welcome your thoughts on this.](mailto:christopher@mrmurphy.com) I’m so far into the forest I could really benefit from an outside view to help me see the trees – and the forest! – a little more clearly.

All I really need is a simple Y / N answer (unless you have further thoughts) to the following question. Is this a better naming methodology?

	Objects → Components → Patterns → Pages → Flows

If you’d like to see these naming conventions in action, I’ve created [a short document – drawn from Chapter 2 – that uses these terms](https://github.com/buildingbeautifuluis/bbuis/blob/master/99-Naming-Conventions.md).

**Thank you!**