import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, BookOpen, FileText } from "lucide-react";

const Resources = () => {
  // Data for the practice resources section
  const practiceResources = [
    {
      name: "AMC 8 Problems",
      source: "Art of Problem Solving",
      description: "A comprehensive list of past AMC 8 (and AJHSME) problems and solutions.",
      url: "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions",
    },
    {
      name: "AMC 10 Problems",
      source: "Art of Problem Solving",
      description: "A comprehensive list of past AMC 10 problems and solutions.",
      url: "https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions",
    },
    {
      name: "AMC 12 Problems",
      source: "Art of Problem Solving",
      description: "A comprehensive list of past AMC 12 problems and solutions.",
      url: "https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions",
    },
    {
      name: "AIME Problems",
      source: "Art of Problem Solving",
      description: "A comprehensive list of past AIME problems and solutions.",
      url: "https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions",
    },
    {
      name: "USAMO Problems",
      source: "Art of Problem Solving",
      description: "A comprehensive list of past USAMO problems and solutions.",
      url: "https://artofproblemsolving.com/wiki/index.php/USAMO_Problems_and_Solutions",
    },
    {
      name: "USAJMO Problems",
      source: "Art of Problem Solving",
      description: "A comprehensive list of past USAJMO problems and solutions.",
      url: "https://artofproblemsolving.com/wiki/index.php/USAJMO_Problems_and_Solutions",
    },
    {
      name: "Mock AMC 10 Contests",
      source: "Art of Problem Solving",
      description: "Community-created mock AMC 10 contests for practice.",
      url: "https://artofproblemsolving.com/wiki/index.php/Mock_Amc_10",
    },
    {
      name: "Mock AMC 12 Contests",
      source: "Art of Problem Solving",
      description: "Community-created mock AMC 12 contests for practice.",
      url: "https://artofproblemsolving.com/wiki/index.php/Mock_Amc_12",
    },
    {
      name: "Mock AIME Contests",
      source: "Art of Problem Solving",
      description: "Community-created mock AIME contests for practice.",
      url: "https://artofproblemsolving.com/wiki/index.php/Mock_AIME",
    },
    {
      name: "AMC Trivial",
      source: "amctrivial.com",
      description: "A math competition problem generator made by a former EVHS student!",
      url: "https://amctrivial.com/",
    },
  ];

  // Data for the club resources section
  const clubResources = [
    {
      name: "Official Linktree",
      description: "Find all our official links, social media, and important announcements in one place.",
      url: "https://linktr.ee/evhsmathclub",
      icon: <ExternalLink className="h-5 w-5" />,
      type: "Link Hub",
    },
    {
      name: "Number Theory Practice",
      description: "A document filled with practice problems to sharpen your number theory skills.",
      url: "https://docs.google.com/document/d/1nHO4_Nae72A35gl7kC386a1pqRwq-w20XC1ppqh-eq4/edit?usp=sharing",
      icon: <BookOpen className="h-5 w-5" />,
      type: "Practice Problems",
    },
    {
      name: "Number Theory Cheat Sheet",
      description: "A handy cheat sheet with key theorems, formulas, and concepts for number theory.",
      url: "https://docs.google.com/document/d/10VpdyFKZe6e2RitlLPz5Ws6i8Jv4VrLUzd5_HHWilQs/edit?usp=sharing",
      icon: <FileText className="h-5 w-5" />,
      type: "Reference",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Resources</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Access our collection of study materials, practice problems, and educational resources.
        </p>
      </div>

      {/* Practice Problems & Mock Exams */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Practice Problems & Mock Exams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceResources.map((exam, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 flex flex-col">
              <CardHeader>
                <CardTitle>{exam.name}</CardTitle>
                <CardDescription>{exam.source}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{exam.description}</p>
                <Button variant="outline" size="sm" className="w-full mt-auto" asChild>
                  <a href={exam.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Resource
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Club Resources */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Club Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubResources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {resource.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <CardDescription>{resource.type}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{resource.description}</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open Link
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Need Help?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Can't find what you're looking for? Reach out to our officers or join our Discord for real-time help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white" asChild>
              <a href="https://discord.gg/HeAM7TYV2y" target="_blank" rel="noopener noreferrer">
                Ask on Discord
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:mathclub.evhs@gmail.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;