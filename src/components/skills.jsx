function Skills() {
    const skills = [
        { name: "React", icon: "fab fa-react", level: "中級" },
        { name: "Rust", icon: "fab fa-rust", level: "中級" },
        { name: "JavaScript", icon: "fab fa-js", level: "中級" },
        { name: "TypeScript", icon: "fab fa-ts", level: "中級" },
        { name: "Node.js", icon: "fab fa-node", level: "中級" },
      ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
            <div
                key={skill.name}
                className="bg-[#0f3460] bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border border-[#e94560] border-opacity-20"
            >
                <div className="flex items-center gap-6">
                <i className={`${skill.icon} text-5xl text-[#e94560]`}></i>
                <div>
                    <h3 className="text-2xl font-roboto font-bold text-white">
                    {skill.name}
                    </h3>
                    <p className="text-gray-300 mt-2">{skill.level}</p>
                </div>
                </div>
            </div>
            ))}
      </div>
    )
}

export default Skills;