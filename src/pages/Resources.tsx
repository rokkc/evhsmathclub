import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, BookOpen, Presentation, FileText, Calculator } from "lucide-react";

const Resources = () => {
  const presentations = [
    {
      title: "Introduction to Number Theory",
      date: "November 2024",
      presenter: "Sarah Chen",
      description: "Covering modular arithmetic, prime numbers, and Diophantine equations",
      type: "Slides",
      downloadUrl: "#",
    },
    {
      title: "Combinatorics Workshop",
      date: "October 2024",
      presenter: "Marcus Rodriguez",
      description: "Permutations, combinations, and the pigeonhole principle",
      type: "Slides + Recording",
      downloadUrl: "#",
    },
    {
      title: "Geometry Problem Solving",
      date: "September 2024",
      presenter: "David Kim",
      description: "Advanced geometric techniques for competition problems",
      type: "Slides",
      downloadUrl: "#",
    },
    {
      title: "Probability & Statistics Deep Dive",
      date: "August 2024",
      presenter: "Emily Zhang",
      description: "From basic probability to advanced statistical methods",
      type: "Slides + Worksheets",
      downloadUrl: "#",
    },
  ];

  const mockExams = [
    {
      name: "AMC 10 Practice Test #1",
      difficulty: "Intermediate",
      problems: 25,
      timeLimit: "75 minutes",
      downloadUrl: "#",
    },
    {
      name: "AMC 12 Practice Test #1",
      difficulty: "Advanced",
      problems: 25,
      timeLimit: "75 minutes",
      downloadUrl: "#",
    },
    {
      name: "AIME Practice Test #1",
      difficulty: "Expert",
      problems: 15,
      timeLimit: "3 hours",
      downloadUrl: "#",
    },
    {
      name: "Local Competition Prep",
      difficulty: "Beginner",
      problems: 20,
      timeLimit: "60 minutes",
      downloadUrl: "#",
    },
  ];

  const externalResources = [
    {
      name: "Art of Problem Solving (AoPS)",
      description: "The premier online resource for competition mathematics",
      url: "https://artofproblemsolving.com",
      type: "Website",
      icon: <Calculator className="h-5 w-5" />,
    },
    {
      name: "Khan Academy",
      description: "Free online courses covering all levels of mathematics",
      url: "https://khanacademy.org",
      type: "Online Courses",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Wolfram MathWorld",
      description: "Comprehensive mathematics encyclopedia",
      url: "https://mathworld.wolfram.com",
      type: "Reference",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: "MIT OpenCourseWare",
      description: "Free university-level mathematics courses",
      url: "https://ocw.mit.edu",
      type: "Courses",
      icon: <Presentation className="h-5 w-5" />,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Expert":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Resources</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Access our collection of study materials, practice problems, and educational resources.
        </p>
      </div>

      {/* Past Presentations */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Past Presentations & Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {presentations.map((presentation, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{presentation.title}</CardTitle>
                    <CardDescription>
                      By {presentation.presenter} • {presentation.date}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{presentation.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{presentation.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Materials
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mock Exams */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Practice Tests & Mock Exams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockExams.map((exam, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight">{exam.name}</CardTitle>
                <Badge className={getDifficultyColor(exam.difficulty)} variant="secondary">
                  {exam.difficulty}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Problems:</span>
                    <span className="font-medium">{exam.problems}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Limit:</span>
                    <span className="font-medium">{exam.timeLimit}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* External Resources */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">External Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {externalResources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {resource.icon}
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{resource.description}</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
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
            <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
              Ask on Discord
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              Contact Officers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;