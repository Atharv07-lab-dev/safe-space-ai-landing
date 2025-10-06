import { Shield, Zap, Lock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About SafeSpace AI
            </h2>
            <p className="text-xl text-muted-foreground">
              Leading the way in AI-powered content moderation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-2xl bg-muted/30 animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your data is encrypted and processed with the highest security standards
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-muted/30 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Real-time analysis powered by cutting-edge AI models
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-muted/30 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Highly Accurate</h3>
              <p className="text-muted-foreground">
                Advanced machine learning ensures precise content detection
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-center">
              SafeSpace AI is committed to creating safer digital environments through innovative AI technology.
              Our platform combines state-of-the-art machine learning with practical, easy-to-use tools for
              content moderation across multiple media types.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
