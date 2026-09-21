import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import SocialLinks from "../components/SocialLinks";
import Button from "../components/Button";
import { useToast } from "../components/Toast";
import { profile } from "../data/profile";
import { Send, Mail, MapPin, AlertCircle, CheckCircle} from "lucide-react";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log("Service ID:", serviceId);
      console.log("Template ID:", templateId);
      console.log("Public Key:", publicKey);
      

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."

        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text || "Failed to send message. Please try again later.",
      });
      
    } finally {
      setIsLoading(false);
    } 

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      addToast("Please fill in all fields.", "error");
      return;
    }

    // Simulate submission — replace with Formspree, EmailJS, etc.
    // Example Formspree: fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: new FormData(e.target) })
    setTimeout(() => {
      addToast("Message sent! I'll get back to you soon.", "success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact">
      <div className="section-divider" />
      <div className="section-container">
        <SectionTitle
          label="Contact"
          title="Let's build something meaningful."
          description="Have an idea, project, or opportunity? Feel free to get in touch."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — Info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="text-text-secondary leading-relaxed mb-6">
                I'm currently available for freelance work, collaboration, and
                full-time opportunities. Whether you have a project in mind or
                just want to say hello — I'd love to hear from you.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300">
                  <Mail size={16} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Email</div>
                  <div className="text-sm">{profile.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Location</div>
                  <div className="text-sm">{profile.location}</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider mb-3 font-medium">
                Social
              </p>
              <SocialLinks size={20} />
            </div>
          </motion.div>

          {/* Right — Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm text-text-secondary mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent/50 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm text-text-secondary mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent/50 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm text-text-secondary mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent/50 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                icon={Send}
                className={`w-full justify-center ${
                  isLoading ? "opacity-70 pointer-events-none" : ""
                }`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
