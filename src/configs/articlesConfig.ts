import AreBooksRelevantInSoftwareDesign from "@components/assets/articles/are_books_relevant_in_software_design.webp";
import EightRulesOfSoftwareDesign from "@components/assets/articles/8_rules_of_software_design.webp";
import { ArticlesConfigType } from "@components/utils/types";

export const ArticlesConfig: ArticlesConfigType[] = [
    {
        thumbnail: AreBooksRelevantInSoftwareDesign.src,
        title: 'Are books relevant in Software Design',
        subtitle: '10 December',
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
        thumbnail: EightRulesOfSoftwareDesign.src,
        title: 'What programming language to learn first',
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
]