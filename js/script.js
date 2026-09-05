/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    if (nav) {
        nav.classList.toggle("active");
    }

}


/* =========================================
   HOMEPAGE TOOL SEARCH
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("toolSearch");
    const searchResults = document.getElementById("searchResults");

    if (!searchInput || !searchResults) {
        return;
    }


    /* =========================================
       ALL AVAILABLE TOOLS
    ========================================= */

    const allTools = [

        {
            name: "CGPA Calculator",
            keywords: "cgpa gpa grade point college university marks",
            description: "Calculate your CGPA using subject credits and grade points.",
            link: "calculators/cgpa.html",
            icon: "🎓"
        },

        {
            name: "Attendance Calculator",
            keywords: "attendance percentage classes present absent college school",
            description: "Calculate your attendance percentage quickly and easily.",
            link: "calculators/attendance.html",
            icon: "📊"
        },

        {
            name: "Percentage Calculator",
            keywords: "percentage percent marks calculate score",
            description: "Calculate percentages quickly and accurately.",
            link: "calculators/percentage.html",
            icon: "📈"
        },

        {
            name: "Age Calculator",
            keywords: "age birthday date of birth dob years months days",
            description: "Calculate your exact age in years, months and days.",
            link: "calculators/age.html",
            icon: "🎂"
        },

        {
            name: "EMI Calculator",
            keywords: "emi loan interest monthly payment finance",
            description: "Calculate monthly EMI, total interest and total payment.",
            link: "calculators/emi.html",
            icon: "💰"
        },

        {
            name: "Simple Interest Calculator",
            keywords: "simple interest si principal rate time money",
            description: "Calculate simple interest and total amount.",
            link: "calculators/simple-interest.html",
            icon: "💵"
        },

        {
            name: "Compound Interest Calculator",
            keywords: "compound interest ci principal rate time investment",
            description: "Calculate compound interest with different compounding frequencies.",
            link: "calculators/compound-interest.html",
            icon: "📊"
        },

        {
            name: "Pomodoro Timer",
            keywords: "pomodoro timer study focus productivity break",
            description: "Focus on your studies using customizable study sessions.",
            link: "study-tools/pomodoro.html",
            icon: "⏱️"
        },

        {
            name: "Exam Countdown",
            keywords: "exam countdown date time test examination",
            description: "Countdown to your upcoming exams and important dates.",
            link: "study-tools/exam-countdown.html",
            icon: "📅"
        },

        {
            name: "Timetable Generator",
            keywords: "timetable schedule study planner routine classes",
            description: "Create a simple and organized study timetable.",
            link: "study-tools/timetable-generator.html",
            icon: "🗓️"
        },

        {
            name: "Resume Builder",
            keywords: "resume cv curriculum vitae job career resume maker",
            description: "Create a professional resume with live preview.",
            link: "career-tools/resume-builder.html",
            icon: "📄"
        },

        {
            name: "Unit Converter",
            keywords: "unit conversion length weight temperature converter",
            description: "Convert length, weight and temperature units.",
            link: "tools/unit-converter.html",
            icon: "🔄"
        },

        {
            name: "Word Counter",
            keywords: "word count character counter characters writing",
            description: "Count words, characters and estimate reading time.",
            link: "tools/word-counter.html",
            icon: "📝"
        },

        {
            name: "QR Code Generator",
            keywords: "qr qr code generator url text scanner",
            description: "Generate QR codes from text or URLs.",
            link: "tools/qr-generator.html",
            icon: "🔳"
        }

    ];


    /* =========================================
       SEARCH FUNCTION
    ========================================= */

    searchInput.addEventListener("input", function () {

        const query = searchInput.value.trim().toLowerCase();

        searchResults.innerHTML = "";


        /* Don't show results when search is empty */

        if (query === "") {
            return;
        }


        /* Find matching tools */

        const results = allTools.filter(function (tool) {

            const searchableText =
                (
                    tool.name +
                    " " +
                    tool.keywords +
                    " " +
                    tool.description
                ).toLowerCase();

            return searchableText.includes(query);

        });


        /* =========================================
           NO RESULTS
        ========================================= */

        if (results.length === 0) {

            searchResults.innerHTML = `
                <div class="tool-card">

                    <h3>🔍 No tool found</h3>

                    <p>
                        We couldn't find a tool matching
                        "<strong>${escapeHTML(query)}</strong>".
                    </p>

                    <p>
                        Try searching for CGPA, attendance,
                        resume, exam, percentage or QR code.
                    </p>

                </div>
            `;

            return;
        }


        /* =========================================
           DISPLAY RESULTS
        ========================================= */

        results.forEach(function (tool) {

            const card = document.createElement("a");

            card.href = tool.link;
            card.className = "tool-card";

            card.innerHTML = `
                <h3>${tool.icon} ${tool.name}</h3>

                <p>
                    ${tool.description}
                </p>
            `;

            searchResults.appendChild(card);

        });

    });


    /* =========================================
       ESCAPE SEARCH TEXT
       Prevents HTML from being interpreted
    ========================================= */

    function escapeHTML(text) {

        const div = document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }

});