import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, BookOpen, Trophy, ExternalLink } from "lucide-react";
import mathHeroImage from "@/assets/math-hero.jpg";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Welcome to <span className="block">Math Club</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Join us in exploring the beauty of mathematics through competitions, 
                problem-solving, and collaborative learning. Where passion meets precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow-purple transition-all duration-300 text-white font-semibold px-8 py-4 text-lg">
                  Join Our Discord
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 px-8 py-4 text-lg">
                  View Resources
                </Button>
              </div>
            </div>
            <div className="lg:order-last animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative group">
                <img 
                  src={mathHeroImage} 
                  alt="Mathematical equations and formulas" 
                  className="w-full h-auto rounded-3xl shadow-2xl group-hover:shadow-glow-cyan transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-border/50 hover:shadow-glow-purple hover:border-primary/30 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Next Meeting</CardTitle>
              <Calendar className="h-4 w-4 text-primary group-hover:text-primary-glow transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Dec 15</div>
              <p className="text-xs text-muted-foreground">
                Room 204 • 3:30 PM
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-glow-cyan hover:border-cyan-500/30 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Members</CardTitle>
              <Users className="h-4 w-4 text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">47</div>
              <p className="text-xs text-muted-foreground">
                +3 this month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-glow-orange hover:border-accent/30 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Competitions</CardTitle>
              <Trophy className="h-4 w-4 text-accent group-hover:text-accent-hover transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-secondary bg-clip-text text-transparent">12</div>
              <p className="text-xs text-muted-foreground">
                This year
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:shadow-glow-purple hover:border-emerald-400/30 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Resources</CardTitle>
              <BookOpen className="h-4 w-4 text-emerald-400 group-hover:text-emerald-500 transition-colors duration-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">85+</div>
              <p className="text-xs text-muted-foreground">
                Practice problems
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
              <CardTitle className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">Problem of the Month</CardTitle>
              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors duration-300">
                December 2024
              </Badge>
            </div>
            <CardDescription>
              Challenge yourself with this month's featured problem
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50">
              <p className="text-lg font-medium mb-4 font-mono">
                Find the sum of all positive integers n such that when n is divided by 13, 
                the quotient and remainder are both perfect squares.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Difficulty: ⭐⭐⭐⭐</span>
                <span>Source: AMC 12</span>
                <span>Due: December 20</span>
              </div>
            </div>
            <Button variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-300 font-semibold">
              Submit Solution
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Connect Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl"></div>
          <div className="relative backdrop-blur-sm bg-card/30 border border-border/50 rounded-3xl p-12">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">Stay Connected</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join our community on Discord for daily problems, discussions, and competition updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-8 py-4 text-lg hover:shadow-lg hover:shadow-[#5865F2]/25 transition-all duration-300">
                  Join Discord Server
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary font-semibold px-8 py-4 text-lg transition-all duration-300">
                  Follow on Facebook
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;