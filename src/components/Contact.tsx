import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const links = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/noufmb2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/noufba7",
    },
    {
      icon: ExternalLink,
      label: "Lume Project",
      href: "https://github.com/noufba7/Lume-apple-academy-foundation",
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-8">
          Let's Connect
        </h2>
        
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new opportunities, collaborations, 
          or just connecting with fellow developers and innovators.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group p-8 rounded-2xl bg-card hover:bg-accent/10 border border-border hover:border-accent transition-all duration-300 flex flex-col items-center text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="w-12 h-12 mb-4 text-foreground group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {link.label}
              </h3>
            </a>
          ))}
        </div>

        <div className="pt-8">
          <a href="mailto:nouf.baabad7@gmail.com" className="inline-block">
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-2 hover:bg-secondary transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send me an email
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
