import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, BookOpen, Trophy, ExternalLink } from "lucide-react";
import mathHeroImage from "@/assets/math-hero.jpg";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Welcome to <span className="text-primary">Math Club</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Join us in exploring the beauty of mathematics through competitions, 
                problem-solving, and collaborative learning. Where passion meets precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
                  Join Our Discord
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Resources
                </Button>
              </div>
            </div>
            <div className="lg:order-last">
              <img 
                src={mathHeroImage} 
                alt="Mathematical equations and formulas" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Meeting</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Dec 15</div>
              <p className="text-xs text-muted-foreground">
                Room 204 • 3:30 PM
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">
                +3 this month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Competitions</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                This year
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resources</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85+</div>
              <p className="text-xs text-muted-foreground">
                Practice problems
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem of the Month */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Problem of the Month</CardTitle>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                December 2024
              </Badge>
            </div>
            <CardDescription>
              Challenge yourself with this month's featured problem
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-lg font-medium mb-4">
                Find the sum of all positive integers n such that when n is divided by 13, 
                the quotient and remainder are both perfect squares.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Difficulty: ⭐⭐⭐⭐</span>
                <span>Source: AMC 12</span>
                <span>Due: December 20</span>
              </div>
            </div>
            <Button variant="outline" className="w-full sm:w-auto">
              Submit Solution
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Connect Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Stay Connected</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community on Discord for daily problems, discussions, and competition updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
              Join Discord Server
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">
              Follow on Facebook
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;