import weaaare from "../assets/img/eventos/weaaare.jfif"
import nebrija from "../assets/img/eventos/nebrija.jfif"
import a11y from "../assets/img/a11y.JPG"
import scb from "../assets/img/eventos/scb.JPG"
import edd from "../assets/img/eventos/EDD.JPG"
import step4ward from "../assets/img/eventos/step4ward.jpg"
import technolatinas from "../assets/img/eventos/tech.jfif"
import adopta from "../assets/img/eventos/adopta.JPG"
import salmorejo from "../assets/img/eventos/salmorejo.JPG"
import madvue from "../assets/img/eventos/madvuebueno.jfif"
import wid from "../assets/img/eventos/wtmzombie.jfif"
import commit from "../assets/img/eventos/commit.jpeg"
import commitopen from "../assets/img/eventos/commitopen.jpg"
import t3ch25 from "../assets/img/eventos/t3ch2025.png"
import stepin from "../assets/img/eventos/stepindividual.jfif"
import t3ch24 from "../assets/img/eventos/t3ch2024.png"
import talent from "../assets/img/eventos/talent.png"
import jsconf from "../assets/img/eventos/jsconf.JPG"

export const speechesArray = [
	{ 
		isWorkshop: false, 
		hasVideo: false, 
		year: 2026, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.jsconf",
		imageSrc: jsconf,
		slidesLink: "https://docs.google.com/presentation/d/11qDqTXL3NC9v42wLdShOftJEluql7MMcxrqW1KnGEu4/edit?usp=sharing"
	},
	{ 
		isWorkshop: true, 
		hasVideo: false, 
		year: 2026, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.talent",
		imageSrc: talent,
		slidesLink: "https://docs.google.com/presentation/d/1T6-SgL0Y-1Ja9jewQV3pWmMTqFIpQnjBzGyY8zpLiWo/edit?usp=sharing"
	},
	{ 
		isWorkshop: false, 
		hasVideo: false, 
		year: 2026, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.weaaare",
		imageSrc: weaaare
	},
	{ 
		isWorkshop: false, 
		hasVideo: false, 
		year: 2026, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.nebrija",
		imageSrc: nebrija
	},
	{ 
		isWorkshop: false,
		hasVideo: true, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.a11yconf", 
		speechLink: "https://www.youtube.com/watch?v=lwoosgqnmhA",
		slidesLink: "https://docs.google.com/presentation/d/1RaX68vGrXcOrcHPrtzt7PNNjXxg0Pk4Lmr5563_3v7E/edit?usp=sharing",
		imageSrc: a11y
	},
	{ 
		isWorkshop: false,
		hasVideo: true, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.scb", 
		speechLink: "https://www.youtube.com/watch?v=T8afeagwZCQ", 
		slidesLink: "https://docs.google.com/presentation/d/1N0qJAhsaRuUpLjbEiBIPqyxcrDlqGSUF3X8mRWUekbw/edit?usp=sharing",
		imageSrc: scb
	},
	{ 
		isWorkshop: false,
		hasVideo: false, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.ping", 
		speechLink: "https://www.meetup.com/es/grupo-de-ping-a-programadoras/events/310932062/?eventOrigin=your_events", 
		slidesLink: "https://docs.google.com/presentation/d/1wnpVmf9rsDGDYGmhk9I0S_X8a1ajzV22ve4gDn9N1iM/edit?usp=sharing"
	},
	{ 
		isWorkshop: true, 
		hasVideo: false, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.step4wardWorkshop", 
		speechLink: "https://www.linkedin.com/posts/step4ward-es_step4wardtalks-step4ward-womenintech-activity-7394313448270143488-5naa?utm_source=share&utm_medium=member_desktop&rcm=ACoAABhlFzABWpOPHHzqYxR7TR7yUr0X8A8rs5E",
		imageSrc: step4ward
	},
	{ 
		isWorkshop: false, 
		hasVideo: true, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.edd", 
		speechLink: "https://www.youtube.com/watch?v=NWTNMZHcacs", 
		slidesLink: "https://docs.google.com/presentation/d/1DI8fIweSsIeaLhom0x9Mik4YrZ7CktxRvrkHidimqnM/edit?usp=sharing",
		imageSrc: edd
	},

	{ 
		isWorkshop: true, 
		hasVideo: false, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.technolatinas", 
		speechLink: "https://lu.ma/dsufoobv",
		imageSrc: technolatinas
	},

	{ 
		isWorkshop: true, 
		hasVideo: false, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.adoptaUnJunior", 
		speechLink: "https://www.therevolutiontech.es/#agenda", 
		slidesLink: "https://docs.google.com/presentation/d/1oQGhAbdc14DeFpxkL3Onl4Ugh8tBvINLD-A9Fmq01HE/edit?usp=sharing",
	    imageSrc: adopta
	},
		{ 
		isWorkshop: false,
		hasVideo: true, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.madvue", 
		speechLink: "https://madvue.es/2025-edition/talks/mia-salazar", 
		slidesLink: "https://docs.google.com/presentation/d/1oLoVRJ2NzGZQ42uMi6Q4ZPaR5Vg02H3BVT_c0hsZkUA/edit?usp=sharing",
	    imageSrc: madvue
	},
	{ 
		isWorkshop: false,
		hasVideo: true, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.wtmInternational", 
		speechLink: "https://www.youtube.com/watch?v=S1XPUzsSG4c&list=PLkb8P70owGbjuLjmjdISitddb8hE5PWDr&index=3&ab_channel=SirviendoC%C3%B3digo", 
		slidesLink: "https://docs.google.com/presentation/d/11XEArrCzNdVRyOWYT1qm5yxDi-DcEiZ-NrlG30Rp450/edit?usp=sharing",
	    imageSrc: wid
	},
	{ 
		isWorkshop: false, 
		hasVideo: true, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.salmorejo", 
		speechLink: "https://www.youtube.com/live/O6bdjPrcbEM?si=FilYx-iQomOiBE80&t=15257", 
		slidesLink: "https://docs.google.com/presentation/d/1MxIr3kYGMIIlIUhoE_CUWCttCnh7jVww2RINbnyrCHc/edit?usp=sharing",
	    imageSrc: salmorejo
	},


	{ 
		isWorkshop: false,
		hasVideo: true, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.commit", 
		speechLink: "https://www.youtube.com/watch?v=QzjWU4c9KIwC", 
		slidesLink: "https://docs.google.com/presentation/d/1ffUcwdWc3Bqv2aHtUewvb9ghDRAWpiNp6Ispjf1WpT8/edit?usp=sharing",
	    imageSrc: commit
	},
	{ 
		isWorkshop: true,
		hasVideo: false, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.commitSpace", 
		speechLink: "https://koliseo.com/commit/commit-conf-2025/agenda/1?selected=JA964NWuiNVziZzqTuA3", 
		slidesLink: "https://view.genially.com/67db4896c049f1c7029aff4d/presentation-indice",
	    imageSrc: commitopen
	},
	{ 
		isWorkshop: false, 
		hasVideo: true, 
		year: 2025, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.t3ch25", 
		speechLink: "https://www.youtube.com/watch?v=dIahxoZCmOw", 
		slidesLink: "https://docs.google.com/presentation/d/1-X9W3jiTZnQYf0CK2Yp-JH_K1F1nXhJNoLRikL6p0ZU/edit?usp=sharing",
	    imageSrc: t3ch25
    },
	{ 
		isWorkshop: true,
		hasVideo: false, 
		year: 2024, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.gdg", 
		speechLink: "https://gdg.community.dev/events/details/google-gdg-madrid-presents-devfest-madrid-2024/", 
		slidesLink: "https://view.genially.com/670c3dd53bfb21282c583694"
	},
		{ 
		isWorkshop: false,
		hasVideo: true, 
		year: 2024, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.presentation", 
		speechLink: "https://www.youtube.com/watch?v=9k7PtZ5emNs&ab_channel=CommitConf"
	},
		{ 
		isWorkshop: false,
		hasVideo: false, 
		year: 2024, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.wtm", 
		speechLink: "https://www.meetup.com/es-ES/gdgmadrid/events/303048213/", 
		slidesLink: "https://docs.google.com/presentation/d/1RifWPkI4lfYRFjE0sQH03YH03A53oO4kHsIDr2gQ18U/edit?usp=sharing"
	},
		{ isWorkshop: false,hasVideo: true, 
		year: 2024, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.steptalks", 
	    speechLink: "https://www.youtube.com/watch?v=2hMMwl4JEJo&ab_channel=MentorasStep4ward", 
	    slidesLink: "https://docs.google.com/presentation/d/1Ng7D-E2e4VmMNIIhBdR3nd_jBzv6nuv6_4twa2VxyBc/edit?usp=sharing",
	    imageSrc: stepin
	},
	{ 
		isWorkshop: false,
		hasVideo: true, 
		year: 2024, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.garaje", 
	    speechLink: "https://www.youtube.com/watch?v=QspxkW7kheA", 
	    slidesLink: "https://docs.google.com/presentation/d/1b8nGXgL6E3tarq6Ca22HbmGk6fZ8jo2s/edit?usp=sharing&ouid=105566763085813942698&rtpof=true&sd=true"
	},


	{ isWorkshop: false,hasVideo: false, 
		year: 2024, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.svq", 
		speechLink: "https://www.meetup.com/es-ES/fullstacksevilla/events/299888095/", 
		slidesLink: "https://docs.google.com/presentation/d/172kS1l7ScKDdzaaED4mwZU0s2jw7XNNhcGkCQGYl8YQ/edit?usp=sharing" },
	{ isWorkshop: false,hasVideo: true, 
		year: 2024, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.t3chfest2024", 
		speechLink: "https://www.youtube.com/watch?v=gKBTMnxLGvc&list=PLqgZDFdwyB8YYRsd91u4zsPsoQ1pflWO4&index=44", 
		slidesLink: "https://docs.google.com/presentation/d/1LT0TMwLTdgz073yx1jqESb4h3R_zvLgV-StW8NIicZM/edit?usp=sharing",
	    imageSrc: t3ch24
	},

	{ isWorkshop: false,hasVideo: true, 
		year: 2024, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.techshessionsThree", 

		speechLink: "https://www.youtube.com/watch?v=QUllvzs_KWM&ab_channel=CommitConf", 
		slidesLink: "https://docs.google.com/presentation/d/1r1xpEqe94CDNH_LjYaVqqGRuOOuIM_D5BtgHfzuvQSY/edit?usp=sharing" },
	{ isWorkshop: false,hasVideo: true, 
		year: 2023, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.techshessionsTwo", 

		speechLink: "https://www.youtube.com/watch?v=d7NcHxRH8zU&feature=youtu.be", 
		slidesLink: "https://docs.google.com/presentation/d/1dbRuLOIcLpeq4IlAAOHdRCHfnAAV65atWWk_XA8K68s/edit?usp=sharing"  },
	{ isWorkshop: false,hasVideo: true, 
		year: 2023, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.techshessionsOne", 

		speechLink: "https://www.youtube.com/watch?v=CpuxfoV71E0&feature=youtu.be&ab_channel=CommitConf", 
		slidesLink: "https://docs.google.com/presentation/d/1dbRuLOIcLpeq4IlAAOHdRCHfnAAV65atWWk_XA8K68s/edit?usp=sharing" },
		{ isWorkshop: false,hasVideo: true, 
		year: 2023, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.mentorTwo", 

		speechLink: "https://twitter.com/patrimalvido/status/1700151281266901443"},
		{ isWorkshop: false,hasVideo: true, 
		year: 2021, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "venus", 
		text: "awards.talksOne", 

		speechLink: "https://eventos.uc3m.es/70884/section/33597/ciencia-y-tecnologia-en-femenino.-programa-e-inauguracion-exposicion.html" },
]

