import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar } from "lucide-react";

const Officers = () => {
  const officers = [
    {
      name: "Sarah Chen",
      role: "President",
      year: "Senior",
      bio: "Leading the club with passion for number theory and competition mathematics. 4x AIME qualifier.",
      email: "sarah.chen@school.edu",
      joinedYear: "2021",
      achievements: ["USAMO Qualifier", "AMC 12 Perfect Score"],
    },
    {
      name: "Marcus Rodriguez",
      role: "Vice President",
      year: "Junior",
      bio: "Specializes in combinatorics and graph theory. Organizes our weekly problem sessions.",
      email: "marcus.r@school.edu",
      joinedYear: "2022",
      achievements: ["AIME Qualifier", "Regional Mathcounts Champion"],
    },
    {
      name: "Emily Zhang",
      role: "Secretary",
      year: "Junior",
      bio: "Keeps us organized and runs our social media. Expert in probability and statistics.",
      email: "emily.zhang@school.edu",
      joinedYear: "2022",
      achievements: ["Statistics Bowl Winner", "AMC 10 Honor Roll"],
    },
    {
      name: "David Kim",
      role: "Treasurer",
      year: "Sophomore",
      bio: "Manages club finances and coordinates fundraising events. Loves geometry and proofs.",
      email: "david.kim@school.edu",
      joinedYear: "2023",
      achievements: ["Geometry Competition Winner", "Math League All-Star"],
    },
    {
      name: "Alex Thompson",
      role: "Competition Coordinator",
      year: "Senior",
      bio: "Organizes our participation in math competitions and training sessions.",
      email: "alex.t@school.edu",
      joinedYear: "2021",
      achievements: ["ARML Team Captain", "Calculus Competition Winner"],
    },
    {
      name: "Maya Patel",
      role: "Outreach Director",
      year: "Junior",
      bio: "Connects with middle schools and promotes math education in our community.",
      email: "maya.patel@school.edu",
      joinedYear: "2022",
      achievements: ["Tutoring Excellence Award", "Community Service Medal"],
    },
  ];

  const advisor = {
    name: "Dr. Jennifer Martinez",
    role: "Faculty Advisor",
    department: "Mathematics Department",
    bio: "PhD in Pure Mathematics from MIT. Specializes in algebraic topology and has been mentoring math competition students for over 15 years.",
    email: "j.martinez@school.edu",
    officeHours: "Tuesday & Thursday, 2:00-4:00 PM",
    office: "Math Building, Room 312",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Club Officers</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the dedicated team leading our math club to new heights of academic excellence.
        </p>
      </div>

      {/* Officers Grid */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-8">Student Officers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officers.map((officer, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{officer.name}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{officer.role}</Badge>
                    <Badge variant="outline">{officer.year}</Badge>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{officer.bio}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{officer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {officer.joinedYear}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Achievements</h4>
                  <div className="flex flex-wrap gap-1">
                    {officer.achievements.map((achievement, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advisor Section */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-8">Faculty Advisor</h2>
        <Card className="max-w-2xl bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-foreground">{advisor.name}</h3>
              <div className="flex items-center gap-2">
                <Badge className="bg-primary text-primary-foreground">{advisor.role}</Badge>
                <Badge variant="outline">{advisor.department}</Badge>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{advisor.bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{advisor.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{advisor.officeHours}</span>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground">
                  <span className="font-medium">Office:</span> {advisor.office}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Officers;