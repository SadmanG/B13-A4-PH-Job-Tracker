document.getElementById("MFC-int").addEventListener("click", function(){
    // 1. interview-container ke dhore niye ashbo
        const interview = document.getElementById("interview-container");

        // 2. New div create korbo
        const newInterview = document.createElement("div");

        // 3. New div innerHTML add korbo
        newInterview.innerHTML = `
        <div id="MFC" class="border border-gray-200 p-6 rounded-lg shadow-sm mb-4">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-lg font-bold text-gray-800">Mobile First Corp</h3>
                        <p class="text-gray-600">React Native Developer</p>
                        <p class="text-sm text-gray-500 mt-1">Remote · Full-time · $130,000-$175,000</p>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                
                <div class="mt-4">
                    <span class="badge badge-success text-xs">INTERVIEW</span>
                </div>

                <p class="text-gray-600 mt-4">
                    Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.
                </p>

                <div class="flex space-x-4 mt-6">
                    <button id="MFC-int" class="btn btn-success btn-outline btn-sm">INTERVIEW</button>
                    <button id="MFC-rej" class="btn btn-error btn-outline btn-sm">REJECTED</button>
                </div>
            </div>
        `;
        // 4. Interview container e newDiv append korbo
        interview.append(newInterview);

        // 5. Hide "all" card
        const mfc = document.getElementById("MFC");
        mfc.classList.add("hidden");
})

document.getElementById("WFA-int").addEventListener("click", function(){
    // 1. interview-container ke dhore niye ashbo
        const interview = document.getElementById("interview-container");

        // 2. New div create korbo
        const newInterview = document.createElement("div");

        // 3. New div innerHTML add korbo
        newInterview.innerHTML = `
        <div id="WFA" class="border border-gray-200 p-6 rounded-lg shadow-sm mb-4">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-lg font-bold text-gray-800">WebFlow Agency</h3>
                        <p class="text-gray-600">Web Designer & Developer</p>
                        <p class="text-sm text-gray-500 mt-1">Los Angeles, CA  •  Part-time  •  $80,000 - $120,000</p>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                
                <div class="mt-4">
                    <span class="badge badge-success text-xs">INTERVIEW</span>
                </div>

                <p class="text-gray-600 mt-4">
                    Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.
                </p>

                <div class="flex space-x-4 mt-6">
                    <button id="WFA-int" class="btn btn-success btn-outline btn-sm">INTERVIEW</button>
                    <button id="WFA-rej" class="btn btn-error btn-outline btn-sm">REJECTED</button>
                </div>
            </div>
        `;
        // 4. Interview container e newDiv append korbo
        interview.append(newInterview);

        // 5. Hide "all" card
        const wfa = document.getElementById("WFA");
        wfa.classList.add("hidden");
})

document.getElementById("DVS-int").addEventListener("click", function(){
    // 1. interview-container ke dhore niye ashbo
        const interview = document.getElementById("interview-container");

        // 2. New div create korbo
        const newInterview = document.createElement("div");

        // 3. New div innerHTML add korbo
        newInterview.innerHTML = `
        <div id="DVS" class="border border-gray-200 p-6 rounded-lg shadow-sm mb-4">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-lg font-bold text-gray-800">DataViz Solutions</h3>
                        <p class="text-gray-600">Data Visualization Specialist</p>
                        <p class="text-sm text-gray-500 mt-1">Boston, MA  •  Full-time  •  $125,000 - $165,000</p>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                
                <div class="mt-4">
                    <span class="badge badge-success text-xs">INTERVIEW</span>
                </div>

                <p class="text-gray-600 mt-4">
                    Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.
                </p>

                <div class="flex space-x-4 mt-6">
                    <button id="DVS-int" class="btn btn-success btn-outline btn-sm">INTERVIEW</button>
                    <button id="DVS-rej" class="btn btn-error btn-outline btn-sm">REJECTED</button>
                </div>
            </div>
        `;
        // 4. Interview container e newDiv append korbo
        interview.append(newInterview);

        // 5. Hide "all" card
        const dvs = document.getElementById("DVS");
        dvs.classList.add("hidden");
})