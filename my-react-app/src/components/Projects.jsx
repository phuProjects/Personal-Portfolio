import Project_card from './Project-card.jsx';

export default function Projects() {
    return (
        <div id="projects" className="projects-page">
            <div className="project-headline">
                <h1>Check out my projects<span>!</span></h1>
            </div>
            <div>
                <Project_card
                    name="Discord Music Bot"
                    date="Aug, 2024 - Sept, 2024"
                    description={
                        <>
                            <p>○ Developed a Discord bot using Python and the discord.py library to manage music playback in a friend's Discord server.</p>
                            <p>○ Implemented music queue management with features like song playback, pause, resume, and skip commands, providing easy user control over the music experience.</p>
                            <p>○ Integrated YouTube as a music source using the yt-dlp library to allow users to search and play music directly in Discord voice channels.</p>
                            <p>○ Managed concurrent requests and ensured smooth audio playback through efficient use of asynchronous programming with Python's asyncio library.</p>
                        </>
                    }
                />

                <Project_card
                    name="Personalized Expense Tracker"
                    date="Aug, 2024 - Sept, 2024"
                    description={
                        <>
                            <p>○ Developed a Python-based expense tracking application to efficiently manage and categorize personal expenses.</p>
                            <p>○ Implemented key features such as adding, removing, and editing expenses, with support for multiple categories (e.g., groceries, entertainment, etc.).</p>
                            <p>○ Built functionality to generate reports that summarize expenses by category, date range, or custom filters to provide users with detailed spending insights.</p>
                            <p>○ Integrated CSV file handling to save and load expense data, ensuring persistence between sessions and easy data portability.</p>
                        </>
                    }
                />
            </div>
        </div>
    );
}