export const interviewsArray = [
	{ year: 2024, 
		lang: "es", 
		aria: "awards.interviewText", 
		icon: "venus", 
		text: "awards.interviewTwo", 
		speechLink: "https://www.youtube.com/watch?v=I2jBvdtMNmE&ab_channel=ITgals" },
	{ year: 2024, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.talksThree", 
		speechLink: "https://www.youtube.com/watch?v=oG3iu4LgzeY&t=4113s" },
	{ year: 2023, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "gamepad", 
		text: "awards.otherOne", 
		speechLink: "https://www.telemadrid.es/programas/nos-vemos-en-el-bar/Nos-vemos-en-el-bar-Bares-divertidos-2-2607959198--20231021103000.html"},
	{ year: 2022, 
		lang: "es", 
		aria: "awards.talks", 
		icon: "microphone", 
		text: "awards.talksTwo", 
		speechLink: "https://www.youtube.com/watch?v=3S9at2lYPjA" },
	{ year: 2021, 
		lang: "es", 
		aria: "awards.interviewText", 
		icon: "venus", 
		text: "awards.interview", 
		speechLink: "https://www.youtube.com/watch?v=ljT-Zwobxos&feature=emb_title&ab_channel=ITgals" },
]

export const gameArray = [
	{ year: 2021, 
		lang: "es", 
		aria: "awards.videogames", 
		icon: "gamepad", 
		text: "awards.videogame", 
		speechLink: "https://xcjgames.itch.io/treeventure"},
	{ year: 2021, 
		lang: "es", 
		aria: "awards.videogames", 
		icon: "gamepad", 
		text: "awards.videogameTwo", 
		speechLink: "https://xcjgames.itch.io/damng-la-balada-del-capitan"},
]

