import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Users, BookOpen, Trophy, ExternalLink } from "lucide-react";

// Image imports for the Problem of the Month
import image1 from "../assets/POTMSept/image1.png";
import image2 from "../assets/POTMSept/image2.png";
import image3 from "../assets/POTMSept/image3.png";
import image4 from "../assets/POTMSept/image4.png";
import image5 from "../assets/POTMSept/image5.png";
import image6 from "../assets/POTMSept/image6.png";


/**
 * Lightweight, self-contained Matter.js canvas used in the hero's animation area.
 * - no SSR assumptions (dynamic import of matter-js)
 * - crisp on HiDPI
 * - responsive to container size
 * - mouse/touch drag enabled
 */
function PhysicsAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    let engine, render, runner;
    let walls = [];
    let ramps = [];
    let destroyed = false;

    const setup = async () => {
      const Matter = await import("matter-js");
      const { Engine, Render, Runner, Bodies, Body, Composite, World } = Matter;

      if (!mountRef.current) return;
      const container = mountRef.current;
      const rect = container.getBoundingClientRect();

      engine = Engine.create({ gravity: { x: 0, y: 1.0 } });

      render = Render.create({
        element: container,
        engine,
        options: {
          width: Math.max(320, Math.floor(rect.width)),
          height: Math.max(260, Math.floor(rect.height)),
          wireframes: false,
          background: "transparent",
          pixelRatio: window.devicePixelRatio || 1,
        },
      });

      const COLORS = ["#f97316", "#f59e0b", "#fbbf24", "#fde68a", "#0f2940"];
      const rand = (min, max) => Math.random() * (max - min) + min;
      const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

      const makeBall = (x, y) =>
        Bodies.circle(x, y, rand(8, 18), {
          restitution: 0.45,
          friction: 0.001,
          frictionAir: 0,
          render: {
            fillStyle: pick(COLORS),
            strokeStyle: "rgba(0,0,0,0.06)",
            lineWidth: 1,
          },
        });

      const mkWalls = (W, H) => {
        const thick = 80;
        const opts = { isStatic: true, render: { visible: false } };
        walls = [];
        World.add(engine.world, walls);
      };

      const rampStyle = {
        isStatic: true,
        chamfer: { radius: 6 },
        render: {
          fillStyle: "transparent",
          strokeStyle: "#ffffff",
          lineWidth: 3,
        },
      };

      const mkRamps = (W, H) => {
        const a1 = -0.2;
        const a2 = +0.17;
        const a3 = -0.26;

        const r1 = Bodies.rectangle(W * 0.66, H * 0.22, W * 0.5, 12, {
          ...rampStyle,
          angle: a1,
        });
        const r2 = Bodies.rectangle(W * 0.32, H * 0.55, W * 0.56, 12, {
          ...rampStyle,
          angle: a2,
        });
        const r3 = Bodies.rectangle(W * 0.6, H * 0.86, W * 0.82, 12, {
          ...rampStyle,
          angle: a3,
        });

        ramps = [r1, r2, r3];
        World.add(engine.world, ramps);
      };

      const W = render.options.width;
      const H = render.options.height;
      mkWalls(W, H);
      mkRamps(W, H);

      const initial = 5;
      const balls = Array.from({ length: initial }, () =>
        makeBall(rand(W * 0.8, W * 0.28), rand(-40, H * 0.05))
      );
      World.add(engine.world, balls);

      balls.forEach((b) => Body.setAngularVelocity(b, rand(-0.05, 0.05)));

      let spawned = 0;
      const timer = window.setInterval(() => {
        if (destroyed || spawned > 40) return window.clearInterval(timer);
        const b = makeBall(rand(W * 0.9, W * 0.22), -30);
        World.add(engine.world, b);
        spawned += 1;
      }, 700);

      const resize = () => {
        if (!mountRef.current) return;
        const { width, height } = mountRef.current.getBoundingClientRect();
        const newW = Math.max(320, Math.floor(width));
        const newH = Math.max(260, Math.floor(height));

        render.options.width = newW;
        render.options.height = newH;
        render.canvas.width = newW * (window.devicePixelRatio || 1);
        render.canvas.height = newH * (window.devicePixelRatio || 1);
        render.canvas.style.width = `${newW}px`;
        render.canvas.style.height = `${newH}px`;
        Render.setPixelRatio(render, window.devicePixelRatio || 1);

        if (walls.length) World.remove(engine.world, walls);
        if (ramps.length) World.remove(engine.world, ramps);
        mkWalls(newW, newH);
        mkRamps(newW, newH);
      };

      window.addEventListener("resize", resize);

      Render.run(render);
      runner = Runner.create();
      Runner.run(runner, engine);

      return () => {
        window.removeEventListener("resize", resize);
        window.clearInterval(timer);
        try {
          Runner.stop(runner);
          Render.stop(render);
          if (render?.canvas && render.canvas.parentNode)
            render.canvas.parentNode.removeChild(render.canvas);
          Engine.clear(engine);
        } catch {}
      };
    };

    let cleanup;
    (async () => (cleanup = await setup()))();

    return () => {
      destroyed = true;
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div ref={mountRef} className="relative w-full h-[420px] lg:h-[520px]" />
  );
}

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>

        {/* BACKGROUND GLOWS (Safari-safe: wrapped & clipped) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Glow 1 */}
          <div className="absolute top-20 left-20">
            <div className="w-72 h-72 rounded-full overflow-hidden">
              <div className="w-full h-full bg-primary/20 blur-3xl animate-float" />
            </div>
          </div>

          {/* Glow 2 */}
          <div className="absolute bottom-20 right-20">
            <div className="w-96 h-96 rounded-full overflow-hidden">
              <div
                className="w-full h-full bg-accent/20 blur-3xl animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>

          {/* Glow 3 (shifted a bit left) */}
          <div className="absolute top-1/2 left-[46%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-[600px] h-[600px] rounded-full overflow-hidden">
              <div
                className="w-full h-full bg-cyan-500/10 blur-3xl animate-float"
                style={{ animationDelay: "4s" }}
              />
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                EVHS<span className="block">Math Club</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Join us in exploring mathematics through competitions,
                problem-solving, and collaborative learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://discord.gg/HeAM7TYV2y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow-purple transition-all duration-300 text-white font-semibold px-8 py-4 text-lg"
                  >
                    Join Our Discord
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/resources">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 px-8 py-4 text-lg"
                  >
                    View Resources
                  </Button>
                </Link>
              </div>
            </div>

            {/* Animation Area w/ Matter.js */}
            <div
              className="hidden lg:block lg:order-last animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <PhysicsAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-border/50 hover:shadow-glow-purple hover:border-primary/30 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Next Meeting
              </CardTitle>
              <Calendar className="h-4 w-4 text-primary group-hover:text-primary-glow transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Oct. 7
              </div>
              <p className="text-xs text-muted-foreground">Room B109 @ Lunch</p>
            </CardContent>
          </Card>

          {/* Members card (was "Active Members") */}
          <Card className="bg-gradient-card border-border/50 hover:shadow-glow-cyan hover:border-cyan-500/30 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Members
              </CardTitle>
              <Users className="h-4 w-4 text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                127
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Signups This Year
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-glow-orange hover:border-accent/30 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Next Competition
              </CardTitle>
              <Trophy className="h-4 w-4 text-accent group-hover:text-accent-hover transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                AMC 10/12 A
              </div>
              <p className="text-xs text-muted-foreground">November 5</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-glow-purple hover:border-emerald-400/30 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Resources
              </CardTitle>
              <BookOpen className="h-4 w-4 text-emerald-400 group-hover:text-emerald-500 transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                85+
              </div>
              <p className="text-xs text-muted-foreground">
                Available Resources
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem of the Month */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-card border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-glow-orange">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                Problem of the Month
              </CardTitle>
              <Badge
                variant="secondary"
                className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors duration-300"
              >
                September 2025
              </Badge>
            </div>
            <CardDescription>
              Challenge yourself with this month's featured problem on Taxicab Geometry.
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-muted-foreground">
            <div className="space-y-8">
              <div>
                <p>Taxicab geometry is a type of non-Euclidean geometry where the distance between two points is measured as the minimum travel needed along a grid (like city blocks or a cartesian coordinate plane), unlike Euclidean geometry, which measures the straight-line "as-the-crow-flies" distance.</p>
                <img src={image1} alt="City grid showing Taxicab vs Euclidean distance" className="mx-auto my-4 rounded-lg shadow-md max-w-xl" />
                <p className="text-center text-sm">Two possible paths for Taxicab distance are drawn above as well as the Euclidean distance in pink.</p>
              </div>

              <div className="bg-card/50 p-4 rounded-lg border border-border/50">
                <h4 className="font-semibold text-lg text-foreground">Example 1</h4>
                <p>The taxicab distance between the point (2, 4) and (6, 3) is calculated as 5 while the euclidean distance calculated with the pythagorean formula is √1² + 4² = √17.</p>
                <img src={image2} alt="Coordinate plane showing points (2,4) and (6,3)" className="mx-auto my-4 rounded-lg shadow-md max-w-sm" />
              </div>

              <div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Problem 1</h3>
                <p>Calculate the Taxicab Distance between the two points below. Try multiple paths, is the distance between the two points always the same?</p>
                <img src={image3} alt="Coordinate plane for Problem 1" className="mx-auto my-4 rounded-lg shadow-md max-w-sm" />
              </div>

              <div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Problem 2</h3>
                <p>Draw a "circle" of radius 5 in Taxicab Geometry. Pick a center, and connect all points that are 5 units away from the center.</p>
                <p className="text-sm">Note: Non-integer coordinates and fractional distances are allowed in Taxicab Geometry.</p>
                <img src={image4} alt="Empty coordinate plane for Problem 2" className="mx-auto my-4 rounded-lg shadow-md max-w-sm" />
              </div>

              <div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Problem 3</h3>
                <p>Calculate π in Taxicab Geometry.</p>
                <div className="bg-card/50 p-4 rounded-lg border border-border/50 mt-2">
                    <p><span className="font-bold text-accent">Hint / Example 2:</span> Triangle congruence and similarity theorems work differently in Taxicab Geometry. The two triangles below share all three angle measures and also two side lengths. Using our knowledge from Euclidean Geometry, they would be congruent by AAS. However we can see that those triangles are not congruent as the third side length is not the same. Taxicab Geometry has a different set of congruence theorems, and may require more than just 3 angles or side lengths. From this example we can also see that ASASA (and also AASS, ASS, AAAS, etc) does not apply to Taxicab Geometry.</p>
                    <img src={image5} alt="Example of non-congruent triangles in taxicab geometry" className="mx-auto my-4 rounded-lg shadow-md max-w-md" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Problem 4</h3>
                <p>Find a triangle congruence theorem for Taxicab Geometry.</p>
                <img src={image6} alt="Empty coordinate plane for Problem 4" className="mx-auto my-4 rounded-lg shadow-md max-w-sm" />
              </div>

              <div className="border-t border-border/50 pt-8">
                <p>That's it! Hope you enjoyed Taxicab geometry.</p>
                <div className="text-center pt-4">
                  <h3 className="text-2xl font-bold">Ready to Submit?</h3>
                  <p className="max-w-xl mx-auto my-2">Click the button below to submit your answers through our Google Form. Good luck!</p>
                  <a
                    href="https://forms.gle/L9moW8UGyz9VVRGf9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-primary hover:shadow-glow-purple transition-all duration-300 text-white font-semibold px-8 py-4 text-lg mt-4"
                    >
                      Submit Your Answers
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="pt-4 text-sm">
                <h4 className="font-semibold text-lg text-foreground">Learn More</h4>
                <p>If you want to learn more, Taxicab geometry also has applications in biochemistry to assess the differences in discrete frequency distributions such as in the RNA splicing positional distributions of hexamers. You can read more at <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3131313/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">this research paper</a>.</p>
                <p>For additional problems, check out these resources:</p>
                <ul className="list-disc pl-5">
                  <li><a href="https://scholarworks.umt.edu/cgi/viewcontent.cgi?article=1018&context=tme" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">University of Montana</a></li>
                  <li><a href="https://www.math.uci.edu/~mathcircle/materials/M5L1.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UC Irvine Math Circle</a></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Connect Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl"></div>
          <div className="relative backdrop-blur-sm bg-card/30 border border-border/50 rounded-3xl p-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Stay Connected
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join our community on Discord for announcements, discussions,
                and competition updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-2">
                <a
                  href="https://discord.gg/HeAM7TYV2y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-8 py-4 text-lg hover:shadow-lg hover:shadow-[#5865F2]/25 transition-all duration-300">
                    Join Discord Server
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://www.facebook.com/groups/evhsmathclub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary font-semibold px-8 py-4 text-lg transition-all duration-300"
                  >
                    Follow on Facebook
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12"></div>
    </div>
  );
};

export default Home;