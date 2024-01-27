import { ArticlesConfigType } from "@components/utils/types";
import AreBooksRelevantInSoftwareDesign from "@components/assets/articles/are_books_relevant_in_software_design.webp";
import EightRulesOfSoftwareDesign from "@components/assets/articles/8_rules_of_software_design.webp";
import TheProblemWithTheJsEcosystem from "@components/assets/articles/the_problem_with_the_js_ecosystem.webp";
import TechToolsForSoftwareEngineer from "@components/assets/articles/tech_tools_for_software_engineers.webp";
import WhatProgrammingLanguageToLearnFirst from "@components/assets/articles/what_programming_language_to_learn_first.webp";
import WhatIsTechNoise from "@components/assets/articles/what_is_tech_noise.webp";
import SoftSkillsForSoftwareEngineers from "@components/assets/articles/soft_skills_for_software_engineers.webp";
import BooksOnSoftwareMyRecommendations from "@components/assets/articles/books_on_software_my_recommendations.webp";
import HowToConductCodeReviews from "@components/assets/articles/how_to_conduct_code_reviews.webp";

export const ArticlesConfig: ArticlesConfigType[] = [
    {
        id: 'how-to-conduct-code-reviews',
        thumbnail: HowToConductCodeReviews.src,
        title: 'How to conduct Code Reviews',
        subtitle: '10 January 2023',
        previewHtmlField: {
            __html: 'After spending a considerable time in the industry as a programmer, I’ve participated in ' +
                'numerous code reviews across various projects. I’ve noticed that many programmers struggle ' +
                'with code reviews which is concerning. Code reviews are a crucial step before pushing code to...',
        },
        htmlField: {
            __html: 'After spending a considerable time in the industry as a programmer, I’ve participated in numerous code reviews across various projects.\n' +
                'I’ve noticed that many programmers struggle with code reviews, which is concerning. Code reviews are a crucial step before pushing code to production, acting as a safeguard. It’s essential that we improve our approach to code reviews collectively.' +
                '<div>&nbsp;</div>' +
                'As a result, I’ve compiled a list of suggestions aimed at improving the code review process.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Make sure the tests pass.</h1>' +
                '<div>&nbsp;</div>' +
                'When dealing with software that’s equipped with tests (as it ideally should), your initial focus should be on ensuring these tests pass. It’s crucial that the tests run successfully before any further action is taken. If the tests fail, it indicates a breakdown in the software. At this point, I’d proceed with the review if only one or two tests failed, but I’d refrain from diving too deeply until the failing tests are resolved.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Manual testing.</h1>' +
                '<div>&nbsp;</div>' +
                'If all the tests pass and everything appears sound from that perspective, I proceed to conduct manual testing. Particularly with UI-related features, I invest time in navigating, clicking, and exploring functionalities based on the requirements. Ideally, if the tests pass, there should be no issues discovered during manual testing.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Verify edge cases, and write some unit-tests for them.</h1>' +
                '<div>&nbsp;</div>' +
                'Living in a less-than-ideal world means our tests might miss certain edge cases. However, as a reviewer, it’s essential to spot and address these potential gaps.' +
                '<div>&nbsp;</div>' +
                'Let’s say I conduct manual testing and discover issues; my next step is to determine if these edge cases are testable. Some features require careful consideration before test creation. I want to emphasize that tests represent an investment decision based on their return on investment (ROI). I’ll delve into this topic in a separate article.' +
                '<div>&nbsp;</div>' +
                'The point is, if you encounter bugs in testable code segments (most are testable if the code architecture is appropriately structured), it’s beneficial to create unit tests for them. You might question, “Why bother if I’m not the feature owner or the original coder?” Well, the answer lies in the next point I’d like to discuss.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Recommend code improvements based on facts and arguments.</h1>' +
                '<div>&nbsp;</div>' +
                'All code improvements you recommend should be backed up by facts. Recommending a change simply because “you feel it’s not right” isn’t acceptable; that’s not a valid reason. Good quality software doesn’t operate on feelings. Conversely, highlighting issues such as a function undertaking too many tasks or causing unintended side effects is a different matter. I’ve witnessed instances where programmers rush through recommendations without providing proper reasoning, and that’s inappropriate.' +
                '<div>&nbsp;</div>' +
                'Every change request during a code review should be supported by facts, arguments, and explanations. For instance, I am doing a code review and I recommend renaming a function for better clarity because it aligns with the fundamental principle that code is more often read than written — it needs to be crystal clear. What do you think about this principle? I can provide a link to an article, an excerpt from an interview, or perhaps a book that supports this notion. This is how you argue a code change suggestion.' +
                '<div>&nbsp;</div>' +
                'However, when identifying issues, the approach changes entirely. Finding an edge case requires writing a corresponding unit test, which serves as documentation — a clear indication of the necessary change. The key point I’m emphasizing here is the clarity behind change requests. Avoiding reasons like “I feel this is better” is crucial; our industry relies on facts, not feelings.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Leave room for debate.</h1>' +
                '<div>&nbsp;</div>' +
                'Always allow room for debate in code reviews. It’s not about asserting superiority or instructing others on how to work — it’s about suggesting changes based on facts. Using the term “suggestion” may sound gentle, but all code change suggestions should be seriously considered.' +
                '<div>&nbsp;</div>' +
                'When a suggestion is made, and the code author has a different perspective or conflicting facts to present, there should be space for discussion. As the reviewer, it’s essential to be open to recommended changes. Simultaneously, if you disagree, it’s crucial to challenge those suggestions based on solid reasoning. The person making recommendations should also be open to discussing facts if the evidence provided isn’t sufficient.' +
                '<div>&nbsp;</div>' +
                'The crucial point I’m emphasizing here is that code reviews should foster open conversations focused on what’s best for the codebase, rooted in factual analysis.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">So what is next?</h1>' +
                '<div>&nbsp;</div>' +
                'When you think about the last code review you conducted or received, was it an open discussion of suggestions, or did it feel more like imposing ideas? Were the reasons behind the suggestions based on facts, or were they influenced by others’ practices or personal feelings?' +
                '<div>&nbsp;</div>' +
                'Thank you!'
        },
        open_link: 'https://medium.com/@ciganoliviudavid/books-on-software-my-recommendations-91b7daef36e2',
    },
    {
        id: 'books-on-software-my-recommendations',
        thumbnail: BooksOnSoftwareMyRecommendations.src,
        title: 'Books on Software: My recommendations',
        subtitle: '6 January 2023',
        previewHtmlField: {
            __html: 'One month ago, I wrote an important article titled “Are books relevant in Software Design?” in ' +
                'which I aimed to explain and respond to this question. The short answer is yes, books are crucial ' +
                'in Software Design for several reasons. I also touch upon which...',
        },
        htmlField: {
            __html: 'One month ago, I wrote an important article titled “Are books relevant in Software Design?” in which I aimed to explain and respond to this question. The short answer is yes, books are crucial in Software Design for several reasons. I also touch upon which books are relevant, as not all provide valuable insights. I won’t delve into details here since that’s beyond the article’s scope, but I recommend reading it for a comprehensive understanding.' +
                '<div>&nbsp;</div>' +
                'Having educated myself in software for over 6 years, I’ve delved into numerous software books. I’d like to share my experiences, what I’ve learned, and what others can gain from them. Ultimately, I aim to recommend a set of books that can make a difference and cultivate the mindset of a Professional Senior Software Engineer.' +
                '<div>&nbsp;</div>' +
                'This is the initial iteration, as I have a couple more in mind, although I wouldn’t recommend too many right from the start.' +
                '<div>&nbsp;</div>' +
                'So here is the list:' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Implementation Patterns — Kent Beck</h1>' +
                '<div>&nbsp;</div>' +
                'This book offers a valuable insider’s perspective on structuring software. It delves into the architecture and implementation of software in a highly professional manner. However, the title might lead you to believe it’s about Design Patterns, which it isn’t. Instead, the book aims to familiarize you with coding patterns and ways to structure code to clearly convey intent to the reader. One of its most impactful statements that resonated with me early on was “Code is more often read than written.” This essentially sets the premise for the entire book, which focuses on creating a compendium of patterns and principles to enhance code quality..' +
                '<div>&nbsp;</div>' +
                'The book also emphasizes that software essentially combines communication, flexibility, and simplicity. Ideally, software possesses all three traits, but achieving this balance is challenging. Too much flexibility can diminish communication and simplicity, while excessive simplicity can limit flexibility. It’s a delicate tradeoff that demands careful consideration.' +
                '<div>&nbsp;</div>' +
                'I’ve noticed that Kent Beck leans toward prioritizing communicative and simple software over excessively flexible ones. Ultimately, maintaining a balance among these traits is what fortifies and sustains software longevity.' +
                '<div>&nbsp;</div>' +
                'While I mentioned the premise as “Code is more often read than written”, let me rephrase it slightly: in the book’s preface, Kent Beck strongly asserts that the foundation of the book rests on the delicate premise that Clean Code truly matters.' +
                '<div>&nbsp;</div>' +
                'The fact that he called Clean Code fragile made a guy called Bob Martin write the following book, which is also my recommendation:' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Clean Code — Bob Martin</h1>' +
                '<div>&nbsp;</div>' +
                'In this book, Bob Martin emphasizes the critical importance of code, not just for developers but for the entire company. He narrates the story of a company, Sword or a similar name, which faced bankruptcy due to the chaotic code at its core. Martin eloquently explains the sequence of events, including discussions with a developer from that company, effectively illustrating the case.' +
                '<div>&nbsp;</div>' +
                'As the narrative progresses, Martin delves into various perspectives on code, featuring insights from industry giants like Bjorn Stroustrup and James Gosling, among others. While there are several notable personalities in the book, I won’t mention them all. The key point is Martin’s adept articulation of what constitutes clean code, drawing from the viewpoints of top industry leaders.' +
                '<div>&nbsp;</div>' +
                'If Kent Beck introduced patterns and elucidated software behavior, architecture, and code patterns, Bob Martin establishes a code bible of sorts. From naming variables to defining functions, using comments, spacing, and more, this book defines it all. The underlying premise is clear: we need better developers and, subsequently, better software.' +
                '<div>&nbsp;</div>' +
                'For anyone seeking guidance on how code should be structured and written, I wholeheartedly recommend this book.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Refactoring — Martin Fowler</h1>' +
                '<div>&nbsp;</div>' +
                'Especially on a green field project, developers write a substantial amount of code. We aim to create the most bulletproof and future-proof code, but often, reality forces us to adapt aspects of our codebase for better scalability.' +
                '<div>&nbsp;</div>' +
                'However, it’s crucial not to fall into the trap of compromising on writing clean code. Regardless of the need for adaptation during the development process, adhering to clean code principles remains fundamental. Clean code significantly enhances comprehension and facilitates adaptations to new requirements. Essentially, the goal of clean code isn’t to write once and leave it forever; it’s about crafting code in a way that allows for ease of modifications. Martin Fowler’s “Refactoring” excellently outlines steps for specific refactorings, such as renaming variables within specific scopes or restructuring classes to manage certain information more effectively.' +
                '<div>&nbsp;</div>' +
                'I refer to this as a book, but alongside Kent Beck’s “Implementation Patterns,“ these serve as catalogs brimming with practical information. Frequently, you’ll find yourself revisiting these resources, reinforcing various refactoring methods and techniques. Covering everything from classes, functions, modules, simple statements to packages, this book provides systematic and efficient refactoring methods for all.' +
                '<div>&nbsp;</div>' +
                'This book instructs on how to navigate refactoring within complex systems. It’s undeniably one of the most invaluable resources available, and personally, it’s the one I often revisit and refer to the most.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Clean Architecture— Bob Martin</h1>' +
                '<div>&nbsp;</div>' +
                'In “Clean Architecture”, Bob Martin presents a fresh perspective on Software Architecture, distinct from his previous work on Clean Code. While Clean Code focuses on communicating intent at the code level, Clean Architecture delves into communicating intent at an architectural level.' +
                '<div>&nbsp;</div>' +
                'This book introduces fundamental terms like Entities and Use Cases, outlining their significance within such an architectural framework. Martin emphasizes the necessity of this architecture, drawing on insights from an older book, “Object-Oriented Software Engineering: A Use Case Driven Approach.” However, my comments are solely based on books I’ve read or have direct experience with.' +
                '<div>&nbsp;</div>' +
                'A core premise of the book is that tools do not define your architecture. Architecture revolves around entities, use cases, and the chosen delivery mechanisms — not specific frameworks or platforms like .NET, Django, Spring, Node.js, or the method of delivery, be it web, mobile, or CLI (Command Line Interface). It’s a concept far broader than these individual components.' +
                '<div>&nbsp;</div>' +
                'One particularly compelling aspect is Martin’s argument against existing architectures. He adeptly dissects the limitations of the MVC architecture for example, highlighting that while MVC serves well for micro workflows such as button interactions, it falls short as a macro-architecture for scaling apps.' +
                '<div>&nbsp;</div>' +
                'For anyone seeking a deeper understanding of software architecture, this book comes highly recommended. Its insights are intellectually enriching, and although I joke about it making you ‘30% smarter’ (a figurative percentage), its impact is undoubtedly significant.' +
                '<div>&nbsp;</div>' +
                'Reading these books propels you ahead of the majority of developers due to the valuable knowledge you gain. Whether you’re a junior or not yet a senior, diving into these resources allows you to begin cultivating a senior mindset. Learning from industry-leading seniors like Kent Beck, Bob Martin, and Martin Fowler offers unparalleled insights. Who wouldn’t want to learn from such top-tier figures in the software development industry?' +
                '<div>&nbsp;</div>' +
                'For me, the answer is crystal clear: I aim to learn from the best, and these individuals undeniably represent the pinnacle of expertise in software development.' +
                '<div>&nbsp;</div>' +
                'I’d like to emphasize that this is just the initial set of recommendations. My plan is to suggest more books gradually. From my experience, introducing a limited number of books initially proves more effective. Too many recommendations at once can be overwhelming or confusing.' +
                '<div>&nbsp;</div>' +
                'The short list here:' +
                '<div>&nbsp;</div>' +
                '1. Implementation Patterns — Kent Beck' +
                '<div>&nbsp;</div>' +
                '2. Clean Code — Bob Martin' +
                '<div>&nbsp;</div>' +
                '3. Refactoring — Martin Fowler' +
                '<div>&nbsp;</div>' +
                '4. Clean Architecture — Bob Martin' +
                '<div>&nbsp;</div>' +
                'Thank you!'
        },
        open_link: 'https://medium.com/@ciganoliviudavid/books-on-software-my-recommendations-91b7daef36e2',
    },
    {
        id: 'soft-skills-for-software-engineers',
        thumbnail: SoftSkillsForSoftwareEngineers.src,
        title: 'Soft Skills for Software Engineers',
        subtitle: '2 January 2023',
        previewHtmlField: {
            __html: 'Soft skills, equally vital alongside hard skills, play a pivotal role in career growth and ' +
                'overall success. Despite their importance, they often take a backseat in learning and understanding, ' +
                'possibly because people acknowledge their significance but fail to dedicate...',
        },
        htmlField: {
            __html: 'Soft skills, equally vital alongside hard skills, play a pivotal role in career growth and overall success. Despite their importance, they often take a backseat in learning and understanding, possibly because people acknowledge their significance but fail to dedicate focused time to develop them. This oversight might stem from a lack of emphasis or awareness regarding their tangible impact on professional and personal advancement. Why do you suppose this disparity exists between acknowledging their value and actively investing in their development?' +
                '<div>&nbsp;</div>' +
                'Many tend to think that mastering hard skills automatically leads to developing soft skills, but that’s a misconception. It’s not about one replacing the other. A blend of both is where the real advantage lies. Striking that balance between hard and soft skills offers far greater benefits than solely focusing on one or the other. This equilibrium ensures the best and most rewarding outcomes.' +
                '<div>&nbsp;</div>' +
                'Soft skills matter in various life domains — family, relationships, business, and notably in fields like software engineering. While I won’t cover every domain, let’s focus on software development. Specific scenarios in this field branch out from fundamental soft skills that hold true across various areas. It’s important to highlight that this is my perspective, not a comprehensive guide. These soft skills reflect where I invest my time and focus.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Team work and collaboration</h1>' +
                '<div>&nbsp;</div>' +
                'Six years ago, during a discussion led by a school psychologist about excelling in our chosen fields, I confidently asserted my ability to thrive in the software domain. I was convinced that navigating the realm of software, particularly through freelancing, was feasible as a solo endeavor. I engaged in a fervent debate with the psychologist, strongly advocating for this belief. At that time, my grasp of technical concepts was robust, yet I failed to recognize the significance of softer, interpersonal skills.' +
                '<div>&nbsp;</div>' +
                'However, roughly a year later, a transformative shift occurred. I began to to listen to the advice of individuals possessing greater wisdom and experience. Among the insights shared, one phrase resonated profoundly: “No one is an island.” This simple but potent statement illuminated a critical truth — I had overlooked the indispensable role of collaboration and connection in achieving success, particularly within the intricate landscape of software development. This realization prompted a fundamental reassessment of my priorities, emphasizing the pivotal importance of harmonizing technical proficiency with effective interpersonal skills for professional growth and accomplishment.' +
                '<div>&nbsp;</div>' +
                'After reality checks after reality checks I now understand well enough the situation. Yes you can be a freelancer and build things on your own, but you cannot have a high level impact without a team. The quicker you understand that, the quicker you will scale in mission and provided value.' +
                '<div>&nbsp;</div>' +
                'Moreover, as a freelancer if you are building software for a client and I assume a freelancer is doing so, you are basically having a team with your client. You are talking to him, you have to make him understood in order to sell, you have to understand his needs and so on' +
                '<div>&nbsp;</div>' +
                'A team is very important, and being able to keep it and collaborate effectively with each and every team member is a key factor. You have to understand them, be proficient, persuasive and make them feel understood. Team members also need to understand your next move, why you are doing it and how you are doing it.' +
                '<div>&nbsp;</div>' +
                'Collaborating in different manners and decisions with your team is also crucial, you have to be predictable so that they have an understanding of what you are doing. Also you do not need to take important decisions only on your own, there needs to be some kind of discussion in regards to core problems which lead to a decisions.' +
                '<div>&nbsp;</div>' +
                'So, it’s crucial to get along well in a team and learn all those things I mentioned earlier. They’re all skills, and remember, you can learn any skill with practice and effort.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Work Ethic</h1>' +
                '<div>&nbsp;</div>' +
                'Work ethic, a fundamental soft skill, encompasses a multitude of qualities and expectations. Its definition can be quite personal and subjective. Some individuals interpret it as a mere four-hour work week, and if that approach proves effective for them, that’s commendable. However, my perspective diverges from this.' +
                '<div>&nbsp;</div>' +
                'To me, work ethic transcends mere office hours; it hinges on the level of productivity and the impact I generate toward my set objectives. While I may achieve my goals within a span of 80 hours per week, the true goal isn’t the sheer number of hours worked. It’s about fulfilling my necessities and accomplishing the objectives I’ve set for myself. The crux lies in the efficiency and effectiveness of my efforts rather than the quantity of time devoted to them.' +
                '<div>&nbsp;</div>' +
                'To me, it’s not simply about choosing quality over quantity or focusing solely on how long you work. It’s about having both quality and quantity in your efforts — they’re both important. I’ve had people brag about the hours they spend at the office, but scrolling through Facebook doesn’t really count as work. Similarly, taking short breaks to check Instagram doesn’t add up to quality work; it’s more about just adding up time, not the value of what you’re doing.' +
                '<div>&nbsp;</div>' +
                'Defining your work ethic based on your needs, desires, and commitments is key. Once defined, it’s crucial to understand, adhere to, and consistently practice it. Essentially, work ethic boils down to this: Work — engaging in activities aimed at achieving specific outcomes, and Ethic — the principles governing moral conduct.' +
                '<div>&nbsp;</div>' +
                'You need a strong work ethic in order to succeed in any industry.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">The way you conduct code reviews</h1>' +
                '<div>&nbsp;</div>' +
                'In the realm of Software Engineering, the approach to conducting code reviews holds significant weight. It’s not just about suggesting changes; it’s about articulating the reasoning behind those suggestions. Engaging in a debate, offering explanations, and advocating for a particular line of code over another fosters a healthy discourse.' +
                '<div>&nbsp;</div>' +
                'Please refrain from solely stating what needs to change without providing reasoning. While some issues might be self-evident, I understand they may not need explicit articulation. However, regarding software code architecture, it’s essential to substantiate any proposed changes with strong arguments at all times.' +
                '<div>&nbsp;</div>' +
                'Being receptive to discussions, whether giving or receiving a review, is crucial. It’s about staying open-minded to new ideas and concepts, acknowledging that there might be better ways to solve a problem or improve code, and embracing these discussions to refine and enhance the codebase.' +
                '<div>&nbsp;</div>' +
                'The ultimate aim is to enhance the code and establish a robust software structure, prioritizing improvements rather than enforcing personal preferences. Embracing an open-minded approach is a valuable skill in achieving these goals.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Open to ideas and criticism</h1>' +
                '<div>&nbsp;</div>' +
                'Remaining open to new ideas and criticism is vital, as emphasized in the code review section. This mindset should extend beyond reviews to all discussions, encompassing design patterns, architectural considerations, and any field of discussion. It’s crucial to welcome constructive criticism and set aside one’s ego.' +
                '<div>&nbsp;</div>' +
                'It’s important to comprehend that the ultimate aim isn’t forcefully imposing personal agendas but rather designing superior software and enhancing existing systems. While presenting well-founded arguments for a certain approach is beneficial, avoiding the trap of assuming omniscience is essential.' +
                '<div>&nbsp;</div>' +
                'Set ego aside, adopt humility, and when suggesting changes, substantiate them with solid reasoning. If your arguments are compelling, consistent, and founded in truth, the changes will likely be implemented.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Stress management</h1>' +
                '<div>&nbsp;</div>' +
                'There will inevitably be moments of pressure, particularly when tight deadlines loom over project deliveries or when clients exert pressure. It’s crucial to manage this stress effectively, harnessing it for your advantage.' +
                '<div>&nbsp;</div>' +
                'Rather than allowing stress to overpower you, leverage it as a catalyst to meet all required deadlines. Stress, when handled adeptly, can be highly beneficial. It has the potential to generate significant energy if channeled wisely.' +
                '<div>&nbsp;</div>' +
                'Ensure that you comprehend and manage stress effectively to derive its benefits.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Communication</h1>' +
                '<div>&nbsp;</div>' +
                'Communication extends beyond teamwork and collaboration; it involves adapting your approach for different audiences. When engaging with clients, the communication style should be more accessible, avoiding technical jargon and focusing on terms they can comprehend. However, with developers, precision and technical depth are essential to convey intentions accurately.' +
                '<div>&nbsp;</div>' +
                'Furthermore, effective communication involves conveying intentions based on ongoing activities. Consistency and predictability in communication are key for the team, clients, and anyone you collaborate with.' +
                '<div>&nbsp;</div>' +
                'Being a meticulous manager of details is imperative. Simplifying complex concepts is vital, ensuring that simplicity retains depth and clarity for the listeners. The manner in which you communicate holds immense significance; it’s essential to grasp the art of effective communication.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Conclusion</h1>' +
                '<div>&nbsp;</div>' +
                'It is important to acknowledge that this list can be expanded, yet it broadly covers essentials for Software Engineers. As an extension, I would emphasize the significance of being an attentive listener and speaking purposefully. These soft skills not only enhance my value as a developer but also as a human, offering diverse perspectives. While I continue to learn and grow in these areas, I feel confident in my proficiency with the ones I’ve mentioned.' +
                '<div>&nbsp;</div>' +
                'Ultimately, I want to reiterate the immense importance of soft skills, equating them in significance to hard skills. I’ll conclude with a quote from one of my mentors: “I would prefer hiring someone with decent hard skills but exceptional soft skills over a genius who lacks interpersonal abilities.”' +
                '<div>&nbsp;</div>' +
                'Thank you!'
        },
        open_link: 'https://medium.com/@ciganoliviudavid/soft-skills-for-software-engineers-d9a3e7409234',
    },
    {
        id: 'what-is-tech-noise',
        thumbnail: WhatIsTechNoise.src,
        title: 'What is TechNoise?',
        subtitle: '28 December 2023',
        previewHtmlField: {
            __html: 'In one of my previous articles titled “8 Rules of Software Engineers,” I highlighted a ' +
                'significant guideline: “Avoid the TechNoise.” I briefly defined TechNoise as encompassing ' +
                '“technologies, whether outdated, fading, or lacking market value.”...',
        },
        htmlField: {
            __html: 'In one of my previous articles titled “8 Rules of Software Engineers,” I highlighted a significant guideline: “Avoid the TechNoise.” I briefly defined TechNoise as encompassing “technologies, whether outdated, fading, or lacking market value.” While this encapsulation is accurate, I seek to offer a more detailed understanding.' +
                '<div>&nbsp;</div>' +
                'What exactly falls under the realm of TechNoise? How can we precisely classify and identify these elements? It involves recognizing a range of technological components that have lost their effectiveness or relevance in today’s rapidly evolving landscape.' +
                '<div>&nbsp;</div>' +
                'TechNoise encompasses outdated technologies, trends losing prominence, and solutions lacking substantial market traction. Exploring these facets can lead to a more nuanced classification of TechNoise elements.' +
                '<div>&nbsp;</div>' +
                'Beyond definition, how does one actively spot TechNoise within their tech stack? Are there clear indicators of obsolescence? Equally crucial, how can one avoid these elements, ensuring that their work remains aligned with current industry standards and innovation?' +
                '<div>&nbsp;</div>' +
                'By further exploring TechNoise’s intricacies, the goal is to equip engineers with a framework to navigate away from outdated or ineffective technologies, fostering an environment where innovation flourishes and relevance endures.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">What is TechNoise?</h1>' +
                'In essence, noise within the technological sphere signifies elements that offer no substantive support or benefit. Often, novices, particularly juniors, might inadvertently lend attention to this “TechNoise” due to their limited field experience. Identifying these noise-laden components is more challenging in software, requiring ample industry experience.' +
                '<div>&nbsp;</div>' +
                'TechNoise epitomizes technology devoid of tangible value or significance in the practical realm of software development and business. Spotting noisy elements in other industries may be straightforward, but in software, distinguishing them demands a depth of experience.' +
                '<div>&nbsp;</div>' +
                'While some may hold latent potential, detecting this potential itself is a complex task. It’s crucial to note that a significant portion of technologies lacks the potential for practical usefulness in the real world. This realization remains a crucial aspect to consider.' +
                '<div>&nbsp;</div>' +
                'While not universal, many junior professionals tend to gravitate toward noisy technologies. Their inclination stems from a desire to belong and feel purposeful. However, the primary focus for juniors should lie in mastering fundamental software principles using an accessible programming language. The trajectory ideally involves broadening experience across diverse industries rather than fixating on yet another JavaScript framework (YAJF) or adopting random npm libraries that marginally ease processes by a mere 2% (I made that number up, but you get the point).' +
                '<div>&nbsp;</div>' +
                'When it comes to libraries, regardless of the framework, integrating numerous packages isn’t advisable. Over time, it compounds maintenance issues, increasing dependency. A heavier dependency chain exacerbates the risks, especially due to linked bugs. These bugs propagate from libraries to your application — a glitch in the library translates to a flaw in your system. This issue is typically resolved within the library, but in practice, such occurrences are exceedingly rare.' +
                '<div>&nbsp;</div>' +
                'If longevity and robust long-term support are priorities for your project, exercising caution in package selection is imperative. Being selective and cherry-picking components becomes crucial for ensuring a stable and sustainable application, a stark contrast to the risks associated with an indiscriminate integration approach.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">What is TechNoise?</h1>' +
                '<div>&nbsp;</div>' +
                'I will give you my short answer, “V1” technologies often align with TechNoise. BunJS, AureliaJS, or CorticonJs fall under the category of TechNoise, unequivocally — There’s simply no room for debate on this matter. Currently, these technologies lack practical market value. However, their future prospects remain uncertain, albeit doubtful.' +
                '<div>&nbsp;</div>' +
                'Consider React, which owes its present stature to Meta’s backing, or Angular and Kotlin, supported by Google. This pattern prevails for most technologies, where major organizational support is pivotal for their survival. However, exceptions exist, albeit infrequently.' +
                '<div>&nbsp;</div>' +
                'The market direction predominantly hinges on the majority, influencing technological adoption. Notably, a technology’s endorsement by a large-scale organization, whether through active use or mere acknowledgment, significantly impacts smaller to medium-sized companies contemplating their preferred tech stack.' +
                '<div>&nbsp;</div>' +
                'It’s crucial to recognize mainstream technologies or long-standing players in the market that are likely to eventually transition into TechNoise.' +
                '<div>&nbsp;</div>' +
                'Consider Ember.js or, more prominently, Backbone.js as prime examples of once-mainstream technologies that have dwindled following the emergence of React, Angular, and Vue.js. Their decline primarily stems from a lack of substantial support from major corporations. It’s crucial to highlight this lack of clear backing as a determining factor in their diminished relevance today.' +
                '<div>&nbsp;</div>' +
                'On the other hand take these “old dogs” in the technological landscape often boast extensive codebases and widespread use across various projects. However, their future can be uncertain, especially if the large organizations supporting them announce plans to withdraw long-term backing or intend to shift focus for specific reasons.' +
                '<div>&nbsp;</div>' +
                'Java on Android as an example, despite its long-standing dominance, Google’s declaration of Kotlin as the preferred path ahead signals a significant shift. However, the transformation of an “old dog” technology into TechNoise isn’t an abrupt process; it unfolds gradually over time. As a software engineer, you typically witness these transitions unfold gradually, affording ample time to adapt.' +
                '<div>&nbsp;</div>' +
                'While it’s noteworthy that technology shifts occur, especially with established frameworks, the pace of change often aligns more with a steady rhythm than the rapid turnover we might anticipate as developers. Thus, maintaining a steady and informed pace of adopting changes within well-established technologies remains a prudent approach amidst the evolving tech landscape.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Is there a battle of finding the next big tech?</h1>' +
                '<div>&nbsp;</div>' +
                'In short, the pursuit of discovering the next widely adopted technology offers minimal valuable returns. While grasping such technologies might enhance individual understanding and potentially streamline job opportunities, the question arises: is it truly worthwhile? Investing time in learning technologies with uncertain futures, most of which won’t likely gain prominence, might not be the wisest use of one’s time.' +
                '<div>&nbsp;</div>' +
                'Unless you’re employed by major players like Google or Meta, where your innovative ideas align with their substantial backing and large-scale utilization, chasing after nascent technologies might not be the most pragmatic choice. Instead, focusing on established technologies that work efficiently and being adaptable when necessary remains a more prudent and wise investment. Prioritize mastering foundational principles — a strategic move that pays long-term dividends.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Is technology truly evolving as rapidly as we perceive it to be?</h1>' +
                '<div>&nbsp;</div>' +
                'When we consider TechNoise, it seems like technology is evolving at an overwhelming pace, beyond our full comprehension due to its constant flux. However, if we exclude the non-essential, unused technologies, the pace of change isn’t as swift. While there are internal shifts within the technologies we commonly use — such as the shift from class to functional components in React— this change isn’t necessarily a groundbreaking transformation.' +
                '<div>&nbsp;</div>' +
                'If one comprehends Software Design fundamentals well, the transition between using functions and classes shouldn’t pose significant challenges. Fundamentally, a seasoned software engineer should seamlessly navigate both paradigms.' +
                '<div>&nbsp;</div>' +
                'While radical transformations occasionally occur at an internal level, not every alteration demands immediate adherence. Often, these internal shifts fail to offer substantial visible value, prompting the consideration of whether compliance is truly necessary.' +
                '<div>&nbsp;</div>' +
                'Ultimately, as software engineers, it’s vital to recognize that technology serves as a means to an end, merely a tool in our arsenal. Avoid becoming overly attached or fixated on a particular language, framework, or package. Maintain flexibility in your choices while exercising caution and precision. Avoid chasing after every new technology as if it’s the next big gold rush; instead, direct your attention towards aspects that hold genuine significance and impact, like design patterns for example.' +
                '<div>&nbsp;</div>' +
                'Thank you!'
        },
        open_link: 'https://medium.com/@ciganoliviudavid/what-is-technoise-a966cfa1cf0b',
    },
    {
        id: 'what-programming-language-to-learn-first',
        thumbnail: WhatProgrammingLanguageToLearnFirst.src,
        title: 'What programming language to learn first?',
        subtitle: '24 December 2023',
        previewHtmlField: {
            __html: 'Navigating the realm of coding often begins with the daunting choice of which programming ' +
                'language to learn. It’s a pivotal decision — one that demands an understanding of available ' +
                'options and careful consideration of what aligns best with your goals...',
        },
        htmlField: {
            __html: 'Navigating the realm of coding often begins with the daunting choice of which programming ' +
                'language to learn. It’s a pivotal decision — one that demands an understanding of available ' +
                'options and careful consideration of what aligns best with your goals. But does this choice ' +
                'truly hold the weight we often attribute to it? Should you prioritize a specific language above ' +
                'all else? And does committing to one language restrict your ability to work with others? Moreover, ' +
                'is there such a thing as a “bad” language to learn? In this article, I’ll delve into these pressing ' +
                'questions to demystify the significance of the programming language in the learning journey.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">With a myriad of programming languages available, the dilemma lies in deciding which ' +
                'one to embrace?</h1>' +
                '<div>&nbsp;</div>' +
                'The crux of the matter for beginners is this: prioritizing the fundamentals of software and ' +
                'coding over the choice of a specific programming language. It’s not about what language to ' +
                'learn but rather how to write code effectively. Building a solid foundation in understanding ' +
                'code and the workings of software reigns far more crucial than engaging in debates about ' +
                'which language or tech stack is superior. Arguing about the supremacy of one language over ' +
                'another is futile; the real value lies in grasping the core concepts and mechanics of coding. ' +
                'Once these fundamentals are firmly established, you gain the flexibility to navigate any ' +
                'language, framework, or tech stack seamlessly.' +
                '<div>&nbsp;</div>' +
                'The bottom line here is: ' +
                '<i>Focus on your fundamentals rather than the tools that you are using in the beginning of your career.</i>' +
                '<div>&nbsp;</div>' +
                'Across various platforms, the consistent presence of languages like JavaScript, Python, Java, C/C++, C#, and PHP in the top 10 reaffirms their significance. Choosing any from this set offers a solid starting point as they provide diverse perspectives and enable the development of fundamental coding skills.' +
                '<div>&nbsp;</div>' +
                'My suggestion mirrors my own journey into coding: start with an easier language. Python, JavaScript, or even PHP serve as excellent choices. Their dynamically typed nature, automatically interpreting variable types, simplifies syntax considerably. Remember, the primary goal is to grasp the foundational aspects of coding rather than simply learning a specific syntax.' +
                '<div>&nbsp;</div>' +
                'Once you’ve grasped the fundamentals, the world of various programming languages beckons, each offering a unique lens into different programming types. Java, for instance, aligns more with mobile development, particularly for Android devices. Mastery in Java often leads to exploring Kotlin, expanding your skill set further. Moreover, Java boasts Spring, an exceptional framework for backend web development.' +
                '<div>&nbsp;</div>' +
                'Python, on the other hand, opens doors to backend web development and ventures into AI. The realm of C and C++ often directs one toward IoT and firmware development, showcasing their distinct applications.' +
                '<div>&nbsp;</div>' +
                'Once you’ve honed your skills in conditional statements, loops, delved into object-oriented and functional programming, it becomes seamless to experiment across these diverse programming landscapes. This experimentation offers glimpses into various programming realms, allowing you to identify and explore niches within the development industry.' +
                '<div>&nbsp;</div>' +
                'Choosing a niche doesn’t imply closing doors to other programming types; instead, it signifies delving deeper into mastering a particular domain. Yet, with strong fundamentals, pivoting between different programming types remains entirely feasible, broadening your expertise and opening new horizons within the vast landscape of software development.' +
                '<div>&nbsp;</div>' +
                'As a Web Frontend Developer proficient in React, transitioning to mobile development becomes relatively smooth, especially with platforms like React Native or Flutter. These platforms offer a programming paradigm that aligns well with React, facilitating the shift. However, there’s also the option to venture into native mobile development for a different approach and a deeper understanding of mobile programming. That is feasible too.' +
                '<div>&nbsp;</div>' +
                'The bottom line here is: ' +
                '<i>Opting for any of the prevalent top languages is a solid choice — there’s no wrong selection among those consistently featured at the forefront. Master the fundamentals thoroughly, then delve into various tech stacks to explore the diverse spectrum of programming types available. Eventually, specialize in a niche and aim for mastery, yet always remember the flexibility to pivot into other programming domains when the need arises.</i>' +
                '<div>&nbsp;</div>' +
                '<h1>Do not let the TechNoise cloud your judgement.</h1>' +
                '<div>&nbsp;</div>' +
                'TechNoise refers to technology lacking substantial value in the market. As a beginner, it’s easy to be swayed by flashy online discussions about the next groundbreaking programming language or framework that promises to revolutionize the programming landscape.' +
                '<div>&nbsp;</div>' +
                'Typically, these revolutionary changes rarely materialize. Therefore, I’d rather invest my time in mastering Software Engineering than in technologies lacking substantial features or a proven track record.' +
                '<div>&nbsp;</div>' +
                'Cut the tech fat — this implies avoiding the pursuit of understanding every possible technology option. In reality, only a handful significantly impact the landscape; the rest are extraneous. To outpace around 90% of beginners, it’s essential to cut through this excess.' +
                '<div>&nbsp;</div>' +
                'As reiterated throughout this article and beyond, following this foundational mastery, you’ll find yourself equipped to pivot seamlessly to any other technology if required.' +
                '<div>&nbsp;</div>' +
                'Thank you!'
        },
        open_link: 'https://medium.com/@ciganoliviudavid/what-programming-language-to-learn-first-1f6b98eec41c',
    },
    {
        id: 'tech-tools-and-software-engineers',
        thumbnail: TechToolsForSoftwareEngineer.src,
        title: 'Tech Tools and Software Engineers',
        subtitle: '21 December 2023',
        previewHtmlField: {
            __html: 'In the realm of software engineering, a rich array of tools, from IDEs and frameworks ' +
                'streamlining workflows to various database types like SQL and NoSQL, empowers professionals in ' +
                'multifaceted ways. While the necessity and relevance of tech tools have been emphasized...',
        },
        htmlField: {
            __html: 'In the realm of software engineering, a rich array of tools, from IDEs and frameworks ' +
                'streamlining workflows to various database types like SQL and NoSQL, empowers ' +
                'professionals in multifaceted ways. While the necessity and relevance of tech ' +
                'tools have been emphasized, it’s crucial to address a mindset prevalent among developers. ' +
                'This mindset, though common, is not conducive to sustained growth and success in one’s career.' +
                '<div>&nbsp;</div>' +
                'In a prior piece, “8 Rules of Software Engineers” I underscored the pivotal role of foundational ' +
                'knowledge and the judicious balance required between focusing on technology and understanding ' +
                'market dynamics. Today, I aim to confront a limiting mentality within the tech niche, a mindset ' +
                'I perceive as detrimental to a software engineer’s trajectory.' +
                '<div>&nbsp;</div>' +
                'This mentality fixates excessively on specific technical niches while neglecting broader skill ' +
                'sets and fundamental knowledge. While specialization is valuable, this tunnel-visioned approach ' +
                'can hinder adaptability, limit career growth, and obstruct the ability to navigate the evolving ' +
                'landscape of software development effectively.' +
                '<div>&nbsp;</div>' +
                'Instead, a more holistic mindset that embraces continuous learning, prioritizes foundational ' +
                'principles alongside technological advancements, and fosters adaptability is imperative. This ' +
                'approach not only ensures resilience in the face of industry shifts but also opens doors to ' +
                'diverse opportunities, equipping engineers to thrive in an ever-evolving field.' +
                '<div>&nbsp;</div>' +
                '<h1>The mentality of some Software Developers</h1>' +
                '<i>I’m not versed in Python coding as I exclusively work with Java.</i>' +
                '<div>&nbsp;</div>' +
                'In my encounters with various developers, I’ve noticed a prevalent mentality that goes something ' +
                'like, “I do not know X because I work solely with Y.” While I recognize the nuanced differences ' +
                'between programming languages and frameworks, it’s essential to highlight that these distinctions ' +
                'aren’t insurmountable barriers. In previous articles, I’ve emphasized the theoretical ease with ' +
                'which a proficient software engineer should be able to transition between technologies, ' +
                'achieving productivity within a reasonable timeframe.' +
                '<div>&nbsp;</div>' +
                'Adapting between programming languages or frameworks is one facet, but I once had a conversation ' +
                'with a developer that brought attention to a surprising aspect — their approach to IDEs. During ' +
                'a casual developer-to-developer chat, I expressed my preference for Webstorm in web development ' +
                'and mentioned using Visual Studio Code for another language. The response I received was ' +
                'unexpected: “I don’t really know much about Visual Studio because I stick exclusively to Webstorm.”' +
                '<div>&nbsp;</div>' +
                'This reaction left me puzzled. The tools we use to write code don’t fundamentally alter the ' +
                'coding process. How could someone limit their expertise or understanding based solely on their ' +
                'choice of development environment? It’s not as if writing code drastically changes between IDEs.' +
                '<div>&nbsp;</div>' +
                'This encounter highlighted a narrow mindset that overlooks the broader understanding and adaptability ' +
                'necessary in the software engineering landscape. Proficiency in one tool shouldn’t restrict ' +
                'exploration or learning of others. A professional’s expertise should transcend tool preferences, ' +
                'enabling flexibility and adaptability across various environments for effective problem-solving ' +
                'and innovation.' +
                '<div>&nbsp;</div>' +
                'Why confine oneself with a mindset that creates separation from the broader world? As professional ' +
                'software engineers, our ability to pivot seamlessly between different technologies, whether it’s ' +
                'frameworks, IDEs, or databases, is crucial. Remaining agnostic to specific tools enables us to ' +
                'make decisions objectively, uninfluenced by biases toward certain technologies. This agnosticism ' +
                'empowers us to leverage our past knowledge, recognizing new possibilities in technology based on ' +
                'our diverse experiences. Ultimately, it’s this adaptability and open-mindedness that allow us to ' +
                'navigate the ever-evolving landscape of tech with agility and insight.' +
                '<div>&nbsp;</div>' +
                'Consider this analogy: imagine you’re proficient in driving an Audi, and let’s assume you grasp ' +
                'the fundamentals of driving, comprehend how a car operates, and possess a basic understanding of' +
                ' mechanics. However, your experience solely lies with driving an Audi, and you’ve never driven ' +
                'any other vehicle. Does this mean you’re exclusively an Audi driver?' +
                '<div>&nbsp;</div>' +
                'The answer is no. You’re a driver, not confined to a single brand or type of car. Your expertise ' +
                'allows you to navigate various vehicles, whether it’s a Ferrari, Porsche, Mazda, or any other' +
                ' car. While each vehicle has its unique traits — such as a BMW M5 offering a sportier feel ' +
                'while an A8 emphasizes comfort — these differences don’t pose insurmountable barriers to your ' +
                'ability to drive.' +
                '<div>&nbsp;</div>' +
                'Similarly, in the realm of software engineering, expertise in a specific language, framework, ' +
                'or tool should not confine one’s abilities. Just as a skilled driver can adapt to different ' +
                'cars, a proficient software engineer can adapt their skills to various technologies, ' +
                'leveraging their fundamental understanding to navigate and excel in diverse tech environments.' +
                ' The differences exist, but they should not hinder the adeptness to work across them.' +
                '<div>&nbsp;</div>' +
                '<h1>Why do some developers think like this?</h1>' +
                '<div>&nbsp;</div>' +
                'There’s a natural inclination for people to align with a particular group or camp — it’s almost ' +
                'an instinctual urge stemming from our primitive instincts. This inclination likely originated ' +
                'from our ancestral need to belong to a tribe for survival. However, in the modern context, ' +
                'this inclination sometimes manifests in peculiar ways within tech communities.' +
                '<div>&nbsp;</div>' +
                'Take, for instance, the common disdain towards PHP by some individuals without substantial reasoning. ' +
                'This antipathy often arises because within the close-knit circles of their preferred programming ' +
                'language’s community, there’s a prevailing sentiment against PHP. This bias isn’t necessarily ' +
                'rooted in technical arguments but rather in the desire to belong to a particular camp.' +
                '<div>&nbsp;</div>' +
                'However, such a mindset of aligning exclusively with one camp in the tech realm can be limiting. ' +
                'By favoring a single technology or community without considering others, individuals restrict ' +
                'their learning and growth. Embracing a more technology-agnostic approach allows for a broader' +
                ' perspective and a deeper understanding of various tools and languages. It’s crucial to ' +
                'transcend the limitations of camp mentality in tech to unlock a wealth of opportunities' +
                ' and enhance problem-solving abilities across diverse platforms and communities.' +
                '<div>&nbsp;</div>' +
                '<h1>Conclusion — How should a professional Software Engineer behave?</h1>' +
                '<div>&nbsp;</div>' +
                'A seasoned Software Engineer grasps the potential of various technologies in the market. ' +
                'They comprehend that comparing tech stacks should primarily hinge on specifications and ' +
                'project needs. Recognizing that around 99% of their expertise is transferable between ' +
                'frameworks, they prioritize selecting the most suitable technology based on market trends, ' +
                'project requirements and technological maturity.' +
                '<div>&nbsp;</div>' +
                'Remaining impervious to arbitrary comments or discussions lacking substantial reasoning behind ' +
                'tech evaluations, they base their decisions on solid arguments and empirical evidence supporting ' +
                'the effectiveness of a technology.' +
                '<div>&nbsp;</div>' +
                'Moreover, a proficient Software Engineer discerns the similarities among tech stacks, ' +
                'allowing them to concentrate meaningfully on mastering stable development technologies. ' +
                'While acknowledging that each framework and language has unique traits, this understanding ' +
                'doesn’t hinder their comprehension of the overall stack.' +
                '<div>&nbsp;</div>' +
                'In essence, a Software Engineer maintains an agnostic stance toward tech stacks and tools in ' +
                'the development process. Similar to strategic business pivots, they adapt to the required ' +
                'tech at the necessary moment. This adaptability doesn’t imply hastily embracing every new ' +
                'experimental tech but rather entails a balanced approach, considering innovation alongside ' +
                'stability for optimal technological choices in their projects.' +
                '<div>&nbsp;</div>' +
                'Thank you!'
        },
        open_link: 'https://medium.com/@ciganoliviudavid/tech-tools-and-software-engineers-b412fe9fa37c',
    },
    {
        id: 'the-problem-with-the-js-ecosystem',
        thumbnail: TheProblemWithTheJsEcosystem.src,
        title: 'The problem with the JS ecosystem',
        subtitle: '14 December 2023',
        previewHtmlField: {
            __html: 'JavaScript maintained its position as the most utilized programming language globally, as ' +
                'indicated by the 2023 GitHub survey, continuing its dominance from the previous year. Additionally, ' +
                'TypeScript showed a noteworthy surge in popularity, as per GitHub’s insights.'
        },
        htmlField: {
            __html: 'JavaScript maintained its position as the most utilized programming language globally, as ' +
                'indicated by the 2023 GitHub survey, continuing its dominance from the previous year. Additionally, ' +
                'TypeScript showed a noteworthy surge in popularity, as per GitHub’s insights.' +
                '<div>&nbsp;</div>' +
                'It\'s intriguing that TypeScript has surpassed Java for the first time, claiming a higher ' +
                'position on the list of the most utilized programming languages worldwide. This shift signifies ' +
                'a continued upward trajectory for both JavaScript (JS) and TypeScript (TS) in popularity. As of ' +
                'now, there’s no indication of a decline in the usage of these programming languages.' +
                '<div>&nbsp;</div>' +
                'This transition seems quite natural given the structure of the programming landscape. JavaScript ' +
                '(JS) and TypeScript (TS) dominate web frontend development, possessing no direct competitors in ' +
                'that realm. Moreover, Node.js is increasingly recognized as a solid choice for backend development ' +
                'in numerous projects, further amplifying the appeal and usage of these languages.' +
                '<div>&nbsp;</div>' +
                'Moreover, with technologies like React Native enabling entry into the mobile industry, the rising ' +
                'allure of hybrid solutions due to their significantly reduced costs makes a compelling case for ' +
                'businesses. Considering these trends, it’s hard to envision JavaScript (JS) and TypeScript (TS) ' +
                'losing ground on the leaderboard chart anytime soon.' +
                '<div>&nbsp;</div>' +
                '<h1>The problem with JS</h1>' +
                '<div>&nbsp;</div>' +
                'Despite its significance, there’s a glaring issue that many developers seem reluctant to acknowledge: ' +
                'the NPM package manager. While being the largest in the market and housing considerable value, ' +
                'it’s also cluttered with numerous libraries that hold little to no practical use. Even the ones ' +
                'initially offering value can become unstable over time. Frequent deprecation of versions leads to ' +
                'emerging security concerns along the way.' +
                '<div>&nbsp;</div>' +
                'The central issue lies in the proliferation of dependencies created when building projects in Node, ' +
                'Angular, or React. These dependencies, often transient in nature, fail to stand the test of time. ' +
                'It’s unacceptable to embrace deprecated libraries and dependencies within an application. This ' +
                'practice gives rise to security vulnerabilities and instability, leading to poor maintenance and' +
                ' sometimes necessitating complete rewrites of substantial portions of the application solely for a ' +
                'library update. While NPM might appear as a treasure trove for novices in programming, seasoned ' +
                'software engineers comprehend the inherent risks. Accumulating numerous dependencies, especially ' +
                'those frequently subject to deprecation due to rapid changes, inevitably results in an unstable ' +
                'system that requires periodic rewrites every few years.' +
                '<div>&nbsp;</div>' +
                'I recall an incident with a ReactJs project in continuous development that faced dependency ' +
                'installation issues. The installation failure stemmed from the requirement for a specific ' +
                'Node version that had reached its end of life (EOL). Interestingly, this problem seemed ' +
                'isolated to a particular operating system — MacOS. Interestingly, updating Node to a higher ' +
                'version resolved the issue as long as the ‘node_modules’ folder is not deleted. This experience ' +
                'sheds light on the stability of the JS ecosystem over the long term. Having to frequently ' +
                'downgrade Node whenever issues arose, necessitating the deletion of ‘node_modules’ ' +
                'underscores the high level of inconsistency and dependency challenges within the system.' +
                '<div>&nbsp;</div>' +
                'There have been instances where using the latest release of a library led to unexpected issues. ' +
                'For example, integrating a library via its CDN using the latest version resulted in unforeseen ' +
                'bugs within our system. Such occurrences add to the collection of incidents highlighting the ' +
                'perceived instability of the JavaScript ecosystem. From an ecosystem like NPM, one would ' +
                'anticipate dependencies stable enough to avoid causing system issues. While anticipating ' +
                'changes and updates is reasonable, encountering erratic behavior due to library integrations' +
                ' is unexpected and counterintuitive. This denotes lack of professionalism and poor software design.' +
                '<div>&nbsp;</div>' +
                '<h1>Why is that happening tough?</h1>' +
                '<div>&nbsp;</div>' +
                'With each new library release version, the rush to swiftly bring everything to market often results ' +
                'in inadequately engineered packages, leading to a plethora of bugs along the way.' +
                '<div>&nbsp;</div>' +
                'The development process often lacks refinement, leading to poor architecture and code quality. ' +
                'This results in inconsistencies, conflicting dependencies, and the necessity of specific Node ' +
                'versions for successful app modules installations — the usual hurdles.' +
                '<div>&nbsp;</div>' +
                'However, not all libraries fall into this category. There are exceptional implementations that earn ' +
                'my respect. These libraries function seamlessly, without introducing instability, and maintain their ' +
                'value over time. It’s because of these reliable libraries that JavaScript remains prevalent, ' +
                'particularly in the web frontend industry.' +
                '<div>&nbsp;</div>' +
                'Examining the core of JavaScript reveals significant power and potential. Amidst the challenges,' +
                ' there are stable packages that reinforce and ensure stability within the ecosystem. The JavaScript' +
                ' ecosystem resembles a vast city with numerous incredibly poor neighborhoods, yet it also hosts a ' +
                'handful of stunning locales that make you yearn to reside within its bounds.' +
                '<div>&nbsp;</div>' +
                '<h1>Do we use JS then?</h1>' +
                '<div>&nbsp;</div>' +
                'Certainly, but it’s crucial to highlight the importance of careful consideration when incorporating ' +
                'packages into your JavaScript applications. Including libraries in their early stages of development ' +
                'should be avoided if stability is the priority. While a few well-established libraries are suitable ' +
                'for broader use, numerous others available on NPM don’t substantially contribute to the ecosystem’s' +
                ' value. I’d argue that these libraries actually lower the levels of security, dependencies, ' +
                'and overall stability.' +
                '<div>&nbsp;</div>' +
                'JavaScript and TypeScript stand as invaluable tools, and NPM’s initial foundation was commendable. ' +
                'However, the evolution of NPM hasn’t been ideal. For a durable, well-crafted, and stable project ' +
                'in the long term, steer clear of unreliable, inconsistent, or unstable libraries. This practice ' +
                'has been my approach, and I strongly recommend adopting it for your projects as well.' +
                '<div>&nbsp;</div>' +
                'Incorporating tools that analyze security vulnerabilities across all packages is a fundamental ' +
                'step in troubleshooting and ensuring your project isn’t a liability. This practice ' +
                'establishes a foundation built on stable, high-level security standards.' +
                '<div>&nbsp;</div>' +
                'If your aim isn’t centered around security, system stability, and easy maintenance, then ' +
                'integrating any library found in the NPM package manager might seem acceptable because, ' +
                'in the end, does it truly matter?' +
                '<div>&nbsp;</div>' +
                'Thank you!'
        },
        open_link: 'https://medium.com/@ciganoliviudavid/the-problem-with-the-js-ecosystem-4161b6aaa316',
    },
    {
        id: 'are-books-relevant-in-software-design',
        thumbnail: AreBooksRelevantInSoftwareDesign.src,
        title: 'Are books relevant in Software Design',
        subtitle: '10 December 2023',
        previewHtmlField: {
            __html: 'Reading is essential for those who seek rise above the ordinary. — Jim Rohn' +
                '<div>&nbsp;</div>' +
                'Numerous sources offer information across various fields and aspects, notably the internet. However, books remain an invaluable reservoir of knowledge.'
        },
        htmlField: {
            __html: '<span style="font-size: 1.8rem">Books</span> endure through centuries for multifaceted reasons, but at their core lies an undeniable truth: books are remarkably effective. They serve as invaluable tools for learning about diverse subjects and experiences. Typically, their creation involves extensive research, often authored by experts in their respective fields. This expertise grants books a level of credibility that sets them apart from many other sources of information.' +
                '<div>&nbsp;</div>' +
                'Numerous sources offer information across various fields and aspects, notably the internet. However, books remain an invaluable reservoir of knowledge. They encapsulate experiences, values, morals, ideas, and concepts, wielding immense power in their diversity. As an individual, delving into the pages of a book unveils profound insights into the world. This information stems from the expertise and extensive research of individuals who have dedicated years to their respective fields. With just a few dollars, one gains access to decades of collective experience within the covers of a book.' +
                '<div>&nbsp;</div>' +
                'Indeed, relevance in the software industry, known for its continual evolution and progress, is a pertinent question regarding the role of books. The succinct response: <i>yes, if they are used wisely.</i>' +
                '<div>&nbsp;</div>' +
                'In the software realm, a myriad of books exists, broadly falling into two categories: those focused on technology specifics and those addressing software-related concepts. Let’s take them one by one:' +
                '<div>&nbsp;</div>' +
                '<h1>Technology Specific Books</h1>' +
                '<div>&nbsp;</div>' +
                'Numerous books delve into teaching specific technologies like Python 3.4, Ruby 2.5.1, Django 3.2 LTS, and more. Undoubtedly, mastering a technology can significantly elevate your standing, especially during periods of high demand. For instance, amidst the current hype around Python, possessing a deep understanding can distinguish you from those with only moderate proficiency. However, this advantage often remains transient.' +
                '<div>&nbsp;</div>' +
                'Consider Ruby — a profound mastery of it once held transformative potential in job candidacy. Yet, its relevance today pales in comparison to newer tech stacks emerging in the past few years.' +
                '<div>&nbsp;</div>' +
                'Understanding a specific programming language or framework lays a solid foundation that surprisingly transfers seamlessly to others. For instance, mastering Python Django eases the transition to Java Spring; while nuances differ, the high-level knowledge remains largely transferable. This advantage emerges from learning a specific technology.' +
                '<div>&nbsp;</div>' +
                'These books expound on the underlying aspects of a tech stack, fostering problem-solving acumen and offering insights into framework-specific solutions. While they may offer some enduring insights, the long-term benefits are limited. Upon thorough analysis, they do not serve as game-changers in the late game of a Software Engineering career. Why? Because success in this field isn’t tethered to a single framework or language. It’s rooted in grasping concepts, patterns, and principles that transcend individual technologies.' +
                '<div>&nbsp;</div>' +
                '<h1>Software-Related Concepts Books</h1>' +
                '<div>&nbsp;</div>' +
                'These books dive into topics like Design Patterns, Architectural Design, programming paradigms (Object-Oriented, Functional, Imperative), code implementation patterns, and principles of writing clean code, among others.' +
                '<div>&nbsp;</div>' +
                'Surprisingly, many concepts presented in these books remain relevant over the long term. Design patterns from decades ago persist in various forms today, underscoring the enduring nature of certain methodologies in the youthful Software Industry. MVC, an aged concept, stands alongside other enduring architectural patterns and methodologies such as Singleton Pattern, Bridge, Observer, Builder, Factory, etc.' +
                '<div>&nbsp;</div>' +
                'Consider the seminal “Design Patterns” book from 1994 — an enduring pillar in Software Design. Its patterns and abstractions continue to be used, sometimes unknowingly, by engineers. However, relying solely on these without understanding their underpinnings is a disservice. To make informed architectural decisions and discuss solutions effectively, Software Engineers must grasp the mechanisms at work beneath the surface.' +
                '<div>&nbsp;</div>' +
                'Take, for instance, Martin Fowler’s “Refactoring,” a meticulous guide detailing code restructuring — defining the essence of refactoring, its significance, and the precise steps involved. It offers a foundational framework for honing our skills in this domain.' +
                '<div>&nbsp;</div>' +
                'Similarly, Bob Martin’s “Clean Code” probes the very concept of code cleanliness, then burgeons into a compendium outlining rules for achieving and understanding clean code. It dissects the motivations underpinning the pursuit of clean code and serves as a practical manual for its attainment.' +
                '<div>&nbsp;</div>' +
                'These books embody enduring principles that persist over the long haul, transcending fleeting changes. While some elements may evolve, they often orbit around these foundational concepts, which stand the test of time.' +
                '<div>&nbsp;</div>' +
                '<h1>What types of books to choose and when</h1>' +
                '<div>&nbsp;</div>' +
                'The path you choose hinges on your goals — a balance between meeting current needs and preparing for the future. Personally, I favor delving into fundamental concepts over solely diving into ever-changing technologies. Staying connected to market trends remains crucial, yet a well-constructed tech stack in Software Engineering tends to persist for the long haul. It’s not a sudden switch from React today to Ember.js tomorrow; these transitions usually take time and are easily identifiable.' +
                '<div>&nbsp;</div>' +
                'My reading regimen predominantly delves into core concepts showcased in books like “Clean Architecture,” “Clean Code,” “Design Patterns,” and “Refactoring.” These materials enable me to comprehend the underlying principles rather than being swayed by fleeting trends in solving momentary issues.' +
                '<div>&nbsp;</div>' +
                'Occasionally, I do devote time to perusing a tech-specific book or two. However, these readings serve more as overviews rather than versions specific to a particular technology. They aid me in exploring built-in solutions or refining my approach to problem-solving, especially when the framework streamlines certain complexities or offers optimal solutions.' +
                '<div>&nbsp;</div>' +
                'For instance, in my active use of Python — a language akin to others with dynamic compilers — I explored Pythonic coding nuances. This exploration, however, only occurred when the need arose.' +
                '<div>&nbsp;</div>' +
                'My approach designates around 80 to 85 percent of my time to fundamental concepts, dedicating a maximum of 15 to 20 percent to technological trends. This balance has proven effective, fostering a career trajectory that remains technology-agnostic, avoiding the lure of fleeting tech trends that lack substantial market value in the real-world landscape of software design (aka TechNoise).' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">In</span> conclusion, certainly, books play a crucial role, but where you invest your time matters significantly. Amidst the plethora of both exceptional and subpar books, discernment becomes key. I’ve encountered stellar tech books providing in-depth insights into frameworks, elucidating their workings and origins, aiding in making informed choices based on specific scenarios. Conversely, there are lackluster tech books that fail to deliver substantial value.' +
                '<div>&nbsp;</div>' +
                'However, in the realm of software-related concepts, the value gleaned from books has consistently been substantial. Rarely have I encountered a book in this category that didn’t enrich my understanding.' +
                '<div>&nbsp;</div>' +
                'Ultimately, it’s an individual journey — some don’t rely on books at all, and that’s acceptable; the internet holds a wealth of information. Books shouldn’t constitute the sole source of knowledge either.' +
                '<div>&nbsp;</div>' +
                'Through this piece, I aimed to underscore the availability of exceptional books and their potential to offer immense value. I wanted to emphasize the importance of making astute choices and dedicating ample attention to the right resources.' +
                '<div>&nbsp;</div>' +
                'Certainly, books won’t teach you how to code, but they’re invaluable for understanding concepts, methods, and much more. They offer insights that can be applied in practical scenarios. Similarly, in business, books don’t provide a complete business education, but they do impart valuable concepts that can be implemented in real-life situations.' +
                '<div>&nbsp;</div>' +
                'Thank you!'
        },
        open_link: 'https://medium.com/@ciganoliviudavid/are-books-relevant-in-software-design-8e22b5c61ae8',
    },
    {
        id: 'eight-rules-of-software-engineers',
        thumbnail: EightRulesOfSoftwareDesign.src,
        title: '8 Rules of Software Engineers',
        subtitle: '7 December 2023',
        previewHtmlField: {
            __html: 'Distinguishing an amateur from a professional software engineer often comes down to adherence to industry standards and regulations.' +
                '<div>&nbsp</div>' +
                'As I transitioned into a Software Engineer role after receiving and accepting a job offer, the realization dawned that my learning had only just begun.'
        },
        htmlField: {
            __html: '<span style="font-size: 1.8rem">Enbarking</span> on my journey in the Software Development industry began in high school, where I delved into various technologies and coding practices. By the time I entered university, I had a solid foundation in good coding practices, understood RESTful API architecture, comprehended MVC principles, and was acquainted with diverse programming paradigms. This laid a strong groundwork, marking me as a well-defined junior in the field.' +
                '<div>&nbsp;</div>' +
                'However, the reality check arrived during my first internship. It was a crash course in the gaps between theoretical knowledge and practical application. Concepts that seemed concrete in theory became fluid and nuanced in practice. Each day was a lesson, revealing the intricacies and subtleties of how systems truly operate.' +
                '<div>&nbsp;</div>' +
                'As I transitioned into a Software Engineer role after receiving and accepting a job offer, the realization dawned that my learning had only just begun. Despite the immense growth during the internship, it was merely scratching the surface. After only a few days onboarding, I jumped into a real world project with an enterprise client, a huge television operator from central Europe.' +
                '<div>&nbsp;</div>' +
                'I’ve gathered a wealth of invaluable lessons from firsthand experiences, whether through my own trials, observing others’ mistakes, or receiving insightful feedback. Some of these experiences have been distilled into the following set of golden rules:' +
                '<div>&nbsp;</div>' +
                '<h1><b>1. Fundamentals is key.</b></h1>' +
                '<i>You can get a job from learning a framework, but you cannot obtain a successful career.</i>' +
                '<div>&nbsp;</div>' +
                'Once, at a conference in Cluj-Napoca, I believe it was 2018, there was an eye-opening presentation titled “Job vs Career” (or something like that) that left a lasting impression on me. While I can’t recall every detail of the discussion, the opening slide remains vivid in my memory: “Learn a framework to obtain a job and learn your fundamentals to build a career.”' +
                '<div>&nbsp;</div>' +
                'It’s tempting to fall into the trap of mastering a framework solely because a job demands it. Yet, entry-level individuals often overlook a crucial reality — frameworks are transient. They emerge, thrive, and eventually fade away. Some enduring frameworks like Spring, .NET, Django, and Laravel have stood the test of time. However, the concern extends beyond the mortality of frameworks.' +
                '<div>&nbsp;</div>' +
                'Frameworks frequently abstract intricate logic, obscuring the core methodology and functionality. This abstraction can be a boon for experienced professionals, alleviating concerns about security, code architecture, or even the implementation of design patterns. However, for those with limited experience, lacking a grasp of fundamental software design concepts, this abstraction can pose significant challenges.' +
                '<div>&nbsp;</div>' +
                'Let me clarify — I, too, ventured into learning Django early in my journey. However, it was a parallel endeavor to my exploration of software design fundamentals. The goal wasn’t merely to grasp Django for the sake of it; it was to comprehend the underlying mechanisms of Django as a framework. As my understanding deepened, I even developed my own mini-web-framework in PHP.' +
                '<div>&nbsp;</div>' +
                'When we talk about the Fundamentals of Software Design, it’s a wide spectrum. It encompasses grasping basic concepts like control flow, conditionals, and loops, diving into optimization techniques, understanding programming paradigms, and extending to the realm of Software Architecture Design and Design Patterns.' +
                '<div>&nbsp;</div>' +
                'The point I want to stress is not to delay learning a framework until you’ve mastered every single design pattern, architecture, and programming paradigm. However, it’s crucial not to fall into the trap of assuming that knowing a specific framework equates to understanding these fundamentals.' +
                '<div>&nbsp;</div>' +
                'It’s about finding a balance. While learning a framework, make time to practice Test-Driven Development (TDD), explore different Design Patterns, and delve into various Software Architectures. These aspects are the compass points steering one towards a successful career in software development. They shape a more comprehensive understanding of the craft and ultimately pave the way for a successful software career.' +
                '<div>&nbsp;</div>' +
                'Even though at the time I wasn’t working as a professional Software Developer, and thus wasn’t truly aware of all these things, now, after spending some time in the professional field, I can recall, remember, and thereby reinforce a thought I’ve always had since that day.' +
                '<div>&nbsp;</div>' +
                'Fundamentals is they key.' +
                '<div>&nbsp;</div>' +
                '<h1><b>2. Be technology agnostic.</b></h1>' +
                '<i>You’re not solely a Java Engineer, a .NET Engineer, a Python Engineer, or a JS Engineer — you’re a Software Engineer.</i>' +
                '<div>&nbsp;</div>' +
                'This principle stems from the first one: it’s crucial to grasp that you’re not solely a Java Engineer, a .NET Engineer, a Python Engineer, or a JS Engineer — you’re a Software Engineer.' +
                '<div>&nbsp;</div>' +
                'A Software Engineer’s role involves analyzing the project at hand and, based on its requirements, needs, and future development direction, selecting the most suitable technology.' +
                '<div>&nbsp;</div>' +
                'Consider this example: A client needs a mobile app for both iOS and Android that isn’t heavily resource-intensive, reasonably compact in scale, and doesn’t demand intensive processing. Opting for a hybrid approach makes sense here. Using a single technology for both platforms streamlines maintenance, eases development, and minimizes expenditure from a business perspective. Simplicity is key, and in this scenario, choosing a hybrid tech simplifies the solution.' +
                '<div>&nbsp;</div>' +
                'Now, let’s say you’re unfamiliar with hybrid tech. Given your grasp of fundamentals, how Software operates, and Software Design, diving into a new tech stack shouldn’t be daunting. In a matter of weeks — much like my experience — you’d likely become productive with it. When I started my internship and was introduced to React, though I understood its concept, I hadn’t developed anything using it. The initial week was challenging, the second brought understanding and basic implementation, and by the third, React felt comfortable. Surprisingly, within two months, despite being a junior, I was assigned to an enterprise project built with React.' +
                '<div>&nbsp;</div>' +
                'If I managed this, so can you. The point is, let the benefits a technology brings to the final product drive your decision-making, not solely your familiarity with it.' +
                '<div>&nbsp;</div>' +
                '<h1><b>3. Consider the market.</b></h1>' +
                '<i>The optimal tech stack for a particular job in your area should be influenced by market demand and requirements.</i>' +
                '<div>&nbsp;</div>' +
                'Choosing the right technology is paramount when securing a software development role. It’s crucial to align your skill set with the prevalent programming languages in your region. For instance, if Python Django lacks job opportunities compared to the high demand for PHP roles, investing solely in Python Django might not be the wisest choice.' +
                '<div>&nbsp;</div>' +
                'However, while learning a new framework is always beneficial, maximizing your job prospects involves readiness in the sought-after tech stack. Companies typically recruit based on specific technology requirements for current projects. They prioritize candidates who can seamlessly integrate into the team and contribute immediately, without extensive training periods, specifically in the current economic conditions.' +
                '<div>&nbsp;</div>' +
                'Especially for mid-senior positions, it’s not just about being comfortable with the stack; it’s about thriving within it. Companies seek individuals who not only possess proficiency but thrive in their chosen tech stack.' +
                '<div>&nbsp;</div>' +
                'Striking a balance between exploring new frameworks and meeting job market demands is essential. Keeping abreast of tech trends, understanding local job market needs, and continuously enhancing your skills can provide the competitive advantage necessary to navigate the dynamic tech industry landscape.' +
                '<div>&nbsp;</div>' +
                'Before diving into the job hunt, conducting thorough research can be a game-changer. Take a closer look at local companies, their tech requirements, and the predominant stacks they use. Tailoring your skill set towards these specific demands can significantly boost your chances of landing a job.' +
                '<div>&nbsp;</div>' +
                'By aligning your expertise with the prevalent tech stacks sought by local companies, you’re optimizing your opportunities. This targeted approach increases the likelihood of being a perfect fit for the roles available in your area. It’s a strategy that enhances your competitiveness and enhances your prospects of securing the job you’re aiming for.' +
                '<div>&nbsp;</div>' +
                '<h1><b>4. Avoid the tech noise</b></h1>' +
                '<i>With the abundance of tech noise available, it’s essential to manage and navigate it effectively.</i>' +
                '<div>&nbsp;</div>' +
                'Tech noise refers to technologies, whether outdated, fading, or lacking market value. Learning something like BunJs or CoffeScript isn’t beneficial if it doesn’t significantly enhance the current tech stack. One of my mentors often emphasized that for a new technology to replace an existing one, it should offer a substantial improvement, perhaps tenfold. Companies won’t invest in transitioning from, say, Node to BunJs just for a slight speed increase.' +
                '<div>&nbsp;</div>' +
                'Consider the maturity of a tech stack: its community, available resources, and problem-solving capabilities. Mature technology isn’t just about age but also about how well-supported and versatile it is. For instance, when facing issues in Node, solutions are readily available on platforms like Stack Overflow, unlike less established technologies like BunJS, causing potential roadblocks in development.' +
                '<div>&nbsp;</div>' +
                'The comparison between CoffeScript and Typescript underscores the importance of making decisions based on solid reasoning rather than following trends. It’s crucial not to be swayed by the allure of a fancy technology just because it’s the latest hype. Being technology agnostic means avoiding attachment to any particular stack and instead carefully selecting based on well-defined, substantial reasons for initiating development with it.' +
                '<div>&nbsp;</div>' +
                'V1 technologies, while potentially promising, can be precarious for real-world development. They might serve for experimental purposes but often fall into the realm of tech noise — technologies lacking significant market viability or proven reliability.' +
                '<div>&nbsp;</div>' +
                'Establishing a stable technology with an extensive community and thorough documentation demands significant time and persistent dedication. A seasoned Software Engineer prioritizes ensuring the stability of the chosen tech stack for a project.' +
                '<div>&nbsp;</div>' +
                '<h1><b>5. Code is crucial</b></h1>' +
                '<i>Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code — Bob Martin</i>' +
                '<div>&nbsp;</div>' +
                'The significance of code quality cannot be overstated. It forms the core of an application, dictating its behavior and functionality. However, in many instances, there’s a tendency to compromise code quality for the sake of speedy delivery. This practice shouldn’t be acceptable, especially for a professional software engineer who comprehends that prioritizing code quality over feature delivery is imperative.' +
                '<div>&nbsp;</div>' +
                'Code stands as the narrative of the software’s development, illustrating how each module behaves. It should be clear and descriptive, comprehensible to programmers of varying experience levels. As one of my mentors used to emphasize, code ought to be so clear that even a cat could understand it. Indeed, clean, meticulously structured, and well-defined code is key.' +
                '<div>&nbsp;</div>' +
                'Consider this: How can a system be extended when it’s entangled in messy dependencies between modules? How can a new engineer decipher poorly structured code filled with inconsistencies in naming conventions, dependencies, spacing, and convoluted logic? The solution to these challenges lies in clean code — code that facilitates extension, comprehension, and maintenance effortlessly.' +
                '<div>&nbsp;</div>' +
                '<h1><b>6. Software Architecture is crucial</b></h1>' +
                '<i>Software architecture and the technology stack are distinct entities that every Software Engineer should discern.</i>' +
                '<div>&nbsp;</div>' +
                'Distinguishing between architecture and the tech stack is crucial. Architecture refers to how systems communicate, their independent structures, and the patterns used to solve specific problems. On the other hand, the tech stack, like programming languages and frameworks, serves as tools to materialize the architecture but isn’t the architecture itself.' +
                '<div>&nbsp;</div>' +
                'Consider building a house: the architecture represents the structure, where doors are placed, the depth of the foundation, etc. Similarly, in software, the architecture details how the system operates, while programming languages and tools are akin to hammers or vans in construction — they’re the tools employed to bring the architecture to life.' +
                '<div>&nbsp;</div>' +
                'A robust architecture employs established patterns like Hexagonal, Clean, or Domain-Driven Design. The choice of architecture depends on the problem at hand, but its essence lies in shaping the software’s possibilities. It defines the system’s overall behavior once all the interconnected parts are assembled, creating a functional software system.' +
                '<div>&nbsp;</div>' +
                '<h1>7. Tests, tests and tests</h1>' +
                '<i>A software system lacking tests is essentially legacy from the start.</i>' +
                '<div>&nbsp;</div>' +
                'Testing your code consistently and integrating tests into the development process is essential. While many emphasize quality, true assurance often comes from comprehensive testing. This practice, advocated by experienced programmers, has endured for decades because it yields tangible results.' +
                '<div>&nbsp;</div>' +
                'Tests provide numerous benefits:\n' +
                '- They guarantee quality based on evidence, not just claims.\n' +
                '- By minimizing human errors, tests reduce the likelihood of bugs.\n' +
                '- They enhance software reliability, especially during modifications or expansions.\n' +
                '- Tests serve as valuable documentation for new team members.' +
                '<div>&nbsp;</div>' +
                'Although writing quality tests demands time and effort, it’s an investment with long-term rewards. While it may seem time-consuming initially, the hours saved in the future are substantial and near at hand.' +
                '<div>&nbsp</div>' +
                'The decision to test hinges on your tolerance for bugs. If overlooking occasional production issues isn’t a concern or if you’re unconcerned about the software’s future, tests might not seem necessary. However, for those valuing software longevity, stability, and a bug-free production environment, various automated tests — such as unit, automation, and performance testing — are crucial.' +
                '<div>&nbsp;</div>' +
                'Consider Threat Modeling, which revolves around assessing your bug tolerance. Critical systems like banking or aviation demand rigorous testing due to low tolerance for errors. Conversely, less critical platforms might accept occasional issues in production. Tailoring tests based on this assessment is crucial.' +
                '<div>&nbsp;</div>' +
                'In essence, a software system lacking tests is akin to operating in legacy mode, susceptible to unforeseen issues and vulnerabilities.' +
                '<div>&nbsp;</div>' +
                '<h1><b>8. Soft skill</b></h1>' +
                '<i>I prefer hiring an average software engineer over a brilliant but unpleasant individual. — Stefan Mischook</i>' +
                '<div>&nbsp;</div>' +
                'The quote might seem humorous, but it holds a lot of truth. Soft skills are essential for engineers. The ability to collaborate effectively, handle challenges gracefully, maintain composure, mentor colleagues, and translate technical jargon for non-technical individuals are vital skills.' +
                '<div>&nbsp;</div>' +
                'Reflecting on my experience, I’ve realized that a significant portion of time as a software engineer is dedicated to meetings, discussions, and communication. Coding, while crucial, only occupies the other half. In light of this, hiring someone with exceptional technical skills but lacking in interpersonal abilities might lead to obstacles in the long term.' +
                '<div>&nbsp;</div>' +
                'The ideal engineer possesses a balanced proficiency in both hard and soft skills, recognizing the importance of each in ensuring success and productivity in the industry.' +
                '<div>&nbsp;</div>' +
                'Exploring top books on negotiation, psychology, communication, human nature, and self-control is highly recommended to gain a profound understanding of what soft skills truly embody. Personally, I’ve found that comprehending soft skills, like many important concepts, necessitates practice and dedicated learning. Mere commentary without a grasp of the underlying principles often falls short.' +
                '<div>&nbsp;</div>' +
                'Soft skills extend beyond interpersonal interactions — they encompass how you approach code reviews. It’s essential to articulate the reasons behind recommendations, even if they seem apparent. Consistently emphasizing fundamental concepts fosters stability over time. When providing feedback, prioritize meaningful, purposeful comments rather than superficial ones, focusing on impactful aspects. Additionally, understanding when and where to leave a level of originality into others’ code is a key aspect of soft skills in software development.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">In</span> conclusion, While this list may seem exhaustive, I’ve found each rule to be invaluable in guiding my decisions within the engineering field. These principles have not only served me well but continue to do so. Many of these concepts are echoed by individuals far more knowledgeable than myself, such as Bob Martin, Kent Beck, Martin Fowler, and others — seasoned engineers who deeply grasp the industry’s workings and its future trajectory.' +
                '<div>&nbsp;</div>' +
                'Each rule is succinctly described, offering an introductory insight into its significance. My hope is that these principles prove as beneficial to you as they have been to me on my journey. Even if you don’t embrace all these principles, they provide an alternative perspective on how things could be approached and developed. Maybe it will raise some questions to you as well.' +
                '<div>&nbsp;</div>' +
                'Thank you!'
        },
        open_link: 'https://medium.com/@ciganoliviudavid/my-top-9-rules-of-software-development-b0b9fe232e5a',
    },
];

export const ArticlesConfigPreview = ArticlesConfig.slice(0, 3);