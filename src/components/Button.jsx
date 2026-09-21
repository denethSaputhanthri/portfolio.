import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon: Icon,
  iconRight: IconRight,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-bg hover:bg-accent-hover shadow-sm hover:shadow-md",
    outline:
      "border border-border text-text-primary hover:border-accent/50 hover:text-accent",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-card",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={16} />}
      {children}
      {IconRight && <IconRight size={16} />}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={combinedClassName}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={combinedClassName}
      {...props}
    >
      {content}
    </motion.button>
  );
}
