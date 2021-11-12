import { DescriptionType, Project, ProjectType, ShortProjectDescription } from "../../proxies/project-proxy/project";
import { ProjectService } from "./project-service";

export class DefaultProjectService implements ProjectService
{
    private static projects: Array<Project> =
    [
        {
            id: "Ecoblock",
            shortProjectDescription: {
                name: "Ecoblock",
                subtitle: "HooHacks 2021",
                description: "A Sustainable & Scalable Blockchain That Can Save Entire Countries Worth Of Energy.",
                image: require("./images/minimal.png"),
                tags: ["JavaScript", "Flutter", "Dart"],
                hasFullDescription: true,
                hasAward: true,
            },
            projectDescription: {
                problem: "With the ever-increasing popularity of cryptocurrencies, how can we develop a coin which is both healthy for the environment and sustainable?",
                solution: "Create a cryptocurrency which builds upon the Ethereum's Proof of Stake concept which gives better rates to minters based on an ecological incentive",
                projectType: ProjectType.hackathon,
                timeSpan: 48,
                programmingLanguages: [
                    {
                        language: "Dart",
                        percent: 70,
                    },
                    {
                        language: "TypeScript",
                        percent: 25,
                    },
                    {
                        language: "Python",
                        percent: 3,
                    },
                    {
                        language: "Other",
                        percent: 2
                    }
                ],
                projectLinks: [
                    {
                        url: "https://devpost.com/software/ecoblock",
                        logo: "globe"
                    },
                    {
                        url: "https://github.com/Johnson-Su/EcoBlock",
                        logo: "github"
                    },
                    {
                        url: "https://www.youtube.com/watch?v=z_ATDY85wsA&t=1s&ab_channel=Johnsonsu",
                        logo: "youtube"
                    }
                ],
                bannerStyle: `background-color: #7ee8fa;
                background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);`,
                description: [
                    {
                        type: DescriptionType.text,
                        texts:
                            [
                                {
                                    header: "🌱 Inspiration",
                                    content: "Currently Bitcoin mining is estimated to use more energy than the entire United Kingdom per year (Up to 445 annualised terawatt hours). The act of mining and transferring one Bitcoin is one of the most energy intensive things we as humans can do. Needless to say, with the current widespread adoption of cryptocurrencies a massive energy and sustainability crisis has been set in motion. So we asked ourselves How can we create an extremely scalable solution to the cryptocurrency energy crisis?"
                                }
                        ]
                    },
                    {
                        type: DescriptionType.image,
                        header: "Google Vision API & Me Debugging on a Physical Device",
                        images:
                            [
                                "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/451/272/datas/gallery.jpg",
                                "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/451/841/datas/gallery.jpg"
                        ]
                    },
                    {
                        type: DescriptionType.text,
                        texts:
                            [
                                {
                                    header: "⚡ What EcoBlock does",
                                    content: "TL;DR EcoBlock uses an alternative method of coin production that uses over 99% less energy than cryptocurrencies such as Bitcoin and Etherium. Additionally, we utilize machine learning to reward coin miners/minters that use green energy to incentivise a move towards a cleaner, more sustainable blockchain. ♻️ Built Different || EcoBlock uses a Proof of Stake system (POS) built using Typescript for coin distribution compared to the common Proof of Work system (POW). POS rewards users for how many coins they hold (stake) while POW rewards users based on their computing power to solve math problems. The move from computing intensive generation to a much more energy efficient 'lottery' esque generation accounts for the majority of energy savings that EcoBlock can do. 🍀 Reward the Good || What differentiates us from other existing POS currencies is that we reward miners/minter for using certified green energy sources through our EcoBoost system. We use Google Cloud Vision to scan energy bills to determine is a mining/minting operation uses certified clean energy to run their computers. If so, we reward them by increasing their adding a multiplier onto their balance when deciding who wins a newly minted block. Combined these two approaches create one of the greenest and most sustainable approaches to cryptocurrency possible. 🚀 Ready for Takeoff || EcoBlock isn't only a simple blockchain. We were able to implement many features needed to introduce EcoBlock to the real world such as creating an IOS and Android wallet for storing, monitoring, transfering, and minting coins. Additionally we ensure that our system is secure as we prevent tampering by checking blocks and not adding any tampered blocks to the blockchain. A malicious user would need to own over 51% of the entire currency to tamper with the blockchain which is extremely unrealistic in practice. Key Working Features: Proof of Stake Blockchain with P2P connection and automatic host finding, OCR with Google Cloud Vision through REST API, Flutter frontend connected to Firebase and Blockchain, working private and public keys with wallets, functional transactions between blockchain nodes, python CLI for the blockchain.",
                                }
                        ]
                    },
                    {
                        type: DescriptionType.text,
                        texts:
                            [
                                {
                                    header: "👷 How we built it",
                                    content: "The EcoBlock blockchain was made using Typescript and Node.JS and had testing tools and a CLI (command line interface) done with Python. For determining if person use was using eco-friendly energy we used the Google Cloud Vision API which we implemented using a REST API and Dart. We used a Google Firebase database to store non-sensitive information related to EcoBlock users. The frontend was drafted and prototyped with Figma and implemented using the Flutter framework for Dart."
                                },
                                {
                                    header: "⚠️ Challenges we ran into",
                                    content: "The largest challenge for us was that everything was new to us as we chose languages, frameworks, and API's that we were unfamiliar with. This meant we had to do lots of documentation reading, asking mentors, and referring to online tutorials and resources. Besides the large number of technical challenges we also had to deal with each team member being in a different time zone making it hard to coordinate times to meet and sync up. However, we were able to overcome these challenges very well through proper time management and communication letting us deliver a project that we are all proud of."
                                },
                        ]
                    },
                    {
                        type: DescriptionType.image,
                        header: "Blockchain Node Outputs & Single Node Closeup",
                        images:
                            [
                                "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/451/275/datas/gallery.jpg",
                                "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/451/344/datas/gallery.jpg"
                        ]
                    },
                    {
                        type: DescriptionType.text,
                        texts:
                            [
                                {
                                    header: "😀 Accomplishments that we're proud of",
                                    content: "We were really proud that we completed a complex proof of stake blockchain for the backend with several advanced features such as automatic peer finding. For the frontend we felt that the UI was very clean and fulfilled its purpose of being an interactive way of accessing the blockchain. We were also very proud of figuring out how to use Google Cloud Vision for finding if a user is using clean energy."
                                },
                                {
                                    header: "📚 What we learned",
                                    content: "We were able to learn lots about different languages and frameworks as we were all new to Typescript, Dart, Flutter and REST API's. Additionally, through the course of this project we gained lots of insight into blockchain expercially with the advantages and disadvantages of Proof of Stake versus Proof of Work. Lastly, we all learnt more about how to work under tight timelines and working together to solve problems through this hackathon."
                                },
                        ]
                    },
                    {
                        type: DescriptionType.text,
                        texts:
                            [
                                {
                                    header: "⏭️ What's next for EcoBlock",
                                    content: "We didn't have time to get into too many details when it came to security for certain parts of the project such as ensuring documents submitted for green energy certification checks so we wish we had more time to secure those parts of the project. We also want to try and continue work on blockchain and see if our idea is able to come to fruition as we believe that our project today could really be a feasible solution to the cryptocurrency energy problems that exist."
                            }
                        ]
                    }
                ]
            }
        },
        {
            id: "Certi-Chain",
            shortProjectDescription: {
                name: "Certi-Chain",
                subtitle: "Hack Western 7",
                description: "A blockchain powered solution to prevent the counterfeiting of products.",
                image: require("./images/certimin.png"),
                tags: ["JavaScript", "HTML", "CSS", "Jinja2", "Python Flask"],
                hasFullDescription: true,
                hasAward: true,
            },
            projectDescription: {
                problem: "How do we securely purchase goods and ensure it's quality and authenticity",
                solution: "Add an NFC certification tag to each item which is stored on the a blockchain ledger to enforce immutability & security",
                projectType: ProjectType.hackathon,
                timeSpan: 36,
                projectLinks: [
                    {
                        url: "https://devpost.com/software/certi-chain",
                        logo: "globe"
                    },
                    {
                        url: "https://github.com/Johnson-Su/Certi-Chain",
                        logo: "github"
                    },
                    {
                        url: "https://www.youtube.com/watch?v=XBuAo6QWUbs&ab_channel=Johnsonsu",
                        logo: "youtube"
                    },
                ],
                programmingLanguages: [
                    {
                        language: "JavaScript",
                        percent: 37
                    },
                    {
                        language: "Python",
                        percent: 34
                    },
                    {
                        language: "CSS",
                        percent: 28
                    },
                    {
                        language: "Other",
                        percent: 1
                    }
                ],
                bannerStyle: `background-color: #f7b42c;
                background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);`,
                description: [
                    {
                        type: DescriptionType.text,
                        texts: [{
                            header: "Inspiration",
                            content: "The counterfeiting industry is anticipated to grow to $2.8 trillion in 2022 costing 5.4 million jobs. These counterfeiting operations push real producers to bankruptcy as cheaper knockoffs with unknown origins flood the market. In order to solve this issue we developed a blockchain powered service with tags that uniquely identify products which cannot be faked or duplicated while also giving transparency. As consumers today not only value the product itself but also the story behind it."
                        }]
                    },
                    {
                        type: DescriptionType.text,
                        texts: [
                            {
                            header: "What it does",
                            content: "Certi-Chain uses a python based blockchain to authenticate any products with a Certi-Chain NFC tag. Each tag will contain a unique ID attached to the blockchain that cannot be faked. Users are able to tap their phones on any product containing a Certi-Chain tag to view the authenticity of a product through the Certi-Chain blockchain. Additionally if the product is authentic users are also able to see where the products materials were sourced and assembled."
                        },
                            {
                                header: "How we built it",
                                content: "Certi-Chain uses a simple python blockchain implementation to store the relevant product data. It uses a proof of work algorithm to add blocks to the blockchain and check if a blockchain is valid. Additionally, since this blockchain is decentralized, nodes (computers that host a blockchain) have to be synced using a consensus algorithm to decide which version of the blockchain from any node should be used. In order to render web pages, we used Python Flask with our web server running the blockchain to fetch relative information from the blockchain and displayed it to the user in a style that is easy to understand. A web client to input information into the chain was also created using Flask to communicate with the server.",
                        }]
                    },
                    {
                        type: DescriptionType.image,
                        header: "Product Screen & High-Level Diagram of Certi-Chain",
                        images: ["http://sujohnson.com/assets/ProjectAssets/Certi-Chain/certichain1.png", "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/292/960/datas/gallery.jpg"]
                    },
                    {
                        type: DescriptionType.text,
                        texts:
                            [
                                {
                                    header: "Challenges we ran into",
                                    content: "For all of our group members this project was one of the toughest we had. The first challenge we ran into was that once our idea was decided we quickly realized only one group member had the appropriate hardware to test our product in real life. Additionally, we deliberately chose an idea in which none of us had experience in. This meant we had to spent a portion of time to understand concepts such as blockchain and also using frameworks like flask. Beyond the starting choices we also hit several roadblocks as we were unable to get the blockchain running on the cloud for a significant portion of the project hindering the development. However, in the end we were able to effectively rack our minds on these issues and achieve a product that exceeded our expectations going in. In the end we were all extremely proud of our end result and we all believe that the struggle was definitely worth it in the end."
                            }
                        ]
                    },
                    {
                        type: DescriptionType.text,
                        texts:
                            [
                                {
                                    header: "Accomplishments that we're proud of",
                                    content: "Our largest achievement was that we were able to accomplish all our wishes for this project in the short time span we were given. Not only did we learn flask, some more python, web hosting, NFC interactions, blockchain and more, we were also able to combine these ideas into one cohesive project. Being able to see the blockchain run for the first time after hours of troubleshooting was a magical moment for all of us. As for the smaller wins sprinkled through the day we were able to work with physical NFC tags and create labels that we stuck on just about any product we had. We also came out more confident in the skills we already knew and also developed new skills we gained on the way."
                                },
                                {
                                    header: "What we learned",
                                    content: "In the development of Certi-Check we learnt so much about blockchains, hashes, encryption, python web frameworks, product design, and also about the counterfeiting industry too. We came into the hackathon with only a rudimentary idea what blockchains even were and throughout the development process we came to understand the nuances of blockchain technology and security. As for web development and hosting using the flask framework to create pages that were populated with python objects was certainly a learning curve for us but it was a learning curve that we overcame. Lastly, we were all able to learn more about each other and also the difficulties and joys of pursuing a project that seemed almost impossible at the start."
                                },
                        ]
                    },
                    {
                        type: DescriptionType.text,
                        texts:
                            [
                                {
                                    header: "What's next for Certi-Chain",
                                    content: "Our team really believes that what we made in the past 36 hours can make a real tangible difference in the world market. We would love to continue developing and pursuing this project so that it can be polished for real world use. This includes us tightening the security on our blockchain, looking into better hosting, and improving the user experience for anyone who would tap on a Certi-Chain tag."
                            }
                        ]
                    },
                ]
            }
        },
        {
            id: "Vaccurate",
            shortProjectDescription: {
                name: "Vaccurate",
                subtitle: "nwHacks 2021",
                description: "Data Powered COVID-19 Vaccine Distribution.",
                image: require("./images/vaccmin.png"),
                tags: ["JavaScript", "CSS", "HTML", "Twilio", "Firebase", "Bootstrap"],
                hasFullDescription: true,
                hasAward: true,
            },
            projectDescription: 
            {
                problem: "During times of the COVID-19 pandemic, what is an efficient and secure way to prioritize the distribution of vaccines?",
                solution: "Develop an easy to access, web application, which determines the priority of an individual based on a series of questionnaires and then route them to the nearest clinic if eligible",
                projectType: ProjectType.hackathon,
                timeSpan: 24,
                programmingLanguages: [
                    {
                        language: "HTML",
                        percent: 43
                    },
                    {
                        language: "CSS",
                        percent: 31
                    },
                    {
                        language: "Java",
                        percent: 14
                    },
                    {
                        language: "JavaScript",
                        percent: 12
                    }
                ],
                projectLinks: [
                    {
                        url: "https://devpost.com/software/vaccurate",
                        logo: "globe"
                    },
                    {
                        url: "https://github.com/BenjaminSao/Vaccurate",
                        logo: "github"
                    }
                ],
                bannerStyle: `background-color: #ee8c68;,
                background-image: linear-gradient(315deg, #ee8c68 0%, #eb6b9d 74%);`,
                description:
                    [
                        {
                            type: DescriptionType.text,
                            texts:
                                [
                                    {
                                        header: "Inspiration",
                                        content: "Before the coronavirus pandemic, vaccine distribution and waste was a little known issue. Now it's one of the most relevant and pressing problems that world faces. Our team had noticed that government vaccine rollout plans were often vague and lacked the coordination needed to effectively distribute the vaccines. In light of this issue we created Vaccurate, a data powered vaccine distribution app which is able to effectively prioritize at risk groups to receive the vaccine."
                                    },
                                    {
                                        header: "What it does",
                                        content: "To apply for a vaccine, an individual will enter Vaccurate and fill out a short questionnaire based off of government research and rollout plans. We will then be able to process their answers and assign weights to each response. Once the survey is done all the user needs to do is to wait for a text to be sent to them with their vaccination location and date! As a clinic, you can go into the Vaccurate clinic portal and register with us. Once registered we are able to send you a list of individuals our program deems to be the most at risk so that all doses received can be distributed effectively. Under the hood, we process your data using weights we got based off of government distribution plans and automatically plan out the distribution and also contact the users for the clinics!",
                                    },
                                    
                            ]
                        },
                        {
                            type: DescriptionType.image,
                            header: "Home Page",
                            images: ["https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/332/400/datas/gallery.jpg"]
                        },
                        {
                            type: DescriptionType.text,
                            texts: [
                                {
                                    header: "How I built it",
                                    content: "For the frontend, we drafted up a wireframe in Figma first, then used HTML, CSS, and Bootstrap to bring it to life. To store user and clinic information, we used a Firestore database. Finally, we used Heroku to host our project and Twilio to send text notifications to users."
                                },
                            ]
                        },
                        {
                            type: DescriptionType.text,
                            texts: [
                                {
                                    header: "Challenges I ran into",
                                    content: "On the backend, it was some of our team's first time working with a Firestore database, so there was a learning curve trying to figure out how to work with it. We also ran into a lot of trouble when trying to set up a Heroku, but eventually got it running after several hours (can we get an F in chat). And although none of us thought it was a huge deal in the beginning, the time constraint of this 24 hour hackathon really caught up on us and we ran into a lot of challenges that forced us to adapt and reconstruct our idea throughout the weekend so we weren't biting off more than we could chew."
                                },
                                {
                                    header: "Accomplishments that I'm proud of",
                                    content: "Overall, we are very proud of the solution we made as we believe that with a little more polish our project has great value to the real world. Additionally, each and every member was able to explore a new language, framework, or concept in this project allowing us to learn more too while solving issues. We were really impressed by the end product especially as it was produced in this short time span as we not only learnt but immediately applied our knowledge."
                                },
                                {
                                    header: "What I learned",
                                    content: "Our team was able to learn more about servers with Gradle, frontend development, connecting to databases online, and also more about how we can contribute to a global issue with a time relevant solution! We were also able to learn how to compact as much work and learning as possible into a small timespan while maintaining communications between team members."
                                }
                            ]
                        },
                        {
                            type: DescriptionType.text,
                            texts: [
                                {
                                    header: "What's next for Vaccurate",
                                    content: "The statistics and guidelines we presented in our project were made based off of reliable online resources, however it's important that we consult an official healthcare worker to create a more accurate grading scheme and better vaccination prioritization. Additionally, we would like to add features to make the UX more accessible, such as a booking calendar for both users and clinics, and the ability to directly modify appointments on the website."
                                },
                            ]
                        },
                        {
                            type: DescriptionType.image,
                            header: "Gallery",
                            images: ["https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/332/399/datas/gallery.jpg", "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/332/398/datas/gallery.jpg", "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/331/478/datas/original.gif"]
                        },
                ]
            }
        },
        {
            id: "Dorm Buddies",
            shortProjectDescription: {
                name: "Dorm Buddies",
                subtitle: "CalgaryHacks 2021",
                description: "Give students back the social interactions that home lacks!",
                image: require("./images/dormmin.png"),
                tags: ["JavaScript", "Vue.js", "Node.js", "C#", "CSS", "HTML", "Firebase"],
                hasFullDescription: true,
                hasAward: false,
            },
            projectDescription: {
                problem: "How do we create a way to enable an immersive conversation with our friends during the COVID-19 pandemic?",
                solution: "Build a social platform which simulates a 'world-like' atmosphere by adding the ability to move, chat, video-call, and interact with other people",
                projectType: ProjectType.hackathon,
                timeSpan: 24,
                programmingLanguages: [
                    {
                        language: "HTML",
                        percent: 40
                    },
                    {
                        language: "JavaScript",
                        percent: 34
                    },
                    {
                        language: "CSS",
                        percent: 14
                    },
                    {
                        language: "TypeScript",
                        percent: 12
                    },
                ],
                projectLinks: [
                    {
                        url: "https://devpost.com/software/dormbuddy",
                        logo: "globe",
                    },
                    {
                        url: "https://github.com/BenjaminSao/DormBuddies",
                        logo: "github"
                    }
                ],
                bannerStyle: `background-color: #f39f86;
                background-image: linear-gradient(315deg, #f39f86 0%, #f9d976 74%);`,
                description:
                    [
                        {
                            type: DescriptionType.text,
                            texts: [
                                {
                                    header: "Inspiration",
                                    content: "With the world moving online due to COVID-19, it has become much harder to create long-lasting relationships, especially for students transitioning to university this year. Looking back at our experiences we noticed that living in a dorm is a great way to make life-long friends! The Zoom breakout rooms we're forced into are nothing but endless periods of awkward silence. Aside from the boring course group chats, many students do not have the opportunity to meet students within their program.",
                                }
                            ]
                        },
                        {
                            type: DescriptionType.image,
                            header: "Me!",
                            images: ["https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/397/296/datas/gallery.jpg"]
                        },
                        {
                            type: DescriptionType.text,
                            texts: [
                                {
                                    header: "What it does",
                                    content: "DormBuddy matches students with other students just like how dorms are assigned. These matched groups are saved and will allow students to move around in a 'E-dorm' virtual environment, video call, and text each other. Students move between dorms and can interact with others and return to sessions.",
                                }
                            ]
                        },
                        {
                            type: DescriptionType.image,
                            header: "Live Demo",
                            images: ["https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/396/545/datas/gallery.jpg", "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/397/294/datas/gallery.jpg", "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/397/295/datas/gallery.jpg"]
                        },
                        {
                            type: DescriptionType.text,
                            texts: [
                                {
                                    header: "How we built it",
                                    content: "Using a server built with Node.js and storing user data in Google Firebase we are able to match people in our web application. Then by using HTML5 WebRTC we are able to communicate between users so they can video chat and interact together on the interactive dorm map. It was designed using Figma and converted using JS, HTML, and CSS into a functional product.",
                                },
                                {
                                    header: "Challenges we ran into",
                                    content: "Using sockets and RTC Peer connections were confusing and hard to work with, but eventually, we were able to get people connected! Firebase user authentication is another finicky aspect of our project, but we were able to get users in the database. We also found implementing the movement and i-space borders to be quite tricky with javascript. Lastly, we have several issues with getting heroku to function as it has limited memory and often bugged out on us.",
                                },
                            ]
                        },
                        {
                            type: DescriptionType.text,
                            texts: [
                                {
                                    header: "Accomplishments that we're proud of",
                                    content: "We are proud of learning about and getting a real time peer connection going. We are also proud of creating a Google Firebase data base and hosting out Node server on Heroku. Lastly, we all had to learn almost everything from scratch so this was very satisfying to get working.",
                                }
                            ]
                        },
                        {
                            type: DescriptionType.text,
                            texts: [
                                {
                                    header: "What we learned",
                                    content: "We learned about ICE servers when working with real time connections. We also familiarized ourselves with async programming when working with the web.",
                                },
                                {
                                    header: "What's next for DormBuddy",
                                    content: "Adding more sophisticated interaction features to further simulate the virtual dorm experience.",
                                },
                            ]
                        },
                        
                ]
            }
        },
        {
            id: "AnimeTaro",
            shortProjectDescription: {
                name: "AnimeTaro",
                subtitle: "Hack the Northeast 2020",
                description: "Oh? You're Approaching This Project?",
                image: require("./images/animetaro.png"),
                tags: ["JavaScript", "CSS", "HTML", "Firebase"],
                hasFullDescription: false,
                hasAward: false,
            },
            projectDescription: null
        },
        {
            id: "Journey Guide",
            shortProjectDescription: {
                name: "Journey Guide",
                subtitle: "OpenHacks",
                description: "A walking, running, cycling route-finding app.",
                image: require("./images/journeyguide.png"),
                tags: ["JavaScript", "Vue.js", "Node.js", "Figma", "Firebase", "Google Maps API"],
                hasFullDescription: false,
                hasAward: false,
            },
            projectDescription: null
        },
        {
            id: "Grimsby Thai Website",
            shortProjectDescription: {
                name: "Grimsby Thai Website",
                subtitle: "Grimsby Thai",
                description: "Designed and created a modern looking website for the Restuarant, Grimsby Thai Cuisine.",
                image: require("./images/84cdcc11c8b00a7910666034a3ab68b9-grimsby-thai.png"),
                tags: ["HTML", "CSS"],
                hasFullDescription: false,
                hasAward: false,
            },
            projectDescription: null
        },
        {
            id: "Thailandia Website",
            shortProjectDescription: {
                name: "Thailandia Website",
                subtitle: "Thailandia",
                description: "Designed and created a modern looking website for the Restuarant, Thailandia.",
                image: require("./images/d7d8e861a54ab9dc205d458ca2a20748-thailandia.png"),
                tags: ["HTML", "CSS"],
                hasFullDescription: false,
                hasAward: false,
            },
            projectDescription: null
        },
        {
            id: "Young Thai Website",
            shortProjectDescription: {
                name: "Young Thai Website",
                subtitle: "Young Thai",
                description: "Designed and created a modern looking website for the Restuarant, Young Thai.",
                image: require("./images/3b54a8a0158744320dcd87ce96cff8c5-young-thai.png"),
                tags: ["HTML", "CSS"],
                hasFullDescription: false,
                hasAward: false,
            },
            projectDescription: null
        }
    ];
    
    
    public retrieveShortProjectDescriptions(): Array<ShortProjectDescription>
    {
        return DefaultProjectService.projects.map(t => t.shortProjectDescription);
    }
    
    public retrieveProject(id: string): Project | null
    {
        return DefaultProjectService.projects.find(t => t.id === id) ?? null;
    }
    
    public retrieveProjects(): Array<Project>
    {
        return DefaultProjectService.projects;
    }
}