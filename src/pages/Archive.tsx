import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, Target, Download, Award } from "lucide-react";

const Archive = () => {
  const tournaments = [
    {
      name: "Regional Mathematics Competition",
      year: "2024",
      date: "March 15, 2024",
      participants: 8,
      results: "1st Place Team, 3rd Place Individual (Sarah Chen)",
      highlights: ["Perfect team score in Algebra round", "Highest individual score in 5 years"],
      problemsAvailable: true,
    },
    {
      name: "State Mathematics League",
      year: "2024",
      date: "February 20, 2024",
      participants: 12,
      results: "2nd Place Team",
      highlights: ["Best performance in Geometry", "Top 10 individual finishes: 3 students"],
      problemsAvailable: true,
    },
    {
      name: "AMC 10/12 School Competition",
      year: "2024",
      date: "February 8, 2024",
      participants: 47,
      results: "15 students qualified for AIME",
      highlights: ["School record for AIME qualifiers", "3 perfect scores on AMC 10"],
      problemsAvailable: false,
    },
    {
      name: "Local University Math Contest",
      year: "2023",
      date: "November 18, 2023",
      participants: 6,
      results: "1st Place Team, 1st Place Individual (Marcus Rodriguez)",
      highlights: ["Undefeated in all 4 rounds", "First-ever team championship"],
      problemsAvailable: true,
    },
    {
      name: "Integration Bee Championship",
      year: "2023",
      date: "October 25, 2023",
      participants: 24,
      results: "Champion: Alex Thompson",
      highlights: ["Solved 15 integrals in final round", "New school record"],
      problemsAvailable: true,
    },
    {
      name: "Regional Mathematics Competition",
      year: "2023",
      date: "March 10, 2023",
      participants: 6,
      results: "3rd Place Team",
      highlights: ["Strong showing in Number Theory round"],
      problemsAvailable: true,
    },
  ];

  const integrationBees = [
    {
      year: "2024",
      date: "October 30, 2024",
      winner: "David Kim",
      runnerUp: "Sarah Chen",
      participants: 28,
      finalProblem: "∫(x³ + 2x² - x + 1)/(x² + 1)² dx",
      recordTime: "45 seconds",
    },
    {
      year: "2023", 
      date: "October 25, 2023",
      winner: "Alex Thompson",
      runnerUp: "Emily Zhang",
      participants: 24,
      finalProblem: "∫sin⁴(x)cos²(x) dx",
      recordTime: "52 seconds",
    },
    {
      year: "2022",
      date: "October 20, 2022", 
      winner: "Sarah Chen",
      runnerUp: "Marcus Rodriguez",
      participants: 19,
      finalProblem: "∫x²e^(-x²) dx",
      recordTime: "1 minute 8 seconds",
    },
  ];

  const stats = [
    {
      label: "Total Competitions",
      value: "24",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      label: "Team Championships",
      value: "8",
      icon: <Award className="h-5 w-5" />,
    },
    {
      label: "Individual Awards",
      value: "32",
      icon: <Target className="h-5 w-5" />,
    },
    {
      label: "Total Participants",
      value: "156",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Competition Archive</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive record of our math club's competition history and achievements.
        </p>
      </div>

      {/* Stats Overview */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="pt-6 space-y-2">
                <div className="flex justify-center text-primary mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tournament History */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Tournament History</h2>
        <div className="space-y-6">
          {tournaments.map((tournament, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{tournament.name}</CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {tournament.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {tournament.participants} participants
                      </span>
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {tournament.year}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Results</h4>
                  <p className="text-muted-foreground">{tournament.results}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Highlights</h4>
                  <ul className="space-y-1">
                    {tournament.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {tournament.problemsAvailable && (
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download Problems & Solutions
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Integration Bee History */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Integration Bee Champions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationBees.map((bee, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Integration Bee {bee.year}</CardTitle>
                  <Trophy className="h-5 w-5 text-accent" />
                </div>
                <CardDescription>{bee.date}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Champion:</span>
                    <span className="font-semibold text-accent">{bee.winner}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Runner-up:</span>
                    <span className="font-medium">{bee.runnerUp}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Participants:</span>
                    <span className="font-medium">{bee.participants}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Record Time:</span>
                    <span className="font-medium">{bee.recordTime}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Final Problem</h4>
                  <div className="bg-card p-3 rounded border text-sm font-mono text-center">
                    {bee.finalProblem}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  View All Problems
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Want to Add to Our Legacy?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our competition team and help write the next chapter in our math club's success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              Join Competition Team
            </Button>
            <Button variant="outline">
              View Upcoming Competitions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Archive;