import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Mail, User, MessageSquare, Send, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Form() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const {
    register,
    formState: { errors },
    watch
  } = useForm();

  const watchedFields = watch();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // The form will submit naturally to FormSubmit
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  const formFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "John Doe",
      icon: <User className="w-5 h-5" />,
      validation: { required: "Name is required" }
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "john@example.com",
      icon: <Mail className="w-5 h-5" />,
      validation: {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Enter a valid email address"
        }
      }
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Let's work together",
      icon: <MessageSquare className="w-5 h-5" />,
      validation: { required: "Subject is required" }
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "kapilsharma09311@gmail.com",
      link: "mailto:kapilsharma09311@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 76784 21896",
      link: "tel:+917678421896"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Delhi, India",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Kapilshrma99", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/kapil-sharma-developer", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/Kapilsharma0112", label: "Twitter" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Let's Start a Conversation</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're someone looking to build something awesome together.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="font-semibold text-gray-800 mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-800">Available for freelance</span>
                </div>
                <p className="text-sm text-gray-600">
                  I'm currently available for freelance work and new opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div  className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h2>

              {/* Note: In your actual implementation, replace this div with a form element */}
              <form action="https://formsubmit.co/kapilsharma09311@gmail.com" method="POST" className="space-y-6">
                {/* Form Fields */}
                {formFields.map((field, index) => (
                  <div key={field.name} className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {field.icon}
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        // {...register(field.name, field.validation)}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                          errors[field.name]
                            ? 'border-red-300 focus:border-red-500'
                            : focusedField === field.name
                            ? 'border-blue-500 focus:border-purple-500'
                            : watchedFields[field.name]
                            ? 'border-green-300'
                            : 'border-gray-200 focus:border-blue-400'
                        } focus:outline-none focus:ring-2 focus:ring-blue-200`}
                        placeholder={field.placeholder}
                      />
                      {/* Success Indicator */}
                      {watchedFields[field.name] && !errors[field.name] && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors[field.name].message}
                      </p>
                    )}
                  </div>
                ))}

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      name="message"
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none ${
                        errors.message
                          ? 'border-red-300 focus:border-red-500'
                          : focusedField === "message"
                          ? 'border-blue-500 focus:border-purple-500'
                          : watchedFields.message
                          ? 'border-green-300'
                          : 'border-gray-200 focus:border-blue-400'
                      } focus:outline-none focus:ring-2 focus:ring-blue-200`}
                      placeholder="Tell me about your project, ideas, or just say hello..."
                    />
                    {watchedFields.message && !errors.message && (
                      <div className="absolute right-3 top-4">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  // onClick={handleSubmit}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-blue-500/25'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>

                {/* Form Footer */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  Your information is safe and will never be shared with third parties.
                </p>
              </form>

              {/* Implementation Note */}
              {/* <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-sm text-blue-800">
                  <strong>Implementation Note:</strong> Replace the outer div with a form element and add these attributes:
                </p>
                <code className="text-xs bg-blue-100 px-2 py-1 rounded mt-2 block">
                  action="https://formsubmit.co/kapilsharma09311@gmail.com" method="POST"
                </code>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}