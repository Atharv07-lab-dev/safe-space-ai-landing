import { FileText, Headphones, Image as ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const features = [
  {
    title: "Text Analysis",
    description: "Detect harmful or unsafe language.",
    icon: FileText,
    color: "blue",
    action: "modal",
  },
  {
    title: "Audio Detection",
    description: "Identify unsafe audio content.",
    icon: Headphones,
    color: "orange",
    link: "https://f5beb7e58fcd6ebd7f.gradio.live/",
  },
  {
    title: "Image Moderation",
    description: "Analyze visuals for explicit material.",
    icon: ImageIcon,
    color: "green",
    link: "https://superably-nonargumentative-dotty.ngrok-free.dev/",
  },
  {
    title: "Video Piracy Detection",
    description: "Detect pirated videos using blockchain.",
    icon: Video,
    color: "purple",
    link: "https://rachelle-opprobrious-maurita.ngrok-free.dev/",
  },
];

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeatureClick = (feature: typeof features[0]) => {
    if (feature.action === "modal") {
      setIsModalOpen(true);
    } else if (feature.link) {
      window.open(feature.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Comprehensive Safety Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced AI-powered tools to protect your digital content across all formats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              blue: "bg-accent-blue/10 text-accent-blue",
              orange: "bg-accent-orange/10 text-accent-orange",
              green: "bg-accent-green/10 text-accent-green",
              purple: "bg-accent-purple/10 text-accent-purple",
            };
            const iconBgClass = colorClasses[feature.color as keyof typeof colorClasses].split(" ")[0];
            const iconColorClass = colorClasses[feature.color as keyof typeof colorClasses].split(" ")[1];
            
            return (
              <Card
                key={feature.title}
                className="gradient-card border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleFeatureClick(feature)}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-2xl ${iconBgClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-8 h-8 ${iconColorClass}`} aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full group-hover:shadow-medium transition-shadow"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    {feature.action === "modal" ? "Coming Soon" : "Try Now"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Text Analysis Coming Soon</DialogTitle>
            <DialogDescription className="text-base pt-4">
              Our advanced text analysis feature is currently under development. Stay tuned for updates!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end pt-4">
            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Features;
