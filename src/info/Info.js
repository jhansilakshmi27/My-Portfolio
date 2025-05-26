import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Jhansi",
    lastName: "Matcha",
    initials: "jm",
    position: "an aspiring Software Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🎓',
            text: 'Student at IIT Bhilai'
        },
        {
            emoji: '🌐',
            text: 'love building for the web'
        },
        {
            emoji: "💻",
            text: "open-source enthusiast"
        },
        {
            emoji: "📧",
            text: "jhansimatcha737@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/jhansilakshmi27",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jhansi-matcha-9b0258278",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://instagram.com/j.h.a.n.s.i1271",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }
        // Add more if needed
    ],
    bio: "Hello! I'm Jhansi, currently a student at IIT Bhilai. I'm an aspiring software developer with a strong passion for open-source and web projects. I enjoy learning new technologies, love collaborating, and always seek out opportunities to grow and contribute to the tech community.",
    skills: {
        proficientWith: [
            'java', 'c', 'javascript', 'react', 'nodejs', 'typescript', 'html5', 'css3', 'git', 'github', 'figma', 'adobe photoshop', 'firebase', 'mongodb'
        ],
        exposedTo: [
            'python', 'adobe illustrator', 'bootstrap'
        ]
    },
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'design',
            emoji: '🎨'
        },
        {
            label: 'music',
            emoji: '🎶'
        }
    ],
    portfolio: [
        {
            title: "Project 1",
            live: "#",
            source: "https://github.com/jhansilakshmi27",
            image: mock1
        },
        {
            title: "Project 2",
            live: "#",
            source: "https://github.com/jhansilakshmi27",
            image: mock2
        },
        {
            title: "Project 3",
            live: "#",
            source: "https://github.com/jhansilakshmi27",
            image: mock3
        },
        {
            title: "Project 4",
            live: "#",
            source: "https://github.com/jhansilakshmi27",
            image: mock4
        },
        {
            title: "Project 5",
            live: "#",
            source: "https://github.com/jhansilakshmi27",
            image: mock5
        }
    ]
}
