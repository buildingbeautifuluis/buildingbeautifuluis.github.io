---
chapter-number: "01"
title: "Designing Interfaces"
opening-text: "<p class='text--warning'><strong>As I noted in the book’s overview, this is a work in progress and I’m sharing it here in draft form.</strong> The overall book isn’t finished, but I hope the chapters I’m publishing have some value as I finalise work on the book.</p>

<p>In this chapter <strong>I’ll explore how we arrived at where we are today. I’ll provide a brief history of user interface design</strong> – drawing from principles of human-computer interaction (HCI) – so that <strong>the lessons we’ve learned from the history of UI design aren’t lost</strong>.</p>

<p>I’ll also stress <strong>the importance of understanding metaphors and mental models</strong>, which underpin UI design. Lastly, <strong>I’ll detail a number of current user interface design systems</strong>, including: Apple’s Human Interface Guidelines; Google’s Material Design and IBM’s Living Language.</p>"

table-of-contents:
  - section: "1"
    section-title: "The ‘UI’ in ‘GUI’"
  - section: "2"
    section-title: "Designing Human Interfaces"
  - section: "3"
    section-title: "Desktops and Metaphors"
  - section: "4"
    section-title: "Establishing Clear Mental Models"
  - section: "5"
    section-title: "UI, Here and Now"
---



<!--

This chapter is at the editing stage, so it’s readable. I’ll be further developing the images shortly, but the content itself should – I hope! – be sound.

