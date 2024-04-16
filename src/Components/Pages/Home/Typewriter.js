import React from "react";
import Typewriter from "typewriter-effect";

function Slots() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Developer",
                    "Student",
                    "Gamer",
                    "Nerd"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 45,
            }}
        />
    );
}

export default Slots;