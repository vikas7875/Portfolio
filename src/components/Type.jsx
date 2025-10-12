import { Typewriter } from "react-simple-typewriter";

export const Type = () => {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-center mt-6">
      
      <span className="text-primary">
        <Typewriter
          words={[
            "Developer",
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h2>
  );
};
