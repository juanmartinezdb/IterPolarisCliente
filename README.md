# Project: ITER POLARIS (CRUD)

## Description
The project consists of building a CRUD structure with a 1:N relationship between constellations and stars, where each constellation represents a project and each star represents an item related to that project. Items could include tasks, habits, or diary entries associated with the process. The specific functionalities are still being defined, but the goal is to create an intuitive management system that helps track progress in various personal or professional projects, gamifying the process and making it enjoyable and fun.

## Project Structure (BASE)

```
ITERPOLARISCLIENTE/
├── assets/                # JSON files with data of constellations and stars
│   ├── imagesCostellation/
│   ├── constellations.json
│   └── stars.json
│
├── css/                   # General style files
│   └── main.css
│
├── src/                   # Application source code
│   ├── constellation/     # Constellations module
│   │   ├── constellation.css
│   │   ├── createConstellation.html
│   │   ├── editConstellation.html
│   │   └── listConstellations.html
│   │   ├── constellation.js
│   │   └── constellationController.js
│   ├── index.html
│   ├── main.js
│   │
│   ├── star/              # Stars module
│   │   ├── createStar.html
│   │   ├── editStar.html
│   │   ├── listStars.html
│   │   └── star.css
│   │   ├── star.js
│   │   └── starController.js
│
├── package.json           # Project configuration and dependencies
└── README.md              # Project documentation
```

