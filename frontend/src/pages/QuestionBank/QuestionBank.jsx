import { Link } from "react-router-dom";
import { useState } from "react";

function QuestionBank() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");

  const topics = ["All", "Arrays", "Strings", "Linked List", "Trees", "Graphs", "DP", "System Design", "DBMS"];

  const questions = [
    {
      id: 1,
      title: "Two Sum",
      topic: "Arrays",
      difficulty: "Easy",
      status: "Practiced",
      companies: [
        { name: "Google", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK1mLeMouAgooyVzFDB4zv_SNiEaiEd_G30Ewkqv2UkOC5ImoL2XuWRSCwxis_cEIyAFS5Amz7Q_m9LF-qnTSaLaf32olNoXKEs99xesS70hwmBmJnh45Uqy_ada03Ia30RvCQKzgLq9x1kLDF-8Taid108Ud0Z1D1EM9NJTptsgqr-8jBmwh-GgGEOETRKK50snTd-HNPu7r8fbZsHQCJBNaiHrjR3aAXJBS08I-5jqyDOzb5AhCt5fgWe-gP0iF7kYkZDlO1sDA" },
        { name: "Amazon", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmXMwVcN4mAzbd29d71bhqJHs5qT48rMGMg_58BBp7aV5FgIUUSou5YnMz20uhc7Llww9-4EywlTxGKxI6XkTaSCf-54x6pgU9odwzCMhCL9uT97C3ol9S4QXW7QgRX8zdh1W3cykmZD20XgBUd8n-31z6iM1oAO6VeZLIHD6YmNbm_HM6uGgrqWBOOubI9SOBbV-vEs2D6cM5O6EFx4Y8kMpsRT2cpbJmjC5-75moXdfPJq8sa3LN98XpzWcXk3f0lPsr71ggqy0" },
        { name: "Microsoft", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIizMV028qBYGU3ttcgllAQCNNmJicvoes_0jQu28zDpubJ66Y5-BC5_CVvpowsklaUAoIVn5AvkertAum4K6GONK3IgGiCo__30_syJ6Yh_Cly7gZhO9z4dOgZj4XWoAgWCS27bGgkl1JdmfBuEjEvCrCPJ4AMGXDfZvvx7kLWx38meN-zLWnSWGqjryZgJ3fi51iVIW9qpMg5rkdv2uA438MdINIDr6nz2JtrsEDJ8TYMAgkxMY2VTAqcr40EqYtC0LoA7kyUis" }
      ],
      extraCompanies: 2
    },
    {
      id: 2,
      title: "Add Two Numbers",
      topic: "Linked List",
      difficulty: "Medium",
      status: "Saved",
      companies: [
        { name: "Amazon", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCybm620CVgWS5IwAGvWTyFS-BE8rdtTrVK1FPJKjQC3Lqc1yWsGf7gndJ2Xf2oGBJRwC0DTpx2fDnoyv5Fnu8mtgEDt-1qO9tWiVAHXkSNimWlEjOK79pcYpBoNGeoPf5bIRoXH8xqNLgj-5rvVmca_WGz-dxi_2Vz2mNOUavCpdjqoLyFF7eUyHunC67BA_EWjdOjl3ROCqd2d4rStS9VvZMBQEpSVwJ5Pf5kmoMG2VMlVTjJZmfgVeYy8FSQLYtialg0RLTk3eM" },
        { name: "Facebook", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT-dW8bS2UkyVt3QVpnHsqxa9sACJXipsvcEu524uveKU-I0D4qWCbldLkOZGaFzlw2FM1s5HDoavW-Tm7IKarhejeTsJj3jzTZQpHOtdjUfm5-pfmSh8gj36YTQDzxgiVfuO8YQIeCYxXFiPoD3wkPr8BRiXmD_iyzTTznADFIMiuOm4H0bVjg_ubqiPjNMLRtjEWo6fsAJ5i1XybljczQDz7TkxX4NcxFYleqt2jtooPC4d6RGs3Ghy-NfZSXECOYBIEYIL-Xe4" },
        { name: "Apple", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcZy9wkw4CuopCO6uF565ujF1etPKbcLGo_mV6_EU2dZuwsGtC70A9uSdRRJWtDqUSwcqMhLKhmnU4lLwpP_oPCxITmnQ4M6V9itLuLdpnLBNamMoyz7QwzJiP4PwBA-Iiyfo6nrQITUKQSdhVDREb5jpabFp9Lu5g8Wo36d_pLGZmK3g5BIrhl1aTN_tlkuWc0ywiH5JR6cgPV-LtkKZ2SoPe5He2OlBpsK7YrZU7NXgQKE78mqHNhXbln0O0alx91ftKch8_rss" }
      ],
      extraCompanies: 1
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      topic: "Strings",
      difficulty: "Medium",
      status: "Not Practiced",
      companies: [
        { name: "Google", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOcMlJMjv1MDDo4hTassFzZajQ8PEF5xQhsWzICwCtTk0sPbspj2IxblwpzqiQkD4JZNIZXc5VwfTGfdkDyA5cYh0SksdyFtRSPaLrJ6XtyLjq8ZM0m8yZjOz7rUa0PGSe3JPkFCJt4EIkEhcnNRozmr1KDR5HtfRPv26t99aMdTX55U0vv9ezrn7dkgT62A95TX2XfdsGh8WWnZ34Fd5ozd0tmc567fSKPiMDUlynip7Wso1-VOoMFeu1U6u1Uv7K2q4qRe9-RaQ" },
        { name: "Microsoft", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSDh2457Awd0oSYt3UMlytfGg1aibBab5-BxAutPy22Mwt3W70OP7FsR71pbKB7PKrX_WMMKuKe4WjYPw3oFKFjJZL7GHkc3oddd9x-Tnn8HOQVwRhgqdZmSBCiNGCRuK--zXhttgfXHfegZiH8f6vcivrwWGI2socn-S3k3acWFYCqLavHnxV722lU55jmfcqhS02qnMl2C-oRVn0Qw1AfJDeO3_vilyhIOQWI06CouWxGfhXArwPReubcBkN1A17sReDRUPlRW8" },
        { name: "Amazon", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnTYB3gK9MwVvGbRXOHrwKYEJadiiveOujYFNdG1wm0-rY-gtem7KjSH6IKwqKqlYqB2OMiiSgWXqm15vH3ziqxtA9DcB1WdEeeAiP7mRJiNfxbelW65Z2I6yK12IrH7fIqLQ24S8i7kArdxEqAnL1vbx4S5EhbB-Xo25Rwg3L58T43GY7AFOeEBLkWOwmlsw08kPIsC2Mr9JeUeeyeMLhYcpzibehjC8fb-3JDmjb_w32ETR8OafnBSqODpLp0ISAISM81GdKMRE" }
      ],
      extraCompanies: 2
    },
    {
      id: 4,
      title: "Container With Most Water",
      topic: "Arrays",
      difficulty: "Hard",
      status: "Not Practiced",
      companies: [
        { name: "Google", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9qBM1hKicCWLdVzqVxOCxZGdAkbk7sps9gTg3m7oQdCFHqU35c2hLmZEuo-KKT9wxaklL9Ug9EnMErDaS9tcPM8i_X9POU8plFhz0WRoNPQuIQ4HkzmbeoRtmoEWMXndvfNXZc-g762EUUMwJbrbeReZZ8k7h30LfCOx2AmrKVDnf3DoIeByg9a8kOGHIZ-Gs0I9zuD3cGw4sZyesElclvg7wRSNr0bFibMn8Moqp8x37rXUOspYtBCjywCt8P9EFA2ZI795aLhE" },
        { name: "Amazon", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDMcbUjqMn1vR6jbRkIYoYA9uvvZlvwgHF_zIF2IeI0pYOQ9LP9T-oJyn8JwTlqXnod8LDteOrmc6yd_oWJxtX6EptXkqS_ohGZVk3eQRrOcDEYHBy7jnlXRJeBTWSV2NxY5pzRaviExwL7V0VNGmM_foSqiw91FDxP0B727YBSM69QgFzMN_zGX5dHUdyULK1qR8JDvNv774cqimW4t7fpjwhbR6jZ4cATb8YsygXwjc4mqEkQmwKbJHq6CFgRJYDjkyLTC2Y1uc" },
        { name: "Microsoft", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyKxe8KhWvpzX1LGuy9l5proSazgexTde70ra1JfTl_2p6X4LOiZfLIPR36oN8SWUqx1EXcEm4-OxGqW8ct-qecZ1PZUH5R06H5t0o6Nz0C3m3WK4LJFbISp-vPjGa4eKfep-eqNdW0GJDz_8WQ7XtE-boan1Wu075xRIojXqQ2jQ6EF_8Ct5UGgCRAqXiTXdoSsrqyTCeqCp6cy0UVxKmgKmedcwJIdNmyvBeSIzhFKbyXC8SwDRjViOXSLfyYuNsZrvnwp0LF2M" }
      ],
      extraCompanies: 0
    },
    {
      id: 5,
      title: "Binary Tree Inorder Traversal",
      topic: "Trees",
      difficulty: "Easy",
      status: "Practiced",
      companies: [
        { name: "Amazon", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9B3-zpksaDyH-DTGUD-CKG49InUhV2urGmANatSn0Bl7Pvbclsib9e3gxSkVPWDUJ85snR3ZvPM-6vJyZV13pTX776G6LpiQ2GbtrvM1d84Klfh3N8_rX00FSqVZaTc17KCRxikOsfIokoQSrNIJKaYoJy0dkStEM8PRls27dXxXMpn0y2fqPOJrEXRguZphj6OflxwpR2NezIMtFHbeULAoqlycB_oYtbmYjFWg2UiiaeI4wyO5Om6ehoqvja-26zBGAaGvKDYk" },
        { name: "Apple", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjMaNcA-id-FuvjScqhEuC2-Sql-F9dsxX0F6nLeheJK9bCFD5whfGkBh-utWkKqFyajwTNWDIH-nU4j3L-Go_hz38LJNm0SBVla2OJVp7gOckw73e8iE_L6caoDh1MkO4Spsn3OSaFp3InesBJ_imU92_ro_FEohssuzsMt3FKIKfJOX5OMJt8nwj-rOxy_f27OOSR-z155FGkjMGoGy8-wUCAqCI2yfQtsWZSjR2gh_Xtmu1ufMAdve8PFhvBtXzF-I7fJNpzvI" }
      ],
      extraCompanies: 1
    }
  ];

  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-hidden">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Navigation */}
                {/* SideNavBar */}
                {/* SideNavBar */}
        <aside className="h-screen w-72 fixed left-0 top-0 bg-surface-container-lowest dark:bg-inverse-surface border-r border-outline-variant dark:border-outline shadow-sm flex flex-col py-6 px-4 space-y-2 z-50 overflow-y-auto">
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                rocket_launch
              </span>
            </div>
            <div className="text-left">
              <h1 className="text-headline-sm font-headline-sm font-bold text-primary dark:text-primary-fixed-dim">PrepPilot</h1>
              <p className="text-[10px] font-label-md text-secondary-fixed-dim uppercase tracking-widest">AI Career Coach</p>
            </div>
          </div>
          <nav className="flex-1 space-y-1.5 overflow-y-auto custom-scrollbar">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-md">Dashboard</span>
            </Link>
            <Link
              to="/mock-interview"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">video_chat</span>
              <span className="font-label-md">AI Mock Interview</span>
            </Link>
            <Link
              to="/resume-analyzer"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">description</span>
              <span className="font-label-md">Resume Analyzer</span>
            </Link>
            <Link
              to="/coding-practice"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">code</span>
              <span className="font-label-md">Coding Practice</span>
            </Link>
            <Link
              to="/progress"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">trending_up</span>
              <span className="font-label-md">Progress</span>
            </Link>
            <Link
              to="/question-bank"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 bg-primary-container text-on-primary-container font-semibold rounded-lg transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
              <span className="font-label-md">Question Bank</span>
            </Link>
            <Link
              to="/study-plan"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>event_note</span>
              <span className="font-label-md">Study Plan</span>
            </Link>
            <div className="pt-4 mt-4 border-t border-outline-variant">
            <Link
              to="/profile"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">person</span>
              <span className="font-label-md">Profile</span>
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="font-label-md">Settings</span>
            </Link>
            <Link
              to="/help-support"
              className="flex items-center gap-3 px-4 py-3 cursor-pointer duration-200 text-secondary dark:text-secondary-fixed-dim hover:text-primary hover:bg-surface-container-high dark:hover:bg-secondary-fixed-dim/20 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">help</span>
              <span className="font-label-md">Help Center</span>
            </Link>
            </div>
          </nav>
          <div className="mt-auto">
            <Link
              to="/"
              className="text-error hover:bg-error-container/20 transition-colors duration-200 px-4 py-3 rounded-lg flex items-center gap-3 w-full"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-md">Log Out</span>
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-72 flex flex-col h-screen overflow-hidden">
          {/* Header Navigation */}
          <header className="flex justify-between items-center px-gutter w-full h-16 bg-surface border-b border-outline-variant sticky top-0 z-40">
        <div className="flex items-center flex-1 max-w-xl relative">
          <span className="material-symbols-outlined absolute left-3 text-on-surface-variant">search</span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface rounded-lg border-none focus:ring-2 focus:ring-primary/20 text-body-md font-body-md transition-all outline-none"
            placeholder="Search anything... (⌘ K)"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-6">
          <button className="relative text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors active:scale-95 duration-100 cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors active:scale-95 duration-100 cursor-pointer">
            <span className="material-symbols-outlined">help</span>
          </button>
          <div className="flex items-center gap-3 border-l border-outline-variant pl-6">
            <div className="text-right hidden sm:block">
              <p className="font-label-md text-label-md text-on-surface leading-none">Adarsh Singh</p>
              <p className="text-[10px] text-on-surface-variant">NIT Raipur</p>
            </div>
            <img
              className="w-10 h-10 rounded-full border-2 border-primary-container object-cover"
              alt="Adarsh Singh Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT7y8MHo40EcPacgQDVx2_J4IHKb0zCzL3jWdcC82h6gFjBb8jERsfJtHBUcJjHg2brf-3pqNJLGIpUAQsrU3OljtPQ2YOAFoSmZ-YQDaS4CQHSZmDMm9xPSZl3oRqHNJCSd01QPmqXKVNNOFgwkYMO5b0N1hOfXqSrXaneFVJmUgM3CwqaoK0ohRmitQ6YYWI59JSGrr022Y3xi34vGlE9NOr1tuaFzGn3GEUSKzdX7hU43YeKyD4WPr0ZDw6X3zTBVuuUwDna8o"
            />
          </div>
        </div>
      </header>

        {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto bg-surface-container-low/30 p-8 custom-scrollbar">
            <div className="max-w-container-max mx-auto space-y-8">
          {/* Page Title Area */}
          <div className="flex justify-between items-end mb-8">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary bg-primary-container/10 p-2 rounded-lg">
                  inventory_2
                </span>
                <h2 className="font-headline-sm text-headline-sm font-bold">Question Bank</h2>
              </div>
              <p className="text-on-surface-variant">
                Browse questions by topic, difficulty, and company tags. Save and practice anytime.
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all duration-100">
              <span className="material-symbols-outlined">add</span>
              Add Question
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content Column */}
            <div className="flex-1 space-y-6">
              {/* Filters Bar */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/30 space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  <div className="relative lg:col-span-1">
                    <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-label-md font-label-md focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer outline-none">
                      <option>All Topics</option>
                      <option>Arrays</option>
                      <option>Linked List</option>
                      <option>Dynamic Programming</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant">
                      expand_more
                    </span>
                  </div>
                  <div className="relative">
                    <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-label-md font-label-md focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer outline-none">
                      <option>All Difficulties</option>
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant">
                      expand_more
                    </span>
                  </div>
                  <div className="relative">
                    <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-label-md font-label-md focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer outline-none">
                      <option>All Companies</option>
                      <option>Google</option>
                      <option>Amazon</option>
                      <option>Microsoft</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant">
                      expand_more
                    </span>
                  </div>
                  <div className="relative">
                    <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-label-md font-label-md focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer outline-none">
                      <option>All Status</option>
                      <option>Practiced</option>
                      <option>Not Practiced</option>
                      <option>Saved</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant">
                      expand_more
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-grow bg-primary/5 text-primary font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors active:scale-95 duration-100">
                      <span className="material-symbols-outlined text-sm">filter_alt</span> Filter
                    </button>
                    <button className="p-2.5 text-on-surface-variant hover:text-primary transition-colors duration-100">Reset</button>
                  </div>
                </div>
                {/* Pill Filters */}
                <div className="flex flex-wrap gap-2 items-center">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all ${
                        selectedTopic === topic
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "bg-surface-container-low text-on-surface-variant hover:bg-outline-variant/30"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                  <button className="flex items-center gap-1 text-primary hover:underline font-bold text-sm">
                    More <span className="material-symbols-outlined align-middle text-sm">expand_more</span>
                  </button>
                </div>
              </div>

              {/* Question Table Container */}
              <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden text-left">
                <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
                  <h3 className="font-bold text-lg">
                    Questions <span className="text-on-surface-variant font-normal text-sm ml-2">(1,248)</span>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span>Sort by:</span>
                    <button className="font-bold text-on-surface flex items-center gap-1">
                      Latest <span className="material-symbols-outlined text-sm">expand_more</span>
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low/50">
                      <tr className="text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                        <th className="px-6 py-4 w-12 text-center">#</th>
                        <th className="px-6 py-4 min-w-[280px]">Question</th>
                        <th className="px-6 py-4">Topic</th>
                        <th className="px-6 py-4">Difficulty</th>
                        <th className="px-6 py-4">Company Tags</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      {questions.map((q) => (
                        <tr key={q.id} className="hover:bg-primary-container/5 transition-colors group cursor-pointer">
                          <td className="px-6 py-4 text-center text-on-surface-variant">{q.id}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-on-surface group-hover:text-primary transition-colors">
                                {q.title}
                              </span>
                              <span className="material-symbols-outlined text-outline text-sm hover:text-primary transition-colors">
                                bookmark
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-on-surface-variant">{q.topic}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 font-bold rounded-full text-xs ${
                                q.difficulty === "Easy"
                                  ? "bg-tertiary-fixed-dim/20 text-tertiary"
                                  : "bg-secondary-container text-on-secondary-container"
                              }`}
                            >
                              {q.difficulty}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex -space-x-2">
                              {q.companies.map((comp, idx) => (
                                <div
                                  key={idx}
                                  className="w-6 h-6 rounded-full bg-white border border-outline-variant flex items-center justify-center p-1"
                                  title={comp.name}
                                >
                                  <img className="w-3 h-3 object-contain" alt={comp.name} src={comp.logo} />
                                </div>
                              ))}
                              {q.extraCompanies > 0 && (
                                <div className="w-6 h-6 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-[8px] font-bold">
                                  +{q.extraCompanies}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`font-bold text-xs flex items-center gap-1 ${
                                q.status === "Practiced"
                                  ? "text-tertiary"
                                  : q.status === "Saved"
                                  ? "text-primary"
                                  : "text-on-surface-variant"
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  q.status === "Practiced"
                                    ? "bg-tertiary"
                                    : q.status === "Saved"
                                    ? "bg-primary"
                                    : "bg-outline"
                                }`}
                              ></span>
                              {q.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex justify-center items-center gap-4 text-on-surface-variant">
                              <span className="material-symbols-outlined text-lg hover:text-primary">visibility</span>
                              <span className={`material-symbols-outlined text-lg hover:text-primary ${q.status === "Saved" ? "text-primary fill-icon" : ""}`}>
                                bookmark
                              </span>
                              <span className="material-symbols-outlined text-lg hover:text-primary">more_vert</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className="px-6 py-4 border-t border-outline-variant/30 flex justify-between items-center bg-surface-container-low/20">
                  <span className="text-sm text-on-surface-variant">Showing 1 to 5 of 1,248 questions</span>
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-outline-variant/20 transition-colors">
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-white font-bold text-sm">
                      1
                    </button>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-outline-variant/20 transition-colors text-sm font-bold">
                      2
                    </button>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-outline-variant/20 transition-colors text-sm font-bold">
                      3
                    </button>
                    <span className="px-2 text-on-surface-variant">...</span>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-outline-variant/20 transition-colors text-sm font-bold">
                      250
                    </button>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-outline-variant/20 transition-colors">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="w-full lg:w-80 space-y-6 text-left">
              {/* Quick Stats Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/30">
                <h3 className="font-bold mb-6 flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary text-sm">bolt</span> Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-primary-container/10 text-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">analytics</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold leading-none">1,248</p>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant mt-1">
                        Total Questions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-tertiary/10 text-tertiary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">task_alt</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold leading-none">312</p>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant mt-1">
                        Practiced
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">bookmark</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold leading-none">186</p>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant mt-1">
                        Saved
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-surface-container-high text-on-surface-variant rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">edit_note</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold leading-none">94</p>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant mt-1">
                        Notes Added
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Topics Chart Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/30">
                <h3 className="font-bold mb-6 flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary text-sm">pie_chart</span> Top Topics
                </h3>
                <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
                  {/* SVG Donut Chart */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-surface-container-low" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="12" />
                    <circle
                      className="text-primary"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeDasharray="251.2"
                      strokeDashoffset="62.8"
                      strokeWidth="12"
                    />
                    <circle
                      className="text-tertiary-fixed-dim"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeDasharray="251.2"
                      strokeDashoffset="150"
                      strokeWidth="12"
                    />
                    <circle
                      className="text-secondary-container"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="40"
                      stroke="currentColor"
                      strokeDasharray="251.2"
                      strokeDashoffset="210"
                      strokeWidth="12"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <p className="text-2xl font-bold text-on-surface leading-none">75%</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-bold">Mastery</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span className="text-on-surface-variant font-bold">Arrays</span>
                    </div>
                    <span className="font-bold">28%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                      <span className="text-on-surface-variant font-bold">Strings</span>
                    </div>
                    <span className="font-bold">21%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
                      <span className="text-on-surface-variant font-bold">Trees</span>
                    </div>
                    <span className="font-bold">18%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-surface-container-high animate-pulse"></span>
                      <span className="text-on-surface-variant font-bold">Others</span>
                    </div>
                    <span className="font-bold">33%</span>
                  </div>
                </div>
                <button className="w-full mt-6 py-2 text-primary text-sm font-bold flex items-center justify-center gap-2 border border-primary/20 rounded-lg hover:bg-primary/5 transition-all">
                  View All Topics <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default QuestionBank;