export const otherArray = [
	{ year: 2024, 
		lang: "es", 
		aria: "awards.mentor", 
		icon: "venus", 
		text: "awards.mentorTechSHE", 
		speechLink: "https://step4ward.notion.site/"},
	{ year: 2023, 
		lang: "es", 
		aria: "awards.mentor", 
		icon: "venus", 
		text: "awards.mentor", 
		speechLink: "https://step4ward.notion.site/"},
	{ year: 2023, 
		lang: "es", 
		aria: "awards.handshake", 
		icon: "handshake", 
		text: "awards.les", 
		speechLink: "https://www.ludoergosum.org/"},
	{ year: 2023, 
		lang: "es", 
		aria: "awards.handshake", 
		icon: "handshake", 
		text: "awards.freak", 
		speechLink: "https://freakwarsmadrid.com/"},
	{ year: 2022, 
		lang: "es", 
		aria: "awards.paper", 
		icon: "atom", 
		text: "awards.coreaThree", 
		speechLink: "https://drive.google.com/file/d/1vTwR7VHkjjmAU4i1XJxg7NnVgAm40l0Z/view?usp=sharing" },
	{ year: 2021, 
		lang: "es", 
		aria: "awards.mentor", 
		icon: "venus", 
		text: "awards.mentorAdalab", 
		speechLink: "https://adalab.es/"},
]