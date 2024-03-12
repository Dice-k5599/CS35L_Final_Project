/*
    ClassType field specifies the type of class
        - Used to categorize classes so that we could display classes in divided sections
    
    LowerDiv: Lower division Class (listed as preparation for Major courses)
    UpperDiv: Upper division CS class (Major courses)
    SciTech: Science and Technology Class
    TechBreadth: Technical Breadth area class
    Elective: CS Upper Div elective class ( CS 100 - 187)
*/

export const ClassData = [
    {
        className: 'Intro to Comp Sci I',
        classCode: 'CS 31',
        classType: 'LowerDiv',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Lecture, four hours; discussion, two hours; outside study, six hours. Introduction to computer science via theory, applications, and programming. Basic data types, operators and control structures. Input/output. Procedural and data abstraction. Introduction to object-oriented software development. Functions, recursion. Arrays, strings, pointers. Abstract data types, object-oriented programming. Examples and exercises from computer science theory and applications. Letter grading.'
    },
    {
        className: 'Intro to Comp Sci II',
        classCode: 'CS 32',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['CS 31'],
        completed: false,
        grade: 0,
        units: 4,
        description:'Lecture, four hours; discussion, two hours; outside study, six hours. Enforced requisite: course 31. Object-oriented software development. Abstract data type definition and use. Overloading, inheritance, polymorphism. Object-oriented view of data structures: stacks, queues, lists. Algorithm analysis. Trees, graphs, and associated algorithms. Searching and sorting. Case studies and exercises from computer science applications. Letter grading.' 
    },
    {
        className: 'Intro to Comp Organization',
        classCode: 'CS 33',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['CS 32'],
        completed: false,
        grade: 0,
        units: 5,
        description: 'Lecture, four hours; discussion, two hours; outside study, nine hours. Enforced requisite: course 32. Introductory course on computer architecture, assembly language, and operating systems fundamentals. Number systems, machine language, and assembly language. Procedure calls, stacks, interrupts, and traps. Assemblers, linkers, and loaders. Operating systems concepts: processes and process management, input/output (I/O) programming, memory management, file systems. Letter grading.'
    },
    {
        className: 'Software Construction',
        classCode: 'CS 35L',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['CS 31'],
        completed: false,
        grade: 0,
        units: 4,
        description:'Lecture, four hours; discussion, two hours; outside study, six hours. Requisite: course 31. Fundamentals of tools and environments for software construction projects, particularly open-source platforms used in upper-division computer science courses. Software practice through collaborative student project. Letter grading.'
    },
    {
        className: 'Logic Design of Digital Systems',
        classCode: 'CS M51A or ECE M16',
        classType: 'LowerDiv',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Lecture, four hours; discussion, two hours; outside study, six hours. Introduction to digital systems. Specification and implementation of combinational and sequential systems. Standard logic modules and programmable logic arrays. Specification and implementation of algorithmic systems: data and control sections. Number systems and arithmetic algorithms. Error control codes for digital information. Letter grading.'
    },
    {
        className: 'Differential and Inegral Calculus',
        classCode: 'Math 31A',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['CS 31'],
        completed: false,
        grade: 0,
        units: 4,
        description:'Lecture, three hours; discussion, one hour. Preparation: at least three and one half years of high school mathematics (including some coordinate geometry and trigonometry). Requisite: successful completion of Mathematics Diagnostic Test or course 1 with grade of C- or better. Differential calculus and applications; introduction to integration. P/NP or letter grading.'
    },
    {
        className: 'Integration and Infinite Series',
        classCode: 'Math 31B',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['Math 31A'],
        completed: false,
        grade: 0,
        units: 3,
        description: '',
    },
    {
        className: 'Integration and Infinite Series',
        classCode: 'Math 31B',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['Math 31A'],
        completed: false,
        grade: 0,
        units: 4,
        description:'Lecture, three hours; discussion, one hour. Requisite: course 31A with grade of C- or better. Not open for credit to students with credit for course 3B. Transcendental functions; methods and applications of integration; sequences and series. P/NP or letter grading.' 
    },
    {
        className: 'Calculus of Several Variables',
        classCode: 'Math 32A',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['Math 31A'],
        completed: false,
        grade: 0,
        units: 3,
        description: 'Lecture, three hours; discussion, one hour. Enforced requisite: course 31A with grade of C- or better. Introduction to differential calculus of several variables, vector field theory. P/NP or letter grading.'
    },
    {
        className: 'Calculus of Several Variables',
        classCode: 'Math 32B',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['Math 31B', 'Math 32A'],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Lecture, three hours; discussion, one hour. Enforced requisites: courses 31B and 32A, with grades of C- or better. Introduction to integral calculus of several variables, line and surface integrals. P/NP or letter grading.'
    },
    {
        className: 'Linear Algebra and Applications',
        classCode: 'Math 33A',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['Math 31B'],
        completed: false,
        grade: 0,
        units: 4,
        description:'Lecture, three hours; discussion, one hour. Enforced requisite: course 3B or 31B or 32A with grade of C- or better. Introduction to linear algebra: systems of linear equations, matrix algebra, linear independence, subspaces, bases and dimension, orthogonality, least-squares methods, determinants, eigenvalues and eigenvectors, matrix diagonalization, and symmetric matrices. P/NP or letter grading.'
    },
    {
        className: 'Differential Equations',
        classCode: 'Math 33B',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['Math 31B'],
        completed: false,
        grade: 0,
        units: 4,
        description:'Lecture, three hours; discussion, one hour. Enforced requisite: course 31B with grade of C- or better. Highly recommended: course 33A. First-order, linear differential equations; second-order, linear differential equations with constant coefficients; power series solutions; linear systems. P/NP or letter grading.'
    },
    {
        className: 'Introduction to Discrete Structures',
        classCode: 'Math 61',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['Math 31A', 'Math 31B'],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Lecture, three hours; discussion, one hour. Requisites: courses 31A, 31B. Not open for credit to students with credit for course 180 or 184. Discrete structures commonly used in computer science and mathematics, including sets and relations, permutations and combinations, graphs and trees, induction. P/NP or letter grading'
    },
    {
        className: 'Physics for Scientists and Engineers: Mechanics',
        classCode: 'Physics 1A',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['Math 32A'],
        completed: false,
        grade: 0,
        units: 5,
        description: 'Lecture/demonstration, four hours; discussion, one hour. Enforced requisites: Mathematics 31A, 31B. Enforced corequisite: Mathematics 32A. Motion, Newton laws, work, energy, linear and angular momentum, rotation, equilibrium, gravitation. P/NP or letter grading.'
    },
    {
        className: 'Physics for Scientists and Engineers: Oscillations, Waves, Electric and Magnetic Fields',
        classCode: 'Physics 1B',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['Physics 1A', 'Math 31B', 'Math 32A'],
        completed: false,
        grade: 0,
        units: 5,
        description: 'Lecture/demonstration, four hours; discussion, one hour. Enforced requisites: course 1A, Mathematics 31B, 32A. Enforced corequisite: Mathematics 32B. Fluid mechanics, oscillation, mechanical waves, and sound. Electric charge, field and potential, capacitors, and dielectrics. Currents and resistance, direct-current circuits. P/NP or letter grading.'
    },
    {
        className: 'Physics for Scientists and Engineers: Electrodynamics, Optics, and Special Relativity',
        classCode: 'Physics 1C',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['Physics 1A', 'Physics 1B', 'Math 32A', 'Math 32B'],
        completed: false,
        grade: 0,
        units: 5,
        description: 'Lecture/demonstration, four hours; discussion, one hour. Enforced requisites: course 1A, 1B, Mathematics 32A, 32B. Enforced corequisite: Mathematics 33A. Magnetic fields, Ampere\'s law, Faraday\'s law, inductance, and alternating current circuits. Maxwell\'s equations, electromagnetic waves, light, geometrical optics, interference and diffraction. Special relativity. P/NP or letter grading.'
    },
    {
        className: 'Physics Laboratory for Scientists and Engineers: Mechanics OR Electricity and Magnetism',
        classCode: 'Physics 4AL or 4BL',
        classType: 'LowerDiv',
        availability: true,
        prereq: ['Physics 1A'],
        completed: false,
        grade: 0,
        units: 2,
        description: 'Laboratory, four hours. Enforced requisite: course 1A or 1AH. Enforced corequisite: course 1B or 1BH. Computerized measurements of uniform and accelerated motion, including oscillations. Analysis of data and comparison of results to predictions, including least-squares fitting. Conception, execution, and presentation of creative projects involving motion. Letter grading.\nAlternative: Laboratory, four hours. Enforced requisites: courses 1A or 1AH, 1B or 1BH. Enforced corequisite: course 1C or 1CH. Sound waves and electric circuits, taken by digital oscilloscopes and analyzed by Fourier transformation. Geometrical and physical optics. Conception, execution, and presentation of creative projects involving sound waves or electric circuits. Letter grading.'
    },
    {
        className: 'Operating Systems Principles',
        classCode: 'CS 111',
        classType: 'UpperDiv',
        availability: true,
        prereq: ['CS 32','CS 33','CS 35L'],
        completed: false,
        grade: 0,
        units: 5,
        description: 'Lecture, four hours; laboratory, two hours; outside study, nine hours. Enforced requisites: courses 32, 33, 35L. Introduction to operating systems design and evaluation. Computer software systems performance, robustness, and functionality. Kernel structure, bootstrapping, input/output (I/O) devices and interrupts. Processes and threads; address spaces, memory management, and virtual memory. Scheduling, synchronization. File systems: layout, performance, robustness. Distributed systems: networking, remote procedure call (RPC), asynchronous RPC, distributed file systems, transactions. Protection and security. Exercises involving applications using, and internals of, real-world operating systems. Letter grading.'
    },
    {
        className: 'Computer Network Fundamentals',
        classCode: 'CS 118',
        classType: 'UpperDiv',
        availability: true,
        prereq: ['CS 111'],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Lecture, four hours; discussion, two hours; outside study, six hours. Enforced requisite: course 111. Designed for juniors/seniors. Introduction to design and performance evaluation of computer networks, including such topics as what protocols are, layered network architecture, Internet protocol architecture, network applications, transport protocols, routing algorithms and protocols, internetworking, congestion control, and link layer protocols including Ethernet and wireless channels. Letter grading'
    },
    {
        className: 'Programming Languages',
        classCode: 'CS 131',
        classType: 'UpperDiv',
        availability: true,
        prereq: ['CS 33', 'CS 35L'],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Lecture, four hours; laboratory, two hours; outside study, six hours. Enforced requisites: courses 33, 35L. Basic concepts in design and use of programming languages, including abstraction, modularity, control mechanisms, types, declarations, syntax, and semantics. Study of several different language paradigms, including functional, object-oriented, and logic programming. Letter grading.'
    },
    {
        className: 'Computer Systems Architecture',
        classCode: 'CS M151B or ECE M116C',
        classType: 'UpperDiv',
        availability: true,
        prereq: ['CS 33', 'CS M51A or ECE M16'],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Lecture, four hours; discussion, two hours; outside study, six hours. Enforced requisites: courses 33, and M51A or Electrical and Computer Engineering M16. Recommended: courses 111, and M152A or Electrical and Computer Engineering M116L. Computer system organization and design, implementation of CPU datapath and control, instruction set design, memory hierarchy (caches, main memory, virtual memory) organization and management, input/output subsystems (bus structures, interrupts, DMA), performance evaluation, pipelined processors. Letter grading.'
    },
    {
        className: 'Introductory Digital Design Laboratory',
        classCode: 'CS M152A or ECE M116L',
        classType: 'UpperDiv',
        availability: true,
        prereq: ['CS M51A or ECE M16'],
        completed: false,
        grade: 0,
        units: 2,
        description:'Laboratory, four hours; outside study, two hours. Enforced requisite: course M51A or Electrical and Computer Engineering M16. Hands-on design, implementation, and debugging of digital logic circuits, use of computer-aided design tools for schematic capture and simulation, implementation of complex circuits using programmed array logic, design projects. Letter grading.'
    },
    {
        className: 'Introduction to Algorithms and Complexity',
        classCode: 'CS 180',
        classType: 'UpperDiv',
        availability: true,
        prereq: ['CS 32','Math 61'],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Lecture, four hours; discussion, two hours; outside study, six hours. Enforced requisites: course 32, Mathematics 61. Designed for junior/senior Computer Science majors. Introduction to design and analysis of algorithms. Design techniques: divide-and-conquer, greedy method, dynamic programming; selection of prototypical algorithms; choice of data structures and representations; complexity measures: time, space, upper, lower bounds, asymptotic complexity; NP-completeness. Letter grading.'
    },
    {
        className: 'Theory of Computing',
        classCode: 'CS 181',
        classType: 'UpperDiv',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description:'Lecture, four hours; discussion, two hours; outside study, six hours. Enforced requisite: course 180. Designed for junior/senior Computer Science majors. Finite state machines, context-free languages, and pushdown automata. Closure properties and pumping lemmas. Turing machines, undecidability. Introduction to computability. Letter grading.'
    },
    {
        className: 'Software Engineering',
        classCode: 'CS 130',
        classType: 'UpperDiv',
        availability: true,
        prereq: ['CS 111', 'CS 131'],
        completed: false,
        grade: 0,
        units: 4,
        description:'Lecture, four hours; laboratory, two hours; outside study, six hours. Requisites: courses 111, 131. Recommended requisite: Engineering 183EW or 185EW. Structured programming, program specification, program proving, modularity, abstract data types, composite design, software tools, software control systems, program testing, team programming. Letter grading.'
    },
    {
        className: 'Digital Design Project Laboratory',
        classCode: 'CS 152B',
        classType: 'UpperDiv',
        availability: true,
        prereq: ['CS M151B or ECE M116C'],
        completed: false,
        grade: 0,
        units: 4,
        description:'Laboratory, four hours; discussion, two hours; outside study, six hours. Enforced requisite: course M151B or Electrical Engineering M116C. Recommended: Engineering 183EW or 185EW. Limited to seniors. Design and implementation of complex digital subsystems using field-programmable gate arrays (e.g., processors, special-purpose processors, device controllers, and input/output interfaces). Students work in teams to develop and implement designs and to document and give oral presentations of their work. Letter grading.'
    },
    {
        className: 'Statisitics',
        classCode: 'Stats 100A or Math 170A or Math 170E or ECE 131A or CEE 110)',
        classType: 'UpperDiv',
        availability: true,
        prereq: ['Math 32B', 'Math 33A'],
        completed: false,
        grade: 0,
        units: 4,
        description: 'One of following required statistics classes'
    },
    {
        className: '',
        classCode: 'CS Upper Div Elective #1 (CS 100-188)',
        classType: 'Elective',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'One of the following electives'
    },
    {
        className: '',
        classCode: 'CS Upper Div Elective #2 (CS 100-188)',
        classType: 'Elective',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'One of the following electives'
    },
    {
        className: '',
        classCode: 'CS Upper Div Elective #3 (CS 100-187)',
        classType: 'Elective',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'One of the following electives'
    },
    {
        className: '',
        classCode: 'CS Upper Div Elective #4 (CS 100-187)',
        classType: 'Elective',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'One of the following electives'
    },
    {
        className: '',
        classCode: 'CS Upper Div Elective #5 (CS 100-187)',
        classType: 'Elective',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'One of the following electives'
    },
    {
        className: '',
        classCode: 'TBR #1',
        classType: 'TechBreadth',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Choose 3 Tech Breadth Classes'
    },
    {
        className: '',
        classCode: 'TBR #2',
        classType: 'TechBreadth',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Choose 3 Tech Breadth Classes'
    },
    {
        className: '',
        classCode: 'TBR #3',
        classType: 'TechBreadth',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Choose 3 Tech Breadth Classes'
    },
    {
        className: '',
        classCode: 'Sci-Tech #1',
        classType: 'SciTech',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Need to choose 3 Sci-Tech Classes'
    },
    {
        className: '',
        classCode: 'Sci-Tech #2',
        classType: 'SciTech',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Need to choose 3 Sci-Tech Classes'
    },
    {
        className: '',
        classCode: 'Sci-Tech #3',
        classType: 'SciTech',
        availability: true,
        prereq: [],
        completed: false,
        grade: 0,
        units: 4,
        description: 'Need to choose 3 Sci-Tech Classes'
    },
    ];