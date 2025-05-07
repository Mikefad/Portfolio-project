import {Link} from 'react-scroll';

function Porthome(){
    
    return(
        <>

            <header className="sticky top-0 z-50 bg-[#f8f8f8] shadow-md px-4 lg:px-8">
            <div className="flex items-center justify-between py-3">
                {/* Logo */}
                <div className="text-[#07285b] text-3xl lg:text-5xl font-bold cursor-pointer">
                <Link to="intro" spy={true} smooth={true} offset={-150} duration={500}>
                    ℳdev
                </Link>
                </div>

                {/* Navigation */}
                <nav>
                <ul className="flex items-center space-x-5 lg:space-x-8 text-sm lg:text-lg font-medium">
                    <li className="hover:text-gray-400 transition cursor-pointer">
                    <Link to="portfolio" spy={true} smooth={true} offset={-5} duration={500}>
                        Portfolio
                    </Link>
                    </li>
                    <li className="hover:text-gray-400 border border-indigo-700 py-2 px-4 rounded-full  transition cursor-pointer">
                    <Link to="about" spy={true} smooth={true} offset={-43} duration={500}>
                        About
                    </Link>
                    </li>
                    <li className="hover:text-gray-400 transition cursor-pointer">
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        Contact
                    </Link>
                    </li>
                </ul>
                </nav>
            </div>
            </header>

        <main>
            <section id="intro" className="relative overflow-hidden">
                {/* Video Background */}
                <video
                id="vid2"
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-[450px] object-cover -z-10"
                >
                <source src="./src/assets/87786-602074234_medium.mp4" type="video/mp4" />
                </video>

                {/* Hero Content */}
                <div className="relative px-4 pt-24 lg:pt-36 lg:pl-36 max-w-7xl mx-auto md:ml-10 text-left text-black z-10">
                <h1 className="text-indigo-600 mb-2 text-lg lg:text-xl font-semibold">
                    Building the future of the web, one pixel at a time.
                </h1>

                <p className="bg-gradient-to-r from-indigo-500 to-black bg-clip-text text-transparent text-5xl lg:text-7xl font-bold mb-4">
                    I'm Michael
                </p>

                <div className="text-lg lg:text-4xl font-semibold typing-animation hidden lg:block">
                    A Fullstack Web Developer and Data Analyst
                </div>
                <div className="text-lg font-bold typing-animation lg:hidden">
                    A Fullstack Web Developer <br />
                    And Data Analyst
                </div>

                <p className="mt-5 text-sm lg:text-lg max-w-xl">
                    I transform ideas into seamless digital experiences with every line of code.
                </p>
                </div>

                <hr className="mx-auto mt-20 w-1/2 border-black" />
            </section>
        





            <section id="portfolio" class="py-16 bg-gray-50">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto">
                    <h1 class="text-indigo-600 text-4xl font-bold mb-4">My Portfolio</h1>
                    <hr class="w-16 h-[2px] bg-black mb-6"/>

                    <p class="text-lg text-gray-700 mb-10">
                        Welcome to my portfolio! Here, you’ll find a collection of my projects, showcasing the web development skills I’ve acquired over the past few months. I’m passionate about building functional, user-friendly applications and constantly improving my skills.
                    </p>

                    <h2 class="text-2xl text-indigo-700 font-semibold text-center mb-4">Skills & Technologies</h2>
                    <hr class="w-14 h-[2px] bg-black mx-auto mb-10"/>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* <!-- Backend Development --> */}
                        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 class="text-xl text-blue-800 font-semibold mb-2 text-center">Backend Development</h3>
                        <ul class="list-disc list-inside text-gray-700">
                            <li>PHP, Node.js</li>
                            <li>Authentication & Authorization</li>
                            <li>RESTful APIs, CRUD Operations</li>
                        </ul>
                        </div>

                        {/* <!-- Other Programming Languages --> */}
                        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 class="text-xl text-blue-800 font-semibold mb-2 text-center">Other Programming Languages</h3>
                        <ul class="list-disc list-inside text-gray-700">
                            <li>Python</li>
                            <li>C++</li>
                        </ul>
                        </div>

                        {/* <!-- Databases --> */}
                        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 class="text-xl text-blue-800 font-semibold mb-2 text-center">Databases</h3>
                        <ul class="list-disc list-inside text-gray-700">
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                        </div>

                        {/* <!-- Version Control --> */}
                        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 class="text-xl text-blue-800 font-semibold mb-2 text-center">Version Control</h3>
                        <ul class="list-disc list-inside text-gray-700">
                            <li>Git</li>
                            <li>GitHub</li>
                        </ul>
                        </div>

                        {/* <!-- Tools & Environments --> */}
                        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <h3 class="text-xl text-blue-800 font-semibold mb-2 text-center">Tools & Environments</h3>
                        <ul class="list-disc list-inside text-gray-700">
                            <li>VS Code, Postman</li>
                            <li>npm, Webpack</li>
                        </ul>
                        </div>

                        {/* <!-- Data Analytics --> */}
                        <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                            <h3 class="text-xl text-blue-800 font-semibold mb-2 text-center">Data Analytics</h3>
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Excel</li>
                                <li>Tableau</li>
                                <li>Power BI</li>
                                <li>Pandas (Python)</li>
                                <li>Web Scraping</li>
                            </ul>
                        </div>

                    </div>
                    </div>
                </div>


                <hr class="mx-auto bg-black mt-[100px] mb-[50px] w-1/2"></hr>
                
                <div class="w-full flex flex-col lg:flex-row gap-6 p-4 ">

                    {/* <!-- Hotel Finance Manager --> */}
                    <div class="flex-1 bg-[#181823] text-white p-6 rounded-lg shadow-lg shadow-gray-900">
                        <div>
                            <div class="text-[20px] lg:text-[40px] text-[#42ad9c] font-bold">Hotel Finance Manager App</div>
                            <hr class="bg-white mt-4 w-[100px]" />

                            <div class="text-[19px] lg:text-[30px] text-[#868ead] mt-4 mb-4">
                                Tech Stack: React, Tailwind CSS, Python, MySQL
                            </div>

                            <div class="font-bold text-[#42ad9c] text-[19px] lg:text-[25px] mt-4 mb-2">Description</div>
                            <div class="text-[#868ead] text-[13px] lg:text-[15px]">
                                A finance tracking tool built for hotel operations. Users input monthly financial data and view performance metrics like ROE and profit margin with dynamic charts and cards.
                            </div>

                            <div class="font-bold text-[#42ad9c] text-[19px] lg:text-[25px] mt-4 mb-2">Features</div>
                            <div class="text-[#868ead] text-[13px] lg:text-[15px]">
                                - Multi-page frontend with React<br/>
                                - Python API backend<br/>
                                - MySQL data storage<br/>
                                - Charts and financial KPIs<br/>
                                - User-friendly for non-technical users
                            </div>

                            <div class="font-bold text-[#42ad9c] text-[19px] lg:text-[25px] mt-6 mb-2">Demo</div>
                            <video controls class="mt-2 w-full rounded-md">
                                <source src="./src/assets/Vite + React - Google Chrome 2025-05-06 17-20-31.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div class="flex-1 bg-[#212729] text-white p-6 rounded-lg shadow-lg shadow-gray-900">

                        

                        <div>
                            <div class="text-[20px] lg:text-[40px] font-bold">Seattle Airbnb Data Analytics Dashboard</div>
                            <hr class="bg-white mt-4 w-[100px]" />

                            <div class="text-[19px] lg:text-[30px] text-[#8d8d91] mt-4 mb-4">
                                Tool Used: Tableau
                            </div>

                            <div class="font-bold text-[19px] lg:text-[25px] mt-4 mb-2">Overview</div>
                            <div class="text-[13px] lg:text-[15px]">
                                This interactive Tableau dashboard analyzes Airbnb listings in Seattle, focusing on pricing trends, neighborhood popularity, availability, and host activity. The project highlights patterns and insights that can help travelers, hosts, and market analysts better understand the short-term rental landscape.
                            </div>

                            <div class="font-bold text-[19px] lg:text-[25px] mt-4 mb-2">Key Features</div>
                            <div class="text-[13px] lg:text-[15px]">
                                - Visual breakdown of listing prices by neighborhood and room type<br/>
                                - Heatmaps and bar charts to show listing density and popularity<br/>
                                - Filtering by price, availability, and rating<br/>
                                - Clean, interactive layout optimized for ease of exploration
                            </div>

                            <div class="font-bold text-[19px] lg:text-[25px] mt-4 mb-2">Screenshots</div>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <img src="./src/assets/Screenshot (64).png" alt="Dashboard Overview" class="rounded-lg shadow-md" />
                                <img src="./src/assets/Screenshot (69).png" alt="Neighborhood Analysis" class="rounded-lg shadow-md" />
                            </div>

                            <div class="font-bold text-[19px] lg:text-[25px] mt-6 mb-2">Explore the Dashboard</div>
                            <a href="https://public.tableau.com/app/profile/michael.fadairo/viz/firstdataanalysis/Dashboard1" target="_blank" class="text-[#60a5fa] underline text-[13px] lg:text-[15px]">
                                View the full interactive Tableau dashboard here
                            </a>
                        </div>
                    </div>


                    

                </div>

                

            </section>
            <hr class="mx-auto bg-black lg:mt-[100px] mt-[70px] mb-[70px] w-1/2"></hr>



            <section id="about" class="pt-12 lg:pt-20 mt-12 lg:mt-16 px-4 lg:px-6 lg:ml-[150px] w-full lg:w-[75%] text-left">
                <div class="flex flex-col gap-6">

                    {/* <!-- lg layout: image and Me stacked --> */}
                    <div class="hidden lg:flex items-start gap-6">
                    <img src="./src/assets/WhatsApp Image 2025-03-08 at 20.11.23.jpeg" alt="Portrait of Michael"
                        class="w-full max-w-sm object-cover rounded-md transform -translate-y-24" />
                    <div class="flex flex-col">
                        <h2 class="text-indigo-600 text-[70px] font-bold">Me</h2>
                        <hr class="bg-white h-[2px] w-[100px] my-4"/>
                        <p class="text-lg leading-relaxed text-black">
                        Hi, I’m <strong>MICHAEL</strong>, a passionate and dedicated web developer. Over the past few months, 
                        I’ve immersed myself in the world of web development, learning both front-end and back-end technologies. 
                        I love creating web applications that are both functional and user-friendly. As I continue to grow my 
                        skills, I’m excited to contribute to real-world projects and collaborate with others in the tech community. 
                        Feel free to reach out if you’re interested in working together!
                        </p>
                    </div>
                    </div>

                    {/* <!-- md layout: image and Me side by side --> */}
                    <div class="hidden md:flex lg:hidden flex-row items-center gap-4 max-w-5xl mx-auto">
                    <img src="./src/WhatsApp Image 2025-03-08 at 20.11.23.jpeg" alt="Portrait of Michael"
                        class="w-full max-w-xs object-cover rounded-md transform -translate-y-8" />
                    <h2 class="text-indigo-600 text-5xl font-bold">Me</h2>
                    </div>
                    <div class="hidden md:flex lg:hidden flex-col">
                    <hr class="bg-white h-[2px] w-[100px] transform translate-x-80 my-4"/>
                    <p class="text-base lg:text-lg leading-relaxed text-black">
                    Hi, I’m <strong>MICHAEL</strong>, a passionate and dedicated web developer. Over the past few months, 
                        I’ve immersed myself in the world of web development, learning both front-end and back-end technologies. 
                        I love creating web applications that are both functional and user-friendly. As I continue to grow my 
                        skills, I’m excited to contribute to real-world projects and collaborate with others in the tech community. 
                        Feel free to reach out if you’re interested in working together!
                    </p>
                    </div>

                    {/* <!-- sm layout: stacked --> */}
                    <div class="flex flex-col md:hidden">
                    <img src="./src/WhatsApp Image 2025-03-08 at 20.11.23.jpeg" alt="Portrait of Michael"
                        class="w-full max-w-xs object-cover rounded-md transform -translate-y-8" />
                    <h2 class="text-indigo-600 text-4xl font-bold mt-4">Me</h2>
                    <hr class="bg-white h-[2px] w-[100px] my-4"/>
                    <p class="text-base leading-relaxed text-black">
                    Hi, I’m <strong>MICHAEL</strong>, a passionate and dedicated web developer. Over the past few months, 
                        I’ve immersed myself in the world of web development, learning both front-end and back-end technologies. 
                        I love creating web applications that are both functional and user-friendly. As I continue to grow my 
                        skills, I’m excited to contribute to real-world projects and collaborate with others in the tech community. 
                        Feel free to reach out if you’re interested in working together!
                    </p>
                    </div>

                </div>
            </section>
 




            <section id="contact" class="text-center pt-8 mt-6 w-full px-3 lg:pt-[75px] lg:ml-[150px] lg:mt-[50px] lg:w-[75%] lg:px-6">
            <div class="mb-15">
                <div class="font-bold text-indigo-600 text-4xl lg:text-[50px]">Get in Touch</div>
                <hr class="bg-white mt-4 mx-auto w-[100px]" />
                <p class="mt-4 px-2">
                I’m always open to new opportunities, projects, and collaborations. If you want to work together, feel free to send me a message or check out my social profiles below!
                </p>
            </div>

            <div class="flex flex-col xl:flex-row items-center xl:items-start">
                {/* <!-- Left (Contact Info) --> */}
                <div class="w-full xl:w-1/2">

                    <div class="w-full px-4 sm:px-6 md:px-8 lg:px-0">

                        <div class="flex justify-center mb-6">
                            <div class="flex items-center space-x-4 max-w-md w-full">
                            <img src="./src/assets/WhatsApp Image 2025-03-09 at 20.40.41.jpeg" alt="Phone" class="w-10 h-10 sm:w-12 sm:h-12" />
                            <div class="text-left">
                                <div class="text-indigo-600 text-lg sm:text-xl font-semibold">Phone</div>
                                <div class="text-sm sm:text-base">+234 81 6438 5796</div>
                            </div>
                            </div>
                        </div>

                        {/* <!-- Email --> */}
                        <div class="flex justify-center mb-15">
                            <div class="flex items-center space-x-4 max-w-md w-full">
                            <img src="./src/assets/WhatsApp Image 2025-03-09 at 21.09.23.jpeg" alt="Email" class="w-10 h-10 sm:w-12 sm:h-12" />
                            <div class="text-left">
                                <div class="text-indigo-600 text-lg sm:text-xl font-semibold">Email</div>
                                <div class="text-sm sm:text-base">michealfadairo14@gmail.com</div>
                            </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Social Links --> */}
                    <ul class="flex flex-wrap justify-center xl:justify-start mt-4">
                        <li class="p-4 flex items-center">
                        <img src="./src/assets/linkedin.png" alt="LinkedIn" class="w-8 h-8 mr-2" />
                        <a href="https://www.linkedin.com/in/michael-fadairo-292919347/">LinkedIn</a>
                        </li>
                        <li class="p-4 flex items-center">
                        <img src="./src/assets/github.png" alt="GitHub" class="w-8 h-8 mr-2" />
                        <a href="https://github.com/Mikefad">GitHub</a>
                        </li>
                        <li class="p-4 flex items-center">
                        <img src="./src/assets/social.png" alt="Instagram" class="w-8 h-8 mr-2" />
                        <a href="https://www.instagram.com/_michael_tech_/">Instagram</a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Image Section - hidden until xl screens --> */}

                <div class="hidden relative  xl:flex  w-full xl:w-1/2 justify-center mt-6">
                    <img src="./src/assets/officegirl.jpeg" alt="Office Girl" class="lg:w-[400px] lg:h-[300px] lg:m-4 rounded-full  lg:translate-x-[110px]  w-[200px] h-[150px] m-2 translate-x-[3px] -translate-y-[63px]" />
                    <img src="./src/assets/AdobeStock_637224841_Preview.jpeg" alt="Extra 1" class="lg:w-[150px] lg:h-[150px]   rounded-full lg:z-10 lg:-translate-x-[360px]  w-[75px] h-[75px]  z-10 -translate-x-[230px] -translate-y-[70px]" />
                    <img src="./src/assets/AdobeStock_136828609_Preview.jpeg" alt="Extra 2" class="lg:w-[100px] lg:h-[100px]  rounded-full lg:z-10 lg:translate-y-[200px] lg:-translate-x-[430px]  w-[50px] h-[50px]  z-10 translate-y-[63px] -translate-x-[270px]" />
                   
                </div>

            </div>
            </section>


            
            
        </main>
    
        </>

    );   
}
export default Porthome


