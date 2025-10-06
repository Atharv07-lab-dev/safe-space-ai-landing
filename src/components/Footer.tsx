import { Shield, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" aria-label="SafeSpace AI Logo" />
            <span className="text-lg font-semibold text-foreground">SafeSpace AI</span>
          </div>

          <p className="text-muted-foreground text-center md:text-left">
            © 2025 SafeSpace AI. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Terms of Service"
            >
              Terms
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10"
              aria-label="Visit our LinkedIn page"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10"
              aria-label="Visit our GitHub repository"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10"
              aria-label="Follow us on Twitter"
              asChild
            >
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
