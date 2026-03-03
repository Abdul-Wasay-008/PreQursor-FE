import { useEffect, useRef, useState } from "react";

const CrosshairCursor = () => {
    const crosshairRef = useRef<HTMLImageElement | null>(null);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
    const mouse = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });
    const lastScrollY = useRef(0);

    // ✅ Detect scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                setScrollDirection("down");
            } else if (currentScrollY < lastScrollY.current) {
                setScrollDirection("up");
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const update = () => {
            current.current.x += (mouse.current.x - current.current.x) * 0.09;
            current.current.y += (mouse.current.y - current.current.y) * 0.09;

            if (crosshairRef.current) {
                crosshairRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
            }

            requestAnimationFrame(update);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX - 28; // Adjust based on image size
            mouse.current.y = e.clientY - 30;
        };

        // New: Handle hover on interactive elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("button, a, input, textarea, select, svg")) {
                crosshairRef.current?.classList.add("opacity-0");
            }
        };

        const handleMouseOut = () => {
            crosshairRef.current?.classList.remove("opacity-0");
        };

        if (window.innerWidth > 768) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseover", handleMouseOver);
            window.addEventListener("mouseout", handleMouseOut);
            requestAnimationFrame(update);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <img
            ref={crosshairRef}
            src="/assets/crosshair.png"
            alt="Crosshair Cursor"
            className={`pointer-events-none fixed top-0 left-0 z-50 w-9 h-9 hidden md:block drop-shadow-[0_0_6px_#ff0000] transition-opacity duration-300 ease-in-out ${scrollDirection === "down" ? "-translate-y-2" : "translate-y-2"}`}
        />
    );
};

export default CrosshairCursor;