As I’ve noted in the [overview](https://github.com/buildingbeautifuluis/bbuis/blob/master/00-Overview.md), this is a work in progress and I’m sharing it here in draft form. The book isn’t finished, but I hope the draft content I’m providing has some value as I finalise the chapters.


**Notes to Self**

1. User Interface vs. UI

Should each chapter spell out user interface in full before subsequently using UI? I think each chapter should kick off with user interface in full, that way folks who have skipped Chapter 1, or who have dived right into a later chapter, get the term spelled out in full before the acronym.

Thinking about this more, I think I should spell out user interface when I refer to an interface and use UI designer, when I refer to the role.


2. Digital Products?

Also, should I define (and use) the term digital product right at the start? Like our Little Thunder proposals. This would save me writing ‘websites and applications’ over and over again, and would be a little more contemporary.

Check with Kyle and Paul for a second opinion. If I do adopt the ‘digital products’ terminology I should perhaps mention it in the overview and in Chapter 1.


3. Chapter Structure

Structurally Chapter 2’s sections are consistent:

+ Introduction:		2.1.0
+ Part 1:			2.1.1
+ Part 2:			2.1.2

I think they should all follow the same rhythm (This is me and my OCD! I like consistency – except for outliers, like the ‘A Library of Elements’ section in Chapter 2, which won’t fit.)


4. Selected Bold Text

This chapter needs selected bold text, like Chapter 2. Do this once I’ve paased it over to Kyle for editing.


5. iOS ≠ Android

Designing for different platforms. This needs to be a sub-section on its own that explains the importance of adopting the ‘design language’ and paradigms of the platform you are designer.

An iOS application and an Android application – even if they are the sam application by the same company – will be tailored to the different platforms. (Again, this is about users’ expectations and mental models.

Compare and contrast:

1. Reply:

+ https://material.io/design/material-studies/reply.html#reply

+ https://www.androidcentral.com/reply-wants-add-smart-replies-all-your-messaging-apps

2. Mail:

+ https://apps.apple.com/us/app/mail/id1108187098

-->



Overview
--------

<!--

The following should perhaps be moved to the book overview. It seems a bit more high level as it has informed my thinking for **the whole book**. Discuss with Kyle. TK

InVision’s author – Jane Portman – kicks off with an explanation of the app she’s building and how that’s informed her book. I think we should do the same, but draw on:

1. My last semester of teaching (maybe link to example student projects?); and
2. My consulting work, in particular with Little Thunder.

Here is Portman’s ebook:

https://www.invisionapp.com/ecourses/fundamental-ui-design

-->

I’m a firm believer in drawing my teaching materials from the real world. As an Associate Senior Lecturer at Belfast School of Art (teaching half-time) I’m fortunate to divide my time between:

+ real world design projects for a wide range of clients, both large ([EA](https://www.ea.com)) and small ([Niice](https://niice.co)); and

+ teaching students on my undergraduate [Interaction Design](http://ixdbelfast.org) programme.

Everything in this book (and its accompanying materials) has been tried and tested. I’ve drawn the examples from research I’ve undertaken, client projects I’ve worked on and – where appropriate – samples of my students’ work.

I’ve included my students’ work, because I’m proud of the work they’re doing and – equally importantly – these are relatively young students and they’ve come a long way with their User Interface (UI) design in a relatively short space of time. I hope their work inspires you to do similarly impressive work.

In this first chapter I’ll set the scene, providing a little history and context. If you’re up-to-speed on the history of user interface design, and have an understanding of the importance of metaphors and mental models, you might wish to fast-forward to [Chapter 2: The Building Blocks of Interfaces](https://github.com/buildingbeautifuluis/bbuis/blob/master/02-Chapter-2-The-Building-Blocks-of-Interfaces.md) where I get into hands-on practicalities.

UI design stretches back to the early GUIs of the 70s and the emergence of computers as devices that were available beyond the confines of universities and big businesses.

The rise of the personal computer – a revolutionary idea in its time – brought with it the need for a way to interact with computers that was as easy and friendly as possible.

This intense period in computing history saw the emergence of the field of Human-Computer Interaction (HCI), focused on the relationship between the design of computer technology and the interaction between humans (users) and computers.



Section 1: The ‘UI’ in ‘GUI’
----------------------------

{% include figure.html url="/images/ch1/command-line-interface.png" alt="" description="Before graphical user interfaces (GUIs) were imagined in the 70s and 80s, users would interact with a computer via a command-line interface." %}


Before I dive into the depths of user interfaces (UIs), I think it’s important to get some definitions out of the way. The term ‘UI’ we know and love today has its origins in the 70s term ‘GUI’, an abbreviation of **graphical user interface**.

UIs might feel commonplace to us today, but when they were first imagined they represented a fundamental shift in how we interacted with computers. Before the emergence of GUIs, working with a computer involved typing arcane commands into it via a text-based terminal from a [command-line interface](http://www.catb.org/esr/writings/taouu/html/ch02s02.html) (CLI), a little like the following command that produced a printable calendar:

	calendar

To work with a computer a user first needed to ‘learn its language’, which was no small task. As Eric S Raymond puts it in ‘The Art of Unix Usability’ (a wonderful and lightly styled HTML website):

> These command-line interfaces placed a relatively heavy mnemonic load on the user, requiring a serious investment of effort and learning time to master.

The emergence of graphical user interfaces allowed for a much friendlier (and easier to learn) way of interacting with computers. This shift from text-based interaction to graphical interaction changed everything.

In 1973, Xerox PARC developed the Alto personal computer, the first computer imagined from its inception to support an operating system that was based on a graphical user interface. Remarkably, the Alto was first introduced on 1 March, 1973, a full decade before mass market GUI computers became available.

The Alto’s interface – which used windows, icons and menus and allowed the user to open, move and delete files – embraced metaphor and a graphical approach. This is, of course, commonplace here and now, but it caught the eye of Steve Jobs who, rightly, saw this approach as the future of computing.

{% include figure.html url="/images/ch1/macintosh-gui.png" alt="" description="The Original Macintosh Interface" %}

One of the best known early GUIs was Apple’s pre-OS X operating system. System 7 (which was the first graphical user interface I started using many, many years ago!). System 7 (and, before it, Apple’s Lisa OS) was considerably easier to navigate than issuing commands via a keyboard.

This graphical interface coupled with the use of a mouse changed computing forever. Users could directly interact with the objects within an interface manipulating them directly.

The emergence of the very first iPhone in 2007 took this a small, but important step further. Instead of using a mouse, on your iPhone you were using your fingers to **directly manipulate the interface**.

This shift away from the abstraction, one-step-removed, of a mouse towards physically interacting with objects on a screen underlies our current context. In a desktop environment we still use mice, but in an increasingly mobile environment we find ourselves interacting directly with the UI, **physically touching objects on a screen**.

Understanding this history might seem like a distraction, but spending a little time familiarising yourself with it helps you understand timeless principles, **still relevant today**, like:

+ Information Architecture
+ Human-Computer Interaction
+ The Use of Metaphor in UI
+ Mental Models
+ …

Of course user interfaces have come a long, long way since the early 70s and we’re now witnessing the rise of non-graphical user interfaces, particularly conversational and voice interfaces. In this book, I’ll focus primarily on graphical user interfaces across a range of contexts:

+ Desktop (Mouse)
+ Tablet → Smartphone (Finger)
+ Wrist (Finger)

If conversational and voice interfaces interest you, have no fear, I have you covered. I’ll explore where interfaces are heading in [Chapter 9: Where to from here for UI?](https://github.com/buildingbeautifuluis/bbuis/blob/master/09-Chapter-9-Where-to-from-here-for-UI%3F.md). So I’ll be covering all of the bases.



Section 2: Designing Human Interfaces
-------------------------------------

{% include figure.html url="/images/ch1/human-interfaces.jpg" alt="A man using an iPhone." description="Users are often using their phones (and other devices) whilst undertaking other tasks. By ensuring your UI is clear and easy to understand you get out of their way, enabling the, to focus on the task at hand." %}

The trouble with the term ‘user interface’ is that it abstracts humans (messy, unpredictable and… human!) into an anonymous category of ‘users’. In fact these users are all different, above all, they’re all **humans**.

I’m not going to reinvent the wheel and call this book *Building Beautiful HIs* (‘Building Beautiful **Human** Interfaces’), but as you read it – and as you design – put some thought into the different humans that will use the designs you create. Consider:

+ Age: Young and Old
+ Gender: Male and Female (And everything in between or outside these terms.)
+ Geographical Context: Where in the world these users are.
+ …

It’s critical to consider the above mix so that the UIs we design cater to as wide an audience as possible. Designing for accessibility and inclusivity is important in our increasingly diverse global culture. So as we design, let’s design responsibly and factor this in.

It’s no surprise to me that Apple chose to name its excellent Human Interface Guidelines (HIG) **Human** Interface Guidelines, not **User** Interface Guidelines. By embracing the term ‘human’, Apple acknowledges that at the receiving end of every interface lies a human, and that human wants to get something done.

When you’re designing a UI, bear in mind that the user using your interface will very likely be dealing with everyday distractions. As such, it’s important to ensure your UI is easy to understand and distraction free.

Humans are trying to achieve tasks – perhaps to book a flight, or to buy a book – while juggling other human tasks, for example, feeding a baby. Understanding this is critical. The best user interfaces get out of the way and help you to get things done with the minimum of fuss.

By focusing on first principles you’ll improve your UI by:

+ getting out of the user’s way;
+ focusing on maximum functionality; and
+ helping your users (preferably minimising opportunities for error and – when things go wrong, as they inevitably do – helping them to recover from those errors).

Few, if any, users will come to your interface without prior knowledge (of other interfaces), as such, it’s important to understand the ‘received knowledge’ that your users bring to your interface.

We all use interfaces day in, day out and – as we use them – we learn conventions, standardised approaches towards particular problems. Before we get into the fundamentals of designing UIs, it’s worth mentioning two important concepts:

+ Metaphors; and
+ Mental Models

I’ll explore these in the next two sections. Unless you’re deeply aware of these principles, **I’d strongly recommend you resist the urge to fast-forward to Chapter 2**. Every interface you design will benefit from an understanding of metaphors and mental models so let’s dive in and explore them.



Section 3: Desktops and Metaphors
---------------------------------

{% include figure.html url="/images/ch1/metaphor-shopping-cart.png" alt="" description="By embracing a shopping cart metaphor, different user interfaces adhere to a common language. Users understand – thanks to regular use – what a shopping cart stands for and this metaphor eases their use of the UI (a win!)." %}

If you’ve ever bought anything from Amazon, you’ll have encountered metaphors. When you add something to your basket at Amazon, there is in fact no ‘basket’. The basket is just a metaphor – drawn from the real world – to help you understand where you store your items.

As you check out and pay for your items, there is (thankfully) no check out line. You simply pay with your credit card and, magically, your purchases are on their way. This is metaphor in action.

By using everyday models from the ‘real’ world, we can design easily understandable UIs that need very little in the way of explanation.

Understanding the existing use of metaphors is important. If a convention exists – a shopping basket, for example – it’s best to stick with this metaphor and resist the urge to invent a new one.

When users navigate a UI that is new to them, they do so with the received knowledge of **every other UI they have ever used**. Even if your UI is for a new product that’s breaking new ground, there will be conventions you can draw upon.

Returning to our checkout metaphor, if your product features payments of any kind, your UI will benefit from following pre-existing checkout conventions. Users might:

+ add items to their ‘basket’;
+ continue browsing the ‘store’, before returning to their basket; and
+ finally, ‘checking out’.

When Apple launched its System 7 (and earlier) GUIs it used metaphors extensively. By using a ‘desktop metaphor’, users could understand and build a mental model of how everything worked.

When a user stored a ‘document’ in a ‘folder’, they understood that there was no physical, paper document per se, or even a folder. They understood that these were simply metaphors to help explain what was happening under the hood in an easy to understand manner.

Similarly, when users discarded an item in the ‘trash’ and later ‘emptied the trash’, no trash lorry arrived at their house.

This foundational use of metaphor stretches so far back that it has informed almost every operating system since it was conceived and has mapped over from a desktop context to a mobile context.

By using an ‘iconic’ approach, we can summarise concepts in an easy to follow manner. For example, we might use:

+ A ‘cog’ icon that users understand represents ‘settings’.
+ An ‘envelope’ icon that represents ‘email’.
+ Or a ‘folder’ icon that represents ‘a place to organise files’.

Designers have co-opted ‘real world’ objects to represent digital objects. When we click on a cog, we know that the settings we’re about to modify aren’t made up of actual cogs, this is just an idea.

You can improve your UI design by embracing the use of metaphor. Do so and your users will understand – based on their previous experience – how things work.

As you use desktop, tablet and mobile applications, take note of the different conventions that exist. You’ll find that a great deal of groundwork has been covered by others and, if you stick to pre-existing conventions, you’ll ensure that your user interfaces tap into this collective understanding. 



Section 4: Establishing Clear Mental Models
-------------------------------------------

<!-- ![Placeholder Image](/images/ch1/mental-models.png)

**CAPTION: This image will show a diagram of a mental model. (Something like this image, but redrawn by me.)** -->

<!--

Stylistically, this is a nicer image, but do this in the style I did for the Adobe + Smashing Magazine UX articles.

https://s3.amazonaws.com/ceblog/wp-content/uploads/2018/01/16213553/Conceptual-Model-Vs-Mental-Model.png

-->

{% include figure.html url="/images/ch1/mental-models.png" alt="" description="" %}


A mental model is an explanation of an individual’s imagined thought process about how something works in the real world.

The idea that users rely on mental models was first proposed by the Scottish psychologist Kenneth Craik in 1943. Craik suggested that the mind constructs ‘small-scale models’ of reality that it can use to anticipate events.

In 1971, Jay Wright Forrester – a pioneering computer engineer and systems scientist – developed Craik’s thinking, defining mental models as follows:

> The image of the world around us, which we carry in our head, is just a model. Nobody in his head imagines all the world… [They] have only selected concepts, and relationships between them, and [they] use those to represent the real system.

Whatever the interfaces we design, it’s highly likely that **our users will have experienced other interfaces that will have established a ‘mental model’ in their mind of how things work**. As Jakob Nielsen puts it:

> What users believe they know about a user interface strongly impacts how they use it. Mismatched mental models are common, especially with designs that try something new. […] Mental models are one of the most important concepts in human-computer interaction.

Users have mental models based upon their past experiences and it’s important that we take these mental models on board when considering our user interface design. **A mental model is what the user believes about the system they are using.** Put simply:

+ Mental models are based upon beliefs, not facts: that is they are mental models of what users know – **or think they know** – about the interface that you’re designing.

+ Individual users have different mental models based upon their own unique past experiences.

One of the biggest problems we run into when designing user interfaces is **the conflict between what we – as the designers of the interface – know about the underlying system and how it works, and how users expect things to work**.

When considering your UI design, it helps to consider how your interface relates to others’ interfaces. In short: **Users expect sites and applications to act and work alike.** Introducing new models can lead to confusion on the part of the user, resulting in an interface that doesn’t work.

You – as the designer – might know how the interface works (because you created it), but the user is confused (because they have a different understanding of the interface you’ve designed, based on their past experiences with other interfaces).

Regardless of what we’re designing, it’s important to embrace users’ mental models and marry these with fundamental principles of design to ensure that the interfaces we build are easily understandable.

I’ll explore this, stressing the need for a clear overall concept and a strong visual hierarchy – ensuring complex information is easy to understand and navigate through – in [Chapter 3: Information Architecture](https://github.com/buildingbeautifuluis/bbuis/blob/master/03-Chapter-3-Information-Architecture.md), when I explore how we map out user interfaces at a high level.



Section 5: UI, Here and Now
---------------------------

{% include figure.html url="/images/ch1/interface-guidelines.png" alt="" description="" %}

<!-- ![Placeholder Image](/images/ch1/interface-guidelines.png)

**CAPTION: This image will show a montage, in thirds, of: 1. Apple’s Human Interface Guidelines, 2. Google’s Material Design, and 3. IBM’s Living Language.** -->


Fortunately there are a wealth of resources available to us that can inform our understanding of UI design. Apple’s Human Interface Guidelines, Google’s Material Design, and IBM’s Living Language all offer lessons we can learn from, regardless of the devices we’re designing for.

These resources provide a useful overview of designing interfaces at a high level and are well worth exploring before we get into analysing how interfaces are built in Chapter 2.

As I noted earlier, I think the fact that Apple provides **human** interface guidelines – and not **user** interface guidelines – is an important distinction. We’re seeing a return to terms like human-centred design (as opposed to, say, user experience design) and Apple’s [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) naming is prescient.

Apple is treading a bit of a tightrope, clearly they don’t want to lose sight of their heritage (and their first set of groundbreaking Human Interface Guidelines), but – as you’ll see in the copy on their page – they use both terms: **human** interface and **user** interface.

{% include figure.html url="/images/ch1/apple-human-interface-guidelines.png" alt="Apple’s Human Interface Guidelines" description="Apple’s Human Interface Guidelines provide in-depth information and resources for designing interfaces that work on Apple’s various operating systems (macOS, iPadOS, iOS…)." %}

<!-- ![Apple’s Human Interface Guidelines](/images/ch1/apple-human-interface-guidelines.png)

**Caption: Apple’s Human Interface Guidelines provide in-depth information and resources for designing interfaces that work on Apple’s various operating systems (macOS, iPadOS, iOS…).** -->


Developed in 2014, Google’s [Material Design](https://material.io/design/) expanded on the ‘card’ motifs that debuted in Google Now. Material Design uses more grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.

<!-- Check the above paragraph, it feels like it’s from Google’s Material Design copy. It also needs to be expanded a little so that it’s about the same weight as Apple’s. -->


{% include figure.html url="/images/ch1/google-material-design.png" alt="Google’s Material Design" description="Google’s Material Design guidelines provide in-depth information and resources for designing interfaces that work across a range of devices." %}

<!-- ![Google’s Material Design](/images/ch1/google-material-design.png)

**Caption: Google’s Material Design guidelines provide in-depth information and resources for designing interfaces that work across a range of devices.** -->


IBM’s [Living Language](https://www.ibm.com/design/language/) – designed to be a shared vocabulary for design – represents IBM’s move into a design-driven culture and is well worth exploring. Currently on v2, IBM are also maintaining an archive of past versions, which offer a great deal of practical advice for designing user interfaces.

As IBM put it in their Living Language: “Focus on users’ goals. Design tools that lead people to actionable insights. Be proactive, always anticipating users’ next moves and helping them prepare for change.”

{% include figure.html url="/images/ch1/ibm-living-language.png" alt="IBM’s Living Language" description="IBM’s Living Language is described as, “A shared vocabulary for design.” It represents IBM’s move into a design-driven culture and is well worth exploring." %}

<!-- ![IBM’s Living Language](/images/ch1/ibm-living-language.png)

**Caption: IBM’s Living Language is described as, “A shared vocabulary for design.” It represents IBM’s move into a design-driven culture and is well worth exploring.** -->

Lastly, [styleguides.io](http://styleguides.io) is a very useful roundup of other approaches to developing user interface libraries and style guides. It’s worth bookmarking and offers an insight into how a wide range of companies, both large and small, are moving towards the development of visually consistent user interface libraries.

As of 2019, styleguides.io has gathered 500+ different resources and it’s worth exploring to get a feel for how other companies – that are smaller in scale to Apple, Google and IBM – are approaching the question of creating consistent user interface guidelines.


{% include figure.html url="/images/ch1/styleguides-io.png" alt="styleguides.io" description="styleguides.io is also worth bookmarking for a useful overview of how other companies – at a wide range of scales – are handling user interface design." %}

<!-- ![styleguides.io](/images/ch1/styleguides-io.png)

**Caption: styleguides.io is also worth bookmarking for a useful overview of how other companies – at a wide range of scales – are handling user interface design.** -->


Closing Thoughts
----------------

All being well, this chapter has introduced you to some **important aspects of computing history, paving the way to where we’ve reached today**.

In the next chapter – [Chapter 2: The Building Blocks of Interfaces](https://github.com/buildingbeautifuluis/bbuis/blob/master/02-Chapter-2-The-Building-Blocks-of-Interfaces.md) – I’ll introduce the fundamental building blocks that interfaces are made from: Objects, Elements, Components, Pages and Flows, so that you can start to build your own user interface designs. 🎉



Further Reading
---------------

There are many great publications, offline and online, that will help further underpin your understanding of user interface design. I’ve included a few below to start you on your journey.

+ I’d strongly suggest starting by exploring Apple’s [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/), Google’s [Material Design](https://material.io/design/) resources, and IBM’s Living Language ([Version 1](https://www.ibm.com/design/v1/language/) and [Version 2](https://www.ibm.com/design/language/)). These provide a useful overview of designing interfaces at a high level and offer an insight into the design vocabularies of different platforms.

+ The Interaction Design Foundation have a useful overview of UI design titled [What is User Interface (UI) Design?](https://www.interaction-design.org/literature/topics/ui-design) It’s well worth a read for a high level introduction to user interface design.

+ Lastly, Nielsen Norman Group have a comprehensive overview on [Mental Models](https://www.nngroup.com/articles/mental-models/) that is well worth reading. Additionally, they have [a wealth of additional articles and videos](https://www.nngroup.com/search/?q=mental+models) on the topic, that are worth exploring.